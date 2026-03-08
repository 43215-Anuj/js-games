function CMenu(){

    var INCREASE_X = 8;

    // ===== FLAGS =====
    var SHOW_CREDITS = false;
    var SHOW_DELETE = false;

    var _bUpdate = false;
    var _bAttacking;
    var _iTimeElaps;
    var _pStartPos;
    var _pEndPos;
    var _aEnemies;
    var _oHero;

    var _oButPlay;
    var _oCreditsBut = null;

    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
    var _oBg;
    var _oAudioToggle;
    var _oButFullscreen;
    var _oButDelete = null;
    var _oAreYouSurePanel;
    var _oMaskCharacters;

    var _pStartPosAudio;
    var _pStartPosCredits;
    var _pStartPosFullscreen;
    var _pStartPosDelete;

    this._init = function(){

        _bUpdate = false;
        _bAttacking = false;
        _iTimeElaps = 0;

        _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_menu'));
        s_oStage.addChild(_oBg);

        // PLAY BUTTON
        var oSpriteStart = s_oSpriteLibrary.getSprite('but_play');
        _oButPlay = new CGfxButton(
            CANVAS_WIDTH / 2,
            CANVAS_HEIGHT / 2 + 210,
            oSpriteStart,
            s_oStage
        );
        _oButPlay.addEventListener(ON_MOUSE_UP, this._onStart, this, 0);

        // AUDIO BUTTON
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            var oSpriteAudio = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {
                x: CANVAS_WIDTH - (oSpriteAudio.height / 2) - 10,
                y: (oSpriteAudio.height / 2) + 10
            };

            _oAudioToggle = new CToggle(
                _pStartPosAudio.x,
                _pStartPosAudio.y,
                oSpriteAudio,
                s_bAudioActive,
                s_oStage
            );
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        }

        // ===== FULLSCREEN BUTTON (FIXED) =====
        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if (ENABLE_FULLSCREEN === false) {
            _fRequestFullScreen = false;
        }

        if (_fRequestFullScreen && screenfull.isEnabled) {
            var oSpriteFs = s_oSpriteLibrary.getSprite("but_fullscreen");
            _pStartPosFullscreen = {
                x: (oSpriteFs.width / 2) + 10,
                y: (oSpriteFs.height / 2) + 10
            };

            _oButFullscreen = new CToggle(
                _pStartPosFullscreen.x,
                _pStartPosFullscreen.y,
                oSpriteFs,
                s_bFullscreen,
                s_oStage
            );
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }

        // ===== MASK + HERO =====
        _oMaskCharacters = new createjs.Shape();
        _oMaskCharacters.graphics
            .beginFill("rgba(255,255,0,0.01)")
            .drawRect(480, 850, 970, 150);
        s_oStage.addChild(_oMaskCharacters);

        _pStartPos = { x: 1430, y: CANVAS_HEIGHT / 2 - 25 };
        _pEndPos = { x: 500, y: CANVAS_HEIGHT / 2 - 25 };

        _oHero = new CHero(_pStartPos.x, _pStartPos.y, 0, 0, s_oStage);
        _oHero.setMask(_oMaskCharacters);

        _aEnemies = [];
        var iX = _pStartPos.x + 80;
        for (var k = 0; k < 3; k++) {
            _aEnemies[k] = new CEnemy(k, iX, _pStartPos.y, 0, 0, s_oStage);
            _aEnemies[k].setMask(_oMaskCharacters);
            iX += 80;
        }

        // EXIT DOORS
        var oExitDoor = createBitmap(s_oSpriteLibrary.getSprite("exit_door_menu"));
        oExitDoor.x = 465;
        oExitDoor.y = 894;
        s_oStage.addChild(oExitDoor);

        var oExitDoor2 = createBitmap(s_oSpriteLibrary.getSprite("exit_door_menu"));
        oExitDoor2.x = 1460;
        oExitDoor2.y = 894;
        oExitDoor2.scaleX = -1;
        s_oStage.addChild(oExitDoor2);

        this.refreshButtonPos();
        this._resetCharacters();

        _oAreYouSurePanel = new CAreYouSurePanel(s_oStage);

        var oFade = new createjs.Shape();
        oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(oFade);

        createjs.Tween.get(oFade).to({ alpha: 0 }, 1000).call(function () {
            oFade.visible = false;
        });

        _bUpdate = true;
    };

    this.unload = function () {
        _bUpdate = false;

        _oButPlay.unload();

        if (_oCreditsBut) {
            _oCreditsBut.unload();
        }

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }

        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.unload();
        }

        s_oMenu = null;
        s_oStage.removeAllChildren();
    };

    this.refreshButtonPos = function () {

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.setPosition(
                _pStartPosAudio.x - s_iOffsetX,
                s_iOffsetY + _pStartPosAudio.y
            );
        }

        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.setPosition(
                _pStartPosFullscreen.x + s_iOffsetX,
                _pStartPosFullscreen.y + s_iOffsetY
            );
        }
    };

    this._resetCharacters = function () {

        if (_bAttacking) {
            var iX = _pStartPos.x;
            for (var i = 0; i < 3; i++) {
                _aEnemies[i].setX(iX);
                _aEnemies[i].setUpdate(true);
                _aEnemies[i].playAnim(DIR_LEFT, ANIM_ESCAPE);
                iX += 80;
            }
            _oHero.setX(iX);
            _oHero.playAnim(DIR_LEFT, ANIM_ATTACK);
        } else {
            _oHero.setX(_pStartPos.x);
            var iX = _pStartPos.x + 80;
            for (var j = 0; j < _aEnemies.length; j++) {
                _aEnemies[j].setX(iX);
                _aEnemies[j].setUpdate(true);
                _aEnemies[j].playAnim(DIR_LEFT, ANIM_WALK);
                iX += 80;
            }
            _oHero.playAnim(DIR_LEFT, ANIM_WALK);
        }

        _bAttacking = !_bAttacking;
    };

    this._onStart = function () {
        $(s_oMain).trigger("start_session");
        s_oMenu.unload();
        s_oMain.gotoLevelPanel();
    };

    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };

    this.resetFullscreenBut = function () {
        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.setActive(s_bFullscreen);
        }
    };

    this._onFullscreenRelease = function () {
        if (s_bFullscreen) {
            _fCancelFullScreen.call(window.document);
        } else {
            _fRequestFullScreen.call(window.document.documentElement);
        }
        sizeHandler();
    };

    this.update = function () {
        if (_bUpdate === false) {
            return;
        }

        _oHero.increaseX(-INCREASE_X);
        for (var k = 0; k < 3; k++) {
            _aEnemies[k].increaseX(-INCREASE_X);
        }

        if (_oHero.getX() < 0) {
            this._resetCharacters();
        }
    };

    s_oMenu = this;
    this._init();
}

var s_oMenu = null;
