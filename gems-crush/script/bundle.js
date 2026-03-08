! function(e) {
    var t = {};

    function s(i) {
        if (t[i]) return t[i].exports;
        var a = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(a.exports, a, a.exports, s), a.l = !0, a.exports
    }
    s.m = e, s.c = t, s.d = function(e, t, i) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (s.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) s.d(i, a, function(t) {
                return e[t]
            }.bind(null, a));
        return i
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "", s(s.s = 3)
}([function(e, t, s) {
    var i;
    ! function() {
        function a(e, t, s) {
            return e.call.apply(e.bind, arguments)
        }

        function n(e, t, s) {
            if (!e) throw Error();
            if (2 < arguments.length) {
                var i = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var s = Array.prototype.slice.call(arguments);
                    return Array.prototype.unshift.apply(s, i), e.apply(t, s)
                }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }

        function o(e, t, s) {
            return (o = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? a : n).apply(null, arguments)
        }
        var r = Date.now || function() {
            return +new Date
        };

        function l(e, t) {
            this.a = e, this.o = t || e, this.c = this.o.document
        }
        var h = !!window.FontFace;

        function d(e, t, s, i) {
            if (t = e.c.createElement(t), s)
                for (var a in s) s.hasOwnProperty(a) && ("style" == a ? t.style.cssText = s[a] : t.setAttribute(a, s[a]));
            return i && t.appendChild(e.c.createTextNode(i)), t
        }

        function u(e, t, s) {
            (e = e.c.getElementsByTagName(t)[0]) || (e = document.documentElement), e.insertBefore(s, e.lastChild)
        }

        function c(e) {
            e.parentNode && e.parentNode.removeChild(e)
        }

        function p(e, t, s) {
            t = t || [], s = s || [];
            for (var i = e.className.split(/\s+/), a = 0; a < t.length; a += 1) {
                for (var n = !1, o = 0; o < i.length; o += 1)
                    if (t[a] === i[o]) {
                        n = !0;
                        break
                    }
                n || i.push(t[a])
            }
            for (t = [], a = 0; a < i.length; a += 1) {
                for (n = !1, o = 0; o < s.length; o += 1)
                    if (i[a] === s[o]) {
                        n = !0;
                        break
                    }
                n || t.push(i[a])
            }
            e.className = t.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
        }

        function g(e, t) {
            for (var s = e.className.split(/\s+/), i = 0, a = s.length; i < a; i++)
                if (s[i] == t) return !0;
            return !1
        }

        function f(e, t, s) {
            function i() {
                r && a && n && (r(o), r = null)
            }
            t = d(e, "link", {
                rel: "stylesheet",
                href: t,
                media: "all"
            });
            var a = !1,
                n = !0,
                o = null,
                r = s || null;
            h ? (t.onload = function() {
                a = !0, i()
            }, t.onerror = function() {
                a = !0, o = Error("Stylesheet failed to load"), i()
            }) : setTimeout((function() {
                a = !0, i()
            }), 0), u(e, "head", t)
        }

        function m(e, t, s, i) {
            var a = e.c.getElementsByTagName("head")[0];
            if (a) {
                var n = d(e, "script", {
                        src: t
                    }),
                    o = !1;
                return n.onload = n.onreadystatechange = function() {
                    o || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (o = !0, s && s(null), n.onload = n.onreadystatechange = null, "HEAD" == n.parentNode.tagName && a.removeChild(n))
                }, a.appendChild(n), setTimeout((function() {
                    o || (o = !0, s && s(Error("Script load timeout")))
                }), i || 5e3), n
            }
            return null
        }

        function v() {
            this.a = 0, this.c = null
        }

        function y(e) {
            return e.a++,
                function() {
                    e.a--, w(e)
                }
        }

        function x(e, t) {
            e.c = t, w(e)
        }

        function w(e) {
            0 == e.a && e.c && (e.c(), e.c = null)
        }

        function T(e) {
            this.a = e || "-"
        }

        function k(e, t) {
            this.c = e, this.f = 4, this.a = "n";
            var s = (t || "n4").match(/^([nio])([1-9])$/i);
            s && (this.a = s[1], this.f = parseInt(s[2], 10))
        }

        function b(e) {
            var t = [];
            e = e.split(/,\s*/);
            for (var s = 0; s < e.length; s++) {
                var i = e[s].replace(/['"]/g, ""); - 1 != i.indexOf(" ") || /^\d/.test(i) ? t.push("'" + i + "'") : t.push(i)
            }
            return t.join(",")
        }

        function S(e) {
            return e.a + e.f
        }

        function G(e) {
            var t = "normal";
            return "o" === e.a ? t = "oblique" : "i" === e.a && (t = "italic"), t
        }

        function E(e) {
            var t = 4,
                s = "n",
                i = null;
            return e && ((i = e.match(/(normal|oblique|italic)/i)) && i[1] && (s = i[1].substr(0, 1).toLowerCase()), (i = e.match(/([1-9]00|normal|bold)/i)) && i[1] && (/bold/i.test(i[1]) ? t = 7 : /[1-9]00/.test(i[1]) && (t = parseInt(i[1].substr(0, 1), 10)))), s + t
        }

        function _(e, t) {
            this.c = e, this.f = e.o.document.documentElement, this.h = t, this.a = new T("-"), this.j = !1 !== t.events, this.g = !1 !== t.classes
        }

        function P(e) {
            if (e.g) {
                var t = g(e.f, e.a.c("wf", "active")),
                    s = [],
                    i = [e.a.c("wf", "loading")];
                t || s.push(e.a.c("wf", "inactive")), p(e.f, s, i)
            }
            M(e, "inactive")
        }

        function M(e, t, s) {
            e.j && e.h[t] && (s ? e.h[t](s.c, S(s)) : e.h[t]())
        }

        function O() {
            this.c = {}
        }

        function C(e, t) {
            this.c = e, this.f = t, this.a = d(this.c, "span", {
                "aria-hidden": "true"
            }, this.f)
        }

        function A(e) {
            u(e.c, "body", e.a)
        }

        function I(e) {
            return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + b(e.c) + ";font-style:" + G(e) + ";font-weight:" + e.f + "00;"
        }

        function B(e, t, s, i, a, n) {
            this.g = e, this.j = t, this.a = i, this.c = s, this.f = a || 3e3, this.h = n || void 0
        }

        function L(e, t, s, i, a, n, o) {
            this.v = e, this.B = t, this.c = s, this.a = i, this.s = o || "BESbswy", this.f = {}, this.w = a || 3e3, this.u = n || null, this.m = this.j = this.h = this.g = null, this.g = new C(this.c, this.s), this.h = new C(this.c, this.s), this.j = new C(this.c, this.s), this.m = new C(this.c, this.s), e = I(e = new k(this.a.c + ",serif", S(this.a))), this.g.a.style.cssText = e, e = I(e = new k(this.a.c + ",sans-serif", S(this.a))), this.h.a.style.cssText = e, e = I(e = new k("serif", S(this.a))), this.j.a.style.cssText = e, e = I(e = new k("sans-serif", S(this.a))), this.m.a.style.cssText = e, A(this.g), A(this.h), A(this.j), A(this.m)
        }
        T.prototype.c = function(e) {
            for (var t = [], s = 0; s < arguments.length; s++) t.push(arguments[s].replace(/[\W_]+/g, "").toLowerCase());
            return t.join(this.a)
        }, B.prototype.start = function() {
            var e = this.c.o.document,
                t = this,
                s = r(),
                i = new Promise((function(i, a) {
                    ! function n() {
                        r() - s >= t.f ? a() : e.fonts.load(function(e) {
                            return G(e) + " " + e.f + "00 300px " + b(e.c)
                        }(t.a), t.h).then((function(e) {
                            1 <= e.length ? i() : setTimeout(n, 25)
                        }), (function() {
                            a()
                        }))
                    }()
                })),
                a = null,
                n = new Promise((function(e, s) {
                    a = setTimeout(s, t.f)
                }));
            Promise.race([n, i]).then((function() {
                a && (clearTimeout(a), a = null), t.g(t.a)
            }), (function() {
                t.j(t.a)
            }))
        };
        var W = {
                D: "serif",
                C: "sans-serif"
            },
            F = null;

        function Y() {
            if (null === F) {
                var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                F = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))
            }
            return F
        }

        function z(e, t, s) {
            for (var i in W)
                if (W.hasOwnProperty(i) && t === e.f[W[i]] && s === e.f[W[i]]) return !0;
            return !1
        }

        function R(e) {
            var t, s = e.g.a.offsetWidth,
                i = e.h.a.offsetWidth;
            (t = s === e.f.serif && i === e.f["sans-serif"]) || (t = Y() && z(e, s, i)), t ? r() - e.A >= e.w ? Y() && z(e, s, i) && (null === e.u || e.u.hasOwnProperty(e.a.c)) ? D(e, e.v) : D(e, e.B) : function(e) {
                setTimeout(o((function() {
                    R(this)
                }), e), 50)
            }(e) : D(e, e.v)
        }

        function D(e, t) {
            setTimeout(o((function() {
                c(this.g.a), c(this.h.a), c(this.j.a), c(this.m.a), t(this.a)
            }), e), 0)
        }

        function j(e, t, s) {
            this.c = e, this.a = t, this.f = 0, this.m = this.j = !1, this.s = s
        }
        L.prototype.start = function() {
            this.f.serif = this.j.a.offsetWidth, this.f["sans-serif"] = this.m.a.offsetWidth, this.A = r(), R(this)
        };
        var N = null;

        function X(e) {
            0 == --e.f && e.j && (e.m ? ((e = e.a).g && p(e.f, [e.a.c("wf", "active")], [e.a.c("wf", "loading"), e.a.c("wf", "inactive")]), M(e, "active")) : P(e.a))
        }

        function H(e) {
            this.j = e, this.a = new O, this.h = 0, this.f = this.g = !0
        }

        function q(e, t, s, i, a) {
            var n = 0 == --e.h;
            (e.f || e.g) && setTimeout((function() {
                var e = a || null,
                    r = i || {};
                if (0 === s.length && n) P(t.a);
                else {
                    t.f += s.length, n && (t.j = n);
                    var l, h = [];
                    for (l = 0; l < s.length; l++) {
                        var d = s[l],
                            u = r[d.c],
                            c = t.a,
                            g = d;
                        if (c.g && p(c.f, [c.a.c("wf", g.c, S(g).toString(), "loading")]), M(c, "fontloading", g), c = null, null === N)
                            if (window.FontFace) {
                                g = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);
                                var f = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                                N = g ? 42 < parseInt(g[1], 10) : !f
                            } else N = !1;
                        c = N ? new B(o(t.g, t), o(t.h, t), t.c, d, t.s, u) : new L(o(t.g, t), o(t.h, t), t.c, d, t.s, e, u), h.push(c)
                    }
                    for (l = 0; l < h.length; l++) h[l].start()
                }
            }), 0)
        }

        function U(e, t) {
            this.c = e, this.a = t
        }

        function K(e, t) {
            this.c = e, this.a = t
        }

        function V(e, t) {
            this.c = e || J, this.a = [], this.f = [], this.g = t || ""
        }
        j.prototype.g = function(e) {
            var t = this.a;
            t.g && p(t.f, [t.a.c("wf", e.c, S(e).toString(), "active")], [t.a.c("wf", e.c, S(e).toString(), "loading"), t.a.c("wf", e.c, S(e).toString(), "inactive")]), M(t, "fontactive", e), this.m = !0, X(this)
        }, j.prototype.h = function(e) {
            var t = this.a;
            if (t.g) {
                var s = g(t.f, t.a.c("wf", e.c, S(e).toString(), "active")),
                    i = [],
                    a = [t.a.c("wf", e.c, S(e).toString(), "loading")];
                s || i.push(t.a.c("wf", e.c, S(e).toString(), "inactive")), p(t.f, i, a)
            }
            M(t, "fontinactive", e), X(this)
        }, H.prototype.load = function(e) {
            this.c = new l(this.j, e.context || this.j), this.g = !1 !== e.events, this.f = !1 !== e.classes,
                function(e, t, s) {
                    var i = [],
                        a = s.timeout;
                    ! function(e) {
                        e.g && p(e.f, [e.a.c("wf", "loading")]), M(e, "loading")
                    }(t);
                    i = function(e, t, s) {
                        var i, a = [];
                        for (i in t)
                            if (t.hasOwnProperty(i)) {
                                var n = e.c[i];
                                n && a.push(n(t[i], s))
                            }
                        return a
                    }(e.a, s, e.c);
                    var n = new j(e.c, t, a);
                    for (e.h = i.length, t = 0, s = i.length; t < s; t++) i[t].load((function(t, s, i) {
                        q(e, n, t, s, i)
                    }))
                }(this, new _(this.c, e), e)
        }, U.prototype.load = function(e) {
            var t = this,
                s = t.a.projectId,
                i = t.a.version;
            if (s) {
                var a = t.c.o;
                m(this.c, (t.a.api || "https://fast.fonts.net/jsapi") + "/" + s + ".js" + (i ? "?v=" + i : ""), (function(i) {
                    i ? e([]) : (a["__MonotypeConfiguration__" + s] = function() {
                        return t.a
                    }, function t() {
                        if (a["__mti_fntLst" + s]) {
                            var i, n = a["__mti_fntLst" + s](),
                                o = [];
                            if (n)
                                for (var r = 0; r < n.length; r++) {
                                    var l = n[r].fontfamily;
                                    null != n[r].fontStyle && null != n[r].fontWeight ? (i = n[r].fontStyle + n[r].fontWeight, o.push(new k(l, i))) : o.push(new k(l))
                                }
                            e(o)
                        } else setTimeout((function() {
                            t()
                        }), 50)
                    }())
                })).id = "__MonotypeAPIScript__" + s
            } else e([])
        }, K.prototype.load = function(e) {
            var t, s, i = this.a.urls || [],
                a = this.a.families || [],
                n = this.a.testStrings || {},
                o = new v;
            for (t = 0, s = i.length; t < s; t++) f(this.c, i[t], y(o));
            var r = [];
            for (t = 0, s = a.length; t < s; t++)
                if ((i = a[t].split(":"))[1])
                    for (var l = i[1].split(","), h = 0; h < l.length; h += 1) r.push(new k(i[0], l[h]));
                else r.push(new k(i[0]));
            x(o, (function() {
                e(r, n)
            }))
        };
        var J = "https://fonts.googleapis.com/css";

        function Q(e) {
            this.f = e, this.a = [], this.c = {}
        }
        var $ = {
                latin: "BESbswy",
                "latin-ext": "çöüğş",
                cyrillic: "йяЖ",
                greek: "αβΣ",
                khmer: "កខគ",
                Hanuman: "កខគ"
            },
            Z = {
                thin: "1",
                extralight: "2",
                "extra-light": "2",
                ultralight: "2",
                "ultra-light": "2",
                light: "3",
                regular: "4",
                book: "4",
                medium: "5",
                "semi-bold": "6",
                semibold: "6",
                "demi-bold": "6",
                demibold: "6",
                bold: "7",
                "extra-bold": "8",
                extrabold: "8",
                "ultra-bold": "8",
                ultrabold: "8",
                black: "9",
                heavy: "9",
                l: "3",
                r: "4",
                b: "7"
            },
            ee = {
                i: "i",
                italic: "i",
                n: "n",
                normal: "n"
            },
            te = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;

        function se(e, t) {
            this.c = e, this.a = t
        }
        var ie = {
            Arimo: !0,
            Cousine: !0,
            Tinos: !0
        };

        function ae(e, t) {
            this.c = e, this.a = t
        }

        function ne(e, t) {
            this.c = e, this.f = t, this.a = []
        }
        se.prototype.load = function(e) {
            var t = new v,
                s = this.c,
                i = new V(this.a.api, this.a.text),
                a = this.a.families;
            ! function(e, t) {
                for (var s = t.length, i = 0; i < s; i++) {
                    var a = t[i].split(":");
                    3 == a.length && e.f.push(a.pop());
                    var n = "";
                    2 == a.length && "" != a[1] && (n = ":"), e.a.push(a.join(n))
                }
            }(i, a);
            var n = new Q(a);
            ! function(e) {
                for (var t = e.f.length, s = 0; s < t; s++) {
                    var i = e.f[s].split(":"),
                        a = i[0].replace(/\+/g, " "),
                        n = ["n4"];
                    if (2 <= i.length) {
                        var o;
                        if (o = [], r = i[1])
                            for (var r, l = (r = r.split(",")).length, h = 0; h < l; h++) {
                                var d;
                                if ((d = r[h]).match(/^[\w-]+$/))
                                    if (null == (c = te.exec(d.toLowerCase()))) d = "";
                                    else {
                                        if (d = null == (d = c[2]) || "" == d ? "n" : ee[d], null == (c = c[1]) || "" == c) c = "4";
                                        else var u = Z[c],
                                            c = u || (isNaN(c) ? "4" : c.substr(0, 1));
                                        d = [d, c].join("")
                                    }
                                else d = "";
                                d && o.push(d)
                            }
                        0 < o.length && (n = o), 3 == i.length && (o = [], 0 < (i = (i = i[2]) ? i.split(",") : o).length && (i = $[i[0]]) && (e.c[a] = i))
                    }
                    for (e.c[a] || (i = $[a]) && (e.c[a] = i), i = 0; i < n.length; i += 1) e.a.push(new k(a, n[i]))
                }
            }(n), f(s, function(e) {
                if (0 == e.a.length) throw Error("No fonts to load!");
                if (-1 != e.c.indexOf("kit=")) return e.c;
                for (var t = e.a.length, s = [], i = 0; i < t; i++) s.push(e.a[i].replace(/ /g, "+"));
                return t = e.c + "?family=" + s.join("%7C"), 0 < e.f.length && (t += "&subset=" + e.f.join(",")), 0 < e.g.length && (t += "&text=" + encodeURIComponent(e.g)), t
            }(i), y(t)), x(t, (function() {
                e(n.a, n.c, ie)
            }))
        }, ae.prototype.load = function(e) {
            var t = this.a.id,
                s = this.c.o;
            t ? m(this.c, (this.a.api || "https://use.typekit.net") + "/" + t + ".js", (function(t) {
                if (t) e([]);
                else if (s.Typekit && s.Typekit.config && s.Typekit.config.fn) {
                    t = s.Typekit.config.fn;
                    for (var i = [], a = 0; a < t.length; a += 2)
                        for (var n = t[a], o = t[a + 1], r = 0; r < o.length; r++) i.push(new k(n, o[r]));
                    try {
                        s.Typekit.load({
                            events: !1,
                            classes: !1,
                            async: !0
                        })
                    } catch (e) {}
                    e(i)
                }
            }), 2e3) : e([])
        }, ne.prototype.load = function(e) {
            var t = this.f.id,
                s = this.c.o,
                i = this;
            t ? (s.__webfontfontdeckmodule__ || (s.__webfontfontdeckmodule__ = {}), s.__webfontfontdeckmodule__[t] = function(t, s) {
                for (var a = 0, n = s.fonts.length; a < n; ++a) {
                    var o = s.fonts[a];
                    i.a.push(new k(o.name, E("font-weight:" + o.weight + ";font-style:" + o.style)))
                }
                e(i.a)
            }, m(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + function(e) {
                return e.o.location.hostname || e.a.location.hostname
            }(this.c) + "/" + t + ".js", (function(t) {
                t && e([])
            }))) : e([])
        };
        var oe = new H(window);
        oe.a.c.custom = function(e, t) {
            return new K(t, e)
        }, oe.a.c.fontdeck = function(e, t) {
            return new ne(t, e)
        }, oe.a.c.monotype = function(e, t) {
            return new U(t, e)
        }, oe.a.c.typekit = function(e, t) {
            return new ae(t, e)
        }, oe.a.c.google = function(e, t) {
            return new se(t, e)
        };
        var re = {
            load: o(oe.load, oe)
        };
        void 0 === (i = function() {
            return re
        }.call(t, s, t, e)) || (e.exports = i)
    }()
}, function(e, t) {
    /**
     * @author       Richard Davey <rich@photonstorm.com>
     * @copyright    2019 Photon Storm Ltd.
     * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
     */
    var s = Phaser.Renderer.WebGL.Utils;
    e.exports = function(e, t, i, a, n) {
        if (0 !== t.width && 0 !== t.height) {
            var o = t.frame,
                r = o.width,
                l = o.height,
                h = s.getTintAppendFloatAlpha;
            this.pipeline.batchTexture(t, o.glTexture, r, l, t.x, t.y, r / t.style.resolution, l / t.style.resolution, t.scaleX, t.scaleY, t.rotation, t.flipX, t.flipY, t.scrollFactorX, t.scrollFactorY, t.displayOriginX, t.displayOriginY, 0, 0, r, l, h(t._tintTL, a.alpha * t._alphaTL), h(t._tintTR, a.alpha * t._alphaTR), h(t._tintBL, a.alpha * t._alphaBL), h(t._tintBR, a.alpha * t._alphaBR), t._isTinted && t.tintFill, 0, 0, a, n)
        }
    }
}, function(e, t) {
    e.exports = function(e, t, s, i, a) {
        0 !== t.width && 0 !== t.height && e.batchSprite(t, t.frame, i, a)
    }
}, function(e, t, s) {
    "use strict";
    s.r(t);
    var i = {
            color: "#000",
            fontFamily: '"Baloo Thambi 2"',
            googleFontName: "Baloo Thambi 2:500;700",
            fontSize: "30px"
        },
        a = s(0),
        n = s.n(a),
        o = class extends Phaser.Scene {
            constructor() {
                super("LoadingScene")
            }
            preload() {
                n.a.load({
                    google: {
                        families: [i.googleFontName]
                    }
                }), this.load.image("tile_01", "assets/images/tile_01.png"), this.load.image("tile_02", "assets/images/tile_02.png"), this.load.image("tile_03", "assets/images/tile_03.png"), this.load.image("tile_04", "assets/images/tile_04.png"), this.load.image("guide_character", "assets/images/guide.png"), this.load.image("background", ["assets/images/background.png", "assets/images/background_n.png"]), this.load.image("load_start", "assets/images/load_start.png"), this.load.image("title", "assets/images/title.png"), this.load.image("start", "assets/images/start.png"), this.load.image("start-active", "assets/images/start_active.png"), this.load.image("round_clear", "assets/images/round_clear.png"), this.load.image("round_clear_backdrop", "assets/images/round_clear_backdrop.png"), this.load.image("icon_tile", "assets/images/icon_tile.png"), this.load.image("icon_timer", "assets/images/icon_timer.png"), this.load.image("icon_timer_warning", "assets/images/icon_timer_warning.png"), this.load.image("icon_audio", "assets/images/icon_audio.png"), this.load.image("icon_audio_mute", "assets/images/icon_audio_mute.png"), this.load.image("expression_default", "assets/images/expression_default.png"), this.load.image("expression_surprise", "assets/images/expression_surprise.png"), this.load.image("expression_sadness", "assets/images/expression_sadness.png"), this.load.image("expression_despair", "assets/images/expression_despair.png"), this.load.image("expression_glee", "assets/images/expression_glee.png"), this.load.image("expression_nervous", "assets/images/expression_nervous.png"), this.load.image("expression_confused", "assets/images/expression_confused.png"), this.load.image("expression_neutral", "assets/images/expression_neutral.png"), this.load.image("expression_amused", "assets/images/expression_amused.png"), this.load.image("expression_thoughtful", "assets/images/expression_thoughtful.png"), this.load.audio("background_music", "assets/sounds/background_music.mp3"), this.load.audio("match", "assets/sounds/match.mp3"), this.load.audio("match_combo_01", "assets/sounds/match_combo_01.mp3"), this.load.audio("match_combo_02", "assets/sounds/match_combo_02.mp3"), this.load.audio("match_combo_03", "assets/sounds/match_combo_03.mp3"), this.load.audio("match_combo_04", "assets/sounds/match_combo_04.mp3"), this.load.audio("match_combo_05", "assets/sounds/match_combo_05.mp3"), this.load.audio("swap", "assets/sounds/swap.mp3"), this.load.audio("tile_select", "assets/sounds/tile_select.mp3"), this.load.audio("warning_tick", "assets/sounds/warning_tick.mp3"), this.load.audio("timer_run_out", "assets/sounds/timer_run_out.mp3"), this.load.audio("lights_off", "assets/sounds/lights_out.mp3"), this.load.audio("round_clear", "assets/sounds/intro_slide.mp3"), this.load.audio("select", "assets/sounds/select.mp3"), this.load.audio("intro_slide", "assets/sounds/intro_slide.mp3"), this.load.audio("music_switch", "assets/sounds/music_switch.mp3");
                const e = this.add.graphics();
                e.fillStyle(1118481), e.fillRect(0, 0, 800, 700), this.progressBox = this.add.graphics(), this.progressBox.fillStyle(2236962, .8), this.progressBox.fillRect(240, 330, 320, 50);
                const t = this;
                this.progressBar = this.add.graphics(), this.load.on("progress", (function(e) {
                    t.progressBar.clear(), t.progressBar.fillStyle(16777215, .8), t.progressBar.fillRect(250, 340, 300 * e, 30)
                }))
            }
            create() {
                this.tweens.add({
                    targets: [this.progressBox, this.progressBar],
                    alpha: 0,
                    duration: 200
                });
                const e = this;
                this.startBtn = this.add.image(400, 350, "load_start"), this.startBtn.setInteractive({
                    cursor: "pointer"
                }), this.startBtn.setAlpha(0), this.startBtn.on("pointerdown", () => {
                    e.scene.transition({
                        target: "TitleScene",
                        remove: !0
                    })
                }), this.tweens.add({
                    targets: [this.startBtn],
                    alpha: 1,
                    duration: 200
                })
            }
        },
        r = 0,
        l = 1,
        h = 2,
        d = 3,
        u = [{
            score: 50,
            behavior: r
        }, {
            score: 100,
            timer: 120,
            behavior: r
        }, {
            score: 100,
            timer: 30,
            behavior: h
        }, {
            score: 200,
            timer: 120,
            behavior: l
        }, {
            score: 250,
            timer: 120,
            behavior: l
        }, {
            score: 300,
            timer: 120,
            behavior: h
        }, {
            score: 100,
            timer: 60,
            behavior: r,
            blockMatching: !0
        }, {
            score: 30,
            timer: 120,
            behavior: d,
            blockMatching: !0
        }, {
            score: 300,
            timer: 180,
            behavior: r
        }, {
            score: Math.Infinity,
            behavior: r
        }],
        c = {
            getScript(e) {
                switch (e) {
                    case 0:
                        return ["*Oh, Wow, you made it!* You're here! (Click or tap anywhere!)", {
                            do: "updateGuideExpression",
                            value: "sadness"
                        }, "Gems World is in trouble!", {
                            do: "updateGuideExpression",
                            value: "despair"
                        }, "We lost all of our gems and now we'll starve!", {
                            do: "updateGuideExpression",
                            value: "glee"
                        }, {
                            do: "dropTiles"
                        }, "But you can help us by collecting as many gems as you can!", {
                            do: "updateGuideExpression",
                            value: "default"
                        }, "If you match three or more gems of the same color, we can collect them!", {
                            do: "unblockTileGrid"
                        }, "To make a match, select two gems and swap their places!", {
                            on: "match",
                            filter: e => e.matches >= 1,
                            actions: [{
                                do: "updateGuideExpression",
                                value: "glee"
                            }, "You got it! That's it!", {
                                do: "updateGuideExpression",
                                value: "default"
                            }, {
                                do: "showScoreDisplay"
                            }, "See if you can collect *50 gems*!"]
                        }, {
                            on: "match",
                            filter: e => e.matches > 1,
                            actions: [{
                                do: "showScoreDisplay"
                            }]
                        }, {
                            on: "match",
                            filter: e => 5 === e.matches,
                            actions: [{
                                do: "updateGuideExpression",
                                value: "glee"
                            }, "*Wow!* Look at you go!", {
                                do: "updateGuideExpression",
                                value: "default"
                            }]
                        }, {
                            on: "match",
                            filter: e => e.score > .5 * u[0].score,
                            actions: [{
                                do: "updateGuideExpression",
                                value: "glee"
                            }, "*Wow!* You're almost there!", {
                                do: "updateGuideExpression",
                                value: "default"
                            }]
                        }, {
                            on: "win",
                            actions: [{
                                do: "endLevel"
                            }]
                        }];
                    case 1:
                        return [{
                            do: "updateGuideExpression",
                            value: "glee"
                        }, "*Oh, Wow!* You're so good at this!", {
                            do: "updateGuideExpression",
                            value: "nervous"
                        }, "But, we'll have to hurry this time!", {
                            do: "dropTiles"
                        }, "We only have two minutes before the sun dries up all the gems!", {
                            do: "showTimerDisplay"
                        }, {
                            do: "updateGuideExpression",
                            value: "default"
                        }, {
                            do: "unblockTileGrid"
                        }, {
                            do: "startTimer"
                        }, "Collect at least *100 gems* in *two minutes*!", {
                            on: "match",
                            filter: e => 5 === e.matches,
                            actions: [{
                                do: "updateGuideExpression",
                                value: "glee"
                            }, "*Wow!* What a match!", {
                                do: "updateGuideExpression",
                                value: "default"
                            }]
                        }, {
                            on: "match",
                            filter: e => e.score > .5 * u[1].score,
                            actions: [{
                                do: "updateGuideExpression",
                                value: "glee"
                            }, "You're halfway there! You can do it!", {
                                do: "updateGuideExpression",
                                value: "default"
                            }]
                        }, {
                            on: "tick",
                            filter: e => e.ticks < 30,
                            actions: [{
                                do: "updateGuideExpression",
                                value: "nervous"
                            }, "Only *30 seconds* left! You can do this!", {
                                do: "updateGuideExpression",
                                value: "default"
                            }]
                        }, {
                            on: "gameOver",
                            actions: [{
                                do: "pauseBackgroundMusic",
                                value: !1
                            }, {
                                do: "blockTileGrid"
                            }, {
                                do: "updateGuideExpression",
                                value: "confused"
                            }, "Uhh?", {
                                do: "updateGuideExpression",
                                value: "neutral"
                            }, "I think there's been a mix-up.", {
                                do: "updateGuideExpression",
                                value: "confused"
                            }, "Did you get the wrong script?", {
                                do: "updateGuideExpression",
                                value: "neutral"
                            }, "You're supposed to win this time.", "Well, whatever, I'm sure we can just fix it up in post.", "Let's just move onto the next round.", {
                                do: "endLevel"
                            }, {
                                do: "resumeBackgroundMusic"
                            }]
                        }, {
                            on: "win",
                            actions: [{
                                do: "endLevel"
                            }]
                        }];
                    case 2:
                        return [{
                            do: "updateGuideExpression",
                            value: "glee"
                        }, "Wow, we're so proud of you!", "How did you get so goo...", {
                            do: "updateGuideExpression",
                            value: "nervous"
                        }, "...", {
                            do: "updateGuideExpression",
                            value: "surprise"
                        }, "*Eezle!* That sun is hot!", "You're going to have to move even quicker this time!", {
                            do: "dropTiles"
                        }, {
                            do: "updateGuideExpression",
                            value: "default"
                        }, "But we know you can do it!", "This round you'll only have *30 seconds* to collect *100 gems*!", {
                            do: "unblockTileGrid"
                        }, {
                            do: "startTimer"
                        }, {
                            on: "gameOver",
                            actions: [{
                                do: "pauseBackgroundMusic",
                                value: !1
                            }, {
                                do: "blockTileGrid"
                            }, {
                                do: "updateGuideExpression",
                                value: "confused"
                            }, "Wait, wait, sorry, hold on.", 'We\'re not doing the *"Lose in a Panic"* scenario today.', {
                                do: "updateGuideExpression",
                                value: "neutral"
                            }, "So sorry about that.", {
                                do: "updateGuideExpression",
                                value: "amused"
                            }, "You've been really great so far, honestly.", {
                                do: "updateGuideExpression",
                                value: "neutral"
                            }, "Let's just go ahead and take it from the top.", {
                                do: "endLevel"
                            }]
                        }, {
                            on: "win",
                            actions: [{
                                do: "pauseBackgroundMusic"
                            }, {
                                do: "updateGuideExpression",
                                value: "confused"
                            }, "Wait, is that...", {
                                do: "updateGuideExpression",
                                value: "neutral"
                            }, "No, I think you were supposed to lose here.", {
                                do: "updateGuideExpression",
                                value: "thoughtful"
                            }, 'Yeah, hmm. This was the *"Lose in a Panic"* scenario.', {
                                do: "updateGuideExpression",
                                value: "neutral"
                            }, "You know what, that's fine.", {
                                do: "updateGuideExpression",
                                value: "amused"
                            }, "Let's roll with it.", {
                                do: "updateGuideExpression",
                                value: "neutral"
                            }, "We'll just move to the next round.", {
                                do: "endLevel"
                            }]
                        }];
                    case 3:
                        return [{
                            do: "updateGuideExpression",
                            value: "neutral"
                        }, "Alright, I think we've got everything figured out.", {
                            do: "updateGuideExpression",
                            value: "amused"
                        }, "Okay, for this next round, let me set you up:", {
                            do: "updateGuideExpression",
                            value: "neutral"
                        }, "Remember, you've been winning the last few rounds and you're gaining confidence.", {
                            do: "updateGuideExpression",
                            value: "amused"
                        }, "In this round, it's going to be easy for you to get combos.", "So you're going to get a little *too* confident, right?", {
                            do: "updateGuideExpression",
                            value: "confused"
                        }, "Like a little full of yourself, yeah?", {
                            do: "updateGuideExpression",
                            value: "amused"
                        }, "Okay, great! Let's do this:", {
                            do: "updateGuideExpression",
                            value: "neutral"
                        }, "...", "...", "...", {
                            do: "resumeBackgroundMusic"
                        }, {
                            do: "updateGuideExpression",
                            value: "default"
                        }, "*Oh Wow Great!*", {
                            do: "updateGuideExpression",
                            value: "surprise"
                        }, "You're so amazing!", {
                            do: "updateGuideExpression",
                            value: "default"
                        }, {
                            do: "dropTiles"
                        }, "You have *two minutes* again, but this time you'll have to collect *200 gems*.", {
                            do: "updateGuideExpression",
                            value: "confused"
                        }, "Can you do it?", {
                            do: "updateGuideExpression",
                            value: "default"
                        }, {
                            do: "unblockTileGrid"
                        }, {
                            do: "startTimer"
                        }, {
                            do: "updateGuideExpression",
                            value: "glee"
                        }, "Who am I kidding? Of course you can!", {
                            do: "updateGuideExpression",
                            value: "default"
                        }, {
                            on: "gameOver",
                            actions: [{
                                do: "pauseBackgroundMusic",
                                value: !1
                            }, {
                                do: "blockTileGrid"
                            }, {
                                do: "updateGuideExpression",
                                value: "confused"
                            }, "Oh, uhh?", {
                                do: "updateGuideExpression",
                                value: "neutral"
                            }, "No, you win this round too.", {
                                do: "updateGuideExpression",
                                value: "thoughtful"
                            }, "Uhh, hmm...", {
                                do: "updateGuideExpression",
                                value: "amused"
                            }, "Okay, here's what we'll do:", {
                                do: "revokeLevelTransition"
                            }, {
                                do: "updateTimer",
                                value: 1
                            }, {
                                do: "stopTimer"
                            }, {
                                do: "unblockTileGrid"
                            }, {
                                do: "resumeBackgroundMusic"
                            }, "Go ahead and finish out the round and we'll edit it together later."]
                        }, {
                            on: "match",
                            filter: e => e.score > .25 * u[3].score,
                            actions: [{
                                do: "updateGuideExpression",
                                value: "glee"
                            }, "Look at you go! You're our hero!", {
                                do: "updateGuideExpression",
                                value: "default"
                            }]
                        }, {
                            on: "match",
                            filter: e => e.score > .5 * u[3].score,
                            actions: [{
                                do: "updateGuideExpression",
                                value: "surprise"
                            }, "*Wow!* You're unstoppable!", {
                                do: "updateGuideExpression",
                                value: "default"
                            }]
                        }, {
                            on: "match",
                            filter: e => e.score > .75 * u[3].score,
                            actions: [{
                                do: "updateGuideExpression",
                                value: "glee"
                            }, "*Oozle!*", {
                                do: "updateGuideExpression",
                                value: "default"
                            }]
                        }, {
                            on: "match",
                            filter: e => e.score > .85 * u[3].score,
                            actions: [{
                                do: "updateGuideExpression",
                                value: "glee"
                            }, "*Great!*", {
                                do: "updateGuideExpression",
                                value: "default"
                            }]
                        }, {
                            on: "match",
                            filter: e => e.score > .95 * u[3].score,
                            actions: [{
                                do: "updateGuideExpression",
                                value: "surprise"
                            }, "*Wow!*", {
                                do: "updateGuideExpression",
                                value: "default"
                            }]
                        }, {
                            on: "win",
                            actions: [{
                                do: "endLevel"
                            }]
                        }];
                    case 4:
                        return [{
                            do: "pauseBackgroundMusic"
                        }, {
                            do: "updateGuideExpression",
                            value: "amused"
                        }, "Okay, okay, great stuff.", {
                            do: "updateGuideExpression",
                            value: "neutral"
                        }, "For this round, you're bringing all of that pride, all of that hubris.", "And, when the round starts, things are still going your way.", {
                            do: "updateGuideExpression",
                            value: "confused"
                        }, "But guess what?", {
                            do: "updateGuideExpression",
                            value: "neutral"
                        }, "Halfway through this round, things start getting a little harder.", "So this is where we begin to chip away at your pride as the player.", {
                            do: "updateGuideExpression",
                            value: "amused"
                        }, "Alright, that's your set up: now let me get into the right headspace.", {
                            do: "updateGuideExpression",
                            value: "thoughtful"
                        }, "...oh Wow woo-", "...no, Boogy-boo...", "...yeah, Boogy-boo, you're our hero...", {
                            do: "updateGuideExpression",
                            value: "amused"
                        }, "Alright! Got it!", {
                            do: "updateGuideExpression",
                            value: "neutral"
                        }, "...", "...", "...", {
                            do: "resumeBackgroundMusic"
                        }, {
                            do: "updateGuideExpression",
                            value: "surprise"
                        }, "*Boogy-boo!*", {
                            do: "updateGuideExpression",
                            value: "glee"
                        }, "You're our hero!", {
                            do: "dropTiles"
                        }, {
                            do: "updateGuideExpression",
                            value: "default"
                        }, "You've done so much for us, but we still need your help!", {
                            do: "unblockTileGrid"
                        }, {
                            do: "startTimer"
                        }, "We need you to collect *250 gems* in *two minutes*!", {
                            on: "match",
                            filter: e => e.score > .25 * u[4].score,
                            actions: [{
                                do: "updateGuideExpression",
                                value: "glee"
                            }, "Nothing can stop you!", {
                                do: "updateGuideExpression",
                                value: "default"
                            }]
                        }, {
                            on: "match",
                            filter: e => e.score > .5 * u[4].score,
                            actions: [{
                                do: "updateGuideExpression",
                                value: "neutral"
                            }, {
                                do: "updateTileGenerationBehavior",
                                value: h
                            }, "Alright, we're going to crank up that difficulty now.", {
                                do: "updateGuideExpression",
                                value: "default"
                            }]
                        }, {
                            on: "match",
                            filter: e => e.score > .75 * u[4].score,
                            actions: ["Come on! You can do it!"]
                        }, {
                            on: "gameOver",
                            actions: [{
                                do: "pauseBackgroundMusic",
                                value: !1
                            }, {
                                do: "blockTileGrid"
                            }, {
                                do: "updateGuideExpression",
                                value: "confused"
                            }, "Oh, a game over?", {
                                do: "updateGuideExpression",
                                value: "neutral"
                            }, "We had a win penciled in here.", {
                                do: "updateGuideExpression",
                                value: "thoughtful"
                            }, "Maybe a game over could work?", {
                                do: "updateGuideExpression",
                                value: "neutral"
                            }, "No, you know what:", {
                                do: "revokeLevelTransition"
                            }, {
                                do: "updateTimer",
                                value: 1
                            }, {
                                do: "stopTimer"
                            }, {
                                do: "unblockTileGrid"
                            }, {
                                do: "resumeBackgroundMusic"
                            }, "Just go ahead and finish this off as a win."]
                        }, {
                            on: "win",
                            actions: [{
                                do: "endLevel"
                            }]
                        }];
                    case 5:
                        return [{
                            do: "pauseBackgroundMusic"
                        }, {
                            do: "updateGuideExpression",
                            value: "amused"
                        }, "Wow, great stuff.", "I know this is cliché, but it really feels so authentic.", "It's been great working with you. You really sell it.", {
                            do: "updateGuideExpression",
                            value: "neutral"
                        }, "Okay, here we go, this is a pivotal scene:", "This round will not go your way at all. At all.", {
                            do: "updateGuideExpression",
                            value: "amused"
                        }, "This is your fall from grace.", {
                            do: "updateGuideExpression",
                            value: "neutral"
                        }, "(Ahem)", {
                            do: "updateGuideExpression",
                            value: "thoughtful"
                        }, "...", "...", "...", {
                            do: "resumeBackgroundMusic"
                        }, {
                            do: "updateGuideExpression",
                            value: "glee"
                        }, "*Wow!*", "*Great!*", "I can't believe you did it!", {
                            do: "updateGuideExpression",
                            value: "default"
                        }, "We've got a bigger challenge ahead, but I know you can do it!", {
                            do: "dropTiles"
                        }, {
                            do: "updateGuideExpression",
                            value: "glee"
                        }, "You can do anything!", {
                            do: "updateGuideExpression",
                            value: "default"
                        }, {
                            do: "unblockTileGrid"
                        }, {
                            do: "startTimer"
                        }, "We need you to collect *300 gems* in *two minutes*!", {
                            on: "gameOver",
                            actions: [{
                                do: "blockTileGrid"
                            }, {
                                do: "updateGuideExpression",
                                value: "surprise"
                            }, "Oh no!", {
                                do: "updateGuideExpression",
                                value: "sadness"
                            }, "*Whoopsie whoozle!*", {
                                do: "updateGuideExpression",
                                value: "despair"
                            }, "You didn't make it in time!", {
                                do: "updateGuideExpression",
                                value: "sadness"
                            }, "It's okay, though!", {
                                do: "updateGuideExpression",
                                value: "nervous"
                            }, "It's okay!", {
                                do: "updateGuideExpression",
                                value: "default"
                            }, "You can try again!", {
                                do: "endLevel"
                            }]
                        }, {
                            on: "match",
                            filter: e => e.score > .25 * u[5].score,
                            actions: [{
                                do: "updateGuideExpression",
                                value: "glee"
                            }, "Look at you go!", {
                                do: "updateGuideExpression",
                                value: "default"
                            }]
                        }, {
                            on: "match",
                            filter: e => e.score > .5 * u[5].score,
                            actions: [{
                                do: "updateGuideExpression",
                                value: "neutral"
                            }, "Oh, wait, hold on: you're not supposed to be doing well this round, remember?", {
                                do: "updateGuideExpression",
                                value: "amused"
                            }, "Hey, I know it can be tough when you get in the flow.", {
                                do: "updateGuideExpression",
                                value: "neutral"
                            }, "Let's just lock the tiles until the end.", {
                                do: "blockTileGrid"
                            }, {
                                do: "updateGuideExpression",
                                value: "default"
                            }]
                        }, {
                            on: "tick",
                            filter: e => e.ticks < 30,
                            actions: [{
                                do: "updateGuideExpression",
                                value: "nervous"
                            }, "*Eezy-weezy!* Time is running short!", {
                                do: "updateGuideExpression",
                                value: "default"
                            }]
                        }, {
                            on: "tick",
                            filter: e => e.ticks < 15,
                            actions: [{
                                do: "updateGuideExpression",
                                value: "nervous"
                            }, "You're so close! Don't give up!", {
                                do: "updateGuideExpression",
                                value: "default"
                            }]
                        }];
                    case 6:
                        return [{
                            do: "pauseBackgroundMusic"
                        }, {
                            do: "updateGuideExpression",
                            value: "neutral"
                        }, "Okay, let's move right into the next scene:", "Here, you are wallowing, right?", "You are in the pit of despair and you can't see a way out.", "This round won't be particularly hard, but you can't seem to find any matches.", {
                            do: "updateGuideExpression",
                            value: "amused"
                        }, "Got it?", {
                            do: "updateGuideExpression",
                            value: "neutral"
                        }, "Alright, great: let me find my place here...", {
                            do: "updateGuideExpression",
                            value: "thoughtful"
                        }, "...yes, yes, my faith is faltering...", "...keeping a brave face...", {
                            do: "updateGuideExpression",
                            value: "amused"
                        }, "Okay, I'm ready!", "...", "...", "...", {
                            do: "resumeBackgroundMusic"
                        }, {
                            do: "updateGuideExpression",
                            value: "default"
                        }, "Don't worry, that was a tough one!", {
                            do: "dropTiles"
                        }, "Let's try again! We believe in you!", {
                            do: "updateGuideExpression",
                            value: "glee"
                        }, "We know you can do it!", {
                            do: "updateGuideExpression",
                            value: "default"
                        }, {
                            do: "unblockTileGrid"
                        }, {
                            do: "startTimer"
                        }, "This time, you just need to get *100 gems* in *one minute!*", {
                            on: "swap",
                            actions: [{
                                do: "updateGuideExpression",
                                value: "neutral"
                            }, "Hey, remember: you don't get any matches this round.", {
                                do: "updateGuideExpression",
                                value: "default"
                            }]
                        }, {
                            on: "tick",
                            filter: e => e.ticks < 45,
                            actions: [{
                                do: "updateGuideExpression",
                                value: "nervous"
                            }, "Don't worry! You can do it!", {
                                do: "updateGuideExpression",
                                value: "default"
                            }]
                        }, {
                            on: "tick",
                            filter: e => e.ticks < 30,
                            actions: [{
                                do: "updateGuideExpression",
                                value: "nervous"
                            }, "You just need to get a few matches!"]
                        }, {
                            on: "tick",
                            filter: e => e.ticks < 15,
                            actions: [{
                                do: "updateGuideExpression",
                                value: "sadness"
                            }, "Please, we're running out of time!"]
                        }, {
                            on: "gameOver",
                            actions: [{
                                do: "blockTileGrid"
                            }, {
                                do: "updateGuideExpression",
                                value: "surprise"
                            }, "Oh no!", {
                                do: "updateGuideExpression",
                                value: "despair"
                            }, "*Eezle weezle!*", {
                                do: "updateGuideExpression",
                                value: "sadness"
                            }, "You didn't collect any gems!", {
                                do: "updateGuideExpression",
                                value: "despair"
                            }, "We'll starve!", {
                                do: "updateGuideExpression",
                                value: "sadness"
                            }, "*Please!* You have to save us!", {
                                do: "endLevel"
                            }]
                        }];
                    case 7:
                        return [{
                            do: "pauseBackgroundMusic"
                        }, {
                            do: "updateGuideExpression",
                            value: "amused"
                        }, "Wow, I'm really feeling it.", "How about you?", {
                            do: "updateGuideExpression",
                            value: "neutral"
                        }, "Alright, next up:", "You've been wallowing.", "You're feeling really low.", {
                            do: "updateGuideExpression",
                            value: "thoughtful"
                        }, "And, you're in such despair, that in this round...", {
                            do: "updateGuideExpression",
                            value: "neutral"
                        }, "There's an obvious combo.", "Right there, right in front of your face.", {
                            do: "updateGuideExpression",
                            value: "thoughtful"
                        }, "But you can't see it through the despair.", {
                            do: "updateGuideExpression",
                            value: "neutral"
                        }, "But then, in the last 30 seconds of the round, you see it!", {
                            do: "updateGuideExpression",
                            value: "amused"
                        }, "The perfect match.", "And the pheonix rises once again!", {
                            do: "updateGuideExpression",
                            value: "neutral"
                        }, "Alright! Here we go!", "...", "...", "...", {
                            do: "resumeBackgroundMusic"
                        }, {
                            do: "updateGuideExpression",
                            value: "despair"
                        }, "Oh, boozle...", "What will we do?", {
                            do: "updateGuideExpression",
                            value: "sadness"
                        }, "Please, you're our only hope!", {
                            do: "updateGuideExpression",
                            value: "despair"
                        }, "We have one more chance...", {
                            do: "dropTiles"
                        }, "Please! Save our kingdom! Just get *30 gems* in *two minutes*!", {
                            do: "unblockTileGrid"
                        }, {
                            do: "startTimer"
                        }, {
                            on: "swap",
                            filter: e => e.ticks > 30 && e.isBlockingMatches,
                            actions: [{
                                do: "updateGuideExpression",
                                value: "neutral"
                            }, "Hold on, it's not time to swap yet.", "Wait until there's only *30 seconds* left.", {
                                do: "updateGuideExpression",
                                value: "despair"
                            }]
                        }, {
                            on: "tick",
                            filter: e => e.ticks <= 30,
                            actions: [{
                                do: "updateGuideExpression",
                                value: "neutral"
                            }, {
                                do: "stopTimer"
                            }, "Alright, here we go.", "Just to make sure we get this right, we'll stop the timer.", {
                                do: "updateGuideExpression",
                                value: "thoughtful"
                            }, "And we'll highlight the match you'll want to make.", {
                                do: "blockTileGrid",
                                value: [
                                    [9, 2],
                                    [9, 3]
                                ]
                            }, {
                                do: "updateGuideExpression",
                                value: "amused"
                            }, "And the rest is up to you!", {
                                do: "revokeBlockMatching"
                            }]
                        }, {
                            on: "swap",
                            filter: e => !e.isBlockingMatches,
                            actions: [{
                                do: "unblockTileGrid"
                            }]
                        }, {
                            on: "win",
                            actions: [{
                                do: "endLevel"
                            }]
                        }];
                    case 8:
                        return [{
                            do: "pauseBackgroundMusic"
                        }, {
                            do: "updateGuideExpression",
                            value: "amused"
                        }, "Hey, our hero is back!", "Very moving work.", {
                            do: "updateGuideExpression",
                            value: "neutral"
                        }, "Okay: this next scene is the last one.", {
                            do: "updateGuideExpression",
                            value: "thoughtful"
                        }, "It's your victory lap.", {
                            do: "updateGuideExpression",
                            value: "neutral"
                        }, "To sell this one, we really need to get the pacing right.", {
                            do: "updateGuideExpression",
                            value: "thoughtful"
                        }, "We want you getting a steady flow of matches the whole time.", {
                            do: "updateGuideExpression",
                            value: "neutral"
                        }, "If you win too early, it's no fun to watch, you know?", {
                            do: "updateGuideExpression",
                            value: "amused"
                        }, "But don't worry, we got your back.", {
                            do: "updateGuideExpression",
                            value: "neutral"
                        }, "We'll just advance the timer as you get matches, yeah?", "And then we can edit it all together later.", {
                            do: "updateGuideExpression",
                            value: "amused"
                        }, "Alright! Let's wrap this up!", {
                            do: "updateGuideExpression",
                            value: "thoughtful"
                        }, "...", "...", "...", {
                            do: "resumeBackgroundMusic"
                        }, {
                            do: "updateGuideExpression",
                            value: "glee"
                        }, "*Oh doozie woozie!*", {
                            do: "updateGuideExpression",
                            value: "default"
                        }, "I knew you could do it!", "You're our hero!", {
                            do: "updateGuideExpression",
                            value: "confused"
                        }, "...", {
                            do: "updateGuideExpression",
                            value: "surprise"
                        }, "*Oozle!*", {
                            do: "dropTiles"
                        }, {
                            do: "updateGuideExpression",
                            value: "glee"
                        }, "Look at all of those gems!", {
                            do: "updateGuideExpression",
                            value: "amused"
                        }, "Now's our chance!", "If you can gather up a big haul, we can save the kingdom!", "I know it's a lot to ask, but please help us one more time!", "*300 gems* in *3 minutes!*", {
                            do: "unblockTileGrid"
                        }, {
                            on: "match",
                            actions: [{
                                do: "updateTimerRelativeToScore"
                            }],
                            persist: !0
                        }, {
                            on: "match",
                            filter: e => e.score > .25 * u[8].score,
                            actions: [{
                                do: "updateGuideExpression",
                                value: "glee"
                            }, "*Wow!* What a match!", {
                                do: "updateGuideExpression",
                                value: "default"
                            }]
                        }, {
                            on: "match",
                            filter: e => e.score > .5 * u[8].score,
                            actions: [{
                                do: "updateGuideExpression",
                                value: "surprise"
                            }, "*Great!* No one can match like you!", {
                                do: "updateGuideExpression",
                                value: "default"
                            }]
                        }, {
                            on: "match",
                            filter: e => e.score > .75 * u[8].score,
                            actions: [{
                                do: "updateGuideExpression",
                                value: "glee"
                            }, "*Boogy-boo!* Our kingdom is saved!", {
                                do: "updateGuideExpression",
                                value: "default"
                            }]
                        }, {
                            on: "win",
                            actions: [{
                                do: "blockTileGrid"
                            }, {
                                do: "endLevel"
                            }]
                        }];
                    case 9:
                        return [{
                            do: "updateGuideExpression",
                            value: "amused"
                        }, "And that's a wrap!", {
                            do: "updateGuideExpression",
                            value: "neutral"
                        }, "I think it went pretty well today, right?", {
                            do: "updateGuideExpression",
                            value: "thoughtful"
                        }, {
                            do: "hideScoreDisplay"
                        }, "Huh?", {
                            do: "updateGuideExpression",
                            value: "neutral"
                        }, "Oh, looks like they're shutting things down.", "...", "...", "So, any-", {
                            do: "dropTiles"
                        }, {
                            do: "updateGuideExpression",
                            value: "confused"
                        }, "Oh, whoops, tiles must have dropped on accident.", {
                            do: "updateGuideExpression",
                            value: "neutral"
                        }, "...", "...", "Yeah, so, anyway.", "I've gotta head out.", "...", {
                            do: "updateGuideExpression",
                            value: "amused"
                        }, "Nice working with you today!", {
                            do: "updateGuideExpression",
                            value: "neutral"
                        }, "...", {
                            do: "hideGuide"
                        }, {
                            do: "unblockTileGrid"
                        }, {
                            wait: 3e4
                        }, {
                            do: "pauseBackgroundMusic"
                        }, {
                            wait: 3e4
                        }, {
                            do: "turnOffLights"
                        }]
                }
            }
        },
        p = class {
            constructor() {
                this.subscriptions = []
            }
            on(e, t, s, i) {
                this.subscriptions.push({
                    eventName: e,
                    filter: t,
                    callback: s,
                    persist: i
                })
            }
            emit(e) {
                this.subscriptions.filter(t => t.eventName === e).filter(e => null === e.filter || e.filter()).forEach(e => {
                    e.callback && e.callback(), e.persist || (e.callback = null)
                })
            }
        },
        g = s(1),
        f = s.n(g),
        m = s(2),
        v = s.n(m),
        y = {
            renderWebGL: f.a,
            renderCanvas: v.a
        };
    /**
     * @author       Richard Davey <rich@photonstorm.com>
     * @copyright    2018 Photon Storm Ltd.
     * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
     */
    const x = Phaser.Display.Canvas.CanvasPool;
    var w = function(e) {
            var t = x.create(this),
                s = t.getContext("2d");
            e.syncFont(t, s);
            var i = Math.ceil(s.measureText(e.testString).width * e.baselineX),
                a = i,
                n = 2 * a;
            a = a * e.baselineY | 0, t.width = i, t.height = n, s.fillStyle = "#f00", s.fillRect(0, 0, i, n), s.font = e._font, s.textBaseline = "alphabetic", s.fillStyle = "#000", s.fillText(e.testString, 0, a);
            var o = {
                ascent: 0,
                descent: 0,
                fontSize: 0
            };
            if (!s.getImageData(0, 0, i, n)) return o.ascent = a, o.descent = a + 6, o.fontSize = o.ascent + o.descent, x.remove(t), o;
            var r, l, h = s.getImageData(0, 0, i, n).data,
                d = h.length,
                u = 4 * i,
                c = 0,
                p = !1;
            for (r = 0; r < a; r++) {
                for (l = 0; l < u; l += 4)
                    if (255 !== h[c + l]) {
                        p = !0;
                        break
                    }
                if (p) break;
                c += u
            }
            for (o.ascent = a - r, c = d - u, p = !1, r = n; r > a; r--) {
                for (l = 0; l < u; l += 4)
                    if (255 !== h[c + l]) {
                        p = !0;
                        break
                    }
                if (p) break;
                c -= u
            }
            return o.descent = r - a, o.fontSize = o.ascent + o.descent, x.remove(t), o
        },
        T = {
            NO_NEWLINE: 0,
            RAW_NEWLINE: 1,
            WRAPPED_NEWLINE: 2,
            NO_WRAP: 0,
            WORD_WRAP: 1,
            CHAR_WRAP: 2,
            SPLITREGEXP: /(?:\r\n|\r|\n)/
        };
    /**
     * @author       Richard Davey <rich@photonstorm.com>
     * @copyright    2018 Photon Storm Ltd.
     * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
     */
    const k = Phaser.Utils.Objects.GetAdvancedValue,
        b = Phaser.Utils.Objects.GetValue;
    var S = {
        backgroundColor: ["backgroundColor", null],
        fontFamily: ["fontFamily", "Courier"],
        fontSize: ["fontSize", "16px"],
        fontStyle: ["fontStyle", ""],
        color: ["color", "#fff"],
        stroke: ["stroke", "#fff"],
        strokeThickness: ["strokeThickness", 0],
        shadowOffsetX: ["shadow.offsetX", 0],
        shadowOffsetY: ["shadow.offsetY", 0],
        shadowColor: ["shadow.color", "#000"],
        shadowBlur: ["shadow.blur", 0],
        shadowStroke: ["shadow.stroke", !1],
        shadowFill: ["shadow.fill", !1],
        underlineColor: ["underline.color", "#000"],
        underlineThickness: ["underline.thickness", 0],
        underlineOffset: ["underline.offset", 0],
        halign: ["halign", "left"],
        valign: ["valign", "top"],
        maxLines: ["maxLines", 0],
        fixedWidth: ["fixedWidth", 0],
        fixedHeight: ["fixedHeight", 0],
        resolution: ["resolution", 0],
        lineSpacing: ["lineSpacing", 0],
        rtl: ["rtl", !1],
        testString: ["testString", "|MÃ‰qgy"],
        baselineX: ["baselineX", 1.2],
        baselineY: ["baselineY", 1.4],
        wrapMode: ["wrap.mode", 1],
        wrapWidth: ["wrap.width", 0]
    };
    const G = {
        none: T.NO_WRAP,
        word: T.WORD_WRAP,
        char: T.CHAR_WRAP,
        character: T.CHAR_WRAP
    };
    var E = class {
            constructor(e, t) {
                this.parent = e, this.backgroundColor, this.fontFamily, this.fontSize, this.fontStyle, this.color, this.stroke, this.strokeThickness, this.shadowOffsetX, this.shadowOffsetY, this.shadowColor, this.shadowBlur, this.shadowStroke, this.shadowFill, this.underlineColor, this.underlineThickness, this.underlineOffset, this.halign, this.valign, this.maxLines, this.fixedWidth, this.fixedHeight, this.resolution, this.lineSpacing, this.rtl, this.testString, this.baselineX, this.baselineY, this._font, this.setStyle(t, !1);
                var s = b(t, "metrics", !1);
                this.metrics = s ? {
                    ascent: b(s, "ascent", 0),
                    descent: b(s, "descent", 0),
                    fontSize: b(s, "fontSize", 0)
                } : w(this)
            }
            setStyle(e, t) {
                if (void 0 === t && (t = !0), e && e.hasOwnProperty("wrap")) {
                    var s = e.wrap;
                    if (s.hasOwnProperty("mode")) {
                        var i = s.mode;
                        "string" == typeof i && (s.mode = G[i])
                    } else s.hasOwnProperty("width") && (s.mode = 1)
                }
                for (var a in e && e.hasOwnProperty("fontSize") && "number" == typeof e.fontSize && (e.fontSize = e.fontSize.toString() + "px"), S) this[a] = "wrapCallback" === a || "wrapCallbackScope" === a ? b(e, S[a][0], S[a][1]) : k(e, S[a][0], S[a][1]);
                var n = b(e, "font", null);
                this._font = null === n ? this.fontStyle + " " + this.fontSize + " " + this.fontFamily : n;
                var o = b(e, "fill", null);
                return null !== o && (this.color = o), t ? this.update(!0) : this.parent
            }
            syncFont(e, t) {
                t.font = this._font
            }
            syncStyle(e, t) {
                t.textBaseline = "alphabetic", t.fillStyle = this.color, t.strokeStyle = this.stroke, t.lineWidth = this.strokeThickness, t.lineCap = "round", t.lineJoin = "round"
            }
            syncShadow(e, t) {
                t ? (e.shadowOffsetX = this.shadowOffsetX, e.shadowOffsetY = this.shadowOffsetY, e.shadowColor = this.shadowColor, e.shadowBlur = this.shadowBlur) : (e.shadowOffsetX = 0, e.shadowOffsetY = 0, e.shadowColor = 0, e.shadowBlur = 0)
            }
            update(e) {
                return e && (this._font = this.fontStyle + " " + this.fontSize + " " + this.fontFamily, this.metrics = w(this)), this.parent.updateText(e)
            }
            buildFont() {
                var e = this.fontStyle + " " + this.fontSize + " " + this.fontFamily;
                return e !== this._font && (this._font = e), this
            }
            setFont(e) {
                return "string" == typeof e ? (this.fontFamily = e, this.fontSize = "", this.fontStyle = "") : (this.fontFamily = b(e, "fontFamily", "Courier"), this.fontSize = b(e, "fontSize", "16px"), this.fontStyle = b(e, "fontStyle", "")), this.update(!0)
            }
            setFontFamily(e) {
                return this.fontFamily = e, this.update(!0)
            }
            setFontStyle(e) {
                return this.fontStyle = e, this.update(!0)
            }
            setFontSize(e) {
                return "number" == typeof e && (e = e.toString() + "px"), this.fontSize = e, this.update(!0)
            }
            setTestString(e) {
                return this.testString = e, this.update(!0)
            }
            setFixedSize(e, t) {
                return this.fixedWidth = e, this.fixedHeight = t, e && (this.parent.width = e), t && (this.parent.height = t), this.update(!1)
            }
            setResolution(e) {
                return this.resolution = e, this.update(!1)
            }
            setLineSpacing(e) {
                return this.lineSpacing = e, this.update(!1)
            }
            setBackgroundColor(e) {
                return this.backgroundColor = e, this.update(!1)
            }
            setFill(e) {
                return this.color = e, this.update(!1)
            }
            setColor(e) {
                return this.color = e, this.update(!1)
            }
            setStroke(e, t) {
                return void 0 === e ? this.strokeThickness = 0 : (void 0 === t && (t = this.strokeThickness), this.stroke = e, this.strokeThickness = t), this.update(!0)
            }
            setShadow(e, t, s, i, a, n) {
                return void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === s && (s = "#000"), void 0 === i && (i = 0), void 0 === a && (a = !1), void 0 === n && (n = !0), this.shadowOffsetX = e, this.shadowOffsetY = t, this.shadowColor = s, this.shadowBlur = i, this.shadowStroke = a, this.shadowFill = n, this.update(!1)
            }
            setShadowOffset(e, t) {
                return void 0 === e && (e = 0), void 0 === t && (t = e), this.shadowOffsetX = e, this.shadowOffsetY = t, this.update(!1)
            }
            setShadowColor(e) {
                return void 0 === e && (e = "#000"), this.shadowColor = e, this.update(!1)
            }
            setShadowBlur(e) {
                return void 0 === e && (e = 0), this.shadowBlur = e, this.update(!1)
            }
            setShadowStroke(e) {
                return this.shadowStroke = e, this.update(!1)
            }
            setShadowFill(e) {
                return this.shadowFill = e, this.update(!1)
            }
            setUnderline(e, t, s) {
                return void 0 === e && (e = "#000"), void 0 === t && (t = 0), void 0 === s && (s = 0), this.underlineColor = e, this.underlineThickness = t, this.underlineOffset = s, this.update(!1)
            }
            setUnderlineColor(e) {
                return void 0 === e && (e = "#000"), this.underlineColor = e, this.update(!1)
            }
            setUnderlineThickness(e) {
                return void 0 === e && (e = 0), this.underlineThickness = e, this.update(!1)
            }
            setUnderlineOffset(e) {
                return void 0 === e && (e = 0), this.underlineOffset = e, this.update(!1)
            }
            setWrapMode(e) {
                return "string" == typeof e && (e = G[e.toLowerCase()] || 0), this.wrapMode = e, this.update(!0)
            }
            setWrapWidth(e) {
                return this.wrapWidth = e, this.update(!1)
            }
            setAlign(e, t) {
                return void 0 === e && (e = "left"), void 0 === t && (t = "top"), this.halign = e, this.valign = t, this.update(!1)
            }
            setHAlign(e) {
                return void 0 === e && (e = "left"), this.halign = e, this.update(!1)
            }
            setVAlign(e) {
                return void 0 === e && (e = "top"), this.valign = e, this.update(!1)
            }
            setMaxLines(e) {
                return void 0 === e && (e = 0), this.maxLines = e, this.update(!1)
            }
            getTextMetrics() {
                var e = this.metrics;
                return {
                    ascent: e.ascent,
                    descent: e.descent,
                    fontSize: e.fontSize
                }
            }
            get lineHeight() {
                return this.metrics.fontSize + this.strokeThickness + this.lineSpacing
            }
            toJSON() {
                var e = {};
                for (var t in S) e[t] = this[t];
                return e.metrics = this.getTextMetrics(), e
            }
            destroy() {
                this.parent = void 0
            }
        },
        _ = {
            draw(e, t, s, i) {
                var a = this.penManager;
                this.hitAreaManager.clear();
                var n = this.context;
                n.save(), this.drawBackground(this.defatultStyle.backgroundColor);
                var o = this.defatultStyle;
                e += this.startXOffset, t += this.startYOffset;
                var r, l, h, d, u, c, p = o.halign,
                    g = o.valign,
                    f = o.lineHeight,
                    m = a.lines,
                    v = m.length,
                    y = o.maxLines;
                y > 0 && v > y ? (l = y, h = "center" === g ? Math.floor((v - l) / 2) : "bottom" === g ? v - l : 0) : (l = v, h = 0), d = h + l, c = "center" === g ? Math.max((i - l * f) / 2, 0) : "bottom" === g ? Math.max(i - l * f - 2, 0) : 0, c += t;
                for (var x = h; x < d; x++)
                    if (0 !== (r = a.getLineWidth(x))) {
                        u = "center" === p ? (s - r) / 2 : "right" === p ? s - r : 0, u += e;
                        for (var w = m[x], T = 0, k = w.length; T < k; T++) this.drawPen(w[T], u, c)
                    }
                n.restore()
            },
            drawPen(e, t, s) {
                t += e.x, s += e.y;
                var i = this.canvas,
                    a = this.context;
                a.save();
                var n = this.parser.propToContextStyle(this.defatultStyle, e.prop);
                n.buildFont(), n.syncFont(i, a), n.syncStyle(i, a), n.underlineThickness > 0 && e.width > 0 && this.drawUnderline(t, s, e.width, n), e.isTextPen && this.drawText(t, s, e.text, n), e.isImagePen && this.drawImage(t, s, e.prop.img, n), a.restore(), e.hasAreaMarker && e.width > 0 && this.hitAreaManager.add(e.prop.area, t, s - this.startYOffset, e.width, this.defatultStyle.lineHeight)
            },
            clear() {
                var e = this.canvas;
                this.context.clearRect(0, 0, e.width, e.height)
            },
            drawBackground(e) {
                null !== e && (this.context.fillStyle = e, this.context.fillRect(0, 0, this.canvas.width, this.canvas.height))
            },
            drawUnderline(e, t, s, i) {
                t += i.underlineOffset - i.underlineThickness / 2, this.autoRound && (e = Math.round(e), t = Math.round(t));
                var a = this.context,
                    n = a.lineCap;
                a.lineCap = "butt", a.beginPath(), a.strokeStyle = i.underlineColor, a.lineWidth = i.underlineThickness, a.moveTo(e, t), a.lineTo(e + s, t), a.stroke(), a.lineCap = n
            },
            drawText(e, t, s, i) {
                this.autoRound && (e = Math.round(e), t = Math.round(t));
                var a = this.context;
                i.strokeThickness && (i.syncShadow(a, i.shadowStroke), a.strokeText(s, e, t)), i.color && "none" !== i.color && (i.syncShadow(a, i.shadowFill), a.fillText(s, e, t))
            },
            drawImage(e, t, s, i) {
                var a = this.parent.imageManager,
                    n = a.get(s),
                    o = a.getFrame(s);
                e += n.left, t += -this.startYOffset + n.y, this.autoRound && (e = Math.round(e), t = Math.round(t)), this.context.drawImage(o.source.image, o.cutX, o.cutY, o.cutWidth, o.cutHeight, e, t, n.width, n.height)
            }
        };
    var P = class {
        constructor() {
            this.items = []
        }
        destroy() {
            this.clear(), this.items = void 0
        }
        pop() {
            return this.items.length > 0 ? this.items.pop() : null
        }
        push(e) {
            return this.items.push(e), this
        }
        pushMultiple(e) {
            return this.items.push.apply(this.items, e), e.length = 0, this
        }
        clear() {
            return this.items.length = 0, this
        }
    };
    const M = Phaser.Utils.Objects.GetValue,
        O = T.NO_NEWLINE,
        C = T.RAW_NEWLINE;
    var A = class {
            constructor(e) {
                this.prop = {}, this.resetFromJSON(e)
            }
            resetFromJSON(e) {
                this.text = M(e, "text", ""), this.x = M(e, "x", 0), this.y = M(e, "y", 0), this.width = M(e, "width", 0);
                var t = M(e, "prop", null);
                null === t && (t = {}), this.prop = t, this.newLineMode = M(e, "newLineMode", 0), this.startIndex = M(e, "startIndex", 0)
            }
            get plainText() {
                var e = this.text;
                return this.newLineMode === C && (e += "\n"), e
            }
            get wrapText() {
                var e = this.text;
                return this.newLineMode !== O && (e += "\n"), e
            }
            get rawTextLength() {
                var e = this.text.length;
                return this.newLineMode === C && (e += 1), e
            }
            get endIndex() {
                return this.startIndex + this.rawTextLength
            }
            get lastX() {
                return this.x + this.width
            }
            get isTextPen() {
                return "" !== this.text
            }
            get isImagePen() {
                return !!this.prop.img
            }
            get hasAreaMarker() {
                return !!this.prop.area
            }
        },
        I = function(e) {
            if (Array.isArray(e)) e.length = 0;
            else
                for (var t in e) delete e[t]
        },
        B = function(e, t) {
            var s = Array.isArray(e);
            if (void 0 === t ? t = s ? [] : {} : I(t), s) {
                t.length = e.length;
                for (var i = 0, a = e.length; i < a; i++) t[i] = e[i]
            } else
                for (var n in e) t[n] = e[n];
            return t
        },
        L = function() {};
    const W = Phaser.Utils.Objects.GetFastValue,
        F = T.NO_NEWLINE,
        Y = T.WRAPPED_NEWLINE;
    var z = new P,
        R = new P;
    class D {
        constructor(e) {
            this.pens = [], this.lines = [], this.maxLinesWidth = void 0, this.PensPool = W(e, "pensPool", z), this.LinesPool = W(e, "linesPool", R), this.tagToText = W(e, "tagToText", L), this.tagToTextScope = W(e, "tagToTextScope", void 0)
        }
        destroy() {
            this.freePens(), this.tagToText = void 0, this.tagToTextScope = void 0
        }
        freePens() {
            for (var e = 0, t = this.lines.length; e < t; e++) this.lines[e].length = 0;
            this.PensPool.pushMultiple(this.pens), this.LinesPool.pushMultiple(this.lines), this.maxLinesWidth = void 0
        }
        addTextPen(e, t, s, i, a, n) {
            var o = this.PensPool.pop();
            return null == o && (o = new A), j.text = e, j.x = t, j.y = s, j.width = i, j.prop = a, j.newLineMode = n, o.resetFromJSON(j), this.addPen(o), this
        }
        addImagePen(e, t, s, i) {
            return this.addTextPen("", e, t, s, i, F), this
        }
        addNewLinePen() {
            var e = this.lastPen,
                t = e ? e.lastX : 0,
                s = e ? e.y : 0,
                i = e ? B(e.prop) : null;
            return this.addTextPen("", t, s, 0, i, Y), this
        }
        addPen(e) {
            var t = this.lastPen;
            e.startIndex = null == t ? 0 : t.endIndex, this.pens.push(e);
            var s = this.lastLine;
            null == s && (s = this.LinesPool.pop() || [], this.lines.push(s)), s.push(e), e.newLineMode !== F && (s = this.LinesPool.pop() || [], this.lines.push(s)), this.maxLinesWidth = void 0
        }
        clone(e) {
            null == e && (e = new D), e.freePens();
            for (var t = 0, s = this.lines.length; t < s; t++)
                for (var i = this.lines[t], a = 0, n = i.length; a < n; a++) {
                    var o = i[a];
                    e.addPen(o.text, o.x, o.y, o.width, B(o.prop), o.newLineMode)
                }
            return e
        }
        get lastPen() {
            return this.pens[this.pens.length - 1]
        }
        get lastLine() {
            return this.lines[this.lines.length - 1]
        }
        getLineStartIndex(e) {
            if (e >= this.lines.length) return this.getLineEndIndex(e);
            var t = this.lines[e];
            return t && t[0] ? t[0].startIndex : 0
        }
        getLineEndIndex(e) {
            e >= this.lines.length && (e = this.lines.length - 1);
            var t, s, i = !1;
            for (t = e; t >= 0 && !(i = null != (s = this.lines[t]) && s.length > 0); t--);
            return i ? s[s.length - 1].endIndex : 0
        }
        getLineWidth(e) {
            var t = this.lines[e];
            if (!t) return 0;
            var s = t[t.length - 1];
            return null == s ? 0 : s.lastX
        }
        getMaxLineWidth() {
            if (void 0 !== this.maxLinesWidth) return this.maxLinesWidth;
            for (var e, t = 0, s = 0, i = this.lines.length; s < i; s++)(e = this.getLineWidth(s)) > t && (t = e);
            return this.maxLinesWidth = t, t
        }
        getLineWidths() {
            for (var e = [], t = 0, s = this.lines.length; t < s; t++) e.push(this.getLineWidth(t));
            return e
        }
        get linesCount() {
            return this.lines.length
        }
        get plainText() {
            for (var e = "", t = this.pens, s = 0, i = t.length; s < i; s++) e += t[s].plainText;
            return e
        }
        get rawTextLength() {
            for (var e = 0, t = this.pens, s = 0, i = this.pens.length; s < i; s++) e += t[s].rawTextLength;
            return e
        }
        getSliceTagText(e, t, s) {
            if (void 0 === e && (e = 0), void 0 === t) {
                var i = this.lastPen;
                if (null == i) return "";
                t = i.endIndex
            }
            void 0 === s && (s = !1);
            for (var a, n, o, r, l, h, d = "", u = 0, c = this.pens.length; u < c && ((r = (a = this.pens[u]).endIndex) <= e || (a = this.pens[u], n = s ? a.wrapText : a.plainText, l = a.prop, (o = a.startIndex) >= e && r <= t || (n = n.substring(e - o, t - o)), this.tagToTextScope ? d += this.tagToText.call(this.tagToTextScope, n, l, h) : d += this.tagToText(n, l, h), h = l, !(r >= t))); u++);
            return d
        }
    }
    var j = {},
        N = D;
    const X = Phaser.Geom.Rectangle;
    var H = new P;
    var q = class {
            constructor() {
                this.hitAreas = []
            }
            destroy() {
                this.clear()
            }
            clear() {
                return H.pushMultiple(this.hitAreas), this
            }
            add(e, t, s, i, a) {
                var n = H.pop();
                return null === n ? n = new X(t, s, i, a) : n.setTo(t, s, i, a), n.key = e, this.hitAreas.push(n), this
            }
            getFirstHitArea(e, t) {
                for (var s, i = this.hitAreas, a = 0, n = i.length; a < n; a++)
                    if ((s = i[a]).contains(e, t)) return s;
                return null
            }
            drawBounds(e, t, s) {
                void 0 === t && (t = 16777215), s && e.save().scaleCanvas(s.scaleX, s.scaleY).rotateCanvas(s.rotation).translateCanvas(s.x, s.y);
                for (var i, a = this.hitAreas, n = 0, o = a.length; n < o; n++) i = a[n], e.lineStyle(1, t).strokeRect(i.x, i.y, i.width, i.height);
                return s && e.restore(), this
            }
        },
        U = function(e, t, s, i) {
            var a = this.hitAreaManager.getFirstHitArea(s, i);
            if (null !== a) {
                var n = a.key;
                this.parent.emit(`${e}-${n}`, t, s, i), this.parent.emit(e, n, t, s, i)
            }
        },
        K = function() {
            this.parent.on("pointerdown", (function(e, t, s, i) {
                U.call(this, "areadown", e, t, s)
            }), this).on("pointerup", (function(e, t, s, i) {
                U.call(this, "areaup", e, t, s)
            }), this)
        };
    const V = T.NO_NEWLINE,
        J = T.RAW_NEWLINE,
        Q = T.WRAPPED_NEWLINE,
        $ = T.NO_WRAP,
        Z = T.WORD_WRAP,
        ee = T.SPLITREGEXP;
    var te = [],
        se = new P;
    se.newline = function(e, t, s) {
        var i = this.pop();
        return null === i && (i = {}), i.text = e, i.width = t, i.newLineMode = s, i
    };
    var ie = function(e, t, s, i, a) {
        i <= 0 && (s = $);
        var n = te;
        if (se.pushMultiple(n), !e || !e.length) return n;
        for (var o, r, l, h = e.split(ee), d = 0, u = h.length; d < u; d++)
            if (o = h[d], l = d === u - 1 ? V : J, s !== $) {
                var c, p;
                if (r = 0 === d ? i - a : i, o.length <= 100)
                    if ((w = t(o)) <= r) {
                        n.push(se.newline(o, w, l));
                        continue
                    }
                for (var g, f = "", m = "", v = 0, y = 0, x = (c = s === Z ? o.split(" ") : o).length; y < x; y++) p = c[y], s === Z ? (f += p, y < x - 1 && (f += " ")) : f += p, (g = t(f)) > r && (0 === y ? n.push(se.newline("", 0, Q)) : (n.push(se.newline(m, v, Q)), f = p, s === Z && y < x - 1 && (f += " "), g = t(f)), r = i), m = f, v = g;
                n.push(se.newline(m, v, l))
            } else {
                var w = t(o);
                n.push(se.newline(o, w, l))
            }
        return n
    };
    const ae = Phaser.Utils.Objects.GetValue,
        ne = T.NO_WRAP,
        oe = T.NO_NEWLINE;
    class re {
        constructor(e) {
            this.parent = e.parent, this.context = ae(e, "context", null), this.canvas = this.context.canvas, this.parser = ae(e, "parser", null), this.defatultStyle = ae(e, "style", null), this.autoRound = !0, this.pensPool = ae(e, "pensPool", null), this.penManager = this.newPenManager(), this._tmpPenManager = null, this.hitAreaManager = new q;
            var t = this.context;
            this.getTextWidth = function(e) {
                return t.measureText(e).width
            }
        }
        destroy() {
            this.context = void 0, this.canvas = void 0, this.parser = void 0, this.defatultStyle = void 0, this.penManager && (this.penManager.destroy(), this.penManager = void 0), this._tmpPenManager && (this._tmpPenManager.destroy(), this._tmpPenManager = void 0), this.hitAreaManager && (this.hitAreaManager.destroy(), this.hitAreaManager = void 0)
        }
        updatePenManager(e, t, s, i, a) {
            if (void 0 === a && (a = this.penManager), a.freePens(), "" === e) return a;
            for (var n, o, r, l, h, d = this.canvas, u = this.context, c = 0, p = 0, g = this.parser.splitText(e), f = 0, m = g.length; f < m; f++)
                if (n = (l = this.parser.tagTextToProp(g[f], o)).plainText, (o = l.prop).img) {
                    var v = this.imageManager.getOuterWidth(o.img);
                    s > 0 && t !== ne && s < c + v && (a.addNewLinePen(), p += i, c = 0), a.addImagePen(c, p, v, B(o)), c += v
                } else if ("" !== n) {
                var y;
                this.context.save(), (r = this.parser.propToContextStyle(this.defatultStyle, o)).buildFont(), r.syncFont(d, u), r.syncStyle(d, u);
                for (var x = 0, w = (h = ie(n, this.getTextWidth, t, s, c)).length; x < w; x++) y = h[x], a.addTextPen(y.text, c, p, y.width, B(o), y.newLineMode), y.newLineMode !== oe ? (c = 0, p += i) : c += y.width;
                this.context.restore()
            }
            return a
        }
        get startXOffset() {
            return this.defatultStyle.strokeThickness / 2
        }
        get startYOffset() {
            var e = this.defatultStyle;
            return e.strokeThickness / 2 + e.metrics.ascent
        }
        get lines() {
            return this.penManager.lines
        }
        get desplayLinesCount() {
            var e = this.penManager.linesCount,
                t = this.defatultStyle.maxLines;
            return t > 0 && e > t && (e = t), e
        }
        get linesWidth() {
            return this.penManager.getMaxLineWidth()
        }
        get linesHeight() {
            var e = this.desplayLinesCount,
                t = this.defatultStyle.lineHeight * e;
            return e > 0 && (t -= this.defatultStyle.lineSpacing), t
        }
        get imageManager() {
            return this.parent.imageManager
        }
        newPenManager() {
            return new N({
                pensPool: this.pensPool,
                tagToText: this.parser.propToTagText,
                tagToTextScope: this.parser
            })
        }
        get tmpPenManager() {
            return null === this._tmpPenManager && (this._tmpPenManager = this.newPenManager()), this._tmpPenManager
        }
        getPlainText(e, t, s) {
            var i;
            if (null == e) i = this.penManager.plainText;
            else {
                var a = this.parser.splitText(e, 1);
                i = "";
                for (var n = 0, o = a.length; n < o; n++) i += a[n]
            }
            return null == t && null == s || (null == t && (t = 0), null == s && (s = i.length), i = i.substring(t, s)), i
        }
        getPenManager(e, t) {
            if (void 0 === e) return this.copyPenManager(t, this.penManager);
            void 0 === t && (t = this.newPenManager());
            var s = this.defatultStyle;
            return this.updatePenManager(e, s.wrapMode, s.wrapWidth, s.lineHeight, t), t
        }
        getText(e, t, s, i) {
            if (null == e) return this.penManager.getSliceTagText(t, s, i);
            var a = this.tmpPenManager,
                n = this.defatultStyle;
            return this.updatePenManager(e, n.wrapMode, n.wrapWidth, n.lineHeight, a), a.getSliceTagText(t, s, i)
        }
        copyPenManager(e, t) {
            return void 0 === t && (t = this.penManager), t.copy(e)
        }
        getTextWidth(e) {
            return void 0 === e && (e = this.penManager), e.getMaxLineWidth()
        }
        getLastPen(e) {
            return void 0 === e && (e = this.penManager), e.lastPen
        }
    }
    var le = {
        setInteractive: K
    };
    Object.assign(re.prototype, _, le);
    var he = re;
    const de = Phaser.Utils.Objects.GetValue;
    var ue, ce = class {
        constructor(e) {
            this.textureManager = e, this.images = {}
        }
        add(e, t) {
            if ("string" == typeof e) this._add(e, t);
            else if (Array.isArray(e))
                for (var s = 0, i = (a = e).length; s < i; s++) this._add(a[s]);
            else {
                var a = e;
                for (var e in a) this._add(e, a[e])
            }
            return this
        }
        _add(e, t) {
            void 0 === t && (t = {
                key: e
            });
            var s = t.key,
                i = t.frame,
                a = t.width,
                n = t.height;
            if (void 0 === a || void 0 === n) {
                var o = this.textureManager.getFrame(s, i),
                    r = o ? o.cutWidth : 0,
                    l = o ? o.cutHeight : 0;
                void 0 === a && void 0 === n ? (a = r, n = l) : void 0 === a ? a = r * (n / l) : void 0 === n && (n = l * (a / r))
            }
            this.images[e] = {
                key: s,
                frame: i,
                width: a,
                height: n,
                y: de(t, "y", 0),
                left: de(t, "left", 0),
                right: de(t, "right", 0)
            }
        }
        remove(e) {
            return this.images.hasOwnProperty(e) && delete this.images[e], this
        }
        get(e) {
            return this.images.hasOwnProperty(e) || this.textureManager.exists(e) && this.add(e), this.images[e]
        }
        getOuterWidth(e) {
            var t = this.get(e);
            return t ? t.width + t.left + t.right : 0
        }
        getFrame(e) {
            var t = this.get(e);
            return t ? this.textureManager.getFrame(t.key, t.frame) : void 0
        }
        hasTexture(e) {
            return !!this.getFrame(e)
        }
    };
    const pe = Phaser.DOM.AddToDOM,
        ge = Phaser.Display.Canvas.CanvasPool,
        fe = Phaser.GameObjects.GameObject,
        me = Phaser.Utils.Objects.GetValue,
        ve = Phaser.DOM.RemoveFromDOM,
        ye = T.SPLITREGEXP;
    var xe = {};
    class we extends fe {
        constructor(e, t, s, i, a, n, o) {
            if (void 0 === t && (t = 0), void 0 === s && (s = 0), super(e, n), this.renderer = e.sys.game.renderer, this.setPosition(t, s), this.setOrigin(0, 0), this.initPipeline(), this.canvas = ge.create(this), this.context = this.canvas.getContext("2d"), a) {
                if (a.hasOwnProperty("align")) {
                    var r = a.align;
                    delete a.align, a.halign = r
                }
                a.hasOwnProperty("stroke") && !a.hasOwnProperty("strokeThickness") && (a.strokeThickness = 1)
            }
            this.style = new E(this, a), this.autoRound = !0, this._text = void 0, this.padding = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, this.width = 1, this.height = 1, this.dirty = !1, 0 === this.style.resolution && (this.style.resolution = e.sys.game.config.resolution), this._crop = this.resetCropObject(), this.texture = e.sys.textures.addCanvas(null, this.canvas, !0), this.frame = this.texture.get(), this.frame.source.resolution = this.style.resolution, this.renderer.gl && (this.renderer.deleteTexture(this.frame.source.glTexture), this.frame.source.glTexture = null), xe.hasOwnProperty(n) || (xe[n] = new P), this.canvasText = new he({
                parent: this,
                context: this.context,
                parser: o,
                style: this.style,
                pensPool: xe[n]
            }), a && a.padding && this.setPadding(a.padding), this.setText(i), e.sys.game.events.on("contextrestored", (function() {
                this.dirty = !0
            }), this)
        }
        set text(e) {
            this.setText(e)
        }
        get text() {
            return this._text
        }
        initRTL() {
            this.style.rtl && (this.canvas.dir = "rtl", this.context.direction = "rtl", this.canvas.style.display = "none", pe(this.canvas, this.scene.sys.canvas), this.originX = 1)
        }
        setText(e) {
            return e || 0 === e || (e = ""), Array.isArray(e) && (e = e.join("\n")), e !== this._text && (this._text = e.toString(), this.updateText()), this
        }
        setStyle(e) {
            return this.style.setStyle(e)
        }
        setFont(e) {
            return this.style.setFont(e)
        }
        setFontFamily(e) {
            return this.style.setFontFamily(e)
        }
        setFontSize(e) {
            return this.style.setFontSize(e)
        }
        setFontStyle(e) {
            return this.style.setFontStyle(e)
        }
        setFixedSize(e, t) {
            return this.style.setFixedSize(e, t)
        }
        setBackgroundColor(e) {
            return this.style.setBackgroundColor(e)
        }
        setFill(e) {
            return this.style.setFill(e)
        }
        setColor(e) {
            return this.style.setColor(e)
        }
        setStroke(e, t) {
            return this.style.setStroke(e, t)
        }
        setShadow(e, t, s, i, a, n) {
            return this.style.setShadow(e, t, s, i, a, n)
        }
        setShadowOffset(e, t) {
            return this.style.setShadowOffset(e, t)
        }
        setShadowColor(e) {
            return this.style.setShadowColor(e)
        }
        setShadowBlur(e) {
            return this.style.setShadowBlur(e)
        }
        setShadowStroke(e) {
            return this.style.setShadowStroke(e)
        }
        setShadowFill(e) {
            return this.style.setShadowFill(e)
        }
        setWrapMode(e) {
            return this.style.setWrapMode(e)
        }
        setWrapWidth(e) {
            return this.style.setWrapWidth(e)
        }
        setAlign(e) {
            return this.style.setHAlign(e)
        }
        setLineSpacing(e) {
            return this.style.setLineSpacing(e)
        }
        setPadding(e, t, s, i) {
            if ("object" == typeof e) {
                var a = e,
                    n = me(a, "x", null);
                null !== n ? (e = n, s = n) : (e = me(a, "left", 0), s = me(a, "right", e));
                var o = me(a, "y", null);
                null !== o ? (t = o, i = o) : (t = me(a, "top", 0), i = me(a, "bottom", t))
            } else void 0 === e && (e = 0), void 0 === t && (t = e), void 0 === s && (s = e), void 0 === i && (i = t);
            return this.padding.left = e, this.padding.top = t, this.padding.right = s, this.padding.bottom = i, this.updateText(!1)
        }
        setResolution(e) {
            return this.style.setResolution(e)
        }
        setMaxLines(e) {
            return this.style.setMaxLines(e)
        }
        updateText(e) {
            void 0 === e && (e = !0);
            var t = this.canvasText,
                s = this.style;
            e && t.updatePenManager(this._text, s.wrapMode, s.wrapWidth, s.lineHeight);
            var i, a, n = this.padding;
            0 === s.fixedWidth ? (this.width = t.linesWidth + n.left + n.right, i = t.linesWidth) : (this.width = s.fixedWidth, (i = this.width - n.left - n.right) < t.linesWidth && (i = t.linesWidth)), 0 === s.fixedHeight ? (this.height = t.linesHeight + n.top + n.bottom, a = t.linesHeight) : (this.height = s.fixedHeight, (a = this.height - n.top - n.bottom) < t.linesHeight && (a = t.linesHeight));
            var o = this.width,
                r = this.height;
            this.updateDisplayOrigin();
            var l = s.resolution;
            o *= l, r *= l, o = Math.max(Math.ceil(o), 1), r = Math.max(Math.ceil(r), 1);
            var h = this.canvas,
                d = this.context;
            h.width !== o || h.height !== r ? (h.width = o, h.height = r, this.frame.setSize(o, r)) : d.clearRect(0, 0, o, r), d.save(), d.scale(l, l), t.draw(n.left, n.top, i, a), d.restore(), this.renderer.gl && (this.frame.source.glTexture = this.renderer.canvasToTexture(h, this.frame.source.glTexture, !0), this.frame.glTexture = this.frame.source.glTexture), this.dirty = !0;
            var u = this.input;
            return u && !u.customHitArea && (u.hitArea.width = this.width, u.hitArea.height = this.height), this
        }
        getTextMetrics() {
            return this.style.getTextMetrics()
        }
        toJSON() {
            var e = Te.ToJSON(this),
                t = {
                    autoRound: this.autoRound,
                    text: this._text,
                    style: this.style.toJSON(),
                    resolution: this.resolution,
                    padding: {
                        left: this.padding.left,
                        right: this.padding.right,
                        top: this.padding.top,
                        bottom: this.padding.bottom
                    }
                };
            return e.data = t, e
        }
        preDestroy() {
            this.style.rtl && ve(this.canvas), ge.remove(this.canvas), this.canvasText.destroy()
        }
        setInteractive(e, t, s) {
            return fe.prototype.setInteractive.call(this, e, t, s), this.canvasText.setInteractive(), this
        }
        getWrappedText(e, t, s) {
            return (e = this.canvasText.getText(e, t, s, !0)).split(ye)
        }
        getPlainText(e, t, s) {
            return this.canvasText.getPlainText(e, t, s)
        }
        getText(e, t, s) {
            return this.canvasText.getText(e, t, s, !1)
        }
        getSubString(e, t, s) {
            return this.getText(e, t, s)
        }
        copyPenManager(e) {
            return this.canvasText.copyPenManager(e)
        }
        getPenManager(e, t) {
            return this.canvasText.getPenManager(e, t)
        }
        setSize(e, t) {
            return this.setFixedSize(e, t)
        }
        resize(e, t) {
            return this.setFixedSize(e, t)
        }
        set lineSpacing(e) {
            this.setLineSpacing(e)
        }
        get lineSpacing() {
            return this.style.lineSpacing
        }
        get imageManager() {
            return e = this.scene.textures, void 0 === ue && (ue = new ce(e)), ue;
            var e
        }
        addImage(e, t) {
            return this.imageManager.add(e, t), this
        }
        drawAreaBounds(e, t) {
            return this.canvasText.hitAreaManager.drawBounds(e, t, this), this
        }
    }
    const Te = Phaser.GameObjects.Components;
    Phaser.Class.mixin(we, [Te.Alpha, Te.BlendMode, Te.ComputedSize, Te.Crop, Te.Depth, Te.Flip, Te.GetBounds, Te.Mask, Te.Origin, Te.Pipeline, Te.ScrollFactor, Te.Tint, Te.Transform, Te.Visible, y]);
    var ke = we,
        be = {
            plainText: null,
            prevProp: null
        },
        Se = new E;
    var Ge = function(e) {
            for (var t, s, i, a = {}, n = 0, o = (e = e.split(";")).length; n < o; n++)
                if (s = (t = e[n].split(":"))[0], i = t[1], !Ee(s) && !Ee(i)) {
                    switch (s) {
                        case "stroke":
                            var r = i.split(" ");
                            i = {}, (h = r.length) >= 1 && (i.color = r[0]), h >= 2 && (i.thinkness = parseInt(r[1].replace("px", "")));
                            break;
                        case "shadow":
                            var l = i.split(" ");
                            i = {}, (h = l.length) >= 1 && (i.color = l[0]), h >= 2 && (i.offsetX = parseInt(l[1].replace("px", ""))), h >= 3 && (i.offsetY = parseInt(l[2].replace("px", ""))), h >= 4 && (i.blur = parseInt(l[3].replace("px", "")));
                            break;
                        case "u":
                        case "underline":
                            var h, d = i.split(" ");
                            i = {}, (h = d.length) >= 1 && (i.color = d[0]), h >= 2 && (i.thinkness = parseInt(d[1].replace("px", ""))), h >= 3 && (i.offset = parseInt(d[2].replace("px", "")))
                    }
                    a[s] = i
                }
            return a
        },
        Ee = function(e) {
            return 0 === (e = e.replace(Ae, "")).length
        },
        _e = /<\s*class=["|']([^"|']+)["|']\s*\>([\s\S]*?)<\s*\/class\s*\>|<\s*style=["|']([^"|']+)["|']\s*\>([\s\S]*?)<\s*\/style\s*\>/g,
        Pe = /<\s*class=/i,
        Me = /<\s*class=["|']([^"|']+)["|']\s*\>([\s\S]*?)<\s*\/class\s*\>/,
        Oe = /<\s*style=/i,
        Ce = /<\s*style=["|']([^"|']+)["|']\s*\>([\s\S]*?)<\s*\/style\s*\>/,
        Ae = /^\s+|\s+$/,
        Ie = class {
            constructor(e) {
                void 0 === e && (e = {}), this.tags = e
            }
            addTag(e, t) {
                this.tags[e] = t
            }
            splitText(e, t) {
                for (var s, i, a, n = [], o = 0, r = e.length, l = r; s = _e.exec(e);) i = s[0], o < (l = _e.lastIndex - i.length) && n.push(e.substring(o, l)), void 0 === t ? n.push(i) : 1 === t && (Pe.test(i) ? (a = i.match(Me), n.push(a[2])) : Oe.test(i) && (a = i.match(Ce), n.push(a[2]))), o = _e.lastIndex;
                return o < r && n.push(e.substring(o, r)), n
            }
            tagTextToProp(e, t) {
                var s, i;
                if (Pe.test(e)) {
                    if (null != (o = e.match(Me))) {
                        var a = o[1],
                            n = this.tags;
                        (i = n.hasOwnProperty(a) ? n[a] : {})._class = a, s = o[2]
                    }
                } else if (Oe.test(e)) {
                    var o;
                    if (null != (o = e.match(Ce))) {
                        var r = o[1];
                        (i = Ge(r))._style = r, s = o[2]
                    }
                }
                null == s && (s = e), null == i && (i = {});
                var l = be;
                return l.plainText = s, l.prop = i, l
            }
            propToContextStyle(e, t) {
                var s = Se;
                if (t.hasOwnProperty("img")) s.image = t.img;
                else {
                    if (s.image = null, t.hasOwnProperty("family") || t.hasOwnProperty("fontFamily") || t.hasOwnProperty("font-family")) {
                        var i = t.hasOwnProperty("family") ? t.family : t.hasOwnProperty("fontFamily") ? t.fontFamily : t["font-family"];
                        s.fontFamily = i
                    } else s.fontFamily = e.fontFamily;
                    if (t.hasOwnProperty("size") || t.hasOwnProperty("fontSize") || t.hasOwnProperty("font-size")) {
                        var a = t.hasOwnProperty("size") ? t.size : t.hasOwnProperty("fontSize") ? t.fontSize : t["font-size"];
                        "number" == typeof a && (a = a.toString() + "px"), s.fontSize = a
                    } else s.fontSize = e.fontSize;
                    if (t.hasOwnProperty("style") || t.hasOwnProperty("fontStyle") || t.hasOwnProperty("font-style")) {
                        var n = t.hasOwnProperty("style") ? t.style : t.hasOwnProperty("fontStyle") ? t.fontStyle : t["font-style"];
                        s.fontStyle = n
                    } else s.fontStyle = e.fontStyle;
                    if (t.hasOwnProperty("color") || t.hasOwnProperty("font-color")) {
                        var o = t.hasOwnProperty("color") ? t.color : t["font-color"];
                        s.color = o
                    } else s.color = e.color;
                    if (t.hasOwnProperty("stroke")) {
                        var r = t.stroke;
                        s.stroke = r.hasOwnProperty("color") ? r.color : e.stroke, s.strokeThickness = r.hasOwnProperty("thinkness") ? r.thinkness : e.strokeThickness
                    } else s.stroke = e.stroke, s.strokeThickness = e.strokeThickness
                }
                if (t.hasOwnProperty("shadow")) {
                    var l = t.shadow;
                    s.shadowColor = l.hasOwnProperty("color") ? l.color : e.shadowColor, s.shadowOffsetX = l.hasOwnProperty("offsetX") ? l.offsetX : e.shadowOffsetX, s.shadowOffsetY = l.hasOwnProperty("offsetY") ? l.offsetY : e.shadowOffsetY, s.shadowBlur = l.hasOwnProperty("blur") ? l.blur : e.shadowBlur, s.shadowStroke = !0, s.shadowFill = !0
                } else s.shadowColor = e.shadowColor, s.shadowOffsetX = e.shadowOffsetX, s.shadowOffsetY = e.shadowOffsetY, s.shadowBlur = e.shadowBlur, s.shadowStroke = e.shadowStroke, s.shadowFill = e.shadowFill;
                if (t.hasOwnProperty("u") || t.hasOwnProperty("underline")) {
                    var h = t.hasOwnProperty("u") ? t.u : t.underline;
                    s.underlineColor = h.hasOwnProperty("color") ? h.color : e.underlineColor, s.underlineThickness = h.hasOwnProperty("thinkness") ? h.thinkness : e.underlineThickness, s.underlineOffset = h.hasOwnProperty("offset") ? h.offset : e.underlineOffset
                } else s.underlineColor = e.underlineColor, s.underlineThickness = e.underlineThickness, s.underlineOffset = e.underlineOffset;
                return s
            }
            propToTagText(e, t, s) {
                return t.hasOwnProperty("_class") ? "" === e && this.isTextTag(t._class) ? "" : "<class='" + t._class + "'>" + e + "</class>" : t.hasOwnProperty("_style") ? "<style='" + t._style + "'>" + e + "</style>" : void 0
            }
            destroy() {
                this.tags = void 0
            }
            isTextTag(e) {
                var t = this.tags[e];
                return !!t && null == t.img
            }
        };
    const Be = Phaser.Utils.Objects.GetValue;
    var Le = class extends ke {
        constructor(e, t, s, i, a) {
            var n = Be(a, "tags", void 0),
                o = new Ie(n);
            super(e, t, s, i, a, "rexTagText", o), this.parser = o
        }
        addTag(e, t) {
            return this.parser.addTag(e, t), this.updateText(!0)
        }
        addTags(e) {
            for (var t in e) this.parser.addTag(t, e[t]);
            return this.updateText(!0)
        }
        preDestroy() {
            super.preDestroy(), this.parser.destroy(), this.parser = void 0
        }
    };
    const We = Phaser.Utils.Objects.GetAdvancedValue,
        Fe = Phaser.GameObjects.BuildGameObject;
    Phaser.GameObjects.GameObjectFactory.register("rexTagText", (function(e, t, s, i) {
        var a = new Le(this.scene, e, t, s, i);
        return this.scene.add.existing(a), a
    })), Phaser.GameObjects.GameObjectCreator.register("rexTagText", (function(e, t) {
        var s = We(e, "text", ""),
            i = We(e, "style", null),
            a = We(e, "padding", null);
        null !== a && (i.padding = a), void 0 !== t && (e.add = t);
        var n = new Le(this.scene, 0, 0, s, i);
        return Fe(this.scene, n, e), n.autoRound = We(e, "autoRound", !0), n.resolution = We(e, "resolution", 1), n
    }));
    var Ye = Le,
        ze = {
            setEventEmitter(e, t) {
                return void 0 === t && (t = Phaser.Events.EventEmitter), this._privateEE = void 0 === e, this._eventEmitter = this._privateEE ? new t : e, this
            },
            destroyEventEmitter() {
                return this._eventEmitter && this._privateEE && this._eventEmitter.shutdown(), this
            },
            getEventEmitter() {
                return this._eventEmitter
            },
            on: function() {
                return this._eventEmitter && this._eventEmitter.on.apply(this._eventEmitter, arguments), this
            },
            once: function() {
                return this._eventEmitter && this._eventEmitter.once.apply(this._eventEmitter, arguments), this
            },
            off: function() {
                return this._eventEmitter && this._eventEmitter.off.apply(this._eventEmitter, arguments), this
            },
            emit: function(e) {
                return this._eventEmitter && e && this._eventEmitter.emit.apply(this._eventEmitter, arguments), this
            },
            addListener: function() {
                return this._eventEmitter && this._eventEmitter.addListener.apply(this._eventEmitter, arguments), this
            },
            removeListener: function() {
                return this._eventEmitter && this._eventEmitter.removeListener.apply(this._eventEmitter, arguments), this
            },
            removeAllListeners: function() {
                return this._eventEmitter && this._eventEmitter.removeAllListeners.apply(this._eventEmitter, arguments), this
            },
            listenerCount: function() {
                return this._eventEmitter ? this._eventEmitter.listenerCount.apply(this._eventEmitter, arguments) : 0
            },
            listeners: function() {
                return this._eventEmitter ? this._eventEmitter.listeners.apply(this._eventEmitter, arguments) : []
            }
        };
    const Re = Phaser.Scene;
    var De = function(e) {
            return e instanceof Re
        },
        je = function(e) {
            return De(e) ? e : e.scene && De(e.scene) ? e.scene : e.parent && e.parent.scene && De(e.parent.scene) ? e.parent.scene : void 0
        };
    const Ne = Phaser.Utils.Objects.GetFastValue,
        Xe = Phaser.Utils.Objects.GetValue;
    class He {
        constructor(e, t) {
            this.gameObject = e, this.scene = je(e), this.setEventEmitter(Xe(t, "eventEmitter", void 0)), this.timer = null, this.resetFromJSON(t), this.boot()
        }
        resetFromJSON(e) {
            this.setTypeMode(Xe(e, "typeMode", 0)), this.setTypeSpeed(Xe(e, "speed", 333)), this.setTextCallback = Ne(e, "setTextCallback", null), this.setTextCallbackScope = Ne(e, "setTextCallbackScope", null), this.typingIdx = Ne(e, "typingIdx", 0), this.text = qe(Ne(e, "text", "")), this.textLen = Ne(e, "textLen", 0), this.insertIdx = Ne(e, "insertIdx", null);
            var t = Ne(e, "elapsed", null);
            return null !== t && this.start(void 0, void 0, this.typingIdx, t), this
        }
        toJSON() {
            var e, t = this.getTimer();
            return e = t ? t.elapsed : null, {
                typeMode: this.typeMode,
                speed: this.speed,
                setTextCallback: this.setTextCallback,
                setTextCallbackScope: this.setTextCallbackScope,
                typingIdx: this.typingIdx,
                text: this.text,
                textLen: this.textLen,
                insertIdx: this.insertIdx,
                elapsed: e
            }
        }
        boot() {
            return this.gameObject.once && this.gameObject.on("destroy", this.destroy, this), this
        }
        shutdown() {
            return this.destroyEventEmitter(), this.freeTimer(), this.gameObject = void 0, this.scene = void 0, this
        }
        destroy() {
            return this.shutdown(), this
        }
        setTypeMode(e) {
            return "string" == typeof e && (e = Ue[e]), this.typeMode = e, this
        }
        setTypeSpeed(e) {
            return this.speed = e, this
        }
        get isTyping() {
            return null !== this.getTimer()
        }
        get isLastChar() {
            return this.typingIdx === this.textLen
        }
        start(e, t, s, i) {
            return void 0 !== e && this.setTypingContent(e), void 0 !== t && (this.speed = t), void 0 === s && (s = 0), this.typingIdx = s + 1, 0 === this.speed ? this.stop(!0) : this.startTimer(i), this
        }
        appendText(e) {
            var t = this.text.concat(qe(e));
            return this.isTyping ? this.setTypingContent(t) : this.start(t, void 0, this.textLen), this
        }
        stop(e) {
            return this.getTimer() && this.freeTimer(), e && (this.typingIdx = this.textLen, this.setText(this.text), this.emit("type"), this.emit("complete", this, this.gameObject)), this
        }
        pause() {
            var e = this.getTimer();
            return e && (e.paused = !0), this
        }
        resume() {
            var e = this.getTimer();
            return e && (e.paused = !1), this
        }
        setTypingContent(e) {
            return this.text = qe(e), this.textLen = this.getTextLength(this.text), this
        }
        onTyping() {
            var e = this.getTypingString(this.text, this.typingIdx, this.textLen, this.typeMode);
            this.setText(e), this.emit("type"), this.isLastChar ? (this.freeTimer(), this.emit("complete", this, this.gameObject)) : (this.timer.delay = this.speed, this.typingIdx++)
        }
        getTypingString(e, t, s, i) {
            var a;
            if (0 === i) {
                var n = 0,
                    o = t;
                this.insertIdx = o, a = this.getSubString(e, n, o)
            } else if (1 === i) {
                n = (o = s) - t;
                this.insertIdx = 0, a = this.getSubString(e, n, o)
            } else if (2 === i) {
                var r = s / 2;
                o = (n = Math.floor(r - t / 2)) + t;
                this.insertIdx = t % 2 ? t : 0, a = this.getSubString(e, n, o)
            } else if (3 === i) {
                var l, h = Math.floor(t / 2);
                if (h > 0) {
                    n = (o = s) - h;
                    l = this.getSubString(e, n, o)
                } else l = "";
                var d, u = t - h;
                if (u > 0) {
                    o = (n = 0) + u;
                    this.insertIdx = o, d = this.getSubString(e, n, o)
                } else d = "", this.insertIdx = 0;
                a = d + l
            }
            return a
        }
        startTimer(e) {
            var t;
            return this.timer && this.freeTimer(), void 0 === e ? (0, t = 0) : (this.speed, t = e), this.timer = this.scene.time.addEvent({
                delay: 0,
                startAt: t,
                loop: !0,
                callback: this.onTyping,
                callbackScope: this
            }), this
        }
        getTimer() {
            return this.timer
        }
        freeTimer() {
            return this.timer && (this.timer.remove(), this.timer = null), this
        }
        setText(e) {
            this.setTextCallback && (e = this.setTextCallbackScope ? this.setTextCallback.call(this.setTextCallbackScope, e, this.isLastChar, this.insertIdx) : this.setTextCallback(e, this.isLastChar, this.insertIdx)), this.gameObject.setText(e)
        }
        getTextLength(e) {
            var t = this.gameObject;
            return t.getPlainText ? t.getPlainText(e).length : e.length
        }
        getSubString(e, t, s) {
            var i = this.gameObject;
            return i.getSubString ? i.getSubString(e, t, s) : e.slice(t, s)
        }
    }
    Object.assign(He.prototype, ze);
    var qe = function(e) {
        return Array.isArray(e) ? e = e.join("\n") : "number" == typeof e && (e = e.toString()), e
    };
    const Ue = {
        "left-to-right": 0,
        "right-to-left": 1,
        "middle-to-sides": 2,
        "sides-to-middle": 3
    };
    var Ke = He,
        Ve = class extends p {
            constructor(e, t, s) {
                super(), this.x = e, this.y = t, this.isIntro = s, this.hideEndDialogueMarkerOnMessageComplete = !1, this.endDialogueMarkerGraphics = null, this.character = null, this.characterWidth = null, this.characterExpression = null, this.speechBubbleGraphics = null, this.speechBubbleText = null, this.expressions = {}, this.expressions.default = {
                    faceY: -90,
                    bodyAngle: 0
                }, this.expressions.surprise = {
                    faceY: -105,
                    bodyAngle: -4
                }, this.expressions.sadness = {
                    faceY: -80,
                    bodyAngle: 5
                }, this.expressions.despair = {
                    faceY: -70,
                    bodyAngle: 7
                }, this.expressions.glee = {
                    faceY: -100,
                    bodyAngle: -4
                }, this.expressions.nervous = {
                    faceY: -85,
                    bodyAngle: 0
                }, this.expressions.confused = {
                    faceY: -100,
                    bodyAngle: -2
                }, this.expressions.neutral = {
                    faceY: -90,
                    bodyAngle: 0
                }, this.expressions.amused = {
                    faceY: -95,
                    bodyAngle: 0
                }, this.expressions.thoughtful = {
                    faceY: -70,
                    bodyAngle: 0
                }, this.isTalking = !1
            }
            create(e) {
                const t = this;
                this.characterWidth = 250;
                this.speechBubbleGraphics = e.add.graphics({
                    fillStyle: {
                        color: 16777215
                    }
                }), this.isIntro && this.speechBubbleGraphics.setAlpha(0);
                const s = this.isIntro ? this.y - 40 : this.y,
                    a = this.isIntro ? this.y + 130 + 20 - 40 : this.y + 130 + 20,
                    n = this.isIntro ? this.y + 130 - 40 : this.y + 130;
                this.speechBubbleGraphics.setDepth(1), this.speechBubbleGraphics.fillRoundedRect(this.x, s, 760, 130, 10), this.speechBubbleGraphics.fillTriangle(this.x + 120, a, this.x + 105, n, this.x + 135, n), this.endDialogueMarkerGraphics = e.add.graphics({
                    fillStyle: {
                        color: 13421772
                    }
                }), this.endDialogueMarkerGraphics.setDepth(1), this.hideEndDialogueMarker();
                const o = new Phaser.Geom.Circle(this.x + 760 - 10 - 15, this.y + 130 - 10 - 15, 10);
                this.endDialogueMarkerGraphics.fillCircleShape(o), e.tweens.add({
                    targets: this.endDialogueMarkerGraphics,
                    alpha: 0,
                    duration: 500,
                    repeat: -1,
                    yoyo: !0
                });
                const r = i;
                r.wrap = {
                    mode: "word",
                    width: 730
                }, r.tags = {
                    exclamation: {
                        fontStyle: "bold"
                    }
                }, this.speechBubbleText = new Ye(e, this.x + 15, this.y + 15, "", r), this.speechBubbleText.setDepth(1), e.add.existing(this.speechBubbleText), this.speechBubbleTextTyping = new Ke(this.speechBubbleText, {
                    speed: 30
                }), this.speechBubbleTextTyping.on("complete", () => {
                    t.messageCompleted.call(t)
                });
                const l = this.isIntro ? this.x - this.characterWidth : this.x + this.characterWidth / 2;
                this.character = e.add.container(l, this.y + 130 + 230);
                const h = e.add.image(0, 0, "guide_character");
                this.character.add(h);
                const d = this.isIntro ? "expression_surprise" : "expression_default",
                    u = this.isIntro ? this.expressions.surprise.faceY : this.expressions.default.faceY;
                this.characterExpression = e.add.sprite(-10, u, d), this.character.add(this.characterExpression);
                e.tweens.addCounter({
                    duration: 100,
                    yoyo: !0,
                    loop: -1,
                    loopDelay: 2e3,
                    from: 0,
                    to: 1,
                    onUpdate: e => {
                        const s = 15 * e.getValue();
                        this.characterExpression.setCrop(0, s, t.characterExpression.width, t.characterExpression.height)
                    }
                });
                const c = e.tweens.createTimeline();
                this.isIntro ? (c.add({
                    delay: 200,
                    targets: this.character,
                    x: this.x + this.characterWidth / 2,
                    duration: 400,
                    angle: 15,
                    ease: "Power1"
                }), c.add({
                    targets: this.character,
                    duration: 400,
                    angle: -7,
                    ease: "Power1"
                }), c.add({
                    targets: this.character,
                    duration: 400,
                    angle: 0,
                    ease: "Power1"
                }), c.add({
                    offset: "-=300",
                    targets: this.speechBubbleGraphics,
                    props: {
                        y: {
                            value: "+=40",
                            duration: 500,
                            ease: "Bounce.easeOut"
                        },
                        alpha: {
                            value: 1,
                            duration: 300,
                            ease: "Linear"
                        }
                    },
                    onComplete: () => {
                        this.emit("ready")
                    }
                })) : c.add({
                    targets: this.speechBubbleGraphics,
                    duration: 100,
                    onComplete: () => {
                        this.emit("ready")
                    }
                }), c.play()
            }
            displayMessage(e, t) {
                this.isTalking = !0, this.hideEndDialogueMarker();
                const s = this.convertDialogToTagText(e);
                this.speechBubbleTextTyping.start(s), this.hideEndDialogueMarkerOnMessageComplete = t
            }
            messageCompleted() {
                this.isTalking = !1, this.hideEndDialogueMarkerOnMessageComplete || this.showEndDialogueMarker()
            }
            showEndDialogueMarker() {
                this.endDialogueMarkerGraphics.setVisible(!0)
            }
            hideEndDialogueMarker() {
                this.endDialogueMarkerGraphics.setVisible(!1)
            }
            updateExpression(e, t) {
                this.characterExpression.setTexture("expression_" + e), this.characterExpression.isCropped = !1;
                const s = this.expressions[e];
                t.tweens.add({
                    targets: this.characterExpression,
                    y: s.faceY,
                    duration: 200,
                    ease: "Power1"
                }), t.tweens.add({
                    targets: this.character,
                    angle: s.bodyAngle,
                    duration: 600,
                    ease: "Power2"
                })
            }
            hide(e) {
                e.tweens.add({
                    targets: this.character,
                    x: this.x - this.characterWidth,
                    duration: 800,
                    angle: -15,
                    ease: "Power1"
                }), e.tweens.add({
                    targets: [this.speechBubbleGraphics, this.speechBubbleText],
                    alpha: 0,
                    duration: 200
                })
            }
            convertDialogToTagText(e) {
                const t = [{
                    token: "*",
                    className: "exclamation"
                }, {
                    token: "_",
                    className: "underline"
                }];
                let s = "",
                    i = "";
                for (let a = 0; a < e.length; a++) {
                    const n = e[a],
                        o = t.some(e => e.token === n);
                    if (0 !== a || o || (s += '<class="normal">', i = "normal"), a !== e.length - 1 || !o)
                        if (o) {
                            const e = t.find(e => e.token === n);
                            i === e.className ? (s += "</class>", s += '<class="normal">', i = "normal") : (0 !== a && (s += "</class>"), s += `<class="${e.className}">`, i = e.className)
                        } else s += e[a]
                }
                return s += "</class>", s
            }
        },
        Je = class {
            constructor(e, t) {
                this.x = e, this.y = t, this.muteIcon = null, this.isMuted = !1
            }
            create(e) {
                const t = e.add.image(this.x, this.y, "icon_audio");
                t.setAlpha(.7), t.setInteractive({
                    cursor: "pointer"
                }), this.muteIcon = e.add.image(this.x, this.y, "icon_audio_mute"), this.muteIcon.setAlpha(0);
                const s = this;
                t.on("pointerdown", () => {
                    s.toggleMute(e)
                }), e.sound.mute && (this.isMuted = !0, this.muteIcon.setAlpha(.7))
            }
            toggleMute(e) {
                this.isMuted ? (e.sound.mute = !1, this.isMuted = !1, e.tweens.add({
                    targets: this.muteIcon,
                    alpha: 0,
                    duration: 100
                })) : (e.sound.mute = !0, this.isMuted = !0, e.tweens.add({
                    targets: this.muteIcon,
                    alpha: .7,
                    duration: 100
                }))
            }
        };
    const Qe = e => e[Math.floor(Math.random() * e.length)];
    var $e = 0,
        Ze = 1,
        et = [{
            name: "Red",
            imageKey: "tile_01"
        }, {
            name: "Blue",
            imageKey: "tile_02"
        }, {
            name: "Green",
            imageKey: "tile_03"
        }, {
            name: "Yellow",
            imageKey: "tile_04"
        }],
        tt = class extends p {
            constructor(e, t, s, i, a, n, o, r, l) {
                super(), this.isInitialized = !1, this.isBlocked = !0, this.offsetX = i, this.offsetY = a, this.tileSize = s, this.tileGridHeight = t, this.tileGridWidth = e, this.tileGrid = [], this.tileImageContainer = null, this.playAreaOffset = this.tileGridHeight * this.tileSize, this.gridBackground = null, this.onTileSelect = n, this.onTileMatch = o, this.tileGenerationBehavior = r, this.matchSound = null, this.swapSound = null, this.queue = l, this.matches = 0, this.preSetTileGrid = [
                    [0, 0, 2, 3, 0, 0],
                    [3, 2, 2, 3, 3, 2],
                    [3, 2, 1, 0, 3, 2],
                    [1, 1, 0, 1, 0, 0],
                    [3, 2, 1, 0, 3, 2],
                    [3, 2, 2, 3, 3, 2]
                ];
                for (let s = 0; s < 2 * t; s++) {
                    this.tileGrid[s] = [];
                    for (let t = 0; t < e; t++) this.tileGrid[s][t] = null
                }
            }
            create(e) {
                this.tileImageContainer = e.add.container(), this.tileImageContainer.setDepth(1);
                const t = e.make.graphics();
                t.fillStyle(16777215, 1), t.fillRect(this.offsetX - this.tileSize / 2, this.offsetY + this.tileGridHeight * this.tileSize - this.tileSize / 2, this.tileGridWidth * this.tileSize, this.tileGridHeight * this.tileSize), this.tileImageContainer.mask = new Phaser.Display.Masks.GeometryMask(e, t), this.gridBackground = e.add.graphics({
                    fillStyle: {
                        color: 74752
                    }
                }).setAlpha(.4), this.gridBackground.fillRoundedRect(this.offsetX - this.tileSize / 2 - 5, this.offsetY + this.tileGridHeight * this.tileSize - this.tileSize / 2 - 5, this.tileGridWidth * this.tileSize + 10, this.tileGridHeight * this.tileSize + 10, 6), this.gridBackground.setAlpha(0), this.gridBackground.setDepth(0), this.matchSounds = [e.sound.add("match"), e.sound.add("match_combo_01"), e.sound.add("match_combo_02"), e.sound.add("match_combo_03"), e.sound.add("match_combo_04"), e.sound.add("match_combo_05")], this.matchSound = this.matchSounds[0], this.swapSound = e.sound.add("swap")
            }
            update(e) {
                const t = this;
                if (!t.isInitialized) return;
                const s = t.getMatches();
                s.length > 0 && (t.matches++, t.onTileMatch(e, s), s.forEach(e => {
                    e.hasMatched = !0
                }), t.emit("match"));
                let i = [];
                if (s.forEach(t => {
                        i.push(t.destroy(e, this.tileImageContainer))
                    }), i.length > 0 && (t.matchSound.play(), t.queue.push(() => Promise.all(i))), t.forEachTile((e, s, i) => {
                        null !== e && e.state === Ze && (t.tileGrid[i][s] = null)
                    }), i.length > 0) return;
                let a = [];
                for (let s = 0; s < this.tileGridWidth; s++) {
                    let i = 2 * this.tileGridHeight - 1;
                    for (; i >= 0;) {
                        if (null === t.tileGrid[i][s]) {
                            let n = i - 1;
                            for (; n >= 0;) {
                                let o = t.tileGrid[n][s];
                                null !== o && (t.tileGrid[i][s] = o, t.tileGrid[n][s] = null, a.push(this.getTileDrop(e, o, s, i)), i--), n--
                            }
                        }
                        i--
                    }
                }
                t.forEachPlayableTile((s, i, a) => {
                    if (null === s) {
                        const s = a - t.tileGridHeight,
                            n = t.createTile(t.getTileType(i, a, t.tileGenerationBehavior), i, s, !1);
                        t.tileGrid[s][i] = n, n.create(e), t.tileImageContainer.add(n.image)
                    }
                }), a.length > 0 && t.queue.push(() => Promise.all(a))
            }
            swapTiles(e, t, s) {
                let i = this;
                i.swapSound.play(), i.queue.push(() => {
                    let a = t.x,
                        n = t.y,
                        o = t.tileGridX,
                        r = t.tileGridY,
                        l = s.x,
                        h = s.y,
                        d = s.tileGridX,
                        u = s.tileGridY,
                        c = s.updatePosition(e, a, n, o, r);
                    i.tileGrid[r][o] = s;
                    let p = t.updatePosition(e, l, h, d, u);
                    return i.tileGrid[u][d] = t, Promise.all([c, p])
                })
            }
            hasMatches(e, t) {
                return this.getMatches(e, t).length > 0
            }
            getMatches(e, t) {
                const s = this,
                    i = [];
                s.forEachTile((a, n, o) => {
                    if (void 0 !== e && n !== e && void 0 !== t && o !== t) return;
                    if (!this.isPlayable(a)) return;
                    if (a.hasMatched) return;
                    const r = a.tileType,
                        l = [],
                        h = [];
                    let d = n + 1;
                    for (; d < s.tileGridWidth;) {
                        const e = s.tileGrid[o][d];
                        if (null == e || r.name !== e.tileType.name) break;
                        l.push(e), d++
                    }
                    for (d = n - 1; d > 0;) {
                        const e = s.tileGrid[o][d];
                        if (null == e || r.name !== e.tileType.name) break;
                        l.push(e), d--
                    }
                    let u = o + 1;
                    for (; u < s.tileGridHeight;) {
                        const e = s.tileGrid[u][n];
                        if (null == e || r.name !== e.tileType.name) break;
                        h.push(e), u++
                    }
                    for (u = o - 1; u > 0;) {
                        const e = s.tileGrid[u][n];
                        if (null == e || r.name !== e.tileType.name) break;
                        h.push(e), u--
                    }
                    h.length > 1 && i.push(...h), l.length > 1 && i.push(...l), (h.length > 1 || l.length > 1) && i.push(a)
                });
                const a = [];
                return i.forEach(e => {
                    a.some(t => t.x === e.x && t.y === e.y) || a.push(e)
                }), a
            }
            forEachTile(e) {
                for (let t = 0; t < 2 * this.tileGridHeight; t++)
                    for (let s = 0; s < this.tileGridWidth; s++) e(this.tileGrid[t][s], s, t)
            }
            forEachPlayableTile(e) {
                for (let t = this.tileGridHeight; t < 2 * this.tileGridHeight; t++)
                    for (let s = 0; s < this.tileGridWidth; s++) e(this.tileGrid[t][s], s, t)
            }
            createTile(e, t, s, i, a) {
                return new class {
                    constructor(e, t, s, i, a, n, o, r) {
                        this.tileType = e, this.x = t, this.y = s, this.tileGridX = i, this.tileGridY = a, this.onTileSelect = r, this.image = null, this.state = $e, this.isActivated = !1, this.isBlocked = o, this.hasMatched = !1, this.initialDrag = void 0 === n ? 1 : n, this.hasDragged = void 0 === n
                    }
                    create(e) {
                        this.image = e.add.image(this.x, this.y, this.tileType.imageKey), this.image.setInteractive(), this.image.on("pointerdown", () => {
                            this.onTileSelect(e, this)
                        }), this.isBlocked && this.image.setAlpha(0)
                    }
                    activate() {
                        this.isActivated = !0, this.image.setTintFill(16777215)
                    }
                    deactivate() {
                        this.isActivated = !1, this.image.clearTint()
                    }
                    updatePosition(e, t, s, i, a, n) {
                        const o = this,
                            r = Math.abs(o.y - s);
                        return new Promise((l, h) => {
                            o.x = t, o.y = s, o.tileGridX = i, o.tileGridY = a;
                            const d = {
                                targets: o.image,
                                x: t,
                                y: s,
                                ease: n ? "Sine.easeIn" : "Power1",
                                duration: n ? Math.max(150, r) : 500,
                                onComplete: () => {
                                    l()
                                }
                            };
                            this.hasDragged || (d.delay = 200 - 200 * o.initialDrag, d.alpha = .5, d.ease = "Sine", this.hasDragged = !0), e.tweens.add(d)
                        })
                    }
                    destroy(e, t) {
                        let s = this;
                        if (s.state === Ze) return;
                        s.state = Ze;
                        const i = e.add.image(s.x, s.y, s.tileType.imageKey);
                        i.setTintFill(16777215), i.alpha = 0;
                        const a = [];
                        for (let t = 0; t < 8; t++) {
                            const t = e.add.graphics({
                                    fillStyle: {
                                        color: 16777215
                                    },
                                    alpha: 0
                                }),
                                s = new Phaser.Geom.Circle(this.x, this.y, Phaser.Math.Between(0, 10));
                            t.fillCircleShape(s), a.push(t)
                        }
                        return new Promise((n, o) => {
                            t.remove(s.image), s.image.destroy(), i.setAlpha(1), e.tweens.add({
                                targets: i,
                                alpha: 0,
                                duration: 250,
                                ease: "Cubic.easeOut",
                                onComplete: () => {
                                    t.remove(i), i.destroy(), a.forEach(e => {
                                        t.remove(e), e.destroy()
                                    }), n()
                                }
                            }), a.forEach((t, s) => {
                                t.setAlpha(1);
                                let i = null,
                                    a = null;
                                switch (s) {
                                    case 0:
                                        a = "-";
                                    case 1:
                                        i = "+", a = "-";
                                        break;
                                    case 2:
                                        i = "+";
                                        break;
                                    case 3:
                                        i = "+", a = "+";
                                        break;
                                    case 4:
                                        a = "+";
                                        break;
                                    case 5:
                                        a = "+", i = "-";
                                    case 6:
                                        i = "-";
                                        break;
                                    case 7:
                                        a = "-", i = "-"
                                }
                                const n = {
                                    targets: t,
                                    alpha: 0,
                                    duration: 250,
                                    ease: "Cubic.easeOut"
                                };
                                null != i && (n.x = i + "=45"), null != a && (n.y = a + "=45"), e.tweens.add(n)
                            })
                        })
                    }
                    disappear(e) {
                        e.tweens.add({
                            targets: this.image,
                            duration: 500,
                            y: "-=50",
                            angle: Phaser.Math.Between(-15, 15),
                            alpha: 0,
                            delay: Phaser.Math.Between(0, 500),
                            ease: "Power1"
                        })
                    }
                    block(e) {
                        this.isBlocked = !0, e.tweens.add({
                            targets: this.image,
                            alpha: .5,
                            duration: 100
                        })
                    }
                    unblock(e) {
                        this.isBlocked = !1, e.tweens.add({
                            targets: this.image,
                            alpha: 1,
                            duration: 100
                        })
                    }
                }(e, this.getTileX(t), this.getTileY(s), t, s, a, i, this.onTileSelect)
            }
            getTileDrop(e, t, s, i) {
                return t.updatePosition(e, this.getTileX(s), this.getTileY(i), s, i, !0)
            }
            getTileX(e) {
                return this.offsetX + this.tileSize * e
            }
            getTileY(e) {
                return this.offsetY + this.tileSize * e
            }
            canSelect(e) {
                return this.isPlayable(e)
            }
            isPlayable(e) {
                return null != e && !e.isBlocked && e.tileGridY > this.tileGridHeight - 1
            }
            getTileType(e, t, s) {
                const i = t < 1 ? null : this.tileGrid[t - 1][e],
                    a = t >= this.tileGridHeight - 1 || !this.tileGrid[t + 1] ? null : this.tileGrid[t + 1][e],
                    n = e < 1 ? null : this.tileGrid[t][e - 1],
                    o = e >= this.tileGridWidth - 1 || !this.tileGrid[t] ? null : this.tileGrid[t][e + 1];
                return Qe(s !== l || null == i && null == a && null == n && null == o ? s === h ? et.filter(e => !(null !== a && e.name === a.tileType.name || null !== o && e.name === o.tileType.name || null !== n && e.name === n.tileType.name)) : et.filter(e => !(null !== i && e.name === i.tileType.name || null !== n && e.name === n.tileType.name)) : [i, a, n, o].filter(e => null != e).map(e => e.tileType))
            }
            block(e, t) {
                this.isBlocked = !0, this.forEachTile((s, i, a) => s && (void 0 === t || !t.some(e => e[1] === i && e[0] === a)) && s.block(e))
            }
            unblock(e) {
                this.isBlocked = !1, this.forEachTile(t => t && t.unblock(e))
            }
            fill(e) {
                for (let t = 0; t < this.tileGridHeight; t++)
                    for (let s = 0; s < this.tileGridWidth; s++) {
                        const i = this.tileGenerationBehavior === d ? this.getPreSetTileType(s, t) : this.getTileType(s, t, r),
                            a = this.createTile(i, s, t, !0, (this.tileGridWidth - s) / this.tileGridWidth);
                        a.create(e), this.tileGrid[t][s] = a
                    }
                this.isBlocked = !0, this.isInitialized = !0, e.tweens.add({
                    targets: this.gridBackground,
                    alpha: .5,
                    duration: 200
                })
            }
            updateTileGenerationBehavior(e) {
                this.tileGenerationBehavior = e
            }
            getPreSetTileType(e, t) {
                return et[this.preSetTileGrid[t][e]]
            }
            updateMatchSound(e) {
                const t = e >= this.matchSounds.length ? this.matchSounds.length - 1 : e;
                this.matchSound = this.matchSounds[t]
            }
        },
        st = class extends p {
            constructor(e, t, s, i) {
                super(), this.x = e, this.y = t, this.isIntro = i, this.text = null, this.icon = null, this.warningTweens = null, this.warningIcon = null, this.warningSound = null, this.timerRunOutSound = null, this.ticks = s, this.isPaused = !0, this.isDisplayingWarning = !1
            }
            create(e) {
                this.icon = e.add.image(this.x + 15, this.y + 15, "icon_timer"), this.icon.setAlpha(this.isIntro ? 0 : .7), this.warningIcon = e.add.image(this.x + 15, this.y + 15, "icon_timer_warning").setAlpha(0), this.warningSound = e.sound.add("warning_tick"), this.timerRunOutSound = e.sound.add("timer_run_out"), this.text = e.add.text(this.x + 40, this.y, this.getTimeOutput(this.ticks), i), this.isIntro && this.text.setAlpha(0), this.tick(e);
                const t = this;
                e.time.addEvent({
                    delay: 1e3,
                    callback: () => {
                        t.tick(e)
                    },
                    callbackScope: this,
                    loop: !0
                })
            }
            show(e) {
                e.tweens.add({
                    targets: this.icon,
                    duration: 250,
                    alpha: .7
                }), e.tweens.add({
                    targets: this.text,
                    duration: 250,
                    alpha: 1
                })
            }
            tick(e) {
                this.ticks <= 0 || this.isPaused || (this.ticks <= 30 && !this.isDisplayingWarning && this.displayWarning(e), this.ticks <= 10 && this.warningSound.play(), 1 === this.ticks && (this.timerRunOutSound.play(), this.warningTweens.forEach(e => {
                    e.stop(0)
                })), this.emit("tick"), this.ticks--, this.output())
            }
            update(e) {
                this.ticks = e, this.output()
            }
            start() {
                this.isPaused = !1
            }
            stop() {
                this.isPaused = !0
            }
            getTimeOutput(e) {
                let t = e % 60;
                return t < 10 && (t = "0" + t), `${Math.floor(e/60)}:${t}`
            }
            output() {
                this.text.setText(this.getTimeOutput(this.ticks))
            }
            displayWarning(e) {
                this.isDisplayingWarning = !0, this.warningTweens = [], this.warningTweens.push(e.tweens.add({
                    targets: [this.icon, this.warningIcon],
                    angle: -60,
                    duration: 400,
                    yoyo: !0,
                    repeat: -1
                })), this.warningTweens.push(e.tweens.add({
                    targets: this.warningIcon,
                    alpha: .6,
                    duration: 300,
                    repeatDelay: 100,
                    yoyo: !0,
                    repeat: -1
                }))
            }
        },
        it = class extends Phaser.Scene {
            constructor() {
                super("RoundScene"), this.isAwaitingRoundTransition = !1, this.isReadyForRoundTransition = !1, this.isTransitioningRounds = !1, this.isBlockingMatches = !1, this.score = null, this.comboCount = null, this.queue = null, this.selectedTiles = null, this.tileGrid = null, this.scoreDisplay = null, this.timer = null, this.background = null, this.levelClearMessage = null, this.levelClearMessageHighlight = null, this.director = null, this.guide = null, this.level = null, this.emitter = null, this.totalMatches = null, this.tileSelectSound = null, this.lightsOffSound = null, this.roundClearSound = null
            }
            init(e) {
                this.level = e.level || 0
            }
            create() {
                this.isTransitioningRounds = !1, this.isRoundTransitionComplete = !1, this.isBlockingMatches = u[this.level].blockMatching, this.score = 0, this.totalMatches = 0, this.queue = new class {
                    constructor() {
                        this.queuedActions = [], this.currentAction = null
                    }
                    isActionRunning() {
                        return null != this.currentAction
                    }
                    hasActions() {
                        return this.queuedActions.length > 0
                    }
                    next() {
                        this.currentAction = this.queuedActions.shift(), this.currentAction()
                    }
                    push(e) {
                        var t = this;
                        t.queuedActions.push(() => {
                            e().then(() => {
                                t.currentAction = null
                            })
                        })
                    }
                }, this.background = this.add.image(400, 330, "background");
                const e = u[this.level].behavior;
                this.selectedTiles = [], this.tileGrid = new tt(6, 6, 80, 335, -260, this.onTileSelect, this.onTileMatch, e, this.queue), this.scoreDisplay = new class {
                    constructor(e, t, s) {
                        this.x = e, this.y = t, this.isIntro = s, this.scoreBackground = null, this.scoreIcon = null, this.scoreText = null, this.score = 0
                    }
                    create(e) {
                        this.scoreBackground = e.add.graphics({
                            fillStyle: {
                                color: 8781693
                            }
                        }), this.scoreBackground.setAlpha(this.isIntro ? 0 : .25), this.scoreBackground.fillRoundedRect(this.x - 150, this.y - 10, 300, 90, 10), this.scoreIcon = e.add.image(this.x + 15, this.y + 15, "icon_tile"), this.scoreIcon.setAlpha(this.isIntro ? 0 : .7), this.scoreText = e.add.text(this.x + 40, this.y, this.score, i), this.isIntro && this.scoreText.setAlpha(0), this.updateScore(this.score)
                    }
                    updateScore(e) {
                        this.score = e, this.scoreText.setText(e)
                    }
                    show(e) {
                        e.tweens.add({
                            targets: this.scoreBackground,
                            duration: 250,
                            alpha: .25
                        }), e.tweens.add({
                            targets: this.scoreIcon,
                            duration: 250,
                            alpha: .7
                        }), e.tweens.add({
                            targets: this.scoreText,
                            duration: 250,
                            alpha: 1
                        })
                    }
                    hide(e) {
                        e.tweens.add({
                            targets: [this.scoreBackground, this.scoreIcon, this.scoreText],
                            x: "-=300",
                            duration: 300
                        })
                    }
                }(110, 585, 0 === this.level);
                const t = u[this.level].timer;
                this.timer = t > 0 ? new st(110, 625, t, 1 === this.level) : null, this.guide = new Ve(20, 20, 0 === this.level), this.tileGrid.create(this), this.scoreDisplay.create(this), this.timer && this.timer.create(this), this.guide.create(this), this.emitter = new p;
                const s = c.getScript(this.level);
                this.director = new class {
                    constructor(e, t, s, i, a, n, o) {
                        this.guide = t, this.timer = s, this.scoreDisplay = i, this.tileGrid = a, this.scene = n, this.gameOverSubscriptions = [], this.queuedActions = null, this.isGuideReady = !1, this.isWaiting = !1;
                        const r = this;
                        this.guide.on("ready", () => {
                            r.isGuideReady = !0, r.next(o)
                        }), this.queueActions(e)
                    }
                    queueActions(e, t) {
                        if (!e) return;
                        const s = this;
                        null === s.queuedActions && (s.queuedActions = []), s.queuedActions.push(...e), s.next(t)
                    }
                    next(e) {
                        if (!this.isGuideReady) return;
                        if (this.guide.isTalking) return;
                        if (this.isWaiting) return;
                        if (0 === this.queuedActions.length) return;
                        const t = this.queuedActions.shift();
                        if ("string" == typeof t) {
                            const s = this.queuedActions.every(e => "string" != typeof e);
                            this.handleMessage(t, s), this.next(e)
                        } else t.hasOwnProperty("do") ? (this.handleAction(t.do, t.value, e), this.next(e)) : t.hasOwnProperty("on") ? (this.handleEvent(t.on, t.actions, t.filter, e, t.persist), this.next(e)) : t.hasOwnProperty("wait") && (this.isWaiting = !0, e.time.addEvent({
                            delay: t.wait,
                            callback: () => {
                                this.isWaiting = !1, this.next(e)
                            },
                            callbackScope: this,
                            loop: !1
                        }))
                    }
                    handleMessage(e, t) {
                        this.guide.displayMessage(e, t)
                    }
                    handleAction(e, t, s) {
                        switch (e) {
                            case "dropTiles":
                                this.tileGrid.fill(s);
                                break;
                            case "unblockTileGrid":
                                this.tileGrid.unblock(s);
                                break;
                            case "blockTileGrid":
                                this.scene.clearSelectedTiles(this.scene), this.tileGrid.block(s, t);
                                break;
                            case "updateTileGenerationBehavior":
                                this.tileGrid.updateTileGenerationBehavior(t);
                                break;
                            case "updateGuideExpression":
                                this.guide.updateExpression(t, s);
                                break;
                            case "hideGuide":
                                this.guide.hide(s);
                                break;
                            case "startTimer":
                                this.timer.start();
                                break;
                            case "updateTimer":
                                this.timer.ticks = t;
                                break;
                            case "stopTimer":
                                this.timer.stop();
                                break;
                            case "updateTimerRelativeToScore":
                                const e = u[this.scene.level];
                                this.timer.update(this.getScoreRelativeTicks(e.timer, this.scene.score, e.score));
                                break;
                            case "showTimerDisplay":
                                this.timer.show(s);
                                break;
                            case "hideScoreDisplay":
                                this.scoreDisplay.hide(s);
                                break;
                            case "showScoreDisplay":
                                this.scoreDisplay.show(s);
                                break;
                            case "endLevel":
                                this.scene.endLevel();
                                break;
                            case "revokeLevelTransition":
                                this.scene.isTransitioningRounds = !1;
                                break;
                            case "revokeBlockMatching":
                                this.scene.isBlockingMatches = !1;
                                break;
                            case "turnOffLights":
                                this.scene.turnOffLights();
                                break;
                            case "pauseBackgroundMusic":
                                this.scene.pauseBackgroundMusic(void 0 === t || t);
                                break;
                            case "resumeBackgroundMusic":
                                this.scene.resumeBackgroundMusic(void 0 === t || t)
                        }
                    }
                    handleEvent(e, t, s, i, a) {
                        let n = null;
                        switch (e) {
                            case "match":
                                n = this.tileGrid;
                                break;
                            case "swap":
                            case "win":
                            case "gameOver":
                                n = this.scene.emitter;
                                break;
                            case "tick":
                                n = this.timer
                        }
                        this.setUpEvent(n, e, t, s, i, a)
                    }
                    setUpEvent(e, t, s, i, a, n) {
                        const o = this;
                        e.on(t, this.wrapFilter(i), () => {
                            o.queuedActions = [], o.queueActions(s, a)
                        }, n)
                    }
                    wrapFilter(e) {
                        const t = this;
                        return void 0 === e ? null : () => e(t.getCurrentState())
                    }
                    getCurrentState() {
                        return {
                            matches: this.tileGrid.matches,
                            score: this.scene.score,
                            ticks: this.timer ? this.timer.ticks : null,
                            isBlockingMatches: this.scene.isBlockingMatches
                        }
                    }
                    getScoreRelativeTicks(e, t, s) {
                        return Math.max(Math.trunc(e - t / s * e), 1)
                    }
                }(s, this.guide, this.timer, this.scoreDisplay, this.tileGrid, this, this);
                const a = this;
                this.input.on("pointerdown", () => {
                    a.director.next(a)
                }), this.tileSelectSound = this.sound.add("tile_select"), this.lightsOffSound = this.sound.add("lights_off"), this.musicSwitchSound = this.sound.add("music_switch"), this.roundClearSound = this.sound.add("round_clear"), new Je(40, 640).create(this)
            }
            update() {
                if (!this.isTransitioningRounds) {
                    if (!this.isRoundTransitionComplete) return null != this.timer && this.timer.ticks <= 0 ? (this.isTransitioningRounds = !0, void this.emitter.emit("gameOver")) : this.isLevelComplete() ? (this.isTransitioningRounds = !0, this.tileGrid.block(this), void this.emitter.emit("win")) : void(this.queue.isActionRunning() || (this.queue.hasActions() ? this.queue.next() : this.tileGrid.update(this)));
                    this.nextLevel()
                }
            }
            onTileSelect(e, t) {
                if (!e.queue.isActionRunning() && !e.queue.hasActions() && !e.guide.isBlockingGameplay && e.tileGrid.canSelect(t))
                    if (e.comboCount = 0, e.tileGrid.updateMatchSound(e.comboCount), t.isActivated) e.clearSelectedTiles(e);
                    else {
                        if (0 === e.selectedTiles.length) return e.tileSelectSound.play(), e.selectedTiles.push(t), void t.activate();
                        if (1 === e.selectedTiles.length) {
                            const s = e.selectedTiles[0],
                                i = Math.abs(s.tileGridX - t.tileGridX),
                                a = Math.abs(s.tileGridY - t.tileGridY);
                            if (1 === i && 0 === a || 0 === i && 1 === a) {
                                e.selectedTiles.push(t);
                                let s = e.selectedTiles[0],
                                    i = e.selectedTiles[1];
                                e.tileGrid.swapTiles(e, s, i), e.emitter.emit("swap"), e.queue.push(() => ((e.isBlockingMatches || !e.tileGrid.hasMatches(s.tileGridX, s.tileGridY) && !e.tileGrid.hasMatches(i.tileGridX, i.tileGridY)) && e.tileGrid.swapTiles(e, s, i), Promise.resolve())), e.clearSelectedTiles(e)
                            }
                        }
                    }
            }
            clearSelectedTiles(e) {
                e.selectedTiles.forEach(e => {
                    e.deactivate()
                }), e.selectedTiles = []
            }
            onTileMatch(e, t) {
                t.some(e => e.isActivated) && e.clearSelectedTiles(e), e.totalMatches++, e.comboCount++, e.tileGrid.updateMatchSound(e.comboCount), e.score += t.length, e.scoreDisplay.updateScore(e.score)
            }
            isLevelComplete() {

                return this.score >= u[this.level].score
            }
            endLevel() {
                const e = this,
                    t = this.tweens.createTimeline(),
                    s = this.add.image(400, 400, "round_clear");
                s.setAlpha(0), s.setDepth(1), s.setScale(.75, .75);
                const i = this.add.graphics({
                    fillStyle: {
                        color: 16777215
                    }
                });
                i.setAlpha(0);
                const a = new Phaser.Geom.Rectangle(0, 0, 800, 700);
                i.fillRectShape(a);
                const n = this.add.image(400, 400, "round_clear_backdrop");
                n.setAlpha(0), t.add({
                    targets: [n, i],
                    alpha: 1,
                    duration: 30
                }), t.add({
                    targets: n,
                    alpha: .7,
                    duration: 1e3,
                    ease: "Quad.easeIn"
                }), t.add({
                    targets: i,
                    alpha: 0,
                    duration: 1e3,
                    offset: "-=1000"
                }), t.add({
                    targets: s,
                    alpha: 1,
                    duration: 500,
                    scaleX: 1,
                    scaleY: 1,
                    offset: "-=2000",
                    ease: "Back",
                    completeDelay: 100,
                    onComplete: () => {
                        this.tileGrid.forEachPlayableTile(t => t && t.disappear(e)), e.tweens.add({
                            targets: this.tileGrid.gridBackground,
                            alpha: 0,
                            duration: 200
                        })
                    }
                }), t.add({
                    targets: s,
                    alpha: 0,
                    duration: 500,
                    scaleX: .75,
                    scaleY: .75,
                    ease: "Quad.easeOut"
                }), t.add({
                    targets: n,
                    alpha: 0,
                    duration: 500,
                    offset: "-=500",
                    ease: "Quad.easeOut",
                    onComplete: () => {
                        e.isRoundTransitionComplete = !0, e.isTransitioningRounds = !1
                    }
                }), this.roundClearSound.play(), t.play()


                console.log('GAME_COMPLETED')
                window.top.postMessage({ type: "GAME_COMPLETED", game: "gems-crush", score: 0 }, "*")

            }
            nextLevel() {
                this.scene.restart({
                    level: this.level + 1
                })
            }
            turnOffLights() {
                this.lightsOffSound.play(), this.lights.enable().setAmbientColor(5592405), this.background.setPipeline("Light2D"), this.lights.addLight(550, 900, 500).setColor(16777215).setIntensity(2)
            }
            pauseBackgroundMusic(e) {
                e ? (this.musicSwitchSound.once("complete", () => {
                    this.game.backgroundMusic.pause()
                }), this.musicSwitchSound.play()) : this.game.backgroundMusic.pause()
            }
            resumeBackgroundMusic(e) {
                e ? (this.musicSwitchSound.once("complete", () => {
                    this.game.backgroundMusic.resume()
                }), this.musicSwitchSound.play()) : this.game.backgroundMusic.resume()
            }
        },
        at = class extends Phaser.Scene {
            constructor() {
                super("TitleScene"), this.startingLevel = 0, this.isExiting = !1, this.tileInfos = [], this.title = null, this.startBtn = null, this.startBtnOverlay = null
            }
            create() {
                const e = this;
                this.add.image(400, 330, "background");
                const t = this.add.graphics({
                    fillStyle: {
                        color: 16777215
                    }
                });
                t.setAlpha(0);
                const s = new Phaser.Geom.Rectangle(0, 0, 800, 700);
                t.fillRectShape(s), this.tileInfos = [], this.tileInfos.push({
                    imageKey: "tile_01",
                    xChange: "+=180",
                    yChange: "+=180",
                    angle: 15,
                    scale: .8
                }), this.tileInfos.push({
                    imageKey: "tile_03",
                    xChange: "-=180",
                    yChange: "+=180",
                    angle: -15,
                    scale: .9
                }), this.tileInfos.push({
                    imageKey: "tile_04",
                    xChange: "-=200",
                    yChange: "-=180",
                    angle: -5,
                    scale: .8
                }), this.tileInfos.push({
                    imageKey: "tile_01",
                    xChange: "+=0",
                    yChange: "-=180",
                    angle: -15,
                    scale: .7
                }), this.tileInfos.push({
                    imageKey: "tile_02",
                    xChange: "+=200",
                    yChange: "-=180",
                    angle: 15,
                    scale: 1
                }), this.tileInfos.push({
                    imageKey: "tile_02",
                    xChange: "+=0",
                    yChange: "+=180",
                    angle: -15,
                    scale: 1
                }), this.tileInfos.push({
                    imageKey: "tile_03",
                    xChange: "+=290",
                    yChange: "+=30",
                    angle: 15,
                    scale: .8
                }), this.tileInfos.push({
                    imageKey: "tile_01",
                    xChange: "-=290",
                    yChange: "+=40",
                    angle: -15,
                    scale: .9
                }), this.tileInfos.forEach(t => {
                    t.tile = e.add.image(400, 230, t.imageKey), t.tile.setAlpha(0), t.tile.setScale(.5, .5), t.tileFlash = e.add.image(400, 230, t.imageKey), t.tileFlash.setTintFill(16777215), t.tileFlash.setAlpha(0)
                }), this.title = this.add.image(400, 230, "title"), this.title.setAlpha(0), this.title.setScale(2, 2), this.startBtn = this.add.image(400, 540, "start"), this.startBtn.setInteractive({
                    cursor: "pointer"
                }), this.startBtn.setAlpha(0);
                const i = this.add.image(400, 540, "start");
                i.setAlpha(0), i.setTintFill(16777215), this.startBtnOverlay = this.add.image(400, 540, "start-active"), this.startBtnOverlay.setAlpha(0), new Je(40, 640).create(this), this.startBtn.on("pointerover", () => {
                    e.tweens.add({
                        targets: e.startBtnOverlay,
                        alpha: 1,
                        duration: 100,
                        ease: "Sine.easeInOut"
                    })
                }), this.startBtn.on("pointerout", () => {
                    e.tweens.add({
                        targets: e.startBtnOverlay,
                        alpha: 0,
                        duration: 100,
                        ease: "Sine.easeInOut"
                    })
                }), this.selectSound = this.sound.add("select"), this.startBtn.on("pointerdown", () => {
                    e.transitionToNextScene()
                });
                const a = this.tweens.createTimeline();
                a.add({
                    delay: 800,
                    targets: this.title,
                    alpha: 1,
                    scaleX: 1,
                    scaleY: 1,
                    duration: 500,
                    ease: "Quad.easeIn"
                }), this.tileInfos.forEach((e, t) => {
                    a.add({
                        targets: e.tile,
                        x: e.xChange,
                        y: e.yChange,
                        scaleX: 1,
                        scaleY: 1,
                        alpha: 1,
                        scaleX: e.scale,
                        scaleY: e.scale,
                        angle: e.angle,
                        duration: 300,
                        ease: "Quad.easeOut",
                        offset: 0 === t ? "-=0" : "-=300"
                    })
                }), this.game.backgroundMusic = this.sound.add("background_music"), this.game.backgroundMusic.loop = !0, this.game.backgroundMusic.play();
                const n = this.sound.add("intro_slide");
                a.add({
                    targets: t,
                    alpha: 1,
                    duration: 30,
                    offset: "-=300",
                    onComplete: () => {
                        n.play()
                    }
                }), a.add({
                    targets: t,
                    alpha: 0,
                    duration: 700,
                    offset: 1500,
                    ease: "Quad.easeIn"
                }), a.add({
                    targets: [this.startBtn, i],
                    alpha: 1,
                    offset: 2200,
                    duration: 100
                }), a.add({
                    targets: i,
                    alpha: 0,
                    duration: 300,
                    offset: 2300,
                    ease: "Quad.easeOut",
                    onComplete: this.flashTiles.apply(e)
                }), a.add({
                    targets: this.title,
                    scaleX: 1.02,
                    scaleY: 1.02,
                    yoyo: !0,
                    repeat: -1,
                    duration: 500,
                    offset: 2600,
                    ease: "Quad"
                }), a.play()
            }
            flashTiles() {
                const e = this;
                e.time.addEvent({
                    delay: 3e3,
                    callback: () => {
                        if (e.isExiting) return;
                        const t = Qe(e.tileInfos);
                        t.tileFlash.x = t.tile.x, t.tileFlash.y = t.tile.y, t.tileFlash.angle = t.tile.angle, t.tileFlash.scaleX = t.tile.scaleX, t.tileFlash.scaleY = t.tile.scaleY, e.tweens.add({
                            targets: t.tileFlash,
                            alpha: 1,
                            duration: 10
                        }), e.tweens.add({
                            targets: t.tileFlash,
                            alpha: 0,
                            duration: 1e3,
                            ease: "Power1",
                            delay: 10
                        }), e.tweens.add({
                            targets: [t.tile, t.tileFlash],
                            scaleX: "*=1.1",
                            scaleY: "*=1.1",
                            duration: 500,
                            yoyo: !0,
                            ease: "Power1"
                        })
                    },
                    callbackScope: this,
                    loop: !0
                })
            }
            transitionToNextScene() {
                const e = this;
                this.isExiting = !0, this.selectSound.play(), this.startBtn.setAlpha(0);
                const t = this.tweens.createTimeline();
                this.tileInfos.forEach((e, s) => {
                    t.add({
                        targets: [e.tile, e.tileFlash],
                        x: e.xChange,
                        y: e.yChange,
                        alpha: 0,
                        duration: 500,
                        offset: 0 === s ? "-=0" : "-=1000",
                        ease: "Quad.easeOut"
                    })
                }), t.add({
                    targets: this.title,
                    scaleX: 1.1,
                    scaleY: 1.1,
                    duration: 700,
                    offset: "-=1000",
                    alpha: 0,
                    ease: "Quad.easeOut"
                }), t.add({
                    targets: this.startBtnOverlay,
                    y: "+=300",
                    duration: 500,
                    offset: "-=1000",
                    ease: "Quad.easeOut",
                    completeDelay: 300,
                    onComplete: () => {
                        e.scene.transition({
                            target: "RoundScene",
                            data: {
                                level: e.startingLevel
                            },
                            remove: !0
                        })
                    }
                }), t.play()
            }
        };
    const nt = {
        type: Phaser.AUTO,
        width: 800,
        height: 700,
        scene: [o, at, it],
        parent: "container",
        scale: {
            mode: Phaser.Scale.FIT
        }
    };
    new Phaser.Game(nt)
}]);
//# sourceMappingURL=bundle.js.map