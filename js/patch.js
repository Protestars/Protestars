var CABLES = function(t) {
  var e = {};

  function i(s) {
    if (e[s]) return e[s].exports;
    var r = e[s] = {
      i: s,
      l: !1,
      exports: {}
    };
    return t[s].call(r.exports, r, r.exports, i), r.l = !0, r.exports
  }
  return i.m = t, i.c = e, i.d = function(t, e, s) {
    i.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: s
    })
  }, i.r = function(t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, i.t = function(t, e) {
    if (1 & e && (t = i(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var s = Object.create(null);
    if (i.r(s), Object.defineProperty(s, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var r in t) i.d(s, r, function(e) {
        return t[e]
      }.bind(null, r));
    return s
  }, i.n = function(t) {
    var e = t && t.__esModule ? function() {
      return t.default
    } : function() {
      return t
    };
    return i.d(e, "a", e), e
  }, i.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, i.p = "", i(i.s = 0)
}([function(t, e, i) {
  t.exports = i(2)
}, function(t, e) {
  t.exports = {
    timestamp: 1610523835610,
    created: "2021-01-13T07:43:55.610Z",
    git: {
      branch: "master",
      commit: "23ff8761980d7d0ffbe66da8c6253e457a032a73",
      date: null
    }
  }
}, function(t, e, i) {
  "use strict";
  i.r(e);
  var s = {};
  i.r(s), i.d(s, "base64Chars", (function() {
    return h
  })), i.d(s, "base64lookup", (function() {
    return l
  })), i.d(s, "b64encTypesArray", (function() {
    return u
  })), i.d(s, "b64decTypedArray", (function() {
    return c
  }));
  var r = {};
  i.r(r), i.d(r, "shuffleArray", (function() {
    return g
  })), i.d(r, "shortId", (function() {
    return T
  })), i.d(r, "uuid", (function() {
    return b
  })), i.d(r, "generateUUID", (function() {
    return y
  })), i.d(r, "simpleId", (function() {
    return x
  })), i.d(r, "smoothStep", (function() {
    return I
  })), i.d(r, "smootherStep", (function() {
    return v
  })), i.d(r, "map", (function() {
    return P
  })), i.d(r, "cacheBust", (function() {
    return R
  })), i.d(r, "basename", (function() {
    return N
  })), i.d(r, "jsonp", (function() {
    return S
  })), i.d(r, "ajaxSync", (function() {
    return M
  })), i.d(r, "ajax", (function() {
    return C
  })), i.d(r, "request", (function() {
    return w
  })), i.d(r, "UTILS", (function() {
    return f
  }));
  var n = {};
  i.r(n), i.d(n, "easeExpoIn", (function() {
    return D
  })), i.d(n, "easeExpoOut", (function() {
    return G
  })), i.d(n, "easeExpoInOut", (function() {
    return H
  })), i.d(n, "easeCubicIn", (function() {
    return z
  })), i.d(n, "easeCubicOut", (function() {
    return Y
  })), i.d(n, "easeCubicInOut", (function() {
    return W
  })), i.d(n, "ANIM", (function() {
    return V
  })), i.d(n, "Anim", (function() {
    return K
  })), i.d(n, "TL", (function() {
    return X
  }));
  var o = {};
  i.r(o), i.d(o, "PatchConnectionReceiver", (function() {
    return Ct
  })), i.d(o, "PatchConnectionSender", (function() {
    return wt
  })), i.d(o, "PatchConnectorBroadcastChannel", (function() {
    return kt
  }));
  const h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    a = new Uint8Array(256);
  for (let t = 0; t < h.length; t++) a[h.charCodeAt(t)] = t;
  const l = a,
    u = function(t) {
      t.buffer && (t = t.buffer);
      let e, i = new Uint8Array(t),
        s = i.length,
        r = "";
      for (e = 0; e < s; e += 3) r += h[i[e] >> 2], r += h[(3 & i[e]) << 4 | i[e + 1] >> 4], r += h[(15 & i[e + 1]) << 2 | i[e + 2] >> 6], r += h[63 & i[e + 2]];
      return s % 3 == 2 ? r = r.substring(0, r.length - 1) + "=" : s % 3 == 1 && (r = r.substring(0, r.length - 2) + "=="), r
    },
    c = function(t) {
      let e, i, s, r, n, o = .75 * t.length,
        h = t.length,
        a = 0;
      "=" === t[t.length - 1] && (o--, "=" === t[t.length - 2] && o--);
      let u = new ArrayBuffer(o),
        c = new Uint8Array(u);
      for (e = 0; e < h; e += 4) i = l[t.charCodeAt(e)], s = l[t.charCodeAt(e + 1)], r = l[t.charCodeAt(e + 2)], n = l[t.charCodeAt(e + 3)], c[a++] = i << 2 | s >> 4, c[a++] = (15 & s) << 4 | r >> 2, c[a++] = (3 & r) << 6 | 63 & n;
      return u
    };
  let p = !1;
  const d = {
      log() {
        if (p) return;
        const t = ["[core]"];
        t.push.apply(t, arguments), Function.prototype.apply.apply(console.log, [console, t])
      },
      warn(t) {
        if (p) return;
        const e = ["[core]"];
        e.push.apply(e, arguments), Function.prototype.apply.apply(console.warn, [console, e])
      },
      error(t) {
        const e = ["[core]"];
        e.push.apply(e, arguments), Function.prototype.apply.apply(console.error, [console, e])
      },
      setSilent(t) {
        p = t
      },
      stack() {
        console.log((new Error).stack)
      }
    },
    _ = function() {
      this._eventCallbacks = {}, this._logName = "", this._log = !1, this._listeners = {}, this.addEventListener = this.on = function(t, e, i) {
        const s = {
          id: (i || "") + CABLES.uuid(),
          name: t,
          cb: e
        };
        return this._eventCallbacks[t] ? this._eventCallbacks[t].push(s) : this._eventCallbacks[t] = [s], this._listeners[s.id] = s, s.id
      }, this.hasEventListener = function(t, e) {
        if (console.warn("old eventtarget function haseventlistener!"), t && e) {
          if (this._eventCallbacks[t]) {
            return -1 != this._eventCallbacks[t].indexOf(e)
          }
        } else d.warn("hasListener: missing parameters")
      }, this.removeEventListener = this.off = function(t, e) {
        if (null == t) return;
        if (!e) {
          const e = this._listeners[t];
          if (!e) return;
          let i = !0;
          for (; i;) {
            i = !1;
            let s = -1;
            for (let r = 0; r < this._eventCallbacks[e.name].length; r++) 0 === this._eventCallbacks[e.name][r].id.indexOf(t) && (i = !0, s = r); - 1 !== s && (this._eventCallbacks[e.name].splice(s, 1), delete this._listeners[t])
          }
          return
        }
        console.warn("[eventtarget] old function signature: removeEventListener!");
        let i = null;
        for (let s = 0; s < this._eventCallbacks[t].length; s++) this._eventCallbacks[t][s].cb == e && (i = s);
        null !== i ? delete this._eventCallbacks[i] : console.warn("[removeEventListener] not found " + t)
      }, this.logEvents = function(t, e) {
        this._log = t, this._logName = e
      }, this.emitEvent = function(t, e, i, s, r, n, o) {
        if (this._log && console.log("[event] ", this._logName, t, this._eventCallbacks), this._eventCallbacks[t])
          for (let h = 0; h < this._eventCallbacks[t].length; h++) this._eventCallbacks[t][h] && this._eventCallbacks[t][h].cb(e, i, s, r, n, o);
        else this._log && console.log("[event] has no event callback", t, this._eventCallbacks)
      }
    },
    f = {
      float32Concat: function(t, e) {
        t instanceof Float32Array || (t = new Float32Array(t)), e instanceof Float32Array || (e = new Float32Array(e));
        const i = new Float32Array(t.length + e.length);
        return i.set(t), i.set(e, t.length), i
      }
    },
    g = function(t) {
      for (let e = t.length - 1; e > 0; e--) {
        const i = Math.floor(Math.seededRandom() * (e + 1)),
          s = t[e];
        t[e] = t[i], t[i] = s
      }
      return t
    },
    m = {},
    E = function() {
      let t = Math.random().toString(36).substr(2, 9);
      return m.hasOwnProperty(t) && (t = E()), m[t] = !0, t
    },
    T = E,
    A = function() {
      let t = (new Date).getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
        const i = (t + 16 * Math.random()) % 16 | 0;
        return t = Math.floor(t / 16), ("x" == e ? i : 3 & i | 8).toString(16)
      })
    },
    b = A,
    y = A;
  let O = 0;
  const x = function() {
      return O++, O
    },
    I = function(t) {
      const e = Math.max(0, Math.min(1, (t - 0) / 1));
      return t = e * e * (3 - 2 * e)
    },
    v = function(t) {
      const e = Math.max(0, Math.min(1, (t - 0) / 1));
      return t = e * e * e * (e * (6 * e - 15) + 10)
    },
    P = function(t, e, i, s, r, n) {
      if (t >= i) return r;
      if (t <= e) return s;
      let o = !1;
      const h = Math.min(e, i),
        a = Math.max(e, i);
      h != e && (o = !0);
      let l = !1;
      const u = Math.min(s, r),
        c = Math.max(s, r);
      u != s && (l = !0);
      let p = 0,
        d = 0;
      return p = o ? (a - t) * (c - u) / (a - h) : (t - h) * (c - u) / (a - h), d = l ? c - p : p + u, n ? 1 == n ? s + (t = Math.max(0, Math.min(1, (d - s) / (r - s)))) * t * (3 - 2 * t) * (r - s) : 2 == n ? s + (t = Math.max(0, Math.min(1, (d - s) / (r - s)))) * t * t * (t * (6 * t - 15) + 10) * (r - s) : d : d
    };
  Math.randomSeed = 1, Math.seededRandom = function(t, e) {
    0 === Math.randomSeed && (Math.randomSeed = 999 * Math.random()), t = t || 1, e = e || 0, Math.randomSeed = (9301 * Math.randomSeed + 49297) % 233280;
    return e + Math.randomSeed / 233280 * (t - e)
  }, f.arrayWriteToEnd = function(t, e) {
    for (let e = 1; e < t.length; e++) t[e - 1] = t[e];
    t[t.length - 1] = e
  }, f.isNumeric = function(t) {
    return !isNaN(parseFloat(t)) && isFinite(t)
  }, f.isArray = function(t) {
    return "[object Array]" === Object.prototype.toString.call(t)
  }, String.prototype.endl = function() {
    return this + "\n"
  }, String.prototype.startsWith = function(t) {
    return 0 === this.indexOf(t)
  }, String.prototype.endsWith = function(t) {
    return this.match(t + "$") == t
  };
  const R = function(t) {
      return t.indexOf("?") > -1 ? t += "&" : t += "?", t + "cb=" + CABLES.uuid()
    },
    N = function(t) {
      let e = "";
      if (!t) return "";
      const i = (t + "").split("/");
      if (i.length > 0) {
        let t = i[i.length - 1].split("?");
        e = t[0], t = e.split("."), e = t[0]
      }
      return e
    };
  let F = null;
  const S = function(t, e) {
      F = F || 0, F++;
      const i = F;
      CABLES["jsonpFunc" + i] = function(t) {
        e(!1, t)
      };
      let s = "?";
      t.indexOf(s) > -1 && (s = "&");
      const r = document.createElement("script");
      r.setAttribute("src", t + s + "callback=CABLES.jsonpFunc" + i), document.body.appendChild(r)
    },
    M = function(t, e, i, s, r) {
      w({
        url: t,
        cb: e,
        method: i,
        data: s,
        contenttype: r,
        sync: !0
      })
    },
    C = function(t, e, i, s, r, n, o = {}) {
      w({
        url: t,
        cb: e,
        method: i,
        data: s,
        contenttype: r,
        sync: !1,
        jsonP: n,
        headers: o
      })
    },
    w = function(t) {
      let e;
      t.hasOwnProperty("asynch") || (t.asynch = !0);
      try {
        e = new XMLHttpRequest
      } catch (t) {}
      if (e.onreadystatechange = function() {
          4 == e.readyState && t.cb && (200 == e.status || 0 == e.status ? t.cb(!1, e.responseText, e) : t.cb(!0, e.responseText, e))
        }, e.addEventListener("progress", t => {}), e.open(t.method ? t.method.toUpperCase() : "GET", t.url, !t.sync), "object" == typeof t.headers) {
        const i = Object.keys(t.headers);
        for (let s = 0; s < i.length; s++) {
          const r = i[s],
            n = t.headers[r];
          e.setRequestHeader(r, n)
        }
      }
      t.post || t.data ? (e.setRequestHeader("Content-type", t.contenttype ? t.contenttype : "application/x-www-form-urlencoded"), e.send(t.data || t.post)) : e.send()
    };
  window.performance = window.performance || {
    offset: Date.now(),
    now: function() {
      return Date.now() - this.offset
    }
  };
  const k = {
      ANIM: {
        EASINGS: ["linear", "absolute", "smoothstep", "smootherstep", "Cubic In", "Cubic Out", "Cubic In Out", "Expo In", "Expo Out", "Expo In Out", "Sin In", "Sin Out", "Sin In Out", "Quart In", "Quart Out", "Quart In Out", "Quint In", "Quint Out", "Quint In Out", "Back In", "Back Out", "Back In Out", "Elastic In", "Elastic Out", "Bounce In", "Bounce Out"],
        EASING_LINEAR: 0,
        EASING_ABSOLUTE: 1,
        EASING_SMOOTHSTEP: 2,
        EASING_SMOOTHERSTEP: 3,
        EASING_BEZIER: 4,
        EASING_CUBIC_IN: 5,
        EASING_CUBIC_OUT: 6,
        EASING_CUBIC_INOUT: 7,
        EASING_EXPO_IN: 8,
        EASING_EXPO_OUT: 9,
        EASING_EXPO_INOUT: 10,
        EASING_SIN_IN: 11,
        EASING_SIN_OUT: 12,
        EASING_SIN_INOUT: 13,
        EASING_BACK_IN: 14,
        EASING_BACK_OUT: 15,
        EASING_BACK_INOUT: 16,
        EASING_ELASTIC_IN: 17,
        EASING_ELASTIC_OUT: 18,
        EASING_BOUNCE_IN: 19,
        EASING_BOUNCE_OUT: 21,
        EASING_QUART_IN: 22,
        EASING_QUART_OUT: 23,
        EASING_QUART_INOUT: 24,
        EASING_QUINT_IN: 25,
        EASING_QUINT_OUT: 26,
        EASING_QUINT_INOUT: 27
      },
      OP: {
        OP_PORT_TYPE_VALUE: 0,
        OP_PORT_TYPE_FUNCTION: 1,
        OP_PORT_TYPE_OBJECT: 2,
        OP_PORT_TYPE_TEXTURE: 2,
        OP_PORT_TYPE_ARRAY: 3,
        OP_PORT_TYPE_DYNAMIC: 4,
        OP_PORT_TYPE_STRING: 5,
        OP_VERSION_PREFIX: "_v"
      },
      PORT: {
        PORT_DIR_IN: 0,
        PORT_DIR_OUT: 1
      },
      PACO: {
        PACO_CLEAR: 0,
        PACO_VALUECHANGE: 1,
        PACO_OP_DELETE: 2,
        PACO_UNLINK: 3,
        PACO_LINK: 4,
        PACO_LOAD: 5,
        PACO_OP_CREATE: 6,
        PACO_OP_ENABLE: 7,
        PACO_OP_DISABLE: 8
      }
    },
    U = function(t, e, i, s) {
      _.apply(this), this.data = {}, this.direction = k.PORT.PORT_DIR_IN, this.id = y(), this.parent = t, this.links = [], this.value = 0, this.name = e, this.type = i || k.OP.OP_PORT_TYPE_VALUE, this.uiAttribs = s || {}, this.anim = null, this._oldAnimVal = -5711, this.defaultValue = null, this._uiActiveState = !0, this.ignoreValueSerialize = !1, this.onLinkChanged = null, this.crashed = !1, this._valueBeforeLink = null, this._lastAnimFrame = -1, this._animated = !1, this.onValueChanged = null, this.onTriggered = null, this.onUiActiveStateChange = null, this.changeAlways = !1, this._warnedDeprecated = !1, this._useVariableName = null, this._tempLastUiValue = null, Object.defineProperty(this, "val", {
        get() {
          return this._warnedDeprecated = !0, this.get()
        },
        set(t) {
          this.setValue(t), this._warnedDeprecated = !0
        }
      })
    };
  U.prototype.getValueForDisplay = function() {
    let t = String(this.val);
    return !this.uiAttribs || "bool" != this.uiAttribs.display && "bool" != this.uiAttribs.type ? t.length > 100 && (t = t.substring(0, 100)) : t = this.val ? "true" : "false", t
  }, U.prototype.onAnimToggle = function() {}, U.prototype._onAnimToggle = function() {
    this.onAnimToggle()
  }, U.prototype.hidePort = function() {
    this.setUiAttribs({
      hidePort: !0
    })
  }, U.prototype.remove = function() {
    this.removeLinks(), this.parent.removePort(this)
  }, U.prototype.setUiAttribs = function(t) {
    let e = !1;
    this.uiAttribs || (this.uiAttribs = {});
    for (const i in t) this.uiAttribs[i] != t[i] && (e = !0), this.uiAttribs[i] = t[i];
    e && this.emitEvent("onUiAttrChange", t)
  }, U.prototype.getUiAttribs = function() {
    return this.uiAttribs
  }, U.prototype.getUiAttrib = function(t) {
    return this.uiAttribs && this.uiAttribs.hasOwnProperty(t) ? this.uiAttribs[t] : null
  }, U.prototype.get = function() {
    return this._animated && this._lastAnimFrame != this.parent.patch.getFrameNum() && (this._lastAnimFrame = this.parent.patch.getFrameNum(), this.value = this.anim.getValue(this.parent.patch.timer.getTime()), this._oldAnimVal = this.value, this.forceChange()), this.value
  }, U.prototype.set = U.prototype.setValue = function(t) {
    if (void 0 !== t && this.parent.enabled && !this.crashed && (t !== this.value || this.changeAlways || this.type == k.OP.OP_PORT_TYPE_TEXTURE || this.type == k.OP.OP_PORT_TYPE_ARRAY)) {
      if (this._animated) this.anim.setValue(this.parent.patch.timer.getTime(), t);
      else {
        try {
          this.value = t, this.forceChange()
        } catch (t) {
          this.crashed = !0, this.setValue = function(t) {}, this.onTriggered = function() {}, console.error("onvaluechanged exception cought", t), d.log(t.stack), d.log("exception in: " + this.parent.name), this.parent.patch.isEditorMode() && gui.showOpCrash(this.parent), this.parent.patch.emitEvent("exception".ex, this.parent)
        }
        this.parent.patch.isEditorMode() && this.type == k.OP.OP_PORT_TYPE_TEXTURE && gui.texturePreview().updateTexturePort(this)
      }
      if (this.direction == k.PORT.PORT_DIR_OUT)
        for (let t = 0; t < this.links.length; ++t) this.links[t].setValue()
    }
  }, U.prototype.updateAnim = function() {
    this._animated && (this.value = this.get(), (this._oldAnimVal != this.value || this.changeAlways) && (this._oldAnimVal = this.value, this.forceChange()), this._oldAnimVal = this.value)
  }, U.args = function(t) {
    return (t + "").replace(/[/][/].*$/gm, "").replace(/\s+/g, "").replace(/[/][*][^/*]*[*][/]/g, "").split("){", 1)[0].replace(/^[^(]*[(]/, "").replace(/=[^,]+/g, "").split(",").filter(Boolean)
  }, U.prototype.forceChange = function() {
    this.onValueChanged || this.onChange, this.emitEvent("change", this.value, this), this.onChange ? this.onChange(this, this.value) : this.onValueChanged && this.onValueChanged(this, this.value)
  }, U.prototype.getTypeString = function() {
    return this.type == k.OP.OP_PORT_TYPE_VALUE ? "Number" : this.type == k.OP.OP_PORT_TYPE_FUNCTION ? "Trigger" : this.type == k.OP.OP_PORT_TYPE_OBJECT ? "Object" : this.type == k.OP.OP_PORT_TYPE_DYNAMIC ? "Dynamic" : this.type == k.OP.OP_PORT_TYPE_ARRAY ? "Array" : this.type == k.OP.OP_PORT_TYPE_STRING ? "String" : "Unknown"
  }, U.prototype.getSerialized = function() {
    const t = {};
    if (t.name = this.getName(), this.ignoreValueSerialize || 0 !== this.links.length || this.type == k.OP.OP_PORT_TYPE_OBJECT && this.value && this.value.tex || (t.value = this.value), this._useVariableName && (t.useVariable = this._useVariableName), this._animated && (t.animated = !0), this.anim && (t.anim = this.anim.getSerialized()), "file" == this.uiAttribs.display && (t.display = this.uiAttribs.display), this.direction == k.PORT.PORT_DIR_IN && this.links.length > 0) {
      t.links = [];
      for (const e in this.links) this.links[e].portIn && this.links[e].portOut && t.links.push(this.links[e].getSerialized())
    }
    return t
  }, U.prototype.shouldLink = function() {
    return !0
  }, U.prototype.removeLinks = function() {
    let t = 0;
    for (; this.links.length > 0;) {
      if (t++, t > 5e3) {
        console.warn("could not delete links... / infinite loop"), this.links.length = 0;
        break
      }
      this.links[0].remove()
    }
  }, U.prototype.removeLink = function(t) {
    for (const e in this.links) this.links[e] == t && this.links.splice(e, 1);
    this.direction == k.PORT.PORT_DIR_IN && (this.type == k.OP.OP_PORT_TYPE_VALUE ? this.setValue(this._valueBeforeLink || 0) : this.setValue(this._valueBeforeLink || null)), this.onLinkChanged && this.onLinkChanged(), this.emitEvent("onLinkChanged")
  }, U.prototype.getName = function() {
    return this.name
  }, U.prototype.addLink = function(t) {
    this._valueBeforeLink = this.value, this.links.push(t), this.onLinkChanged && this.onLinkChanged(), this.emitEvent("onLinkChanged")
  }, U.prototype.getLinkTo = function(t) {
    for (const e in this.links)
      if (this.links[e].portIn == t || this.links[e].portOut == t) return this.links[e]
  }, U.prototype.removeLinkTo = function(t) {
    for (const e in this.links)
      if (this.links[e].portIn == t || this.links[e].portOut == t) return this.links[e].remove(), this.onLinkChanged && this.onLinkChanged(), void this.emitEvent("onLinkChanged")
  }, U.prototype.isLinkedTo = function(t) {
    for (const e in this.links)
      if (this.links[e].portIn == t || this.links[e].portOut == t) return !0;
    return !1
  }, U.prototype.trigger = function() {
    if (0 === this.links.length) return;
    if (!this.parent.enabled) return;
    let t = null;
    try {
      for (let e = 0; e < this.links.length; ++e) this.links[e].portIn && (t = this.links[e].portIn, t._onTriggered()), this.links[e] && this.links[e].activity()
    } catch (e) {
      this.parent.enabled = !1, this.parent.patch.isEditorMode() && (this.parent.patch.emitEvent("exception", e, t.parent), this.parent.patch.emitEvent("opcrash", t)), d.log("exception!"), console.error("ontriggered exception cought", e), d.log(e.stack), d.log("exception in: " + t.parent.name)
    }
  }, U.prototype.call = function() {
    d.log("call deprecated - use trigger() "), this.trigger()
  }, U.prototype.execute = function() {
    d.log("### execute port: " + this.getName(), this.goals.length)
  }, U.prototype.setVariableName = function(t) {
    this._useVariableName = t
  }, U.prototype.getVariableName = function() {
    return this._useVariableName
  }, U.prototype.setVariable = function(t) {
    this.setAnimated(!1);
    const e = {
      useVariable: !1
    };
    this._variableIn && (this._variableIn.removeListener(this.set.bind(this)), this._variableIn = null), t ? (this._variableIn = this.parent.patch.getVar(t), this._variableIn ? (this._variableIn.addListener(this.set.bind(this)), this.set(this._variableIn.getValue())) : console.log("PORT VAR NOT FOUND!!!"), this._useVariableName = t, e.useVariable = !0, e.variableName = this._useVariableName) : (e.variableName = this._useVariableName = null, e.useVariable = !1), this.setUiAttribs(e)
  }, U.prototype.setAnimated = function(t) {
    this._animated != t && (this._animated = t, this._animated && !this.anim && (this.anim = new K), this._onAnimToggle()), this.setUiAttribs({
      isAnimated: this._animated
    })
  }, U.prototype.toggleAnim = function(t) {
    this._animated = !this._animated, this._animated && !this.anim && (this.anim = new K), this.setAnimated(this._animated), this._onAnimToggle(), this.setUiAttribs({
      isAnimated: this._animated
    })
  }, U.prototype.getType = function() {
    return this.type
  }, U.prototype.isLinked = function() {
    return this.links.length > 0
  }, U.prototype.isBoundToVar = function() {
    return null != this._useVariableName
  }, U.prototype.isAnimated = function() {
    return this._animated
  }, U.prototype.isHidden = function() {
    return this.uiAttribs.hidePort
  }, U.prototype._onTriggered = function(t) {
    this.parent.updateAnims(), this.parent.enabled && this.onTriggered && this.onTriggered(t)
  }, U.prototype._onSetProfiling = function(t) {
    this.parent.patch.profiler.add("port", this), this.setValue(t), this.parent.patch.profiler.add("port", null)
  }, U.prototype._onTriggeredProfiling = function() {
    this.parent.enabled && this.onTriggered && (this.parent.patch.profiler.add("port", this), this.onTriggered(), this.parent.patch.profiler.add("port", null))
  }, U.prototype.onValueChange = function(t) {
    this.onChange = t
  }, U.prototype.getUiActiveState = function() {
    return this._uiActiveState
  }, U.prototype.setUiActiveState = function(t) {
    this._uiActiveState = t, this.onUiActiveStateChange && this.onUiActiveStateChange()
  }, U.portTypeNumberToString = function(t) {
    return t == k.OP.OP_PORT_TYPE_VALUE ? "value" : t == k.OP.OP_PORT_TYPE_FUNCTION ? "function" : t == k.OP.OP_PORT_TYPE_OBJECT ? "object" : t == k.OP.OP_PORT_TYPE_ARRAY ? "array" : t == k.OP.OP_PORT_TYPE_STRING ? "string" : t == k.OP.OP_PORT_TYPE_DYNAMIC ? "dynamic" : "unknown"
  };
  class L extends U {
    constructor(t, e, i, s, r) {
      super(t, e, i, s), this.indexPort = r, this.indexPort.set = t => {
        const e = s.values;
        if (!e) return;
        let i = Math.floor(t);
        i = Math.min(i, e.length - 1), i = Math.max(i, 0), this.indexPort.setValue(i), this.set(e[i]), this.parent.patch.isEditorMode() && window.gui && gui.patchView.isCurrentOp(this.parent) && gui.opParams.show(this.parent)
      }
    }
    setUiAttribs(t) {
      const e = t.hidePort;
      t.hidePort = !0, super.setUiAttribs(t), void 0 !== e && this.indexPort.setUiAttribs({
        hidePort: e
      })
    }
  }
  class B extends L {}
  const V = {
    Key: function(t) {
      this.time = 0, this.value = 0, this.ui = {}, this.onChange = null, this._easing = 0, this.bezTime = .5, this.bezValue = 0, this.bezTimeIn = -.5, this.bezValueIn = 0, this.cb = null, this.cbTriggered = !1;
      this._updateBezier = !1, this.setEasing(k.ANIM.EASING_LINEAR), this.set(t)
    }
  };
  V.Key.linear = function(t, e, i) {
    return parseFloat(e.value) + parseFloat(i.value - e.value) * t
  }, V.Key.easeLinear = function(t, e) {
    return V.Key.linear(t, this, e)
  }, V.Key.easeAbsolute = function(t, e) {
    return this.value
  };
  const D = function(t) {
    return Math.pow(2, 10 * (t - 1))
  };
  V.Key.easeExpoIn = function(t, e) {
    return t = D(t), V.Key.linear(t, this, e)
  };
  const G = function(t) {
    return t = 1 - Math.pow(2, -10 * t)
  };
  V.Key.easeExpoOut = function(t, e) {
    return t = G(t), V.Key.linear(t, this, e)
  };
  const H = function(t) {
    return (t *= 2) < 1 ? t = .5 * Math.pow(2, 10 * (t - 1)) : (t--, t = .5 * (2 - Math.pow(2, -10 * t))), t
  };
  V.Key.easeExpoInOut = function(t, e) {
    return t = H(t), V.Key.linear(t, this, e)
  }, V.Key.easeSinIn = function(t, e) {
    return t = -1 * Math.cos(t * Math.PI / 2) + 1, V.Key.linear(t, this, e)
  }, V.Key.easeSinOut = function(t, e) {
    return t = Math.sin(t * Math.PI / 2), V.Key.linear(t, this, e)
  }, V.Key.easeSinInOut = function(t, e) {
    return t = -.5 * (Math.cos(Math.PI * t) - 1), V.Key.linear(t, this, e)
  };
  const z = function(t) {
    return t *= t * t
  };
  V.Key.easeCubicIn = function(t, e) {
    return t = z(t), V.Key.linear(t, this, e)
  }, V.Key.easeInQuint = function(t, e) {
    return t *= t * t * t * t, V.Key.linear(t, this, e)
  }, V.Key.easeOutQuint = function(t, e) {
    return t = (t -= 1) * t * t * t * t + 1, V.Key.linear(t, this, e)
  }, V.Key.easeInOutQuint = function(t, e) {
    return (t /= .5) < 1 ? t *= .5 * t * t * t * t : t = .5 * ((t -= 2) * t * t * t * t + 2), V.Key.linear(t, this, e)
  }, V.Key.easeInQuart = function(t, e) {
    return t *= t * t * t, V.Key.linear(t, this, e)
  }, V.Key.easeOutQuart = function(t, e) {
    return t = -1 * ((t -= 1) * t * t * t - 1), V.Key.linear(t, this, e)
  }, V.Key.easeInOutQuart = function(t, e) {
    return (t /= .5) < 1 ? t *= .5 * t * t * t : t = -.5 * ((t -= 2) * t * t * t - 2), V.Key.linear(t, this, e)
  }, V.Key.bounce = function(t) {
    return (t /= 1) < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, t
  }, V.Key.easeInBounce = function(t, e) {
    return V.Key.linear(V.Key.bounce(t), this, e)
  }, V.Key.easeOutBounce = function(t, e) {
    return V.Key.linear(V.Key.bounce(t), this, e)
  }, V.Key.easeInElastic = function(t, e) {
    let i = 1.70158,
      s = 0,
      r = 1;
    return 0 === t ? t = 0 : 1 == (t /= 1) ? t = 1 : (s || (s = .3), r < Math.abs(1) ? (r = 1, i = s / 4) : i = s / (2 * Math.PI) * Math.asin(1 / r), t = -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - i) * (2 * Math.PI) / s) + 0), V.Key.linear(t, this, e)
  }, V.Key.easeOutElastic = function(t, e) {
    let i = 1.70158,
      s = 0,
      r = 1;
    return 0 === t ? t = 0 : 1 == (t /= 1) ? t = 1 : (s || (s = .3), r < Math.abs(1) ? (r = 1, i = s / 4) : i = s / (2 * Math.PI) * Math.asin(1 / r), t = r * Math.pow(2, -10 * t) * Math.sin((1 * t - i) * (2 * Math.PI) / s) + 1 + 0), V.Key.linear(t, this, e)
  }, V.Key.easeInBack = function(t, e) {
    const i = 1.70158;
    return t = t * t * ((i + 1) * t - i), V.Key.linear(t, this, e)
  }, V.Key.easeOutBack = function(t, e) {
    const i = 1.70158;
    return t = (t = t / 1 - 1) * t * ((i + 1) * t + i) + 1, V.Key.linear(t, this, e)
  }, V.Key.easeInOutBack = function(t, e) {
    let i = 1.70158;
    return t = (t /= .5) < 1 ? t * t * ((1 + (i *= 1.525)) * t - i) * .5 : .5 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2), V.Key.linear(t, this, e)
  };
  const Y = function(t) {
    return t = --t * t * t + 1
  };
  V.Key.easeCubicOut = function(t, e) {
    return t = Y(t), V.Key.linear(t, this, e)
  };
  const W = function(t) {
    return (t *= 2) < 1 ? t *= .5 * t * t : t = .5 * ((t -= 2) * t * t + 2), t
  };
  V.Key.easeCubicInOut = function(t, e) {
    return t = W(t), V.Key.linear(t, this, e)
  }, V.Key.easeSmoothStep = function(t, e) {
    const i = Math.max(0, Math.min(1, t));
    return t = i * i * (3 - 2 * i), V.Key.linear(t, this, e)
  }, V.Key.easeSmootherStep = function(t, e) {
    const i = Math.max(0, Math.min(1, (t - 0) / 1));
    return t = i * i * i * (i * (6 * i - 15) + 10), V.Key.linear(t, this, e)
  }, V.Key.prototype.setEasing = function(t) {
    this._easing = t, this._easing == k.ANIM.EASING_ABSOLUTE ? this.ease = V.Key.easeAbsolute : this._easing == k.ANIM.EASING_SMOOTHSTEP ? this.ease = V.Key.easeSmoothStep : this._easing == k.ANIM.EASING_SMOOTHERSTEP ? this.ease = V.Key.easeSmootherStep : this._easing == k.ANIM.EASING_CUBIC_IN ? this.ease = V.Key.easeCubicIn : this._easing == k.ANIM.EASING_CUBIC_OUT ? this.ease = V.Key.easeCubicOut : this._easing == k.ANIM.EASING_CUBIC_INOUT ? this.ease = V.Key.easeCubicInOut : this._easing == k.ANIM.EASING_EXPO_IN ? this.ease = V.Key.easeExpoIn : this._easing == k.ANIM.EASING_EXPO_OUT ? this.ease = V.Key.easeExpoOut : this._easing == k.ANIM.EASING_EXPO_INOUT ? this.ease = V.Key.easeExpoInOut : this._easing == k.ANIM.EASING_SIN_IN ? this.ease = V.Key.easeSinIn : this._easing == k.ANIM.EASING_SIN_OUT ? this.ease = V.Key.easeSinOut : this._easing == k.ANIM.EASING_SIN_INOUT ? this.ease = V.Key.easeSinInOut : this._easing == k.ANIM.EASING_BACK_OUT ? this.ease = V.Key.easeOutBack : this._easing == k.ANIM.EASING_BACK_IN ? this.ease = V.Key.easeInBack : this._easing == k.ANIM.EASING_BACK_INOUT ? this.ease = V.Key.easeInOutBack : this._easing == k.ANIM.EASING_ELASTIC_IN ? this.ease = V.Key.easeInElastic : this._easing == k.ANIM.EASING_ELASTIC_OUT ? this.ease = V.Key.easeOutElastic : this._easing == k.ANIM.EASING_ELASTIC_INOUT ? this.ease = V.Key.easeElasticInOut : this._easing == k.ANIM.EASING_BOUNCE_IN ? this.ease = V.Key.easeInBounce : this._easing == k.ANIM.EASING_BOUNCE_OUT ? this.ease = V.Key.easeOutBounce : this._easing == k.ANIM.EASING_QUART_OUT ? this.ease = V.Key.easeOutQuart : this._easing == k.ANIM.EASING_QUART_IN ? this.ease = V.Key.easeInQuart : this._easing == k.ANIM.EASING_QUART_INOUT ? this.ease = V.Key.easeInOutQuart : this._easing == k.ANIM.EASING_QUINT_OUT ? this.ease = V.Key.easeOutQuint : this._easing == k.ANIM.EASING_QUINT_IN ? this.ease = V.Key.easeInQuint : this._easing == k.ANIM.EASING_QUINT_INOUT ? this.ease = V.Key.easeInOutQuint : this._easing == k.ANIM.EASING_BEZIER ? (this._updateBezier = !0, this.ease = V.Key.easeBezier) : (this._easing = k.ANIM.EASING_LINEAR, this.ease = V.Key.easeLinear)
  }, V.Key.prototype.trigger = function() {
    this.cb(), this.cbTriggered = !0
  }, V.Key.prototype.setValue = function(t) {
    this.value = t, this._updateBezier = !0, null !== this.onChange && this.onChange()
  }, V.Key.prototype.set = function(t) {
    t && (t.e && this.setEasing(t.e), t.cb && (this.cb = t.cb, this.cbTriggered = !1), t.b && (this.bezTime = t.b[0], this.bezValue = t.b[1], this.bezTimeIn = t.b[2], this.bezValueIn = t.b[3], this._updateBezier = !0), t.hasOwnProperty("t") && (this.time = t.t), t.hasOwnProperty("time") && (this.time = t.time), t.hasOwnProperty("v") ? this.value = t.v : t.hasOwnProperty("value") && (this.value = t.value)), null !== this.onChange && this.onChange()
  }, V.Key.prototype.getSerialized = function() {
    const t = {};
    return t.t = this.time, t.v = this.value, t.e = this._easing, this._easing == k.ANIM.EASING_BEZIER && (t.b = [this.bezTime, this.bezValue, this.bezTimeIn, this.bezValueIn]), t
  }, V.Key.prototype.getEasing = function() {
    return this._easing
  };
  const K = function(t) {
    t = t || {}, this.keys = [], this.onChange = null, this.stayInTimeline = !1, this.loop = !1, this.defaultEasing = t.defaultEasing || k.ANIM.EASING_LINEAR, this.onLooped = null, this._timesLooped = 0, this._needsSort = !1
  };
  K.prototype.forceChangeCallback = function() {
    null !== this.onChange && this.onChange()
  }, K.prototype.hasEnded = function(t) {
    return 0 === this.keys.length || this.keys[this.keys.length - 1].time <= t
  }, K.prototype.isRising = function(t) {
    if (this.hasEnded(t)) return !1;
    const e = this.getKeyIndex(t);
    return this.keys[e].value < this.keys[e + 1].value
  }, K.prototype.clearBefore = function(t) {
    const e = this.getValue(t),
      i = this.getKeyIndex(t);
    this.setValue(t, e), i > 1 && this.keys.splice(0, i)
  }, K.prototype.clear = function(t) {
    let e = 0;
    t && (e = this.getValue(t)), this.keys.length = 0, t && this.setValue(t, e), null !== this.onChange && this.onChange()
  }, K.prototype.sortKeys = function() {
    this.keys.sort((t, e) => parseFloat(t.time) - parseFloat(e.time)), this._needsSort = !1
  }, K.prototype.getLength = function() {
    return 0 === this.keys.length ? 0 : this.keys[this.keys.length - 1].time
  }, K.prototype.getKeyIndex = function(t) {
    let e = 0;
    for (let i = 0; i < this.keys.length; i++)
      if (t >= this.keys[i].time && (e = i), this.keys[i].time > t) return e;
    return e
  }, K.prototype.setValue = function(t, e, i) {
    let s = !1;
    for (const r in this.keys)
      if (this.keys[r].time == t) {
        s = this.keys[r], this.keys[r].setValue(e), this.keys[r].cb = i;
        break
      } s || this.keys.push(new V.Key({
      time: t,
      value: e,
      e: this.defaultEasing,
      cb: i
    })), this.onChange && this.onChange(), this._needsSort = !0
  }, K.prototype.getSerialized = function() {
    const t = {
      keys: []
    };
    t.loop = this.loop;
    for (const e in this.keys) t.keys.push(this.keys[e].getSerialized());
    return t
  }, K.prototype.getKey = function(t) {
    const e = this.getKeyIndex(t);
    return this.keys[e]
  }, K.prototype.getNextKey = function(t) {
    let e = this.getKeyIndex(t) + 1;
    return e >= this.keys.length && (e = this.keys.length - 1), this.keys[e]
  }, K.prototype.isFinished = function(t) {
    return this.keys.length <= 0 || t > this.keys[this.keys.length - 1].time
  }, K.prototype.isStarted = function(t) {
    return !(this.keys.length <= 0) && t >= this.keys[0].time
  }, K.prototype.getValue = function(t) {
    if (0 === this.keys.length) return 0;
    if (this._needsSort && this.sortKeys(), t < this.keys[0].time) return this.keys[0].value;
    const e = this.keys.length - 1;
    if (this.loop && t > this.keys[e].time) {
      t / this.keys[e].time > this._timesLooped && (this._timesLooped++, this.onLooped && this.onLooped()), t = (t - this.keys[0].time) % (this.keys[e].time - this.keys[0].time), t += this.keys[0].time
    }
    const i = this.getKeyIndex(t);
    if (i >= e) return this.keys[e].cb && !this.keys[e].cbTriggered && this.keys[e].trigger(), this.keys[e].value;
    const s = parseInt(i, 10) + 1,
      r = this.keys[i],
      n = this.keys[s];
    if (r.cb && !r.cbTriggered && r.trigger(), !n) return -1;
    const o = (t - r.time) / (n.time - r.time);
    return r.ease || console.log("has no ease", r, n), r.ease(o, n)
  }, K.prototype.addKey = function(t) {
    void 0 === t.time ? d.log("key time undefined, ignoring!") : (this.keys.push(t), null !== this.onChange && this.onChange())
  }, K.prototype.easingFromString = function(t) {
    return "linear" == t ? k.ANIM.EASING_LINEAR : "absolute" == t ? k.ANIM.EASING_ABSOLUTE : "smoothstep" == t ? k.ANIM.EASING_SMOOTHSTEP : "smootherstep" == t ? k.ANIM.EASING_SMOOTHERSTEP : "Cubic In" == t ? k.ANIM.EASING_CUBIC_IN : "Cubic Out" == t ? k.ANIM.EASING_CUBIC_OUT : "Cubic In Out" == t ? k.ANIM.EASING_CUBIC_INOUT : "Expo In" == t ? k.ANIM.EASING_EXPO_IN : "Expo Out" == t ? k.ANIM.EASING_EXPO_OUT : "Expo In Out" == t ? k.ANIM.EASING_EXPO_INOUT : "Sin In" == t ? k.ANIM.EASING_SIN_IN : "Sin Out" == t ? k.ANIM.EASING_SIN_OUT : "Sin In Out" == t ? k.ANIM.EASING_SIN_INOUT : "Back In" == t ? k.ANIM.EASING_BACK_IN : "Back Out" == t ? k.ANIM.EASING_BACK_OUT : "Back In Out" == t ? k.ANIM.EASING_BACK_INOUT : "Elastic In" == t ? k.ANIM.EASING_ELASTIC_IN : "Elastic Out" == t ? k.ANIM.EASING_ELASTIC_OUT : "Bounce In" == t ? k.ANIM.EASING_BOUNCE_IN : "Bounce Out" == t ? k.ANIM.EASING_BOUNCE_OUT : "Quart Out" == t ? k.ANIM.EASING_QUART_OUT : "Quart In" == t ? k.ANIM.EASING_QUART_IN : "Quart In Out" == t ? k.ANIM.EASING_QUART_INOUT : "Quint Out" == t ? k.ANIM.EASING_QUINT_OUT : "Quint In" == t ? k.ANIM.EASING_QUINT_IN : "Quint In Out" == t ? k.ANIM.EASING_QUINT_INOUT : void 0
  }, K.prototype.createPort = function(t, e, i) {
    const s = t.addInPort(new U(t, e, k.OP.OP_PORT_TYPE_VALUE, {
      display: "dropdown",
      values: k.ANIM.EASINGS
    }));
    return s.set("linear"), s.defaultValue = "linear", s.onChange = function() {
      this.defaultEasing = this.easingFromString(s.get()), i && i()
    }.bind(this), s
  }, K.slerpQuaternion = function(t, e, i, s, r, n) {
    K.slerpQuaternion.q1 || (K.slerpQuaternion.q1 = quat.create(), K.slerpQuaternion.q2 = quat.create());
    const o = i.getKeyIndex(t);
    let h = o + 1;
    if (h >= i.keys.length && (h = i.keys.length - 1), o == h) quat.set(e, i.keys[o].value, s.keys[o].value, r.keys[o].value, n.keys[o].value);
    else {
      const a = i.keys[o].time,
        l = (t - a) / (i.keys[h].time - a);
      quat.set(K.slerpQuaternion.q1, i.keys[o].value, s.keys[o].value, r.keys[o].value, n.keys[o].value), quat.set(K.slerpQuaternion.q2, i.keys[h].value, s.keys[h].value, r.keys[h].value, n.keys[h].value), quat.slerp(e, K.slerpQuaternion.q1, K.slerpQuaternion.q2, l)
    }
    return e
  };
  const X = V;
  X.Anim = K;
  const j = function(t) {
    _.apply(this), this.id = CABLES.uuid(), this.portIn = null, this.portOut = null, this.scene = t, this.activityCounter = 0
  };
  j.prototype.setValue = function(t) {
    void 0 === t ? this._setValue() : this.portIn.set(t)
  }, j.prototype.activity = function() {
    this.activityCounter++
  }, j.prototype._setValue = function() {
    if (!this.portOut) return void this.remove();
    const t = this.portOut.get();
    t == t && (this.portIn.type != k.OP.OP_PORT_TYPE_FUNCTION && this.activity(), (this.portIn.get() !== t || this.portIn.changeAlways) && this.portIn.set(t))
  }, j.prototype.getOtherPort = function(t) {
    return t == this.portIn ? this.portOut : this.portIn
  }, j.prototype.remove = function() {
    this.portIn && this.portIn.removeLink(this), this.portOut && this.portOut.removeLink(this), this.scene && this.scene.emitEvent("onUnLink", this.portIn, this.portOut, this), !this.portIn || this.portIn.type != k.OP.OP_PORT_TYPE_OBJECT && this.portIn.type != k.OP.OP_PORT_TYPE_ARRAY || (this.portIn.set(null), this.portIn.links.length > 0 && this.portIn.set(this.portIn.links[0].getOtherPort(this.portIn).get())), this.portIn && this.portIn.parent._checkLinksNeededToWork(), this.portOut && this.portOut.parent._checkLinksNeededToWork(), this.portIn = null, this.portOut = null, this.scene = null
  }, j.prototype.link = function(t, e) {
    if (!j.canLink(t, e)) return d.log("cannot link ports!"), !1;
    t.direction == k.PORT.PORT_DIR_IN ? (this.portIn = t, this.portOut = e) : (this.portIn = e, this.portOut = t), t.addLink(this), e.addLink(this), this.setValue(), t.onLink && t.onLink(this), e.onLink && e.onLink(this), t.parent._checkLinksNeededToWork(), e.parent._checkLinksNeededToWork()
  }, j.prototype.getSerialized = function() {
    const t = {};
    return t.portIn = this.portIn.getName(), t.portOut = this.portOut.getName(), t.objIn = this.portIn.parent.id, t.objOut = this.portOut.parent.id, t
  }, j.canLinkText = function(t, e) {
    if (t.direction == e.direction) {
      let t = "(out)";
      return e.direction == k.PORT.PORT_DIR_IN && (t = "(in)"), "can not link: same direction " + t
    }
    return t.parent == e.parent ? "can not link: same op" : t.type != k.OP.OP_PORT_TYPE_DYNAMIC && e.type != k.OP.OP_PORT_TYPE_DYNAMIC && t.type != e.type ? "can not link: different type" : t ? e ? t.direction == k.PORT.PORT_DIR_IN && t.isAnimated() || e.direction == k.PORT.PORT_DIR_IN && e.isAnimated() ? "can not link: is animated" : t.isLinkedTo(e) ? "ports already linked" : t.canLink && !t.canLink(e) || e.canLink && !e.canLink(t) ? "Incompatible" : "can link" : "can not link: port 2 invalid" : "can not link: port 1 invalid"
  }, j.canLink = function(t, e) {
    return !!t && (!!e && ((t.direction != k.PORT.PORT_DIR_IN || !t.isAnimated()) && ((e.direction != k.PORT.PORT_DIR_IN || !e.isAnimated()) && (!t.isHidden() && !e.isHidden() && (!t.isLinkedTo(e) && (t.direction != e.direction && ((t.type == e.type || t.type == k.OP.OP_PORT_TYPE_DYNAMIC || e.type == k.OP.OP_PORT_TYPE_DYNAMIC) && (t.type == k.OP.OP_PORT_TYPE_DYNAMIC || e.type == k.OP.OP_PORT_TYPE_DYNAMIC || t.parent != e.parent && (!(t.canLink && !t.canLink(e)) && !(e.canLink && !e.canLink(t)))))))))))
  };
  const q = function() {
    if (_.apply(this), this.data = {}, this.objName = "", this.portsOut = [], this.portsIn = [], this.portsInData = [], this.opId = "", this.uiAttribs = {}, this.enabled = !0, this.patch = arguments[0], this.name = arguments[1], this._needsLinkedToWork = [], this._needsParentOp = null, this._shortOpName = "", this.hasUiErrors = !1, this._uiErrors = {}, arguments[1]) {
      if (this._shortOpName = arguments[1].split(".")[arguments[1].split(".").length - 1], this._shortOpName.indexOf(k.OP.OP_VERSION_PREFIX) > 0) {
        const t = this._shortOpName.split(k.OP.OP_VERSION_PREFIX)[1];
        this._shortOpName = this._shortOpName.substring(0, this._shortOpName.length - (k.OP.OP_VERSION_PREFIX + t).length)
      }
      this.uiAttribs.title = this._shortOpName
    }
    this.id = arguments[2] || b(), this.onAddPort = null, this.onCreate = null, this.onResize = null, this.onLoaded = null, this.onDelete = null, this.onUiAttrChange = null, this._eventCallbacks = {}, this._instances = null, this.preRender = null, this.init = null
  }; {
    q.prototype.clearUiAttrib = function(t) {
      const e = {
        name: null
      };
      this.uiAttrib(e)
    }, q.prototype.getTitle = function(t) {
      return this.uiAttribs.title || this.name
    }, q.prototype.setTitle = function(t) {
      const e = this.name != t;
      this.name = t, this.uiAttr({
        title: t
      }), e && this.fireEvent("onTitleChange", t)
    };
    const t = function(t) {
      if (t) {
        t.error && console.warn("old ui warning attribute in " + this.name + ", use op.setUiError !"), t.warning && console.warn("old ui warning attribute in " + this.name + ", use op.setUiError !"), t.hint && console.warn("old ui hint attribute in " + this.name + ", use op.setUiError !"), "object" != typeof t && console.error("op.uiAttrib attribs are not string"), this.uiAttribs || (this.uiAttribs = {});
        for (const e in t) this.uiAttribs[e] = t[e];
        t.title && t.title != this.name && this.setTitle(t.title), this.fireEvent("onUiAttribsChange", t)
      }
    };
    q.prototype.setUiAttrib = t, q.prototype.uiAttr = t, q.prototype.getName = function() {
      return this.uiAttribs.name ? this.uiAttribs.name : this.objName.split(".")
    }, q.prototype.addOutPort = function(t) {
      return t.direction = k.PORT.PORT_DIR_OUT, t.parent = this, this.portsOut.push(t), this.onAddPort && this.onAddPort(t), t
    }, q.prototype.hasDynamicPort = function() {
      let t = 0;
      for (t = 0; t < this.portsIn.length; t++) {
        if (this.portsIn[t].type == k.OP.OP_PORT_TYPE_DYNAMIC) return !0;
        if ("dyn" == this.portsIn[t].getName()) return !0
      }
      for (t = 0; t < this.portsOut.length; t++) {
        if (this.portsOut[t].type == k.OP.OP_PORT_TYPE_DYNAMIC) return !0;
        if ("dyn" == this.portsOut[t].getName()) return !0
      }
      return !1
    }, q.prototype.addInPort = function(t) {
      if (!(t instanceof U)) throw new Error("parameter is not a port!");
      return t.direction = k.PORT.PORT_DIR_IN, t.parent = this, this.portsIn.push(t), this.onAddPort && this.onAddPort(t), t
    }, q.prototype.inFunction = q.prototype.inTrigger = function(t, e) {
      const i = this.addInPort(new U(this, t, k.OP.OP_PORT_TYPE_FUNCTION));
      return void 0 !== e && i.set(e), i
    }, q.prototype.inFunctionButton = q.prototype.inTriggerButton = function(t, e) {
      const i = this.addInPort(new U(this, t, k.OP.OP_PORT_TYPE_FUNCTION, {
        display: "button"
      }));
      return void 0 !== e && i.set(e), i
    }, q.prototype.inFunctionButton = q.prototype.inUiTriggerButtons = function(t, e) {
      const i = this.addInPort(new U(this, t, k.OP.OP_PORT_TYPE_FUNCTION, {
        display: "buttons"
      }));
      return void 0 !== e && i.set(e), i
    }, q.prototype.inValueFloat = q.prototype.inValue = q.prototype.inFloat = function(t, e) {
      const i = this.addInPort(new U(this, t, k.OP.OP_PORT_TYPE_VALUE));
      return void 0 !== e && (i.set(e), i.defaultValue = e), i
    }, q.prototype.inValueBool = q.prototype.inBool = function(t, e) {
      const i = this.addInPort(new U(this, t, k.OP.OP_PORT_TYPE_VALUE, {
        display: "bool"
      }));
      return void 0 !== e && (i.set(e), i.defaultValue = e), i
    }, q.prototype.inValueString = function(t, e) {
      const i = this.addInPort(new U(this, t, k.OP.OP_PORT_TYPE_VALUE, {
        type: "string"
      }));
      return i.value = "", void 0 !== e && (i.set(e), i.defaultValue = e), i
    }, q.prototype.inString = function(t, e) {
      const i = this.addInPort(new U(this, t, k.OP.OP_PORT_TYPE_STRING, {
        type: "string"
      }));
      return e = e || "", i.value = e, i.set(e), i.defaultValue = e, i
    }, q.prototype.inValueText = function(t, e) {
      const i = this.addInPort(new U(this, t, k.OP.OP_PORT_TYPE_VALUE, {
        type: "string",
        display: "text"
      }));
      return i.value = "", void 0 !== e && (i.set(e), i.defaultValue = e), i
    }, q.prototype.inTextarea = function(t, e) {
      const i = this.addInPort(new U(this, t, k.OP.OP_PORT_TYPE_STRING, {
        type: "string",
        display: "text"
      }));
      return i.value = "", void 0 !== e && (i.set(e), i.defaultValue = e), i
    }, q.prototype.inStringEditor = function(t, e, i, s = !0) {
      const r = this.addInPort(new U(this, t, k.OP.OP_PORT_TYPE_STRING, {
        type: "string",
        display: "editor",
        editorSyntax: i,
        hideFormatButton: s
      }));
      return r.value = "", void 0 !== e && (r.set(e), r.defaultValue = e), r
    }, q.prototype.inValueEditor = function(t, e, i, s = !0) {
      const r = this.addInPort(new U(this, t, k.OP.OP_PORT_TYPE_VALUE, {
        type: "string",
        display: "editor",
        editorSyntax: i,
        hideFormatButton: s
      }));
      return r.value = "", void 0 !== e && (r.set(e), r.defaultValue = e), r
    }, q.prototype.inValueSelect = q.prototype.inDropDown = function(t, e, i, s) {
      let r = null;
      if (s) {
        const i = new U(this, t, k.OP.OP_PORT_TYPE_VALUE, {
          display: "dropdown",
          hidePort: !0,
          type: "string",
          values: e
        });
        r = this.addInPort(i)
      } else {
        const s = new U(this, t + " index", k.OP.OP_PORT_TYPE_VALUE, {
            increment: "integer",
            hideParam: !0
          }),
          n = this.addInPort(s),
          o = new B(this, t, k.OP.OP_PORT_TYPE_VALUE, {
            display: "dropdown",
            hidePort: !0,
            type: "string",
            values: e
          }, n);
        if (s.onLinkChanged = function() {
            o.setUiAttribs({
              greyout: s.isLinked()
            })
          }, r = this.addInPort(o), void 0 !== i) {
          r.set(i);
          const t = e.findIndex(t => t == i);
          n.setValue(t), r.defaultValue = i, n.defaultValue = t
        }
      }
      return r
    }, q.prototype.inSwitch = function(t, e, i, s) {
      let r = null;
      if (s) {
        const i = new U(this, t, k.OP.OP_PORT_TYPE_STRING, {
          display: "switch",
          hidePort: !0,
          type: "string",
          values: e
        });
        r = this.addInPort(i)
      } else {
        const s = new U(this, t + " index", k.OP.OP_PORT_TYPE_VALUE, {
            increment: "integer",
            hideParam: !0
          }),
          n = this.addInPort(s),
          o = new L(this, t, k.OP.OP_PORT_TYPE_STRING, {
            display: "switch",
            hidePort: !0,
            type: "string",
            values: e
          }, n);
        if (s.onLinkChanged = function() {
            o.setUiAttribs({
              greyout: s.isLinked()
            })
          }, r = this.addInPort(o), void 0 !== i) {
          r.set(i);
          const t = e.findIndex(t => t == i);
          n.setValue(t), r.defaultValue = i, n.defaultValue = t
        }
      }
      return r
    }, q.prototype.inValueInt = q.prototype.inInt = function(t, e) {
      const i = this.addInPort(new U(this, t, k.OP.OP_PORT_TYPE_VALUE, {
        increment: "integer"
      }));
      return void 0 !== e && (i.set(e), i.defaultValue = e), i
    }, q.prototype.inFile = function(t, e, i) {
      const s = this.addInPort(new U(this, t, k.OP.OP_PORT_TYPE_VALUE, {
        display: "file",
        type: "string",
        filter: e
      }));
      return void 0 !== i && (s.set(i), s.defaultValue = i), s
    }, q.prototype.inUrl = function(t, e, i) {
      const s = this.addInPort(new U(this, t, k.OP.OP_PORT_TYPE_STRING, {
        display: "file",
        type: "string",
        filter: e
      }));
      return void 0 !== i && (s.set(i), s.defaultValue = i), s
    }, q.prototype.inTexture = function(t, e) {
      const i = this.addInPort(new U(this, t, k.OP.OP_PORT_TYPE_OBJECT, {
        display: "texture",
        objTypr: "texture",
        preview: !0
      }));
      return void 0 !== e && i.set(e), i
    }, q.prototype.inObject = function(t, e, i) {
      const s = this.addInPort(new U(this, t, k.OP.OP_PORT_TYPE_OBJECT, {
        objType: i
      }));
      return void 0 !== e && s.set(e), s
    }, q.prototype.inGradient = function(t, e) {
      const i = this.addInPort(new U(this, t, k.OP.OP_PORT_TYPE_VALUE, {
        display: "gradient",
        hidePort: !0
      }));
      return void 0 !== e && i.set(e), i
    }, q.prototype.inArray = function(t, e) {
      const i = this.addInPort(new U(this, t, k.OP.OP_PORT_TYPE_ARRAY));
      return void 0 !== e && i.set(e), i
    }, q.prototype.inValueSlider = q.prototype.inFloatSlider = function(t, e, i, s) {
      const r = {
        display: "range"
      };
      null != i && null != s && (r.min = i, r.max = s);
      const n = this.addInPort(new U(this, t, k.OP.OP_PORT_TYPE_VALUE, r));
      return void 0 !== e && (n.set(e), n.defaultValue = e), n
    }, q.prototype.outFunction = q.prototype.outTrigger = function(t, e) {
      const i = this.addOutPort(new U(this, t, k.OP.OP_PORT_TYPE_FUNCTION));
      return void 0 !== e && i.set(e), i
    }, q.prototype.outValue = q.prototype.outNumber = function(t, e) {
      const i = this.addOutPort(new U(this, t, k.OP.OP_PORT_TYPE_VALUE));
      return void 0 !== e && i.set(e), i
    }, q.prototype.outValueBool = q.prototype.outBool = function(t, e) {
      const i = this.addOutPort(new U(this, t, k.OP.OP_PORT_TYPE_VALUE, {
        display: "bool"
      }));
      return void 0 !== e ? i.set(e) : i.set(!1), i
    }, q.prototype.outValueString = function(t, e) {
      const i = this.addOutPort(new U(this, t, k.OP.OP_PORT_TYPE_VALUE, {
        type: "string"
      }));
      return void 0 !== e && i.set(e), i
    }, q.prototype.outString = function(t, e) {
      const i = this.addOutPort(new U(this, t, k.OP.OP_PORT_TYPE_STRING, {
        type: "string"
      }));
      return void 0 !== e ? i.set(e) : i.set(""), i
    }, q.prototype.outObject = function(t, e, i) {
      const s = this.addOutPort(new U(this, t, k.OP.OP_PORT_TYPE_OBJECT, {
        objType: i || null
      }));
      return void 0 !== e && s.set(e), s.ignoreValueSerialize = !0, s
    }, q.prototype.outArray = function(t, e) {
      const i = this.addOutPort(new U(this, t, k.OP.OP_PORT_TYPE_ARRAY));
      return void 0 !== e && i.set(e), i.ignoreValueSerialize = !0, i
    }, q.prototype.outTexture = function(t, e) {
      const i = this.addOutPort(new U(this, t, k.OP.OP_PORT_TYPE_OBJECT, {
        preview: !0,
        objType: "texture"
      }));
      return void 0 !== e && i.set(e), i.ignoreValueSerialize = !0, i
    }, q.prototype.inDynamic = function(t, e, i, s) {
      const r = new U(this, t, k.OP.OP_PORT_TYPE_DYNAMIC, i);
      return r.shouldLink = function(t, i) {
        if (e && f.isArray(e)) {
          for (let s = 0; s < e.length; s++) {
            if (t == this && i.type === e[s]) return !0;
            if (i == this && t.type === e[s]) return !0
          }
          return !1
        }
        return !0
      }, this.addInPort(r), void 0 !== s && (r.set(s), r.defaultValue = s), r
    }, q.prototype.printInfo = function() {
      for (let t = 0; t < this.portsIn.length; t++) d.log("in: " + this.portsIn[t].getName());
      for (const t in this.portsOut) d.log("out: " + this.portsOut[t].getName())
    }, q.prototype.getOutChilds = function() {
      const t = [];
      for (const e in this.portsOut)
        for (const i in this.portsOut[e].links) this.portsOut[e].type == k.OP.OP_PORT_TYPE_FUNCTION && t.push(this.portsOut[e].links[i].portIn.parent);
      return t
    }, q.prototype.markChilds = function() {
      this.marked = !0;
      for (const t in this.portsOut)
        for (const e in this.portsOut[t].links) this.portsOut[t].parent.marked = !0, this.portsOut[t].links[e].portIn.parent != this && this.portsOut[t].links[e].portIn.parent.markChilds()
    }, q.prototype.selectChilds = function() {
      this.setUiAttrib({
        selected: !0
      });
      for (const t in this.portsOut)
        for (const e in this.portsOut[t].links) this.portsOut[t].parent.setUiAttrib({
          selected: !0
        }), this.portsOut[t].links[e].portIn.parent != this && this.portsOut[t].links[e].portIn.parent.selectChilds()
    }, q.prototype.deleteChilds = function() {
      const t = [];
      for (const e in this.portsOut)
        for (const i in this.portsOut[e].links) this.portsOut[e].links[i].portIn.parent != this && (this.portsOut[e].parent != this && t.push(this.portsOut[e].parent), t.push(this.portsOut[e].links[i].portIn.parent), this.portsOut[e].links[i].portIn.parent.deleteChilds());
      for (const e in t) this.patch.deleteOp(t[e].id)
    }, q.prototype.removeLinks = function() {
      for (let t = 0; t < this.portsIn.length; t++) this.portsIn[t].removeLinks();
      for (let t = 0; t < this.portsOut.length; t++) this.portsOut[t].removeLinks()
    }, q.prototype.countFittingPorts = function(t) {
      let e = 0;
      for (const i in this.portsOut) j.canLink(t, this.portsOut[i]) && e++;
      for (const i in this.portsIn) j.canLink(t, this.portsIn[i]) && e++;
      return e
    }, q.prototype.findFittingPort = function(t, e = !1) {
      if (e) {
        for (const e in this.portsIn)
          if (j.canLink(t, this.portsIn[e])) return this.portsIn[e];
        for (const e in this.portsOut)
          if (j.canLink(t, this.portsOut[e])) return this.portsOut[e]
      } else {
        for (const e in this.portsOut)
          if (j.canLink(t, this.portsOut[e])) return this.portsOut[e];
        for (const e in this.portsIn)
          if (j.canLink(t, this.portsIn[e])) return this.portsIn[e]
      }
    }, q.prototype.getSerialized = function(t) {
      const e = {};
      this.opId && (e.opId = this.opId), e.objName = this.objName, e.id = this.id, e.uiAttribs = this.uiAttribs, this.uiAttribs.title == this._shortOpName && delete this.uiAttribs.title, this.uiAttribs.hasOwnProperty("working") && 1 == this.uiAttribs.working && delete this.uiAttribs.working, t && this.uiAttribs.hasOwnProperty("uierrors") && delete this.uiAttribs.uierrors, e.portsIn = [], e.portsOut = [];
      for (let t = 0; t < this.portsIn.length; t++) e.portsIn.push(this.portsIn[t].getSerialized());
      for (const t in this.portsOut) e.portsOut.push(this.portsOut[t].getSerialized());
      return e
    }, q.prototype.getFirstOutPortByType = function(t) {
      for (const e in this.portsOut)
        if (this.portsOut[e].type == t) return this.portsOut[e]
    }, q.prototype.getPort = q.prototype.getPortByName = function(t, e) {
      if (e) {
        for (let e = 0; e < this.portsIn.length; e++)
          if (this.portsIn[e].getName().toLowerCase() == t) return this.portsIn[e];
        for (let e = 0; e < this.portsOut.length; e++)
          if (this.portsOut[e].getName().toLowerCase() == t) return this.portsOut[e]
      } else {
        for (let e = 0; e < this.portsIn.length; e++)
          if (this.portsIn[e].getName() == t) return this.portsIn[e];
        for (let e = 0; e < this.portsOut.length; e++)
          if (this.portsOut[e].getName() == t) return this.portsOut[e]
      }
    }, q.prototype.getPortById = function(t) {
      for (let e = 0; e < this.portsIn.length; e++)
        if (this.portsIn[e].id == t) return this.portsIn[e];
      for (let e = 0; e < this.portsOut.length; e++)
        if (this.portsOut[e].id == t) return this.portsOut[e]
    }, q.prototype.updateAnims = function() {
      for (let t = 0; t < this.portsIn.length; t++) this.portsIn[t].updateAnim()
    }, q.prototype.log = function() {
      if (this.patch.silent) return;
      const t = ["[op " + this._shortOpName + "]"];
      t.push.apply(t, arguments), Function.prototype.apply.apply(console.log, [console, t])
    }, q.prototype.error = function() {
      if (this.patch.silent) return;
      const t = ["[op " + this._shortOpName + "]"];
      t.push.apply(t, arguments), Function.prototype.apply.apply(console.error, [console, t])
    }, q.prototype.warn = function() {
      if (this.patch.silent) return;
      const t = ["[op " + this._shortOpName + "]"];
      t.push.apply(t, arguments), Function.prototype.apply.apply(console.warn, [console, t])
    }, q.prototype.unLink = function() {
      for (let t = 0; t < this.portsOut.length; t++) this.portsOut[t].removeLinks();
      for (let t = 0; t < this.portsIn.length; t++) this.portsIn[t].removeLinks()
    }, q.unLinkTempReLinkP1 = null, q.unLinkTempReLinkP2 = null, q.prototype.undoUnLinkTemporary = function() {
      if (this.shakeLink && this.shakeLink.remove(), this.shakeLink = null, this.oldLinks) {
        for (let t = 0; t < this.oldLinks.length; t++) this.patch.link(this.oldLinks[t].in.parent, this.oldLinks[t].in.getName(), this.oldLinks[t].out.parent, this.oldLinks[t].out.getName());
        this.oldLinks.length = 0
      }
      q.unLinkTempReLinkP1 = null, q.unLinkTempReLinkP2 = null
    }, q.prototype.unLinkTemporary = function() {
      let t = 0;
      this.shakeLink = null, this.oldLinks = [], this.portsIn.length > 0 && this.portsIn[0].isLinked() && this.portsOut.length > 0 && this.portsOut[0].isLinked() && this.portsIn[0].getType() == this.portsOut[0].getType() && (q.unLinkTempReLinkP1 = this.portsIn[0].links[0].getOtherPort(this.portsIn[0]), q.unLinkTempReLinkP2 = this.portsOut[0].links[0].getOtherPort(this.portsOut[0]));
      for (let e = 0; e < this.portsIn.length; e++)
        for (t = 0; t < this.portsIn[e].links.length; t++) this.oldLinks.push({
          in: this.portsIn[e].links[t].portIn,
          out: this.portsIn[e].links[t].portOut
        });
      for (let e = 0; e < this.portsOut.length; e++)
        for (t = 0; t < this.portsOut[e].links.length; t++) this.oldLinks.push({
          in: this.portsOut[e].links[t].portIn,
          out: this.portsOut[e].links[t].portOut
        });
      this.unLink(), q.unLinkTempReLinkP1 && q.unLinkTempReLinkP2 && (this.shakeLink = this.patch.link(q.unLinkTempReLinkP1.parent, q.unLinkTempReLinkP1.getName(), q.unLinkTempReLinkP2.parent, q.unLinkTempReLinkP2.getName()))
    }, q.prototype.profile = function(t) {
      for (let t = 0; t < this.portsIn.length; t++) this.portsIn[t]._onTriggered = this.portsIn[t]._onTriggeredProfiling, this.portsIn[t].set = this.portsIn[t]._onSetProfiling
    }, q.prototype.findParent = function(t) {
      for (let e = 0; e < this.portsIn.length; e++)
        if (this.portsIn[e].isLinked()) {
          if (this.portsIn[e].links[0].portOut.parent.objName == t) return this.portsIn[e].links[0].portOut.parent;
          let i = null;
          if (i = this.portsIn[e].links[0].portOut.parent.findParent(t), i) return i
        } return null
    }, q.prototype.cleanUp = function() {
      if (this._instances) {
        for (let t = 0; t < this._instances.length; t++) this._instances[t].onDelete && this._instances[t].onDelete();
        this._instances.length = 0
      }
    }, q.prototype.instanced = function(t) {
      if (0 === this.patch.instancing.numCycles()) return !1;
      let e = 0,
        i = 0;
      if (!this._instances || this._instances.length != this.patch.instancing.numCycles()) {
        for (this._instances || (this._instances = []), d.log("creating instances of ", this.objName, this.patch.instancing.numCycles(), this._instances.length), this._instances.length = this.patch.instancing.numCycles(), e = 0; e < this._instances.length; e++) {
          this._instances[e] = this.patch.createOp(this.objName, !0), this._instances[e].instanced = function() {
            return !1
          }, this._instances[e].uiAttr(this.uiAttribs);
          for (let t = 0; t < this.portsOut.length; t++) this.portsOut[t].type == k.OP.OP_PORT_TYPE_FUNCTION && (this._instances[e].getPortByName(this.portsOut[t].name).trigger = this.portsOut[t].trigger.bind(this.portsOut[t]))
        }
        for (i = 0; i < this.portsIn.length; i++) this.portsIn[i].onChange = null, this.portsIn[i].onValueChanged = null
      }
      for (i = 0; i < this.portsIn.length; i++) this.portsIn[i].type != k.OP.OP_PORT_TYPE_VALUE && this.portsIn[i].type != k.OP.OP_PORT_TYPE_ARRAY || this._instances[this.patch.instancing.index()].portsIn[i].set(this.portsIn[i].get()), this.portsIn[i].type, k.OP.OP_PORT_TYPE_FUNCTION;
      for (i = 0; i < this.portsOut.length; i++) this.portsOut[i].type == k.OP.OP_PORT_TYPE_VALUE && this.portsOut[i].set(this._instances[this.patch.instancing.index()].portsOut[i].get());
      return !0
    }, q.prototype.initInstancable = function() {}, q.prototype.setValues = function(t) {
      for (const e in t) {
        const i = this.getPortByName(e);
        i ? i.set(t[e]) : d.log("op.setValues: port not found:", e)
      }
    }, q.prototype.setUiError = function(t, e, i) {
      if (!e && !this.hasUiErrors) return;
      if (!e && !this._uiErrors.hasOwnProperty(t)) return;
      if (this._uiErrors.hasOwnProperty(t) && this._uiErrors[t].txt == e) return;
      t.indexOf(" ") > -1 && console.warn("setuierror id cant have spaces!"), !e && this._uiErrors.hasOwnProperty(t) ? delete this._uiErrors[t] : !e || this._uiErrors.hasOwnProperty(t) && this._uiErrors[t].txt == e || (null == i && (i = 2), this._uiErrors[t] = {
        txt: e,
        level: i,
        id: t
      });
      const s = [];
      for (const t in this._uiErrors) s.push(this._uiErrors[t]);
      this.uiAttr({
        uierrors: s
      }), this.hasUiErrors = Object.keys(this._uiErrors).length
    }, q.prototype.setError = function(t, e) {
      if (console.warn("old error message op.error() - use op.setUiError()"), void 0 === e) this.uiAttr({
        error: t
      });
      else if (this._uiErrors[t] != e) {
        this._uiErrors[t] = e, e || delete this._uiErrors[t];
        const i = [];
        for (const t in this._uiErrors) i.push(this._uiErrors[t]);
        this.uiAttr({
          errors: i
        }), console.log(i)
      }
    }, q.prototype.addListener = q.prototype.addEventListener = function(t, e) {
      this._eventCallbacks[t] ? this._eventCallbacks[t].push(e) : this._eventCallbacks[t] = [e]
    }, q.prototype.hasEventListener = function(t, e) {
      if (t && e) {
        if (this._eventCallbacks[t]) {
          return -1 != this._eventCallbacks[t].indexOf(e)
        }
      } else d.log("hasListener: missing parameters")
    }, q.prototype.removeEventListener = function(t, e) {
      if (this._eventCallbacks[t]) {
        const i = this._eventCallbacks[t].indexOf(e); - 1 == i ? d.log("eventlistener " + t + " not found...") : this._eventCallbacks[t].slice(i)
      }
    }, q.prototype.fireEvent = function(t, e) {
      if (this._eventCallbacks[t])
        for (let i = 0; i < this._eventCallbacks[t].length; i++) this._eventCallbacks[t][i] && this._eventCallbacks[t][i].cb(e);
      this.onUiAttrChange && "onUiAttribsChange" == t && this.onUiAttrChange(e)
    }, q.prototype.setEnabled = function(t) {
      this.enabled = t, this.fireEvent("onEnabledChange", t)
    }, q.prototype.setPortGroup = function(t, e) {
      for (let i = 0; i < e.length; i++) e[i] && e[i].setUiAttribs ? e[i].setUiAttribs({
        group: t
      }) : console.error("setPortGroup: invalid port!")
    }, q.prototype.setUiAxisPorts = function(t, e, i) {
      t && t.setUiAttribs({
        axis: "X"
      }), e && e.setUiAttribs({
        axis: "Y"
      }), i && i.setUiAttribs({
        axis: "Z"
      })
    }, q.prototype.removePort = function(t) {
      for (let e = 0; e < this.portsIn.length; e++)
        if (this.portsIn[e] == t) return this.portsIn.splice(e, 1), this.fireEvent("onUiAttribsChange", {}), void this.fireEvent("onPortRemoved", {})
    }, q.prototype._checkLinksNeededToWork = function() {}, q.prototype.toWorkNeedsParent = function(t) {
      this.patch.isEditorMode() && (this._needsParentOp = t)
    }, q.prototype.toWorkPortsNeedToBeLinked = function() {
      if (this.patch.isEditorMode())
        for (let t = 0; t < arguments.length; t++) - 1 == this._needsLinkedToWork.indexOf(arguments[t]) && this._needsLinkedToWork.push(arguments[t])
    }, q.prototype.toWorkPortsNeedToBeLinkedReset = function() {
      this.patch.isEditorMode() && (this._needsLinkedToWork.length = 0, this.checkLinkTimeWarnings && this.checkLinkTimeWarnings())
    }, q.prototype.initVarPorts = function() {
      for (let t = 0; t < this.portsIn.length; t++) this.portsIn[t].getVariableName() && this.portsIn[t].setVariable(this.portsIn[t].getVariableName())
    }, q.prototype.refreshParams = function() {
      this.patch && this.patch.isEditorMode() && this.isCurrentUiOp() && gui.opParams.show(this)
    }, q.prototype.isCurrentUiOp = function() {
      if (this.patch.isEditorMode()) return gui.patchView.isCurrentOp(this)
    }
  }
  q.getNamespaceClassName = function(t) {
    return t ? t.startsWith("Ops.Gl") ? "gl" : t.startsWith("Ops.WebAudio") ? "audio" : t.startsWith("Ops.Devices") ? "devices" : t.startsWith("Ops.Html") || t.startsWith("Ops.Sidebar") ? "html" : t.startsWith("Ops.Math") ? "math" : t.startsWith("Ops.User") ? "user" : "default" : "default"
  }, q.isSubpatchOp = function(t) {
    return "Ops.Ui.Patch" == t || "Ops.Ui.SubPatch" == t
  };
  const Q = new class {
      constructor() {
        this._lastTime = 0, this.pause = !1, this.profileUniformCount = 0, this.profileShaderBinds = 0, this.profileUniformCount = 0, this.profileShaderCompiles = 0, this.profileVideosPlaying = 0, this.profileMVPMatrixCount = 0, this.profileEffectBuffercreate = 0, this.profileShaderGetUniform = 0, this.profileFrameBuffercreate = 0, this.profileMeshSetGeom = 0, this.profileTextureNew = 0, this.profileGenMipMap = 0, this.profileOnAnimFrameOps = 0, this.profileMainloopMs = 0, this.profileMeshDraw = 0, this.profileTextureEffect = 0, this.profileTexPreviews = 0, this.shaderCompileTime = 0, this.profileMeshNumElements = 0, this.profileMeshAttributes = 0
      }
      clear() {
        this.profileMeshAttributes = 0, this.profileUniformCount = 0, this.profileShaderGetUniform = 0, this.profileShaderCompiles = 0, this.profileShaderBinds = 0, this.profileTextureResize = 0, this.profileFrameBuffercreate = 0, this.profileEffectBuffercreate = 0, this.profileTextureDelete = 0, this.profileMeshSetGeom = 0, this.profileVideosPlaying = 0, this.profileMVPMatrixCount = 0, this.profileNonTypedAttrib = 0, this.profileNonTypedAttribNames = "", this.profileTextureNew = 0, this.profileGenMipMap = 0, this.profileFramebuffer = 0, this.profileMeshDraw = 0, this.profileTextureEffect = 0, this.profileTexPreviews = 0, this.profileMeshNumElements = 0
      }
    },
    J = function(t, e) {
      if (!t) throw new Error("no cgl");
      this._cgl = t, this.tex = this._cgl.gl.createTexture(), this.id = b(), this.width = 0, this.height = 0, this.loading = !1, this.flip = !0, this.flipped = !1, this.shadowMap = !1, this.anisotropic = 0, this.filter = J.FILTER_NEAREST, this.wrap = J.WRAP_CLAMP_TO_EDGE, this.texTarget = this._cgl.gl.TEXTURE_2D, e && e.type && (this.texTarget = e.type), this.textureType = J.TYPE_DEFAULT, this.unpackAlpha = !0, this._fromData = !0, this.name = "unknown", e ? (this.name = e.name || this.name, e.isDepthTexture && (this.textureType = J.TYPE_DEPTH), e.isFloatingPointTexture && (this.textureType = J.TYPE_FLOAT), "textureType" in e && (this.textureType = e.textureType), "filter" in e && (this.filter = e.filter), "wrap" in e && (this.wrap = e.wrap), "unpackAlpha" in e && (this.unpackAlpha = e.unpackAlpha), "flip" in e && (this.flip = e.flip), "shadowMap" in e && (this.shadowMap = e.shadowMap), "anisotropic" in e && (this.anisotropic = e.anisotropic)) : e = {}, e.width || (e.width = 8), e.height || (e.height = 8), Q.profileTextureNew++, this.setSize(e.width, e.height)
    };
  J.prototype.compareSettings = function(t) {
    return !!t && (t.width == this.width && t.height == this.height && t.filter == this.filter && t.wrap == this.wrap && t.textureType == this.textureType && t.unpackAlpha == this.unpackAlpha && t.flip == this.flip)
  }, J.prototype.clone = function() {
    const t = new J(this._cgl, {
      name: this.name,
      filter: this.filter,
      wrap: this.wrap,
      textureType: this.textureType,
      unpackAlpha: this.unpackAlpha,
      flip: this.flip,
      width: this.width,
      height: this.height
    });
    return this.compareSettings(t) || (console.error("Cloned texture settings do not compare!"), d.log(this), d.log(t)), t
  }, J.prototype.setSize = function(t, e) {
    if ((t != t || t <= 0 || !t) && (t = 8), (e != e || e <= 0 || !e) && (e = 8), (t > this._cgl.maxTexSize || e > this._cgl.maxTexSize) && console.error("texture size too big! " + t + "x" + e + " / max: " + this._cgl.maxTexSize), t = Math.min(t, this._cgl.maxTexSize), e = Math.min(e, this._cgl.maxTexSize), t = Math.floor(t), e = Math.floor(e), this.width == t && this.height == e) return;
    this.width = t, this.height = e, this._cgl.gl.bindTexture(this.texTarget, this.tex), Q.profileTextureResize++;
    if (this.textureType != J.TYPE_FLOAT || this.filter != J.FILTER_LINEAR || this._cgl.gl.getExtension("OES_texture_float_linear") || (console.warn("this graphics card does not support floating point texture linear interpolation!"), this.filter = J.FILTER_NEAREST), this._setFilter(), this.textureType == J.TYPE_FLOAT)
      if (1 == this._cgl.glVersion)
        if (this._cgl.glUseHalfFloatTex) {
          const i = this._cgl.gl.getExtension("OES_texture_half_float");
          if (1 == this._cgl.glVersion && !i) throw new Error("no half float texture extension");
          this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, t, e, 0, this._cgl.gl.RGBA, i.HALF_FLOAT_OES, null)
        } else {
          this._cgl.gl.getExtension("OES_texture_float");
          this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, t, e, 0, this._cgl.gl.RGBA, this._cgl.gl.FLOAT, null)
        }
    else this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA32F, t, e, 0, this._cgl.gl.RGBA, this._cgl.gl.FLOAT, null);
    else if (this.textureType == J.TYPE_DEPTH)
      if (1 == this._cgl.glVersion) {
        const i = this._cgl.gl.DEPTH_COMPONENT;
        this._cgl.gl.texImage2D(this.texTarget, 0, i, t, e, 0, this._cgl.gl.DEPTH_COMPONENT, this._cgl.gl.UNSIGNED_SHORT, null)
      } else {
        const i = this._cgl.gl.DEPTH_COMPONENT32F;
        this._cgl.gl.texImage2D(this.texTarget, 0, i, t, e, 0, this._cgl.gl.DEPTH_COMPONENT, this._cgl.gl.FLOAT, null)
      }
    else this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, t, e, 0, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, null);
    this._cgl.printError("cgltex") && (this.printInfo(), console.log((new Error).stack)), this.updateMipMap(), this._cgl.gl.bindTexture(this.texTarget, null)
  }, J.prototype.initFromData = function(t, e, i, s, r) {
    this.filter = s, this.wrap = r, null == s && (this.filter = J.FILTER_LINEAR), null == r && (this.wrap = J.CLAMP_TO_EDGE), this.width = e, this.height = i, this._fromData = !0, this._cgl.gl.bindTexture(this.texTarget, this.tex), this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, e, i, 0, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, t), this._setFilter(), this.updateMipMap(), this._cgl.gl.bindTexture(this.texTarget, null)
  }, J.prototype.updateMipMap = function() {
    2 != this._cgl.glVersion && !this.isPowerOfTwo() || this.filter != J.FILTER_MIPMAP || (this._cgl.gl.generateMipmap(this.texTarget), Q.profileGenMipMap++)
  }, J.prototype.initTexture = function(t, e) {
    this._cgl.checkFrameStarted("texture inittexture"), this._fromData = !1, this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha), t.width && (this.width = t.width), t.height && (this.height = t.height), e && (this.filter = e), t.width > this._cgl.maxTexSize && console.error("[cgl_texture] texture size to big!!!", t.width, this._cgl.maxTexSize), t.height > this._cgl.maxTexSize && console.error("[cgl_texture] texture size to big!!!", t.height, this._cgl.maxTexSize), this._cgl.gl.bindTexture(this.texTarget, this.tex), this.flipped = !this.flip, this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, this.flipped), this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, t), this._setFilter(), this.updateMipMap(), this._cgl.gl.bindTexture(this.texTarget, null), this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1)
  }, J.prototype.delete = function() {
    this.loading ? setTimeout(this.delete.bind(this), 50) : (this.width = 0, this.height = 0, Q.profileTextureDelete++, this._cgl.gl.deleteTexture(this.tex))
  }, J.prototype.isPowerOfTwo = function() {
    return J.isPowerOfTwo(this.width) && J.isPowerOfTwo(this.height)
  }, J.prototype.printInfo = function() {
    d.log(this.getInfo())
  }, J.prototype.getInfoReadable = function() {
    const t = this.getInfo();
    let e = "";
    t.name = t.name.substr(0, t.name.indexOf("?rnd="));
    for (const i in t) e += "* " + i + ":  **" + t[i] + "**\n";
    return e
  }, J.prototype.getInfo = function() {
    const t = {};
    t.name = this.name, t["power of two"] = this.isPowerOfTwo(), t.size = this.width + " x " + this.height;
    let e = this.texTarget;
    return this.texTarget == this._cgl.gl.TEXTURE_2D && (e = "TEXTURE_2D"), t.target = e, t.unpackAlpha = this.unpackAlpha, this.textureType == J.TYPE_FLOAT ? t.textureType = "TYPE_FLOAT" : this.textureType == J.TYPE_DEPTH ? t.textureType = "TYPE_DEPTH" : this.textureType == J.TYPE_DEFAULT ? t.textureType = "TYPE_DEFAULT" : t.textureType = "UNKNOWN", this.wrap == J.WRAP_CLAMP_TO_EDGE ? t.wrap = "CLAMP_TO_EDGE" : this.wrap == J.WRAP_REPEAT ? t.wrap = "WRAP_REPEAT" : this.wrap == J.WRAP_MIRRORED_REPEAT ? t.wrap = "WRAP_MIRRORED_REPEAT" : t.wrap = "UNKNOWN", this.filter == J.FILTER_NEAREST ? t.filter = "FILTER_NEAREST" : this.filter == J.FILTER_LINEAR ? t.filter = "FILTER_LINEAR" : this.filter == J.FILTER_MIPMAP ? t.filter = "FILTER_MIPMAP" : t.filter = "UNKNOWN", t
  }, J.prototype._setFilter = function() {
    if (this._fromData || this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha), this.shadowMap && (d.log("shadowmap tex"), this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_MODE, this._cgl.gl.COMPARE_REF_TO_TEXTURE), this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_FUNC, this._cgl.gl.LEQUAL)), this.textureType == J.TYPE_FLOAT && this.filter == J.FILTER_MIPMAP && (d.log("texture: HDR and mipmap filtering at the same time is not possible"), this.filter = J.FILTER_LINEAR, d.stack()), 1 != this._cgl.glVersion || this.isPowerOfTwo()) {
      if (this.wrap == J.WRAP_CLAMP_TO_EDGE ? (this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE)) : this.wrap == J.WRAP_REPEAT ? (this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.REPEAT), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.REPEAT)) : this.wrap == J.WRAP_MIRRORED_REPEAT && (this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.MIRRORED_REPEAT), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.MIRRORED_REPEAT)), this.filter == J.FILTER_NEAREST) this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST);
      else if (this.filter == J.FILTER_LINEAR) this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR);
      else {
        if (this.filter != J.FILTER_MIPMAP) throw d.log("unknown texture filter!", this.filter), new Error("unknown texture filter!" + this.filter);
        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR_MIPMAP_LINEAR)
      }
      if (this.anisotropic) {
        const t = this._cgl.gl.getExtension("EXT_texture_filter_anisotropic");
        if (t) {
          const e = this._cgl.gl.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
          this._cgl.gl.texParameterf(this._cgl.gl.TEXTURE_2D, t.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(e, this.anisotropic))
        }
      }
    } else this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE), this.filter = J.FILTER_NEAREST, this.wrap = J.WRAP_CLAMP_TO_EDGE
  }, J.load = function(t, e, i, s) {
    const r = t.patch.loading.start("texture", e),
      n = new J(t);
    return n.name = e, t.patch.isEditorMode() && gui.jobs().start({
      id: "loadtexture" + r,
      title: "loading texture " + CABLES.basename(e)
    }), n.image = new Image, n.image.crossOrigin = "anonymous", n.loading = !0, s && s.hasOwnProperty("filter") && (n.filter = s.filter), s && s.hasOwnProperty("flip") && (n.flip = s.flip), s && s.hasOwnProperty("wrap") && (n.wrap = s.wrap), s && s.hasOwnProperty("anisotropic") && (n.anisotropic = s.anisotropic), s && s.hasOwnProperty("unpackAlpha") && (n.unpackAlpha = s.unpackAlpha), n.image.onabort = n.image.onerror = s => {
      d.warn("[cgl.texture.load] error loading texture", e, s), n.loading = !1, t.patch.loading.finished(r);
      i && i({
        error: !0
      }), t.patch.isEditorMode() && gui.jobs().finish("loadtexture" + r)
    }, n.image.onload = function(e) {
      t.addNextFrameOnceCallback(() => {
        n.initTexture(n.image), t.patch.loading.finished(r), n.loading = !1, t.patch.isEditorMode() && gui.jobs().finish("loadtexture" + r), i && i(null, n)
      })
    }, n.image.src = e, n
  }, J.getTempTexture = function(t) {
    return t || console.error("[getTempTexture] no cgl!"), t.tempTexture || (t.tempTexture = J.getTemporaryTexture(t, 256, J.FILTER_LINEAR, J.REPEAT)), t.tempTexture
  }, J.getEmptyTexture = function(t) {
    if (t || console.error("[getEmptyTexture] no cgl!"), t.tempTextureEmpty) return t.tempTextureEmpty;
    t.tempTextureEmpty = new J(t, {
      name: "emptyTexture"
    });
    const e = new Uint8Array(256);
    return t.tempTextureEmpty.initFromData(e, 8, 8, J.FILTER_NEAREST, J.WRAP_REPEAT), t.tempTextureEmpty
  }, J.getRandomTexture = function(t) {
    if (t || console.error("[getRandomTexture] no cgl!"), t.randomTexture) return t.randomTexture;
    const e = new Uint8Array(262144);
    for (let t = 0; t < 65536; t++) e[4 * t + 0] = 255 * Math.random(), e[4 * t + 1] = 255 * Math.random(), e[4 * t + 2] = 255 * Math.random(), e[4 * t + 3] = 255;
    return t.randomTexture = new J(t), t.randomTexture.initFromData(e, 256, 256, J.FILTER_NEAREST, J.WRAP_REPEAT), t.randomTexture
  }, J.getTempGradientTexture = function(t) {
    if (t || console.error("[getTempGradientTexture] no cgl!"), t.tempTextureGradient) return t.tempTextureGradient;
    const e = new J(t),
      i = new Uint8Array(262144);
    for (let t = 0; t < 256; t++)
      for (let e = 0; e < 256; e++) i[4 * (e + 256 * t) + 0] = i[4 * (e + 256 * t) + 1] = i[4 * (e + 256 * t) + 2] = 255 - t, i[4 * (e + 256 * t) + 3] = 255;
    return e.initFromData(i, 256, 256, J.FILTER_NEAREST, J.WRAP_REPEAT), t.tempTextureGradient = e, e
  }, J.getTemporaryTexture = function(t, e, i, s) {
    const r = new J(t),
      n = [];
    for (let t = 0; t < e; t++)
      for (let i = 0; i < e; i++)(i + t) % 64 < 32 ? (n.push(200 + t / e * 25 + i / e * 25), n.push(200 + t / e * 25 + i / e * 25), n.push(200 + t / e * 25 + i / e * 25)) : (n.push(40 + t / e * 25 + i / e * 25), n.push(40 + t / e * 25 + i / e * 25), n.push(40 + t / e * 25 + i / e * 25)), n.push(255);
    const o = new Uint8Array(n);
    return r.initFromData(o, e, e, i, s), r
  }, J.createFromImage = function(t, e, i) {
    const s = new J(t, i = i || {});
    return s.flip = !1, s.image = e, s.width = e.width, s.height = e.height, s.initTexture(e, i.filter), s
  }, J.fromImage = function(t, e, i, s) {
    d.error("deprecated texture from image...");
    const r = new J(t);
    return r.flip = !1, i && (r.filter = i), s && (r.wrap = s), r.image = e, r.initTexture(e), r
  }, J.isPowerOfTwo = function(t) {
    return 1 == t || 2 == t || 4 == t || 8 == t || 16 == t || 32 == t || 64 == t || 128 == t || 256 == t || 512 == t || 1024 == t || 2048 == t || 4096 == t || 8192 == t || 16384 == t
  }, J.FILTER_NEAREST = 0, J.FILTER_LINEAR = 1, J.FILTER_MIPMAP = 2, J.WRAP_REPEAT = 0, J.WRAP_MIRRORED_REPEAT = 1, J.WRAP_CLAMP_TO_EDGE = 2, J.TYPE_DEFAULT = 0, J.TYPE_DEPTH = 1, J.TYPE_FLOAT = 2;
  const Z = function(t, e, i, s) {
    this.Framebuffer2DrawTargetsDefault = null, this.Framebuffer2BlittingFramebuffer = null, this.Framebuffer2FinalFramebuffer = null, this._cgl = t, this._width = 0, this._height = 0, this._depthRenderbuffer = null, this._frameBuffer = null, this._textureFrameBuffer = null, this._colorRenderbuffers = [], this._drawTargetArray = [], this.Framebuffer2BlittingFramebuffer || (this.Framebuffer2BlittingFramebuffer = t.gl.createFramebuffer()), this.Framebuffer2FinalFramebuffer || (this.Framebuffer2FinalFramebuffer = t.gl.createFramebuffer()), this.Framebuffer2DrawTargetsDefault || (this.Framebuffer2DrawTargetsDefault = [t.gl.COLOR_ATTACHMENT0]), this._options = s || {
      isFloatingPointTexture: !1
    }, this.name = this._options.name || "unknown", this._options.hasOwnProperty("numRenderBuffers") || (this._options.numRenderBuffers = 1), this._options.hasOwnProperty("depth") || (this._options.depth = !0), this._options.hasOwnProperty("clear") || (this._options.clear = !0), this._options.hasOwnProperty("multisampling") || (this._options.multisampling = !1, this._options.multisamplingSamples = 0), this._options.multisamplingSamples && (this._cgl.glSlowRenderer && (this._options.multisamplingSamples = 0), this._cgl.gl.MAX_SAMPLES ? this._options.multisamplingSamples = Math.min(this._cgl.maxSamples, this._options.multisamplingSamples) : this._options.multisamplingSamples = 0), this._options.hasOwnProperty("filter") || (this._options.filter = J.FILTER_LINEAR), this._options.hasOwnProperty("wrap") || (this._options.wrap = J.WRAP_REPEAT), this._numRenderBuffers = this._options.numRenderBuffers, this._colorTextures = [];
    for (let e = 0; e < this._numRenderBuffers; e++) this._colorTextures[e] = new J(t, {
      name: "fb2 " + this.name + " " + e,
      isFloatingPointTexture: this._options.isFloatingPointTexture,
      filter: this._options.filter,
      wrap: this._options.wrap
    });
    let r = J.FILTER_NEAREST;
    this._options.shadowMap && (r = J.FILTER_LINEAR);
    this._options.depth && (this._textureDepth = new J(t, {
      name: "fb2 depth " + this.name,
      isDepthTexture: !0,
      filter: r,
      shadowMap: this._options.shadowMap || !1,
      width: e || 512,
      height: i || 512
    })), t.aborted || this.setSize(e || 512, i || 512)
  };
  Z.prototype.getWidth = function() {
    return this._width
  }, Z.prototype.getHeight = function() {
    return this._height
  }, Z.prototype.getGlFrameBuffer = function() {
    return this._frameBuffer
  }, Z.prototype.getDepthRenderBuffer = function() {
    return this._depthRenderbuffer
  }, Z.prototype.getTextureColor = function() {
    return this._colorTextures[0]
  }, Z.prototype.getTextureColorNum = function(t) {
    return this._colorTextures[t]
  }, Z.prototype.getTextureDepth = function() {
    return this._textureDepth
  }, Z.prototype.setFilter = function(t) {
    for (let e = 0; e < this._numRenderBuffers; e++) this._colorTextures[e].filter = t, this._colorTextures[e].setSize(this._width, this._height)
  }, Z.prototype.delete = Z.prototype.dispose = function() {
    let t = 0;
    for (t = 0; t < this._numRenderBuffers; t++) this._colorTextures[t].delete();
    for (this._textureDepth.delete(), t = 0; t < this._numRenderBuffers; t++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[t]);
    this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer), this._cgl.gl.deleteFramebuffer(this._frameBuffer), this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer)
  }, Z.prototype.setSize = function(t, e) {
    let i = 0;
    if (this._width = Math.floor(t), this._height = Math.floor(e), this._width = Math.min(this._width, this._cgl.maxTexSize), this._height = Math.min(this._height, this._cgl.maxTexSize), Q.profileFrameBuffercreate++, this._frameBuffer) {
      for (i = 0; i < this._numRenderBuffers; i++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[i]);
      this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer), this._cgl.gl.deleteFramebuffer(this._frameBuffer), this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer)
    }
    this._frameBuffer = this._cgl.gl.createFramebuffer(), this._textureFrameBuffer = this._cgl.gl.createFramebuffer();
    const s = this._options.depth;
    for (i = 0; i < this._numRenderBuffers; i++) this._colorTextures[i].setSize(this._width, this._height);
    for (i = 0; i < this._numRenderBuffers; i++) {
      const t = this._cgl.gl.createRenderbuffer();
      this._cgl.gl.getExtension("EXT_color_buffer_float");
      this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, t), this._options.isFloatingPointTexture ? this._options.multisampling ? this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, this._cgl.gl.RGBA32F, this._width, this._height) : this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.RGBA32F, this._width, this._height) : this._options.multisampling ? this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, this._cgl.gl.RGBA8, this._width, this._height) : this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.RGBA8, this._width, this._height), this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.RENDERBUFFER, t), this._colorRenderbuffers[i] = t
    }
    for (this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._textureFrameBuffer), i = 0; i < this._numRenderBuffers; i++) this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex, 0);
    this._options.depth && this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);
    let r = this._cgl.gl.DEPTH_COMPONENT32F;
    for (this._cgl.glSlowRenderer && (r = this._cgl.gl.DEPTH_COMPONENT16), s && (this._textureDepth.setSize(this._width, this._height), this._depthRenderbuffer = this._cgl.gl.createRenderbuffer(), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer), this._options.isFloatingPointTexture, this._options.multisampling ? this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, r, this._width, this._height) : this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, r, this._width, this._height), this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer)), this._drawTargetArray.length = 0, i = 0; i < this._numRenderBuffers; i++) this._drawTargetArray.push(this._cgl.gl.COLOR_ATTACHMENT0 + i);
    const n = this._cgl.printError("fb setsize1");
    n && console.log(n), this._cgl.gl.isFramebuffer(this._textureFrameBuffer) || console.warn("invalid framebuffer");
    const o = this._cgl.gl.checkFramebufferStatus(this._cgl.gl.FRAMEBUFFER);
    if (o != this._cgl.gl.FRAMEBUFFER_COMPLETE) switch (console.log("framebuffer incomplete: " + this.name, this), o) {
      case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
        throw d.warn("FRAMEBUFFER_INCOMPLETE_ATTACHMENT...", this), new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");
      case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
        throw d.warn("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT"), new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
      case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
        throw d.warn("FRAMEBUFFER_INCOMPLETE_DIMENSIONS"), new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
      case this._cgl.gl.FRAMEBUFFER_UNSUPPORTED:
        throw d.warn("FRAMEBUFFER_UNSUPPORTED"), new Error("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED");
      default:
        throw d.warn("incomplete framebuffer", o), new Error("Incomplete framebuffer: " + o)
    }
    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null), this._cgl.printError("fb setsize")
  }, Z.prototype.renderStart = function() {
    this._cgl.checkFrameStarted("fb2 renderstart"), this._cgl.pushModelMatrix(), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer), this._cgl.pushGlFrameBuffer(this._frameBuffer), this._cgl.pushFrameBuffer(this), this._cgl.pushPMatrix(), this._cgl.gl.viewport(0, 0, this._width, this._height), this._cgl.gl.drawBuffers(this._drawTargetArray), this._options.clear && (this._cgl.gl.clearColor(0, 0, 0, 0), this._cgl.gl.clear(this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT))
  }, Z.prototype.renderEnd = function() {
    if (this._cgl.popPMatrix(), Q.profileFramebuffer++, this._numRenderBuffers <= 1) this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this._frameBuffer), this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer), this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, 0, [0, 0, 0, 1]), this._cgl.gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT, this._cgl.gl.NEAREST);
    else {
      this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer), this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer), this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0);
      for (let t = 0; t < this._numRenderBuffers; t++) {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer), this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.RENDERBUFFER, this._colorRenderbuffers[t]), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer), this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._colorTextures[t].tex, 0), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null), this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer), this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this.Framebuffer2FinalFramebuffer), this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, 0, [0, 0, 0, 1]);
        let e = this._cgl.gl.COLOR_BUFFER_BIT;
        0 == t && (e |= this._cgl.gl.DEPTH_BUFFER_BIT), this._cgl.gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, e, this._cgl.gl.NEAREST)
      }
    }
    if (this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer()), this._cgl.popFrameBuffer(), this._cgl.popModelMatrix(), this._cgl.resetViewPort(), this._colorTextures[0].filter == J.FILTER_MIPMAP)
      for (let t = 0; t < this._numRenderBuffers; t++) this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._colorTextures[t].tex), this._colorTextures[t].updateMipMap(), this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null)
  };
  class $ {
    constructor(t) {
      this._max = [-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE], this._min = [Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE], this._center = [], this._size = [], this._first = !0, this._wireMesh = null, t && this.apply(t)
    }
    get maxAxis() {
      return this._maxAxis
    }
    get size() {
      return this._size
    }
    get center() {
      return this._center
    }
    get x() {
      return this._center[0]
    }
    get y() {
      return this._center[1]
    }
    get z() {
      return this._center[2]
    }
    get minX() {
      return this._min[0]
    }
    get minY() {
      return this._min[1]
    }
    get minZ() {
      return this._min[2]
    }
    get maxX() {
      return this._max[0]
    }
    get maxY() {
      return this._max[1]
    }
    get maxZ() {
      return this._max[2]
    }
    apply(t, e) {
      if (t) {
        if (t instanceof $) {
          const e = t;
          this.applyPos(e.maxX, e.maxY, e.maxZ), this.applyPos(e.minX, e.minY, e.minZ)
        } else {
          let e = 0;
          for (e = 0; e < t.vertices.length; e += 3) t.vertices[e + 0] == t.vertices[e + 0] && this.applyPos(t.vertices[e + 0], t.vertices[e + 1], t.vertices[e + 2])
        }
        this.calcCenterSize()
      }
    }
    copy() {
      return new $(this)
    }
    get changed() {
      return !(this._max[0] == -Number.MAX_VALUE && this._max[1] == -Number.MAX_VALUE && this._max[2] == -Number.MAX_VALUE)
    }
    applyPos(t, e, i) {
      if (this._first) return this._max[0] = t, this._max[1] = e, this._max[2] = i, this._min[0] = t, this._min[1] = e, this._min[2] = i, void(this._first = !1);
      this._max[0] = Math.max(this._max[0], t), this._max[1] = Math.max(this._max[1], e), this._max[2] = Math.max(this._max[2], i), this._min[0] = Math.min(this._min[0], t), this._min[1] = Math.min(this._min[1], e), this._min[2] = Math.min(this._min[2], i)
    }
    calcCenterSize() {
      this._size[0] = this._max[0] - this._min[0], this._size[1] = this._max[1] - this._min[1], this._size[2] = this._max[2] - this._min[2], this._center[0] = (this._min[0] + this._max[0]) / 2, this._center[1] = (this._min[1] + this._max[1]) / 2, this._center[2] = (this._min[2] + this._max[2]) / 2, this._maxAxis = Math.max(this._size[2], Math.max(this._size[0], this._size[1]))
    }
    mulMat4(t) {
      vec3.transformMat4(this._max, this._max, t), vec3.transformMat4(this._min, this._min, t), this.calcCenterSize()
    }
    render(t, e) {
      this._wireMesh || (this._wireMesh = new CGL.WireCube(t)), t.pushModelMatrix(), mat4.translate(t.mMatrix, t.mMatrix, this._center), this._wireMesh.render(t, this._size[0] / 2, this._size[1] / 2, this._size[2] / 2), t.popModelMatrix()
    }
  }
  const tt = function(t) {
    this.name = t, this.faceVertCount = 3, this._vertices = [], this.verticesIndices = [], this.texCoords = new Float32Array, this.texCoordsIndices = [], this.vertexNormals = [], this.tangents = [], this.biTangents = [], this.barycentrics = [], this.morphTargets = [], this.vertexColors = [], this._attributes = {}, this.glPrimitive = null, Object.defineProperty(this, "vertices", {
      get() {
        return this._vertices
      },
      set(t) {
        this.setVertices(t)
      }
    })
  };
  tt.prototype.clear = function() {
    this.vertices = new Float32Array([]), this.verticesIndices.length = 0, this.texCoords = new Float32Array([]), this.texCoordsIndices.length = 0, this.vertexNormals = new Float32Array([])
  }, tt.prototype.getAttributes = function() {
    return this._attributes
  }, tt.prototype.getAttribute = function(t) {
    for (const e in this._attributes)
      if (this._attributes[e].name == t) return this._attributes[e];
    return null
  }, tt.prototype.setAttribute = function(t, e, i) {
    let s = "";
    1 == i ? s = "float" : 2 == i ? s = "vec2" : 3 == i ? s = "vec3" : 4 == i && (s = "vec4");
    const r = {
      name: t,
      data: e,
      itemSize: i,
      type: s
    };
    this._attributes[t] = r
  }, tt.prototype.setVertices = function(t) {
    t instanceof Float32Array ? this._vertices = t : this._vertices = new Float32Array(t)
  }, tt.prototype.setTexCoords = function(t) {
    t instanceof Float32Array ? this.texCoords = t : this.texCoords = new Float32Array(t)
  }, tt.prototype.calcNormals = function(t) {
    t || this.unIndex(), this.calculateNormals({})
  }, tt.prototype.setPointVertices = function(t) {
    if (t.length % 3 == 0) {
      t instanceof Float32Array ? this.vertices = t : this.vertices = new Float32Array(t), this.texCoords instanceof Float32Array || (this.texCoords = new Float32Array(t.length / 3 * 2)), this.verticesIndices.length = t.length / 3;
      for (let e = 0; e < t.length / 3; e++) this.verticesIndices[e] = e, this.texCoords[2 * e] = 0, this.texCoords[2 * e + 1] = 0
    } else console.error("CGL MESH : SetPointVertices: Array must be multiple of three.")
  }, tt.prototype.merge = function(t) {
    if (!t) return;
    const e = this.verticesIndices.length,
      i = this.vertices.length / 3;
    this.verticesIndices.length = this.verticesIndices.length + t.verticesIndices.length;
    for (let s = 0; s < t.verticesIndices.length; s++) this.verticesIndices[e + s] = t.verticesIndices[s] + i;
    this.vertices = f.float32Concat(this.vertices, t.vertices), this.texCoords = f.float32Concat(this.texCoords, t.texCoords), this.vertexNormals = f.float32Concat(this.vertexNormals, t.vertexNormals), this.tangents = f.float32Concat(this.tangents, t.tangents), this.bitangents = f.float32Concat(this.bitangents, t.bitangents)
  }, tt.prototype.copy = function() {
    let t = 0;
    const e = new tt;
    if (e.faceVertCount = this.faceVertCount, e.setVertices(this._vertices.slice(0)), this.verticesIndices)
      for (e.verticesIndices.length = this.verticesIndices.length, t = 0; t < this.verticesIndices.length; t++) e.verticesIndices[t] = this.verticesIndices[t];
    for (e.texCoords = new Float32Array(this.texCoords.length), t = 0; t < this.texCoords.length; t++) e.texCoords[t] = this.texCoords[t];
    for (e.texCoordsIndices.length = this.texCoordsIndices.length, t = 0; t < this.texCoordsIndices.length; t++) e.texCoordsIndices[t] = this.texCoordsIndices[t];
    for (e.vertexNormals = new Float32Array(this.vertexNormals.length), t = 0; t < this.vertexNormals.length; t++) e.vertexNormals[t] = this.vertexNormals[t];
    if (this.tangents)
      for (e.tangents = [], e.tangents.length = this.tangents.length, t = 0; t < this.tangents.length; t++) e.tangents[t] = this.tangents[t];
    if (this.biTangents)
      for (e.biTangents = [], e.biTangents.length = this.biTangents.length, t = 0; t < this.biTangents.length; t++) e.biTangents[t] = this.biTangents[t];
    for (e.barycentrics.length = this.barycentrics.length, t = 0; t < this.barycentrics.length; t++) e.barycentrics[t] = this.barycentrics[t];
    for (e.morphTargets.length = this.morphTargets.length, t = 0; t < this.morphTargets.length; t++) e.morphTargets[t] = this.morphTargets[t];
    for (e.vertexColors.length = this.vertexColors.length, t = 0; t < this.vertexColors.length; t++) e.vertexColors[t] = this.vertexColors[t];
    return e
  }, tt.prototype.calculateNormals = function(t) {
    const e = vec3.create(),
      i = vec3.create(),
      s = vec3.create();

    function r(r) {
      return vec3.subtract(e, r[0], r[1]), vec3.subtract(i, r[0], r[2]), vec3.cross(s, e, i), vec3.normalize(s, s), t && t.forceZUp && s[2] < 0 && (s[0] *= -1, s[1] *= -1, s[2] *= -1), s
    }
    this.getVertexVec = function(t) {
      const e = [0, 0, 0];
      return e[0] = this.vertices[3 * t + 0], e[1] = this.vertices[3 * t + 1], e[2] = this.vertices[3 * t + 2], e
    }, this.vertexNormals instanceof Float32Array && this.vertexNormals.length == this.vertices.length || (this.vertexNormals = new Float32Array(this.vertices.length));
    for (let t = 0; t < this.vertices.length; t++) this.vertexNormals[t] = 0;
    if (this.isIndexed()) {
      const t = [];
      t.length = this.verticesIndices.length / 3;
      for (let e = 0; e < this.verticesIndices.length; e += 3) {
        const i = [this.getVertexVec(this.verticesIndices[e + 0]), this.getVertexVec(this.verticesIndices[e + 1]), this.getVertexVec(this.verticesIndices[e + 2])];
        t[e / 3] = r(i), this.vertexNormals[3 * this.verticesIndices[e + 0] + 0] += t[e / 3][0], this.vertexNormals[3 * this.verticesIndices[e + 0] + 1] += t[e / 3][1], this.vertexNormals[3 * this.verticesIndices[e + 0] + 2] += t[e / 3][2], this.vertexNormals[3 * this.verticesIndices[e + 1] + 0] += t[e / 3][0], this.vertexNormals[3 * this.verticesIndices[e + 1] + 1] += t[e / 3][1], this.vertexNormals[3 * this.verticesIndices[e + 1] + 2] += t[e / 3][2], this.vertexNormals[3 * this.verticesIndices[e + 2] + 0] += t[e / 3][0], this.vertexNormals[3 * this.verticesIndices[e + 2] + 1] += t[e / 3][1], this.vertexNormals[3 * this.verticesIndices[e + 2] + 2] += t[e / 3][2]
      }
      for (let t = 0; t < this.verticesIndices.length; t += 3)
        for (let e = 0; e < 3; e++) {
          const i = [this.vertexNormals[3 * this.verticesIndices[t + e] + 0], this.vertexNormals[3 * this.verticesIndices[t + e] + 1], this.vertexNormals[3 * this.verticesIndices[t + e] + 2]];
          vec3.normalize(i, i), this.vertexNormals[3 * this.verticesIndices[t + e] + 0] = i[0], this.vertexNormals[3 * this.verticesIndices[t + e] + 1] = i[1], this.vertexNormals[3 * this.verticesIndices[t + e] + 2] = i[2]
        }
    } else {
      const t = [];
      for (let e = 0; e < this.vertices.length; e += 9) {
        const i = r([
          [this.vertices[e + 0], this.vertices[e + 1], this.vertices[e + 2]],
          [this.vertices[e + 3], this.vertices[e + 4], this.vertices[e + 5]],
          [this.vertices[e + 6], this.vertices[e + 7], this.vertices[e + 8]]
        ]);
        t.push(i[0], i[1], i[2], i[0], i[1], i[2], i[0], i[1], i[2])
      }
      this.vertexNormals = t
    }
  }, tt.prototype.calcTangentsBitangents = function() {
    if (!this.vertices.length) return void console.error("Cannot calculate tangents/bitangents without vertices.");
    if (!this.vertexNormals.length) return void console.error("Cannot calculate tangents/bitangents without normals.");
    if (!this.texCoords.length) {
      console.warn("No texcoords. Replacing with default values [0, 0].");
      const t = this.vertices.length / 3 * 2;
      this.texCoords = new Float32Array(t);
      for (let e = 0; e < t; e += 1) this.texCoords[e] = 0
    }
    if (!this.verticesIndices || !this.verticesIndices.length) return void console.error("Cannot calculate tangents/bitangents without vertex indices.");
    if (this.verticesIndices.length % 3 != 0) return void console.error("Vertex indices mismatch!");
    const t = this.verticesIndices.length / 3,
      e = this.vertices.length / 3;
    this.tangents = new Float32Array(this.vertexNormals.length), this.biTangents = new Float32Array(this.vertexNormals.length);
    const i = [];
    i.length = 2 * e;
    const s = vec3.create(),
      r = vec3.create(),
      n = vec3.create(),
      o = vec2.create(),
      h = vec2.create(),
      a = vec2.create(),
      l = vec3.create(),
      u = vec3.create();
    for (let c = 0; c < t; c += 1) {
      const t = this.verticesIndices[3 * c],
        p = this.verticesIndices[3 * c + 1],
        d = this.verticesIndices[3 * c + 2];
      vec3.set(s, this.vertices[3 * t], this.vertices[3 * t + 1], this.vertices[3 * t + 2]), vec3.set(r, this.vertices[3 * p], this.vertices[3 * p + 1], this.vertices[3 * p + 2]), vec3.set(n, this.vertices[3 * d], this.vertices[3 * d + 1], this.vertices[3 * d + 2]), vec2.set(o, this.texCoords[2 * t], this.texCoords[2 * t + 1]), vec2.set(h, this.texCoords[2 * p], this.texCoords[2 * p + 1]), vec2.set(a, this.texCoords[2 * d], this.texCoords[2 * d + 1]);
      const _ = r[0] - s[0],
        f = n[0] - s[0],
        g = r[1] - s[1],
        m = n[1] - s[1],
        E = r[2] - s[2],
        T = n[2] - s[2],
        A = h[0] - o[0],
        b = a[0] - o[0],
        y = h[1] - o[1],
        O = a[1] - o[1],
        x = 1 / (A * O - b * y);
      vec3.set(l, (O * _ - y * f) * x, (O * g - y * m) * x, (O * E - y * T) * x), vec3.set(u, (A * f - b * _) * x, (A * m - b * g) * x, (A * T - b * E) * x), i[t] = l, i[p] = l, i[d] = l, i[t + e] = u, i[p + e] = u, i[d + e] = u
    }
    const c = vec3.create(),
      p = vec3.create(),
      d = vec3.create(),
      _ = vec3.create(),
      f = vec3.create(),
      g = vec3.create(),
      m = vec3.create(),
      E = vec3.create();
    for (let t = 0; t < e; t += 1) {
      if (!i[t]) continue;
      vec3.set(c, this.vertexNormals[3 * t], this.vertexNormals[3 * t + 1], this.vertexNormals[3 * t + 2]), vec3.set(p, i[t][0], i[t][1], i[t][2]);
      const s = vec3.dot(c, p);
      vec3.scale(f, c, s), vec3.subtract(g, p, f), vec3.normalize(E, g), vec3.cross(m, c, p);
      vec3.dot(m, i[t + e]);
      const r = 1;
      vec3.scale(d, E, 1 / r), vec3.cross(_, c, d), this.tangents[3 * t + 0] = d[0], this.tangents[3 * t + 1] = d[1], this.tangents[3 * t + 2] = d[2], this.biTangents[3 * t + 0] = _[0], this.biTangents[3 * t + 1] = _[1], this.biTangents[3 * t + 2] = _[2]
    }
  }, tt.prototype.isIndexed = function() {
    return 0 != this.verticesIndices.length
  }, tt.prototype.unIndex = function(t) {
    const e = [],
      i = [],
      s = [],
      r = [];
    let n = 0,
      o = 0;
    for (this.vertexNormals = [], o = 0; o < this.verticesIndices.length; o += 3) e.push(this.vertices[3 * this.verticesIndices[o + 0] + 0]), e.push(this.vertices[3 * this.verticesIndices[o + 0] + 1]), e.push(this.vertices[3 * this.verticesIndices[o + 0] + 2]), r.push(this.vertexNormals[3 * this.verticesIndices[o + 0] + 0]), r.push(this.vertexNormals[3 * this.verticesIndices[o + 0] + 1]), r.push(this.vertexNormals[3 * this.verticesIndices[o + 0] + 2]), this.texCoords ? (s.push(this.texCoords[2 * this.verticesIndices[o + 0] + 0]), s.push(this.texCoords[2 * this.verticesIndices[o + 0] + 1])) : (s.push(0), s.push(0)), i.push(n), n++, e.push(this.vertices[3 * this.verticesIndices[o + 1] + 0]), e.push(this.vertices[3 * this.verticesIndices[o + 1] + 1]), e.push(this.vertices[3 * this.verticesIndices[o + 1] + 2]), r.push(this.vertexNormals[3 * this.verticesIndices[o + 1] + 0]), r.push(this.vertexNormals[3 * this.verticesIndices[o + 1] + 1]), r.push(this.vertexNormals[3 * this.verticesIndices[o + 1] + 2]), this.texCoords ? (s.push(this.texCoords[2 * this.verticesIndices[o + 1] + 0]), s.push(this.texCoords[2 * this.verticesIndices[o + 1] + 1])) : (s.push(0), s.push(0)), i.push(n), n++, e.push(this.vertices[3 * this.verticesIndices[o + 2] + 0]), e.push(this.vertices[3 * this.verticesIndices[o + 2] + 1]), e.push(this.vertices[3 * this.verticesIndices[o + 2] + 2]), r.push(this.vertexNormals[3 * this.verticesIndices[o + 2] + 0]), r.push(this.vertexNormals[3 * this.verticesIndices[o + 2] + 1]), r.push(this.vertexNormals[3 * this.verticesIndices[o + 2] + 2]), this.texCoords ? (s.push(this.texCoords[2 * this.verticesIndices[o + 2] + 0]), s.push(this.texCoords[2 * this.verticesIndices[o + 2] + 1])) : (s.push(0), s.push(0)), i.push(n), n++;
    this.vertices = e, this.texCoords = s, this.vertexNormals = r, this.verticesIndices.length = 0, t && (this.verticesIndices = i), this.calculateNormals()
  }, tt.prototype.calcBarycentric = function() {
    this.barycentrics.length = this.vertices.length;
    let t = 0;
    for (t = 0; t < this.vertices.length; t++) this.barycentrics[t] = 0;
    let e = 0;
    for (t = 0; t < this.vertices.length; t += 3) this.barycentrics[t + e] = 1, e++, 3 == e && (e = 0)
  }, tt.prototype.getBounds = function() {
    return new $(this)
  }, tt.prototype.center = function(t, e, i) {
    void 0 === t && (t = !0, e = !0, i = !0);
    let s = 0;
    const r = this.getBounds(),
      n = [r.minX + (r.maxX - r.minX) / 2, r.minY + (r.maxY - r.minY) / 2, r.minZ + (r.maxZ - r.minZ) / 2];
    for (s = 0; s < this.vertices.length; s += 3) this.vertices[s + 0] == this.vertices[s + 0] && (t && (this.vertices[s + 0] -= n[0]), e && (this.vertices[s + 1] -= n[1]), i && (this.vertices[s + 2] -= n[2]));
    return n
  }, tt.prototype.mapTexCoords2d = function() {
    const t = this.getBounds(),
      e = this.vertices.length / 3;
    this.texCoords = new Float32Array(2 * e);
    for (let i = 0; i < e; i++) {
      const e = this.vertices[3 * i + 0],
        s = this.vertices[3 * i + 1];
      this.texCoords[2 * i + 0] = e / (t.maxX - t.minX) + .5, this.texCoords[2 * i + 1] = 1 - s / (t.maxY - t.minY) + .5
    }
  }, tt.buildFromFaces = function(t) {
    const e = [],
      i = [];
    for (let s = 0; s < t.length; s += 3) {
      const r = t[s + 0],
        n = t[s + 1],
        o = t[s + 2],
        h = [-1, -1, -1];
      for (let t = 0; t < e; t += 3) e[t + 0] == r[0] && e[t + 1] == r[1] && e[t + 2] == r[2] && (h[0] = t / 3), e[t + 0] == n[0] && e[t + 1] == n[1] && e[t + 2] == n[2] && (h[1] = t / 3), e[t + 0] == o[0] && e[t + 1] == o[1] && e[t + 2] == o[2] && (h[2] = t / 3); - 1 == h[0] && (e.push(r[0], r[1], r[2]), h[0] = (e.length - 1) / 3), -1 == h[1] && (e.push(n[0], n[1], n[2]), h[1] = (e.length - 1) / 3), -1 == h[2] && (e.push(o[0], o[1], o[2]), h[2] = (e.length - 1) / 3), i.push(parseInt(h[0], 10)), i.push(parseInt(h[1], 10)), i.push(parseInt(h[2], 10))
    }
    const s = new tt;
    return s.vertices = e, s.verticesIndices = i, s
  }, tt.json2geom = function(t) {
    const e = new tt;
    if (e.verticesIndices = [], e.vertices = t.vertices || [], e.vertexNormals = t.normals || [], e.vertexColors = t.colors || [], e.tangents = t.tangents || [], e.biTangents = t.bitangents || [], t.texturecoords && e.setTexCoords(t.texturecoords[0]), t.vertices_b64 && (e.vertices = new Float32Array(c(t.vertices_b64))), t.normals_b64 && (e.vertexNormals = new Float32Array(c(t.normals_b64))), t.tangents_b64 && (e.tangents = new Float32Array(c(t.tangents_b64))), t.bitangents_b64 && (e.biTangents = new Float32Array(c(t.bitangents_b64))), t.texturecoords_b64 && e.setTexCoords(new Float32Array(c(t.texturecoords_b64[0]))), t.faces_b64) e.verticesIndices = new Uint32Array(c(t.faces_b64));
    else {
      e.verticesIndices.length = 3 * t.faces.length;
      for (let i = 0; i < t.faces.length; i++) e.verticesIndices[3 * i] = t.faces[i][0], e.verticesIndices[3 * i + 1] = t.faces[i][1], e.verticesIndices[3 * i + 2] = t.faces[i][2]
    }
    return e
  };
  const et = function(t, e, i, s, r, n, o, h, a, l) {
    if (this._loc = -1, this._type = e, this._name = i, this._shader = t, this._value = 1e-5, this._oldValue = null, this._port = null, this._structName = a, this._structUniformName = h, this._propertyName = l, this._shader._addUniform(this), this.needsUpdate = !0, this.shaderType = null, this.comment = null, "f" == e) this.set = this.setValue = this.setValueF.bind(this), this.updateValue = this.updateValueF.bind(this);
    else if ("f[]" == e) this.set = this.setValue = this.setValueArrayF.bind(this), this.updateValue = this.updateValueArrayF.bind(this);
    else if ("2f[]" == e) this.set = this.setValue = this.setValueArray2F.bind(this), this.updateValue = this.updateValueArray2F.bind(this);
    else if ("3f[]" == e) this.set = this.setValue = this.setValueArray3F.bind(this), this.updateValue = this.updateValueArray3F.bind(this);
    else if ("4f[]" == e) this.set = this.setValue = this.setValueArray4F.bind(this), this.updateValue = this.updateValueArray4F.bind(this);
    else if ("i" == e) this.set = this.setValue = this.setValueI.bind(this), this.updateValue = this.updateValueI.bind(this);
    else if ("2i" == e) this.set = this.setValue = this.setValue2I.bind(this), this.updateValue = this.updateValue2I.bind(this);
    else if ("3i" == e) this.set = this.setValue = this.setValue3I.bind(this), this.updateValue = this.updateValue3I.bind(this);
    else if ("4i" == e) this.set = this.setValue = this.setValue4I.bind(this), this.updateValue = this.updateValue4I.bind(this);
    else if ("b" == e) this.set = this.setValue = this.setValueBool.bind(this), this.updateValue = this.updateValueBool.bind(this);
    else if ("4f" == e) this.set = this.setValue = this.setValue4F.bind(this), this.updateValue = this.updateValue4F.bind(this);
    else if ("3f" == e) this.set = this.setValue = this.setValue3F.bind(this), this.updateValue = this.updateValue3F.bind(this);
    else if ("2f" == e) this.set = this.setValue = this.setValue2F.bind(this), this.updateValue = this.updateValue2F.bind(this);
    else if ("t" == e) this.set = this.setValue = this.setValueT.bind(this), this.updateValue = this.updateValueT.bind(this);
    else if ("tc" == e) this.set = this.setValue = this.setValueT.bind(this), this.updateValue = this.updateValueT.bind(this);
    else if ("t[]" == e) this.set = this.setValue = this.setValueArrayT.bind(this), this.updateValue = this.updateValueArrayT.bind(this);
    else {
      if ("m4" != e) throw new Error("Unknown uniform type");
      this.set = this.setValue = this.setValueM4.bind(this), this.updateValue = this.updateValueM4.bind(this)
    }
    "object" == typeof s && s instanceof U ? (this._port = s, this._value = this._port.get(), r && n && o ? (this._value = [0, 0, 0, 0], this._port2 = r, this._port3 = n, this._port4 = o, this._port.on("change", this.updateFromPort4f.bind(this)), this._port2.on("change", this.updateFromPort4f.bind(this)), this._port3.on("change", this.updateFromPort4f.bind(this)), this._port4.on("change", this.updateFromPort4f.bind(this)), this.updateFromPort4f()) : r && n ? (this._value = [0, 0, 0], this._port2 = r, this._port3 = n, this._port.on("change", this.updateFromPort3f.bind(this)), this._port2.on("change", this.updateFromPort3f.bind(this)), this._port3.on("change", this.updateFromPort3f.bind(this)), this.updateFromPort3f()) : r ? (this._value = [0, 0], this._port2 = r, this._port.on("change", this.updateFromPort2f.bind(this)), this._port2.on("change", this.updateFromPort2f.bind(this)), this.updateFromPort2f()) : this._port.on("change", this.updateFromPort.bind(this))) : this._value = s, this.setValue(this._value), this.needsUpdate = !0
  };
  et.prototype.copy = function(t) {
    const e = new et(t, this._type, this._name, this._value, this._port2, this._port3, this._port4, this._structUniformName, this._structName, this._propertyName);
    return e.shaderType = this.shaderType, e
  }, et.prototype.getGlslTypeString = function() {
    return "f" == this._type ? "float" : "i" == this._type ? "int" : "2i" == this._type ? "ivec2" : "2f" == this._type ? "vec2" : "3f" == this._type ? "vec3" : "4f" == this._type ? "vec4" : "m4" == this._type ? "mat4" : "t" == this._type ? "sampler2D" : "tc" == this._type ? "samplerCube" : void console.log("[CGL UNIFORM] unknown glsl type string ", this._type)
  }, et.prototype._isValidLoc = function() {
    return -1 != this._loc
  }, et.prototype.getType = function() {
    return this._type
  }, et.prototype.getName = function() {
    return this._name
  }, et.prototype.getValue = function() {
    return this._value
  }, et.prototype.getShaderType = function() {
    return this.shaderType
  }, et.prototype.isStructMember = function() {
    return !!this._structName
  }, et.prototype.resetLoc = function() {
    this._loc = -1, this.needsUpdate = !0
  }, et.prototype.bindTextures = function() {
    return this._value
  }, et.prototype.resetLoc = function() {
    this._loc = -1, this.needsUpdate = !0
  }, et.prototype.bindTextures = function() {}, et.prototype.getLoc = function() {
    return this._loc
  }, et.prototype.updateFromPort4f = function() {
    this._value[0] = this._port.get(), this._value[1] = this._port2.get(), this._value[2] = this._port3.get(), this._value[3] = this._port4.get(), this.setValue(this._value)
  }, et.prototype.updateFromPort3f = function() {
    this._value[0] = this._port.get(), this._value[1] = this._port2.get(), this._value[2] = this._port3.get(), this.setValue(this._value)
  }, et.prototype.updateFromPort2f = function() {
    this._value[0] = this._port.get(), this._value[1] = this._port2.get(), this.setValue(this._value)
  }, et.prototype.updateFromPort = function() {
    this.setValue(this._port.get())
  }, et.prototype.updateValueF = function() {
    this._isValidLoc() ? this.needsUpdate = !1 : this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), this._shader.getCgl().gl.uniform1f(this._loc, this._value), Q.profileUniformCount++
  }, et.prototype.setValueF = function(t) {
    t != this._value && (this.needsUpdate = !0, this._value = t)
  }, et.prototype.updateValueI = function() {
    this._isValidLoc() ? this.needsUpdate = !1 : this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), this._shader.getCgl().gl.uniform1i(this._loc, this._value), Q.profileUniformCount++
  }, et.prototype.updateValue2I = function() {
    this._value && (this._isValidLoc() || (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), Q.profileShaderGetUniform++, Q.profileShaderGetUniformName = this._name), this._shader.getCgl().gl.uniform2i(this._loc, this._value[0], this._value[1]), this.needsUpdate = !1, Q.profileUniformCount++)
  }, et.prototype.updateValue3I = function() {
    this._value && (this._isValidLoc() || (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), Q.profileShaderGetUniform++, Q.profileShaderGetUniformName = this._name), this._shader.getCgl().gl.uniform3i(this._loc, this._value[0], this._value[1], this._value[2]), this.needsUpdate = !1, Q.profileUniformCount++)
  }, et.prototype.updateValue4I = function() {
    this._isValidLoc() || (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), Q.profileShaderGetUniform++, Q.profileShaderGetUniformName = this._name), this._shader.getCgl().gl.uniform4i(this._loc, this._value[0], this._value[1], this._value[2], this._value[3]), Q.profileUniformCount++
  }, et.prototype.setValueI = function(t) {
    t != this._value && (this.needsUpdate = !0, this._value = t)
  }, et.prototype.setValue2I = function(t) {
    t && (this._oldValue ? t[0] == this._oldValue[0] && t[1] == this._oldValue[1] || (this._oldValue[0] = t[0], this._oldValue[1] = t[1], this.needsUpdate = !0) : (this._oldValue = [t[0] - 1, 1], this.needsUpdate = !0), this._value = t)
  }, et.prototype.setValue3I = function(t) {
    t && (this._oldValue ? t[0] == this._oldValue[0] && t[1] == this._oldValue[1] && t[2] == this._oldValue[2] || (this._oldValue[0] = t[0], this._oldValue[1] = t[1], this._oldValue[2] = t[2], this.needsUpdate = !0) : (this._oldValue = [t[0] - 1, 1, 2], this.needsUpdate = !0), this._value = t)
  }, et.prototype.setValue4I = function(t) {
    this.needsUpdate = !0, this._value = t || vec4.create()
  }, et.prototype.updateValueBool = function() {
    this._isValidLoc() ? this.needsUpdate = !1 : this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), this._shader.getCgl().gl.uniform1i(this._loc, this._value ? 1 : 0), Q.profileUniformCount++
  }, et.prototype.setValueBool = function(t) {
    t != this._value && (this.needsUpdate = !0, this._value = t)
  }, et.prototype.setValueArray4F = function(t) {
    this.needsUpdate = !0, this._value = t
  }, et.prototype.updateValueArray4F = function() {
    this._isValidLoc() ? this.needsUpdate = !1 : this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), this._value && (this._shader.getCgl().gl.uniform4fv(this._loc, this._value), Q.profileUniformCount++)
  }, et.prototype.setValueArray3F = function(t) {
    this.needsUpdate = !0, this._value = t
  }, et.prototype.updateValueArray3F = function() {
    this._isValidLoc() ? this.needsUpdate = !1 : this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), this._value && (this._shader.getCgl().gl.uniform3fv(this._loc, this._value), Q.profileUniformCount++)
  }, et.prototype.setValueArray2F = function(t) {
    this.needsUpdate = !0, this._value = t
  }, et.prototype.updateValueArray2F = function() {
    this._isValidLoc() ? this.needsUpdate = !1 : this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), this._value && (this._shader.getCgl().gl.uniform2fv(this._loc, this._value), Q.profileUniformCount++)
  }, et.prototype.setValueArrayF = function(t) {
    this.needsUpdate = !0, this._value = t
  }, et.prototype.updateValueArrayF = function() {
    this._isValidLoc() ? this.needsUpdate = !1 : this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), this._value && (this._shader.getCgl().gl.uniform1fv(this._loc, this._value), Q.profileUniformCount++)
  }, et.prototype.setValueArrayT = function(t) {
    this.needsUpdate = !0, this._value = t
  }, et.prototype.updateValueArrayT = function() {
    this._isValidLoc() ? this.needsUpdate = !1 : this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), this._value && (this._shader.getCgl().gl.uniform1iv(this._loc, this._value), Q.profileUniformCount++)
  }, et.prototype.updateValue3F = function() {
    this._value && (this._isValidLoc() || (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), Q.profileShaderGetUniform++, Q.profileShaderGetUniformName = this._name), this._shader.getCgl().gl.uniform3f(this._loc, this._value[0], this._value[1], this._value[2]), this.needsUpdate = !1, Q.profileUniformCount++)
  }, et.prototype.setValue3F = function(t) {
    t && (this._oldValue ? t[0] == this._oldValue[0] && t[1] == this._oldValue[1] && t[2] == this._oldValue[2] || (this._oldValue[0] = t[0], this._oldValue[1] = t[1], this._oldValue[2] = t[2], this.needsUpdate = !0) : (this._oldValue = [t[0] - 1, 1, 2], this.needsUpdate = !0), this._value = t)
  }, et.prototype.updateValue2F = function() {
    this._value && (this._isValidLoc() || (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), Q.profileShaderGetUniform++, Q.profileShaderGetUniformName = this._name), this._shader.getCgl().gl.uniform2f(this._loc, this._value[0], this._value[1]), this.needsUpdate = !1, Q.profileUniformCount++)
  }, et.prototype.setValue2F = function(t) {
    t && (this._oldValue ? t[0] == this._oldValue[0] && t[1] == this._oldValue[1] || (this._oldValue[0] = t[0], this._oldValue[1] = t[1], this.needsUpdate = !0) : (this._oldValue = [t[0] - 1, 1], this.needsUpdate = !0), this._value = t)
  }, et.prototype.updateValueT = function() {
    this._isValidLoc() || (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), Q.profileShaderGetUniform++, Q.profileShaderGetUniformName = this._name), Q.profileUniformCount++, this._shader.getCgl().gl.uniform1i(this._loc, this._value), this.needsUpdate = !1
  }, et.prototype.setValueT = function(t) {
    this.needsUpdate = !0, this._value = t
  }, et.prototype.updateValue4F = function() {
    this._isValidLoc() || (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), Q.profileShaderGetUniform++, Q.profileShaderGetUniformName = this._name), this.needsUpdate = !1, this._shader.getCgl().gl.uniform4f(this._loc, this._value[0], this._value[1], this._value[2], this._value[3]), Q.profileUniformCount++
  }, et.prototype.setValue4F = function(t) {
    this.needsUpdate = !0, this._value = t || vec4.create()
  }, et.prototype.updateValueM4 = function() {
    this._isValidLoc() || (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), Q.profileShaderGetUniform++, Q.profileShaderGetUniformName = this._name), this._shader.getCgl().gl.uniformMatrix4fv(this._loc, !1, this._value), Q.profileUniformCount++
  }, et.prototype.setValueM4 = function(t) {
    this.needsUpdate = !0, this._value = t || mat4.create()
  };
  const it = 180 / Math.PI,
    st = {
      MATH: {
        DEG2RAD: Math.PI / 180,
        RAD2DEG: it
      },
      SHADER: {
        SHADERVAR_VERTEX_POSITION: "vPosition",
        SHADERVAR_VERTEX_NUMBER: "attrVertIndex",
        SHADERVAR_VERTEX_NORMAL: "attrVertNormal",
        SHADERVAR_VERTEX_TEXCOORD: "attrTexCoord",
        SHADERVAR_INSTANCE_MMATRIX: "instMat",
        SHADERVAR_UNI_PROJMAT: "projMatrix",
        SHADERVAR_UNI_VIEWMAT: "viewMatrix",
        SHADERVAR_UNI_MODELMAT: "modelMatrix",
        SHADERVAR_UNI_NORMALMAT: "normalMatrix",
        SHADERVAR_UNI_INVVIEWMAT: "inverseViewMatrix",
        SHADERVAR_UNI_VIEWPOS: "camPos"
      },
      BLEND_MODES: {
        BLEND_NONE: 0,
        BLEND_NORMAL: 1,
        BLEND_ADD: 2,
        BLEND_SUB: 3,
        BLEND_MUL: 4
      }
    };
  const rt = {
      lastMesh: null
    },
    nt = function(t, e, i) {
      this._cgl = t, this._bufVertexAttrib = null, this._bufVerticesIndizes = this._cgl.gl.createBuffer(), this._attributes = [], this._attribLocs = {}, this._geom = null, this._lastShader = null, this._numInstances = 0, this._glPrimitive = i, this._preWireframeGeom = null, this.addVertexNumbers = !1, this.feedBackAttributes = [], this.setGeom(e), this._feedBacks = [], this._feedBacksChanged = !1, this._transformFeedBackLoc = -1, this._lastAttrUpdate = 0, Object.defineProperty(this, "numInstances", {
        get() {
          return this._numInstances
        },
        set(t) {
          this.setNumInstances(t)
        }
      })
    };
  var ot;
  nt.prototype.updateVertices = function(t) {
    this.setAttribute(st.SHADER.SHADERVAR_VERTEX_POSITION, t.vertices, 3)
  }, nt.prototype.setAttributePointer = function(t, e, i, s) {
    for (let r = 0; r < this._attributes.length; r++) this._attributes[r].name == t && (this._attributes[r].pointer || (this._attributes[r].pointer = []), this._attributes[r].pointer.push({
      loc: -1,
      name: e,
      stride: i,
      offset: s,
      instanced: t == st.SHADER.SHADERVAR_INSTANCE_MMATRIX
    }))
  }, nt.prototype.getAttribute = function(t) {
    for (let e = 0; e < this._attributes.length; e++)
      if (this._attributes[e].name == t) return this._attributes[e]
  }, nt.prototype.setAttributeRange = function(t, e, i, s) {
    t && (i || s) && (this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, t.buffer), Q.profileMeshAttributes += s - i || 0, this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER, 4 * i, e, i, s - i))
  }, nt.prototype._bufferArray = function(t, e) {
    let i = null;
    t && (this._cgl.debugOneFrame && console.log("_bufferArray", t.length, e.name), t instanceof Float32Array ? i = t : e && e.floatArray && e.floatArray.length == t.length ? (e.floatArray.set(t), i = e.floatArray) : (i = new Float32Array(t), this._cgl.debugOneFrame && console.log("_bufferArray create new float32array", t.length, e.name), Q.profileNonTypedAttrib++, Q.profileNonTypedAttribNames = this._geom.name + " " + e.name), e && i && (e.floatArray = i), this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, i, this._cgl.gl.DYNAMIC_DRAW))
  }, nt.prototype.addAttribute = nt.prototype.updateAttribute = nt.prototype.setAttribute = function(t, e, i, s) {
    let r = null,
      n = !1,
      o = 0;
    const h = e.length / i;
    for (Q.profileMeshAttributes += h || 0, 0 === h && console.warn("CGL_MESH: " + this._geom.name + " num items in attribute " + t + " is ZERO"), "function" == typeof s && (r = s), "object" == typeof s && (s.cb && (r = s.cb), s.instanced && (n = s.instanced)), t == st.SHADER.SHADERVAR_INSTANCE_MMATRIX && (n = !0), o = 0; o < this._attributes.length; o++)
      if (this._attributes[o].name == t) return this._attributes[o].numItems = h, this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, this._attributes[o].buffer), this._bufferArray(e, this._attributes[o]), this._attributes[o];
    const a = this._cgl.gl.createBuffer();
    this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, a);
    let l = this._cgl.gl.FLOAT;
    s && s.type && (l = s.type);
    const u = {
      buffer: a,
      name: t,
      cb: r,
      itemSize: i,
      numItems: h,
      startItem: 0,
      instanced: n,
      type: l
    };
    return this._bufferArray(e, u), t == st.SHADER.SHADERVAR_VERTEX_POSITION && (this._bufVertexAttrib = u), this._attributes.push(u), this._attribLocs = {}, u
  }, nt.prototype.getAttributes = function() {
    return this._attributes
  }, nt.prototype.updateTexCoords = function(t) {
    if (t.texCoords && t.texCoords.length > 0) this.setAttribute(st.SHADER.SHADERVAR_VERTEX_TEXCOORD, t.texCoords, 2);
    else {
      const e = new Float32Array(Math.round(t.vertices.length / 3 * 2));
      this.setAttribute(st.SHADER.SHADERVAR_VERTEX_TEXCOORD, e, 2)
    }
  }, nt.prototype.updateNormals = function(t) {
    if (t.vertexNormals && t.vertexNormals.length > 0) this.setAttribute("attrVertNormal", t.vertexNormals, 3);
    else {
      const e = new Float32Array(Math.round(t.vertices.length));
      this.setAttribute("attrVertNormal", e, 3)
    }
  }, nt.prototype._setVertexNumbers = function() {
    const t = this._geom.vertices.length / 3;
    if (!this._verticesNumbers || this._verticesNumbers.length != t) {
      this._verticesNumbers = new Float32Array(t);
      for (let e = 0; e < t; e++) this._verticesNumbers[e] = e;
      this.setAttribute(st.SHADER.SHADERVAR_VERTEX_NUMBER, this._verticesNumbers, 1, (e, i, s) => {
        s.uniformNumVertices || (s.uniformNumVertices = new et(s, "f", "numVertices", t)), s.uniformNumVertices.setValue(t)
      })
    }
  }, nt.prototype.setVertexIndices = function(t) {
    if (this._bufVerticesIndizes)
      if (t.length > 0) {
        for (let e = 0; e < t.length; e++)
          if (t[e] >= this._geom.vertices.length / 3) return void console.warn("invalid index in " + this._geom.name);
        this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes), t instanceof Uint16Array ? this.vertIndicesTyped = t : this.vertIndicesTyped = new Uint16Array(t), this._cgl.gl.bufferData(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this.vertIndicesTyped, this._cgl.gl.DYNAMIC_DRAW), this._bufVerticesIndizes.itemSize = 1, this._bufVerticesIndizes.numItems = t.length
      } else this._bufVerticesIndizes.numItems = 0;
    else d.warn("no bufVerticesIndizes")
  }, nt.prototype.setGeom = function(t) {
    this._geom = t, null != t.glPrimitive && (this._glPrimitive = t.glPrimitive), rt.lastMesh = null, Q.profileMeshSetGeom++, this._disposeAttributes(), this.updateVertices(this._geom), this.setVertexIndices(this._geom.verticesIndices), this.updateTexCoords(this._geom), this.updateNormals(this._geom), this._geom.hasOwnProperty("tangents") && this._geom.tangents && this._geom.tangents.length > 0 && this.setAttribute("attrTangent", this._geom.tangents, 3), this._geom.hasOwnProperty("biTangents") && this._geom.biTangents && this._geom.biTangents.length > 0 && this.setAttribute("attrBiTangent", this._geom.biTangents, 3), this._geom.vertexColors.length > 0 && (this._geom.vertexColors.flat && this._geom.vertexColors.flat(100), this.setAttribute("attrVertColor", this._geom.vertexColors, 4)), this.addVertexNumbers && this._setVertexNumbers();
    const e = this._geom.getAttributes();
    for (const t in e) this.setAttribute(t, e[t].data, e[t].itemSize)
  }, nt.prototype._preBind = function(t) {
    for (let e = 0; e < this._attributes.length; e++) this._attributes[e].cb && this._attributes[e].cb(this._attributes[e], this._geom, t)
  }, nt.prototype._checkAttrLengths = function() {
    for (let t = 0; t < this._attributes.length; t++) this._attributes[0].floatArray.length, this._attributes[0].itemSize, this._attributes[t].floatArray.length, this._attributes[t].itemSize
  }, nt.prototype._bind = function(t) {
    if (!t.isValid()) return;
    t != this._lastShader && this.unBind();
    let e = [];
    this._attribLocs[t.id] ? e = this._attribLocs[t.id] : this._attribLocs[t.id] = e, this._lastShader = t;
    let i = 0;
    if (t.lastCompile > this._lastAttrUpdate || e.length != this._attributes.length) {
      for (this._lastAttrUpdate = t.lastCompile, i = 0; i < this._attributes.length; i++) e[i] = -1;
      this._checkAttrLengths()
    }
    for (i = 0; i < this._attributes.length; i++) {
      const s = this._attributes[i];
      if (-1 == e[i] && s._attrLocationLastShaderTime != t.lastCompile && (s._attrLocationLastShaderTime = t.lastCompile, e[i] = this._cgl.glGetAttribLocation(t.getProgram(), s.name), Q.profileAttrLoc++), -1 != e[i])
        if (this._cgl.gl.enableVertexAttribArray(e[i]), this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, s.buffer), s.instanced)
          if (s.itemSize <= 4) s.itemSize && 0 != s.itemSize || d.log("instanced attrib itemsize error", this._geom.name, s), this._cgl.gl.vertexAttribPointer(e[i], s.itemSize, s.type, !1, 4 * s.itemSize, 0), this._cgl.gl.vertexAttribDivisor(e[i], 1);
          else if (16 == s.itemSize) {
        const t = 64;
        this._cgl.gl.vertexAttribPointer(e[i], 4, s.type, !1, t, 0), this._cgl.gl.enableVertexAttribArray(e[i] + 1), this._cgl.gl.vertexAttribPointer(e[i] + 1, 4, s.type, !1, t, 16), this._cgl.gl.enableVertexAttribArray(e[i] + 2), this._cgl.gl.vertexAttribPointer(e[i] + 2, 4, s.type, !1, t, 32), this._cgl.gl.enableVertexAttribArray(e[i] + 3), this._cgl.gl.vertexAttribPointer(e[i] + 3, 4, s.type, !1, t, 48), this._cgl.gl.vertexAttribDivisor(e[i], 1), this._cgl.gl.vertexAttribDivisor(e[i] + 1, 1), this._cgl.gl.vertexAttribDivisor(e[i] + 2, 1), this._cgl.gl.vertexAttribDivisor(e[i] + 3, 1)
      } else d.log("unknown instance attrib size", s.name);
      else {
        if (s.itemSize && 0 != s.itemSize || d.log("attrib itemsize error", this._geom.name, s), this._cgl.gl.vertexAttribPointer(e[i], s.itemSize, s.type, !1, 4 * s.itemSize, 0), s.pointer)
          for (let e = 0; e < s.pointer.length; e++) {
            const i = s.pointer[e]; - 1 == i.loc && (i.loc = this._cgl.glGetAttribLocation(t.getProgram(), i.name)), Q.profileAttrLoc++, this._cgl.gl.enableVertexAttribArray(i.loc), this._cgl.gl.vertexAttribPointer(i.loc, s.itemSize, s.type, !1, i.stride, i.offset)
          }
        this.bindFeedback(s)
      }
    }
    0 !== this._bufVerticesIndizes.numItems && this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes)
  }, nt.prototype.unBind = function() {
    const t = this._lastShader;
    if (this._lastShader = null, !t) return;
    let e = [];
    this._attribLocs[t.id] ? e = this._attribLocs[t.id] : this._attribLocs[t.id] = e, rt.lastMesh = null;
    for (let t = 0; t < this._attributes.length; t++) this._attributes[t].instanced && (this._attributes[t].itemSize <= 4 ? (-1 != e[t] && this._cgl.gl.vertexAttribDivisor(e[t], 0), e[t] >= 0 && this._cgl.gl.disableVertexAttribArray(e[t])) : (this._cgl.gl.vertexAttribDivisor(e[t], 0), this._cgl.gl.vertexAttribDivisor(e[t] + 1, 0), this._cgl.gl.vertexAttribDivisor(e[t] + 2, 0), this._cgl.gl.vertexAttribDivisor(e[t] + 3, 0), this._cgl.gl.disableVertexAttribArray(e[t] + 1), this._cgl.gl.disableVertexAttribArray(e[t] + 2), this._cgl.gl.disableVertexAttribArray(e[t] + 3))), -1 != e[t] && this._cgl.gl.disableVertexAttribArray(e[t])
  }, nt.prototype.meshChanged = function() {
    return this._cgl.lastMesh && this._cgl.lastMesh != this
  }, nt.prototype.printDebug = function(t) {
    d.log("--attributes");
    for (let t = 0; t < this._attributes.length; t++) d.log("attribute " + t + " " + this._attributes[t].name)
  }, nt.prototype.setNumVertices = function(t) {
    this._bufVertexAttrib.numItems = t
  }, nt.prototype.render = function(t) {
    if (!t || !t.isValid()) return;
    t.wireframe || this._geom.isIndexed() || !this._preWireframeGeom || this.setGeom(this._preWireframeGeom), t.wireframe && this._geom.isIndexed() && (this._preWireframeGeom = this._geom, this._geom = this._geom.copy(), this._geom.unIndex(), this._geom.calcBarycentric(), this.setGeom(this._geom), this.setAttribute("attrBarycentric", this._geom.barycentrics, 3));
    let e = !1;
    rt.lastMesh != this && (rt.lastMesh && rt.lastMesh.unBind(), e = !0), e && this._preBind(t), t.bind(), t.bindTextures && t.bindTextures(), this._bind(t), this.addVertexNumbers && this._setVertexNumbers(), rt.lastMesh = this;
    let i = this._cgl.gl.TRIANGLES;
    void 0 !== this._glPrimitive && (i = this._glPrimitive), null !== t.glPrimitive && (i = t.glPrimitive);
    let s = 1;
    this.hasFeedbacks() ? this.drawFeedbacks(t, i) : 0 === this._bufVerticesIndizes.numItems ? (i == this._cgl.gl.TRIANGLES && (s = 3), 0 === this._numInstances ? this._cgl.gl.drawArrays(i, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems - this._bufVertexAttrib.startItem) : this._cgl.gl.drawArraysInstanced(i, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems, this._numInstances)) : 0 === this._numInstances ? this._cgl.gl.drawElements(i, this._bufVerticesIndizes.numItems, this._cgl.gl.UNSIGNED_SHORT, 0) : this._cgl.gl.drawElementsInstanced(i, this._bufVerticesIndizes.numItems, this._cgl.gl.UNSIGNED_SHORT, 0, this._numInstances), Q.profileMeshNumElements += this._bufVertexAttrib.numItems / s * (this._numInstances || 1), Q.profileMeshDraw++
  }, nt.prototype.setNumInstances = function(t) {
    if (t = Math.max(0, t), this._numInstances != t) {
      this._numInstances = t;
      const e = new Float32Array(t);
      for (let i = 0; i < t; i++) e[i] = i;
      this.setAttribute("instanceIndex", e, 1, {
        instanced: !0
      })
    }
  }, nt.prototype._disposeAttributes = function() {
    if (this._attributes) {
      for (let t = 0; t < this._attributes.length; t++) this._attributes[t].buffer && (this._cgl.gl.deleteBuffer(this._attributes[t].buffer), this._attributes[t].buffer = null);
      this._attributes.length = 0
    }
  }, nt.prototype.dispose = function() {
    this._bufVertexAttrib && this._bufVertexAttrib.buffer && this._cgl.gl.deleteBuffer(this._bufVertexAttrib.buffer), this._bufVerticesIndizes && this._cgl.gl.deleteBuffer(this._bufVerticesIndizes), this._disposeAttributes()
  }, (ot = nt).prototype.hasFeedbacks = function() {
    return this._feedBacks.length > 0
  }, ot.prototype.removeFeedbacks = function(t) {
    this._feedbacks && (this._feedbacks.length = 0, this._feedBacksChanged = !0)
  }, ot.prototype.setAttributeFeedback = function() {}, ot.prototype.setFeedback = function(t, e, i) {
    let s = {
        nameOut: e
      },
      r = !1;
    this.unBindFeedbacks();
    for (let t = 0; t < this._feedBacks.length; t++) this._feedBacks[t].nameOut == e && (s = this._feedBacks[t], r = !0);
    return r || (this._feedBacksChanged = !0), s.initialArr = i, s.attrib = t, s.outBuffer && this._cgl.gl.deleteBuffer(s.outBuffer), s.outBuffer = this._cgl.gl.createBuffer(), this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, s.outBuffer), this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, s.initialArr, this._cgl.gl.STATIC_DRAW), this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, s.attrib.buffer), this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, s.initialArr, this._cgl.gl.STATIC_DRAW), r || this._feedBacks.push(s), s
  }, ot.prototype.bindFeedback = function(t) {
    if (!this._feedBacks || 0 === this._feedBacks.length) return; - 1 == this._transformFeedBackLoc && (this._transformFeedBackLoc = this._cgl.gl.createTransformFeedback()), this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, this._transformFeedBackLoc);
    let e = !1;
    for (let i = 0; i < this._feedBacks.length; i++) {
      const s = this._feedBacks[i];
      s.attrib == t && (e = !0, this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, i, s.outBuffer))
    }
  }, ot.prototype.drawFeedbacks = function(t, e) {
    let i = 0;
    if (this._feedBacksChanged) {
      const e = [];
      for (this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, this._transformFeedBackLoc), i = 0; i < this._feedBacks.length; i++) e.push(this._feedBacks[i].nameOut);
      return t.setFeedbackNames(e), d.log("feedbacknames", e), t.compile(), this._feedBacksChanged = !1, this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, null), void d.log("changed finished")
    }
    this._cgl.gl.beginTransformFeedback(this.glPrimitive), this._cgl.gl.drawArrays(e, 0, this._feedBacks[0].attrib.numItems), this._cgl.gl.endTransformFeedback(), this.unBindFeedbacks(), this.feedBacksSwapBuffers()
  }, ot.prototype.unBindFeedbacks = function() {
    for (let t = 0; t < this._feedBacks.length; t++) this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, t, null);
    this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, null)
  }, ot.prototype.feedBacksSwapBuffers = function() {
    for (let t = 0; t < this._feedBacks.length; t++) {
      const e = this._feedBacks[t].attrib.buffer;
      this._feedBacks[t].attrib.buffer = this._feedBacks[t].outBuffer, this._feedBacks[t].outBuffer = e
    }
  };
  const ht = {
      getSimpleRect: function(t, e) {
        const i = new tt(e);
        return i.vertices = [1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0], i.texCoords = [1, 1, 0, 1, 1, 0, 0, 0], i.verticesIndices = [0, 1, 2, 2, 1, 3], i.vertexNormals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], new nt(t, i)
      }
    },
    at = function(t, e) {
      this._cgl = t, t.TextureEffectMesh || this.createMesh(), this._textureSource = null, this._options = e, this._textureTarget = null, this._frameBuf = this._cgl.gl.createFramebuffer(), this._frameBuf2 = this._cgl.gl.createFramebuffer(), this._renderbuffer = this._cgl.gl.createRenderbuffer(), this._renderbuffer2 = this._cgl.gl.createRenderbuffer(), this.switched = !1, this.depth = !1
    };
  at.prototype.setSourceTexture = function(t) {
    t.textureType == J.TYPE_FLOAT && this._cgl.gl.getExtension("EXT_color_buffer_float"), null === t ? (this._textureSource = new J(this._cgl), this._textureSource.setSize(16, 16)) : this._textureSource = t, this._textureSource.compareSettings(this._textureTarget) || (this._textureTarget && this._textureTarget.delete(), this._textureTarget = this._textureSource.clone(), Q.profileEffectBuffercreate++, this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer), this.depth && this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height), this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureTarget.tex, 0), this.depth && this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer), this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer2), this.depth && this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height), this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureSource.tex, 0), this.depth && this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer2), this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null))
  }, at.prototype.startEffect = function() {
    this._textureTarget ? (this.switched = !1, this._cgl.pushDepthTest(!1), this._cgl.pushModelMatrix(), this._cgl.pushPMatrix(), this._cgl.gl.viewport(0, 0, this.getCurrentTargetTexture().width, this.getCurrentTargetTexture().height), mat4.perspective(this._cgl.pMatrix, 45, this.getCurrentTargetTexture().width / this.getCurrentTargetTexture().height, .1, 1100), this._cgl.pushPMatrix(), mat4.identity(this._cgl.pMatrix), this._cgl.pushViewMatrix(), mat4.identity(this._cgl.vMatrix), this._cgl.pushModelMatrix(), mat4.identity(this._cgl.mvMatrix)) : d.log("effect has no target")
  }, at.prototype.endEffect = function() {
    this._cgl.popDepthTest(!1), this._cgl.popModelMatrix(), this._cgl.popPMatrix(), this._cgl.popModelMatrix(), this._cgl.popViewMatrix(), this._cgl.popPMatrix(), this._cgl.resetViewPort()
  }, at.prototype.bind = function() {
    null !== this._textureSource ? this.switched ? (this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2), this._cgl.pushGlFrameBuffer(this._frameBuf2)) : (this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf), this._cgl.pushGlFrameBuffer(this._frameBuf)) : d.log("no base texture set!")
  }, at.prototype.finish = function() {
    null !== this._textureSource ? (this._cgl.TextureEffectMesh.render(this._cgl.getShader()), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer()), Q.profileTextureEffect++, this._textureTarget.filter == J.FILTER_MIPMAP && (this.switched ? (this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureSource.tex), this._textureSource.updateMipMap()) : (this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureTarget.tex), this._textureTarget.updateMipMap()), this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null)), this.switched = !this.switched) : d.log("no base texture set!")
  }, at.prototype.getCurrentTargetTexture = function() {
    return this.switched ? this._textureSource : this._textureTarget
  }, at.prototype.getCurrentSourceTexture = function() {
    return this.switched ? this._textureTarget : this._textureSource
  }, at.prototype.delete = function() {
    this._textureTarget && this._textureTarget.delete(), this._textureSource && this._textureSource.delete(), this._cgl.gl.deleteRenderbuffer(this._renderbuffer), this._cgl.gl.deleteFramebuffer(this._frameBuf)
  }, at.prototype.createMesh = function() {
    this._cgl.TextureEffectMesh = ht.getSimpleRect(this._cgl, "textureEffect rect")
  }, at.checkOpNotInTextureEffect = function(t) {
    return t.uiAttribs.error && !t.patch.cgl.currentTextureEffect ? (t.uiAttr({
      error: null
    }), !0) : !t.patch.cgl.currentTextureEffect || (t.patch.cgl.currentTextureEffect && !t.uiAttribs.error ? (t.setUiError("textureeffect", "This op can not be a child of a ImageCompose/texture effect! imagecompose should only have textureeffect childs.", 0), !1) : !t.patch.cgl.currentTextureEffect)
  }, at.checkOpInEffect = function(t) {
    return t.patch.cgl.currentTextureEffect && t.uiAttribs.error ? (t.uiAttr({
      error: null
    }), !0) : !!t.patch.cgl.currentTextureEffect || (t.patch.cgl.currentTextureEffect || t.uiAttribs.error ? !!t.patch.cgl.currentTextureEffect : (t.setUiError("texeffect", 'This op must be a child of an ImageCompose op! More infos <a href="https://docs.cables.gl/image_composition/image_composition.html" target="_blank">here</a>.', 1), !1))
  }, at.getBlendCode = function() {
    return "".endl() + "vec3 _blend(vec3 base,vec3 blend)".endl() + "{".endl() + "   vec3 colNew=blend;".endl() + "   #ifdef BM_MULTIPLY".endl() + "       colNew=base*blend;".endl() + "   #endif".endl() + "   #ifdef BM_MULTIPLY_INV".endl() + "       colNew=base* vec3(1.0)-blend;".endl() + "   #endif".endl() + "   #ifdef BM_AVERAGE".endl() + "       colNew=((base + blend) / 2.0);".endl() + "   #endif".endl() + "   #ifdef BM_ADD".endl() + "       colNew=min(base + blend, vec3(1.0));".endl() + "   #endif".endl() + "   #ifdef BM_SUBSTRACT".endl() + "       colNew=max(base + blend - vec3(1.0), vec3(0.0));".endl() + "   #endif".endl() + "   #ifdef BM_DIFFERENCE".endl() + "       colNew=abs(base - blend);".endl() + "   #endif".endl() + "   #ifdef BM_NEGATION".endl() + "       colNew=(vec3(1.0) - abs(vec3(1.0) - base - blend));".endl() + "   #endif".endl() + "   #ifdef BM_EXCLUSION".endl() + "       colNew=(base + blend - 2.0 * base * blend);".endl() + "   #endif".endl() + "   #ifdef BM_LIGHTEN".endl() + "       colNew=max(blend, base);".endl() + "   #endif".endl() + "   #ifdef BM_DARKEN".endl() + "       colNew=min(blend, base);".endl() + "   #endif".endl() + "   #ifdef BM_OVERLAY".endl() + "      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))".endl() + "      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));".endl() + "   #endif".endl() + "   #ifdef BM_SCREEN".endl() + "      #define BlendScreenf(base, blend)       (1.0 - ((1.0 - base) * (1.0 - blend)))".endl() + "      colNew=vec3(BlendScreenf(base.r, blend.r),BlendScreenf(base.g, blend.g),BlendScreenf(base.b, blend.b));".endl() + "   #endif".endl() + "   #ifdef BM_SOFTLIGHT".endl() + "      #define BlendSoftLightf(base, blend)    ((blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend)))".endl() + "      colNew=vec3(BlendSoftLightf(base.r, blend.r),BlendSoftLightf(base.g, blend.g),BlendSoftLightf(base.b, blend.b));".endl() + "   #endif".endl() + "   #ifdef BM_HARDLIGHT".endl() + "      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))".endl() + "      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));".endl() + "   #endif".endl() + "   #ifdef BM_COLORDODGE".endl() + "      #define BlendColorDodgef(base, blend)   ((blend == 1.0) ? blend : min(base / (1.0 - blend), 1.0))".endl() + "      colNew=vec3(BlendColorDodgef(base.r, blend.r),BlendColorDodgef(base.g, blend.g),BlendColorDodgef(base.b, blend.b));".endl() + "   #endif".endl() + "   #ifdef BM_COLORBURN".endl() + "      #define BlendColorBurnf(base, blend)    ((blend == 0.0) ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0))".endl() + "      colNew=vec3(BlendColorBurnf(base.r, blend.r),BlendColorBurnf(base.g, blend.g),BlendColorBurnf(base.b, blend.b));".endl() + "   #endif".endl() + "   return colNew;".endl() + "}".endl() + "vec4 cgl_blend(vec4 oldColor,vec4 newColor,float amount)".endl() + "{".endl() + "   vec4 col=vec4( _blend(oldColor.rgb,newColor.rgb) ,1.0);".endl() + "   col=vec4( mix( col.rgb, oldColor.rgb ,1.0-oldColor.a*amount),1.0);".endl() + "   return col;".endl() + "}"
  }, at.onChangeBlendSelect = function(t, e) {
    "normal" == e ? t.define("BM_NORMAL") : t.removeDefine("BM_NORMAL"), "multiply" == e ? t.define("BM_MULTIPLY") : t.removeDefine("BM_MULTIPLY"), "multiply invert" == e ? t.define("BM_MULTIPLY_INV") : t.removeDefine("BM_MULTIPLY_INV"), "average" == e ? t.define("BM_AVERAGE") : t.removeDefine("BM_AVERAGE"), "add" == e ? t.define("BM_ADD") : t.removeDefine("BM_ADD"), "substract" == e ? t.define("BM_SUBSTRACT") : t.removeDefine("BM_SUBSTRACT"), "difference" == e ? t.define("BM_DIFFERENCE") : t.removeDefine("BM_DIFFERENCE"), "negation" == e ? t.define("BM_NEGATION") : t.removeDefine("BM_NEGATION"), "exclusion" == e ? t.define("BM_EXCLUSION") : t.removeDefine("BM_EXCLUSION"), "lighten" == e ? t.define("BM_LIGHTEN") : t.removeDefine("BM_LIGHTEN"), "darken" == e ? t.define("BM_DARKEN") : t.removeDefine("BM_DARKEN"), "overlay" == e ? t.define("BM_OVERLAY") : t.removeDefine("BM_OVERLAY"), "screen" == e ? t.define("BM_SCREEN") : t.removeDefine("BM_SCREEN"), "softlight" == e ? t.define("BM_SOFTLIGHT") : t.removeDefine("BM_SOFTLIGHT"), "hardlight" == e ? t.define("BM_HARDLIGHT") : t.removeDefine("BM_HARDLIGHT"), "color dodge" == e ? t.define("BM_COLORDODGE") : t.removeDefine("BM_COLORDODGE"), "color burn" == e ? t.define("BM_COLORBURN") : t.removeDefine("BM_COLORBURN")
  }, at.AddBlendSelect = function(t, e) {
    return t.inValueSelect(e, ["normal", "lighten", "darken", "multiply", "multiply invert", "average", "add", "substract", "difference", "negation", "exclusion", "overlay", "screen", "color dodge", "color burn", "softlight", "hardlight"], "normal")
  }, at.setupBlending = function(t, e, i, s) {
    t.setPortGroup("Blending", [i, s]), i.onChange = function() {
      at.onChangeBlendSelect(e, i.get());
      let s = i.get();
      "normal" == s ? s = null : "multiply" == s ? s = "mul" : "multiply invert" == s ? s = "mulinv" : "lighten" == s ? s = "light" : "darken" == s ? s = "darken" : "average" == s ? s = "avg" : "substract" == s ? s = "sub" : "difference" == s ? s = "diff" : "negation" == s || "negation" == s || "negation" == s ? s = "neg" : "exclusion" == s ? s = "exc" : "overlay" == s ? s = "ovl" : "color dodge" == s ? s = "dodge" : "color burn" == s ? s = "burn" : "softlight" == s ? s = "soft" : "hardlight" == s && (s = "hard"), t.setUiAttrib({
        extendTitle: s
      })
    }
  };
  const lt = {
      "CGL.BLENDMODES": function() {
        this.name = "blendmodes", this.srcHeadFrag = at.getBlendCode()
      },
      "CGL.RANDOM_OLD": function() {
        this.name = "randomNumber", this.srcHeadFrag = "".endl() + "float cgl_random(vec2 co)".endl() + "{".endl() + "    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 432758.5453);".endl() + "}".endl() + "vec3 cgl_random3(vec2 co)".endl() + "{".endl() + "    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));".endl() + "}"
      },
      "CGL.RANDOM_LOW": function() {
        this.name = "randomNumber", this.srcHeadFrag = "".endl() + "float cgl_random(vec2 co)".endl() + "{".endl() + "    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 358.5453);".endl() + "}".endl() + "vec3 cgl_random3(vec2 co)".endl() + "{".endl() + "    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));".endl() + "}"
      },
      "CGL.RANDOM_TEX": function() {
        this.name = "randomNumbertex", this.srcHeadFrag = "".endl() + "UNI sampler2D CGLRNDTEX;".endl() + "float cgl_random(vec2 co)".endl() + "{".endl() + "    return texture(CGLRNDTEX,co*5711.0).r;".endl() + "}".endl() + "vec3 cgl_random3(vec2 co)".endl() + "{".endl() + "    return texture(CGLRNDTEX,co*5711.0).rgb;".endl() + "}", this.initUniforms = function(t) {
          return [new et(t, "t", "CGLRNDTEX", 7)]
        }, this.onBind = function(t, e) {
          J.getRandomTexture(t), t.setTexture(7, J.getRandomTexture(t).tex)
        }
      }
    },
    ut = function() {
      return window.performance.now()
    },
    ct = function() {
      return ut()
    },
    pt = function() {
      this._timeStart = ut(), this._timeOffset = 0, this._currentTime = 0, this._lastTime = 0, this._paused = !0, this._delay = 0, this._eventsPaused = !1, this.overwriteTime = -1, this.cbPlayPause = [], this.cbTimeChange = []
    };
  pt.prototype._getTime = function() {
    return this._lastTime = (ut() - this._timeStart) / 1e3, this._lastTime + this._timeOffset
  }, pt.prototype._eventPlayPause = function() {
    if (!this._eventsPaused)
      for (const t in this.cbPlayPause) this.cbPlayPause[t]()
  }, pt.prototype._eventTimeChange = function() {
    if (!this._eventsPaused)
      for (const t in this.cbTimeChange) this.cbTimeChange[t]()
  }, pt.prototype.setDelay = function(t) {
    this._delay = t, this._eventTimeChange()
  }, pt.prototype.isPlaying = function() {
    return !this._paused
  }, pt.prototype.update = function() {
    if (!this._paused) return this._currentTime = this._getTime(), this._currentTime
  }, pt.prototype.getMillis = function() {
    return 1e3 * this.get()
  }, pt.prototype.get = pt.prototype.getTime = function() {
    return this.overwriteTime >= 0 ? this.overwriteTime - this._delay : this._currentTime - this._delay
  }, pt.prototype.togglePlay = function() {
    this._paused ? this.play() : this.pause()
  }, pt.prototype.setTime = function(t) {
    t < 0 && (t = 0), this._timeStart = ut(), this._timeOffset = t, this._currentTime = t, this._eventTimeChange()
  }, pt.prototype.setOffset = function(t) {
    this._currentTime + t < 0 ? (this._timeStart = ut(), this._timeOffset = 0, this._currentTime = 0) : (this._timeOffset += t, this._currentTime = this._lastTime + this._timeOffset), this._eventTimeChange()
  }, pt.prototype.play = function() {
    this._timeStart = ut(), this._paused = !1, this._eventPlayPause()
  }, pt.prototype.pause = function() {
    this._timeOffset = this._currentTime, this._paused = !0, this._eventPlayPause()
  }, pt.prototype.pauseEvents = function(t) {
    this._eventsPaused = t
  }, pt.prototype.onPlayPause = function(t) {
    t && "function" == typeof t && this.cbPlayPause.push(t)
  }, pt.prototype.onTimeChange = function(t) {
    t && "function" == typeof t && this.cbTimeChange.push(t)
  };
  const dt = Math.PI / 180,
    _t = (Math.PI, -1 != window.navigator.userAgent.indexOf("Windows")),
    ft = function(t) {
      let e;
      if (t.wheelDelta) e = t.wheelDelta % 120 - 0 == -0 ? t.wheelDelta / 120 : t.wheelDelta / 30, e *= -1.5, _t && (e *= 2);
      else {
        let i = t.deltaY;
        t.shiftKey && (i = t.deltaX);
        const s = i || t.detail;
        e = -(s % 3 ? 10 * s : s / 3), e *= -3
      }
      return e > 20 && (e = 20), e < -20 && (e = -20), e
    },
    gt = ft,
    mt = ft,
    Et = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    },
    Tt = /[&<>"']/g,
    At = RegExp(Tt.source),
    bt = function(t, e) {
      if (!t) throw new Error("shader constructed without cgl " + e);
      this._cgl = t, this._name = e || "unknown", this.glslVersion = 0, t.glVersion > 1 && (this.glslVersion = 300), this.id = x(), this._isValid = !0, this._program = null, this._uniforms = [], this._drawBuffers = [!0], this._defines = [], this._needsRecompile = !0, this._projMatrixUniform = null, this._mvMatrixUniform = null, this._mMatrixUniform = null, this._vMatrixUniform = null, this._camPosUniform = null, this._normalMatrixUniform = null, this._inverseViewMatrixUniform = null, this._attrVertexPos = -1, this.precision = t.patch.config.glslPrecision || "highp", this._pMatrixState = -1, this._vMatrixState = -1, this._modGroupCount = 0, this._feedBackNames = [], this._attributes = [], this.glPrimitive = null, this.offScreenPass = !1, this._extensions = [], this.srcVert = this.getDefaultVertexShader(), this.srcFrag = this.getDefaultFragmentShader(), this.lastCompile = 0, this._moduleNames = [], this._modules = [], this._moduleNumId = 0, this._libs = [], this._structNames = [], this._structUniformNames = [], this._textureStackUni = [], this._textureStackTex = [], this._textureStackType = [], this._textureStackTexCgl = [], this._tempNormalMatrix = mat4.create(), this._tempCamPosMatrix = mat4.create(), this._tempInverseViewMatrix = mat4.create(), this.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"])
    };
  bt.prototype.isValid = function() {
    return this._isValid
  }, bt.prototype.getCgl = function() {
    return this._cgl
  }, bt.prototype.getName = function() {
    return this._name
  }, bt.prototype.enableExtension = function(t) {
    this.setWhyCompile("enable extension " + t), this._needsRecompile = !0, this._extensions.push(t)
  }, bt.prototype.getAttrVertexPos = function() {
    return this._attrVertexPos
  }, bt.prototype.hasTextureUniforms = function() {
    for (let t = 0; t < this._uniforms.length; t++)
      if ("t" == this._uniforms[t].getType()) return !0;
    return !1
  }, bt.prototype.setWhyCompile = function(t) {}, bt.prototype.copyUniformValues = function(t) {
    for (let e = 0; e < t._uniforms.length; e++) this._uniforms[e] && this._uniforms[e].set(t._uniforms[e].getValue());
    this.popTextures();
    for (let e = 0; e < t._textureStackUni.length; e++) this._textureStackUni[e] = t._textureStackUni[e], this._textureStackTex[e] = t._textureStackTex[e], this._textureStackType[e] = t._textureStackType[e], this._textureStackTexCgl[e] = t._textureStackTexCgl[e]
  }, bt.prototype.copy = function() {
    const t = new bt(this._cgl, this._name + " copy");
    t.setSource(this.srcVert, this.srcFrag), t._modules = JSON.parse(JSON.stringify(this._modules)), t._defines = JSON.parse(JSON.stringify(this._defines)), t._modGroupCount = this._modGroupCount, t._moduleNames = this._moduleNames, t.glPrimitive = this.glPrimitive, t.offScreenPass = this.offScreenPass, t._extensions = this._extensions;
    for (let e = 0; e < this._uniforms.length; e++) {
      this._uniforms[e].copy(t).resetLoc()
    }
    return t._needsRecompile = !0, t
  }, bt.prototype.setSource = function(t, e) {
    this.srcVert = t, this.srcFrag = e, this.setWhyCompile("Source changed"), this._needsRecompile = !0
  }, bt.prototype._addLibs = function(t) {
    for (const e in lt)
      if (t.indexOf(e) > -1) {
        const i = new lt[e];
        t = t.replace("{{" + e + "}}", i.srcHeadFrag), this._libs.push(i), i.initUniforms && i.initUniforms(this)
      } return t
  }, bt.prototype.createStructUniforms = function() {
    let t = "",
      e = "";
    this._structNames = [], this._injectedStringsFrag = {}, this._injectedStringsVert = {}, this._structUniformNamesIndicesFrag = [], this._structUniformNamesIndicesVert = [];
    for (let i = 0; i < this._uniforms.length; i++)
      if (this._uniforms[i].isStructMember()) {
        const s = "{{INJECTION_POINT_STRUCT_" + this._uniforms[i]._structName + "}}";
        if (-1 === this._structNames.indexOf(this._uniforms[i]._structName)) {
          const r = "struct " + this._uniforms[i]._structName + " {".endl() + s + "};".endl().endl();
          "both" !== this._uniforms[i].getShaderType() && "frag" !== this._uniforms[i].getShaderType() || (t = t.concat(r)), "both" !== this._uniforms[i].getShaderType() && "vert" !== this._uniforms[i].getShaderType() || (e = e.concat(r)), this._structNames.push(this._uniforms[i]._structName), this._injectedStringsFrag[this._uniforms[i]._structName] = [], this._injectedStringsVert[this._uniforms[i]._structName] = []
        }
        let r = "";
        this._uniforms[i].comment && (r = " // " + this._uniforms[i].comment);
        let n = "";
        if (null == this._uniforms[i].getGlslTypeString() && (n += "//"), n += "  " + this._uniforms[i].getGlslTypeString() + " " + this._uniforms[i]._propertyName + ";" + r, "both" === this._uniforms[i].getShaderType()) {
          if (-1 === this._injectedStringsFrag[this._uniforms[i]._structName].indexOf(n) && -1 === this._injectedStringsVert[this._uniforms[i]._structName].indexOf(n)) {
            const r = t.lastIndexOf(s),
              o = e.lastIndexOf(s);
            t = t.slice(0, r) + n + t.slice(r - 1), e = e.slice(0, o) + n + e.slice(o - 1), this._injectedStringsFrag[this._uniforms[i]._structName].push(n), this._injectedStringsVert[this._uniforms[i]._structName].push(n)
          } - 1 === this._structUniformNamesIndicesFrag.indexOf(i) && this._structUniformNamesIndicesFrag.push(i), -1 === this._structUniformNamesIndicesVert.indexOf(i) && this._structUniformNamesIndicesVert.push(i)
        } else if ("frag" === this._uniforms[i].getShaderType()) {
          if (-1 === this._injectedStringsFrag[this._uniforms[i]._structName].indexOf(n)) {
            const e = t.lastIndexOf(s);
            t = t.slice(0, e) + n + t.slice(e - 1), this._injectedStringsFrag[this._uniforms[i]._structName].push(n)
          } - 1 === this._structUniformNamesIndicesFrag.indexOf(i) && this._structUniformNamesIndicesFrag.push(i)
        } else if ("vert" === this._uniforms[i].getShaderType()) {
          if (-1 === this._injectedStringsVert[this._uniforms[i]._structName].indexOf(n)) {
            const t = e.lastIndexOf(s);
            e = e.slice(0, t) + n + e.slice(t - 1), this._injectedStringsVert[this._uniforms[i]._structName].push(n)
          } - 1 === this._structUniformNamesIndicesVert.indexOf(i) && this._structUniformNamesIndicesVert.push(i)
        }
      } this._uniDeclarationsFrag = [], this._uniDeclarationsVert = [];
    for (let e = 0; e < this._structUniformNamesIndicesFrag.length; e += 1) {
      const i = this._structUniformNamesIndicesFrag[e],
        s = "UNI " + this._uniforms[i]._structName + " " + this._uniforms[i]._structUniformName + ";".endl();
      if (-1 === this._uniDeclarationsFrag.indexOf(s)) {
        const e = "{{INJECTION_POINT_STRUCT_" + this._uniforms[i]._structName + "}}";
        t = t.replace(e, ""), t += s, this._uniDeclarationsFrag.push(s)
      }
    }
    for (let t = 0; t < this._structUniformNamesIndicesVert.length; t += 1) {
      const i = this._structUniformNamesIndicesVert[t],
        s = "UNI " + this._uniforms[i]._structName + " " + this._uniforms[i]._structUniformName + ";".endl();
      if (-1 === this._uniDeclarationsVert.indexOf(s)) {
        const t = "{{INJECTION_POINT_STRUCT_" + this._uniforms[i]._structName + "}}";
        e = e.replace(t, ""), e += s, this._uniDeclarationsVert.push(s)
      }
    }
    return [e, t]
  }, bt.prototype.compile = function() {
    const t = performance.now();
    Q.profileShaderCompiles++, Q.profileShaderCompileName = this._name;
    let e = "";
    if (this._extensions)
      for (let t = 0; t < this._extensions.length; t++) e += "#extension " + this._extensions[t] + " : enable".endl();
    let i = "";
    this._defines.length && (i = "\n// cgl generated".endl());
    for (let t = 0; t < this._defines.length; t++) i += "#define " + this._defines[t][0] + " " + this._defines[t][1] + "".endl();
    const s = this.createStructUniforms();
    if (this._uniforms) {
      const t = this._uniforms.map(t => t._name),
        e = [];
      for (let i = 0; i < this._uniforms.length; i++) {
        const s = this._uniforms[i];
        t.indexOf(s._name, i + 1) > -1 && e.push(i)
      }
      for (let t = this._uniforms.length - 1; t >= 0; t -= 1) e.indexOf(t) > -1 ? this._uniforms.splice(t, 1) : this._uniforms[t].resetLoc()
    }
    this.hasTextureUniforms() && (i += "#define HAS_TEXTURES".endl());
    let r = "",
      n = "";
    if (this.srcFrag || (console.error("[cgl shader] has no fragment source!"), this.srcVert = this.getDefaultVertexShader(), this.srcFrag = this.getDefaultFragmentShader()), 300 == this.glslVersion) {
      let t = "";
      if (this.srcFrag.indexOf("outColor0") > -1 && (this._drawBuffers[0] = !0), this.srcFrag.indexOf("outColor1") > -1 && (this._drawBuffers[1] = !0), this.srcFrag.indexOf("outColor2") > -1 && (this._drawBuffers[2] = !0), this.srcFrag.indexOf("outColor3") > -1 && (this._drawBuffers[3] = !0), 1 == this._drawBuffers.length) t = "out vec4 outColor;".endl(), t += "#define gl_FragColor outColor".endl();
      else {
        let e = 0;
        t += "vec4 outColor;".endl();
        for (let i = 0; i < this._drawBuffers.length; i++) 0 == e && (t += "#define gl_FragColor outColor" + i + "".endl()), t += "layout(location = " + i + ") out vec4 outColor" + i + ";".endl(), e++
      }
      r = "#version 300 es".endl() + "// ".endl() + "// vertex shader " + this._name.endl() + "// ".endl() + "precision " + this.precision + " float;".endl() + "".endl() + "#define WEBGL2".endl() + "#define texture2D texture".endl() + "#define UNI uniform".endl() + "#define IN in".endl() + "#define OUT out".endl(), n = "#version 300 es".endl() + "// ".endl() + "// fragment shader " + this._name.endl() + "// ".endl() + "precision " + this.precision + " float;".endl() + "".endl() + "#define WEBGL2".endl() + "#define texture2D texture".endl() + "#define IN in".endl() + "#define UNI uniform".endl() + t.endl()
    } else n = "".endl() + "// ".endl() + "// fragment shader " + this._name.endl() + "// ".endl() + "#define WEBGL1".endl() + "#define texture texture2D".endl() + "#define outColor gl_FragColor".endl() + "#define IN varying".endl() + "#define UNI uniform".endl(), r = "".endl() + "// ".endl() + "// vertex shader " + this._name.endl() + "// ".endl() + "#define WEBGL1".endl() + "#define texture texture2D".endl() + "#define OUT varying".endl() + "#define IN attribute".endl() + "#define UNI uniform".endl();
    let o = "\n// cgl generated".endl(),
      h = "\n// cgl generated".endl();
    n += "\n// active mods: --------------- ", r += "\n// active mods: --------------- ";
    let a = !1,
      l = !1;
    for (let t = 0; t < this._moduleNames.length; t++)
      for (let e = 0; e < this._modules.length; e++) this._modules[e].name == this._moduleNames[t] && ((this._modules[e].srcBodyFrag || this._modules[e].srcHeadFrag) && (a = !0, n += "\n// " + t + "." + e + ". " + this._modules[e].title + " (" + this._modules[e].name + ")"), (this._modules[e].srcBodyVert || this._modules[e].srcHeadVert) && (r += "\n// " + t + "." + e + ". " + this._modules[e].title + " (" + this._modules[e].name + ")", l = !0));
    l || (n += "\n// no mods used..."), a || (n += "\n// no mods used..."), n += "\n", r += "\n";
    for (let t = 0; t < this._uniforms.length; t++)
      if (this._uniforms[t].shaderType && !this._uniforms[t].isStructMember()) {
        let e = "";
        this._uniforms[t].getGlslTypeString() || (e += "// "), e += "UNI " + this._uniforms[t].getGlslTypeString() + " " + this._uniforms[t].getName();
        let i = "";
        this._uniforms[t].comment && (i = " // " + this._uniforms[t].comment), "vert" != this._uniforms[t].shaderType && "both" != this._uniforms[t].shaderType || -1 == this.srcVert.indexOf(e) && -1 == this.srcVert.indexOf("uniform " + this._uniforms[t].getGlslTypeString() + " " + this._uniforms[t].getName()) && (o += e + ";" + i.endl()), "frag" != this._uniforms[t].shaderType && "both" != this._uniforms[t].shaderType || -1 == this.srcFrag.indexOf(e) && -1 == this.srcFrag.indexOf("uniform " + this._uniforms[t].getGlslTypeString() + " " + this._uniforms[t].getName()) && (h += e + ";" + i.endl())
      } let u = 0,
      c = 0;
    for (let t = 0; t < this._uniforms.length; t++) this._uniforms[t].shaderType && !this._uniforms[t].isStructMember() && ("vert" != this._uniforms[t].shaderType && "both" != this._uniforms[t].shaderType || c++, "frag" != this._uniforms[t].shaderType && "both" != this._uniforms[t].shaderType || u++);
    u >= this._cgl.maxUniformsFrag && console.warn("[cgl_shader] num uniforms frag: " + u + " / " + this._cgl.maxUniformsFrag), c >= this._cgl.maxUniformsVert && console.warn("[cgl_shader] num uniforms vert: " + c + " / " + this._cgl.maxUniformsVert), -1 == n.indexOf("precision") && (n = "precision " + this.precision + " float;".endl() + n), -1 == r.indexOf("precision") && (r = "precision " + this.precision + " float;".endl() + r), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (n += "#define MOBILE".endl(), r += "#define MOBILE".endl()), r = e + r + i + s[0] + o + "\n// -- \n" + this.srcVert, n = e + n + i + s[1] + h + "\n// -- \n" + this.srcFrag;
    let p = "",
      d = "";
    this._modules.sort((function(t, e) {
      return t.group - e.group
    })), this._modules.sort((function(t, e) {
      return t.priority || 0 - e.priority || 0
    }));
    let _ = !1;
    for (let t = 0; t < this._moduleNames.length; t++) {
      let e = "",
        i = "";
      for (let s = 0; s < this._modules.length; s++)
        if (this._modules[s].name == this._moduleNames[t]) {
          if (p += "\n//---- MOD: group:" + this._modules[s].group + ": idx:" + s + " - prfx:" + this._modules[s].prefix + " - " + this._modules[s].title + " ------\n", d += "\n//---- MOD: group:" + this._modules[s].group + ": idx:" + s + " - prfx:" + this._modules[s].prefix + " - " + this._modules[s].title + " ------\n", e += "\n\n//---- MOD: " + this._modules[s].title + " ------\n", i += "\n\n//---- MOD: " + this._modules[s].title + " ------\n", !_) {
            _ = !0;
            for (let t = 0; t < this._attributes.length; t++) this._attributes[t].name && this._attributes[t].type && (p += "".endl() + "#ifndef ATTRIB_" + this._attributes[t].name.endl() + "  #define ATTRIB_" + this._attributes[t].name.endl() + "  IN " + this._attributes[t].type + " " + this._attributes[t].name + ";".endl() + "#endif", this._attributes[t].nameFrag && (p += "".endl() + "#ifndef ATTRIB_" + this._attributes[t].nameFrag.endl() + "  #define ATTRIB_" + this._attributes[t].nameFrag.endl() + "  OUT " + this._attributes[t].type + " " + this._attributes[t].nameFrag + ";".endl() + "#endif", e += "".endl() + this._attributes[t].nameFrag + "=" + this._attributes[t].name + ";"), d += "".endl() + "#ifndef ATTRIB_" + this._attributes[t].nameFrag.endl() + "  #define ATTRIB_" + this._attributes[t].nameFrag.endl() + "  IN " + this._attributes[t].type + " " + this._attributes[t].nameFrag + ";".endl() + "#endif")
          }
          p += this._modules[s].srcHeadVert || "", d += this._modules[s].srcHeadFrag || "", e += this._modules[s].srcBodyVert || "", i += this._modules[s].srcBodyFrag || "", p += "\n//---- end mod ------\n", d += "\n//---- end mod ------\n", e += "\n//---- end mod ------\n", i += "\n//---- end mod ------\n", e = e.replace(/{{mod}}/g, this._modules[s].prefix), i = i.replace(/{{mod}}/g, this._modules[s].prefix), p = p.replace(/{{mod}}/g, this._modules[s].prefix), d = d.replace(/{{mod}}/g, this._modules[s].prefix), e = e.replace(/MOD_/g, this._modules[s].prefix), i = i.replace(/MOD_/g, this._modules[s].prefix), p = p.replace(/MOD_/g, this._modules[s].prefix), d = d.replace(/MOD_/g, this._modules[s].prefix)
        } r = r.replace("{{" + this._moduleNames[t] + "}}", e), n = n.replace("{{" + this._moduleNames[t] + "}}", i)
    }
    if (r = r.replace("{{MODULES_HEAD}}", p), n = n.replace("{{MODULES_HEAD}}", d), r = this._addLibs(r), n = this._addLibs(n), this._program) {
      this._program = this._createProgram(r, n), this._projMatrixUniform = null;
      for (let t = 0; t < this._uniforms.length; t++) this._uniforms[t].resetLoc()
    } else this._program = this._createProgram(r, n);
    this.finalShaderFrag = n, this.finalShaderVert = r, rt.lastMesh = null, rt.lastShader = null, this._needsRecompile = !1, this.lastCompile = ct(), this._cgl.printError("shader compile"), CGL.profileData.shaderCompileTime += performance.now() - t
  }, bt.hasChanged = function() {
    return this._needsRecompile
  }, bt.prototype.bind = function() {
    if (this._isValid) {
      if (rt.lastShader = this, this._program && !this._needsRecompile || this.compile(), !this._projMatrixUniform) {
        this._attrVertexPos = this._cgl.glGetAttribLocation(this._program, st.SHADER.SHADERVAR_VERTEX_POSITION), this._projMatrixUniform = this._cgl.gl.getUniformLocation(this._program, st.SHADER.SHADERVAR_UNI_PROJMAT), this._mvMatrixUniform = this._cgl.gl.getUniformLocation(this._program, "mvMatrix"), this._vMatrixUniform = this._cgl.gl.getUniformLocation(this._program, st.SHADER.SHADERVAR_UNI_VIEWMAT), this._mMatrixUniform = this._cgl.gl.getUniformLocation(this._program, st.SHADER.SHADERVAR_UNI_MODELMAT), this._camPosUniform = this._cgl.gl.getUniformLocation(this._program, st.SHADER.SHADERVAR_UNI_VIEWPOS), this._normalMatrixUniform = this._cgl.gl.getUniformLocation(this._program, st.SHADER.SHADERVAR_UNI_NORMALMAT), this._inverseViewMatrixUniform = this._cgl.gl.getUniformLocation(this._program, st.SHADER.SHADERVAR_UNI_INVVIEWMAT);
        for (let t = 0; t < this._uniforms.length; t++) this._uniforms[t].needsUpdate = !0
      }
      this._cgl.currentProgram != this._program && (Q.profileShaderBinds++, this._cgl.gl.useProgram(this._program), this._cgl.currentProgram = this._program);
      for (let t = 0; t < this._uniforms.length; t++) this._uniforms[t].needsUpdate && this._uniforms[t].updateValue();
      if (this._pMatrixState != this._cgl.getProjectionMatrixStateCount() && (this._pMatrixState = this._cgl.getProjectionMatrixStateCount(), this._cgl.gl.uniformMatrix4fv(this._projMatrixUniform, !1, this._cgl.pMatrix), Q.profileMVPMatrixCount++), this._vMatrixUniform) this._vMatrixState != this._cgl.getViewMatrixStateCount() && (this._cgl.gl.uniformMatrix4fv(this._vMatrixUniform, !1, this._cgl.vMatrix), Q.profileMVPMatrixCount++, this._vMatrixState = this._cgl.getViewMatrixStateCount(), this._inverseViewMatrixUniform && (mat4.invert(this._tempInverseViewMatrix, this._cgl.vMatrix), this._cgl.gl.uniformMatrix4fv(this._inverseViewMatrixUniform, !1, this._tempInverseViewMatrix), Q.profileMVPMatrixCount++)), this._cgl.gl.uniformMatrix4fv(this._mMatrixUniform, !1, this._cgl.mMatrix), Q.profileMVPMatrixCount++, this._camPosUniform && (mat4.invert(this._tempCamPosMatrix, this._cgl.vMatrix), this._cgl.gl.uniform3f(this._camPosUniform, this._tempCamPosMatrix[12], this._tempCamPosMatrix[13], this._tempCamPosMatrix[14]), Q.profileMVPMatrixCount++);
      else {
        const t = mat4.create();
        mat4.mul(t, this._cgl.vMatrix, this._cgl.mMatrix), this._cgl.gl.uniformMatrix4fv(this._mvMatrixUniform, !1, t), Q.profileMVPMatrixCount++
      }
      this._normalMatrixUniform && (mat4.invert(this._tempNormalMatrix, this._cgl.mMatrix), mat4.transpose(this._tempNormalMatrix, this._tempNormalMatrix), this._cgl.gl.uniformMatrix4fv(this._normalMatrixUniform, !1, this._tempNormalMatrix), Q.profileMVPMatrixCount++);
      for (let t = 0; t < this._libs.length; t++) this._libs[t].onBind && this._libs[t].onBind.bind(this._libs[t])(this._cgl, this);
      this._bindTextures()
    }
  }, bt.prototype.toggleDefine = function(t, e) {
    e && "object" == typeof e && e.addEventListener && (e.removeEventListener("change", e.onToggleDefine), e.onToggleDefine = e => {
      this.toggleDefine(t, e)
    }, e.on("change", e.onToggleDefine), e = e.get()), e ? this.define(t) : this.removeDefine(t)
  }, bt.prototype.define = function(t, e) {
    null == e && (e = ""), "object" == typeof e && (e.removeEventListener("change", e.onDefineChange), e.onDefineChange = e => {
      this.define(t, e)
    }, e.on("change", e.onDefineChange), e = e.get());
    for (let i = 0; i < this._defines.length; i++) {
      if (this._defines[i][0] == t && this._defines[i][1] == e) return;
      if (this._defines[i][0] == t) return this._defines[i][1] = e, void(this._needsRecompile = !0)
    }
    this._defines.push([t, e]), this._needsRecompile = !0, this.setWhyCompile("define " + t + " " + e)
  }, bt.prototype.getDefines = function() {
    return this._defines
  }, bt.prototype.getDefine = function(t) {
    for (let e = 0; e < this._defines.length; e++)
      if (this._defines[e][0] == t) return this._defines[e][1];
    return null
  }, bt.prototype.hasDefine = function(t) {
    for (let e = 0; e < this._defines.length; e++)
      if (this._defines[e][0] == t) return !0
  }, bt.prototype.removeDefine = function(t) {
    for (let e = 0; e < this._defines.length; e++)
      if (this._defines[e][0] == t) return this._defines.splice(e, 1), void(this._needsRecompile = !0)
  }, bt.prototype.removeModule = function(t) {
    for (let e = 0; e < this._modules.length; e++)
      if (t && t.id && (this._modules[e].id == t.id || !this._modules[e])) {
        let i = !0;
        for (; i;) {
          i = !1;
          for (let e = 0; e < this._uniforms.length; e++) 0 != this._uniforms[e].getName().indexOf(t.prefix) || (this._uniforms.splice(e, 1), i = !0)
        }
        this._needsRecompile = !0, this.setWhyCompile("remove module " + t.title), this._modules.splice(e, 1);
        break
      }
  }, bt.prototype.getNumModules = function() {
    return this._modules.length
  }, bt.prototype.getCurrentModules = function() {
    return this._modules
  }, bt.prototype.addModule = function(t, e) {
    return t.id || (t.id = y()), t.numId || (t.numId = this._moduleNumId), t.num || (t.num = this._modules.length), e && !e.group && (e.group = x()), t.group || (t.group = e ? e.group : x()), t.prefix = "mod" + t.group + "_", this._modules.push(t), this._needsRecompile = !0, this.setWhyCompile("add module " + t.title), this._moduleNumId++, t
  }, bt.prototype.hasModule = function(t) {
    for (let e = 0; e < this._modules.length; e++)
      if (this._modules[e].id == t) return !0;
    return !1
  }, bt.prototype.setModules = function(t) {
    this._moduleNames = t
  }, bt.prototype.dispose = function() {
    this._cgl.gl.deleteProgram(this._program)
  }, bt.prototype.setDrawBuffers = function(t) {
    this._drawBuffers = t, this._needsRecompile = !0
  }, bt.prototype.getUniforms = function() {
    return this._uniforms
  }, bt.prototype.getUniform = function(t) {
    for (let e = 0; e < this._uniforms.length; e++)
      if (this._uniforms[e].getName() == t) return this._uniforms[e];
    return null
  }, bt.prototype.removeUniform = function(t) {
    for (let e = 0; e < this._uniforms.length; e++) this._uniforms[e].getName() == t && this._uniforms.splice(e, 1);
    this._needsRecompile = !0, this.setWhyCompile("remove uniform " + t)
  }, bt.prototype._addUniform = function(t) {
    this._uniforms.push(t), this.setWhyCompile("add uniform " + name), this._needsRecompile = !0
  }, bt.prototype.addUniformFrag = function(t, e, i, s, r, n) {
    const o = new CGL.Uniform(this, t, e, i, s, r, n);
    return o.shaderType = "frag", o
  }, bt.prototype.addUniformVert = function(t, e, i, s, r, n) {
    const o = new CGL.Uniform(this, t, e, i, s, r, n);
    return o.shaderType = "vert", o
  }, bt.prototype.addUniformBoth = function(t, e, i, s, r, n) {
    const o = new CGL.Uniform(this, t, e, i, s, r, n);
    return o.shaderType = "both", o
  }, bt.prototype.addUniformStructFrag = function(t, e, i) {
    const s = {};
    if (!i) return s;
    for (let r = 0; r < i.length; r += 1) {
      const n = i[r];
      if (!this.hasUniform(e + "." + n.name)) {
        const i = new CGL.Uniform(this, n.type, e + "." + n.name, n.v1, n.v2, n.v3, n.v4, e, t, n.name);
        i.shaderType = "frag", s[e + "." + n.name] = i
      }
    }
    return s
  }, bt.prototype.addUniformStructVert = function(t, e, i) {
    const s = {};
    if (!i) return s;
    for (let r = 0; r < i.length; r += 1) {
      const n = i[r];
      if (!this.hasUniform(e + "." + n.name)) {
        const i = new CGL.Uniform(this, n.type, e + "." + n.name, n.v1, n.v2, n.v3, n.v4, e, t, n.name);
        i.shaderType = "vert", s[e + "." + n.name] = i
      }
    }
    return s
  }, bt.prototype.addUniformStructBoth = function(t, e, i) {
    const s = {};
    if (!i) return s;
    for (let r = 0; r < i.length; r += 1) {
      const n = i[r];
      if ("2i" !== n.type && "i" !== n.type && "3i" !== n.type || console.error("Adding an integer struct member to both shaders can potentially error. Please use different structs for each shader. Error occured in struct:", t, " with member:", n.name, " of type:", n.type, "."), !this.hasUniform(e + "." + n.name)) {
        const i = new CGL.Uniform(this, n.type, e + "." + n.name, n.v1, n.v2, n.v3, n.v4, e, t, n.name);
        i.shaderType = "both", s[e + "." + n.name] = i
      }
    }
    return s
  }, bt.prototype.hasUniform = function(t) {
    for (let e = 0; e < this._uniforms.length; e++)
      if (this._uniforms[e].getName() == t) return !0;
    return !1
  }, bt.prototype._createProgram = function(t, e) {
    const i = this._cgl.gl.createProgram();
    return this.vshader = bt.createShader(this._cgl, t, this._cgl.gl.VERTEX_SHADER, this), this.fshader = bt.createShader(this._cgl, e, this._cgl.gl.FRAGMENT_SHADER, this), this._cgl.gl.attachShader(i, this.vshader), this._cgl.gl.attachShader(i, this.fshader), this._linkProgram(i), i
  }, bt.prototype.hasErrors = function() {
    return this._hasErrors
  }, bt.prototype._linkProgram = function(t) {
    this._feedBackNames.length > 0 && this._cgl.gl.transformFeedbackVaryings(t, this._feedBackNames, this._cgl.gl.SEPARATE_ATTRIBS), this._cgl.gl.linkProgram(t), this._isValid = !0, !1 !== this._cgl.patch.config.glValidateShader && (this._cgl.gl.validateProgram(t), this._cgl.gl.getProgramParameter(t, this._cgl.gl.LINK_STATUS) || (console.warn(this._cgl.gl.getShaderInfoLog(this.fshader) || "empty shader infolog"), console.warn(this._cgl.gl.getShaderInfoLog(this.vshader) || "empty shader infolog"), console.error(name + " shader linking fail..."), d.log("srcFrag", this.srcFrag), d.log("srcVert", this.srcVert), d.log(name + " programinfo: ", this._cgl.gl.getProgramInfoLog(t)), d.log("--------------------------------------"), d.log(this), d.log("--------------------------------------"), this._isValid = !1, this._name = "errorshader", this.setSource(bt.getDefaultVertexShader(), bt.getErrorFragmentShader())))
  }, bt.prototype.getProgram = function() {
    return this._program
  }, bt.prototype.setFeedbackNames = function(t) {
    this._needsRecompile = !0, this._feedBackNames = t
  }, bt.prototype.getDefaultVertexShader = bt.getDefaultVertexShader = function() {
    return "".endl() + "{{MODULES_HEAD}}".endl() + "IN vec3 vPosition;".endl() + "IN vec2 attrTexCoord;".endl() + "IN vec3 attrVertNormal;".endl() + "IN vec3 attrTangent,attrBiTangent;".endl() + "IN float attrVertIndex;".endl() + "OUT vec2 texCoord;".endl() + "OUT vec3 norm;".endl() + "UNI mat4 projMatrix;".endl() + "UNI mat4 viewMatrix;".endl() + "UNI mat4 modelMatrix;".endl() + "void main()".endl() + "{".endl() + "   texCoord=attrTexCoord;".endl() + "   norm=attrVertNormal;".endl() + "   vec4 pos=vec4(vPosition,  1.0);".endl() + "   mat4 mMatrix=modelMatrix;".endl() + "   {{MODULE_VERTEX_POSITION}}".endl() + "   gl_Position = projMatrix * (viewMatrix*mMatrix) * pos;".endl() + "}"
  }, bt.prototype.getDefaultFragmentShader = bt.getDefaultFragmentShader = function(t, e, i) {
    return null == t && (t = .5, e = .5, i = .5), "".endl() + "IN vec2 texCoord;".endl() + "{{MODULES_HEAD}}".endl() + "void main()".endl() + "{".endl() + "    vec4 col=vec4(" + t + "," + e + "," + i + ",1.0);".endl() + "    {{MODULE_COLOR}}".endl() + "    outColor = col;".endl() + "}"
  }, bt.prototype.addAttribute = function(t) {
    for (let e = 0; e < this._attributes.length; e++)
      if (this._attributes[e].name == t.name && this._attributes[e].nameFrag == t.nameFrag) return;
    this._attributes.push(t), this._needsRecompile = !0
  }, bt.prototype.bindTextures = bt.prototype._bindTextures = function() {
    this._textureStackTex.length > this._cgl.maxTextureUnits && console.log("[shader._bindTextures] too many textures bound", this._textureStackTex.length + "/" + this._cgl.maxTextureUnits);
    for (let t = 0; t < this._textureStackTex.length; t++) this._textureStackTex[t] ? this._textureStackUni[t] ? (this._textureStackUni[t].setValue(t), this._cgl.setTexture(t, this._textureStackTex[t], this._textureStackType[t])) : (console.log("no uniform for pushtexture", this._name), this._cgl.setTexture(t, this._textureStackTex[t], this._textureStackType[t])) : console.log("no texture for pushtexture", this._name)
  }, bt.prototype.pushTexture = function(t, e, i) {
    if (!t) throw new Error("no uniform given to texturestack");
    if (!e) throw new Error("no texture given to texturestack");
    this._textureStackUni.push(t), e.tex ? (this._textureStackTexCgl.push(e), this._textureStackTex.push(e.tex)) : (this._textureStackTexCgl.push(null), this._textureStackTex.push(e)), this._textureStackType.push(i)
  }, bt.prototype.popTexture = function() {
    this._textureStackUni.pop(), this._textureStackTex.pop(), this._textureStackType.pop()
  }, bt.prototype.popTextures = function() {
    this._textureStackTex.length = this._textureStackTexCgl.length = this._textureStackType.length = this._textureStackUni.length = 0
  }, bt.getErrorFragmentShader = function() {
    return "".endl() + "void main()".endl() + "{".endl() + "   float g=mod((gl_FragCoord.y+gl_FragCoord.x),50.0)/50.0;".endl() + "   g= step(0.1,g);".endl() + "   outColor = vec4( g+0.5, 0.0, 0.0, 1.0);".endl() + "}"
  }, bt.createShader = function(t, e, i, s) {
    if (t.aborted) return;
    t.printError("shader create1");
    const r = t.gl.createShader(i);
    if (t.gl.shaderSource(r, e), t.gl.compileShader(r), !t.gl.getShaderParameter(r, t.gl.COMPILE_STATUS)) {
      d.log("compile status: "), i == t.gl.VERTEX_SHADER && d.log("VERTEX_SHADER"), i == t.gl.FRAGMENT_SHADER && d.log("FRAGMENT_SHADER");
      let o = t.gl.getShaderInfoLog(r) || "empty shader info log";
      const h = function(t) {
        const e = [],
          i = t.split("\n");
        for (const t in i) {
          const s = i[t].split(":");
          parseInt(s[2], 10) && e.push(parseInt(s[2], 10))
        }
        return e
      }(o);
      let a = '<div class="shaderErrorCode">';
      const l = e.match(/^.*((\r\n|\n|\r)|$)/gm);
      for (const t in l) {
        const e = parseInt(t, 10) + 1,
          i = e + ": " + l[t];
        d.log(i);
        let s = !1;
        for (const t in h) h[t] == e && (s = !0);
        s && (a += '<span class="error">'), a += (n = i) && At.test(n) ? n.replace(Tt, (function(t) {
          return Et[t]
        })) : n || "", s && (a += "</span>")
      }
      console.warn(o), o = o.replace(/\n/g, "<br/>"), a = o + "<br/>" + a + "<br/><br/>", t.patch.emitEvent("criticalError", "Shader error " + name, a), t.patch.isEditorMode() && d.log("Shader error " + name, a), a += "</div>", this._name = "errorshader", s.setSource(bt.getDefaultVertexShader(), bt.getErrorFragmentShader())
    }
    var n;
    return t.printError("shader create2"), r
  };
  const yt = function() {
    this._arr = [mat4.create()], this._index = 0, this.stateCounter = 0
  };
  yt.prototype.push = function(t) {
    if (this._index++, this.stateCounter++, this._index == this._arr.length) {
      const t = mat4.create();
      this._arr.push(t)
    }
    return mat4.copy(this._arr[this._index], t || this._arr[this._index - 1]), this._arr[this._index]
  }, yt.prototype.pop = function() {
    return this.stateCounter++, this._index--, this._index < 0 && (this._index = 0), this._arr[this._index]
  }, yt.prototype.length = function() {
    return this._index
  };
  const Ot = function(t) {
    _.apply(this);
    const e = [0, 0, 0, 0];
    this.glVersion = 0, this.glUseHalfFloatTex = !1, this.clearCanvasTransparent = !0, this.clearCanvasDepth = !0, this.patch = t, this.debugOneFrame = !1, this.maxTextureUnits = 0, this.currentProgram = null, this._hadStackError = !1, this.glSlowRenderer = !1, this.temporaryTexture = null, this.frameStore = {}, this._onetimeCallbacks = [], this.gl = null, this._cursor = "auto", this._currentCursor = "", this.pMatrix = mat4.create(), this.mMatrix = mat4.create(), this.vMatrix = mat4.create(), this._textureslots = [], this._pMatrixStack = new yt, this._mMatrixStack = new yt, this._vMatrixStack = new yt, this._glFrameBufferStack = [], this._frameBufferStack = [], this._shaderStack = [], Object.defineProperty(this, "mvMatrix", {
      get() {
        return this.mMatrix
      },
      set(t) {
        this.mMatrix = t
      }
    }), this.canvas = null, this.pixelDensity = 1, mat4.identity(this.mMatrix), mat4.identity(this.vMatrix);
    const i = new bt(this, "simpleshader");
    i.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"]), i.setSource(bt.getDefaultVertexShader(), bt.getDefaultFragmentShader());
    let s = i;
    this.aborted = !1;
    const r = [];
    this.addEventListener = function(t, e) {
      "resize" == t && r.push(e)
    }, this.removeEventListener = function(t, e) {
      if ("resize" == t)
        for (const t in r)
          if (r[t] == e) return void r.splice(t, 1)
    }, this.exitError = function(t, e) {
      this.patch.exitError(t, e), this.aborted = !0
    }, this.setCanvas = function(t) {
      if (this.canvas = "string" == typeof t ? document.getElementById(t) : t, this.patch.config.canvas || (this.patch.config.canvas = {}), this.patch.config.canvas.hasOwnProperty("preserveDrawingBuffer") || (this.patch.config.canvas.preserveDrawingBuffer = !1), this.patch.config.canvas.hasOwnProperty("premultipliedAlpha") || (this.patch.config.canvas.premultipliedAlpha = !1), this.patch.config.canvas.hasOwnProperty("alpha") || (this.patch.config.canvas.alpha = !1), this.patch.config.hasOwnProperty("clearCanvasColor") && (this.clearCanvasTransparent = this.patch.config.clearCanvasColor), this.patch.config.hasOwnProperty("clearCanvasDepth") && (this.clearCanvasDepth = this.patch.config.clearCanvasDepth), this.patch.config.canvas.forceWebGl1 || (this.gl = this.canvas.getContext("webgl2", this.patch.config.canvas)), this.gl && "WebGL 1.0" != this.gl.getParameter(this.gl.VERSION) ? this.glVersion = 2 : (this.gl = this.canvas.getContext("webgl", this.patch.config.canvas) || this.canvas.getContext("experimental-webgl", this.patch.config.canvas), this.glVersion = 1, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (this.glUseHalfFloatTex = !0), /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && (this.patch.config.canvas.hasOwnProperty("powerPreference") || (this.patch.config.canvas.powerPreference = "high-performance"))), !this.gl) return void this.exitError("NO_WEBGL", "sorry, could not initialize WebGL. Please check if your Browser supports WebGL.");
      const e = this.gl.getExtension("WEBGL_debug_renderer_info");
      if (e) {
        "Google SwiftShader" === this.gl.getParameter(e.UNMASKED_RENDERER_WEBGL) && (this.glSlowRenderer = !0)
      }
      this.gl.getExtension("OES_standard_derivatives");
      const i = this.gl.getExtension("ANGLE_instanced_arrays") || this.gl;
      this.canvas.addEventListener("webglcontextlost", t => {
        console.log("canvas lost...", t), this.aborted = !0
      }), this.maxTextureUnits = this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS), this.maxTexSize = this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE), this.maxUniformsFrag = this.gl.getParameter(this.gl.MAX_FRAGMENT_UNIFORM_VECTORS), this.maxUniformsVert = this.gl.getParameter(this.gl.MAX_VERTEX_UNIFORM_VECTORS), this.maxSamples = 0, this.gl.MAX_SAMPLES && (this.maxSamples = this.gl.getParameter(this.gl.MAX_SAMPLES)), i.vertexAttribDivisorANGLE && (this.gl.vertexAttribDivisor = i.vertexAttribDivisorANGLE.bind(i), this.gl.drawElementsInstanced = i.drawElementsInstancedANGLE.bind(i)), this.updateSize()
    }, this.updateSize = function() {
      this.canvas.width = this.canvasWidth = this.canvas.clientWidth * this.pixelDensity, this.canvas.height = this.canvasHeight = this.canvas.clientHeight * this.pixelDensity
    }, this.canvasWidth = -1, this.canvasHeight = -1, this.canvasScale = 1;
    let n = -1,
      o = -1;
    this.getViewPort = function() {
      return e
    }, this.resetViewPort = function() {
      this.gl.viewport(e[0], e[1], e[2], e[3])
    }, this.setViewPort = function(t, i, s, r) {
      e[0] = Math.round(t), e[1] = Math.round(i), e[2] = Math.round(s), e[3] = Math.round(r), this.gl.viewport(e[0], e[1], e[2], e[3])
    }, this.screenShot = function(t, e, i, s) {
      e && (this.gl.clearColor(1, 1, 1, 1), this.gl.colorMask(!1, !1, !1, !0), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this.gl.colorMask(!0, !0, !0, !0)), this.canvas && this.canvas.toBlob && this.canvas.toBlob(e => {
        t ? t(e) : d.log("no screenshot callback...")
      }, i, s)
    }, this.endFrame = function() {
      if (this.patch.isEditorMode() && CABLES.GL_MARKER.drawMarkerLayer(this), this.setPreviousShader(), this._vMatrixStack.length() > 0 && this.logStackError("view matrix stack length !=0 at end of rendering..."), this._mMatrixStack.length() > 0 && this.logStackError("mvmatrix stack length !=0 at end of rendering..."), this._pMatrixStack.length() > 0 && this.logStackError("pmatrix stack length !=0 at end of rendering..."), this._glFrameBufferStack.length > 0 && this.logStackError("glFrameBuffer stack length !=0 at end of rendering..."), this._stackDepthTest.length > 0 && this.logStackError("depthtest stack length !=0 at end of rendering..."), this._stackDepthWrite.length > 0 && this.logStackError("depthwrite stack length !=0 at end of rendering..."), this._stackDepthFunc.length > 0 && this.logStackError("depthfunc stack length !=0 at end of rendering..."), this._stackBlend.length > 0 && this.logStackError("blend stack length !=0 at end of rendering..."), this._stackBlendMode.length > 0 && this.logStackError("blendMode stack length !=0 at end of rendering..."), this._shaderStack.length > 0 && this.logStackError("this._shaderStack length !=0 at end of rendering..."), this._stackCullFace.length > 0 && this.logStackError("this._stackCullFace length !=0 at end of rendering..."), this._stackCullFaceFacing.length > 0 && this.logStackError("this._stackCullFaceFacing length !=0 at end of rendering..."), this._frameStarted = !1, n != this.canvasWidth || o != this.canvasHeight) {
        n = this.canvasWidth, o = this.canvasHeight, this.setSize(this.canvasWidth / this.pixelDensity, this.canvasHeight / this.pixelDensity), this.updateSize();
        for (let t = 0; t < r.length; t++) r[t]()
      }
      this._cursor != this._currentCursor && (this._currentCursor = this.canvas.style.cursor = this._cursor)
    }, this.logStackError = function(t) {
      this._hadStackError || (this._hadStackError = !0, console.warn(t))
    }, this.getShader = function() {
      if (s && (!this.frameStore || !0 === this.frameStore.renderOffscreen == s.offScreenPass == !0)) return s;
      for (let t = this._shaderStack.length - 1; t >= 0; t--)
        if (this._shaderStack[t] && this.frameStore.renderOffscreen == this._shaderStack[t].offScreenPass) return this._shaderStack[t]
    }, this.getDefaultShader = function() {
      return i
    }, this.pushShader = this.setShader = function(t) {
      this._shaderStack.push(t), s = t
    }, this.popShader = this.setPreviousShader = function() {
      if (0 === this._shaderStack.length) throw new Error("Invalid shader stack pop!");
      this._shaderStack.pop(), s = this._shaderStack[this._shaderStack.length - 1]
    }, this.pushGlFrameBuffer = function(t) {
      this._glFrameBufferStack.push(t)
    }, this.popGlFrameBuffer = function() {
      return 0 == this._glFrameBufferStack.length ? null : (this._glFrameBufferStack.pop(), this._glFrameBufferStack[this._glFrameBufferStack.length - 1])
    }, this.getCurrentGlFrameBuffer = function() {
      return 0 === this._glFrameBufferStack.length ? null : this._glFrameBufferStack[this._glFrameBufferStack.length - 1]
    }, this.pushFrameBuffer = function(t) {
      this._frameBufferStack.push(t)
    }, this.popFrameBuffer = function() {
      return 0 == this._frameBufferStack.length ? null : (this._frameBufferStack.pop(), this._frameBufferStack[this._frameBufferStack.length - 1])
    }, this.getCurrentFrameBuffer = function() {
      return 0 === this._frameBufferStack.length ? null : this._frameBufferStack[this._frameBufferStack.length - 1]
    };
    const h = vec3.create();
    vec3.set(h, 0, 0, 2);
    const a = vec3.create();
    vec3.set(a, 0, 0, 0), this.renderStart = function(t, e, s) {
      e || (e = a), s || (s = h), this.pushDepthTest(!0), this.pushDepthWrite(!0), this.pushDepthFunc(t.gl.LEQUAL), this.pushCullFaceFacing(t.gl.BACK), this.pushCullFace(!1), this.clearCanvasTransparent && (t.gl.clearColor(0, 0, 0, 0), t.gl.clear(t.gl.COLOR_BUFFER_BIT)), this.clearCanvasDepth && t.gl.clear(t.gl.DEPTH_BUFFER_BIT), t.setViewPort(0, 0, t.canvasWidth, t.canvasHeight), mat4.perspective(t.pMatrix, 45, t.canvasWidth / t.canvasHeight, .1, 1e3), mat4.identity(t.mMatrix), mat4.identity(t.vMatrix), mat4.translate(t.mMatrix, t.mMatrix, e), mat4.translate(t.vMatrix, t.vMatrix, s), t.pushPMatrix(), t.pushModelMatrix(), t.pushViewMatrix(), t.pushBlendMode(st.BLEND_MODES.BLEND_NORMAL, !1);
      for (let t = 0; t < this._textureslots.length; t++) this._textureslots[t] = null;
      if (this.pushShader(i), this._frameStarted = !0, this._onetimeCallbacks.length > 0) {
        for (let t = 0; t < this._onetimeCallbacks.length; t++) this._onetimeCallbacks[t]();
        this._onetimeCallbacks.length = 0
      }
      this.emitEvent("beginFrame")
    }, this.renderEnd = function(t) {
      t.popViewMatrix(), t.popModelMatrix(), t.popPMatrix(), this.popDepthTest(), this.popDepthWrite(), this.popDepthFunc(), this.popCullFaceFacing(), this.popCullFace(), this.popBlend(), this.popBlendMode(), t.endFrame(), this.emitEvent("endFrame")
    }, this.getTexture = function(t) {
      return this._textureslots[t]
    }, this.checkFrameStarted = function(t) {
      this._frameStarted || console.warn("frame not started " + t)
    }, this.setTexture = function(t, e, i) {
      this.checkFrameStarted("cgl setTexture"), this._textureslots[t] != e && (this.gl.activeTexture(this.gl.TEXTURE0 + t), this.gl.bindTexture(i || this.gl.TEXTURE_2D, e), this._textureslots[t] = e)
    }, this.fullScreen = function() {
      this.canvas.requestFullscreen ? this.canvas.requestFullscreen() : this.canvas.mozRequestFullScreen ? this.canvas.mozRequestFullScreen() : this.canvas.webkitRequestFullscreen ? this.canvas.webkitRequestFullscreen() : this.canvas.msRequestFullscreen && this.canvas.msRequestFullscreen()
    }, this.setSize = function(t, e) {
      this.canvas.style.width = t + "px", this.canvas.style.height = e + "px", this.canvas.width = t * this.pixelDensity, this.canvas.height = e * this.pixelDensity, this.updateSize()
    }, this._resizeToWindowSize = function() {
      this.setSize(window.innerWidth, window.innerHeight), this.updateSize()
    }, this._resizeToParentSize = function() {
      const t = this.canvas.parentElement;
      t ? (this.setSize(t.clientWidth, t.clientHeight), this.updateSize()) : console.error("cables: can not resize to container element")
    }, this.setAutoResize = function(t) {
      window.removeEventListener("resize", this._resizeToWindowSize.bind(this)), window.removeEventListener("resize", this._resizeToParentSize.bind(this)), "window" == t && (window.addEventListener("resize", this._resizeToWindowSize.bind(this)), window.addEventListener("orientationchange", this._resizeToWindowSize.bind(this)), this._resizeToWindowSize()), "parent" == t && (window.addEventListener("resize", this._resizeToParentSize.bind(this)), this._resizeToParentSize())
    }, this.printError = function(t) {
      const e = this.gl.getError();
      if (e != this.gl.NO_ERROR) {
        let i = "";
        return e == this.gl.OUT_OF_MEMORY && (i = "OUT_OF_MEMORY"), e == this.gl.INVALID_ENUM && (i = "INVALID_ENUM"), e == this.gl.INVALID_OPERATION && (i = "INVALID_OPERATION"), e == this.gl.INVALID_FRAMEBUFFER_OPERATION && (i = "INVALID_FRAMEBUFFER_OPERATION"), e == this.gl.INVALID_VALUE && (i = "INVALID_VALUE"), e == this.gl.CONTEXT_LOST_WEBGL && (this.aborted = !0, i = "CONTEXT_LOST_WEBGL"), e == this.gl.NO_ERROR && (i = "NO_ERROR"), d.log("gl error: ", t, e, i), !0
      }
      return !1
    }, this.saveScreenshot = function(t, e, i, s, r) {
      this.patch.renderOneFrame();
      let n = this.canvas.clientWidth,
        o = this.canvas.clientHeight;

      function h(t, e, i) {
        return Array(e - String(t).length + 1).join(i || "0") + t
      }
      i && (this.canvas.width = i, n = i), s && (this.canvas.height = s, o = s);
      const a = new Date,
        l = "".concat(String(a.getFullYear()) + String(a.getMonth() + 1) + String(a.getDate()), "_").concat(h(a.getHours(), 2)).concat(h(a.getMinutes(), 2)).concat(h(a.getSeconds(), 2));
      t ? t += ".png" : t = "cables_" + l + ".png", this.patch.cgl.screenShot(function(i) {
        if (this.canvas.width = n, this.canvas.height = o, i) {
          const s = document.createElement("a");
          s.download = t, s.href = URL.createObjectURL(i), setTimeout((function() {
            s.click(), e && e(i)
          }), 100)
        } else d.log("screenshot: no blob")
      }.bind(this), r)
    }
  };
  Ot.prototype.addNextFrameOnceCallback = function(t) {
    t && this._onetimeCallbacks.push(t)
  }, Ot.prototype.pushViewMatrix = function() {
    this.vMatrix = this._vMatrixStack.push(this.vMatrix)
  }, Ot.prototype.popViewMatrix = function() {
    this.vMatrix = this._vMatrixStack.pop()
  }, Ot.prototype.getViewMatrixStateCount = function() {
    return this._vMatrixStack.stateCounter
  }, Ot.prototype.pushPMatrix = function() {
    this.pMatrix = this._pMatrixStack.push(this.pMatrix)
  }, Ot.prototype.popPMatrix = function() {
    return this.pMatrix = this._pMatrixStack.pop(), this.pMatrix
  }, Ot.prototype.getProjectionMatrixStateCount = function() {
    return this._pMatrixStack.stateCounter
  }, Ot.prototype.pushMvMatrix = Ot.prototype.pushModelMatrix = function() {
    this.mMatrix = this._mMatrixStack.push(this.mMatrix)
  }, Ot.prototype.popMvMatrix = Ot.prototype.popmMatrix = Ot.prototype.popModelMatrix = function() {
    return this.mMatrix = this._mMatrixStack.pop(), this.mMatrix
  }, Ot.prototype.modelMatrix = function() {
    return this.mMatrix
  }, Ot.prototype._stackDepthTest = [], Ot.prototype.pushDepthTest = function(t) {
    this._stackDepthTest.push(t), t ? this.gl.enable(this.gl.DEPTH_TEST) : this.gl.disable(this.gl.DEPTH_TEST)
  }, Ot.prototype.stateDepthTest = function() {
    return this._stackDepthTest[this._stackDepthTest.length - 1]
  }, Ot.prototype.popDepthTest = function() {
    this._stackDepthTest.pop(), this._stackDepthTest[this._stackDepthTest.length - 1] ? this.gl.enable(this.gl.DEPTH_TEST) : this.gl.disable(this.gl.DEPTH_TEST)
  }, Ot.prototype._stackDepthWrite = [], Ot.prototype.pushDepthWrite = function(t) {
    this._stackDepthWrite.push(t), this.gl.depthMask(t)
  }, Ot.prototype.stateDepthWrite = function() {
    return this._stackDepthWrite[this._stackDepthWrite.length - 1]
  }, Ot.prototype.popDepthWrite = function() {
    this._stackDepthWrite.pop(), this.gl.depthMask(this._stackDepthWrite[this._stackDepthWrite.length - 1])
  }, Ot.prototype._stackCullFace = [], Ot.prototype.pushCullFace = function(t) {
    this._stackCullFace.push(t), t ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE)
  }, Ot.prototype.stateCullFace = function() {
    return this._stackCullFace[this._stackCullFace.length - 1]
  }, Ot.prototype.popCullFace = function() {
    this._stackCullFace.pop(), this._stackCullFace[this._stackCullFace.length - 1] ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE)
  }, Ot.prototype._stackCullFaceFacing = [], Ot.prototype.pushCullFaceFacing = function(t) {
    this._stackCullFaceFacing.push(t), this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1])
  }, Ot.prototype.stateCullFaceFacing = function() {
    return this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]
  }, Ot.prototype.popCullFaceFacing = function() {
    this._stackCullFaceFacing.pop(), this._stackCullFaceFacing.length > 0 && this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1])
  }, Ot.prototype._stackDepthFunc = [], Ot.prototype.pushDepthFunc = function(t) {
    this._stackDepthFunc.push(t), this.gl.depthFunc(t)
  }, Ot.prototype.stateDepthFunc = function() {
    return this._stackDepthFunc.length > 0 && this._stackDepthFunc[this._stackDepthFunc.length - 1]
  }, Ot.prototype.popDepthFunc = function() {
    this._stackDepthFunc.pop(), this._stackDepthFunc.length > 0 && this.gl.depthFunc(this._stackDepthFunc[this._stackDepthFunc.length - 1])
  }, Ot.prototype._stackBlend = [], Ot.prototype.pushBlend = function(t) {
    this._stackBlend.push(t), t ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND)
  }, Ot.prototype.popBlend = function() {
    this._stackBlend.pop(), this._stackBlend[this._stackBlend.length - 1] ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND)
  }, Ot.prototype.stateBlend = function() {
    return this._stackBlend[this._stackBlend.length - 1]
  };
  Ot.prototype._stackBlendMode = [], Ot.prototype._stackBlendModePremul = [], Ot.prototype.pushBlendMode = function(t, e) {
    this._stackBlendMode.push(t), this._stackBlendModePremul.push(e);
    const i = this._stackBlendMode.length - 1;
    this.pushBlend(this._stackBlendMode[i] !== st.BLEND_MODES.BLEND_NONE), this._setBlendMode(this._stackBlendMode[i], this._stackBlendModePremul[i])
  }, Ot.prototype.popBlendMode = function() {
    this._stackBlendMode.pop(), this._stackBlendModePremul.pop();
    const t = this._stackBlendMode.length - 1;
    this.popBlend(this._stackBlendMode[t] !== st.BLEND_MODES.BLEND_NONE), t >= 0 && this._setBlendMode(this._stackBlendMode[t], this._stackBlendModePremul[t])
  }, Ot.prototype.glGetAttribLocation = function(t, e) {
    const i = this.gl.getAttribLocation(t, e);
    return i
  }, Ot.prototype.shouldDrawHelpers = function(t) {
    return !this.frameStore.shadowPass && (!!t.patch.isEditorMode() && (CABLES.UI.renderHelper || CABLES.UI.renderHelperCurrent && t.isCurrentUiOp()))
  }, Ot.prototype._setBlendMode = function(t, e) {
    const i = this.gl;
    t == st.BLEND_MODES.BLEND_NONE || (t == st.BLEND_MODES.BLEND_ADD ? e ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ONE, i.ONE, i.ONE, i.ONE)) : (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.SRC_ALPHA, i.ONE)) : t == st.BLEND_MODES.BLEND_SUB ? e ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ZERO, i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ONE_MINUS_SRC_ALPHA)) : (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ZERO, i.ONE_MINUS_SRC_COLOR)) : t == st.BLEND_MODES.BLEND_MUL ? e ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA)) : (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ZERO, i.SRC_COLOR)) : t == st.BLEND_MODES.BLEND_NORMAL ? e ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA)) : (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA)) : d.log("setblendmode: unknown blendmode"))
  }, Ot.prototype.setCursor = function(t) {
    this._cursor = t
  };
  const xt = Object.assign({
    Framebuffer: function(t, e, i, s) {
      const r = t,
        n = r.gl.getExtension("WEBGL_depth_texture") || r.gl.getExtension("WEBKIT_WEBGL_depth_texture") || r.gl.getExtension("MOZ_WEBGL_depth_texture") || r.gl.DEPTH_TEXTURE;
      n || r.exitError("NO_DEPTH_TEXTURE", "no depth texture support");
      let o = e || 512,
        h = i || 512;
      (s = s || {
        isFloatingPointTexture: !1
      }).hasOwnProperty("filter") || (s.filter = J.FILTER_LINEAR);
      const a = new J(r, {
        isFloatingPointTexture: s.isFloatingPointTexture,
        filter: s.filter,
        wrap: s.wrap || J.CLAMP_TO_EDGE
      });
      let l = null;
      n && (l = new J(r, {
        isDepthTexture: !0
      }));
      const u = r.gl.createFramebuffer(),
        c = r.gl.createRenderbuffer();
      this.getWidth = function() {
        return o
      }, this.getHeight = function() {
        return h
      }, this.getGlFrameBuffer = function() {
        return u
      }, this.getDepthRenderBuffer = function() {
        return c
      }, this.getTextureColor = function() {
        return a
      }, this.getTextureDepth = function() {
        return l
      }, this.setFilter = function(t) {
        a.filter = t, a.setSize(o, h)
      }, this.setSize = function(t, e) {
        if (t < 2 && (t = 2), e < 2 && (e = 2), o = Math.ceil(t), h = Math.ceil(e), Q.profileFrameBuffercreate++, r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, u), r.gl.bindRenderbuffer(r.gl.RENDERBUFFER, c), a.setSize(o, h), l && l.setSize(o, h), n && r.gl.renderbufferStorage(r.gl.RENDERBUFFER, r.gl.DEPTH_COMPONENT16, o, h), r.gl.framebufferTexture2D(r.gl.FRAMEBUFFER, r.gl.COLOR_ATTACHMENT0, r.gl.TEXTURE_2D, a.tex, 0), n && (r.gl.framebufferRenderbuffer(r.gl.FRAMEBUFFER, r.gl.DEPTH_ATTACHMENT, r.gl.RENDERBUFFER, c), r.gl.framebufferTexture2D(r.gl.FRAMEBUFFER, r.gl.DEPTH_ATTACHMENT, r.gl.TEXTURE_2D, l.tex, 0)), !r.gl.isFramebuffer(u)) throw new Error("Invalid framebuffer");
        const i = r.gl.checkFramebufferStatus(r.gl.FRAMEBUFFER);
        switch (i) {
          case r.gl.FRAMEBUFFER_COMPLETE:
            break;
          case r.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
            throw d.warn("FRAMEBUFFER_INCOMPLETE_ATTACHMENT...", o, h, a.tex, c), new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");
          case r.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
            throw d.warn("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT"), new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
          case r.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
            throw d.warn("FRAMEBUFFER_INCOMPLETE_DIMENSIONS"), new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
          case r.gl.FRAMEBUFFER_UNSUPPORTED:
            throw d.warn("FRAMEBUFFER_UNSUPPORTED"), new Error("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED");
          case 36059:
            d.warn("Incomplete: FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER from ext. Or Safari/iOS undefined behaviour.");
            break;
          default:
            throw d.warn("incomplete framebuffer", i), new Error("Incomplete framebuffer: " + i)
        }
        r.gl.bindTexture(r.gl.TEXTURE_2D, null), r.gl.bindRenderbuffer(r.gl.RENDERBUFFER, null), r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, null)
      }, this.renderStart = function() {
        r.pushModelMatrix(), r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, u), r.pushGlFrameBuffer(u), r.pushFrameBuffer(this), r.pushPMatrix(), r.gl.viewport(0, 0, o, h), r.gl.clearColor(0, 0, 0, 0), r.gl.clear(r.gl.COLOR_BUFFER_BIT | r.gl.DEPTH_BUFFER_BIT)
      }, this.renderEnd = function() {
        r.popPMatrix(), r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, r.popGlFrameBuffer()), r.popFrameBuffer(), r.popModelMatrix(), r.resetViewPort()
      }, this.delete = function() {
        a.delete(), l && l.delete(), r.gl.deleteRenderbuffer(c), r.gl.deleteFramebuffer(u)
      }, this.setSize(o, h)
    },
    Framebuffer2: Z,
    Geometry: tt,
    BoundingBox: $,
    Marker: function(t) {
      const e = new tt("marker");
      e.setPointVertices([1e-5, 0, 0, 1, 0, 0, 0, 1e-5, 0, 0, 1, 0, 0, 0, 1e-5, 0, 0, 1]);
      const i = new nt(t, e, t.gl.LINES);
      i.setGeom(e);
      const s = new bt(t, "markermaterial"),
        r = "".endl() + "precision highp float;".endl() + "IN vec3 axisColor;".endl() + "void main()".endl() + "{".endl() + "    vec4 col=vec4(axisColor,1.0);".endl() + "    outColor = col;".endl() + "}",
        n = "".endl() + "IN vec3 vPosition;".endl() + "UNI mat4 projMatrix;".endl() + "UNI mat4 mvMatrix;".endl() + "OUT vec3 axisColor;".endl() + "void main()".endl() + "{".endl() + "   vec4 pos=vec4(vPosition, 1.0);".endl() + "   if(pos.x!=0.0)axisColor=vec3(1.0,0.3,0.0);".endl() + "   if(pos.y!=0.0)axisColor=vec3(0.0,1.0,0.2);".endl() + "   if(pos.z!=0.0)axisColor=vec3(0.0,0.5,1.0);".endl() + "   gl_Position = projMatrix * mvMatrix * pos;".endl() + "}";
      s.setSource(n, r), this._vScale = vec3.create(), this.draw = function(t, e, r) {
        const n = e || 2;
        t.pushModelMatrix(), t.pushShader(s), vec3.set(this._vScale, n, n, n), mat4.scale(t.mvMatrix, t.mvMatrix, this._vScale), t.pushDepthTest(1 == r), i.render(t.getShader()), t.popDepthTest(), t.popShader(), t.popModelMatrix()
      }
    },
    WirePoint: function(t) {
      const e = t.gl.createBuffer(),
        i = vec3.create();
      this.render = function(t, s) {
          t.pushModelMatrix(), vec3.set(i, s, s, s), mat4.scale(t.mvMatrix, t.mvMatrix, i);
          const r = t.getShader();
          r.bind(), t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e), t.gl.vertexAttribPointer(r.getAttrVertexPos(), e.itemSize, t.gl.FLOAT, !1, 0, 0), t.gl.enableVertexAttribArray(r.getAttrVertexPos()), t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e), t.gl.drawArrays(t.gl.LINE_STRIP, 0, e.numItems), t.popModelMatrix()
        },
        function() {
          const i = [];
          let s = 0,
            r = 0;
          for (s = 0; s <= Math.round(24); s++) r = 360 / Math.round(24) * s * dt, i.push(.5 * Math.cos(r)), i.push(0), i.push(.5 * Math.sin(r));
          for (s = 0; s <= Math.round(24); s++) r = 360 / Math.round(24) * s * dt, i.push(.5 * Math.cos(r)), i.push(.5 * Math.sin(r)), i.push(0);
          for (s = 0; s <= Math.round(24); s++) r = 360 / Math.round(24) * s * dt, i.push(0), i.push(.5 * Math.cos(r)), i.push(.5 * Math.sin(r));
          t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e), t.gl.bufferData(t.gl.ARRAY_BUFFER, new Float32Array(i), t.gl.STATIC_DRAW), e.itemSize = 3, e.numItems = i.length / e.itemSize
        }()
    },
    WireCube: function(t) {
      const e = t.gl.createBuffer(),
        i = vec3.create();
      this.render = function(t, s, r, n) {
          t.pushModelMatrix(), vec3.set(i, s || 1, r || 1, n || 1), mat4.scale(t.mvMatrix, t.mvMatrix, i);
          const o = t.getShader();
          o.bind(), t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e), t.gl.vertexAttribPointer(o.getAttrVertexPos(), e.itemSize, t.gl.FLOAT, !1, 0, 0), t.gl.enableVertexAttribArray(o.getAttrVertexPos()), t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e), t.gl.drawArrays(t.gl.LINE_STRIP, 0, e.numItems), t.popModelMatrix()
        },
        function() {
          const i = [];
          i.push(-1, -1, 1), i.push(1, -1, 1), i.push(1, 1, 1), i.push(-1, 1, 1), i.push(-1, -1, 1), i.push(-1, -1, -1), i.push(1, -1, -1), i.push(1, 1, -1), i.push(-1, 1, -1), i.push(-1, -1, -1), i.push(-1, -1, -1), i.push(-1, 1, -1), i.push(-1, 1, 1), i.push(-1, -1, 1), i.push(-1, -1, -1), i.push(1, -1, -1), i.push(1, 1, -1), i.push(1, 1, 1), i.push(1, -1, 1), i.push(1, -1, -1), t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e), t.gl.bufferData(t.gl.ARRAY_BUFFER, new Float32Array(i), t.gl.STATIC_DRAW), e.itemSize = 3, e.numItems = i.length / e.itemSize
        }()
    },
    MatrixStack: yt,
    Mesh: nt,
    MESH: rt,
    ShaderLibMods: lt,
    Shader: bt,
    Uniform: et,
    MESHES: ht,
    Context: Ot,
    Texture: J,
    TextureEffect: at,
    isWindows: _t,
    getWheelSpeed: gt,
    getWheelDelta: mt,
    onLoadingAssetsFinished: null,
    profileData: Q,
    UniColorShader: class {
      constructor(t) {
        this.shader = new CGL.Shader(t, "markermaterial");
        const e = "".endl() + "void main()".endl() + "{".endl() + "    outColor = vec4(color.rgb,1.0);".endl() + "}",
          i = "".endl() + "IN vec3 vPosition;".endl() + "UNI mat4 projMatrix;".endl() + "UNI mat4 mvMatrix;".endl() + "void main()".endl() + "{".endl() + "   gl_Position = projMatrix * mvMatrix * vec4(vPosition,1.0);".endl() + "}";
        this.shader.setSource(i, e), this.coloruni = this.shader.addUniformFrag("4f", "color", [1, .777, 1, 1])
      }
      setColor(t, e, i, s) {
        this.coloruni.set(t, e, i, s)
      }
    }
  }, st.BLEND_MODES, st.SHADER, st.MATH, st.BLEND_MODES);
  window.CGL = xt;
  const It = function(t) {
    this._loadingAssets = {}, this._cbFinished = [], this._assetTasks = [], this._percent = 0, this._count = 0, this._countFinished = 0, this._order = 0, this._startTime = 0, this._patch = t, this._wasFinishedPrinted = !1, this._loadingAssetTaskCb = !1
  };
  It.prototype.setOnFinishedLoading = function(t) {
    this._cbFinished.push(t)
  }, It.prototype.getNumAssets = function() {
    return this._countFinished
  }, It.prototype.getProgress = function() {
    return this._percent
  }, It.prototype.checkStatus = function() {
    this._countFinished = 0, this._count = 0;
    for (const t in this._loadingAssets) this._count++, this._loadingAssets[t].finished || this._countFinished++;
    if (this._percent = (this._count - this._countFinished) / this._count, 0 === this._countFinished) {
      for (let t = 0; t < this._cbFinished.length; t++)
        if (this._cbFinished[t]) {
          const e = this._cbFinished[t];
          setTimeout(() => {
            e(this._patch)
          }, 200)
        } this._wasFinishedPrinted || (this._wasFinishedPrinted = !0, this.print())
    }
  }, It.prototype.print = function() {
    if (this._patch.config.silent) return;
    const t = [];
    for (const e in this._loadingAssets) t.push([this._loadingAssets[e].order, this._loadingAssets[e].type, this._loadingAssets[e].name, (this._loadingAssets[e].timeEnd - this._loadingAssets[e].timeStart) / 1e3 + "s"]);
    console.groupCollapsed("finished loading " + this._order + " assets in " + (Date.now() - this._startTime) / 1e3 + "s"), console.table(t), console.groupEnd()
  }, It.prototype.finished = function(t) {
    this._loadingAssets[t] && (this._loadingAssets[t].finished = !0, this._loadingAssets[t].timeEnd = Date.now()), this.checkStatus()
  }, It.prototype._startAssetTasks = function() {
    for (let t = 0; t < this._assetTasks.length; t++) this._assetTasks[t]();
    this._assetTasks.length = 0
  }, It.prototype.addAssetLoadingTask = function(t) {
    this._patch.isEditorMode() && !CABLES.UI.loaded ? (this._assetTasks.push(t), this._loadingAssetTaskCb || window.gui.addEventListener("uiloaded", this._startAssetTasks.bind(this)), this._loadingAssetTaskCb = !0) : t()
  }, It.prototype.start = function(t, e) {
    0 == this._startTime && (this._startTime = Date.now());
    const i = y();
    return this._loadingAssets[i] = {
      id: i,
      type: t,
      name: e,
      finished: !1,
      timeStart: Date.now(),
      order: this._order
    }, this._order++, i
  };
  const vt = function() {
    this._loops = [], this._indizes = [], this._index = 0
  };
  vt.prototype.pushLoop = function(t) {
    this._loops.push(Math.abs(Math.floor(t))), this._indizes.push(this._index)
  }, vt.prototype.popLoop = function() {
    this._loops.pop(), this._index = this._indizes.pop(), 0 === this._loops.length && (this._index = 0)
  }, vt.prototype.numLoops = function() {
    return this._loops.length
  }, vt.prototype.numCycles = function() {
    if (0 === this._loops.length) return 0;
    let t = this._loops[0];
    for (let e = 1; e < this._loops.length; e++) t *= this._loops[e];
    return t
  }, vt.prototype.inLoop = function() {
    return this._loops.length > 0
  }, vt.prototype.increment = function() {
    this._index++
  }, vt.prototype.index = function() {
    return this._index
  };
  const Pt = function() {
      let t = {},
        e = null,
        i = 0;
      this.getItems = function() {
        return t
      }, this.clear = function() {
        t = {}
      }, this.add = function(s, r) {
        null !== e && (r && r.id == e || t[e] && (t[e].timeUsed += performance.now() - i, (!t[e].peakTime || ct() - t[e].peakTime > 5e3) && (t[e].peak = 0, t[e].peakTime = ct()), t[e].peak = Math.max(t[e].peak, performance.now() - i))), null !== r ? (t[r.id] || (t[r.id] = {
          numTriggers: 0,
          timeUsed: 0
        }), t[r.id].numTriggers++, t[r.id].opid = r.parent.id, t[r.id].title = r.parent.name + "." + r.name, t[r.id].subPatch = r.parent.uiAttribs.subPatch, e = r.id, i = performance.now()) : e = null
      }, this.print = function() {
        d.log("--------");
        for (const e in t) d.log(t[e].title + ": " + t[e].numTriggers + " / " + t[e].timeUsed)
      }
    },
    Rt = function(t) {
      this._patch = t, this.result = []
    };
  Rt.MIDI = 0, Rt.POINTERLOCK = 1, Rt.WEBAUDIO = 2, Rt.WEBGL2 = 3, (Rt.infos = [])[Rt.POINTERLOCK] = {
    title: "pointerLock",
    caniuse: "https://caniuse.com/#search=pointerlock"
  }, Rt.infos[Rt.MIDI] = {
    title: "midi API",
    caniuse: "https://caniuse.com/#search=midi"
  }, Rt.infos[Rt.WEBAUDIO] = {
    title: "web audio",
    caniuse: "https://caniuse.com/#search=webaudio"
  }, Rt.infos[Rt.WEBGL2] = {
    title: "WebGL 2"
  }, Rt.prototype.checkRequirement = function(t, e) {
    switch (this.result = [], t) {
      case Rt.WEBGL2:
        return e.patch.cgl.glVersion >= 2;
      case Rt.POINTERLOCK:
        return "exitPointerLock" in document;
      case Rt.MIDI:
        return "MIDIAccess" in window;
      case Rt.WEBAUDIO:
        let t = !1;
        return window.audioContext && (t = !0), t || !("webkitAudioContext" in window) && !("AudioContext" in window) || (t = !0), t
    }
  }, Rt.prototype.checkOp = function(t) {
    if (t && t.requirements)
      for (let e = 0; e < t.requirements.length; e++) {
        const i = t.requirements[e];
        if (!this.result[i]) {
          const e = this.checkRequirement(i, t);
          if (!e) {
            t.patch.cgl && t.patch.cgl.canvas && t.patch.cgl.canvas.remove();
            let e = Rt.infos[i].title;
            throw Rt.infos[i].caniuse && (e = '<a href="' + Rt.infos[i].caniuse + '" target="_blank">' + Rt.infos[i].title + " (" + t.objName + ")</a>"), new Error("this browser does not meet requirement: " + Rt.infos[i].title + " (" + t.objName + ")")
          }
          this.result[i] = {
            success: e,
            info: Rt.infos[i]
          }
        }
      }
  };
  const Nt = function(t) {
    _.apply(this), this.ops = [], this.settings = {}, this.config = t || {
        glCanvasResizeToWindow: !1,
        prefixAssetPath: "",
        silent: !1,
        onError: null,
        onFinishedLoading: null,
        onFirstFrameRendered: null,
        onPatchLoaded: null,
        fpsLimit: 0
      }, this.timer = new pt, this.freeTimer = new pt, this.animFrameOps = [], this.animFrameCallbacks = [], this.gui = !1, this.silent = !1, this.profiler = null, this.onLoadStart = null, this.onLoadEnd = null, this.aborted = !1, this._crashedOps = [], this._renderOneFrame = !1, this._animReq = null, this._opIdCache = {}, this.loading = new It(this), this._perf = {
        fps: 0,
        ms: 0,
        _fpsFrameCount: 0,
        _fpsMsCount: 0,
        _fpsStart: 0
      }, this._volumeListeners = [], this._paused = !1, this._frameNum = 0, this.instancing = new vt, this.onOneFrameRendered = null, this.namedTriggers = {}, this._origData = null, this._frameNext = 0, this._frameInterval = 0, this._lastFrameTime = 0, this._frameWasdelayed = !0,
      function() {
        return !this
      }() || console.log("not in strict mode: core patch"), this._isLocal = 0 === document.location.href.indexOf("file:"), d.setSilent(this.config.silent), this.config.hasOwnProperty("doRequestAnimation") || (this.config.doRequestAnimation = !0), this.config.prefixAssetPath || (this.config.prefixAssetPath = ""), this.config.masterVolume || (this.config.masterVolume = 1), this._variables = {}, this._variableListeners = [], this.vars = {}, t && t.vars && (this.vars = t.vars), this.cgl = new Ot(this), this.cgl.setCanvas(this.config.glCanvasId || this.config.glCanvas || "glcanvas"), !0 === this.config.glCanvasResizeToWindow && this.cgl.setAutoResize("window"), !0 === this.config.glCanvasResizeToParent && this.cgl.setAutoResize("parent"), this.loading.setOnFinishedLoading(this.config.onFinishedLoading), this.cgl.aborted && (this.aborted = !0), this.cgl.silent && (this.silent = !0), this.freeTimer.play(), this.exec(), this.aborted || (this.config.patch ? this.deSerialize(this.config.patch) : this.config.patchFile && C(this.config.patchFile, (t, e) => {
        const i = JSON.parse(e);
        if (t) {
          return d.error("err", t), d.error("data", i), void d.error("data", i.msg)
        }
        this.deSerialize(i)
      }), this.timer.play()), console.log("made with https://cables.gl")
  };
  Nt.prototype.isPlaying = function() {
    return !this._paused
  }, Nt.prototype.isRenderingOneFrame = function() {
    return this._renderOneFrame
  }, Nt.prototype.renderOneFrame = function() {
    this._paused = !0, this._renderOneFrame = !0, this.exec(), this._renderOneFrame = !1
  }, Nt.prototype.getFPS = function() {
    return this._perf.fps
  }, Nt.prototype.isEditorMode = function() {
    return !0 === this.config.editorMode
  }, Nt.prototype.pause = function() {
    cancelAnimationFrame(this._animReq), this.emitEvent("pause"), this._animReq = null, this._paused = !0, this.freeTimer.pause()
  }, Nt.prototype.resume = function() {
    this._paused && (cancelAnimationFrame(this._animReq), this.emitEvent("resume"), this._paused = !1, this.freeTimer.play(), this.exec())
  }, Nt.prototype.setVolume = function(t) {
    this.config.masterVolume = t;
    for (let e = 0; e < this._volumeListeners.length; e++) this._volumeListeners[e].onMasterVolumeChanged(t)
  }, Nt.prototype.getAssetPath = function() {
    if (this.isEditorMode()) return "/assets/" + gui.project()._id + "/";
    if (document.location.href.indexOf("cables.gl") > 0) {
      const t = document.location.href.split("/");
      return "/assets/" + t[t.length - 1] + "/"
    }
    return "assets/"
  }, Nt.prototype.getFilePath = function(t) {
    return this._isLocal && !this.config.allowLocalFileAccess && this.exitError("localAccess", "Browser security forbids loading files directly without a webserver. Upload files to a server to work. use allowLocalFileAccess:true to ignore this."), t ? 0 === (t = String(t)).indexOf("https:") || 0 === t.indexOf("http:") ? t : (t = t.replace("//", "/"), this.config.prefixAssetPath + t + (this.config.suffixAssetPath || "")) : t
  }, Nt.prototype.clear = function() {
    for (this.cgl.TextureEffectMesh = null, this.animFrameOps.length = 0, this.timer = new pt; this.ops.length > 0;) this.deleteOp(this.ops[0].id)
  }, Nt.getOpClass = function(t) {
    const e = t.split(".");
    let i = null;
    try {
      return 2 == e.length ? i = window[e[0]][e[1]] : 3 == e.length ? i = window[e[0]][e[1]][e[2]] : 4 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]] : 5 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]][e[4]] : 6 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]] : 7 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]] : 8 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]] : 9 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]][e[8]] : 10 == e.length && (i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]][e[8]][e[9]]), i
    } catch (t) {
      return null
    }
  }, Nt.prototype.createOp = function(t, e) {
    const i = t.split(".");
    let s = null,
      r = "";
    try {
      if (-1 == t.indexOf("Ops.")) {
        const i = t;
        if (!CABLES.OPS[i]) throw new Error("could not find op by id: " + i);
        r = CABLES.OPS[i].objName, s = new CABLES.OPS[i].f(this, r, e, i), s.opId = i
      }
      if (!s) {
        r = t;
        if (!Nt.getOpClass(r)) throw this.emitEvent("criticalError", "unknown op", "unknown op: " + r), d.error("unknown op: " + r), new Error("unknown op: " + r);
        if (2 == i.length ? s = new window[i[0]][i[1]](this, r, e) : 3 == i.length ? s = new window[i[0]][i[1]][i[2]](this, r, e) : 4 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]](this, r, e) : 5 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]][i[4]](this, r, e) : 6 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]](this, r, e) : 7 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]](this, r, e) : 8 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]](this, r, e) : 9 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]](this, r, e) : 10 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]][i[9]](this, r, e) : d.log("parts.length", i.length), s) {
          s.opId = null;
          for (const t in CABLES.OPS) CABLES.OPS[t].objName == r && (s.opId = t)
        }
      }
    } catch (t) {
      if (this._crashedOps.push(r), console.error(t), this.emitEvent("exceptionOp", t, r), !this.isEditorMode()) throw d.log(t), d.error("[instancing error] " + r, t), CABLES.api && CABLES.api.sendErrorReport(t), this.exitError("INSTANCE_ERR", "Instancing Error " + r, t), new Error("instancing error " + r)
    }
    return s ? (s.objName = r, s.patch = this) : console.log("no op was created!?"), s
  }, Nt.prototype.addOp = function(t, e, i) {
    const s = this.createOp(t, i);
    return s ? (e && e.hasOwnProperty("errors") && delete e.errors, e && e.hasOwnProperty("error") && delete e.error, s.uiAttr(e), s.onCreate && s.onCreate(), s.hasOwnProperty("onAnimFrame") && this.addOnAnimFrame(s), s.hasOwnProperty("onMasterVolumeChanged") && this._volumeListeners.push(s), this.ops.push(s), this._opIdCache[s.id] = s, this.emitEvent("onOpAdd", s), s.init && s.init()) : console.error("addop: no op....."), s
  }, Nt.prototype.addOnAnimFrame = function(t) {
    for (let e = 0; e < this.animFrameOps.length; e++)
      if (this.animFrameOps[e] == t) return;
    this.animFrameOps.push(t)
  }, Nt.prototype.removeOnAnimFrame = function(t) {
    for (let e = 0; e < this.animFrameOps.length; e++)
      if (this.animFrameOps[e] == t) return void this.animFrameOps.splice(e, 1)
  }, Nt.prototype.addOnAnimFrameCallback = function(t) {
    this.animFrameCallbacks.push(t)
  }, Nt.prototype.removeOnAnimCallback = function(t) {
    for (let e = 0; e < this.animFrameCallbacks.length; e++)
      if (this.animFrameCallbacks[e] == t) return void this.animFrameCallbacks.splice(e, 1)
  }, Nt.prototype.deleteOp = function(t, e, i) {
    let s = !1;
    for (const r in this.ops)
      if (this.ops[r].id == t) {
        let n = null,
          o = null;
        if (this.ops[r]) {
          s = !0, e && this.ops[r].portsIn.length > 0 && this.ops[r].portsIn[0].isLinked() && this.ops[r].portsOut.length > 0 && this.ops[r].portsOut[0].isLinked() && this.ops[r].portsIn[0].getType() == this.ops[r].portsOut[0].getType() && (n = this.ops[r].portsIn[0].links[0].getOtherPort(this.ops[r].portsIn[0]), o = this.ops[r].portsOut[0].links[0].getOtherPort(this.ops[r].portsOut[0]));
          const h = this.ops[r];
          h.removeLinks(), this.onDelete && (d.warn("deprecated this.onDelete", this.onDelete), this.onDelete(h)), this.ops.splice(r, 1), this.emitEvent("onOpDelete", h, i), h.onDelete && h.onDelete(i), h.cleanUp(), null !== n && null !== o && this.link(n.parent, n.getName(), o.parent, o.getName()), delete this._opIdCache[t]
        }
      } s || console.log("core patch deleteop: not found...")
  }, Nt.prototype.getFrameNum = function() {
    return this._frameNum
  }, Nt.prototype.renderFrame = function(t) {
    this.timer.update(), this.freeTimer.update();
    const e = this.timer.getTime(),
      i = performance.now();
    for (let t = 0; t < this.animFrameCallbacks.length; ++t) this.animFrameCallbacks[t] && this.animFrameCallbacks[t](e, this._frameNum);
    for (let t = 0; t < this.animFrameOps.length; ++t) this.animFrameOps[t].onAnimFrame && this.animFrameOps[t].onAnimFrame(e);
    CGL.profileData.profileOnAnimFrameOps = performance.now() - i, this.emitEvent("onRenderFrame", e), this._frameNum++, 1 == this._frameNum && this.config.onFirstFrameRendered && this.config.onFirstFrameRendered()
  }, Nt.prototype.exec = function(t) {
    if (!this._renderOneFrame && (this._paused || this.aborted)) return;
    this.config.fpsLimit = this.config.fpsLimit || 0, this.config.fpsLimit && (this._frameInterval = 1e3 / this.config.fpsLimit);
    const e = CABLES.now(),
      i = e - this._frameNext;
    if (this.isEditorMode() && !this._renderOneFrame && e - this._lastFrameTime >= 500 && 0 !== this._lastFrameTime && !this._frameWasdelayed) return this._lastFrameTime = 0, setTimeout(this.exec.bind(this), 500), this.emitEvent("renderDelayStart"), void(this._frameWasdelayed = !0);
    if (this._renderOneFrame || 0 === this.config.fpsLimit || i > this._frameInterval || this._frameWasdelayed) {
      const t = CABLES.now();
      this.renderFrame(), this._perf._lastFrameTime = CABLES.now(), this._perf._fpsFrameCount++, this._perf._fpsMsCount += CABLES.now() - t, this._frameInterval && (this._frameNext = e - i % this._frameInterval)
    }
    this._frameWasdelayed && (this.emitEvent("renderDelayEnd"), this._frameWasdelayed = !1), this._renderOneFrame && (this.onOneFrameRendered && this.onOneFrameRendered(), this.emitEvent("renderedOneFrame"), this._renderOneFrame = !1), CABLES.now() - this._perf._fpsStart >= 1e3 && this._perf.fps != this._perf._fpsFrameCount && (this._perf.fps = this._perf._fpsFrameCount, this._perf.ms = Math.round(this._perf._fpsMsCount / this._perf._fpsFrameCount), this.emitEvent("performance", this._perf), this._perf._fpsFrameCount = 0, this._perf._fpsMsCount = 0, this._perf._fpsStart = CABLES.now()), this.config.doRequestAnimation && (this._animReq = requestAnimationFrame(this.exec.bind(this)))
  }, Nt.prototype.link = function(t, e, i, s, r) {
    if (!t) return void d.log("link: op1 is null ");
    if (!i) return void d.log("link: op2 is null");
    const n = t.getPort(e, r),
      o = i.getPort(s, r);
    if (n)
      if (o) {
        if (!n.shouldLink(n, o) || !o.shouldLink(n, o)) return !1;
        if (j.canLink(n, o)) {
          const t = new j(this);
          return t.link(n, o), this.emitEvent("onLink", n, o, t), t
        }
      } else console.warn("port not found! " + s + " of " + i.name + "(" + i.objName + ")");
    else console.warn("port not found! " + e + "(" + t.objName + ")")
  }, Nt.prototype.serialize = function(t) {
    const e = {
      ops: []
    };
    e.settings = this.settings;
    for (const t in this.ops) e.ops.push(this.ops[t].getSerialized());
    return t ? e : JSON.stringify(e)
  }, Nt.prototype.getOpById = function(t) {
    return this._opIdCache[t]
  }, Nt.prototype.getOpsById = function(t) {
    const e = [];
    for (const i in this.ops)
      for (let s = 0; s < t.length; s++)
        if (this.ops[i].id === t[s]) {
          e.push(this.ops[i]);
          break
        } return e
  }, Nt.prototype.getOpsByName = function(t) {
    const e = [];
    for (const i in this.ops) this.ops[i].name == t && e.push(this.ops[i]);
    return e
  }, Nt.prototype.getOpsByObjName = function(t) {
    const e = [];
    for (const i in this.ops) this.ops[i].objName == t && e.push(this.ops[i]);
    return e
  }, Nt.prototype.loadLib = function(t) {
    M("/ui/libs/" + t + ".js", (t, e) => {
      const i = document.createElement("script");
      i.type = "text/javascript", i.text = e, document.getElementsByTagName("head")[0].appendChild(i)
    }, "GET")
  }, Nt.prototype.reloadOp = function(t, e) {
    let i = 0;
    const s = [],
      r = [];
    for (const e in this.ops) this.ops[e].objName == t && r.push(this.ops[e]);
    for (let e = 0; e < r.length; e++) {
      i++;
      const n = r[e];
      n.deleted = !0;
      const o = this,
        h = this.addOp(t, n.uiAttribs);
      let a, l;
      for (a in s.push(h), n.portsIn)
        if (0 === n.portsIn[a].links.length) {
          const t = h.getPort(n.portsIn[a].name);
          t ? t.set(n.portsIn[a].get()) : d.error("[reloadOp] could not set port " + n.portsIn[a].name + ", propably renamed port ?")
        } else
          for (; n.portsIn[a].links.length;) {
            const t = n.portsIn[a].links[0].portIn.name,
              e = n.portsIn[a].links[0].portOut.name,
              i = n.portsIn[a].links[0].portOut.parent;
            n.portsIn[a].links[0].remove(), l = o.link(h, t, i, e), l ? l.setValue() : d.log("[reloadOp] relink after op reload not successfull for port " + e)
          }
      for (a in n.portsOut)
        for (; n.portsOut[a].links.length;) {
          const t = n.portsOut[a].links[0].portOut.name,
            e = n.portsOut[a].links[0].portIn.name,
            i = n.portsOut[a].links[0].portIn.parent;
          n.portsOut[a].links[0].remove(), l = o.link(h, t, i, e), l ? l.setValue() : d.log("relink after op reload not successfull for port " + e)
        }
      this.deleteOp(n.id, !1, !0)
    }
    e(i, s)
  }, Nt.prototype.getSubPatchOps = function(t) {
    const e = [];
    for (const i in this.ops) this.ops[i].uiAttribs && this.ops[i].uiAttribs.subPatch == t && e.push(this.ops[i]);
    return e
  }, Nt.prototype.getSubPatchOp = function(t, e) {
    for (const i in this.ops)
      if (this.ops[i].uiAttribs && this.ops[i].uiAttribs.subPatch == t && this.ops[i].objName == e) return this.ops[i];
    return !1
  }, Nt.prototype.deSerialize = function(t, e) {
    if (this.aborted) return;
    const i = this.loading.start("core", "deserialize");
    this.onLoadStart && this.onLoadStart(), this.namespace = t.namespace || "", this.name = t.name || "", "string" == typeof t && (t = JSON.parse(t));
    const s = this;
    this.settings = t.settings;
    const r = new Rt(this);
    for (const i in t.ops) {
      const s = CABLES.now(),
        n = t.ops[i];
      let o = null;
      try {
        o = n.opId ? this.addOp(n.opId, n.uiAttribs, n.id) : this.addOp(n.objName, n.uiAttribs, n.id)
      } catch (t) {
        throw console.warn("[instancing error] op data:", n, t), new Error("instancing error: " + n.objName)
      }
      if (r.checkOp(o), o) {
        e && (o.id = b()), o.portsInData = n.portsIn, o._origData = n;
        for (const t in n.portsIn) {
          const e = n.portsIn[t],
            i = o.getPort(e.name);
          if (!i || "bool" != i.uiAttribs.display && "bool" != i.uiAttribs.type || isNaN(e.value) || (e.value = !0 === e.value), i && void 0 !== e.value && i.type != k.OP.OP_PORT_TYPE_TEXTURE && i.set(e.value), i && e && e.animated && i.setAnimated(e.animated), i && e && e.useVariable && i.setVariableName(e.useVariable), i && e && e.anim) {
            i.anim || (i.anim = new K), e.anim.loop && (i.anim.loop = e.anim.loop);
            for (const t in e.anim.keys) i.anim.keys.push(new V.Key(e.anim.keys[t]))
          }
        }
        for (const e in n.portsOut) {
          const s = o.getPort(n.portsOut[e].name);
          s && s.type != k.OP.OP_PORT_TYPE_TEXTURE && n.portsOut[e].hasOwnProperty("value") && s.set(t.ops[i].portsOut[e].value)
        }
      }
      const h = Math.round(100 * (CABLES.now() - s)) / 100;
      !this.silent && h > 200 && console.warn("long op init ", t.ops[i].objName, h)
    }
    for (const t in this.ops) this.ops[t].onLoadedValueSet && (this.ops[t].onLoadedValueSet(this.ops[t]._origData), this.ops[t].onLoadedValueSet = null, this.ops[t]._origData = null);
    if (t.ops)
      for (let e = 0; e < t.ops.length; e++)
        if (t.ops[e].portsIn)
          for (let i = 0; i < t.ops[e].portsIn.length; i++)
            if (t.ops[e].portsIn[i].links)
              for (let r = 0; r < t.ops[e].portsIn[i].links.length; r++) t.ops[e].portsIn[i].links[r] && (n = t.ops[e].portsIn[i].links[r].objIn, o = t.ops[e].portsIn[i].links[r].objOut, h = t.ops[e].portsIn[i].links[r].portIn, a = t.ops[e].portsIn[i].links[r].portOut, s.link(s.getOpById(n), h, s.getOpById(o), a));
    var n, o, h, a;
    for (const t in this.ops) this.ops[t].onLoaded && (this.ops[t].onLoaded(), this.ops[t].onLoaded = null);
    for (const t in this.ops) this.ops[t].init && (this.ops[t].init(), this.ops[t].init = null);
    if (this.config.variables)
      for (const t in this.config.variables) this.setVarValue(t, this.config.variables[t]);
    for (const t in this.ops) this.ops[t].initVarPorts();
    setTimeout(() => {
      this.loading.finished(i)
    }, 100), this.config.onPatchLoaded && this.config.onPatchLoaded(this), this.onLoadEnd && this.onLoadEnd()
  }, Nt.prototype.profile = function(t) {
    this.profiler = new Pt;
    for (const e in this.ops) this.ops[e].profile(t)
  }, (Nt.Variable = function(t, e, i) {
    this._name = t, this._changeListeners = [], this.type = i, this.setValue(e)
  }).prototype.getValue = function() {
    return this._v
  }, Nt.Variable.prototype.getName = function() {
    return this._name
  }, Nt.Variable.prototype.setValue = function(t) {
    this._v = t;
    for (let e = 0; e < this._changeListeners.length; e++) this._changeListeners[e](t)
  }, Nt.Variable.prototype.addListener = function(t) {
    this._changeListeners.push(t)
  }, Nt.Variable.prototype.removeListener = function(t) {
    const e = this._changeListeners.indexOf(t);
    this._changeListeners.splice(e, 1)
  }, Nt.prototype.setVariable = function(t, e) {
    this._variables.hasOwnProperty(t) ? this._variables[t].setValue(e) : console.warn("variable " + t + " not found!")
  }, Nt.prototype._sortVars = function() {
    if (!this.isEditorMode()) return;
    const t = {};
    Object.keys(this._variables).sort().forEach(e => {
      t[e] = this._variables[e]
    }), this._variables = t
  }, Nt.prototype.hasVar = function(t) {
    return this._variables.hasOwnProperty("name")
  }, Nt.prototype.setVarValue = function(t, e) {
    return this._variables.hasOwnProperty(t) ? this._variables[t].setValue(e) : (this._variables[t] = new Nt.Variable(t, e), this._sortVars(), this.emitEvent("variablesChanged")), this._variables[t]
  }, Nt.prototype.getVarValue = function(t, e) {
    if (this._variables.hasOwnProperty(t)) return this._variables[t].getValue()
  }, Nt.prototype.getVar = function(t) {
    if (this._variables.hasOwnProperty(t)) return this._variables[t]
  }, Nt.prototype.getVars = function() {
    return this._variables
  }, Nt.prototype.deleteVar = function(t) {
    for (let e = 0; e < this.ops.length; e++)
      for (let i = 0; i < this.ops[e].portsIn.length; i++) this.ops[e].portsIn[i].getVariableName() == t && this.ops[e].portsIn[i].setVariable(null);
    delete this._variables[t], this.emitEvent("variableDeleted", t), this.emitEvent("variablesChanged")
  }, Nt.prototype.getVars = function() {
    return this._variables
  }, Nt.prototype.exitError = function(t, e, i) {
    if (this.aborted = !0, this && this.config && this.config.onError) this.config.onError(t, e);
    else if (!this.isEditorMode()) {
      const s = document.createElement("div"),
        r = this.cgl.canvas.getBoundingClientRect();
      s.setAttribute("style", "position:absolute;border:5px solid red;padding:15px;background-color:black;color:white;font-family:monospace;"), s.style.top = r.top + "px", s.style.left = r.left + "px";
      let n = "cables - An error occured:<br/>";
      n += "[" + t + "] - " + e, i && (n += "<br/>Exception: " + i.message), s.innerHTML = n;
      const o = this.cgl.canvas.parentElement;
      for (; o.hasChildNodes();) o.removeChild(o.lastChild);
      document.body.appendChild(s)
    }
  }, Nt.prototype.preRenderOps = function() {
    d.log("prerendering...");
    let t = null;
    CABLES.StopWatch && (t = new CABLES.StopWatch("prerendering"));
    for (let t = 0; t < this.ops.length; t++) this.ops[t].preRender && (this.ops[t].preRender(), d.log("prerender " + this.ops[t].objName));
    t && t.stop("prerendering")
  }, Nt.prototype.dispose = function() {
    this.pause(), this.clear()
  };
  var Ft = Nt;
  const St = {
      addPatch: function(t, e) {
        let i = t,
          s = y();
        if ("string" == typeof t && (s = t, i = document.getElementById(s), !i)) return void console.error(s + " Polyshape Container Element not found!");
        const r = document.createElement("canvas");
        return r.id = "glcanvas_" + s, r.width = i.clientWidth, r.height = i.clientHeight, window.addEventListener("resize", function() {
          this.setAttribute("width", i.clientWidth), this.height = i.clientHeight
        }.bind(r)), i.appendChild(r), (e = e || {}).glCanvasId = r.id, e.onError || (e.onError = function(t) {
          d.error(t)
        }), CABLES.patch = new Ft(e), r
      }
    },
    Mt = {
      toneJsInitialized: !1,
      createAudioContext: function(t) {
        if (window.AudioContext = window.AudioContext || window.webkitAudioContext, window.AudioContext) return window.audioContext || (window.audioContext = new AudioContext), window.Tone && !Mt.toneJsInitialized && (Tone.setContext(window.audioContext), Mt.toneJsInitialized = !0), window.audioContext;
        t.patch.config.onError("NO_WEBAUDIO", "Web Audio is not supported in this browser.")
      },
      getAudioContext: function() {
        return window.audioContext
      },
      createAudioInPort: function(t, e, i, s) {
        if (!t || !e || !i) {
          const e = "ERROR: createAudioInPort needs three parameters, op, portName and audioNode";
          throw t.log(e), new Error(e)
        }
        s || (s = 0), t.webAudio = t.webAudio || {}, t.webAudio.audioInPorts = t.webAudio.audioInPorts || [];
        const r = t.inObject(e);
        return r.webAudio = {}, r.webAudio.previousAudioInNode = null, r.webAudio.audioNode = i, t.webAudio.audioInPorts[e] = r, r.onChange = function() {
          const e = r.get();
          if (e) try {
            e.connect ? (e.connect(r.webAudio.audioNode, 0, s), t.setUiError("audioCtx", null)) : t.setUiError("audioCtx", "The passed input is not an audio context. Please make sure you connect an audio context to the input.", 2)
          } catch (i) {
            throw t.log("Error: Failed to connect web audio node!", i), t.log("port.webAudio.audioNode", r.webAudio.audioNode), t.log("audioInNode: ", e), t.log("inputChannelIndex:", s), t.log("audioInNode.connect: ", e.connect), i
          } else if (r.webAudio.previousAudioInNode) try {
            r.webAudio.previousAudioInNode.disconnect && r.webAudio.previousAudioInNode.disconnect(r.webAudio.audioNode, 0, s), t.setUiError("audioCtx", null)
          } catch (e) {
            try {
              r.webAudio.previousAudioInNode.disconnect(r.webAudio.audioNode)
            } catch (i) {
              throw t.log("Disconnecting audio node with in/out port index, as well as without in/out-port-index did not work ", e), e.printStackTrace && e.printStackTrace(), e
            }
          }
          r.webAudio.previousAudioInNode = e
        }, r
      },
      replaceNodeInPort: function(t, e, i) {
        const s = t.webAudio.previousAudioInNode;
        if (s && s.disconnect) {
          try {
            s.disconnect(e)
          } catch (t) {
            throw t.printStackTrace && t.printStackTrace(), new Error("replaceNodeInPort: Could not disconnect old audio node. " + t.name + " " + t.message)
          }
          t.webAudio.audioNode = i;
          try {
            s.connect(i)
          } catch (t) {
            throw t.printStackTrace && t.printStackTrace(), new Error("replaceNodeInPort: Could not connect to new node. " + t.name + " " + t.message)
          }
        }
      },
      createAudioOutPort: function(t, e, i) {
        if (!t || !e || !i) {
          const e = "ERROR: createAudioOutPort needs three parameters, op, portName and audioNode";
          throw t.log(e), new Error(e)
        }
        const s = t.outObject(e);
        return s.set(i), s
      },
      createAudioParamInPort: function(t, e, i, s, r) {
        if (!t || !e || !i) return t.log("ERROR: createAudioParamInPort needs three parameters, op, portName and audioNode"), t && t.name && t.log("opname: ", t.name), t.log("portName", e), void t.log("audioNode: ", i);
        t.webAudio = t.webAudio || {}, t.webAudio.audioInPorts = t.webAudio.audioInPorts || [];
        const n = t.inDynamic(e, [k.OP.OP_PORT_TYPE_VALUE, k.OP.OP_PORT_TYPE_OBJECT], s, r);
        return n.webAudio = {}, n.webAudio.previousAudioInNode = null, n.webAudio.audioNode = i, t.webAudio.audioInPorts[e] = n, n.onChange = function() {
          const e = n.get(),
            i = n.webAudio.audioNode,
            s = Mt.getAudioContext();
          if (null != e)
            if ("object" == typeof e && e.connect) {
              try {
                e.connect(i)
              } catch (e) {
                throw t.log("Could not connect audio node: ", e), e.printStackTrace && e.printStackTrace(), e
              }
              n.webAudio.previousAudioInNode = e
            } else {
              if (i._param && i._param.minValue && i._param.maxValue)
                if (e >= i._param.minValue && e <= i._param.maxValue) try {
                  i.setValueAtTime ? i.setValueAtTime(e, s.currentTime) : i.value = e
                } catch (e) {
                  throw t.log("Possible AudioParam problem with tone.js op: ", e), e.printStackTrace && e.printStackTrace(), e
                } else t.log("Warning: The value for an audio parameter is out of range!");
                else if (i.minValue && i.maxValue)
                if (e >= i.minValue && e <= i.maxValue) try {
                  i.setValueAtTime ? i.setValueAtTime(e, s.currentTime) : i.value = e
                } catch (e) {
                  throw t.log("AudioParam has minValue / maxValue defined, and value is in range, but setting the value failed! ", e), e.printStackTrace && e.printStackTrace(), e
                } else t.log("Warning: The value for an audio parameter is out of range!");
                else try {
                  i.setValueAtTime ? i.setValueAtTime(e, s.currentTime) : i.value = e
                } catch (e) {
                  throw t.log("Possible AudioParam problem (without minValue / maxValue): ", e), e.printStackTrace && e.printStackTrace(), e
                }
              if (n.webAudio.previousAudioInNode && n.webAudio.previousAudioInNode.disconnect) {
                try {
                  n.webAudio.previousAudioInNode.disconnect(i)
                } catch (e) {
                  throw t.log("Could not disconnect previous audio node: ", e), e
                }
                n.webAudio.previousAudioInNode = void 0
              }
            }
          else n.webAudio.previousAudioInNode
        }, n
      },
      loadAudioFile: function(t, e, i, s) {
        const r = Mt.createAudioContext(),
          n = t.loading.start("audio", e);
        t.isEditorMode() && gui.jobs().start({
          id: "loadaudio" + n,
          title: " loading audio (" + e + ")"
        });
        const o = new XMLHttpRequest;
        e && (o.open("GET", e, !0), o.responseType = "arraybuffer", o.onload = function() {
          t.loading.finished(n), t.isEditorMode() && gui.jobs().finish("loadaudio" + n), r.decodeAudioData(o.response, i, s)
        }, o.send())
      },
      isValidToneTime: function(t) {
        try {
          new Tone.Time(t)
        } catch (t) {
          return !1
        }
        return !0
      },
      isValidToneNote: function(t) {
        try {
          Tone.Frequency(t)
        } catch (t) {
          return !1
        }
        return !0
      }
    },
    Ct = function(t, e, i) {
      this._patch = t, this.connector = i
    };
  Ct.prototype._receive = function(t) {
    console.log("ev", t);
    let e = {};
    if (e = t.hasOwnProperty("event") ? t : JSON.parse(t.data), e.event == k.PACO.PACO_OP_CREATE) {
      if (d.log("op create: data.vars.objName"), this._patch.getOpById(e.vars.opId)) return;
      let t = null;
      window.gui ? gui.serverOps.loadOpLibs(e.vars.objName, () => {
        t = this._patch.addOp(e.vars.objName, null, e.vars.opId), t.id = e.vars.opId
      }) : (t = this._patch.addOp(e.vars.objName, null, e.vars.opId), t.id = e.vars.opId)
    } else if (e.event == k.PACO.PACO_LOAD) d.log("PACO load patch....."), this._patch.clear(), this._patch.deSerialize(e.vars.patch);
    else if (e.event == k.PACO.PACO_CLEAR) this._patch.clear(), d.log("clear");
    else if (e.event == k.PACO.PACO_OP_DELETE) d.log("op delete"), this._patch.deleteOp(e.vars.op, !0);
    else if (e.event == k.PACO.PACO_OP_ENABLE) {
      const t = this._patch.getOpById(e.vars.op);
      t && (t.enabled = !0)
    } else if (e.event == k.PACO.PACO_OP_DISABLE) {
      const t = this._patch.getOpById(e.vars.op);
      t && (t.enabled = !1)
    } else if (e.event == k.PACO.PACO_UNLINK) {
      const t = this._patch.getOpById(e.vars.op1),
        i = this._patch.getOpById(e.vars.op2);
      if (!t || !i) return void console.log("[paco] unlink op not found ");
      const s = t.getPort(e.vars.port1),
        r = i.getPort(e.vars.port2);
      s.removeLinkTo(r)
    } else if (e.event == k.PACO.PACO_LINK) {
      const t = this._patch.getOpById(e.vars.op1),
        i = this._patch.getOpById(e.vars.op2);
      this._patch.link(t, e.vars.port1, i, e.vars.port2)
    } else if (e.event == k.PACO.PACO_VALUECHANGE) {
      this._patch.getOpById(e.vars.op).getPort(e.vars.port).set(e.vars.v)
    } else d.log("unknown patchConnectionEvent!", t)
  };
  const wt = function(t) {
    this.connectors = [], t.addEventListener("onOpDelete", t => {
      this.send(CABLES.PACO_OP_DELETE, {
        op: t.id
      })
    }), t.addEventListener("onOpAdd", t => {
      this.send(CABLES.PACO_OP_CREATE, {
        opId: t.id,
        objName: t.objName
      })
    }), t.addEventListener("onUnLink", (t, e) => {
      this.send(CABLES.PACO_UNLINK, {
        op1: t.parent.id,
        op2: e.parent.id,
        port1: t.getName(),
        port2: e.getName()
      })
    }), t.addEventListener("onLink", (t, e) => {
      this.send(CABLES.PACO_LINK, {
        op1: t.parent.id,
        op2: e.parent.id,
        port1: t.name,
        port2: e.name
      })
    })
  };
  wt.prototype.send = function(t, e) {
    for (let i = 0; i < this.connectors.length; i++) this.connectors[i].send(t, e)
  };
  const kt = function() {
    window.BroadcastChannel && (this.bc = new BroadcastChannel("test_channel"))
  };
  kt.prototype.receive = function(t) {
    this.bc && (d.log("init"), this.bc.onmessage = t._receive.bind(t))
  }, kt.prototype.send = function(t, e) {
    if (!this.bc) return;
    const i = {};
    i.event = t, i.vars = e, this.bc.postMessage(JSON.stringify(i))
  };
  const Ut = Object.assign({
    EventTarget: _,
    EMBED: St,
    Link: j,
    Port: U,
    Op: q,
    Profiler: Pt,
    Requirements: Rt,
    Patch: Ft,
    Instancing: vt,
    Timer: pt,
    WEBAUDIO: Mt,
    Variable: function() {
      let t = null;
      const e = [];
      this.onChanged = function(t) {
        e.push(t)
      }, this.getValue = function() {
        return t
      }, this.setValue = function(e) {
        t = e, this.emitChanged()
      }, this.emitChanged = function() {
        for (let t = 0; t < e.length; t++) e[t]()
      }
    },
    LoadingStatus: It,
    now: ct,
    internalNow: ut
  }, s, r, n, k.ANIM, o, k.PORT, k.PACO, k.ANIM, k.OP);
  Ut.build = i(1);
  e.default = Ut;
  (function() {
    return !this
  })() || console.log("not in strict mode: index core")
}]).default;
//# sourceMappingURL=cables.min.js.map
/*!
@fileoverview gl-matrix - High performance matrix and vector operations
@author Brandon Jones
@author Colin MacKenzie IV
@version 3.1.0

Copyright (c) 2015-2019, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
! function(t, n) {
  "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n((t = t || self).glMatrix = {})
}(this, function(t) {
  "use strict";
  var n = 1e-6,
    a = "undefined" != typeof Float32Array ? Float32Array : Array,
    r = Math.random;
  var u = Math.PI / 180;
  Math.hypot || (Math.hypot = function() {
    for (var t = 0, n = arguments.length; n--;) t += arguments[n] * arguments[n];
    return Math.sqrt(t)
  });
  var e = Object.freeze({
    EPSILON: n,
    get ARRAY_TYPE() {
      return a
    },
    RANDOM: r,
    setMatrixArrayType: function(t) {
      a = t
    },
    toRadian: function(t) {
      return t * u
    },
    equals: function(t, a) {
      return Math.abs(t - a) <= n * Math.max(1, Math.abs(t), Math.abs(a))
    }
  });

  function o(t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = a[0],
      c = a[1],
      h = a[2],
      s = a[3];
    return t[0] = r * i + e * c, t[1] = u * i + o * c, t[2] = r * h + e * s, t[3] = u * h + o * s, t
  }

  function i(t, n, a) {
    return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t
  }
  var c = o,
    h = i,
    s = Object.freeze({
      create: function() {
        var t = new a(4);
        return a != Float32Array && (t[1] = 0, t[2] = 0), t[0] = 1, t[3] = 1, t
      },
      clone: function(t) {
        var n = new a(4);
        return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n
      },
      copy: function(t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t
      },
      identity: function(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
      },
      fromValues: function(t, n, r, u) {
        var e = new a(4);
        return e[0] = t, e[1] = n, e[2] = r, e[3] = u, e
      },
      set: function(t, n, a, r, u) {
        return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t
      },
      transpose: function(t, n) {
        if (t === n) {
          var a = n[1];
          t[1] = n[2], t[2] = a
        } else t[0] = n[0], t[1] = n[2], t[2] = n[1], t[3] = n[3];
        return t
      },
      invert: function(t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = a * e - u * r;
        return o ? (o = 1 / o, t[0] = e * o, t[1] = -r * o, t[2] = -u * o, t[3] = a * o, t) : null
      },
      adjoint: function(t, n) {
        var a = n[0];
        return t[0] = n[3], t[1] = -n[1], t[2] = -n[2], t[3] = a, t
      },
      determinant: function(t) {
        return t[0] * t[3] - t[2] * t[1]
      },
      multiply: o,
      rotate: function(t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = Math.sin(a),
          c = Math.cos(a);
        return t[0] = r * c + e * i, t[1] = u * c + o * i, t[2] = r * -i + e * c, t[3] = u * -i + o * c, t
      },
      scale: function(t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = a[0],
          c = a[1];
        return t[0] = r * i, t[1] = u * i, t[2] = e * c, t[3] = o * c, t
      },
      fromRotation: function(t, n) {
        var a = Math.sin(n),
          r = Math.cos(n);
        return t[0] = r, t[1] = a, t[2] = -a, t[3] = r, t
      },
      fromScaling: function(t, n) {
        return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = n[1], t
      },
      str: function(t) {
        return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
      },
      frob: function(t) {
        return Math.hypot(t[0], t[1], t[2], t[3])
      },
      LDU: function(t, n, a, r) {
        return t[2] = r[2] / r[0], a[0] = r[0], a[1] = r[1], a[3] = r[3] - t[2] * a[1], [t, n, a]
      },
      add: function(t, n, a) {
        return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t
      },
      subtract: i,
      exactEquals: function(t, n) {
        return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3]
      },
      equals: function(t, a) {
        var r = t[0],
          u = t[1],
          e = t[2],
          o = t[3],
          i = a[0],
          c = a[1],
          h = a[2],
          s = a[3];
        return Math.abs(r - i) <= n * Math.max(1, Math.abs(r), Math.abs(i)) && Math.abs(u - c) <= n * Math.max(1, Math.abs(u), Math.abs(c)) && Math.abs(e - h) <= n * Math.max(1, Math.abs(e), Math.abs(h)) && Math.abs(o - s) <= n * Math.max(1, Math.abs(o), Math.abs(s))
      },
      multiplyScalar: function(t, n, a) {
        return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t
      },
      multiplyScalarAndAdd: function(t, n, a, r) {
        return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t
      },
      mul: c,
      sub: h
    });

  function M(t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = n[4],
      c = n[5],
      h = a[0],
      s = a[1],
      M = a[2],
      f = a[3],
      l = a[4],
      v = a[5];
    return t[0] = r * h + e * s, t[1] = u * h + o * s, t[2] = r * M + e * f, t[3] = u * M + o * f, t[4] = r * l + e * v + i, t[5] = u * l + o * v + c, t
  }

  function f(t, n, a) {
    return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t[4] = n[4] - a[4], t[5] = n[5] - a[5], t
  }
  var l = M,
    v = f,
    b = Object.freeze({
      create: function() {
        var t = new a(6);
        return a != Float32Array && (t[1] = 0, t[2] = 0, t[4] = 0, t[5] = 0), t[0] = 1, t[3] = 1, t
      },
      clone: function(t) {
        var n = new a(6);
        return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n
      },
      copy: function(t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t
      },
      identity: function(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
      },
      fromValues: function(t, n, r, u, e, o) {
        var i = new a(6);
        return i[0] = t, i[1] = n, i[2] = r, i[3] = u, i[4] = e, i[5] = o, i
      },
      set: function(t, n, a, r, u, e, o) {
        return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t[4] = e, t[5] = o, t
      },
      invert: function(t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = n[4],
          i = n[5],
          c = a * e - r * u;
        return c ? (c = 1 / c, t[0] = e * c, t[1] = -r * c, t[2] = -u * c, t[3] = a * c, t[4] = (u * i - e * o) * c, t[5] = (r * o - a * i) * c, t) : null
      },
      determinant: function(t) {
        return t[0] * t[3] - t[1] * t[2]
      },
      multiply: M,
      rotate: function(t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          h = Math.sin(a),
          s = Math.cos(a);
        return t[0] = r * s + e * h, t[1] = u * s + o * h, t[2] = r * -h + e * s, t[3] = u * -h + o * s, t[4] = i, t[5] = c, t
      },
      scale: function(t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          h = a[0],
          s = a[1];
        return t[0] = r * h, t[1] = u * h, t[2] = e * s, t[3] = o * s, t[4] = i, t[5] = c, t
      },
      translate: function(t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          h = a[0],
          s = a[1];
        return t[0] = r, t[1] = u, t[2] = e, t[3] = o, t[4] = r * h + e * s + i, t[5] = u * h + o * s + c, t
      },
      fromRotation: function(t, n) {
        var a = Math.sin(n),
          r = Math.cos(n);
        return t[0] = r, t[1] = a, t[2] = -a, t[3] = r, t[4] = 0, t[5] = 0, t
      },
      fromScaling: function(t, n) {
        return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = n[1], t[4] = 0, t[5] = 0, t
      },
      fromTranslation: function(t, n) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = n[0], t[5] = n[1], t
      },
      str: function(t) {
        return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")"
      },
      frob: function(t) {
        return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], 1)
      },
      add: function(t, n, a) {
        return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t[4] = n[4] + a[4], t[5] = n[5] + a[5], t
      },
      subtract: f,
      multiplyScalar: function(t, n, a) {
        return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t[4] = n[4] * a, t[5] = n[5] * a, t
      },
      multiplyScalarAndAdd: function(t, n, a, r) {
        return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t[4] = n[4] + a[4] * r, t[5] = n[5] + a[5] * r, t
      },
      exactEquals: function(t, n) {
        return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5]
      },
      equals: function(t, a) {
        var r = t[0],
          u = t[1],
          e = t[2],
          o = t[3],
          i = t[4],
          c = t[5],
          h = a[0],
          s = a[1],
          M = a[2],
          f = a[3],
          l = a[4],
          v = a[5];
        return Math.abs(r - h) <= n * Math.max(1, Math.abs(r), Math.abs(h)) && Math.abs(u - s) <= n * Math.max(1, Math.abs(u), Math.abs(s)) && Math.abs(e - M) <= n * Math.max(1, Math.abs(e), Math.abs(M)) && Math.abs(o - f) <= n * Math.max(1, Math.abs(o), Math.abs(f)) && Math.abs(i - l) <= n * Math.max(1, Math.abs(i), Math.abs(l)) && Math.abs(c - v) <= n * Math.max(1, Math.abs(c), Math.abs(v))
      },
      mul: l,
      sub: v
    });

  function m() {
    var t = new a(9);
    return a != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[5] = 0, t[6] = 0, t[7] = 0), t[0] = 1, t[4] = 1, t[8] = 1, t
  }

  function d(t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = n[4],
      c = n[5],
      h = n[6],
      s = n[7],
      M = n[8],
      f = a[0],
      l = a[1],
      v = a[2],
      b = a[3],
      m = a[4],
      d = a[5],
      x = a[6],
      p = a[7],
      y = a[8];
    return t[0] = f * r + l * o + v * h, t[1] = f * u + l * i + v * s, t[2] = f * e + l * c + v * M, t[3] = b * r + m * o + d * h, t[4] = b * u + m * i + d * s, t[5] = b * e + m * c + d * M, t[6] = x * r + p * o + y * h, t[7] = x * u + p * i + y * s, t[8] = x * e + p * c + y * M, t
  }

  function x(t, n, a) {
    return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t[4] = n[4] - a[4], t[5] = n[5] - a[5], t[6] = n[6] - a[6], t[7] = n[7] - a[7], t[8] = n[8] - a[8], t
  }
  var p = d,
    y = x,
    q = Object.freeze({
      create: m,
      fromMat4: function(t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[4], t[4] = n[5], t[5] = n[6], t[6] = n[8], t[7] = n[9], t[8] = n[10], t
      },
      clone: function(t) {
        var n = new a(9);
        return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n
      },
      copy: function(t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t
      },
      fromValues: function(t, n, r, u, e, o, i, c, h) {
        var s = new a(9);
        return s[0] = t, s[1] = n, s[2] = r, s[3] = u, s[4] = e, s[5] = o, s[6] = i, s[7] = c, s[8] = h, s
      },
      set: function(t, n, a, r, u, e, o, i, c, h) {
        return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t[4] = e, t[5] = o, t[6] = i, t[7] = c, t[8] = h, t
      },
      identity: function(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
      },
      transpose: function(t, n) {
        if (t === n) {
          var a = n[1],
            r = n[2],
            u = n[5];
          t[1] = n[3], t[2] = n[6], t[3] = a, t[5] = n[7], t[6] = r, t[7] = u
        } else t[0] = n[0], t[1] = n[3], t[2] = n[6], t[3] = n[1], t[4] = n[4], t[5] = n[7], t[6] = n[2], t[7] = n[5], t[8] = n[8];
        return t
      },
      invert: function(t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = n[4],
          i = n[5],
          c = n[6],
          h = n[7],
          s = n[8],
          M = s * o - i * h,
          f = -s * e + i * c,
          l = h * e - o * c,
          v = a * M + r * f + u * l;
        return v ? (v = 1 / v, t[0] = M * v, t[1] = (-s * r + u * h) * v, t[2] = (i * r - u * o) * v, t[3] = f * v, t[4] = (s * a - u * c) * v, t[5] = (-i * a + u * e) * v, t[6] = l * v, t[7] = (-h * a + r * c) * v, t[8] = (o * a - r * e) * v, t) : null
      },
      adjoint: function(t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = n[4],
          i = n[5],
          c = n[6],
          h = n[7],
          s = n[8];
        return t[0] = o * s - i * h, t[1] = u * h - r * s, t[2] = r * i - u * o, t[3] = i * c - e * s, t[4] = a * s - u * c, t[5] = u * e - a * i, t[6] = e * h - o * c, t[7] = r * c - a * h, t[8] = a * o - r * e, t
      },
      determinant: function(t) {
        var n = t[0],
          a = t[1],
          r = t[2],
          u = t[3],
          e = t[4],
          o = t[5],
          i = t[6],
          c = t[7],
          h = t[8];
        return n * (h * e - o * c) + a * (-h * u + o * i) + r * (c * u - e * i)
      },
      multiply: d,
      translate: function(t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          h = n[6],
          s = n[7],
          M = n[8],
          f = a[0],
          l = a[1];
        return t[0] = r, t[1] = u, t[2] = e, t[3] = o, t[4] = i, t[5] = c, t[6] = f * r + l * o + h, t[7] = f * u + l * i + s, t[8] = f * e + l * c + M, t
      },
      rotate: function(t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          h = n[6],
          s = n[7],
          M = n[8],
          f = Math.sin(a),
          l = Math.cos(a);
        return t[0] = l * r + f * o, t[1] = l * u + f * i, t[2] = l * e + f * c, t[3] = l * o - f * r, t[4] = l * i - f * u, t[5] = l * c - f * e, t[6] = h, t[7] = s, t[8] = M, t
      },
      scale: function(t, n, a) {
        var r = a[0],
          u = a[1];
        return t[0] = r * n[0], t[1] = r * n[1], t[2] = r * n[2], t[3] = u * n[3], t[4] = u * n[4], t[5] = u * n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t
      },
      fromTranslation: function(t, n) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = n[0], t[7] = n[1], t[8] = 1, t
      },
      fromRotation: function(t, n) {
        var a = Math.sin(n),
          r = Math.cos(n);
        return t[0] = r, t[1] = a, t[2] = 0, t[3] = -a, t[4] = r, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
      },
      fromScaling: function(t, n) {
        return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = n[1], t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
      },
      fromMat2d: function(t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = 0, t[3] = n[2], t[4] = n[3], t[5] = 0, t[6] = n[4], t[7] = n[5], t[8] = 1, t
      },
      fromQuat: function(t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = a + a,
          i = r + r,
          c = u + u,
          h = a * o,
          s = r * o,
          M = r * i,
          f = u * o,
          l = u * i,
          v = u * c,
          b = e * o,
          m = e * i,
          d = e * c;
        return t[0] = 1 - M - v, t[3] = s - d, t[6] = f + m, t[1] = s + d, t[4] = 1 - h - v, t[7] = l - b, t[2] = f - m, t[5] = l + b, t[8] = 1 - h - M, t
      },
      normalFromMat4: function(t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = n[4],
          i = n[5],
          c = n[6],
          h = n[7],
          s = n[8],
          M = n[9],
          f = n[10],
          l = n[11],
          v = n[12],
          b = n[13],
          m = n[14],
          d = n[15],
          x = a * i - r * o,
          p = a * c - u * o,
          y = a * h - e * o,
          q = r * c - u * i,
          g = r * h - e * i,
          A = u * h - e * c,
          w = s * b - M * v,
          R = s * m - f * v,
          z = s * d - l * v,
          P = M * m - f * b,
          j = M * d - l * b,
          I = f * d - l * m,
          S = x * I - p * j + y * P + q * z - g * R + A * w;
        return S ? (S = 1 / S, t[0] = (i * I - c * j + h * P) * S, t[1] = (c * z - o * I - h * R) * S, t[2] = (o * j - i * z + h * w) * S, t[3] = (u * j - r * I - e * P) * S, t[4] = (a * I - u * z + e * R) * S, t[5] = (r * z - a * j - e * w) * S, t[6] = (b * A - m * g + d * q) * S, t[7] = (m * y - v * A - d * p) * S, t[8] = (v * g - b * y + d * x) * S, t) : null
      },
      projection: function(t, n, a) {
        return t[0] = 2 / n, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = -2 / a, t[5] = 0, t[6] = -1, t[7] = 1, t[8] = 1, t
      },
      str: function(t) {
        return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")"
      },
      frob: function(t) {
        return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8])
      },
      add: function(t, n, a) {
        return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t[4] = n[4] + a[4], t[5] = n[5] + a[5], t[6] = n[6] + a[6], t[7] = n[7] + a[7], t[8] = n[8] + a[8], t
      },
      subtract: x,
      multiplyScalar: function(t, n, a) {
        return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t[4] = n[4] * a, t[5] = n[5] * a, t[6] = n[6] * a, t[7] = n[7] * a, t[8] = n[8] * a, t
      },
      multiplyScalarAndAdd: function(t, n, a, r) {
        return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t[4] = n[4] + a[4] * r, t[5] = n[5] + a[5] * r, t[6] = n[6] + a[6] * r, t[7] = n[7] + a[7] * r, t[8] = n[8] + a[8] * r, t
      },
      exactEquals: function(t, n) {
        return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7] && t[8] === n[8]
      },
      equals: function(t, a) {
        var r = t[0],
          u = t[1],
          e = t[2],
          o = t[3],
          i = t[4],
          c = t[5],
          h = t[6],
          s = t[7],
          M = t[8],
          f = a[0],
          l = a[1],
          v = a[2],
          b = a[3],
          m = a[4],
          d = a[5],
          x = a[6],
          p = a[7],
          y = a[8];
        return Math.abs(r - f) <= n * Math.max(1, Math.abs(r), Math.abs(f)) && Math.abs(u - l) <= n * Math.max(1, Math.abs(u), Math.abs(l)) && Math.abs(e - v) <= n * Math.max(1, Math.abs(e), Math.abs(v)) && Math.abs(o - b) <= n * Math.max(1, Math.abs(o), Math.abs(b)) && Math.abs(i - m) <= n * Math.max(1, Math.abs(i), Math.abs(m)) && Math.abs(c - d) <= n * Math.max(1, Math.abs(c), Math.abs(d)) && Math.abs(h - x) <= n * Math.max(1, Math.abs(h), Math.abs(x)) && Math.abs(s - p) <= n * Math.max(1, Math.abs(s), Math.abs(p)) && Math.abs(M - y) <= n * Math.max(1, Math.abs(M), Math.abs(y))
      },
      mul: p,
      sub: y
    });

  function g(t) {
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
  }

  function A(t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = n[4],
      c = n[5],
      h = n[6],
      s = n[7],
      M = n[8],
      f = n[9],
      l = n[10],
      v = n[11],
      b = n[12],
      m = n[13],
      d = n[14],
      x = n[15],
      p = a[0],
      y = a[1],
      q = a[2],
      g = a[3];
    return t[0] = p * r + y * i + q * M + g * b, t[1] = p * u + y * c + q * f + g * m, t[2] = p * e + y * h + q * l + g * d, t[3] = p * o + y * s + q * v + g * x, p = a[4], y = a[5], q = a[6], g = a[7], t[4] = p * r + y * i + q * M + g * b, t[5] = p * u + y * c + q * f + g * m, t[6] = p * e + y * h + q * l + g * d, t[7] = p * o + y * s + q * v + g * x, p = a[8], y = a[9], q = a[10], g = a[11], t[8] = p * r + y * i + q * M + g * b, t[9] = p * u + y * c + q * f + g * m, t[10] = p * e + y * h + q * l + g * d, t[11] = p * o + y * s + q * v + g * x, p = a[12], y = a[13], q = a[14], g = a[15], t[12] = p * r + y * i + q * M + g * b, t[13] = p * u + y * c + q * f + g * m, t[14] = p * e + y * h + q * l + g * d, t[15] = p * o + y * s + q * v + g * x, t
  }

  function w(t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = r + r,
      c = u + u,
      h = e + e,
      s = r * i,
      M = r * c,
      f = r * h,
      l = u * c,
      v = u * h,
      b = e * h,
      m = o * i,
      d = o * c,
      x = o * h;
    return t[0] = 1 - (l + b), t[1] = M + x, t[2] = f - d, t[3] = 0, t[4] = M - x, t[5] = 1 - (s + b), t[6] = v + m, t[7] = 0, t[8] = f + d, t[9] = v - m, t[10] = 1 - (s + l), t[11] = 0, t[12] = a[0], t[13] = a[1], t[14] = a[2], t[15] = 1, t
  }

  function R(t, n) {
    return t[0] = n[12], t[1] = n[13], t[2] = n[14], t
  }

  function z(t, n) {
    var a = n[0],
      r = n[1],
      u = n[2],
      e = n[4],
      o = n[5],
      i = n[6],
      c = n[8],
      h = n[9],
      s = n[10];
    return t[0] = Math.hypot(a, r, u), t[1] = Math.hypot(e, o, i), t[2] = Math.hypot(c, h, s), t
  }

  function P(t, n) {
    var r = new a(3);
    z(r, n);
    var u = 1 / r[0],
      e = 1 / r[1],
      o = 1 / r[2],
      i = n[0] * u,
      c = n[1] * e,
      h = n[2] * o,
      s = n[4] * u,
      M = n[5] * e,
      f = n[6] * o,
      l = n[8] * u,
      v = n[9] * e,
      b = n[10] * o,
      m = i + M + b,
      d = 0;
    return m > 0 ? (d = 2 * Math.sqrt(m + 1), t[3] = .25 * d, t[0] = (f - v) / d, t[1] = (l - h) / d, t[2] = (c - s) / d) : i > M && i > b ? (d = 2 * Math.sqrt(1 + i - M - b), t[3] = (f - v) / d, t[0] = .25 * d, t[1] = (c + s) / d, t[2] = (l + h) / d) : M > b ? (d = 2 * Math.sqrt(1 + M - i - b), t[3] = (l - h) / d, t[0] = (c + s) / d, t[1] = .25 * d, t[2] = (f + v) / d) : (d = 2 * Math.sqrt(1 + b - i - M), t[3] = (c - s) / d, t[0] = (l + h) / d, t[1] = (f + v) / d, t[2] = .25 * d), t
  }

  function j(t, n, a) {
    return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t[4] = n[4] - a[4], t[5] = n[5] - a[5], t[6] = n[6] - a[6], t[7] = n[7] - a[7], t[8] = n[8] - a[8], t[9] = n[9] - a[9], t[10] = n[10] - a[10], t[11] = n[11] - a[11], t[12] = n[12] - a[12], t[13] = n[13] - a[13], t[14] = n[14] - a[14], t[15] = n[15] - a[15], t
  }
  var I = A,
    S = j,
    E = Object.freeze({
      create: function() {
        var t = new a(16);
        return a != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0), t[0] = 1, t[5] = 1, t[10] = 1, t[15] = 1, t
      },
      clone: function(t) {
        var n = new a(16);
        return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n[9] = t[9], n[10] = t[10], n[11] = t[11], n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15], n
      },
      copy: function(t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t
      },
      fromValues: function(t, n, r, u, e, o, i, c, h, s, M, f, l, v, b, m) {
        var d = new a(16);
        return d[0] = t, d[1] = n, d[2] = r, d[3] = u, d[4] = e, d[5] = o, d[6] = i, d[7] = c, d[8] = h, d[9] = s, d[10] = M, d[11] = f, d[12] = l, d[13] = v, d[14] = b, d[15] = m, d
      },
      set: function(t, n, a, r, u, e, o, i, c, h, s, M, f, l, v, b, m) {
        return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t[4] = e, t[5] = o, t[6] = i, t[7] = c, t[8] = h, t[9] = s, t[10] = M, t[11] = f, t[12] = l, t[13] = v, t[14] = b, t[15] = m, t
      },
      identity: g,
      transpose: function(t, n) {
        if (t === n) {
          var a = n[1],
            r = n[2],
            u = n[3],
            e = n[6],
            o = n[7],
            i = n[11];
          t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = a, t[6] = n[9], t[7] = n[13], t[8] = r, t[9] = e, t[11] = n[14], t[12] = u, t[13] = o, t[14] = i
        } else t[0] = n[0], t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = n[1], t[5] = n[5], t[6] = n[9], t[7] = n[13], t[8] = n[2], t[9] = n[6], t[10] = n[10], t[11] = n[14], t[12] = n[3], t[13] = n[7], t[14] = n[11], t[15] = n[15];
        return t
      },
      invert: function(t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = n[4],
          i = n[5],
          c = n[6],
          h = n[7],
          s = n[8],
          M = n[9],
          f = n[10],
          l = n[11],
          v = n[12],
          b = n[13],
          m = n[14],
          d = n[15],
          x = a * i - r * o,
          p = a * c - u * o,
          y = a * h - e * o,
          q = r * c - u * i,
          g = r * h - e * i,
          A = u * h - e * c,
          w = s * b - M * v,
          R = s * m - f * v,
          z = s * d - l * v,
          P = M * m - f * b,
          j = M * d - l * b,
          I = f * d - l * m,
          S = x * I - p * j + y * P + q * z - g * R + A * w;
        return S ? (S = 1 / S, t[0] = (i * I - c * j + h * P) * S, t[1] = (u * j - r * I - e * P) * S, t[2] = (b * A - m * g + d * q) * S, t[3] = (f * g - M * A - l * q) * S, t[4] = (c * z - o * I - h * R) * S, t[5] = (a * I - u * z + e * R) * S, t[6] = (m * y - v * A - d * p) * S, t[7] = (s * A - f * y + l * p) * S, t[8] = (o * j - i * z + h * w) * S, t[9] = (r * z - a * j - e * w) * S, t[10] = (v * g - b * y + d * x) * S, t[11] = (M * y - s * g - l * x) * S, t[12] = (i * R - o * P - c * w) * S, t[13] = (a * P - r * R + u * w) * S, t[14] = (b * p - v * q - m * x) * S, t[15] = (s * q - M * p + f * x) * S, t) : null
      },
      adjoint: function(t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = n[4],
          i = n[5],
          c = n[6],
          h = n[7],
          s = n[8],
          M = n[9],
          f = n[10],
          l = n[11],
          v = n[12],
          b = n[13],
          m = n[14],
          d = n[15];
        return t[0] = i * (f * d - l * m) - M * (c * d - h * m) + b * (c * l - h * f), t[1] = -(r * (f * d - l * m) - M * (u * d - e * m) + b * (u * l - e * f)), t[2] = r * (c * d - h * m) - i * (u * d - e * m) + b * (u * h - e * c), t[3] = -(r * (c * l - h * f) - i * (u * l - e * f) + M * (u * h - e * c)), t[4] = -(o * (f * d - l * m) - s * (c * d - h * m) + v * (c * l - h * f)), t[5] = a * (f * d - l * m) - s * (u * d - e * m) + v * (u * l - e * f), t[6] = -(a * (c * d - h * m) - o * (u * d - e * m) + v * (u * h - e * c)), t[7] = a * (c * l - h * f) - o * (u * l - e * f) + s * (u * h - e * c), t[8] = o * (M * d - l * b) - s * (i * d - h * b) + v * (i * l - h * M), t[9] = -(a * (M * d - l * b) - s * (r * d - e * b) + v * (r * l - e * M)), t[10] = a * (i * d - h * b) - o * (r * d - e * b) + v * (r * h - e * i), t[11] = -(a * (i * l - h * M) - o * (r * l - e * M) + s * (r * h - e * i)), t[12] = -(o * (M * m - f * b) - s * (i * m - c * b) + v * (i * f - c * M)), t[13] = a * (M * m - f * b) - s * (r * m - u * b) + v * (r * f - u * M), t[14] = -(a * (i * m - c * b) - o * (r * m - u * b) + v * (r * c - u * i)), t[15] = a * (i * f - c * M) - o * (r * f - u * M) + s * (r * c - u * i), t
      },
      determinant: function(t) {
        var n = t[0],
          a = t[1],
          r = t[2],
          u = t[3],
          e = t[4],
          o = t[5],
          i = t[6],
          c = t[7],
          h = t[8],
          s = t[9],
          M = t[10],
          f = t[11],
          l = t[12],
          v = t[13],
          b = t[14],
          m = t[15];
        return (n * o - a * e) * (M * m - f * b) - (n * i - r * e) * (s * m - f * v) + (n * c - u * e) * (s * b - M * v) + (a * i - r * o) * (h * m - f * l) - (a * c - u * o) * (h * b - M * l) + (r * c - u * i) * (h * v - s * l)
      },
      multiply: A,
      translate: function(t, n, a) {
        var r, u, e, o, i, c, h, s, M, f, l, v, b = a[0],
          m = a[1],
          d = a[2];
        return n === t ? (t[12] = n[0] * b + n[4] * m + n[8] * d + n[12], t[13] = n[1] * b + n[5] * m + n[9] * d + n[13], t[14] = n[2] * b + n[6] * m + n[10] * d + n[14], t[15] = n[3] * b + n[7] * m + n[11] * d + n[15]) : (r = n[0], u = n[1], e = n[2], o = n[3], i = n[4], c = n[5], h = n[6], s = n[7], M = n[8], f = n[9], l = n[10], v = n[11], t[0] = r, t[1] = u, t[2] = e, t[3] = o, t[4] = i, t[5] = c, t[6] = h, t[7] = s, t[8] = M, t[9] = f, t[10] = l, t[11] = v, t[12] = r * b + i * m + M * d + n[12], t[13] = u * b + c * m + f * d + n[13], t[14] = e * b + h * m + l * d + n[14], t[15] = o * b + s * m + v * d + n[15]), t
      },
      scale: function(t, n, a) {
        var r = a[0],
          u = a[1],
          e = a[2];
        return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t[4] = n[4] * u, t[5] = n[5] * u, t[6] = n[6] * u, t[7] = n[7] * u, t[8] = n[8] * e, t[9] = n[9] * e, t[10] = n[10] * e, t[11] = n[11] * e, t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t
      },
      rotate: function(t, a, r, u) {
        var e, o, i, c, h, s, M, f, l, v, b, m, d, x, p, y, q, g, A, w, R, z, P, j, I = u[0],
          S = u[1],
          E = u[2],
          O = Math.hypot(I, S, E);
        return O < n ? null : (I *= O = 1 / O, S *= O, E *= O, e = Math.sin(r), i = 1 - (o = Math.cos(r)), c = a[0], h = a[1], s = a[2], M = a[3], f = a[4], l = a[5], v = a[6], b = a[7], m = a[8], d = a[9], x = a[10], p = a[11], y = I * I * i + o, q = S * I * i + E * e, g = E * I * i - S * e, A = I * S * i - E * e, w = S * S * i + o, R = E * S * i + I * e, z = I * E * i + S * e, P = S * E * i - I * e, j = E * E * i + o, t[0] = c * y + f * q + m * g, t[1] = h * y + l * q + d * g, t[2] = s * y + v * q + x * g, t[3] = M * y + b * q + p * g, t[4] = c * A + f * w + m * R, t[5] = h * A + l * w + d * R, t[6] = s * A + v * w + x * R, t[7] = M * A + b * w + p * R, t[8] = c * z + f * P + m * j, t[9] = h * z + l * P + d * j, t[10] = s * z + v * P + x * j, t[11] = M * z + b * P + p * j, a !== t && (t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15]), t)
      },
      rotateX: function(t, n, a) {
        var r = Math.sin(a),
          u = Math.cos(a),
          e = n[4],
          o = n[5],
          i = n[6],
          c = n[7],
          h = n[8],
          s = n[9],
          M = n[10],
          f = n[11];
        return n !== t && (t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[4] = e * u + h * r, t[5] = o * u + s * r, t[6] = i * u + M * r, t[7] = c * u + f * r, t[8] = h * u - e * r, t[9] = s * u - o * r, t[10] = M * u - i * r, t[11] = f * u - c * r, t
      },
      rotateY: function(t, n, a) {
        var r = Math.sin(a),
          u = Math.cos(a),
          e = n[0],
          o = n[1],
          i = n[2],
          c = n[3],
          h = n[8],
          s = n[9],
          M = n[10],
          f = n[11];
        return n !== t && (t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[0] = e * u - h * r, t[1] = o * u - s * r, t[2] = i * u - M * r, t[3] = c * u - f * r, t[8] = e * r + h * u, t[9] = o * r + s * u, t[10] = i * r + M * u, t[11] = c * r + f * u, t
      },
      rotateZ: function(t, n, a) {
        var r = Math.sin(a),
          u = Math.cos(a),
          e = n[0],
          o = n[1],
          i = n[2],
          c = n[3],
          h = n[4],
          s = n[5],
          M = n[6],
          f = n[7];
        return n !== t && (t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[0] = e * u + h * r, t[1] = o * u + s * r, t[2] = i * u + M * r, t[3] = c * u + f * r, t[4] = h * u - e * r, t[5] = s * u - o * r, t[6] = M * u - i * r, t[7] = f * u - c * r, t
      },
      fromTranslation: function(t, n) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t
      },
      fromScaling: function(t, n) {
        return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = n[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
      },
      fromRotation: function(t, a, r) {
        var u, e, o, i = r[0],
          c = r[1],
          h = r[2],
          s = Math.hypot(i, c, h);
        return s < n ? null : (i *= s = 1 / s, c *= s, h *= s, u = Math.sin(a), o = 1 - (e = Math.cos(a)), t[0] = i * i * o + e, t[1] = c * i * o + h * u, t[2] = h * i * o - c * u, t[3] = 0, t[4] = i * c * o - h * u, t[5] = c * c * o + e, t[6] = h * c * o + i * u, t[7] = 0, t[8] = i * h * o + c * u, t[9] = c * h * o - i * u, t[10] = h * h * o + e, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t)
      },
      fromXRotation: function(t, n) {
        var a = Math.sin(n),
          r = Math.cos(n);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = r, t[6] = a, t[7] = 0, t[8] = 0, t[9] = -a, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
      },
      fromYRotation: function(t, n) {
        var a = Math.sin(n),
          r = Math.cos(n);
        return t[0] = r, t[1] = 0, t[2] = -a, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = a, t[9] = 0, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
      },
      fromZRotation: function(t, n) {
        var a = Math.sin(n),
          r = Math.cos(n);
        return t[0] = r, t[1] = a, t[2] = 0, t[3] = 0, t[4] = -a, t[5] = r, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
      },
      fromRotationTranslation: w,
      fromQuat2: function(t, n) {
        var r = new a(3),
          u = -n[0],
          e = -n[1],
          o = -n[2],
          i = n[3],
          c = n[4],
          h = n[5],
          s = n[6],
          M = n[7],
          f = u * u + e * e + o * o + i * i;
        return f > 0 ? (r[0] = 2 * (c * i + M * u + h * o - s * e) / f, r[1] = 2 * (h * i + M * e + s * u - c * o) / f, r[2] = 2 * (s * i + M * o + c * e - h * u) / f) : (r[0] = 2 * (c * i + M * u + h * o - s * e), r[1] = 2 * (h * i + M * e + s * u - c * o), r[2] = 2 * (s * i + M * o + c * e - h * u)), w(t, n, r), t
      },
      getTranslation: R,
      getScaling: z,
      getRotation: P,
      fromRotationTranslationScale: function(t, n, a, r) {
        var u = n[0],
          e = n[1],
          o = n[2],
          i = n[3],
          c = u + u,
          h = e + e,
          s = o + o,
          M = u * c,
          f = u * h,
          l = u * s,
          v = e * h,
          b = e * s,
          m = o * s,
          d = i * c,
          x = i * h,
          p = i * s,
          y = r[0],
          q = r[1],
          g = r[2];
        return t[0] = (1 - (v + m)) * y, t[1] = (f + p) * y, t[2] = (l - x) * y, t[3] = 0, t[4] = (f - p) * q, t[5] = (1 - (M + m)) * q, t[6] = (b + d) * q, t[7] = 0, t[8] = (l + x) * g, t[9] = (b - d) * g, t[10] = (1 - (M + v)) * g, t[11] = 0, t[12] = a[0], t[13] = a[1], t[14] = a[2], t[15] = 1, t
      },
      fromRotationTranslationScaleOrigin: function(t, n, a, r, u) {
        var e = n[0],
          o = n[1],
          i = n[2],
          c = n[3],
          h = e + e,
          s = o + o,
          M = i + i,
          f = e * h,
          l = e * s,
          v = e * M,
          b = o * s,
          m = o * M,
          d = i * M,
          x = c * h,
          p = c * s,
          y = c * M,
          q = r[0],
          g = r[1],
          A = r[2],
          w = u[0],
          R = u[1],
          z = u[2],
          P = (1 - (b + d)) * q,
          j = (l + y) * q,
          I = (v - p) * q,
          S = (l - y) * g,
          E = (1 - (f + d)) * g,
          O = (m + x) * g,
          T = (v + p) * A,
          D = (m - x) * A,
          F = (1 - (f + b)) * A;
        return t[0] = P, t[1] = j, t[2] = I, t[3] = 0, t[4] = S, t[5] = E, t[6] = O, t[7] = 0, t[8] = T, t[9] = D, t[10] = F, t[11] = 0, t[12] = a[0] + w - (P * w + S * R + T * z), t[13] = a[1] + R - (j * w + E * R + D * z), t[14] = a[2] + z - (I * w + O * R + F * z), t[15] = 1, t
      },
      fromQuat: function(t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = a + a,
          i = r + r,
          c = u + u,
          h = a * o,
          s = r * o,
          M = r * i,
          f = u * o,
          l = u * i,
          v = u * c,
          b = e * o,
          m = e * i,
          d = e * c;
        return t[0] = 1 - M - v, t[1] = s + d, t[2] = f - m, t[3] = 0, t[4] = s - d, t[5] = 1 - h - v, t[6] = l + b, t[7] = 0, t[8] = f + m, t[9] = l - b, t[10] = 1 - h - M, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
      },
      frustum: function(t, n, a, r, u, e, o) {
        var i = 1 / (a - n),
          c = 1 / (u - r),
          h = 1 / (e - o);
        return t[0] = 2 * e * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * e * c, t[6] = 0, t[7] = 0, t[8] = (a + n) * i, t[9] = (u + r) * c, t[10] = (o + e) * h, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = o * e * 2 * h, t[15] = 0, t
      },
      perspective: function(t, n, a, r, u) {
        var e, o = 1 / Math.tan(n / 2);
        return t[0] = o / a, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = o, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = -1, t[12] = 0, t[13] = 0, t[15] = 0, null != u && u !== 1 / 0 ? (e = 1 / (r - u), t[10] = (u + r) * e, t[14] = 2 * u * r * e) : (t[10] = -1, t[14] = -2 * r), t
      },
      perspectiveFromFieldOfView: function(t, n, a, r) {
        var u = Math.tan(n.upDegrees * Math.PI / 180),
          e = Math.tan(n.downDegrees * Math.PI / 180),
          o = Math.tan(n.leftDegrees * Math.PI / 180),
          i = Math.tan(n.rightDegrees * Math.PI / 180),
          c = 2 / (o + i),
          h = 2 / (u + e);
        return t[0] = c, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = h, t[6] = 0, t[7] = 0, t[8] = -(o - i) * c * .5, t[9] = (u - e) * h * .5, t[10] = r / (a - r), t[11] = -1, t[12] = 0, t[13] = 0, t[14] = r * a / (a - r), t[15] = 0, t
      },
      ortho: function(t, n, a, r, u, e, o) {
        var i = 1 / (n - a),
          c = 1 / (r - u),
          h = 1 / (e - o);
        return t[0] = -2 * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * c, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * h, t[11] = 0, t[12] = (n + a) * i, t[13] = (u + r) * c, t[14] = (o + e) * h, t[15] = 1, t
      },
      lookAt: function(t, a, r, u) {
        var e, o, i, c, h, s, M, f, l, v, b = a[0],
          m = a[1],
          d = a[2],
          x = u[0],
          p = u[1],
          y = u[2],
          q = r[0],
          A = r[1],
          w = r[2];
        return Math.abs(b - q) < n && Math.abs(m - A) < n && Math.abs(d - w) < n ? g(t) : (M = b - q, f = m - A, l = d - w, e = p * (l *= v = 1 / Math.hypot(M, f, l)) - y * (f *= v), o = y * (M *= v) - x * l, i = x * f - p * M, (v = Math.hypot(e, o, i)) ? (e *= v = 1 / v, o *= v, i *= v) : (e = 0, o = 0, i = 0), c = f * i - l * o, h = l * e - M * i, s = M * o - f * e, (v = Math.hypot(c, h, s)) ? (c *= v = 1 / v, h *= v, s *= v) : (c = 0, h = 0, s = 0), t[0] = e, t[1] = c, t[2] = M, t[3] = 0, t[4] = o, t[5] = h, t[6] = f, t[7] = 0, t[8] = i, t[9] = s, t[10] = l, t[11] = 0, t[12] = -(e * b + o * m + i * d), t[13] = -(c * b + h * m + s * d), t[14] = -(M * b + f * m + l * d), t[15] = 1, t)
      },
      targetTo: function(t, n, a, r) {
        var u = n[0],
          e = n[1],
          o = n[2],
          i = r[0],
          c = r[1],
          h = r[2],
          s = u - a[0],
          M = e - a[1],
          f = o - a[2],
          l = s * s + M * M + f * f;
        l > 0 && (s *= l = 1 / Math.sqrt(l), M *= l, f *= l);
        var v = c * f - h * M,
          b = h * s - i * f,
          m = i * M - c * s;
        return (l = v * v + b * b + m * m) > 0 && (v *= l = 1 / Math.sqrt(l), b *= l, m *= l), t[0] = v, t[1] = b, t[2] = m, t[3] = 0, t[4] = M * m - f * b, t[5] = f * v - s * m, t[6] = s * b - M * v, t[7] = 0, t[8] = s, t[9] = M, t[10] = f, t[11] = 0, t[12] = u, t[13] = e, t[14] = o, t[15] = 1, t
      },
      str: function(t) {
        return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")"
      },
      frob: function(t) {
        return Math.hypot(t[0], t[1], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
      },
      add: function(t, n, a) {
        return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t[4] = n[4] + a[4], t[5] = n[5] + a[5], t[6] = n[6] + a[6], t[7] = n[7] + a[7], t[8] = n[8] + a[8], t[9] = n[9] + a[9], t[10] = n[10] + a[10], t[11] = n[11] + a[11], t[12] = n[12] + a[12], t[13] = n[13] + a[13], t[14] = n[14] + a[14], t[15] = n[15] + a[15], t
      },
      subtract: j,
      multiplyScalar: function(t, n, a) {
        return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t[4] = n[4] * a, t[5] = n[5] * a, t[6] = n[6] * a, t[7] = n[7] * a, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = n[11] * a, t[12] = n[12] * a, t[13] = n[13] * a, t[14] = n[14] * a, t[15] = n[15] * a, t
      },
      multiplyScalarAndAdd: function(t, n, a, r) {
        return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t[4] = n[4] + a[4] * r, t[5] = n[5] + a[5] * r, t[6] = n[6] + a[6] * r, t[7] = n[7] + a[7] * r, t[8] = n[8] + a[8] * r, t[9] = n[9] + a[9] * r, t[10] = n[10] + a[10] * r, t[11] = n[11] + a[11] * r, t[12] = n[12] + a[12] * r, t[13] = n[13] + a[13] * r, t[14] = n[14] + a[14] * r, t[15] = n[15] + a[15] * r, t
      },
      exactEquals: function(t, n) {
        return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7] && t[8] === n[8] && t[9] === n[9] && t[10] === n[10] && t[11] === n[11] && t[12] === n[12] && t[13] === n[13] && t[14] === n[14] && t[15] === n[15]
      },
      equals: function(t, a) {
        var r = t[0],
          u = t[1],
          e = t[2],
          o = t[3],
          i = t[4],
          c = t[5],
          h = t[6],
          s = t[7],
          M = t[8],
          f = t[9],
          l = t[10],
          v = t[11],
          b = t[12],
          m = t[13],
          d = t[14],
          x = t[15],
          p = a[0],
          y = a[1],
          q = a[2],
          g = a[3],
          A = a[4],
          w = a[5],
          R = a[6],
          z = a[7],
          P = a[8],
          j = a[9],
          I = a[10],
          S = a[11],
          E = a[12],
          O = a[13],
          T = a[14],
          D = a[15];
        return Math.abs(r - p) <= n * Math.max(1, Math.abs(r), Math.abs(p)) && Math.abs(u - y) <= n * Math.max(1, Math.abs(u), Math.abs(y)) && Math.abs(e - q) <= n * Math.max(1, Math.abs(e), Math.abs(q)) && Math.abs(o - g) <= n * Math.max(1, Math.abs(o), Math.abs(g)) && Math.abs(i - A) <= n * Math.max(1, Math.abs(i), Math.abs(A)) && Math.abs(c - w) <= n * Math.max(1, Math.abs(c), Math.abs(w)) && Math.abs(h - R) <= n * Math.max(1, Math.abs(h), Math.abs(R)) && Math.abs(s - z) <= n * Math.max(1, Math.abs(s), Math.abs(z)) && Math.abs(M - P) <= n * Math.max(1, Math.abs(M), Math.abs(P)) && Math.abs(f - j) <= n * Math.max(1, Math.abs(f), Math.abs(j)) && Math.abs(l - I) <= n * Math.max(1, Math.abs(l), Math.abs(I)) && Math.abs(v - S) <= n * Math.max(1, Math.abs(v), Math.abs(S)) && Math.abs(b - E) <= n * Math.max(1, Math.abs(b), Math.abs(E)) && Math.abs(m - O) <= n * Math.max(1, Math.abs(m), Math.abs(O)) && Math.abs(d - T) <= n * Math.max(1, Math.abs(d), Math.abs(T)) && Math.abs(x - D) <= n * Math.max(1, Math.abs(x), Math.abs(D))
      },
      mul: I,
      sub: S
    });

  function O() {
    var t = new a(3);
    return a != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t
  }

  function T(t) {
    var n = t[0],
      a = t[1],
      r = t[2];
    return Math.hypot(n, a, r)
  }

  function D(t, n, r) {
    var u = new a(3);
    return u[0] = t, u[1] = n, u[2] = r, u
  }

  function F(t, n, a) {
    return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t
  }

  function L(t, n, a) {
    return t[0] = n[0] * a[0], t[1] = n[1] * a[1], t[2] = n[2] * a[2], t
  }

  function V(t, n, a) {
    return t[0] = n[0] / a[0], t[1] = n[1] / a[1], t[2] = n[2] / a[2], t
  }

  function Q(t, n) {
    var a = n[0] - t[0],
      r = n[1] - t[1],
      u = n[2] - t[2];
    return Math.hypot(a, r, u)
  }

  function Y(t, n) {
    var a = n[0] - t[0],
      r = n[1] - t[1],
      u = n[2] - t[2];
    return a * a + r * r + u * u
  }

  function X(t) {
    var n = t[0],
      a = t[1],
      r = t[2];
    return n * n + a * a + r * r
  }

  function Z(t, n) {
    var a = n[0],
      r = n[1],
      u = n[2],
      e = a * a + r * r + u * u;
    return e > 0 && (e = 1 / Math.sqrt(e)), t[0] = n[0] * e, t[1] = n[1] * e, t[2] = n[2] * e, t
  }

  function _(t, n) {
    return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
  }

  function B(t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = a[0],
      i = a[1],
      c = a[2];
    return t[0] = u * c - e * i, t[1] = e * o - r * c, t[2] = r * i - u * o, t
  }
  var N, k = F,
    U = L,
    W = V,
    C = Q,
    G = Y,
    H = T,
    J = X,
    K = (N = O(), function(t, n, a, r, u, e) {
      var o, i;
      for (n || (n = 3), a || (a = 0), i = r ? Math.min(r * n + a, t.length) : t.length, o = a; o < i; o += n) N[0] = t[o], N[1] = t[o + 1], N[2] = t[o + 2], u(N, N, e), t[o] = N[0], t[o + 1] = N[1], t[o + 2] = N[2];
      return t
    }),
    $ = Object.freeze({
      create: O,
      clone: function(t) {
        var n = new a(3);
        return n[0] = t[0], n[1] = t[1], n[2] = t[2], n
      },
      length: T,
      fromValues: D,
      copy: function(t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t
      },
      set: function(t, n, a, r) {
        return t[0] = n, t[1] = a, t[2] = r, t
      },
      add: function(t, n, a) {
        return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t
      },
      subtract: F,
      multiply: L,
      divide: V,
      ceil: function(t, n) {
        return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t[2] = Math.ceil(n[2]), t
      },
      floor: function(t, n) {
        return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t[2] = Math.floor(n[2]), t
      },
      min: function(t, n, a) {
        return t[0] = Math.min(n[0], a[0]), t[1] = Math.min(n[1], a[1]), t[2] = Math.min(n[2], a[2]), t
      },
      max: function(t, n, a) {
        return t[0] = Math.max(n[0], a[0]), t[1] = Math.max(n[1], a[1]), t[2] = Math.max(n[2], a[2]), t
      },
      round: function(t, n) {
        return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t[2] = Math.round(n[2]), t
      },
      scale: function(t, n, a) {
        return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t
      },
      scaleAndAdd: function(t, n, a, r) {
        return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t
      },
      distance: Q,
      squaredDistance: Y,
      squaredLength: X,
      negate: function(t, n) {
        return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t
      },
      inverse: function(t, n) {
        return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t
      },
      normalize: Z,
      dot: _,
      cross: B,
      lerp: function(t, n, a, r) {
        var u = n[0],
          e = n[1],
          o = n[2];
        return t[0] = u + r * (a[0] - u), t[1] = e + r * (a[1] - e), t[2] = o + r * (a[2] - o), t
      },
      hermite: function(t, n, a, r, u, e) {
        var o = e * e,
          i = o * (2 * e - 3) + 1,
          c = o * (e - 2) + e,
          h = o * (e - 1),
          s = o * (3 - 2 * e);
        return t[0] = n[0] * i + a[0] * c + r[0] * h + u[0] * s, t[1] = n[1] * i + a[1] * c + r[1] * h + u[1] * s, t[2] = n[2] * i + a[2] * c + r[2] * h + u[2] * s, t
      },
      bezier: function(t, n, a, r, u, e) {
        var o = 1 - e,
          i = o * o,
          c = e * e,
          h = i * o,
          s = 3 * e * i,
          M = 3 * c * o,
          f = c * e;
        return t[0] = n[0] * h + a[0] * s + r[0] * M + u[0] * f, t[1] = n[1] * h + a[1] * s + r[1] * M + u[1] * f, t[2] = n[2] * h + a[2] * s + r[2] * M + u[2] * f, t
      },
      random: function(t, n) {
        n = n || 1;
        var a = 2 * r() * Math.PI,
          u = 2 * r() - 1,
          e = Math.sqrt(1 - u * u) * n;
        return t[0] = Math.cos(a) * e, t[1] = Math.sin(a) * e, t[2] = u * n, t
      },
      transformMat4: function(t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = a[3] * r + a[7] * u + a[11] * e + a[15];
        return o = o || 1, t[0] = (a[0] * r + a[4] * u + a[8] * e + a[12]) / o, t[1] = (a[1] * r + a[5] * u + a[9] * e + a[13]) / o, t[2] = (a[2] * r + a[6] * u + a[10] * e + a[14]) / o, t
      },
      transformMat3: function(t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2];
        return t[0] = r * a[0] + u * a[3] + e * a[6], t[1] = r * a[1] + u * a[4] + e * a[7], t[2] = r * a[2] + u * a[5] + e * a[8], t
      },
      transformQuat: function(t, n, a) {
        var r = a[0],
          u = a[1],
          e = a[2],
          o = a[3],
          i = n[0],
          c = n[1],
          h = n[2],
          s = u * h - e * c,
          M = e * i - r * h,
          f = r * c - u * i,
          l = u * f - e * M,
          v = e * s - r * f,
          b = r * M - u * s,
          m = 2 * o;
        return s *= m, M *= m, f *= m, l *= 2, v *= 2, b *= 2, t[0] = i + s + l, t[1] = c + M + v, t[2] = h + f + b, t
      },
      rotateX: function(t, n, a, r) {
        var u = [],
          e = [];
        return u[0] = n[0] - a[0], u[1] = n[1] - a[1], u[2] = n[2] - a[2], e[0] = u[0], e[1] = u[1] * Math.cos(r) - u[2] * Math.sin(r), e[2] = u[1] * Math.sin(r) + u[2] * Math.cos(r), t[0] = e[0] + a[0], t[1] = e[1] + a[1], t[2] = e[2] + a[2], t
      },
      rotateY: function(t, n, a, r) {
        var u = [],
          e = [];
        return u[0] = n[0] - a[0], u[1] = n[1] - a[1], u[2] = n[2] - a[2], e[0] = u[2] * Math.sin(r) + u[0] * Math.cos(r), e[1] = u[1], e[2] = u[2] * Math.cos(r) - u[0] * Math.sin(r), t[0] = e[0] + a[0], t[1] = e[1] + a[1], t[2] = e[2] + a[2], t
      },
      rotateZ: function(t, n, a, r) {
        var u = [],
          e = [];
        return u[0] = n[0] - a[0], u[1] = n[1] - a[1], u[2] = n[2] - a[2], e[0] = u[0] * Math.cos(r) - u[1] * Math.sin(r), e[1] = u[0] * Math.sin(r) + u[1] * Math.cos(r), e[2] = u[2], t[0] = e[0] + a[0], t[1] = e[1] + a[1], t[2] = e[2] + a[2], t
      },
      angle: function(t, n) {
        var a = D(t[0], t[1], t[2]),
          r = D(n[0], n[1], n[2]);
        Z(a, a), Z(r, r);
        var u = _(a, r);
        return u > 1 ? 0 : u < -1 ? Math.PI : Math.acos(u)
      },
      zero: function(t) {
        return t[0] = 0, t[1] = 0, t[2] = 0, t
      },
      str: function(t) {
        return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
      },
      exactEquals: function(t, n) {
        return t[0] === n[0] && t[1] === n[1] && t[2] === n[2]
      },
      equals: function(t, a) {
        var r = t[0],
          u = t[1],
          e = t[2],
          o = a[0],
          i = a[1],
          c = a[2];
        return Math.abs(r - o) <= n * Math.max(1, Math.abs(r), Math.abs(o)) && Math.abs(u - i) <= n * Math.max(1, Math.abs(u), Math.abs(i)) && Math.abs(e - c) <= n * Math.max(1, Math.abs(e), Math.abs(c))
      },
      sub: k,
      mul: U,
      div: W,
      dist: C,
      sqrDist: G,
      len: H,
      sqrLen: J,
      forEach: K
    });

  function tt() {
    var t = new a(4);
    return a != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0), t
  }

  function nt(t) {
    var n = new a(4);
    return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n
  }

  function at(t, n, r, u) {
    var e = new a(4);
    return e[0] = t, e[1] = n, e[2] = r, e[3] = u, e
  }

  function rt(t, n) {
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t
  }

  function ut(t, n, a, r, u) {
    return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t
  }

  function et(t, n, a) {
    return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t
  }

  function ot(t, n, a) {
    return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t
  }

  function it(t, n, a) {
    return t[0] = n[0] * a[0], t[1] = n[1] * a[1], t[2] = n[2] * a[2], t[3] = n[3] * a[3], t
  }

  function ct(t, n, a) {
    return t[0] = n[0] / a[0], t[1] = n[1] / a[1], t[2] = n[2] / a[2], t[3] = n[3] / a[3], t
  }

  function ht(t, n, a) {
    return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t
  }

  function st(t, n) {
    var a = n[0] - t[0],
      r = n[1] - t[1],
      u = n[2] - t[2],
      e = n[3] - t[3];
    return Math.hypot(a, r, u, e)
  }

  function Mt(t, n) {
    var a = n[0] - t[0],
      r = n[1] - t[1],
      u = n[2] - t[2],
      e = n[3] - t[3];
    return a * a + r * r + u * u + e * e
  }

  function ft(t) {
    var n = t[0],
      a = t[1],
      r = t[2],
      u = t[3];
    return Math.hypot(n, a, r, u)
  }

  function lt(t) {
    var n = t[0],
      a = t[1],
      r = t[2],
      u = t[3];
    return n * n + a * a + r * r + u * u
  }

  function vt(t, n) {
    var a = n[0],
      r = n[1],
      u = n[2],
      e = n[3],
      o = a * a + r * r + u * u + e * e;
    return o > 0 && (o = 1 / Math.sqrt(o)), t[0] = a * o, t[1] = r * o, t[2] = u * o, t[3] = e * o, t
  }

  function bt(t, n) {
    return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3]
  }

  function mt(t, n, a, r) {
    var u = n[0],
      e = n[1],
      o = n[2],
      i = n[3];
    return t[0] = u + r * (a[0] - u), t[1] = e + r * (a[1] - e), t[2] = o + r * (a[2] - o), t[3] = i + r * (a[3] - i), t
  }

  function dt(t, n) {
    return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3]
  }

  function xt(t, a) {
    var r = t[0],
      u = t[1],
      e = t[2],
      o = t[3],
      i = a[0],
      c = a[1],
      h = a[2],
      s = a[3];
    return Math.abs(r - i) <= n * Math.max(1, Math.abs(r), Math.abs(i)) && Math.abs(u - c) <= n * Math.max(1, Math.abs(u), Math.abs(c)) && Math.abs(e - h) <= n * Math.max(1, Math.abs(e), Math.abs(h)) && Math.abs(o - s) <= n * Math.max(1, Math.abs(o), Math.abs(s))
  }
  var pt = ot,
    yt = it,
    qt = ct,
    gt = st,
    At = Mt,
    wt = ft,
    Rt = lt,
    zt = function() {
      var t = tt();
      return function(n, a, r, u, e, o) {
        var i, c;
        for (a || (a = 4), r || (r = 0), c = u ? Math.min(u * a + r, n.length) : n.length, i = r; i < c; i += a) t[0] = n[i], t[1] = n[i + 1], t[2] = n[i + 2], t[3] = n[i + 3], e(t, t, o), n[i] = t[0], n[i + 1] = t[1], n[i + 2] = t[2], n[i + 3] = t[3];
        return n
      }
    }(),
    Pt = Object.freeze({
      create: tt,
      clone: nt,
      fromValues: at,
      copy: rt,
      set: ut,
      add: et,
      subtract: ot,
      multiply: it,
      divide: ct,
      ceil: function(t, n) {
        return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t[2] = Math.ceil(n[2]), t[3] = Math.ceil(n[3]), t
      },
      floor: function(t, n) {
        return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t[2] = Math.floor(n[2]), t[3] = Math.floor(n[3]), t
      },
      min: function(t, n, a) {
        return t[0] = Math.min(n[0], a[0]), t[1] = Math.min(n[1], a[1]), t[2] = Math.min(n[2], a[2]), t[3] = Math.min(n[3], a[3]), t
      },
      max: function(t, n, a) {
        return t[0] = Math.max(n[0], a[0]), t[1] = Math.max(n[1], a[1]), t[2] = Math.max(n[2], a[2]), t[3] = Math.max(n[3], a[3]), t
      },
      round: function(t, n) {
        return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t[2] = Math.round(n[2]), t[3] = Math.round(n[3]), t
      },
      scale: ht,
      scaleAndAdd: function(t, n, a, r) {
        return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t
      },
      distance: st,
      squaredDistance: Mt,
      length: ft,
      squaredLength: lt,
      negate: function(t, n) {
        return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = -n[3], t
      },
      inverse: function(t, n) {
        return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t[3] = 1 / n[3], t
      },
      normalize: vt,
      dot: bt,
      cross: function(t, n, a, r) {
        var u = a[0] * r[1] - a[1] * r[0],
          e = a[0] * r[2] - a[2] * r[0],
          o = a[0] * r[3] - a[3] * r[0],
          i = a[1] * r[2] - a[2] * r[1],
          c = a[1] * r[3] - a[3] * r[1],
          h = a[2] * r[3] - a[3] * r[2],
          s = n[0],
          M = n[1],
          f = n[2],
          l = n[3];
        return t[0] = M * h - f * c + l * i, t[1] = -s * h + f * o - l * e, t[2] = s * c - M * o + l * u, t[3] = -s * i + M * e - f * u, t
      },
      lerp: mt,
      random: function(t, n) {
        var a, u, e, o, i, c;
        n = n || 1;
        do {
          i = (a = 2 * r() - 1) * a + (u = 2 * r() - 1) * u
        } while (i >= 1);
        do {
          c = (e = 2 * r() - 1) * e + (o = 2 * r() - 1) * o
        } while (c >= 1);
        var h = Math.sqrt((1 - i) / c);
        return t[0] = n * a, t[1] = n * u, t[2] = n * e * h, t[3] = n * o * h, t
      },
      transformMat4: function(t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3];
        return t[0] = a[0] * r + a[4] * u + a[8] * e + a[12] * o, t[1] = a[1] * r + a[5] * u + a[9] * e + a[13] * o, t[2] = a[2] * r + a[6] * u + a[10] * e + a[14] * o, t[3] = a[3] * r + a[7] * u + a[11] * e + a[15] * o, t
      },
      transformQuat: function(t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = a[0],
          i = a[1],
          c = a[2],
          h = a[3],
          s = h * r + i * e - c * u,
          M = h * u + c * r - o * e,
          f = h * e + o * u - i * r,
          l = -o * r - i * u - c * e;
        return t[0] = s * h + l * -o + M * -c - f * -i, t[1] = M * h + l * -i + f * -o - s * -c, t[2] = f * h + l * -c + s * -i - M * -o, t[3] = n[3], t
      },
      zero: function(t) {
        return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t
      },
      str: function(t) {
        return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
      },
      exactEquals: dt,
      equals: xt,
      sub: pt,
      mul: yt,
      div: qt,
      dist: gt,
      sqrDist: At,
      len: wt,
      sqrLen: Rt,
      forEach: zt
    });

  function jt() {
    var t = new a(4);
    return a != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t[3] = 1, t
  }

  function It(t, n, a) {
    a *= .5;
    var r = Math.sin(a);
    return t[0] = r * n[0], t[1] = r * n[1], t[2] = r * n[2], t[3] = Math.cos(a), t
  }

  function St(t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = a[0],
      c = a[1],
      h = a[2],
      s = a[3];
    return t[0] = r * s + o * i + u * h - e * c, t[1] = u * s + o * c + e * i - r * h, t[2] = e * s + o * h + r * c - u * i, t[3] = o * s - r * i - u * c - e * h, t
  }

  function Et(t, n, a) {
    a *= .5;
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = Math.sin(a),
      c = Math.cos(a);
    return t[0] = r * c + o * i, t[1] = u * c + e * i, t[2] = e * c - u * i, t[3] = o * c - r * i, t
  }

  function Ot(t, n, a) {
    a *= .5;
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = Math.sin(a),
      c = Math.cos(a);
    return t[0] = r * c - e * i, t[1] = u * c + o * i, t[2] = e * c + r * i, t[3] = o * c - u * i, t
  }

  function Tt(t, n, a) {
    a *= .5;
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = Math.sin(a),
      c = Math.cos(a);
    return t[0] = r * c + u * i, t[1] = u * c - r * i, t[2] = e * c + o * i, t[3] = o * c - e * i, t
  }

  function Dt(t, n) {
    var a = n[0],
      r = n[1],
      u = n[2],
      e = n[3],
      o = Math.sqrt(a * a + r * r + u * u),
      i = Math.exp(e),
      c = o > 0 ? i * Math.sin(o) / o : 0;
    return t[0] = a * c, t[1] = r * c, t[2] = u * c, t[3] = i * Math.cos(o), t
  }

  function Ft(t, n) {
    var a = n[0],
      r = n[1],
      u = n[2],
      e = n[3],
      o = Math.sqrt(a * a + r * r + u * u),
      i = o > 0 ? Math.atan2(o, e) / o : 0;
    return t[0] = a * i, t[1] = r * i, t[2] = u * i, t[3] = .5 * Math.log(a * a + r * r + u * u + e * e), t
  }

  function Lt(t, a, r, u) {
    var e, o, i, c, h, s = a[0],
      M = a[1],
      f = a[2],
      l = a[3],
      v = r[0],
      b = r[1],
      m = r[2],
      d = r[3];
    return (o = s * v + M * b + f * m + l * d) < 0 && (o = -o, v = -v, b = -b, m = -m, d = -d), 1 - o > n ? (e = Math.acos(o), i = Math.sin(e), c = Math.sin((1 - u) * e) / i, h = Math.sin(u * e) / i) : (c = 1 - u, h = u), t[0] = c * s + h * v, t[1] = c * M + h * b, t[2] = c * f + h * m, t[3] = c * l + h * d, t
  }

  function Vt(t, n) {
    var a, r = n[0] + n[4] + n[8];
    if (r > 0) a = Math.sqrt(r + 1), t[3] = .5 * a, a = .5 / a, t[0] = (n[5] - n[7]) * a, t[1] = (n[6] - n[2]) * a, t[2] = (n[1] - n[3]) * a;
    else {
      var u = 0;
      n[4] > n[0] && (u = 1), n[8] > n[3 * u + u] && (u = 2);
      var e = (u + 1) % 3,
        o = (u + 2) % 3;
      a = Math.sqrt(n[3 * u + u] - n[3 * e + e] - n[3 * o + o] + 1), t[u] = .5 * a, a = .5 / a, t[3] = (n[3 * e + o] - n[3 * o + e]) * a, t[e] = (n[3 * e + u] + n[3 * u + e]) * a, t[o] = (n[3 * o + u] + n[3 * u + o]) * a
    }
    return t
  }
  var Qt, Yt, Xt, Zt, _t, Bt, Nt = nt,
    kt = at,
    Ut = rt,
    Wt = ut,
    Ct = et,
    Gt = St,
    Ht = ht,
    Jt = bt,
    Kt = mt,
    $t = ft,
    tn = $t,
    nn = lt,
    an = nn,
    rn = vt,
    un = dt,
    en = xt,
    on = (Qt = O(), Yt = D(1, 0, 0), Xt = D(0, 1, 0), function(t, n, a) {
      var r = _(n, a);
      return r < -.999999 ? (B(Qt, Yt, n), H(Qt) < 1e-6 && B(Qt, Xt, n), Z(Qt, Qt), It(t, Qt, Math.PI), t) : r > .999999 ? (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t) : (B(Qt, n, a), t[0] = Qt[0], t[1] = Qt[1], t[2] = Qt[2], t[3] = 1 + r, rn(t, t))
    }),
    cn = (Zt = jt(), _t = jt(), function(t, n, a, r, u, e) {
      return Lt(Zt, n, u, e), Lt(_t, a, r, e), Lt(t, Zt, _t, 2 * e * (1 - e)), t
    }),
    hn = (Bt = m(), function(t, n, a, r) {
      return Bt[0] = a[0], Bt[3] = a[1], Bt[6] = a[2], Bt[1] = r[0], Bt[4] = r[1], Bt[7] = r[2], Bt[2] = -n[0], Bt[5] = -n[1], Bt[8] = -n[2], rn(t, Vt(t, Bt))
    }),
    sn = Object.freeze({
      create: jt,
      identity: function(t) {
        return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t
      },
      setAxisAngle: It,
      getAxisAngle: function(t, a) {
        var r = 2 * Math.acos(a[3]),
          u = Math.sin(r / 2);
        return u > n ? (t[0] = a[0] / u, t[1] = a[1] / u, t[2] = a[2] / u) : (t[0] = 1, t[1] = 0, t[2] = 0), r
      },
      getAngle: function(t, n) {
        var a = Jt(t, n);
        return Math.acos(2 * a * a - 1)
      },
      multiply: St,
      rotateX: Et,
      rotateY: Ot,
      rotateZ: Tt,
      calculateW: function(t, n) {
        var a = n[0],
          r = n[1],
          u = n[2];
        return t[0] = a, t[1] = r, t[2] = u, t[3] = Math.sqrt(Math.abs(1 - a * a - r * r - u * u)), t
      },
      exp: Dt,
      ln: Ft,
      pow: function(t, n, a) {
        return Ft(t, n), Ht(t, t, a), Dt(t, t), t
      },
      slerp: Lt,
      random: function(t) {
        var n = r(),
          a = r(),
          u = r(),
          e = Math.sqrt(1 - n),
          o = Math.sqrt(n);
        return t[0] = e * Math.sin(2 * Math.PI * a), t[1] = e * Math.cos(2 * Math.PI * a), t[2] = o * Math.sin(2 * Math.PI * u), t[3] = o * Math.cos(2 * Math.PI * u), t
      },
      invert: function(t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = a * a + r * r + u * u + e * e,
          i = o ? 1 / o : 0;
        return t[0] = -a * i, t[1] = -r * i, t[2] = -u * i, t[3] = e * i, t
      },
      conjugate: function(t, n) {
        return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = n[3], t
      },
      fromMat3: Vt,
      fromEuler: function(t, n, a, r) {
        var u = .5 * Math.PI / 180;
        n *= u, a *= u, r *= u;
        var e = Math.sin(n),
          o = Math.cos(n),
          i = Math.sin(a),
          c = Math.cos(a),
          h = Math.sin(r),
          s = Math.cos(r);
        return t[0] = e * c * s - o * i * h, t[1] = o * i * s + e * c * h, t[2] = o * c * h - e * i * s, t[3] = o * c * s + e * i * h, t
      },
      str: function(t) {
        return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
      },
      clone: Nt,
      fromValues: kt,
      copy: Ut,
      set: Wt,
      add: Ct,
      mul: Gt,
      scale: Ht,
      dot: Jt,
      lerp: Kt,
      length: $t,
      len: tn,
      squaredLength: nn,
      sqrLen: an,
      normalize: rn,
      exactEquals: un,
      equals: en,
      rotationTo: on,
      sqlerp: cn,
      setAxes: hn
    });

  function Mn(t, n, a) {
    var r = .5 * a[0],
      u = .5 * a[1],
      e = .5 * a[2],
      o = n[0],
      i = n[1],
      c = n[2],
      h = n[3];
    return t[0] = o, t[1] = i, t[2] = c, t[3] = h, t[4] = r * h + u * c - e * i, t[5] = u * h + e * o - r * c, t[6] = e * h + r * i - u * o, t[7] = -r * o - u * i - e * c, t
  }

  function fn(t, n) {
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t
  }
  var ln = Ut;
  var vn = Ut;

  function bn(t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = a[4],
      c = a[5],
      h = a[6],
      s = a[7],
      M = n[4],
      f = n[5],
      l = n[6],
      v = n[7],
      b = a[0],
      m = a[1],
      d = a[2],
      x = a[3];
    return t[0] = r * x + o * b + u * d - e * m, t[1] = u * x + o * m + e * b - r * d, t[2] = e * x + o * d + r * m - u * b, t[3] = o * x - r * b - u * m - e * d, t[4] = r * s + o * i + u * h - e * c + M * x + v * b + f * d - l * m, t[5] = u * s + o * c + e * i - r * h + f * x + v * m + l * b - M * d, t[6] = e * s + o * h + r * c - u * i + l * x + v * d + M * m - f * b, t[7] = o * s - r * i - u * c - e * h + v * x - M * b - f * m - l * d, t
  }
  var mn = bn;
  var dn = Jt;
  var xn = $t,
    pn = xn,
    yn = nn,
    qn = yn;
  var gn = Object.freeze({
    create: function() {
      var t = new a(8);
      return a != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0), t[3] = 1, t
    },
    clone: function(t) {
      var n = new a(8);
      return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n
    },
    fromValues: function(t, n, r, u, e, o, i, c) {
      var h = new a(8);
      return h[0] = t, h[1] = n, h[2] = r, h[3] = u, h[4] = e, h[5] = o, h[6] = i, h[7] = c, h
    },
    fromRotationTranslationValues: function(t, n, r, u, e, o, i) {
      var c = new a(8);
      c[0] = t, c[1] = n, c[2] = r, c[3] = u;
      var h = .5 * e,
        s = .5 * o,
        M = .5 * i;
      return c[4] = h * u + s * r - M * n, c[5] = s * u + M * t - h * r, c[6] = M * u + h * n - s * t, c[7] = -h * t - s * n - M * r, c
    },
    fromRotationTranslation: Mn,
    fromTranslation: function(t, n) {
      return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = .5 * n[0], t[5] = .5 * n[1], t[6] = .5 * n[2], t[7] = 0, t
    },
    fromRotation: function(t, n) {
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, t
    },
    fromMat4: function(t, n) {
      var r = jt();
      P(r, n);
      var u = new a(3);
      return R(u, n), Mn(t, r, u), t
    },
    copy: fn,
    identity: function(t) {
      return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, t
    },
    set: function(t, n, a, r, u, e, o, i, c) {
      return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t[4] = e, t[5] = o, t[6] = i, t[7] = c, t
    },
    getReal: ln,
    getDual: function(t, n) {
      return t[0] = n[4], t[1] = n[5], t[2] = n[6], t[3] = n[7], t
    },
    setReal: vn,
    setDual: function(t, n) {
      return t[4] = n[0], t[5] = n[1], t[6] = n[2], t[7] = n[3], t
    },
    getTranslation: function(t, n) {
      var a = n[4],
        r = n[5],
        u = n[6],
        e = n[7],
        o = -n[0],
        i = -n[1],
        c = -n[2],
        h = n[3];
      return t[0] = 2 * (a * h + e * o + r * c - u * i), t[1] = 2 * (r * h + e * i + u * o - a * c), t[2] = 2 * (u * h + e * c + a * i - r * o), t
    },
    translate: function(t, n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = .5 * a[0],
        c = .5 * a[1],
        h = .5 * a[2],
        s = n[4],
        M = n[5],
        f = n[6],
        l = n[7];
      return t[0] = r, t[1] = u, t[2] = e, t[3] = o, t[4] = o * i + u * h - e * c + s, t[5] = o * c + e * i - r * h + M, t[6] = o * h + r * c - u * i + f, t[7] = -r * i - u * c - e * h + l, t
    },
    rotateX: function(t, n, a) {
      var r = -n[0],
        u = -n[1],
        e = -n[2],
        o = n[3],
        i = n[4],
        c = n[5],
        h = n[6],
        s = n[7],
        M = i * o + s * r + c * e - h * u,
        f = c * o + s * u + h * r - i * e,
        l = h * o + s * e + i * u - c * r,
        v = s * o - i * r - c * u - h * e;
      return Et(t, n, a), r = t[0], u = t[1], e = t[2], o = t[3], t[4] = M * o + v * r + f * e - l * u, t[5] = f * o + v * u + l * r - M * e, t[6] = l * o + v * e + M * u - f * r, t[7] = v * o - M * r - f * u - l * e, t
    },
    rotateY: function(t, n, a) {
      var r = -n[0],
        u = -n[1],
        e = -n[2],
        o = n[3],
        i = n[4],
        c = n[5],
        h = n[6],
        s = n[7],
        M = i * o + s * r + c * e - h * u,
        f = c * o + s * u + h * r - i * e,
        l = h * o + s * e + i * u - c * r,
        v = s * o - i * r - c * u - h * e;
      return Ot(t, n, a), r = t[0], u = t[1], e = t[2], o = t[3], t[4] = M * o + v * r + f * e - l * u, t[5] = f * o + v * u + l * r - M * e, t[6] = l * o + v * e + M * u - f * r, t[7] = v * o - M * r - f * u - l * e, t
    },
    rotateZ: function(t, n, a) {
      var r = -n[0],
        u = -n[1],
        e = -n[2],
        o = n[3],
        i = n[4],
        c = n[5],
        h = n[6],
        s = n[7],
        M = i * o + s * r + c * e - h * u,
        f = c * o + s * u + h * r - i * e,
        l = h * o + s * e + i * u - c * r,
        v = s * o - i * r - c * u - h * e;
      return Tt(t, n, a), r = t[0], u = t[1], e = t[2], o = t[3], t[4] = M * o + v * r + f * e - l * u, t[5] = f * o + v * u + l * r - M * e, t[6] = l * o + v * e + M * u - f * r, t[7] = v * o - M * r - f * u - l * e, t
    },
    rotateByQuatAppend: function(t, n, a) {
      var r = a[0],
        u = a[1],
        e = a[2],
        o = a[3],
        i = n[0],
        c = n[1],
        h = n[2],
        s = n[3];
      return t[0] = i * o + s * r + c * e - h * u, t[1] = c * o + s * u + h * r - i * e, t[2] = h * o + s * e + i * u - c * r, t[3] = s * o - i * r - c * u - h * e, i = n[4], c = n[5], h = n[6], s = n[7], t[4] = i * o + s * r + c * e - h * u, t[5] = c * o + s * u + h * r - i * e, t[6] = h * o + s * e + i * u - c * r, t[7] = s * o - i * r - c * u - h * e, t
    },
    rotateByQuatPrepend: function(t, n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = a[0],
        c = a[1],
        h = a[2],
        s = a[3];
      return t[0] = r * s + o * i + u * h - e * c, t[1] = u * s + o * c + e * i - r * h, t[2] = e * s + o * h + r * c - u * i, t[3] = o * s - r * i - u * c - e * h, i = a[4], c = a[5], h = a[6], s = a[7], t[4] = r * s + o * i + u * h - e * c, t[5] = u * s + o * c + e * i - r * h, t[6] = e * s + o * h + r * c - u * i, t[7] = o * s - r * i - u * c - e * h, t
    },
    rotateAroundAxis: function(t, a, r, u) {
      if (Math.abs(u) < n) return fn(t, a);
      var e = Math.hypot(r[0], r[1], r[2]);
      u *= .5;
      var o = Math.sin(u),
        i = o * r[0] / e,
        c = o * r[1] / e,
        h = o * r[2] / e,
        s = Math.cos(u),
        M = a[0],
        f = a[1],
        l = a[2],
        v = a[3];
      t[0] = M * s + v * i + f * h - l * c, t[1] = f * s + v * c + l * i - M * h, t[2] = l * s + v * h + M * c - f * i, t[3] = v * s - M * i - f * c - l * h;
      var b = a[4],
        m = a[5],
        d = a[6],
        x = a[7];
      return t[4] = b * s + x * i + m * h - d * c, t[5] = m * s + x * c + d * i - b * h, t[6] = d * s + x * h + b * c - m * i, t[7] = x * s - b * i - m * c - d * h, t
    },
    add: function(t, n, a) {
      return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t[4] = n[4] + a[4], t[5] = n[5] + a[5], t[6] = n[6] + a[6], t[7] = n[7] + a[7], t
    },
    multiply: bn,
    mul: mn,
    scale: function(t, n, a) {
      return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t[4] = n[4] * a, t[5] = n[5] * a, t[6] = n[6] * a, t[7] = n[7] * a, t
    },
    dot: dn,
    lerp: function(t, n, a, r) {
      var u = 1 - r;
      return dn(n, a) < 0 && (r = -r), t[0] = n[0] * u + a[0] * r, t[1] = n[1] * u + a[1] * r, t[2] = n[2] * u + a[2] * r, t[3] = n[3] * u + a[3] * r, t[4] = n[4] * u + a[4] * r, t[5] = n[5] * u + a[5] * r, t[6] = n[6] * u + a[6] * r, t[7] = n[7] * u + a[7] * r, t
    },
    invert: function(t, n) {
      var a = yn(n);
      return t[0] = -n[0] / a, t[1] = -n[1] / a, t[2] = -n[2] / a, t[3] = n[3] / a, t[4] = -n[4] / a, t[5] = -n[5] / a, t[6] = -n[6] / a, t[7] = n[7] / a, t
    },
    conjugate: function(t, n) {
      return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = n[3], t[4] = -n[4], t[5] = -n[5], t[6] = -n[6], t[7] = n[7], t
    },
    length: xn,
    len: pn,
    squaredLength: yn,
    sqrLen: qn,
    normalize: function(t, n) {
      var a = yn(n);
      if (a > 0) {
        a = Math.sqrt(a);
        var r = n[0] / a,
          u = n[1] / a,
          e = n[2] / a,
          o = n[3] / a,
          i = n[4],
          c = n[5],
          h = n[6],
          s = n[7],
          M = r * i + u * c + e * h + o * s;
        t[0] = r, t[1] = u, t[2] = e, t[3] = o, t[4] = (i - r * M) / a, t[5] = (c - u * M) / a, t[6] = (h - e * M) / a, t[7] = (s - o * M) / a
      }
      return t
    },
    str: function(t) {
      return "quat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ")"
    },
    exactEquals: function(t, n) {
      return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7]
    },
    equals: function(t, a) {
      var r = t[0],
        u = t[1],
        e = t[2],
        o = t[3],
        i = t[4],
        c = t[5],
        h = t[6],
        s = t[7],
        M = a[0],
        f = a[1],
        l = a[2],
        v = a[3],
        b = a[4],
        m = a[5],
        d = a[6],
        x = a[7];
      return Math.abs(r - M) <= n * Math.max(1, Math.abs(r), Math.abs(M)) && Math.abs(u - f) <= n * Math.max(1, Math.abs(u), Math.abs(f)) && Math.abs(e - l) <= n * Math.max(1, Math.abs(e), Math.abs(l)) && Math.abs(o - v) <= n * Math.max(1, Math.abs(o), Math.abs(v)) && Math.abs(i - b) <= n * Math.max(1, Math.abs(i), Math.abs(b)) && Math.abs(c - m) <= n * Math.max(1, Math.abs(c), Math.abs(m)) && Math.abs(h - d) <= n * Math.max(1, Math.abs(h), Math.abs(d)) && Math.abs(s - x) <= n * Math.max(1, Math.abs(s), Math.abs(x))
    }
  });

  function An() {
    var t = new a(2);
    return a != Float32Array && (t[0] = 0, t[1] = 0), t
  }

  function wn(t, n, a) {
    return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t
  }

  function Rn(t, n, a) {
    return t[0] = n[0] * a[0], t[1] = n[1] * a[1], t
  }

  function zn(t, n, a) {
    return t[0] = n[0] / a[0], t[1] = n[1] / a[1], t
  }

  function Pn(t, n) {
    var a = n[0] - t[0],
      r = n[1] - t[1];
    return Math.hypot(a, r)
  }

  function jn(t, n) {
    var a = n[0] - t[0],
      r = n[1] - t[1];
    return a * a + r * r
  }

  function In(t) {
    var n = t[0],
      a = t[1];
    return Math.hypot(n, a)
  }

  function Sn(t) {
    var n = t[0],
      a = t[1];
    return n * n + a * a
  }
  var En = In,
    On = wn,
    Tn = Rn,
    Dn = zn,
    Fn = Pn,
    Ln = jn,
    Vn = Sn,
    Qn = function() {
      var t = An();
      return function(n, a, r, u, e, o) {
        var i, c;
        for (a || (a = 2), r || (r = 0), c = u ? Math.min(u * a + r, n.length) : n.length, i = r; i < c; i += a) t[0] = n[i], t[1] = n[i + 1], e(t, t, o), n[i] = t[0], n[i + 1] = t[1];
        return n
      }
    }(),
    Yn = Object.freeze({
      create: An,
      clone: function(t) {
        var n = new a(2);
        return n[0] = t[0], n[1] = t[1], n
      },
      fromValues: function(t, n) {
        var r = new a(2);
        return r[0] = t, r[1] = n, r
      },
      copy: function(t, n) {
        return t[0] = n[0], t[1] = n[1], t
      },
      set: function(t, n, a) {
        return t[0] = n, t[1] = a, t
      },
      add: function(t, n, a) {
        return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t
      },
      subtract: wn,
      multiply: Rn,
      divide: zn,
      ceil: function(t, n) {
        return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t
      },
      floor: function(t, n) {
        return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t
      },
      min: function(t, n, a) {
        return t[0] = Math.min(n[0], a[0]), t[1] = Math.min(n[1], a[1]), t
      },
      max: function(t, n, a) {
        return t[0] = Math.max(n[0], a[0]), t[1] = Math.max(n[1], a[1]), t
      },
      round: function(t, n) {
        return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t
      },
      scale: function(t, n, a) {
        return t[0] = n[0] * a, t[1] = n[1] * a, t
      },
      scaleAndAdd: function(t, n, a, r) {
        return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t
      },
      distance: Pn,
      squaredDistance: jn,
      length: In,
      squaredLength: Sn,
      negate: function(t, n) {
        return t[0] = -n[0], t[1] = -n[1], t
      },
      inverse: function(t, n) {
        return t[0] = 1 / n[0], t[1] = 1 / n[1], t
      },
      normalize: function(t, n) {
        var a = n[0],
          r = n[1],
          u = a * a + r * r;
        return u > 0 && (u = 1 / Math.sqrt(u)), t[0] = n[0] * u, t[1] = n[1] * u, t
      },
      dot: function(t, n) {
        return t[0] * n[0] + t[1] * n[1]
      },
      cross: function(t, n, a) {
        var r = n[0] * a[1] - n[1] * a[0];
        return t[0] = t[1] = 0, t[2] = r, t
      },
      lerp: function(t, n, a, r) {
        var u = n[0],
          e = n[1];
        return t[0] = u + r * (a[0] - u), t[1] = e + r * (a[1] - e), t
      },
      random: function(t, n) {
        n = n || 1;
        var a = 2 * r() * Math.PI;
        return t[0] = Math.cos(a) * n, t[1] = Math.sin(a) * n, t
      },
      transformMat2: function(t, n, a) {
        var r = n[0],
          u = n[1];
        return t[0] = a[0] * r + a[2] * u, t[1] = a[1] * r + a[3] * u, t
      },
      transformMat2d: function(t, n, a) {
        var r = n[0],
          u = n[1];
        return t[0] = a[0] * r + a[2] * u + a[4], t[1] = a[1] * r + a[3] * u + a[5], t
      },
      transformMat3: function(t, n, a) {
        var r = n[0],
          u = n[1];
        return t[0] = a[0] * r + a[3] * u + a[6], t[1] = a[1] * r + a[4] * u + a[7], t
      },
      transformMat4: function(t, n, a) {
        var r = n[0],
          u = n[1];
        return t[0] = a[0] * r + a[4] * u + a[12], t[1] = a[1] * r + a[5] * u + a[13], t
      },
      rotate: function(t, n, a, r) {
        var u = n[0] - a[0],
          e = n[1] - a[1],
          o = Math.sin(r),
          i = Math.cos(r);
        return t[0] = u * i - e * o + a[0], t[1] = u * o + e * i + a[1], t
      },
      angle: function(t, n) {
        var a = t[0],
          r = t[1],
          u = n[0],
          e = n[1],
          o = a * a + r * r;
        o > 0 && (o = 1 / Math.sqrt(o));
        var i = u * u + e * e;
        i > 0 && (i = 1 / Math.sqrt(i));
        var c = (a * u + r * e) * o * i;
        return c > 1 ? 0 : c < -1 ? Math.PI : Math.acos(c)
      },
      zero: function(t) {
        return t[0] = 0, t[1] = 0, t
      },
      str: function(t) {
        return "vec2(" + t[0] + ", " + t[1] + ")"
      },
      exactEquals: function(t, n) {
        return t[0] === n[0] && t[1] === n[1]
      },
      equals: function(t, a) {
        var r = t[0],
          u = t[1],
          e = a[0],
          o = a[1];
        return Math.abs(r - e) <= n * Math.max(1, Math.abs(r), Math.abs(e)) && Math.abs(u - o) <= n * Math.max(1, Math.abs(u), Math.abs(o))
      },
      len: En,
      sub: On,
      mul: Tn,
      div: Dn,
      dist: Fn,
      sqrDist: Ln,
      sqrLen: Vn,
      forEach: Qn
    });
  t.glMatrix = e, t.mat2 = s, t.mat2d = b, t.mat3 = q, t.mat4 = E, t.quat = sn, t.quat2 = gn, t.vec2 = Yn, t.vec3 = $, t.vec4 = Pt, Object.defineProperty(t, "__esModule", {
    value: !0
  })
});

// ["glMatrix", "mat2", "mat2d", "mat3", "mat4", "quat", "quat2", "vec2", "vec3", "vec4"]
window.glMatrix = glMatrix;
window.mat2 = glMatrix.mat2;
window.mat2d = glMatrix.mat2d;
window.mat3 = glMatrix.mat3;
window.mat4 = glMatrix.mat4;
window.quat = glMatrix.quat;
window.quat2 = glMatrix.quat2;
window.vec2 = glMatrix.vec2;
window.vec3 = glMatrix.vec3;
window.vec4 = glMatrix.vec4;


CABLES.exportedPatches || (CABLES.exportedPatches = {}), CABLES.exportedPatches.EQqT8q = {
  settings: {
    opExample: [],
    licence: "none",
    isPublic: !1
  },
  ops: [{
    opId: "2b58daad-4dde-4edb-af22-03ac55ab06ab",
    objName: "Ops.Gl.Shader.PickingMaterial",
    id: "abd34333-7250-45ec-aa6b-0a1de7c88c86",
    uiAttribs: {
      subPatch: 0,
      notWorkingMsg: null,
      selected: !1
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "abd34333-7250-45ec-aa6b-0a1de7c88c86",
        objOut: "02f3df3a-dd46-4c8c-a1e5-6b4def23bb41"
      }]
    }, {
      name: "billboard",
      value: !1
    }, {
      name: "cursor",
      value: "default"
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "is picked"
    }, {
      name: "On Picked"
    }]
  }, {
    opId: "641934f6-5143-4a6b-b592-08ab26e2cab0",
    objName: "Ops.Trigger.Sequence",
    id: "7f70882b-4023-4989-bc41-b73352394018",
    uiAttribs: {
      title: "sequence",
      subPatch: 0,
      notWorkingMsg: null,
      selected: !1
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "finished",
        objIn: "7f70882b-4023-4989-bc41-b73352394018",
        objOut: "7b0fe074-ef4f-4d0d-833b-7a171bef5a23"
      }]
    }, {
      name: "exe 0",
      value: 0
    }, {
      name: "exe 1",
      value: 0
    }, {
      name: "exe 2",
      value: 0
    }, {
      name: "exe 3",
      value: 0
    }, {
      name: "exe 4",
      value: 0
    }, {
      name: "exe 5",
      value: 0
    }, {
      name: "exe 6",
      value: 0
    }, {
      name: "exe 7",
      value: 0
    }, {
      name: "exe 8",
      value: 0
    }, {
      name: "exe 9",
      value: 0
    }, {
      name: "exe 10",
      value: 0
    }, {
      name: "exe 11",
      value: 0
    }, {
      name: "exe 12",
      value: 0
    }, {
      name: "exe 13",
      value: 0
    }, {
      name: "exe 14",
      value: 0
    }],
    portsOut: [{
      name: "trigger 0",
      value: 0
    }, {
      name: "trigger 1",
      value: 0
    }, {
      name: "trigger 2",
      value: 0
    }, {
      name: "trigger 3",
      value: 0
    }, {
      name: "trigger 4",
      value: 0
    }, {
      name: "trigger 5",
      value: 0
    }, {
      name: "trigger 6",
      value: 0
    }, {
      name: "trigger 7",
      value: 0
    }, {
      name: "trigger 8",
      value: 0
    }, {
      name: "trigger 9",
      value: 0
    }, {
      name: "trigger 10",
      value: 0
    }, {
      name: "trigger 11"
    }, {
      name: "trigger 12"
    }, {
      name: "trigger 13"
    }, {
      name: "trigger 14"
    }, {
      name: "trigger 15"
    }]
  }, {
    opId: "cedffacf-0f09-4342-bd21-540bd9c8037d",
    objName: "Ops.Devices.TouchScreen",
    id: "0edd9790-73d5-442b-9bda-f79466a8ae90",
    uiAttribs: {
      subPatch: 0,
      notWorkingMsg: null,
      selected: !1
    },
    portsIn: [{
      name: "Disable Scaling",
      value: !0
    }, {
      name: "Disable Scroll",
      value: !0
    }, {
      name: "HDPI Coordinates",
      value: !1
    }, {
      name: "Active",
      value: !0
    }, {
      name: "Area index",
      value: 0
    }, {
      name: "Area",
      value: "Canvas"
    }, {
      name: "Normalize Coordinates",
      value: !1
    }, {
      name: "Flip Y",
      value: !1
    }],
    portsOut: [{
      name: "Touched",
      value: 0
    }, {
      name: "Fingers",
      value: 0
    }, {
      name: "Finger 1 X"
    }, {
      name: "Finger 1 Y"
    }, {
      name: "Finger 1 Force",
      value: 0
    }, {
      name: "Finger 2 X",
      value: 0
    }, {
      name: "Finger 2 Y",
      value: 0
    }, {
      name: "Events"
    }, {
      name: "Touch Start",
      value: 0
    }, {
      name: "Touch End",
      value: 0
    }]
  }, {
    opId: "09122fbf-3b6b-4a05-ac76-fca031b505b9",
    objName: "Ops.Gl.Shader.Picker",
    id: "cbbbe67c-000c-4694-93b8-1e89ecbbc9a8",
    uiAttribs: {
      subPatch: 0,
      notWorkingMsg: null,
      selected: !1
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "cbbbe67c-000c-4694-93b8-1e89ecbbc9a8",
        objOut: "1914fb54-89f4-4573-8669-9fee137ce339"
      }]
    }, {
      name: "Use Mouse Coordinates",
      value: !0
    }, {
      name: "x",
      links: [{
        portIn: "x",
        portOut: "Finger 1 X",
        objIn: "cbbbe67c-000c-4694-93b8-1e89ecbbc9a8",
        objOut: "0edd9790-73d5-442b-9bda-f79466a8ae90"
      }]
    }, {
      name: "y",
      links: [{
        portIn: "y",
        portOut: "Finger 1 Y",
        objIn: "cbbbe67c-000c-4694-93b8-1e89ecbbc9a8",
        objOut: "0edd9790-73d5-442b-9bda-f79466a8ae90"
      }]
    }, {
      name: "enabled",
      value: !0
    }, {
      name: "cursor index",
      value: 0
    }, {
      name: "cursor",
      value: "default"
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "Something Picked",
      value: !1
    }, {
      name: "pick texture"
    }]
  }, {
    opId: "ca3bc984-e596-48fb-b53d-502eb13979b0",
    objName: "Ops.Gl.RandomCluster",
    id: "02f3df3a-dd46-4c8c-a1e5-6b4def23bb41",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "trigger",
        objIn: "02f3df3a-dd46-4c8c-a1e5-6b4def23bb41",
        objOut: "cbbbe67c-000c-4694-93b8-1e89ecbbc9a8"
      }]
    }, {
      name: "num",
      value: 10
    }, {
      name: "random seed",
      value: 1
    }, {
      name: "round",
      value: !1
    }, {
      name: "size",
      value: 10
    }, {
      name: "scaleX",
      value: .5
    }, {
      name: "scaleY",
      value: .5
    }, {
      name: "scaleZ",
      value: .5
    }, {
      name: "Rotate X",
      value: 1
    }, {
      name: "Rotate Y",
      value: 1
    }, {
      name: "Rotate Z",
      value: 1
    }, {
      name: "Scroll X",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "index"
    }, {
      name: "rnd",
      value: .18710991083676268
    }]
  }, {
    opId: "b0472a1d-db16-4ba6-8787-f300fbdc77bb",
    objName: "Ops.Gl.MainLoop",
    id: "f7acf1fa-2a5e-4eee-8349-c255a630071a",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "FPS Limit",
      value: 0
    }, {
      name: "Reduce FPS not focussed",
      value: !0
    }, {
      name: "Reduce FPS loading",
      value: !1
    }, {
      name: "Clear",
      value: !1
    }, {
      name: "ClearAlpha",
      value: !1
    }, {
      name: "Fullscreen Button",
      value: !1
    }, {
      name: "Active",
      value: !0
    }, {
      name: "Hires Displays",
      value: !1
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "width"
    }, {
      name: "height"
    }]
  }, {
    opId: "afea522b-ab72-4574-b721-5d37f5abaf77",
    objName: "Ops.Array.ArrayGetTexture",
    id: "dcb137c2-f579-4edf-b32d-fb6f2f4b27c0",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "array",
      links: [{
        portIn: "array",
        portOut: "TextureArray",
        objIn: "dcb137c2-f579-4edf-b32d-fb6f2f4b27c0",
        objOut: "d415c86c-ff25-4a52-8842-6700098a2cf6"
      }]
    }, {
      name: "index",
      links: [{
        portIn: "index",
        portOut: "index",
        objIn: "dcb137c2-f579-4edf-b32d-fb6f2f4b27c0",
        objOut: "02f3df3a-dd46-4c8c-a1e5-6b4def23bb41"
      }]
    }],
    portsOut: [{
      name: "value"
    }]
  }, {
    opId: "30f01b6d-b234-4ebe-a2c3-ebffd96a31e9",
    objName: "Ops.Patch.LoadingStatus",
    id: "7b0fe074-ef4f-4d0d-833b-7a171bef5a23",
    uiAttribs: {
      subPatch: 0,
      notWorkingMsg: null,
      selected: !1
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "trigger",
        objIn: "7b0fe074-ef4f-4d0d-833b-7a171bef5a23",
        objOut: "f7acf1fa-2a5e-4eee-8349-c255a630071a"
      }]
    }, {
      name: "preRenderTimes",
      value: 0
    }, {
      name: "PreRender Ops",
      value: !1
    }, {
      name: "Play Timeline",
      value: !0
    }],
    portsOut: [{
      name: "finished"
    }, {
      name: "status",
      value: 1
    }, {
      name: "all loaded",
      value: !0
    }, {
      name: "preRenderStatus",
      value: 0
    }, {
      name: "numAssets",
      value: 0
    }, {
      name: "loading"
    }, {
      name: "loading finished",
      value: 0
    }]
  }, {
    opId: "650baeb1-db2d-4781-9af6-ab4e9d4277be",
    objName: "Ops.Gl.Matrix.Transform",
    id: "c1894429-36fc-43cf-89a7-c58dfb3000c4",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "then",
        objIn: "c1894429-36fc-43cf-89a7-c58dfb3000c4",
        objOut: "8465b7d9-e6d4-4378-a91f-c6b59816a4eb"
      }]
    }, {
      name: "posX",
      value: 0
    }, {
      name: "posY",
      value: 0
    }, {
      name: "posZ",
      value: 0
    }, {
      name: "scale",
      value: 1.2
    }, {
      name: "rotX",
      value: 0
    }, {
      name: "rotY",
      value: 0
    }, {
      name: "rotZ",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "b24dbfdc-485c-49d2-92a1-7258efd9239a",
    objName: "Ops.Gl.Matrix.Camera",
    id: "1914fb54-89f4-4573-8669-9fee137ce339",
    uiAttribs: {
      subPatch: 0,
      notWorkingMsg: null,
      comment: "\n",
      selected: !1
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "1914fb54-89f4-4573-8669-9fee137ce339",
        objOut: "8b7fe07a-6de7-48c7-bc9e-29a9b01b1a9e"
      }]
    }, {
      name: "projection mode index",
      value: 0
    }, {
      name: "projection mode",
      value: "prespective"
    }, {
      name: "frustum near",
      value: .01
    }, {
      name: "frustum far",
      value: 5e3
    }, {
      name: "fov",
      value: 45
    }, {
      name: "Auto Aspect Ratio",
      value: !0
    }, {
      name: "Aspect Ratio",
      value: 1
    }, {
      name: "eye X",
      links: [{
        portIn: "eye X",
        portOut: "Value",
        objIn: "1914fb54-89f4-4573-8669-9fee137ce339",
        objOut: "ce4013fa-f39c-4d30-aacd-170093e36a86"
      }]
    }, {
      name: "eye Y",
      links: [{
        portIn: "eye Y",
        portOut: "Value",
        objIn: "1914fb54-89f4-4573-8669-9fee137ce339",
        objOut: "e23fe5ac-f5f2-4228-9c1d-11e24af8efcf"
      }]
    }, {
      name: "eye Z",
      links: [{
        portIn: "eye Z",
        portOut: "Value",
        objIn: "1914fb54-89f4-4573-8669-9fee137ce339",
        objOut: "0cf13f32-ec74-41eb-910a-d96f0afe099c"
      }]
    }, {
      name: "center X",
      value: "0"
    }, {
      name: "center Y",
      value: 0
    }, {
      name: "center Z",
      value: 0
    }, {
      name: "truck",
      value: 0
    }, {
      name: "boom",
      value: 0
    }, {
      name: "dolly",
      value: 0
    }, {
      name: "tilt",
      value: 0
    }, {
      name: "pan",
      value: 0
    }, {
      name: "roll",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "Aspect",
      value: 1.7780898876404494
    }, {
      name: "Look At Array"
    }]
  }, {
    opId: "1b9c4504-d69a-43c2-b747-8ca795a8950f",
    objName: "Ops.Vars.VarGetNumber",
    id: "ce4013fa-f39c-4d30-aacd-170093e36a86",
    uiAttribs: {
      title: "#x_pos",
      subPatch: 0,
      notWorkingMsg: null,
      color: "#07F78C",
      selected: !1
    },
    portsIn: [{
      name: "Variable",
      value: "x_pos"
    }],
    portsOut: [{
      name: "Value"
    }]
  }, {
    opId: "1b9c4504-d69a-43c2-b747-8ca795a8950f",
    objName: "Ops.Vars.VarGetNumber",
    id: "e23fe5ac-f5f2-4228-9c1d-11e24af8efcf",
    uiAttribs: {
      title: "#y_pos",
      subPatch: 0,
      notWorkingMsg: null,
      color: "#07F78C",
      selected: !1
    },
    portsIn: [{
      name: "Variable",
      value: "y_pos"
    }],
    portsOut: [{
      name: "Value"
    }]
  }, {
    opId: "1b9c4504-d69a-43c2-b747-8ca795a8950f",
    objName: "Ops.Vars.VarGetNumber",
    id: "0cf13f32-ec74-41eb-910a-d96f0afe099c",
    uiAttribs: {
      title: "#z_pos",
      subPatch: 0,
      notWorkingMsg: null,
      color: "#07F78C",
      selected: !1
    },
    portsIn: [{
      name: "Variable",
      value: "z_pos"
    }],
    portsOut: [{
      name: "Value"
    }]
  }, {
    opId: "9989b1c0-1073-4d5f-bfa0-36dd98b66e27",
    objName: "Ops.Trigger.SetNumberOnTrigger",
    id: "8963e86e-e5bb-403a-8dfb-456f7bb0757a",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null,
      comment: null
    },
    portsIn: [{
      name: "Set",
      links: [{
        portIn: "Set",
        portOut: "then",
        objIn: "8963e86e-e5bb-403a-8dfb-456f7bb0757a",
        objOut: "08bab7af-e890-4fb6-a6fc-5d98001e862f"
      }]
    }, {
      name: "Number",
      links: [{
        portIn: "Number",
        portOut: "index",
        objIn: "8963e86e-e5bb-403a-8dfb-456f7bb0757a",
        objOut: "02f3df3a-dd46-4c8c-a1e5-6b4def23bb41"
      }]
    }],
    portsOut: [{
      name: "Next",
      value: 0
    }, {
      name: "Out Value"
    }]
  }, {
    opId: "a466bc1f-06e9-4595-8849-bffb9fe22f99",
    objName: "Ops.Sequence",
    id: "d4166fe7-e676-4e00-af7f-df88a6e07a6f",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "trigger",
        objIn: "d4166fe7-e676-4e00-af7f-df88a6e07a6f",
        objOut: "cbbbe67c-000c-4694-93b8-1e89ecbbc9a8"
      }]
    }, {
      name: "exe 0",
      value: null
    }, {
      name: "exe 1",
      value: null
    }, {
      name: "exe 2",
      value: 0
    }, {
      name: "exe 3",
      value: 0
    }, {
      name: "exe 4",
      value: 0
    }, {
      name: "exe 5",
      value: 0
    }, {
      name: "exe 6",
      value: 0
    }, {
      name: "exe 7",
      value: 0
    }, {
      name: "exe 8",
      value: 0
    }, {
      name: "exe 9",
      value: 0
    }, {
      name: "exe 10",
      value: 0
    }, {
      name: "exe 11",
      value: 0
    }, {
      name: "exe 12",
      value: 0
    }, {
      name: "exe 13",
      value: 0
    }, {
      name: "exe 14",
      value: 0
    }],
    portsOut: [{
      name: "trigger 0"
    }, {
      name: "trigger 1"
    }, {
      name: "trigger 2"
    }, {
      name: "trigger 3",
      value: 0
    }, {
      name: "trigger 4",
      value: 0
    }, {
      name: "trigger 5",
      value: 0
    }, {
      name: "trigger 6",
      value: 0
    }, {
      name: "trigger 7",
      value: 0
    }, {
      name: "trigger 8",
      value: 0
    }, {
      name: "trigger 9",
      value: 0
    }, {
      name: "trigger 10",
      value: 0
    }, {
      name: "trigger 11",
      value: 0
    }, {
      name: "trigger 12",
      value: 0
    }, {
      name: "trigger 13",
      value: 0
    }, {
      name: "trigger 14",
      value: 0
    }, {
      name: "trigger 15",
      value: 0
    }]
  }, {
    opId: "e8196d70-d0a6-470a-9448-a7ac0c0e956e",
    objName: "Ops.Trigger.IfEqualsThen",
    id: "35a8b6ee-d62b-4dd9-ae91-887a6582a371",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "trigger",
        objIn: "35a8b6ee-d62b-4dd9-ae91-887a6582a371",
        objOut: "89de98ca-719b-4e29-aebd-b820e3b2b6eb"
      }, {
        portIn: "exe",
        portOut: "trigger",
        objIn: "35a8b6ee-d62b-4dd9-ae91-887a6582a371",
        objOut: "ee81e107-c297-4805-a724-2b66027e59cb"
      }]
    }, {
      name: "Value 1",
      links: [{
        portIn: "Value 1",
        portOut: "index",
        objIn: "35a8b6ee-d62b-4dd9-ae91-887a6582a371",
        objOut: "02f3df3a-dd46-4c8c-a1e5-6b4def23bb41"
      }]
    }, {
      name: "Value 2",
      links: [{
        portIn: "Value 2",
        portOut: "Out Value",
        objIn: "35a8b6ee-d62b-4dd9-ae91-887a6582a371",
        objOut: "8963e86e-e5bb-403a-8dfb-456f7bb0757a"
      }]
    }],
    portsOut: [{
      name: "then"
    }, {
      name: "else",
      value: 0
    }]
  }, {
    opId: "390d0214-92a9-48e9-85b4-f3092ee9e043",
    objName: "Ops.Gl.Matrix.Coordinates",
    id: "97194514-9fef-4b25-85d4-e8c79985f01e",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "Trigger out",
        objIn: "97194514-9fef-4b25-85d4-e8c79985f01e",
        objOut: "9c3c826d-956b-4cca-82ef-a9c14b018694"
      }]
    }],
    portsOut: [{
      name: "trigger",
      value: 0
    }, {
      name: "X"
    }, {
      name: "Y"
    }, {
      name: "Z"
    }]
  }, {
    opId: "9549e2ed-a544-4d33-a672-05c7854ccf5d",
    objName: "Ops.Boolean.IfTrueThen_v2",
    id: "08bab7af-e890-4fb6-a6fc-5d98001e862f",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "On Picked",
        objIn: "08bab7af-e890-4fb6-a6fc-5d98001e862f",
        objOut: "abd34333-7250-45ec-aa6b-0a1de7c88c86"
      }]
    }, {
      name: "boolean",
      links: [{
        portIn: "boolean",
        portOut: "button down",
        objIn: "08bab7af-e890-4fb6-a6fc-5d98001e862f",
        objOut: "6d302986-e35e-41d9-91e4-77458e3cdee5"
      }]
    }],
    portsOut: [{
      name: "then"
    }, {
      name: "else",
      value: 0
    }]
  }, {
    opId: "650baeb1-db2d-4781-9af6-ab4e9d4277be",
    objName: "Ops.Gl.Matrix.Transform",
    id: "8b7fe07a-6de7-48c7-bc9e-29a9b01b1a9e",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger 11",
        objIn: "8b7fe07a-6de7-48c7-bc9e-29a9b01b1a9e",
        objOut: "7f70882b-4023-4989-bc41-b73352394018"
      }]
    }, {
      name: "posX",
      value: 0
    }, {
      name: "posY",
      value: 0
    }, {
      name: "posZ",
      links: [{
        portIn: "posZ",
        portOut: "Result",
        objIn: "8b7fe07a-6de7-48c7-bc9e-29a9b01b1a9e",
        objOut: "9da33da2-5f90-4e99-9387-79761f335911"
      }]
    }, {
      name: "scale",
      value: 1
    }, {
      name: "rotX",
      links: [{
        portIn: "rotX",
        portOut: "Time",
        objIn: "8b7fe07a-6de7-48c7-bc9e-29a9b01b1a9e",
        objOut: "38ee6da3-24f0-4fb9-90d4-a42aa9faeca0"
      }]
    }, {
      name: "rotY",
      value: 0
    }, {
      name: "rotZ",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "aac7f721-208f-411a-adb3-79adae2e471a",
    objName: "Ops.Anim.Timer_v2",
    id: "38ee6da3-24f0-4fb9-90d4-a42aa9faeca0",
    uiAttribs: {
      subPatch: 0,
      notWorkingMsg: null,
      selected: !1
    },
    portsIn: [{
      name: "Speed",
      value: 4
    }, {
      name: "Play",
      value: !0
    }, {
      name: "Reset",
      value: 0
    }, {
      name: "Sync to timeline",
      value: !1
    }],
    portsOut: [{
      name: "Time"
    }]
  }, {
    opId: "44d34542-174c-47c6-b9c6-adde6fc371ac",
    objName: "Ops.Array.ArrayGetObject",
    id: "b59b2057-1050-41b0-ab35-81a358b48d7c",
    uiAttribs: {
      subPatch: 0,
      notWorkingMsg: "This op can not do anything without at least connecting those ports: ARRAY",
      selected: !1,
      working: !1
    },
    portsIn: [{
      name: "array"
    }, {
      name: "index",
      links: [{
        portIn: "index",
        portOut: "Out Value",
        objIn: "b59b2057-1050-41b0-ab35-81a358b48d7c",
        objOut: "8963e86e-e5bb-403a-8dfb-456f7bb0757a"
      }]
    }],
    portsOut: [{
      name: "value"
    }]
  }, {
    opId: "7d86cd28-f7d8-44a1-a4da-466c4782aaec",
    objName: "Ops.Json.ObjectGetString",
    id: "176cef82-2f7d-4905-81c9-75a193eaa875",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null,
      extendTitle: "caption"
    },
    portsIn: [{
      name: "data",
      links: [{
        portIn: "data",
        portOut: "value",
        objIn: "176cef82-2f7d-4905-81c9-75a193eaa875",
        objOut: "b59b2057-1050-41b0-ab35-81a358b48d7c"
      }]
    }, {
      name: "Key",
      value: "caption"
    }],
    portsOut: [{
      name: "Result"
    }]
  }, {
    opId: "db36db6d-83e4-4d27-b84c-8a20067aaffc",
    objName: "Ops.Html.DivElement_v2",
    id: "4c3ec88c-375f-4274-a0eb-2c7d36cebed9",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null,
      comment: null
    },
    portsIn: [{
      name: "Text",
      links: [{
        portIn: "Text",
        portOut: "Result",
        objIn: "4c3ec88c-375f-4274-a0eb-2c7d36cebed9",
        objOut: "176cef82-2f7d-4905-81c9-75a193eaa875"
      }]
    }, {
      name: "Id",
      value: ""
    }, {
      name: "Class",
      value: ""
    }, {
      name: "Style",
      value: "position:absolute;z-index:9999;\nwidth: 100%;\nbottom: 10%;\ntext-align: center;\ncolor: white;\nfont-size: 140%;\ntext-shadow: 0px 0 10px black;"
    }, {
      name: "Interactive",
      value: !1
    }, {
      name: "Visible",
      value: !0
    }, {
      name: "Convert Line Breaks",
      value: !1
    }],
    portsOut: [{
      name: "DOM Element"
    }, {
      name: "Hover",
      value: 0
    }, {
      name: "Clicked",
      value: 0
    }]
  }, {
    opId: "4ee5bc6d-fd73-4498-8378-6846e57cdd7f",
    objName: "Ops.Gl.TextureArrayLoader",
    id: "d415c86c-ff25-4a52-8842-6700098a2cf6",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null,
      warning: null,
      error: null
    },
    portsIn: [{
      name: "url",
      value: "assets/protestarsXXX.jpg"
    }, {
      name: "Left Pad",
      value: !1
    }, {
      name: "Num Digits",
      value: 3
    }, {
      name: "Index Start",
      value: 1
    }, {
      name: "Index End",
      value: 10
    }, {
      name: "filter index",
      value: 0
    }, {
      name: "filter",
      value: "linear"
    }, {
      name: "wrap index",
      value: 2
    }, {
      name: "wrap",
      value: "repeat"
    }, {
      name: "flip",
      value: !1
    }, {
      name: "unpackPreMultipliedAlpha",
      value: !1
    }],
    portsOut: [{
      name: "TextureArray"
    }, {
      name: "width",
      value: 3439
    }, {
      name: "height",
      value: 4e3
    }, {
      name: "loading",
      value: !1
    }, {
      name: "Aspect Ratio",
      value: .85975
    }]
  }, {
    opId: "790f3702-9833-464e-8e37-6f0f813f7e16",
    objName: "Ops.Gl.Texture_v2",
    id: "005c60cc-2de0-4eaf-9089-5fad43f6af6a",
    uiAttribs: {
      subPatch: "9d849031-4b83-414b-b43c-4bb9f5b080bb",
      selected: !1,
      extendTitle: "Logo",
      notWorkingMsg: null
    },
    portsIn: [{
      name: "File",
      value: "assets/5fdb4bc97949dc1492c5a2ed_Logo.png",
      display: "file"
    }, {
      name: "Filter index",
      value: 0
    }, {
      name: "Filter",
      value: "mipmap"
    }, {
      name: "Wrap index",
      value: 2
    }, {
      name: "Wrap",
      value: "repeat"
    }, {
      name: "Anisotropic index",
      value: 0
    }, {
      name: "Anisotropic",
      value: 0
    }, {
      name: "Flip",
      value: !1
    }, {
      name: "Pre Multiplied Alpha",
      value: !1
    }, {
      name: "Active",
      value: !0
    }],
    portsOut: [{
      name: "Texture"
    }, {
      name: "Width",
      value: 961
    }, {
      name: "Height",
      value: 214
    }, {
      name: "Aspect Ratio",
      value: 4.490654205607477
    }, {
      name: "Loaded",
      value: !0
    }]
  }, {
    opId: "ec55d252-3843-41b1-b731-0482dbd9e72b",
    objName: "Ops.Gl.Shader.BasicMaterial_v3",
    id: "c5f182b4-2e41-43e5-9fb1-8b27ec3a60b2",
    uiAttribs: {
      subPatch: "9d849031-4b83-414b-b43c-4bb9f5b080bb",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "c5f182b4-2e41-43e5-9fb1-8b27ec3a60b2",
        objOut: "501ea5af-544c-4a66-b4dc-e286e0eaa795"
      }]
    }, {
      name: "r",
      value: .15400090613941964
    }, {
      name: "g",
      value: .08008271219549545
    }, {
      name: "b",
      value: .787100502987069
    }, {
      name: "a",
      value: 1
    }, {
      name: "texture",
      links: [{
        portIn: "texture",
        portOut: "Texture",
        objIn: "c5f182b4-2e41-43e5-9fb1-8b27ec3a60b2",
        objOut: "005c60cc-2de0-4eaf-9089-5fad43f6af6a"
      }]
    }, {
      name: "colorizeTexture",
      value: !1
    }, {
      name: "textureOpacity",
      value: 0
    }, {
      name: "Alpha Mask Source index",
      value: 0
    }, {
      name: "Alpha Mask Source",
      value: "Luminance"
    }, {
      name: "Opacity TexCoords Transform",
      value: !1
    }, {
      name: "Discard Transparent Pixels",
      value: !1
    }, {
      name: "diffuseRepeatX",
      value: 1
    }, {
      name: "diffuseRepeatY",
      value: 1
    }, {
      name: "Tex Offset X",
      value: 0
    }, {
      name: "Tex Offset Y",
      value: 0
    }, {
      name: "Crop TexCoords",
      value: !1
    }, {
      name: "billboard",
      value: !1
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "shader"
    }]
  }, {
    opId: "fc5718d6-11a5-496e-8f16-1c78b1a2824c",
    objName: "Ops.Gl.Meshes.Rectangle_v2",
    id: "c20a9d43-d779-4ba0-b8f8-7bf8577138e5",
    uiAttribs: {
      subPatch: "9d849031-4b83-414b-b43c-4bb9f5b080bb",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "c20a9d43-d779-4ba0-b8f8-7bf8577138e5",
        objOut: "ff06a624-7af4-430a-8afe-1bf159be7907"
      }]
    }, {
      name: "width",
      value: 6.99
    }, {
      name: "height",
      value: 1.5
    }, {
      name: "pivot x index",
      value: 0
    }, {
      name: "pivot x",
      value: "left"
    }, {
      name: "pivot y index",
      value: 0
    }, {
      name: "pivot y",
      value: "bottom"
    }, {
      name: "num columns",
      value: 1
    }, {
      name: "num rows",
      value: 1
    }, {
      name: "axis index",
      value: 0
    }, {
      name: "axis",
      value: "xy"
    }, {
      name: "Active",
      value: !0
    }],
    portsOut: [{
      name: "trigger",
      value: 0
    }, {
      name: "geometry"
    }]
  }, {
    opId: "650baeb1-db2d-4781-9af6-ab4e9d4277be",
    objName: "Ops.Gl.Matrix.Transform",
    id: "ff06a624-7af4-430a-8afe-1bf159be7907",
    uiAttribs: {
      subPatch: "9d849031-4b83-414b-b43c-4bb9f5b080bb",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "ff06a624-7af4-430a-8afe-1bf159be7907",
        objOut: "c5f182b4-2e41-43e5-9fb1-8b27ec3a60b2"
      }]
    }, {
      name: "posX",
      value: 25
    }, {
      name: "posY",
      value: 20
    }, {
      name: "posZ",
      value: 0
    }, {
      name: "scale",
      value: 50
    }, {
      name: "rotX",
      value: 0
    }, {
      name: "rotY",
      value: 0
    }, {
      name: "rotZ",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "ca3bc984-e596-48fb-b53d-502eb13979b0",
    objName: "Ops.Gl.RandomCluster",
    id: "5357e93f-181e-46b0-a748-47fc482b0688",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "trigger",
        objIn: "5357e93f-181e-46b0-a748-47fc482b0688",
        objOut: "952d5187-7c94-4611-bcc8-4509a7ae213e"
      }]
    }, {
      name: "num",
      value: 10
    }, {
      name: "random seed",
      value: 2
    }, {
      name: "round",
      value: !1
    }, {
      name: "size",
      value: 10
    }, {
      name: "scaleX",
      value: .5
    }, {
      name: "scaleY",
      value: .5
    }, {
      name: "scaleZ",
      value: .5
    }, {
      name: "Rotate X",
      value: 1
    }, {
      name: "Rotate Y",
      value: 1
    }, {
      name: "Rotate Z",
      value: 1
    }, {
      name: "Scroll X",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "index"
    }, {
      name: "rnd",
      value: .07188786008230452
    }]
  }, {
    opId: "09122fbf-3b6b-4a05-ac76-fca031b505b9",
    objName: "Ops.Gl.Shader.Picker",
    id: "952d5187-7c94-4611-bcc8-4509a7ae213e",
    uiAttribs: {
      title: "Picker.2",
      subPatch: 0,
      notWorkingMsg: null,
      selected: !1
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "952d5187-7c94-4611-bcc8-4509a7ae213e",
        objOut: "1914fb54-89f4-4573-8669-9fee137ce339"
      }]
    }, {
      name: "Use Mouse Coordinates",
      value: !0
    }, {
      name: "x",
      links: [{
        portIn: "x",
        portOut: "Finger 1 X",
        objIn: "952d5187-7c94-4611-bcc8-4509a7ae213e",
        objOut: "0edd9790-73d5-442b-9bda-f79466a8ae90"
      }]
    }, {
      name: "y",
      links: [{
        portIn: "y",
        portOut: "Finger 1 Y",
        objIn: "952d5187-7c94-4611-bcc8-4509a7ae213e",
        objOut: "0edd9790-73d5-442b-9bda-f79466a8ae90"
      }]
    }, {
      name: "enabled",
      value: !0
    }, {
      name: "cursor index",
      value: 0
    }, {
      name: "cursor",
      value: "default"
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "Something Picked",
      value: !1
    }, {
      name: "pick texture"
    }]
  }, {
    opId: "2b58daad-4dde-4edb-af22-03ac55ab06ab",
    objName: "Ops.Gl.Shader.PickingMaterial",
    id: "4176fa40-1254-42f4-a279-f7a40e49b250",
    uiAttribs: {
      subPatch: 0,
      notWorkingMsg: null,
      selected: !1
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "4176fa40-1254-42f4-a279-f7a40e49b250",
        objOut: "5357e93f-181e-46b0-a748-47fc482b0688"
      }]
    }, {
      name: "billboard",
      value: !1
    }, {
      name: "cursor",
      value: "default"
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "is picked"
    }, {
      name: "On Picked"
    }]
  }, {
    opId: "9549e2ed-a544-4d33-a672-05c7854ccf5d",
    objName: "Ops.Boolean.IfTrueThen_v2",
    id: "fc1bac3a-0e1d-43b8-bb2c-cc4452cba9f0",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "On Picked",
        objIn: "fc1bac3a-0e1d-43b8-bb2c-cc4452cba9f0",
        objOut: "4176fa40-1254-42f4-a279-f7a40e49b250"
      }]
    }, {
      name: "boolean",
      links: [{
        portIn: "boolean",
        portOut: "button down",
        objIn: "fc1bac3a-0e1d-43b8-bb2c-cc4452cba9f0",
        objOut: "6d302986-e35e-41d9-91e4-77458e3cdee5"
      }]
    }],
    portsOut: [{
      name: "then"
    }, {
      name: "else",
      value: 0
    }]
  }, {
    opId: "ec55d252-3843-41b1-b731-0482dbd9e72b",
    objName: "Ops.Gl.Shader.BasicMaterial_v3",
    id: "b3bf1904-b635-4767-bebe-25ee13b482d7",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "b3bf1904-b635-4767-bebe-25ee13b482d7",
        objOut: "4176fa40-1254-42f4-a279-f7a40e49b250"
      }]
    }, {
      name: "r",
      value: .9511591414823111
    }, {
      name: "g",
      value: .8909603177838421
    }, {
      name: "b",
      value: .361337204025969
    }, {
      name: "a",
      value: 1
    }, {
      name: "texture",
      links: [{
        portIn: "texture",
        portOut: "value",
        objIn: "b3bf1904-b635-4767-bebe-25ee13b482d7",
        objOut: "7945aeb8-7d4c-4f8a-9cfc-6abb3e2add7e"
      }]
    }, {
      name: "colorizeTexture",
      value: !1
    }, {
      name: "textureOpacity",
      value: 0
    }, {
      name: "Alpha Mask Source index",
      value: 0
    }, {
      name: "Alpha Mask Source",
      value: "Luminance"
    }, {
      name: "Opacity TexCoords Transform",
      value: !1
    }, {
      name: "Discard Transparent Pixels",
      value: !1
    }, {
      name: "diffuseRepeatX",
      value: 1
    }, {
      name: "diffuseRepeatY",
      value: 1
    }, {
      name: "Tex Offset X",
      value: 0
    }, {
      name: "Tex Offset Y",
      value: 0
    }, {
      name: "Crop TexCoords",
      value: !1
    }, {
      name: "billboard",
      value: !1
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "shader"
    }]
  }, {
    opId: "fc5718d6-11a5-496e-8f16-1c78b1a2824c",
    objName: "Ops.Gl.Meshes.Rectangle_v2",
    id: "b7e7fd66-4a7d-4320-961d-14dd2acde68f",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "b7e7fd66-4a7d-4320-961d-14dd2acde68f",
        objOut: "61038aba-e319-4604-b6cd-4f878b0c32f0"
      }, {
        portIn: "render",
        portOut: "else",
        objIn: "b7e7fd66-4a7d-4320-961d-14dd2acde68f",
        objOut: "e40c41b3-61ee-4978-8d22-b20d447c2c63"
      }]
    }, {
      name: "width",
      value: .8
    }, {
      name: "height",
      value: 1.08343405
    }, {
      name: "pivot x index",
      value: 0
    }, {
      name: "pivot x",
      value: "center"
    }, {
      name: "pivot y index",
      value: 0
    }, {
      name: "pivot y",
      value: "center"
    }, {
      name: "num columns",
      value: 1
    }, {
      name: "num rows",
      value: 1
    }, {
      name: "axis index",
      value: 0
    }, {
      name: "axis",
      value: "xy"
    }, {
      name: "Active",
      value: !0
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "geometry"
    }]
  }, {
    opId: "d41e676e-d8a7-4a1e-8abf-f1bddfc982d5",
    objName: "Ops.Gl.Matrix.Billboard",
    id: "13b508d7-f978-458a-9d02-123ba1cbbbcd",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Exec",
      links: [{
        portIn: "Exec",
        portOut: "trigger",
        objIn: "13b508d7-f978-458a-9d02-123ba1cbbbcd",
        objOut: "b3bf1904-b635-4767-bebe-25ee13b482d7"
      }]
    }],
    portsOut: [{
      name: "Next"
    }]
  }, {
    opId: "9989b1c0-1073-4d5f-bfa0-36dd98b66e27",
    objName: "Ops.Trigger.SetNumberOnTrigger",
    id: "79493a21-fd93-439f-a7fe-c8868352a8b3",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Set",
      links: [{
        portIn: "Set",
        portOut: "then",
        objIn: "79493a21-fd93-439f-a7fe-c8868352a8b3",
        objOut: "fc1bac3a-0e1d-43b8-bb2c-cc4452cba9f0"
      }]
    }, {
      name: "Number",
      links: [{
        portIn: "Number",
        portOut: "index",
        objIn: "79493a21-fd93-439f-a7fe-c8868352a8b3",
        objOut: "5357e93f-181e-46b0-a748-47fc482b0688"
      }]
    }],
    portsOut: [{
      name: "Next",
      value: 0
    }, {
      name: "Out Value"
    }]
  }, {
    opId: "650baeb1-db2d-4781-9af6-ab4e9d4277be",
    objName: "Ops.Gl.Matrix.Transform",
    id: "61038aba-e319-4604-b6cd-4f878b0c32f0",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "then",
        objIn: "61038aba-e319-4604-b6cd-4f878b0c32f0",
        objOut: "e40c41b3-61ee-4978-8d22-b20d447c2c63"
      }]
    }, {
      name: "posX",
      value: 0
    }, {
      name: "posY",
      value: 0
    }, {
      name: "posZ",
      value: 0
    }, {
      name: "scale",
      value: 1.2
    }, {
      name: "rotX",
      value: 0
    }, {
      name: "rotY",
      value: 0
    }, {
      name: "rotZ",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "9549e2ed-a544-4d33-a672-05c7854ccf5d",
    objName: "Ops.Boolean.IfTrueThen_v2",
    id: "e40c41b3-61ee-4978-8d22-b20d447c2c63",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "else",
        objIn: "e40c41b3-61ee-4978-8d22-b20d447c2c63",
        objOut: "5ff4293e-ad6b-4392-97bb-a6bc94084454"
      }]
    }, {
      name: "boolean",
      links: [{
        portIn: "boolean",
        portOut: "is picked",
        objIn: "e40c41b3-61ee-4978-8d22-b20d447c2c63",
        objOut: "4176fa40-1254-42f4-a279-f7a40e49b250"
      }]
    }],
    portsOut: [{
      name: "then"
    }, {
      name: "else"
    }]
  }, {
    opId: "e8196d70-d0a6-470a-9448-a7ac0c0e956e",
    objName: "Ops.Trigger.IfEqualsThen",
    id: "f763a6de-4014-4641-84ce-347a8d37e5ff",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "trigger",
        objIn: "f763a6de-4014-4641-84ce-347a8d37e5ff",
        objOut: "b7e7fd66-4a7d-4320-961d-14dd2acde68f"
      }, {
        portIn: "exe",
        portOut: "trigger",
        objIn: "f763a6de-4014-4641-84ce-347a8d37e5ff",
        objOut: "394a29a9-b745-411b-b5b3-69b39863cebf"
      }]
    }, {
      name: "Value 1",
      links: [{
        portIn: "Value 1",
        portOut: "index",
        objIn: "f763a6de-4014-4641-84ce-347a8d37e5ff",
        objOut: "5357e93f-181e-46b0-a748-47fc482b0688"
      }]
    }, {
      name: "Value 2",
      links: [{
        portIn: "Value 2",
        portOut: "Out Value",
        objIn: "f763a6de-4014-4641-84ce-347a8d37e5ff",
        objOut: "79493a21-fd93-439f-a7fe-c8868352a8b3"
      }]
    }],
    portsOut: [{
      name: "then"
    }, {
      name: "else",
      value: 0
    }]
  }, {
    opId: "390d0214-92a9-48e9-85b4-f3092ee9e043",
    objName: "Ops.Gl.Matrix.Coordinates",
    id: "8d979afd-78c9-4332-8939-ebfc8ee6fb85",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "Trigger out",
        objIn: "8d979afd-78c9-4332-8939-ebfc8ee6fb85",
        objOut: "9ea6df7c-2ca3-46c1-999d-31af260edc8b"
      }]
    }],
    portsOut: [{
      name: "trigger",
      value: 0
    }, {
      name: "X"
    }, {
      name: "Y"
    }, {
      name: "Z"
    }]
  }, {
    opId: "65e8b8a2-ba13-485f-883a-2bcf377989da",
    objName: "Ops.Trigger.GateTrigger",
    id: "9c3c826d-956b-4cca-82ef-a9c14b018694",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Execute",
      links: [{
        portIn: "Execute",
        portOut: "then",
        objIn: "9c3c826d-956b-4cca-82ef-a9c14b018694",
        objOut: "35a8b6ee-d62b-4dd9-ae91-887a6582a371"
      }]
    }, {
      name: "Pass Through",
      links: [{
        portIn: "Pass Through",
        portOut: "result",
        objIn: "9c3c826d-956b-4cca-82ef-a9c14b018694",
        objOut: "2c47b6bc-f3d0-49b8-af75-96c968428c1c"
      }]
    }],
    portsOut: [{
      name: "Trigger out"
    }]
  }, {
    opId: "712a25f4-3a93-4042-b8c5-2f56169186cc",
    objName: "Ops.Boolean.ToggleBool",
    id: "2c47b6bc-f3d0-49b8-af75-96c968428c1c",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "trigger",
      links: [{
        portIn: "trigger",
        portOut: "then",
        objIn: "2c47b6bc-f3d0-49b8-af75-96c968428c1c",
        objOut: "08bab7af-e890-4fb6-a6fc-5d98001e862f"
      }]
    }, {
      name: "reset",
      links: [{
        portIn: "reset",
        portOut: "then",
        objIn: "2c47b6bc-f3d0-49b8-af75-96c968428c1c",
        objOut: "fc1bac3a-0e1d-43b8-bb2c-cc4452cba9f0"
      }, {
        portIn: "reset",
        portOut: "then",
        objIn: "2c47b6bc-f3d0-49b8-af75-96c968428c1c",
        objOut: "fa836447-779a-45d7-a2cc-fc9db11024b7"
      }, {
        portIn: "reset",
        portOut: "then",
        objIn: "2c47b6bc-f3d0-49b8-af75-96c968428c1c",
        objOut: "61dae76e-19bf-4ecc-88d2-896cf72d1dd2"
      }]
    }],
    portsOut: [{
      name: "result"
    }]
  }, {
    opId: "b5249226-6095-4828-8a1c-080654e192fa",
    objName: "Ops.Vars.VarSetNumber_v2",
    id: "e6652b44-a64f-4739-9f75-2b1506865609",
    uiAttribs: {
      title: "set #x_pos",
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null,
      color: "#07F78C"
    },
    portsIn: [{
      name: "Value",
      links: [{
        portIn: "Value",
        portOut: "Result",
        objIn: "e6652b44-a64f-4739-9f75-2b1506865609",
        objOut: "5724eb52-af7d-49a6-b997-670aedb016ac"
      }]
    }, {
      name: "Variable",
      value: "x_pos"
    }, {
      name: "Create new variable",
      value: 0
    }, {
      name: "",
      value: ["Rename"]
    }],
    portsOut: []
  }, {
    opId: "b5249226-6095-4828-8a1c-080654e192fa",
    objName: "Ops.Vars.VarSetNumber_v2",
    id: "5147e138-b847-4160-a8d8-f547f9296db9",
    uiAttribs: {
      title: "set #y_pos",
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null,
      color: "#07F78C"
    },
    portsIn: [{
      name: "Value",
      links: [{
        portIn: "Value",
        portOut: "Result",
        objIn: "5147e138-b847-4160-a8d8-f547f9296db9",
        objOut: "9de0be1a-9757-4505-984f-eb7d9372e932"
      }]
    }, {
      name: "Variable",
      value: "y_pos"
    }, {
      name: "Create new variable",
      value: 0
    }, {
      name: "",
      value: ["Rename"]
    }],
    portsOut: []
  }, {
    opId: "b5249226-6095-4828-8a1c-080654e192fa",
    objName: "Ops.Vars.VarSetNumber_v2",
    id: "b7864463-4a9a-4a93-a296-c05a2ff74132",
    uiAttribs: {
      title: "set #z_pos",
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null,
      color: "#07F78C"
    },
    portsIn: [{
      name: "Value",
      links: [{
        portIn: "Value",
        portOut: "Result",
        objIn: "b7864463-4a9a-4a93-a296-c05a2ff74132",
        objOut: "028698f4-0d98-40a0-9059-cb3fffb73361"
      }]
    }, {
      name: "Variable",
      value: "z_pos"
    }, {
      name: "Create new variable",
      value: 0
    }, {
      name: "",
      value: ["Rename"]
    }],
    portsOut: []
  }, {
    opId: "2390f6b3-2122-412e-8c8d-5c2f574e8bd1",
    objName: "Ops.Gl.Meshes.TextMesh_v2",
    id: "6a4f8bf3-04b5-4f79-b0d3-0ded0065af6b",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Render",
      links: [{
        portIn: "Render",
        portOut: "trigger",
        objIn: "6a4f8bf3-04b5-4f79-b0d3-0ded0065af6b",
        objOut: "d8d2151a-106e-42f2-a83b-b1755d2c93ae"
      }]
    }, {
      name: "Text",
      value: "ABOUT"
    }, {
      name: "Scale",
      value: 35
    }, {
      name: "Font",
      value: "Proxima Nova Regular"
    }, {
      name: "align index",
      value: 1
    }, {
      name: "align",
      value: "center"
    }, {
      name: "vertical align index",
      value: 1
    }, {
      name: "vertical align",
      value: "Middle"
    }, {
      name: "Line Height",
      value: 1
    }, {
      name: "Letter Spacing",
      value: 0
    }, {
      name: "filter index",
      value: 2
    }, {
      name: "filter",
      value: "mipmap"
    }, {
      name: "Anisotropic index",
      value: 0
    }, {
      name: "Anisotropic",
      value: 0
    }, {
      name: "Texture Color",
      value: 0
    }, {
      name: "Texture Mask",
      value: 0
    }, {
      name: "r",
      links: [{
        portIn: "r",
        portOut: "value",
        objIn: "6a4f8bf3-04b5-4f79-b0d3-0ded0065af6b",
        objOut: "f59b8ebe-94ee-4765-95a9-eeca3305b713"
      }]
    }, {
      name: "g",
      links: [{
        portIn: "g",
        portOut: "value",
        objIn: "6a4f8bf3-04b5-4f79-b0d3-0ded0065af6b",
        objOut: "b192c3b5-479f-4d83-aafd-c8f7a45640b6"
      }]
    }, {
      name: "b",
      links: [{
        portIn: "b",
        portOut: "value",
        objIn: "6a4f8bf3-04b5-4f79-b0d3-0ded0065af6b",
        objOut: "94a86a6c-2e8d-4940-898f-5659361c9a81"
      }]
    }, {
      name: "a",
      value: 1
    }],
    portsOut: [{
      name: "Next"
    }, {
      name: "texture"
    }, {
      name: "Total Lines",
      value: 1
    }, {
      name: "Width",
      value: 41.52499968005765
    }, {
      name: "Font Available",
      value: !0
    }]
  }, {
    opId: "a669d4f7-1e35-463c-bf8b-08c9f1b68e04",
    objName: "Ops.Html.HyperLink_v2",
    id: "8cbfc390-2540-4bdf-a087-8dfd9a76ee98",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Open",
      links: [{
        portIn: "Open",
        portOut: "Left Click",
        objIn: "8cbfc390-2540-4bdf-a087-8dfd9a76ee98",
        objOut: "ec8c6f01-d614-471b-b54d-cd06e00696f8"
      }]
    }, {
      name: "URL",
      value: "https://protestars.github.io/Protestars/about.html"
    }, {
      name: "Target Name",
      value: "_self"
    }, {
      name: "Specs",
      value: ""
    }],
    portsOut: []
  }, {
    opId: "75cadc63-62bb-4ddd-b519-aa99568a1e6b",
    objName: "Ops.Gl.Matrix.ScreenCoordinates",
    id: "33f01430-4312-4aca-a780-ff6711af55cc",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Execute",
      links: [{
        portIn: "Execute",
        portOut: "Next",
        objIn: "33f01430-4312-4aca-a780-ff6711af55cc",
        objOut: "6a4f8bf3-04b5-4f79-b0d3-0ded0065af6b"
      }]
    }],
    portsOut: [{
      name: "Trigger",
      value: 0
    }, {
      name: "X",
      value: 50.69999858736992
    }, {
      name: "Y",
      value: 321.73001432418823
    }, {
      name: "Visible",
      value: !0
    }]
  }, {
    opId: "650baeb1-db2d-4781-9af6-ab4e9d4277be",
    objName: "Ops.Gl.Matrix.Transform",
    id: "d8d2151a-106e-42f2-a83b-b1755d2c93ae",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "Trigger out",
        objIn: "d8d2151a-106e-42f2-a83b-b1755d2c93ae",
        objOut: "ec8c6f01-d614-471b-b54d-cd06e00696f8"
      }]
    }, {
      name: "posX",
      value: 0
    }, {
      name: "posY",
      value: -17
    }, {
      name: "posZ",
      value: 0
    }, {
      name: "scale",
      value: 1
    }, {
      name: "rotX",
      value: 0
    }, {
      name: "rotY",
      value: 0
    }, {
      name: "rotZ",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "d697ff82-74fd-4f31-8f54-295bc64e713d",
    objName: "Ops.String.String_v2",
    id: "58f31699-5770-418a-a567-5701bbbb39f7",
    uiAttribs: {
      title: "#fffcfd",
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "value",
      value: "fffcfd"
    }],
    portsOut: [{
      name: "String",
      value: "fffcfd"
    }]
  }, {
    opId: "d697ff82-74fd-4f31-8f54-295bc64e713d",
    objName: "Ops.String.String_v2",
    id: "b5b9a516-2120-417f-b23f-28c08ad91046",
    uiAttribs: {
      title: "#7b7ab8",
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "value",
      value: "7b7ab8"
    }],
    portsOut: [{
      name: "String",
      value: "7b7ab8"
    }]
  }, {
    opId: "7caa37c8-f2a7-49f2-a29c-96af362abca0",
    objName: "Ops.Value.ColorValue",
    id: "44984837-0091-4b62-bd06-f9c6eca79db2",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "r",
      value: 1
    }, {
      name: "g",
      value: .9882352941176471
    }, {
      name: "b",
      value: .992
    }, {
      name: "a",
      value: 0
    }],
    portsOut: [{
      name: "outr",
      value: 1
    }, {
      name: "outg",
      value: .9882352941176471
    }, {
      name: "outb",
      value: .992
    }, {
      name: "outa",
      value: 0
    }, {
      name: "Hex",
      value: "FFFCFD"
    }, {
      name: "Array"
    }]
  }, {
    opId: "7caa37c8-f2a7-49f2-a29c-96af362abca0",
    objName: "Ops.Value.ColorValue",
    id: "9413e43d-ce9b-458d-bc86-d192decbc621",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "r",
      value: .4823529411764706
    }, {
      name: "g",
      value: .47843137254901963
    }, {
      name: "b",
      value: .7215686274509804
    }, {
      name: "a",
      value: 0
    }],
    portsOut: [{
      name: "outr",
      value: .4823529411764706
    }, {
      name: "outg",
      value: .47843137254901963
    }, {
      name: "outb",
      value: .7215686274509804
    }, {
      name: "outa",
      value: 0
    }, {
      name: "Hex",
      value: "7B7AB8"
    }, {
      name: "Array"
    }]
  }, {
    opId: "06ad9d35-ccf5-4d31-889c-e23fa062588a",
    objName: "Ops.Anim.BoolAnim",
    id: "f59b8ebe-94ee-4765-95a9-eeca3305b713",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "Trigger out",
        objIn: "f59b8ebe-94ee-4765-95a9-eeca3305b713",
        objOut: "ec8c6f01-d614-471b-b54d-cd06e00696f8"
      }]
    }, {
      name: "bool",
      links: [{
        portIn: "bool",
        portOut: "Pointer Hover",
        objIn: "f59b8ebe-94ee-4765-95a9-eeca3305b713",
        objOut: "ec8c6f01-d614-471b-b54d-cd06e00696f8"
      }]
    }, {
      name: "easing",
      value: "linear"
    }, {
      name: "duration",
      value: .2
    }, {
      name: "Direction index",
      value: 0
    }, {
      name: "Direction",
      value: "Both"
    }, {
      name: "value false",
      value: .4823529411764706
    }, {
      name: "value true",
      value: 1
    }],
    portsOut: [{
      name: "trigger",
      value: 0
    }, {
      name: "value"
    }, {
      name: "finished",
      value: !0
    }, {
      name: "Finished Trigger",
      value: 0
    }]
  }, {
    opId: "06ad9d35-ccf5-4d31-889c-e23fa062588a",
    objName: "Ops.Anim.BoolAnim",
    id: "b192c3b5-479f-4d83-aafd-c8f7a45640b6",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "Trigger out",
        objIn: "b192c3b5-479f-4d83-aafd-c8f7a45640b6",
        objOut: "ec8c6f01-d614-471b-b54d-cd06e00696f8"
      }]
    }, {
      name: "bool",
      links: [{
        portIn: "bool",
        portOut: "Pointer Hover",
        objIn: "b192c3b5-479f-4d83-aafd-c8f7a45640b6",
        objOut: "ec8c6f01-d614-471b-b54d-cd06e00696f8"
      }]
    }, {
      name: "easing",
      value: "linear"
    }, {
      name: "duration",
      value: .2
    }, {
      name: "Direction index",
      value: 0
    }, {
      name: "Direction",
      value: "Both"
    }, {
      name: "value false",
      value: .47843137254901963
    }, {
      name: "value true",
      value: .9882352941176471
    }],
    portsOut: [{
      name: "trigger",
      value: 0
    }, {
      name: "value"
    }, {
      name: "finished",
      value: !0
    }, {
      name: "Finished Trigger",
      value: 0
    }]
  }, {
    opId: "06ad9d35-ccf5-4d31-889c-e23fa062588a",
    objName: "Ops.Anim.BoolAnim",
    id: "94a86a6c-2e8d-4940-898f-5659361c9a81",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "Trigger out",
        objIn: "94a86a6c-2e8d-4940-898f-5659361c9a81",
        objOut: "ec8c6f01-d614-471b-b54d-cd06e00696f8"
      }]
    }, {
      name: "bool",
      links: [{
        portIn: "bool",
        portOut: "Pointer Hover",
        objIn: "94a86a6c-2e8d-4940-898f-5659361c9a81",
        objOut: "ec8c6f01-d614-471b-b54d-cd06e00696f8"
      }]
    }, {
      name: "easing",
      value: "linear"
    }, {
      name: "duration",
      value: .2
    }, {
      name: "Direction index",
      value: 0
    }, {
      name: "Direction",
      value: "Both"
    }, {
      name: "value false",
      value: .7215686274509804
    }, {
      name: "value true",
      value: .992
    }],
    portsOut: [{
      name: "trigger",
      value: 0
    }, {
      name: "value"
    }, {
      name: "finished",
      value: !0
    }, {
      name: "Finished Trigger",
      value: 0
    }]
  }, {
    opId: "949d6daf-d677-4ed6-a921-51a5732b64ac",
    objName: "Ops.Gl.PixelProjection",
    id: "f2ff3169-c05d-41e0-be2a-a466bbac9992",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "else",
        objIn: "f2ff3169-c05d-41e0-be2a-a466bbac9992",
        objOut: "9e46f141-70a5-4d67-ba60-8f26a98083f1"
      }]
    }, {
      name: "use viewport size",
      value: !0
    }, {
      name: "Width",
      value: 500
    }, {
      name: "Height",
      value: 500
    }, {
      name: "frustum near",
      value: -500
    }, {
      name: "frustum far",
      value: 500
    }, {
      name: "Flip X",
      value: !1
    }, {
      name: "Flip Y",
      value: !1
    }, {
      name: "Zero Y",
      value: !1
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "650baeb1-db2d-4781-9af6-ab4e9d4277be",
    objName: "Ops.Gl.Matrix.Transform",
    id: "37c3ca41-e518-43f8-abe1-eed7e8a6034d",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "37c3ca41-e518-43f8-abe1-eed7e8a6034d",
        objOut: "f2ff3169-c05d-41e0-be2a-a466bbac9992"
      }]
    }, {
      name: "posX",
      value: 50.7
    }, {
      name: "posY",
      links: [{
        portIn: "posY",
        portOut: "result",
        objIn: "37c3ca41-e518-43f8-abe1-eed7e8a6034d",
        objOut: "d2fa8d27-ce2c-49cc-809f-e387aa07a4e8"
      }]
    }, {
      name: "posZ",
      value: 0
    }, {
      name: "scale",
      value: .7
    }, {
      name: "rotX",
      value: 0
    }, {
      name: "rotY",
      value: 0
    }, {
      name: "rotZ",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "334728ca-60a2-4a42-a059-d9b5f3fe4d32",
    objName: "Ops.Gl.InteractiveRectangle_v2",
    id: "ec8c6f01-d614-471b-b54d-cd06e00696f8",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Trigger in",
      links: [{
        portIn: "Trigger in",
        portOut: "trigger",
        objIn: "ec8c6f01-d614-471b-b54d-cd06e00696f8",
        objOut: "37c3ca41-e518-43f8-abe1-eed7e8a6034d"
      }]
    }, {
      name: "Width",
      value: 85.15
    }, {
      name: "Height",
      value: 30
    }, {
      name: "ID",
      value: ""
    }, {
      name: "Class",
      value: ""
    }, {
      name: "Pivot x index",
      value: 0
    }, {
      name: "Pivot x",
      value: "center"
    }, {
      name: "Pivot y index",
      value: 0
    }, {
      name: "Pivot y",
      value: "center"
    }, {
      name: "Axis index",
      value: 0
    }, {
      name: "Axis",
      value: "xy"
    }, {
      name: "Is Interactive",
      value: !0
    }, {
      name: "Render Rectangle",
      value: !1
    }, {
      name: "Show Boundings",
      value: !1
    }, {
      name: "Cursor index",
      value: 2
    }, {
      name: "Cursor",
      value: "pointer"
    }, {
      name: "Render",
      value: !0
    }],
    portsOut: [{
      name: "Trigger out"
    }, {
      name: "geometry"
    }, {
      name: "Pointer Hover"
    }, {
      name: "Pointer Down",
      value: !1
    }, {
      name: "Pointer X",
      value: .9730725723093212
    }, {
      name: "Pointer Y",
      value: .5714286857721451
    }, {
      name: "Top",
      value: 11.869986772537231
    }, {
      name: "Left",
      value: 20.897503226995468
    }, {
      name: "Right",
      value: 80.50251281261444
    }, {
      name: "Bottom",
      value: 32.86999237537384
    }, {
      name: "Left Click"
    }, {
      name: "Dom Element"
    }]
  }, {
    opId: "5677b5b5-753a-4fbf-9e91-64c81ec68a2f",
    objName: "Ops.Anim.Smooth",
    id: "5724eb52-af7d-49a6-b997-670aedb016ac",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Update",
      links: [{
        portIn: "Update",
        portOut: "trigger 0",
        objIn: "5724eb52-af7d-49a6-b997-670aedb016ac",
        objOut: "d4166fe7-e676-4e00-af7f-df88a6e07a6f"
      }]
    }, {
      name: "Separate inc/dec",
      value: !1
    }, {
      name: "Value",
      links: [{
        portIn: "Value",
        portOut: "X",
        objIn: "5724eb52-af7d-49a6-b997-670aedb016ac",
        objOut: "97194514-9fef-4b25-85d4-e8c79985f01e"
      }, {
        portIn: "Value",
        portOut: "X",
        objIn: "5724eb52-af7d-49a6-b997-670aedb016ac",
        objOut: "8d979afd-78c9-4332-8939-ebfc8ee6fb85"
      }, {
        portIn: "Value",
        portOut: "X",
        objIn: "5724eb52-af7d-49a6-b997-670aedb016ac",
        objOut: "9df51d22-45f5-493e-823d-c671b82af444"
      }, {
        portIn: "Value",
        portOut: "X",
        objIn: "5724eb52-af7d-49a6-b997-670aedb016ac",
        objOut: "223e4586-b75b-42fa-aa5d-662070a10d1a"
      }]
    }, {
      name: "Inc factor",
      links: [{
        portIn: "Inc factor",
        portOut: "result",
        objIn: "5724eb52-af7d-49a6-b997-670aedb016ac",
        objOut: "6f966b6f-43c0-4618-9e72-bba84acc7e39"
      }]
    }, {
      name: "Dec factor",
      value: 4
    }],
    portsOut: [{
      name: "Next",
      value: 0
    }, {
      name: "Result"
    }]
  }, {
    opId: "5677b5b5-753a-4fbf-9e91-64c81ec68a2f",
    objName: "Ops.Anim.Smooth",
    id: "9de0be1a-9757-4505-984f-eb7d9372e932",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Update",
      links: [{
        portIn: "Update",
        portOut: "trigger 1",
        objIn: "9de0be1a-9757-4505-984f-eb7d9372e932",
        objOut: "d4166fe7-e676-4e00-af7f-df88a6e07a6f"
      }]
    }, {
      name: "Separate inc/dec",
      value: !1
    }, {
      name: "Value",
      links: [{
        portIn: "Value",
        portOut: "Y",
        objIn: "9de0be1a-9757-4505-984f-eb7d9372e932",
        objOut: "97194514-9fef-4b25-85d4-e8c79985f01e"
      }, {
        portIn: "Value",
        portOut: "Y",
        objIn: "9de0be1a-9757-4505-984f-eb7d9372e932",
        objOut: "8d979afd-78c9-4332-8939-ebfc8ee6fb85"
      }, {
        portIn: "Value",
        portOut: "Y",
        objIn: "9de0be1a-9757-4505-984f-eb7d9372e932",
        objOut: "9df51d22-45f5-493e-823d-c671b82af444"
      }, {
        portIn: "Value",
        portOut: "Y",
        objIn: "9de0be1a-9757-4505-984f-eb7d9372e932",
        objOut: "223e4586-b75b-42fa-aa5d-662070a10d1a"
      }]
    }, {
      name: "Inc factor",
      links: [{
        portIn: "Inc factor",
        portOut: "result",
        objIn: "9de0be1a-9757-4505-984f-eb7d9372e932",
        objOut: "6f966b6f-43c0-4618-9e72-bba84acc7e39"
      }]
    }, {
      name: "Dec factor",
      value: 4
    }],
    portsOut: [{
      name: "Next",
      value: 0
    }, {
      name: "Result"
    }]
  }, {
    opId: "5677b5b5-753a-4fbf-9e91-64c81ec68a2f",
    objName: "Ops.Anim.Smooth",
    id: "028698f4-0d98-40a0-9059-cb3fffb73361",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Update",
      links: [{
        portIn: "Update",
        portOut: "trigger 2",
        objIn: "028698f4-0d98-40a0-9059-cb3fffb73361",
        objOut: "d4166fe7-e676-4e00-af7f-df88a6e07a6f"
      }]
    }, {
      name: "Separate inc/dec",
      value: !1
    }, {
      name: "Value",
      links: [{
        portIn: "Value",
        portOut: "Z",
        objIn: "028698f4-0d98-40a0-9059-cb3fffb73361",
        objOut: "97194514-9fef-4b25-85d4-e8c79985f01e"
      }, {
        portIn: "Value",
        portOut: "Z",
        objIn: "028698f4-0d98-40a0-9059-cb3fffb73361",
        objOut: "8d979afd-78c9-4332-8939-ebfc8ee6fb85"
      }, {
        portIn: "Value",
        portOut: "Z",
        objIn: "028698f4-0d98-40a0-9059-cb3fffb73361",
        objOut: "9df51d22-45f5-493e-823d-c671b82af444"
      }, {
        portIn: "Value",
        portOut: "Z",
        objIn: "028698f4-0d98-40a0-9059-cb3fffb73361",
        objOut: "223e4586-b75b-42fa-aa5d-662070a10d1a"
      }]
    }, {
      name: "Inc factor",
      links: [{
        portIn: "Inc factor",
        portOut: "result",
        objIn: "028698f4-0d98-40a0-9059-cb3fffb73361",
        objOut: "6f966b6f-43c0-4618-9e72-bba84acc7e39"
      }]
    }, {
      name: "Dec factor",
      value: 4
    }],
    portsOut: [{
      name: "Next",
      value: 0
    }, {
      name: "Result"
    }]
  }, {
    opId: "ec55d252-3843-41b1-b731-0482dbd9e72b",
    objName: "Ops.Gl.Shader.BasicMaterial_v3",
    id: "deb32ccc-b8f5-42fd-938c-7ef1da844e57",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "deb32ccc-b8f5-42fd-938c-7ef1da844e57",
        objOut: "abd34333-7250-45ec-aa6b-0a1de7c88c86"
      }]
    }, {
      name: "r",
      value: 0
    }, {
      name: "g",
      value: .953
    }, {
      name: "b",
      value: 1
    }, {
      name: "a",
      value: 1
    }, {
      name: "texture",
      links: [{
        portIn: "texture",
        portOut: "value",
        objIn: "deb32ccc-b8f5-42fd-938c-7ef1da844e57",
        objOut: "dcb137c2-f579-4edf-b32d-fb6f2f4b27c0"
      }]
    }, {
      name: "colorizeTexture",
      value: !1
    }, {
      name: "textureOpacity",
      value: 0
    }, {
      name: "Alpha Mask Source index",
      value: 0
    }, {
      name: "Alpha Mask Source",
      value: "Luminance"
    }, {
      name: "Opacity TexCoords Transform",
      value: !1
    }, {
      name: "Discard Transparent Pixels",
      value: !1
    }, {
      name: "diffuseRepeatX",
      value: 1
    }, {
      name: "diffuseRepeatY",
      value: 1
    }, {
      name: "Tex Offset X",
      value: 0
    }, {
      name: "Tex Offset Y",
      value: 0
    }, {
      name: "Crop TexCoords",
      value: !1
    }, {
      name: "billboard",
      value: !0
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "shader"
    }]
  }, {
    opId: "8fb2bb5d-665a-4d0a-8079-12710ae453be",
    objName: "Ops.Value.Number",
    id: "6f966b6f-43c0-4618-9e72-bba84acc7e39",
    uiAttribs: {
      title: "Inc factor",
      subPatch: 0,
      notWorkingMsg: null,
      comment: null,
      selected: !1
    },
    portsIn: [{
      name: "value",
      value: 32
    }],
    portsOut: [{
      name: "result"
    }]
  }, {
    opId: "9fa3fc46-3147-4e3a-8ee8-a93ea9e8786e",
    objName: "Ops.Devices.Mouse.Mouse_v2",
    id: "6d302986-e35e-41d9-91e4-77458e3cdee5",
    uiAttribs: {
      title: "mouse",
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null,
      comment: null
    },
    portsIn: [{
      name: "Active",
      value: !0
    }, {
      name: "relative",
      value: !1
    }, {
      name: "normalize",
      value: !1
    }, {
      name: "flip y",
      value: !1
    }, {
      name: "Area index",
      value: 0
    }, {
      name: "Area",
      value: "Canvas"
    }, {
      name: "right click prevent default",
      value: !0
    }, {
      name: "Touch support",
      value: !0
    }, {
      name: "smooth",
      value: !1
    }, {
      name: "smoothSpeed",
      value: 20
    }, {
      name: "multiply",
      value: 1
    }],
    portsOut: [{
      name: "x",
      value: 43
    }, {
      name: "y",
      value: 224
    }, {
      name: "button down"
    }, {
      name: "click",
      value: 0
    }, {
      name: "Button Up",
      value: 0
    }, {
      name: "click right",
      value: 0
    }, {
      name: "mouseOver",
      value: !1
    }, {
      name: "button",
      value: 0
    }]
  }, {
    opId: "d41e676e-d8a7-4a1e-8abf-f1bddfc982d5",
    objName: "Ops.Gl.Matrix.Billboard",
    id: "a4aff5b6-635f-4192-9905-ce863a84c08c",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Exec",
      links: [{
        portIn: "Exec",
        portOut: "trigger",
        objIn: "a4aff5b6-635f-4192-9905-ce863a84c08c",
        objOut: "deb32ccc-b8f5-42fd-938c-7ef1da844e57"
      }]
    }],
    portsOut: [{
      name: "Next"
    }]
  }, {
    opId: "9549e2ed-a544-4d33-a672-05c7854ccf5d",
    objName: "Ops.Boolean.IfTrueThen_v2",
    id: "8465b7d9-e6d4-4378-a91f-c6b59816a4eb",
    uiAttribs: {
      title: "if true then",
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null,
      comment: "se hover su foto"
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "else",
        objIn: "8465b7d9-e6d4-4378-a91f-c6b59816a4eb",
        objOut: "f1092cb6-b4b8-4df0-9f9f-5dba6def4456"
      }]
    }, {
      name: "boolean",
      links: [{
        portIn: "boolean",
        portOut: "is picked",
        objIn: "8465b7d9-e6d4-4378-a91f-c6b59816a4eb",
        objOut: "abd34333-7250-45ec-aa6b-0a1de7c88c86"
      }]
    }],
    portsOut: [{
      name: "then"
    }, {
      name: "else"
    }]
  }, {
    opId: "eb4aa728-d0ee-4c53-833d-d0b086b11250",
    objName: "Ops.Math.ApproachInterpolation",
    id: "9da33da2-5f90-4e99-9387-79761f335911",
    uiAttribs: {
      subPatch: 0,
      notWorkingMsg: null,
      selected: !1
    },
    portsIn: [{
      name: "Update",
      links: [{
        portIn: "Update",
        portOut: "trigger 15",
        objIn: "9da33da2-5f90-4e99-9387-79761f335911",
        objOut: "7f70882b-4023-4989-bc41-b73352394018"
      }]
    }, {
      name: "Value",
      links: [{
        portIn: "Value",
        portOut: "Absolute Value",
        objIn: "9da33da2-5f90-4e99-9387-79761f335911",
        objOut: "07d40ae5-776c-49ff-8cbd-d5d0654b8ffd"
      }]
    }, {
      name: "Divisor",
      value: 22
    }],
    portsOut: [{
      name: "Next",
      value: 0
    }, {
      name: "Result"
    }]
  }, {
    opId: "d9d4b3db-c24b-48da-b798-9e6230d861f7",
    objName: "Ops.Math.DeltaSum",
    id: "07d40ae5-776c-49ff-8cbd-d5d0654b8ffd",
    uiAttribs: {
      subPatch: 0,
      notWorkingMsg: null,
      color: "#F0D165",
      selected: !1
    },
    portsIn: [{
      name: "Delta Value",
      links: [{
        portIn: "Delta Value",
        portOut: "delta",
        objIn: "07d40ae5-776c-49ff-8cbd-d5d0654b8ffd",
        objOut: "b1d71837-744d-4949-9880-6bfe45fd238b"
      }]
    }, {
      name: "Default Value",
      value: 0
    }, {
      name: "Reset",
      value: 0
    }, {
      name: "Limit",
      value: !1
    }, {
      name: "Min",
      value: 0
    }, {
      name: "Max",
      value: 100
    }, {
      name: "Multiply",
      value: 1
    }],
    portsOut: [{
      name: "Absolute Value"
    }]
  }, {
    opId: "7b9626db-536b-4bb4-85c3-95401bc60d1b",
    objName: "Ops.Devices.Mouse.MouseWheel_v2",
    id: "b1d71837-744d-4949-9880-6bfe45fd238b",
    uiAttribs: {
      subPatch: 0,
      notWorkingMsg: null,
      color: "#F0D165",
      selected: !1
    },
    portsIn: [{
      name: "Speed",
      value: 1
    }, {
      name: "prevent scroll",
      value: !0
    }, {
      name: "Flip Direction",
      value: !1
    }, {
      name: "Simple Delta",
      value: !1
    }, {
      name: "Area index",
      value: 0
    }, {
      name: "Area",
      value: "Canvas"
    }, {
      name: "active",
      value: !0
    }],
    portsOut: [{
      name: "delta"
    }, {
      name: "delta X",
      value: -.02
    }, {
      name: "browser event delta",
      value: -120
    }]
  }, {
    opId: "86fcfd8c-038d-4b91-9820-a08114f6b7eb",
    objName: "Ops.Math.Divide",
    id: "fd1ce239-4869-4bca-92d2-1a007148b9f7",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "number1",
      links: [{
        portIn: "number1",
        portOut: "in0 MainLoop width",
        objIn: "fd1ce239-4869-4bca-92d2-1a007148b9f7",
        objOut: "f871adcd-2cc2-4d74-8fa4-308c633b80ee"
      }]
    }, {
      name: "number2",
      value: 2
    }],
    portsOut: [{
      name: "result",
      value: 316.5
    }]
  }, {
    opId: "ec3e0121-b2c2-4c31-bbda-a6982080f73f",
    objName: "Ops.Html.BrowserInfo_v3",
    id: "34e10c3b-cb0a-49f7-bcaa-a00f7fd14682",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [],
    portsOut: [{
      name: "Is Mobile"
    }, {
      name: "Is IE",
      value: !1
    }, {
      name: "Is Edge",
      value: !1
    }, {
      name: "Is Chrome",
      value: !0
    }, {
      name: "Is Firefox",
      value: !1
    }, {
      name: "Is Opera",
      value: !1
    }, {
      name: "Is Safari",
      value: !1
    }, {
      name: "Is Windows",
      value: !1
    }, {
      name: "Is Linux",
      value: !1
    }, {
      name: "Is Mac",
      value: !0
    }, {
      name: "Is iOS",
      value: !1
    }, {
      name: "Is Android",
      value: !1
    }, {
      name: "Is Electron",
      value: !1
    }, {
      name: "Operating System",
      value: "OS X 11.0.1 64-bit"
    }, {
      name: "Browser Name",
      value: "Chrome"
    }, {
      name: "OS Version",
      value: "11.0.1"
    }, {
      name: "Language",
      value: "it-IT"
    }, {
      name: "User Agent",
      value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"
    }]
  }, {
    opId: "9549e2ed-a544-4d33-a672-05c7854ccf5d",
    objName: "Ops.Boolean.IfTrueThen_v2",
    id: "9e46f141-70a5-4d67-ba60-8f26a98083f1",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "in1 sequence trigger 14",
        objIn: "9e46f141-70a5-4d67-ba60-8f26a98083f1",
        objOut: "f871adcd-2cc2-4d74-8fa4-308c633b80ee"
      }]
    }, {
      name: "boolean",
      links: [{
        portIn: "boolean",
        portOut: "in2 BrowserInfo Is Mobile",
        objIn: "9e46f141-70a5-4d67-ba60-8f26a98083f1",
        objOut: "f871adcd-2cc2-4d74-8fa4-308c633b80ee"
      }]
    }],
    portsOut: [{
      name: "then"
    }, {
      name: "else"
    }]
  }, {
    opId: "949d6daf-d677-4ed6-a921-51a5732b64ac",
    objName: "Ops.Gl.PixelProjection",
    id: "a0d37cb2-376f-4983-827d-ac342e0a928f",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "then",
        objIn: "a0d37cb2-376f-4983-827d-ac342e0a928f",
        objOut: "9e46f141-70a5-4d67-ba60-8f26a98083f1"
      }]
    }, {
      name: "use viewport size",
      value: !0
    }, {
      name: "Width",
      value: 500
    }, {
      name: "Height",
      value: 500
    }, {
      name: "frustum near",
      value: -500
    }, {
      name: "frustum far",
      value: 500
    }, {
      name: "Flip X",
      value: !1
    }, {
      name: "Flip Y",
      value: !1
    }, {
      name: "Zero Y",
      value: !1
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "650baeb1-db2d-4781-9af6-ab4e9d4277be",
    objName: "Ops.Gl.Matrix.Transform",
    id: "c6585e2f-f518-44fb-b854-71ea7afaaeba",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "c6585e2f-f518-44fb-b854-71ea7afaaeba",
        objOut: "a0d37cb2-376f-4983-827d-ac342e0a928f"
      }]
    }, {
      name: "posX",
      value: 14.97
    }, {
      name: "posY",
      links: [{
        portIn: "posY",
        portOut: "result",
        objIn: "c6585e2f-f518-44fb-b854-71ea7afaaeba",
        objOut: "37b5f6cb-1318-4f96-b4d1-1cf89825ef34"
      }]
    }, {
      name: "posZ",
      value: 0
    }, {
      name: "scale",
      value: .7
    }, {
      name: "rotX",
      value: 0
    }, {
      name: "rotY",
      value: 0
    }, {
      name: "rotZ",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "334728ca-60a2-4a42-a059-d9b5f3fe4d32",
    objName: "Ops.Gl.InteractiveRectangle_v2",
    id: "75a4dfe2-2965-4120-be0e-c5a7a838384e",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Trigger in",
      links: [{
        portIn: "Trigger in",
        portOut: "trigger",
        objIn: "75a4dfe2-2965-4120-be0e-c5a7a838384e",
        objOut: "c6585e2f-f518-44fb-b854-71ea7afaaeba"
      }]
    }, {
      name: "Width",
      value: 120
    }, {
      name: "Height",
      value: 30
    }, {
      name: "ID",
      value: ""
    }, {
      name: "Class",
      value: ""
    }, {
      name: "Pivot x index",
      value: 0
    }, {
      name: "Pivot x",
      value: "center"
    }, {
      name: "Pivot y index",
      value: 0
    }, {
      name: "Pivot y",
      value: "center"
    }, {
      name: "Axis index",
      value: 0
    }, {
      name: "Axis",
      value: "xy"
    }, {
      name: "Is Interactive",
      value: !0
    }, {
      name: "Render Rectangle",
      value: !1
    }, {
      name: "Show Boundings",
      value: !1
    }, {
      name: "Cursor index",
      value: 2
    }, {
      name: "Cursor",
      value: "pointer"
    }, {
      name: "Render",
      value: !0
    }],
    portsOut: [{
      name: "Trigger out"
    }, {
      name: "geometry"
    }, {
      name: "Pointer Hover",
      value: !1
    }, {
      name: "Pointer Down",
      value: !1
    }, {
      name: "Pointer X",
      value: .011904762310235692
    }, {
      name: "Pointer Y",
      value: .38095227289360134
    }, {
      name: "Top",
      value: 24.520000457763672
    }, {
      name: "Left",
      value: -27.029998540878296
    }, {
      name: "Right",
      value: 56.97000563144684
    }, {
      name: "Bottom",
      value: 45.52001264691353
    }, {
      name: "Left Click"
    }, {
      name: "Dom Element"
    }]
  }, {
    opId: "a669d4f7-1e35-463c-bf8b-08c9f1b68e04",
    objName: "Ops.Html.HyperLink_v2",
    id: "97840810-d4f6-4443-8e38-fe07e8d96fc4",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Open",
      links: [{
        portIn: "Open",
        portOut: "Left Click",
        objIn: "97840810-d4f6-4443-8e38-fe07e8d96fc4",
        objOut: "75a4dfe2-2965-4120-be0e-c5a7a838384e"
      }]
    }, {
      name: "URL",
      value: "https://protestars.github.io/Protestars/about.html"
    }, {
      name: "Target Name",
      value: "_self"
    }, {
      name: "Specs",
      value: ""
    }],
    portsOut: []
  }, {
    opId: "650baeb1-db2d-4781-9af6-ab4e9d4277be",
    objName: "Ops.Gl.Matrix.Transform",
    id: "40481479-52ee-456b-a051-bed0bd380aaa",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "Trigger out",
        objIn: "40481479-52ee-456b-a051-bed0bd380aaa",
        objOut: "75a4dfe2-2965-4120-be0e-c5a7a838384e"
      }]
    }, {
      name: "posX",
      value: 50.7
    }, {
      name: "posY",
      value: 0
    }, {
      name: "posZ",
      value: 0
    }, {
      name: "scale",
      value: 1
    }, {
      name: "rotX",
      value: 0
    }, {
      name: "rotY",
      value: 0
    }, {
      name: "rotZ",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "2390f6b3-2122-412e-8c8d-5c2f574e8bd1",
    objName: "Ops.Gl.Meshes.TextMesh_v2",
    id: "d3bee889-2774-42b9-9cd0-e66c5dd4a5fd",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Render",
      links: [{
        portIn: "Render",
        portOut: "trigger",
        objIn: "d3bee889-2774-42b9-9cd0-e66c5dd4a5fd",
        objOut: "40481479-52ee-456b-a051-bed0bd380aaa"
      }]
    }, {
      name: "Text",
      value: "ABOUT"
    }, {
      name: "Scale",
      value: 35
    }, {
      name: "Font",
      value: "Proxima Nova Regular"
    }, {
      name: "align index",
      value: 1
    }, {
      name: "align",
      value: "center"
    }, {
      name: "vertical align index",
      value: 1
    }, {
      name: "vertical align",
      value: "Middle"
    }, {
      name: "Line Height",
      value: 1
    }, {
      name: "Letter Spacing",
      value: 0
    }, {
      name: "filter index",
      value: 2
    }, {
      name: "filter",
      value: "mipmap"
    }, {
      name: "Anisotropic index",
      value: 0
    }, {
      name: "Anisotropic",
      value: 0
    }, {
      name: "Texture Color",
      value: 0
    }, {
      name: "Texture Mask",
      value: 0
    }, {
      name: "r",
      value: .4823529411764706
    }, {
      name: "g",
      value: .47843137254901963
    }, {
      name: "b",
      value: .7215686274509804
    }, {
      name: "a",
      value: 1
    }],
    portsOut: [{
      name: "Next"
    }, {
      name: "texture"
    }, {
      name: "Total Lines",
      value: 1
    }, {
      name: "Width",
      value: 41.52499968005765
    }, {
      name: "Font Available",
      value: !0
    }]
  }, {
    opId: "75cadc63-62bb-4ddd-b519-aa99568a1e6b",
    objName: "Ops.Gl.Matrix.ScreenCoordinates",
    id: "f6d4ef80-537d-49cd-a664-582fc7aa592b",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Execute",
      links: [{
        portIn: "Execute",
        portOut: "Next",
        objIn: "f6d4ef80-537d-49cd-a664-582fc7aa592b",
        objOut: "d3bee889-2774-42b9-9cd0-e66c5dd4a5fd"
      }]
    }],
    portsOut: [{
      name: "Trigger",
      value: 0
    }, {
      name: "X",
      value: 50.46000349521637
    }, {
      name: "Y",
      value: 527.9799850583076
    }, {
      name: "Visible",
      value: !0
    }]
  }, {
    opId: "a4ffe852-d200-4b96-9347-68feb01122ca",
    objName: "Ops.Math.Subtract",
    id: "ebec8918-69a5-4ff1-b392-228ea940b3c7",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "number1",
      links: [{
        portIn: "number1",
        portOut: "in3 MainLoop width",
        objIn: "ebec8918-69a5-4ff1-b392-228ea940b3c7",
        objOut: "f871adcd-2cc2-4d74-8fa4-308c633b80ee"
      }]
    }, {
      name: "number2",
      value: 55
    }],
    portsOut: [{
      name: "result",
      value: 578
    }]
  }, {
    opId: "9549e2ed-a544-4d33-a672-05c7854ccf5d",
    objName: "Ops.Boolean.IfTrueThen_v2",
    id: "b3a2225d-75b7-48a7-857b-3bd2b972f034",
    uiAttribs: {
      title: "If True Then",
      subPatch: "9d849031-4b83-414b-b43c-4bb9f5b080bb",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "in0 sequence trigger 13",
        objIn: "b3a2225d-75b7-48a7-857b-3bd2b972f034",
        objOut: "e1136c0a-2225-4b0a-83ab-28b77003668d"
      }]
    }, {
      name: "boolean",
      links: [{
        portIn: "boolean",
        portOut: "in1 BrowserInfo Is Mobile",
        objIn: "b3a2225d-75b7-48a7-857b-3bd2b972f034",
        objOut: "e1136c0a-2225-4b0a-83ab-28b77003668d"
      }]
    }],
    portsOut: [{
      name: "then"
    }, {
      name: "else"
    }]
  }, {
    opId: "949d6daf-d677-4ed6-a921-51a5732b64ac",
    objName: "Ops.Gl.PixelProjection",
    id: "d1fb6711-8734-42cc-9d4c-491e4b97d5a2",
    uiAttribs: {
      subPatch: "9d849031-4b83-414b-b43c-4bb9f5b080bb",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "then",
        objIn: "d1fb6711-8734-42cc-9d4c-491e4b97d5a2",
        objOut: "b3a2225d-75b7-48a7-857b-3bd2b972f034"
      }]
    }, {
      name: "use viewport size",
      value: !0
    }, {
      name: "Width",
      value: 500
    }, {
      name: "Height",
      value: 500
    }, {
      name: "frustum near",
      value: -500
    }, {
      name: "frustum far",
      value: 500
    }, {
      name: "Flip X",
      value: !1
    }, {
      name: "Flip Y",
      value: !1
    }, {
      name: "Zero Y",
      value: !1
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "a4ffe852-d200-4b96-9347-68feb01122ca",
    objName: "Ops.Math.Subtract",
    id: "c3f96e0f-5685-43c7-8559-9ddc7842b663",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "number1",
      links: [{
        portIn: "number1",
        portOut: "in4 MainLoop height",
        objIn: "c3f96e0f-5685-43c7-8559-9ddc7842b663",
        objOut: "f871adcd-2cc2-4d74-8fa4-308c633b80ee"
      }]
    }, {
      name: "number2",
      value: 32.78
    }],
    portsOut: [{
      name: "result",
      value: 323.22
    }]
  }, {
    opId: "ec55d252-3843-41b1-b731-0482dbd9e72b",
    objName: "Ops.Gl.Shader.BasicMaterial_v3",
    id: "26e82d7b-49d7-4d1f-996f-b932bd46bd8a",
    uiAttribs: {
      subPatch: "9d849031-4b83-414b-b43c-4bb9f5b080bb",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "26e82d7b-49d7-4d1f-996f-b932bd46bd8a",
        objOut: "d1fb6711-8734-42cc-9d4c-491e4b97d5a2"
      }]
    }, {
      name: "r",
      value: .15400090613941964
    }, {
      name: "g",
      value: .08008271219549545
    }, {
      name: "b",
      value: .787100502987069
    }, {
      name: "a",
      value: 1
    }, {
      name: "texture",
      links: [{
        portIn: "texture",
        portOut: "Texture",
        objIn: "26e82d7b-49d7-4d1f-996f-b932bd46bd8a",
        objOut: "76ca3c66-379a-4199-a391-56569794da47"
      }]
    }, {
      name: "colorizeTexture",
      value: !1
    }, {
      name: "textureOpacity",
      value: 0
    }, {
      name: "Alpha Mask Source index",
      value: 0
    }, {
      name: "Alpha Mask Source",
      value: "Luminance"
    }, {
      name: "Opacity TexCoords Transform",
      value: !1
    }, {
      name: "Discard Transparent Pixels",
      value: !1
    }, {
      name: "diffuseRepeatX",
      value: 1
    }, {
      name: "diffuseRepeatY",
      value: 1
    }, {
      name: "Tex Offset X",
      value: 0
    }, {
      name: "Tex Offset Y",
      value: 0
    }, {
      name: "Crop TexCoords",
      value: !1
    }, {
      name: "billboard",
      value: !1
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "shader"
    }]
  }, {
    opId: "fc5718d6-11a5-496e-8f16-1c78b1a2824c",
    objName: "Ops.Gl.Meshes.Rectangle_v2",
    id: "577c0626-9f61-405f-a83e-4b96b7fe86d9",
    uiAttribs: {
      subPatch: "9d849031-4b83-414b-b43c-4bb9f5b080bb",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "577c0626-9f61-405f-a83e-4b96b7fe86d9",
        objOut: "9f2cd84c-dfcb-4279-a3db-749be2b27d76"
      }]
    }, {
      name: "width",
      value: 6.99
    }, {
      name: "height",
      value: 1.5
    }, {
      name: "pivot x index",
      value: 0
    }, {
      name: "pivot x",
      value: "left"
    }, {
      name: "pivot y index",
      value: 0
    }, {
      name: "pivot y",
      value: "bottom"
    }, {
      name: "num columns",
      value: 1
    }, {
      name: "num rows",
      value: 1
    }, {
      name: "axis index",
      value: 0
    }, {
      name: "axis",
      value: "xy"
    }, {
      name: "Active",
      value: !0
    }],
    portsOut: [{
      name: "trigger",
      value: 0
    }, {
      name: "geometry"
    }]
  }, {
    opId: "650baeb1-db2d-4781-9af6-ab4e9d4277be",
    objName: "Ops.Gl.Matrix.Transform",
    id: "9f2cd84c-dfcb-4279-a3db-749be2b27d76",
    uiAttribs: {
      subPatch: "9d849031-4b83-414b-b43c-4bb9f5b080bb",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "9f2cd84c-dfcb-4279-a3db-749be2b27d76",
        objOut: "26e82d7b-49d7-4d1f-996f-b932bd46bd8a"
      }]
    }, {
      name: "posX",
      value: 25
    }, {
      name: "posY",
      value: 20
    }, {
      name: "posZ",
      value: 0
    }, {
      name: "scale",
      value: 22.55
    }, {
      name: "rotX",
      value: 0
    }, {
      name: "rotY",
      value: 0
    }, {
      name: "rotZ",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "86fcfd8c-038d-4b91-9820-a08114f6b7eb",
    objName: "Ops.Math.Divide",
    id: "aea1c2be-f3c0-4480-97ee-8857d42d1078",
    uiAttribs: {
      subPatch: "9d849031-4b83-414b-b43c-4bb9f5b080bb",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "number1",
      links: [{
        portIn: "number1",
        portOut: "in2 MainLoop width",
        objIn: "aea1c2be-f3c0-4480-97ee-8857d42d1078",
        objOut: "e1136c0a-2225-4b0a-83ab-28b77003668d"
      }]
    }, {
      name: "number2",
      value: 4
    }],
    portsOut: [{
      name: "result",
      value: 158.25
    }]
  }, {
    opId: "86fcfd8c-038d-4b91-9820-a08114f6b7eb",
    objName: "Ops.Math.Divide",
    id: "11779718-6a58-42e6-9389-4606ca0873ed",
    uiAttribs: {
      subPatch: "9d849031-4b83-414b-b43c-4bb9f5b080bb",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "number1",
      links: [{
        portIn: "number1",
        portOut: "in3 MainLoop height",
        objIn: "11779718-6a58-42e6-9389-4606ca0873ed",
        objOut: "e1136c0a-2225-4b0a-83ab-28b77003668d"
      }]
    }, {
      name: "number2",
      value: 2
    }],
    portsOut: [{
      name: "result"
    }]
  }, {
    opId: "a4ffe852-d200-4b96-9347-68feb01122ca",
    objName: "Ops.Math.Subtract",
    id: "6e17f8f5-6d04-440c-ba9a-c045d8ec8022",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "number1",
      value: 1
    }, {
      name: "number2",
      value: 40
    }],
    portsOut: [{
      name: "result",
      value: -39
    }]
  }, {
    opId: "9549e2ed-a544-4d33-a672-05c7854ccf5d",
    objName: "Ops.Boolean.IfTrueThen_v2",
    id: "f1092cb6-b4b8-4df0-9f9f-5dba6def4456",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "Next",
        objIn: "f1092cb6-b4b8-4df0-9f9f-5dba6def4456",
        objOut: "a4aff5b6-635f-4192-9905-ce863a84c08c"
      }]
    }, {
      name: "boolean",
      links: [{
        portIn: "boolean",
        portOut: "Is Mobile",
        objIn: "f1092cb6-b4b8-4df0-9f9f-5dba6def4456",
        objOut: "34e10c3b-cb0a-49f7-bcaa-a00f7fd14682"
      }]
    }],
    portsOut: [{
      name: "then"
    }, {
      name: "else"
    }]
  }, {
    opId: "fc5718d6-11a5-496e-8f16-1c78b1a2824c",
    objName: "Ops.Gl.Meshes.Rectangle_v2",
    id: "89de98ca-719b-4e29-aebd-b820e3b2b6eb",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "89de98ca-719b-4e29-aebd-b820e3b2b6eb",
        objOut: "96f3cf86-8627-404d-b4f8-c91429b66222"
      }, {
        portIn: "render",
        portOut: "else",
        objIn: "89de98ca-719b-4e29-aebd-b820e3b2b6eb",
        objOut: "153fa3f1-eb72-4c3d-8ce3-d4981abf9b2c"
      }]
    }, {
      name: "width",
      value: .5
    }, {
      name: "height",
      value: .6714
    }, {
      name: "pivot x index",
      value: 0
    }, {
      name: "pivot x",
      value: "center"
    }, {
      name: "pivot y index",
      value: 0
    }, {
      name: "pivot y",
      value: "center"
    }, {
      name: "num columns",
      value: 1
    }, {
      name: "num rows",
      value: 1
    }, {
      name: "axis index",
      value: 0
    }, {
      name: "axis",
      value: "xy"
    }, {
      name: "Active",
      value: !0
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "geometry"
    }]
  }, {
    opId: "9549e2ed-a544-4d33-a672-05c7854ccf5d",
    objName: "Ops.Boolean.IfTrueThen_v2",
    id: "153fa3f1-eb72-4c3d-8ce3-d4981abf9b2c",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "then",
        objIn: "153fa3f1-eb72-4c3d-8ce3-d4981abf9b2c",
        objOut: "f1092cb6-b4b8-4df0-9f9f-5dba6def4456"
      }]
    }, {
      name: "boolean",
      links: [{
        portIn: "boolean",
        portOut: "is picked",
        objIn: "153fa3f1-eb72-4c3d-8ce3-d4981abf9b2c",
        objOut: "abd34333-7250-45ec-aa6b-0a1de7c88c86"
      }]
    }],
    portsOut: [{
      name: "then"
    }, {
      name: "else"
    }]
  }, {
    opId: "650baeb1-db2d-4781-9af6-ab4e9d4277be",
    objName: "Ops.Gl.Matrix.Transform",
    id: "96f3cf86-8627-404d-b4f8-c91429b66222",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "then",
        objIn: "96f3cf86-8627-404d-b4f8-c91429b66222",
        objOut: "153fa3f1-eb72-4c3d-8ce3-d4981abf9b2c"
      }]
    }, {
      name: "posX",
      value: 0
    }, {
      name: "posY",
      value: 0
    }, {
      name: "posZ",
      value: 0
    }, {
      name: "scale",
      value: 1.1
    }, {
      name: "rotX",
      value: 0
    }, {
      name: "rotY",
      value: 0
    }, {
      name: "rotZ",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "790f3702-9833-464e-8e37-6f0f813f7e16",
    objName: "Ops.Gl.Texture_v2",
    id: "76ca3c66-379a-4199-a391-56569794da47",
    uiAttribs: {
      subPatch: "9d849031-4b83-414b-b43c-4bb9f5b080bb",
      selected: !1,
      extendTitle: "Logo_mobile",
      notWorkingMsg: null
    },
    portsIn: [{
      name: "File",
      value: "assets/Logo_mobile.png",
      display: "file"
    }, {
      name: "Filter index",
      value: 0
    }, {
      name: "Filter",
      value: "nearest"
    }, {
      name: "Wrap index",
      value: 2
    }, {
      name: "Wrap",
      value: "repeat"
    }, {
      name: "Anisotropic index",
      value: 0
    }, {
      name: "Anisotropic",
      value: 0
    }, {
      name: "Flip",
      value: !1
    }, {
      name: "Pre Multiplied Alpha",
      value: !1
    }, {
      name: "Active",
      value: !0
    }],
    portsOut: [{
      name: "Texture"
    }, {
      name: "Width",
      value: 481
    }, {
      name: "Height",
      value: 107
    }, {
      name: "Aspect Ratio",
      value: 4.4953271028037385
    }, {
      name: "Loaded",
      value: !0
    }]
  }, {
    opId: "a466bc1f-06e9-4595-8849-bffb9fe22f99",
    objName: "Ops.Sequence",
    id: "d51076bd-c078-49c0-be70-18b0024667d1",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "in0 LoadingStatus loading",
        objIn: "d51076bd-c078-49c0-be70-18b0024667d1",
        objOut: "14fc3bf6-da40-4924-8063-063d22afe78d"
      }]
    }, {
      name: "exe 0",
      value: 0
    }, {
      name: "exe 1",
      value: 0
    }, {
      name: "exe 2",
      value: 0
    }, {
      name: "exe 3",
      value: 0
    }, {
      name: "exe 4",
      value: 0
    }, {
      name: "exe 5",
      value: 0
    }, {
      name: "exe 6",
      value: 0
    }, {
      name: "exe 7",
      value: 0
    }, {
      name: "exe 8",
      value: 0
    }, {
      name: "exe 9",
      value: 0
    }, {
      name: "exe 10",
      value: 0
    }, {
      name: "exe 11",
      value: 0
    }, {
      name: "exe 12",
      value: 0
    }, {
      name: "exe 13",
      value: 0
    }, {
      name: "exe 14",
      value: 0
    }],
    portsOut: [{
      name: "trigger 0"
    }, {
      name: "trigger 1"
    }, {
      name: "trigger 2"
    }, {
      name: "trigger 3"
    }, {
      name: "trigger 4",
      value: 0
    }, {
      name: "trigger 5",
      value: 0
    }, {
      name: "trigger 6",
      value: 0
    }, {
      name: "trigger 7",
      value: 0
    }, {
      name: "trigger 8",
      value: 0
    }, {
      name: "trigger 9",
      value: 0
    }, {
      name: "trigger 10",
      value: 0
    }, {
      name: "trigger 11",
      value: 0
    }, {
      name: "trigger 12",
      value: 0
    }, {
      name: "trigger 13",
      value: 0
    }, {
      name: "trigger 14",
      value: 0
    }, {
      name: "trigger 15",
      value: 0
    }]
  }, {
    opId: "aac7f721-208f-411a-adb3-79adae2e471a",
    objName: "Ops.Anim.Timer_v2",
    id: "15835307-3453-4131-8e47-0e02629e1f1d",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Speed",
      value: 1
    }, {
      name: "Play",
      value: !0
    }, {
      name: "Reset",
      value: 0
    }, {
      name: "Sync to timeline",
      value: !1
    }],
    portsOut: [{
      name: "Time"
    }]
  }, {
    opId: "fc5718d6-11a5-496e-8f16-1c78b1a2824c",
    objName: "Ops.Gl.Meshes.Rectangle_v2",
    id: "22da4cf4-5c3f-469d-8a7f-5ad4c63e3c94",
    uiAttribs: {
      title: "Rectangle2",
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "22da4cf4-5c3f-469d-8a7f-5ad4c63e3c94",
        objOut: "f1e4a80e-2b27-4ca4-88dd-1c8bf87d7b02"
      }]
    }, {
      name: "width",
      value: .1
    }, {
      name: "height",
      value: .1
    }, {
      name: "pivot x index",
      value: 0
    }, {
      name: "pivot x",
      value: "center"
    }, {
      name: "pivot y index",
      value: 0
    }, {
      name: "pivot y",
      value: "center"
    }, {
      name: "num columns",
      value: 1
    }, {
      name: "num rows",
      value: 1
    }, {
      name: "axis index",
      value: 0
    }, {
      name: "axis",
      value: "xy"
    }, {
      name: "Active",
      value: !0
    }],
    portsOut: [{
      name: "trigger",
      value: 0
    }, {
      name: "geometry"
    }]
  }, {
    opId: "ec55d252-3843-41b1-b731-0482dbd9e72b",
    objName: "Ops.Gl.Shader.BasicMaterial_v3",
    id: "f1e4a80e-2b27-4ca4-88dd-1c8bf87d7b02",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "f1e4a80e-2b27-4ca4-88dd-1c8bf87d7b02",
        objOut: "4d8731c7-e5fe-458d-bb45-07e39402316d"
      }]
    }, {
      name: "r",
      value: .6873506474310322
    }, {
      name: "g",
      value: .5045345159833232
    }, {
      name: "b",
      value: .9903774261474609
    }, {
      name: "a",
      links: [{
        portIn: "a",
        portOut: "Result",
        objIn: "f1e4a80e-2b27-4ca4-88dd-1c8bf87d7b02",
        objOut: "bddfc235-49ba-452c-a3c8-87c38eaadb9f"
      }]
    }, {
      name: "texture",
      links: [{
        portIn: "texture",
        portOut: "Texture",
        objIn: "f1e4a80e-2b27-4ca4-88dd-1c8bf87d7b02",
        objOut: "f8b19732-d1c3-405b-bdbc-bcb0d600f9a8"
      }]
    }, {
      name: "colorizeTexture",
      value: !1
    }, {
      name: "textureOpacity",
      value: 0
    }, {
      name: "Alpha Mask Source index",
      value: 0
    }, {
      name: "Alpha Mask Source",
      value: "Luminance"
    }, {
      name: "Opacity TexCoords Transform",
      value: !1
    }, {
      name: "Discard Transparent Pixels",
      value: !1
    }, {
      name: "diffuseRepeatX",
      value: 1
    }, {
      name: "diffuseRepeatY",
      value: 1
    }, {
      name: "Tex Offset X",
      value: 0
    }, {
      name: "Tex Offset Y",
      value: 0
    }, {
      name: "Crop TexCoords",
      value: !1
    }, {
      name: "billboard",
      value: !1
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "shader"
    }]
  }, {
    opId: "559bb980-78fb-47a7-a199-16f10808b150",
    objName: "Ops.Anim.LFO",
    id: "b0911c2e-fa97-4d97-a502-f1af51888695",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Time",
      links: [{
        portIn: "Time",
        portOut: "Time",
        objIn: "b0911c2e-fa97-4d97-a502-f1af51888695",
        objOut: "15835307-3453-4131-8e47-0e02629e1f1d"
      }]
    }, {
      name: "Type index",
      value: 0
    }, {
      name: "Type",
      value: "sine"
    }, {
      name: "Phase",
      value: .2
    }, {
      name: "Amplitude",
      value: 1
    }],
    portsOut: [{
      name: "Result"
    }]
  }, {
    opId: "fc5718d6-11a5-496e-8f16-1c78b1a2824c",
    objName: "Ops.Gl.Meshes.Rectangle_v2",
    id: "1645e9d3-7a82-4ab1-90ec-2317af0885e5",
    uiAttribs: {
      title: "Rectangle1",
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "1645e9d3-7a82-4ab1-90ec-2317af0885e5",
        objOut: "3f5baef2-2157-4732-857e-4c8126fad687"
      }]
    }, {
      name: "width",
      value: .1
    }, {
      name: "height",
      value: .1
    }, {
      name: "pivot x index",
      value: 0
    }, {
      name: "pivot x",
      value: "center"
    }, {
      name: "pivot y index",
      value: 0
    }, {
      name: "pivot y",
      value: "center"
    }, {
      name: "num columns",
      value: 1
    }, {
      name: "num rows",
      value: 1
    }, {
      name: "axis index",
      value: 0
    }, {
      name: "axis",
      value: "xy"
    }, {
      name: "Active",
      value: !0
    }],
    portsOut: [{
      name: "trigger",
      value: 0
    }, {
      name: "geometry"
    }]
  }, {
    opId: "ec55d252-3843-41b1-b731-0482dbd9e72b",
    objName: "Ops.Gl.Shader.BasicMaterial_v3",
    id: "3f5baef2-2157-4732-857e-4c8126fad687",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "3f5baef2-2157-4732-857e-4c8126fad687",
        objOut: "b4ac2cc4-4fd7-4836-83c1-26973432b13e"
      }]
    }, {
      name: "r",
      value: .6873506474310322
    }, {
      name: "g",
      value: .5045345159833232
    }, {
      name: "b",
      value: .9903774261474609
    }, {
      name: "a",
      links: [{
        portIn: "a",
        portOut: "Result",
        objIn: "3f5baef2-2157-4732-857e-4c8126fad687",
        objOut: "89b31a5c-d683-4319-a254-0aa293b83d96"
      }]
    }, {
      name: "texture",
      links: [{
        portIn: "texture",
        portOut: "Texture",
        objIn: "3f5baef2-2157-4732-857e-4c8126fad687",
        objOut: "f8b19732-d1c3-405b-bdbc-bcb0d600f9a8"
      }]
    }, {
      name: "colorizeTexture",
      value: !1
    }, {
      name: "textureOpacity",
      value: 0
    }, {
      name: "Alpha Mask Source index",
      value: 0
    }, {
      name: "Alpha Mask Source",
      value: "Luminance"
    }, {
      name: "Opacity TexCoords Transform",
      value: !1
    }, {
      name: "Discard Transparent Pixels",
      value: !1
    }, {
      name: "diffuseRepeatX",
      value: 1
    }, {
      name: "diffuseRepeatY",
      value: 1
    }, {
      name: "Tex Offset X",
      value: 0
    }, {
      name: "Tex Offset Y",
      value: 0
    }, {
      name: "Crop TexCoords",
      value: !1
    }, {
      name: "billboard",
      value: !1
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "shader"
    }]
  }, {
    opId: "559bb980-78fb-47a7-a199-16f10808b150",
    objName: "Ops.Anim.LFO",
    id: "91db783d-7615-4c39-8438-30cbded0b39d",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Time",
      links: [{
        portIn: "Time",
        portOut: "Time",
        objIn: "91db783d-7615-4c39-8438-30cbded0b39d",
        objOut: "15835307-3453-4131-8e47-0e02629e1f1d"
      }]
    }, {
      name: "Type index",
      value: 0
    }, {
      name: "Type",
      value: "sine"
    }, {
      name: "Phase",
      value: .4
    }, {
      name: "Amplitude",
      value: 1
    }],
    portsOut: [{
      name: "Result"
    }]
  }, {
    opId: "650baeb1-db2d-4781-9af6-ab4e9d4277be",
    objName: "Ops.Gl.Matrix.Transform",
    id: "b4ac2cc4-4fd7-4836-83c1-26973432b13e",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger 1",
        objIn: "b4ac2cc4-4fd7-4836-83c1-26973432b13e",
        objOut: "d51076bd-c078-49c0-be70-18b0024667d1"
      }]
    }, {
      name: "posX",
      value: -.15
    }, {
      name: "posY",
      value: 0
    }, {
      name: "posZ",
      value: 0
    }, {
      name: "scale",
      links: [{
        portIn: "scale",
        portOut: "Result",
        objIn: "b4ac2cc4-4fd7-4836-83c1-26973432b13e",
        objOut: "a6a186e6-9ff4-42e5-84ad-2c9371a8ff5e"
      }]
    }, {
      name: "rotX",
      value: 0
    }, {
      name: "rotY",
      value: 0
    }, {
      name: "rotZ",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "fc5718d6-11a5-496e-8f16-1c78b1a2824c",
    objName: "Ops.Gl.Meshes.Rectangle_v2",
    id: "ecc6542b-ce2a-48fa-9fc9-c5d1e328e4cb",
    uiAttribs: {
      title: "Rectangle3",
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "ecc6542b-ce2a-48fa-9fc9-c5d1e328e4cb",
        objOut: "1f9a1177-5a6e-42a4-bf57-b33f32585172"
      }]
    }, {
      name: "width",
      value: .1
    }, {
      name: "height",
      value: .1
    }, {
      name: "pivot x index",
      value: 0
    }, {
      name: "pivot x",
      value: "center"
    }, {
      name: "pivot y index",
      value: 0
    }, {
      name: "pivot y",
      value: "center"
    }, {
      name: "num columns",
      value: 1
    }, {
      name: "num rows",
      value: 1
    }, {
      name: "axis index",
      value: 0
    }, {
      name: "axis",
      value: "xy"
    }, {
      name: "Active",
      value: !0
    }],
    portsOut: [{
      name: "trigger",
      value: 0
    }, {
      name: "geometry"
    }]
  }, {
    opId: "ec55d252-3843-41b1-b731-0482dbd9e72b",
    objName: "Ops.Gl.Shader.BasicMaterial_v3",
    id: "1f9a1177-5a6e-42a4-bf57-b33f32585172",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "1f9a1177-5a6e-42a4-bf57-b33f32585172",
        objOut: "431eab4f-f948-45d8-b19c-30bc9b8de3f9"
      }]
    }, {
      name: "r",
      value: .6873506474310322
    }, {
      name: "g",
      value: .5045345159833232
    }, {
      name: "b",
      value: .9903774261474609
    }, {
      name: "a",
      links: [{
        portIn: "a",
        portOut: "Result",
        objIn: "1f9a1177-5a6e-42a4-bf57-b33f32585172",
        objOut: "6fd193e2-76e5-4d82-9f0a-98ccb51a51f1"
      }]
    }, {
      name: "texture",
      links: [{
        portIn: "texture",
        portOut: "Texture",
        objIn: "1f9a1177-5a6e-42a4-bf57-b33f32585172",
        objOut: "f8b19732-d1c3-405b-bdbc-bcb0d600f9a8"
      }]
    }, {
      name: "colorizeTexture",
      value: !1
    }, {
      name: "textureOpacity",
      value: 0
    }, {
      name: "Alpha Mask Source index",
      value: 0
    }, {
      name: "Alpha Mask Source",
      value: "Luminance"
    }, {
      name: "Opacity TexCoords Transform",
      value: !1
    }, {
      name: "Discard Transparent Pixels",
      value: !1
    }, {
      name: "diffuseRepeatX",
      value: 1
    }, {
      name: "diffuseRepeatY",
      value: 1
    }, {
      name: "Tex Offset X",
      value: 0
    }, {
      name: "Tex Offset Y",
      value: 0
    }, {
      name: "Crop TexCoords",
      value: !1
    }, {
      name: "billboard",
      value: !1
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "shader"
    }]
  }, {
    opId: "559bb980-78fb-47a7-a199-16f10808b150",
    objName: "Ops.Anim.LFO",
    id: "6a782fe4-bb69-4330-85d2-3dd91c043504",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Time",
      links: [{
        portIn: "Time",
        portOut: "Time",
        objIn: "6a782fe4-bb69-4330-85d2-3dd91c043504",
        objOut: "15835307-3453-4131-8e47-0e02629e1f1d"
      }]
    }, {
      name: "Type index",
      value: 0
    }, {
      name: "Type",
      value: "sine"
    }, {
      name: "Phase",
      value: 0
    }, {
      name: "Amplitude",
      value: 1
    }],
    portsOut: [{
      name: "Result"
    }]
  }, {
    opId: "650baeb1-db2d-4781-9af6-ab4e9d4277be",
    objName: "Ops.Gl.Matrix.Transform",
    id: "431eab4f-f948-45d8-b19c-30bc9b8de3f9",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger 3",
        objIn: "431eab4f-f948-45d8-b19c-30bc9b8de3f9",
        objOut: "d51076bd-c078-49c0-be70-18b0024667d1"
      }]
    }, {
      name: "posX",
      value: .15
    }, {
      name: "posY",
      value: 0
    }, {
      name: "posZ",
      value: 0
    }, {
      name: "scale",
      links: [{
        portIn: "scale",
        portOut: "Result",
        objIn: "431eab4f-f948-45d8-b19c-30bc9b8de3f9",
        objOut: "cf1a06b8-390e-45fb-b2f0-ed52783c1b38"
      }]
    }, {
      name: "rotX",
      value: 0
    }, {
      name: "rotY",
      value: 0
    }, {
      name: "rotZ",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "2617b407-60a0-4ff6-b4a7-18136cfa7817",
    objName: "Ops.Math.MapRange",
    id: "7fb6a8c2-7335-4f60-ac4a-838aa591ecb8",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "value",
      links: [{
        portIn: "value",
        portOut: "Result",
        objIn: "7fb6a8c2-7335-4f60-ac4a-838aa591ecb8",
        objOut: "91db783d-7615-4c39-8438-30cbded0b39d"
      }]
    }, {
      name: "old min",
      value: -1
    }, {
      name: "old max",
      value: 1
    }, {
      name: "new min",
      value: .2
    }, {
      name: "new max",
      value: 1
    }, {
      name: "Easing index",
      value: 0
    }, {
      name: "Easing",
      value: "Linear"
    }],
    portsOut: [{
      name: "result"
    }]
  }, {
    opId: "2617b407-60a0-4ff6-b4a7-18136cfa7817",
    objName: "Ops.Math.MapRange",
    id: "7d346983-8969-436e-b5c3-5bf0cb1ea58b",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "value",
      links: [{
        portIn: "value",
        portOut: "Result",
        objIn: "7d346983-8969-436e-b5c3-5bf0cb1ea58b",
        objOut: "b0911c2e-fa97-4d97-a502-f1af51888695"
      }]
    }, {
      name: "old min",
      value: -1
    }, {
      name: "old max",
      value: 1
    }, {
      name: "new min",
      value: .2
    }, {
      name: "new max",
      value: 1
    }, {
      name: "Easing index",
      value: 0
    }, {
      name: "Easing",
      value: "Linear"
    }],
    portsOut: [{
      name: "result"
    }]
  }, {
    opId: "2617b407-60a0-4ff6-b4a7-18136cfa7817",
    objName: "Ops.Math.MapRange",
    id: "12137ccf-93e2-44a7-85bd-0e8046e2dc1d",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "value",
      links: [{
        portIn: "value",
        portOut: "Result",
        objIn: "12137ccf-93e2-44a7-85bd-0e8046e2dc1d",
        objOut: "6a782fe4-bb69-4330-85d2-3dd91c043504"
      }]
    }, {
      name: "old min",
      value: -1
    }, {
      name: "old max",
      value: 1
    }, {
      name: "new min",
      value: .2
    }, {
      name: "new max",
      value: 1
    }, {
      name: "Easing index",
      value: 0
    }, {
      name: "Easing",
      value: "Linear"
    }],
    portsOut: [{
      name: "result"
    }]
  }, {
    opId: "8f6e4a08-33e6-408f-ac4a-198bd03b417b",
    objName: "Ops.Math.Ease",
    id: "89b31a5c-d683-4319-a254-0aa293b83d96",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Value",
      links: [{
        portIn: "Value",
        portOut: "result",
        objIn: "89b31a5c-d683-4319-a254-0aa293b83d96",
        objOut: "7fb6a8c2-7335-4f60-ac4a-838aa591ecb8"
      }]
    }, {
      name: "Min",
      value: .2
    }, {
      name: "Max",
      value: 1
    }, {
      name: "Easing",
      value: "smootherstep"
    }],
    portsOut: [{
      name: "Result"
    }]
  }, {
    opId: "8f6e4a08-33e6-408f-ac4a-198bd03b417b",
    objName: "Ops.Math.Ease",
    id: "bddfc235-49ba-452c-a3c8-87c38eaadb9f",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Value",
      links: [{
        portIn: "Value",
        portOut: "result",
        objIn: "bddfc235-49ba-452c-a3c8-87c38eaadb9f",
        objOut: "7d346983-8969-436e-b5c3-5bf0cb1ea58b"
      }]
    }, {
      name: "Min",
      value: .2
    }, {
      name: "Max",
      value: 1
    }, {
      name: "Easing",
      value: "smootherstep"
    }],
    portsOut: [{
      name: "Result"
    }]
  }, {
    opId: "8f6e4a08-33e6-408f-ac4a-198bd03b417b",
    objName: "Ops.Math.Ease",
    id: "6fd193e2-76e5-4d82-9f0a-98ccb51a51f1",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Value",
      links: [{
        portIn: "Value",
        portOut: "result",
        objIn: "6fd193e2-76e5-4d82-9f0a-98ccb51a51f1",
        objOut: "12137ccf-93e2-44a7-85bd-0e8046e2dc1d"
      }]
    }, {
      name: "Min",
      value: .2
    }, {
      name: "Max",
      value: 1
    }, {
      name: "Easing",
      value: "smootherstep"
    }],
    portsOut: [{
      name: "Result"
    }]
  }, {
    opId: "2617b407-60a0-4ff6-b4a7-18136cfa7817",
    objName: "Ops.Math.MapRange",
    id: "9322c2b5-59ed-4650-871e-b542888d63a3",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "value",
      links: [{
        portIn: "value",
        portOut: "Result",
        objIn: "9322c2b5-59ed-4650-871e-b542888d63a3",
        objOut: "91db783d-7615-4c39-8438-30cbded0b39d"
      }]
    }, {
      name: "old min",
      value: -1
    }, {
      name: "old max",
      value: 1
    }, {
      name: "new min",
      value: .5
    }, {
      name: "new max",
      value: .972
    }, {
      name: "Easing index",
      value: 0
    }, {
      name: "Easing",
      value: "Linear"
    }],
    portsOut: [{
      name: "result"
    }]
  }, {
    opId: "8f6e4a08-33e6-408f-ac4a-198bd03b417b",
    objName: "Ops.Math.Ease",
    id: "a6a186e6-9ff4-42e5-84ad-2c9371a8ff5e",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Value",
      links: [{
        portIn: "Value",
        portOut: "result",
        objIn: "a6a186e6-9ff4-42e5-84ad-2c9371a8ff5e",
        objOut: "9322c2b5-59ed-4650-871e-b542888d63a3"
      }]
    }, {
      name: "Min",
      value: .5
    }, {
      name: "Max",
      value: .972
    }, {
      name: "Easing",
      value: "linear"
    }],
    portsOut: [{
      name: "Result"
    }]
  }, {
    opId: "650baeb1-db2d-4781-9af6-ab4e9d4277be",
    objName: "Ops.Gl.Matrix.Transform",
    id: "4d8731c7-e5fe-458d-bb45-07e39402316d",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger 2",
        objIn: "4d8731c7-e5fe-458d-bb45-07e39402316d",
        objOut: "d51076bd-c078-49c0-be70-18b0024667d1"
      }]
    }, {
      name: "posX",
      value: 0
    }, {
      name: "posY",
      value: 0
    }, {
      name: "posZ",
      value: 0
    }, {
      name: "scale",
      links: [{
        portIn: "scale",
        portOut: "Result",
        objIn: "4d8731c7-e5fe-458d-bb45-07e39402316d",
        objOut: "cfdf63ce-311c-46b4-97ca-633cfd92e8d4"
      }]
    }, {
      name: "rotX",
      value: 0
    }, {
      name: "rotY",
      value: 0
    }, {
      name: "rotZ",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "2617b407-60a0-4ff6-b4a7-18136cfa7817",
    objName: "Ops.Math.MapRange",
    id: "da9f7219-e87c-4cab-bca1-fddaed399cf8",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "value",
      links: [{
        portIn: "value",
        portOut: "Result",
        objIn: "da9f7219-e87c-4cab-bca1-fddaed399cf8",
        objOut: "b0911c2e-fa97-4d97-a502-f1af51888695"
      }]
    }, {
      name: "old min",
      value: -1
    }, {
      name: "old max",
      value: 1
    }, {
      name: "new min",
      value: .5
    }, {
      name: "new max",
      value: .972
    }, {
      name: "Easing index",
      value: 0
    }, {
      name: "Easing",
      value: "Linear"
    }],
    portsOut: [{
      name: "result"
    }]
  }, {
    opId: "8f6e4a08-33e6-408f-ac4a-198bd03b417b",
    objName: "Ops.Math.Ease",
    id: "cfdf63ce-311c-46b4-97ca-633cfd92e8d4",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Value",
      links: [{
        portIn: "Value",
        portOut: "result",
        objIn: "cfdf63ce-311c-46b4-97ca-633cfd92e8d4",
        objOut: "da9f7219-e87c-4cab-bca1-fddaed399cf8"
      }]
    }, {
      name: "Min",
      value: .5
    }, {
      name: "Max",
      value: .972
    }, {
      name: "Easing",
      value: "linear"
    }],
    portsOut: [{
      name: "Result"
    }]
  }, {
    opId: "2617b407-60a0-4ff6-b4a7-18136cfa7817",
    objName: "Ops.Math.MapRange",
    id: "5eee15f1-9f7a-4668-90e1-ba1240100014",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "value",
      links: [{
        portIn: "value",
        portOut: "Result",
        objIn: "5eee15f1-9f7a-4668-90e1-ba1240100014",
        objOut: "6a782fe4-bb69-4330-85d2-3dd91c043504"
      }]
    }, {
      name: "old min",
      value: -1
    }, {
      name: "old max",
      value: 1
    }, {
      name: "new min",
      value: .5
    }, {
      name: "new max",
      value: .972
    }, {
      name: "Easing index",
      value: 0
    }, {
      name: "Easing",
      value: "Linear"
    }],
    portsOut: [{
      name: "result"
    }]
  }, {
    opId: "8f6e4a08-33e6-408f-ac4a-198bd03b417b",
    objName: "Ops.Math.Ease",
    id: "cf1a06b8-390e-45fb-b2f0-ed52783c1b38",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Value",
      links: [{
        portIn: "Value",
        portOut: "result",
        objIn: "cf1a06b8-390e-45fb-b2f0-ed52783c1b38",
        objOut: "5eee15f1-9f7a-4668-90e1-ba1240100014"
      }]
    }, {
      name: "Min",
      value: .5
    }, {
      name: "Max",
      value: .972
    }, {
      name: "Easing",
      value: "linear"
    }],
    portsOut: [{
      name: "Result"
    }]
  }, {
    opId: "790f3702-9833-464e-8e37-6f0f813f7e16",
    objName: "Ops.Gl.Texture_v2",
    id: "f8b19732-d1c3-405b-bdbc-bcb0d600f9a8",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      extendTitle: "Icona-piattaforma",
      notWorkingMsg: null
    },
    portsIn: [{
      name: "File",
      value: "assets/Icona-piattaforma.png",
      display: "file"
    }, {
      name: "Filter index",
      value: 0
    }, {
      name: "Filter",
      value: "mipmap"
    }, {
      name: "Wrap index",
      value: 2
    }, {
      name: "Wrap",
      value: "repeat"
    }, {
      name: "Anisotropic index",
      value: 0
    }, {
      name: "Anisotropic",
      value: 0
    }, {
      name: "Flip",
      value: !1
    }, {
      name: "Pre Multiplied Alpha",
      value: !1
    }, {
      name: "Active",
      value: !0
    }],
    portsOut: [{
      name: "Texture"
    }, {
      name: "Width",
      value: 101
    }, {
      name: "Height",
      value: 102
    }, {
      name: "Aspect Ratio",
      value: .9901960784313726
    }, {
      name: "Loaded",
      value: !0
    }]
  }, {
    opId: "e3f68bc3-892a-4c78-9974-aca25c27025d",
    objName: "Ops.Ui.PatchInput",
    id: "14fc3bf6-da40-4924-8063-063d22afe78d",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [],
    portsOut: [{
      name: "in0 LoadingStatus loading"
    }, {
      name: "in1 LoadingStatus loading",
      value: 0
    }]
  }, {
    opId: "851b44cb-5667-4140-9800-5aeb7031f1d7",
    objName: "Ops.Ui.PatchOutput",
    id: "2d226fb3-e5cc-459c-9564-936e9b52d35d",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [],
    portsOut: []
  }, {
    opId: "84d9a6f0-ed7a-466d-b386-225ed9e89c60",
    objName: "Ops.Ui.SubPatch",
    id: "553643c1-d79d-4b41-a457-08b2e33a4f89",
    uiAttribs: {
      title: "Loading Animation",
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "create port",
      value: null
    }, {
      name: "dataStr",
      value: '{"ports":[{"name":"in0 LoadingStatus loading","type":1},{"name":"in1 LoadingStatus loading","type":1}],"portsOut":[]}'
    }, {
      name: "patchId",
      value: "9f531cda-94a6-40b0-901a-df20edeb7ecd"
    }, {
      name: "in0 LoadingStatus loading",
      links: [{
        portIn: "in0 LoadingStatus loading",
        portOut: "loading",
        objIn: "553643c1-d79d-4b41-a457-08b2e33a4f89",
        objOut: "7b0fe074-ef4f-4d0d-833b-7a171bef5a23"
      }]
    }, {
      name: "in1 LoadingStatus loading"
    }],
    portsOut: [{
      name: "create port out",
      value: 0
    }]
  }, {
    opId: "19b441eb-9f63-4f35-ba08-b87841517c4d",
    objName: "Ops.Gl.ClearColor",
    id: "8b8257df-546d-482f-93f3-5c65daabb553",
    uiAttribs: {
      subPatch: "9f531cda-94a6-40b0-901a-df20edeb7ecd",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger 0",
        objIn: "8b8257df-546d-482f-93f3-5c65daabb553",
        objOut: "d51076bd-c078-49c0-be70-18b0024667d1"
      }]
    }, {
      name: "r",
      value: 1
    }, {
      name: "g",
      value: 1
    }, {
      name: "b",
      value: 1
    }, {
      name: "a",
      value: 1
    }],
    portsOut: [{
      name: "trigger",
      value: 0
    }]
  }, {
    opId: "3f20a79f-a35f-4a4d-b2f3-c46973a4531f",
    objName: "Ops.Value.FileInput_v2",
    id: "ea08a6f4-d8be-4152-9e6a-5b8e9c7e0faf",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "File",
      value: 0,
      display: "file"
    }],
    portsOut: [{
      name: "URL",
      value: ""
    }]
  }, {
    opId: "0a349745-20c8-44c4-8a70-214c7ccf87e9",
    objName: "Ops.Website.FilenameInfo",
    id: "24f526de-b320-4d5d-9fef-b702d2c68a93",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "URL",
      value: ""
    }],
    portsOut: [{
      name: "Protocol",
      value: ""
    }, {
      name: "Host",
      value: ""
    }, {
      name: "Full Path",
      value: ""
    }, {
      name: "Filename",
      value: ""
    }, {
      name: "Is URL",
      value: ""
    }, {
      name: "Suffix",
      value: ""
    }]
  }, {
    opId: "ce6e3213-1ce0-4c90-a7d5-e5dc1c23fa63",
    objName: "Ops.Value.SwitchFile",
    id: "214f0037-b301-440f-96f8-19d5d1f62357",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Index",
      value: 0
    }, {
      name: "File 0",
      value: 0,
      display: "file"
    }, {
      name: "File 1",
      value: 0,
      display: "file"
    }, {
      name: "File 2",
      value: 0,
      display: "file"
    }, {
      name: "File 3",
      value: 0,
      display: "file"
    }, {
      name: "File 4",
      value: 0,
      display: "file"
    }, {
      name: "File 5",
      value: 0,
      display: "file"
    }, {
      name: "File 6",
      value: 0,
      display: "file"
    }, {
      name: "File 7",
      value: 0,
      display: "file"
    }, {
      name: "File 8",
      value: 0,
      display: "file"
    }, {
      name: "File 9",
      value: 0,
      display: "file"
    }],
    portsOut: [{
      name: "Result",
      value: 0
    }]
  }, {
    opId: "65e8b8a2-ba13-485f-883a-2bcf377989da",
    objName: "Ops.Trigger.GateTrigger",
    id: "9ea6df7c-2ca3-46c1-999d-31af260edc8b",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Execute",
      links: [{
        portIn: "Execute",
        portOut: "then",
        objIn: "9ea6df7c-2ca3-46c1-999d-31af260edc8b",
        objOut: "f763a6de-4014-4641-84ce-347a8d37e5ff"
      }]
    }, {
      name: "Pass Through",
      links: [{
        portIn: "Pass Through",
        portOut: "result",
        objIn: "9ea6df7c-2ca3-46c1-999d-31af260edc8b",
        objOut: "21f1e54c-94a9-4980-abc7-b24f5a11048d"
      }]
    }],
    portsOut: [{
      name: "Trigger out"
    }]
  }, {
    opId: "712a25f4-3a93-4042-b8c5-2f56169186cc",
    objName: "Ops.Boolean.ToggleBool",
    id: "21f1e54c-94a9-4980-abc7-b24f5a11048d",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "trigger",
      links: [{
        portIn: "trigger",
        portOut: "then",
        objIn: "21f1e54c-94a9-4980-abc7-b24f5a11048d",
        objOut: "fc1bac3a-0e1d-43b8-bb2c-cc4452cba9f0"
      }]
    }, {
      name: "reset",
      links: [{
        portIn: "reset",
        portOut: "then",
        objIn: "21f1e54c-94a9-4980-abc7-b24f5a11048d",
        objOut: "08bab7af-e890-4fb6-a6fc-5d98001e862f"
      }, {
        portIn: "reset",
        portOut: "then",
        objIn: "21f1e54c-94a9-4980-abc7-b24f5a11048d",
        objOut: "fa836447-779a-45d7-a2cc-fc9db11024b7"
      }, {
        portIn: "reset",
        portOut: "then",
        objIn: "21f1e54c-94a9-4980-abc7-b24f5a11048d",
        objOut: "61dae76e-19bf-4ecc-88d2-896cf72d1dd2"
      }]
    }],
    portsOut: [{
      name: "result"
    }]
  }, {
    opId: "ca3bc984-e596-48fb-b53d-502eb13979b0",
    objName: "Ops.Gl.RandomCluster",
    id: "c19630f6-fa96-4c14-9468-1f67f2b09f7c",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "trigger",
        objIn: "c19630f6-fa96-4c14-9468-1f67f2b09f7c",
        objOut: "44ecdd2e-8341-4e07-8671-11c8a59546b5"
      }]
    }, {
      name: "num",
      value: 10
    }, {
      name: "random seed",
      value: 3
    }, {
      name: "round",
      value: !1
    }, {
      name: "size",
      value: 10
    }, {
      name: "scaleX",
      value: .5
    }, {
      name: "scaleY",
      value: .5
    }, {
      name: "scaleZ",
      value: .5
    }, {
      name: "Rotate X",
      value: 1
    }, {
      name: "Rotate Y",
      value: 1
    }, {
      name: "Rotate Z",
      value: 1
    }, {
      name: "Scroll X",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "index"
    }, {
      name: "rnd",
      value: .9566658093278464
    }]
  }, {
    opId: "09122fbf-3b6b-4a05-ac76-fca031b505b9",
    objName: "Ops.Gl.Shader.Picker",
    id: "44ecdd2e-8341-4e07-8671-11c8a59546b5",
    uiAttribs: {
      title: "Picker.3",
      subPatch: 0,
      notWorkingMsg: null,
      selected: !1
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "44ecdd2e-8341-4e07-8671-11c8a59546b5",
        objOut: "1914fb54-89f4-4573-8669-9fee137ce339"
      }]
    }, {
      name: "Use Mouse Coordinates",
      value: !0
    }, {
      name: "x",
      links: [{
        portIn: "x",
        portOut: "Finger 1 X",
        objIn: "44ecdd2e-8341-4e07-8671-11c8a59546b5",
        objOut: "0edd9790-73d5-442b-9bda-f79466a8ae90"
      }]
    }, {
      name: "y",
      links: [{
        portIn: "y",
        portOut: "Finger 1 Y",
        objIn: "44ecdd2e-8341-4e07-8671-11c8a59546b5",
        objOut: "0edd9790-73d5-442b-9bda-f79466a8ae90"
      }]
    }, {
      name: "enabled",
      value: !0
    }, {
      name: "cursor index",
      value: 0
    }, {
      name: "cursor",
      value: "default"
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "Something Picked",
      value: !1
    }, {
      name: "pick texture"
    }]
  }, {
    opId: "2b58daad-4dde-4edb-af22-03ac55ab06ab",
    objName: "Ops.Gl.Shader.PickingMaterial",
    id: "eb16ce2b-7487-4f1c-9122-ef6809e2fd06",
    uiAttribs: {
      subPatch: 0,
      notWorkingMsg: null,
      selected: !1
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "eb16ce2b-7487-4f1c-9122-ef6809e2fd06",
        objOut: "c19630f6-fa96-4c14-9468-1f67f2b09f7c"
      }]
    }, {
      name: "billboard",
      value: !1
    }, {
      name: "cursor",
      value: "default"
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "is picked"
    }, {
      name: "On Picked"
    }]
  }, {
    opId: "9549e2ed-a544-4d33-a672-05c7854ccf5d",
    objName: "Ops.Boolean.IfTrueThen_v2",
    id: "fa836447-779a-45d7-a2cc-fc9db11024b7",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "On Picked",
        objIn: "fa836447-779a-45d7-a2cc-fc9db11024b7",
        objOut: "eb16ce2b-7487-4f1c-9122-ef6809e2fd06"
      }]
    }, {
      name: "boolean",
      links: [{
        portIn: "boolean",
        portOut: "button down",
        objIn: "fa836447-779a-45d7-a2cc-fc9db11024b7",
        objOut: "6d302986-e35e-41d9-91e4-77458e3cdee5"
      }]
    }],
    portsOut: [{
      name: "then"
    }, {
      name: "else",
      value: 0
    }]
  }, {
    opId: "ec55d252-3843-41b1-b731-0482dbd9e72b",
    objName: "Ops.Gl.Shader.BasicMaterial_v3",
    id: "28465eb4-2b4b-4498-9724-dedff57d0af4",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "28465eb4-2b4b-4498-9724-dedff57d0af4",
        objOut: "eb16ce2b-7487-4f1c-9122-ef6809e2fd06"
      }]
    }, {
      name: "r",
      value: .9529411764705882
    }, {
      name: "g",
      value: .36078431372549025
    }, {
      name: "b",
      value: .36078431372549025
    }, {
      name: "a",
      value: 1
    }, {
      name: "texture",
      links: [{
        portIn: "texture",
        portOut: "value",
        objIn: "28465eb4-2b4b-4498-9724-dedff57d0af4",
        objOut: "710719e1-82f3-4f84-908e-c0b82a8254fd"
      }]
    }, {
      name: "colorizeTexture",
      value: !1
    }, {
      name: "textureOpacity",
      value: 0
    }, {
      name: "Alpha Mask Source index",
      value: 0
    }, {
      name: "Alpha Mask Source",
      value: "Luminance"
    }, {
      name: "Opacity TexCoords Transform",
      value: !1
    }, {
      name: "Discard Transparent Pixels",
      value: !1
    }, {
      name: "diffuseRepeatX",
      value: 1
    }, {
      name: "diffuseRepeatY",
      value: 1
    }, {
      name: "Tex Offset X",
      value: 0
    }, {
      name: "Tex Offset Y",
      value: 0
    }, {
      name: "Crop TexCoords",
      value: !1
    }, {
      name: "billboard",
      value: !1
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "shader"
    }]
  }, {
    opId: "fc5718d6-11a5-496e-8f16-1c78b1a2824c",
    objName: "Ops.Gl.Meshes.Rectangle_v2",
    id: "d12a367a-966d-49e8-9b3d-696d2f0fc222",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "d12a367a-966d-49e8-9b3d-696d2f0fc222",
        objOut: "97486823-1afa-483e-8417-131ce5e5be49"
      }, {
        portIn: "render",
        portOut: "else",
        objIn: "d12a367a-966d-49e8-9b3d-696d2f0fc222",
        objOut: "7dbb002b-712f-40c6-b480-a1e30c9c8d47"
      }]
    }, {
      name: "width",
      value: .6
    }, {
      name: "height",
      value: .83932854
    }, {
      name: "pivot x index",
      value: 0
    }, {
      name: "pivot x",
      value: "center"
    }, {
      name: "pivot y index",
      value: 0
    }, {
      name: "pivot y",
      value: "center"
    }, {
      name: "num columns",
      value: 1
    }, {
      name: "num rows",
      value: 1
    }, {
      name: "axis index",
      value: 0
    }, {
      name: "axis",
      value: "xy"
    }, {
      name: "Active",
      value: !0
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "geometry"
    }]
  }, {
    opId: "d41e676e-d8a7-4a1e-8abf-f1bddfc982d5",
    objName: "Ops.Gl.Matrix.Billboard",
    id: "5e22eb2d-efcd-46b3-b0ea-8847f92f9c73",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Exec",
      links: [{
        portIn: "Exec",
        portOut: "trigger",
        objIn: "5e22eb2d-efcd-46b3-b0ea-8847f92f9c73",
        objOut: "28465eb4-2b4b-4498-9724-dedff57d0af4"
      }]
    }],
    portsOut: [{
      name: "Next"
    }]
  }, {
    opId: "9989b1c0-1073-4d5f-bfa0-36dd98b66e27",
    objName: "Ops.Trigger.SetNumberOnTrigger",
    id: "705d3e45-bc0a-48f8-a63f-24494c207e6d",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Set",
      links: [{
        portIn: "Set",
        portOut: "then",
        objIn: "705d3e45-bc0a-48f8-a63f-24494c207e6d",
        objOut: "fa836447-779a-45d7-a2cc-fc9db11024b7"
      }]
    }, {
      name: "Number",
      links: [{
        portIn: "Number",
        portOut: "index",
        objIn: "705d3e45-bc0a-48f8-a63f-24494c207e6d",
        objOut: "c19630f6-fa96-4c14-9468-1f67f2b09f7c"
      }]
    }],
    portsOut: [{
      name: "Next",
      value: 0
    }, {
      name: "Out Value"
    }]
  }, {
    opId: "650baeb1-db2d-4781-9af6-ab4e9d4277be",
    objName: "Ops.Gl.Matrix.Transform",
    id: "97486823-1afa-483e-8417-131ce5e5be49",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "then",
        objIn: "97486823-1afa-483e-8417-131ce5e5be49",
        objOut: "7dbb002b-712f-40c6-b480-a1e30c9c8d47"
      }]
    }, {
      name: "posX",
      value: 0
    }, {
      name: "posY",
      value: 0
    }, {
      name: "posZ",
      value: 0
    }, {
      name: "scale",
      value: 1.2
    }, {
      name: "rotX",
      value: 0
    }, {
      name: "rotY",
      value: 0
    }, {
      name: "rotZ",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "9549e2ed-a544-4d33-a672-05c7854ccf5d",
    objName: "Ops.Boolean.IfTrueThen_v2",
    id: "7dbb002b-712f-40c6-b480-a1e30c9c8d47",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "else",
        objIn: "7dbb002b-712f-40c6-b480-a1e30c9c8d47",
        objOut: "b77f12bd-5941-485f-9a63-d31f2d9acbd9"
      }]
    }, {
      name: "boolean",
      links: [{
        portIn: "boolean",
        portOut: "is picked",
        objIn: "7dbb002b-712f-40c6-b480-a1e30c9c8d47",
        objOut: "eb16ce2b-7487-4f1c-9122-ef6809e2fd06"
      }]
    }],
    portsOut: [{
      name: "then"
    }, {
      name: "else"
    }]
  }, {
    opId: "e8196d70-d0a6-470a-9448-a7ac0c0e956e",
    objName: "Ops.Trigger.IfEqualsThen",
    id: "509ca1fb-d07f-4c8b-8627-4aec21378443",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "trigger",
        objIn: "509ca1fb-d07f-4c8b-8627-4aec21378443",
        objOut: "d12a367a-966d-49e8-9b3d-696d2f0fc222"
      }, {
        portIn: "exe",
        portOut: "trigger",
        objIn: "509ca1fb-d07f-4c8b-8627-4aec21378443",
        objOut: "d4569d15-4101-4a06-9019-fee47632359c"
      }]
    }, {
      name: "Value 1",
      links: [{
        portIn: "Value 1",
        portOut: "index",
        objIn: "509ca1fb-d07f-4c8b-8627-4aec21378443",
        objOut: "c19630f6-fa96-4c14-9468-1f67f2b09f7c"
      }]
    }, {
      name: "Value 2",
      links: [{
        portIn: "Value 2",
        portOut: "Out Value",
        objIn: "509ca1fb-d07f-4c8b-8627-4aec21378443",
        objOut: "705d3e45-bc0a-48f8-a63f-24494c207e6d"
      }]
    }],
    portsOut: [{
      name: "then"
    }, {
      name: "else",
      value: 0
    }]
  }, {
    opId: "390d0214-92a9-48e9-85b4-f3092ee9e043",
    objName: "Ops.Gl.Matrix.Coordinates",
    id: "9df51d22-45f5-493e-823d-c671b82af444",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "Trigger out",
        objIn: "9df51d22-45f5-493e-823d-c671b82af444",
        objOut: "6ac2d91b-d652-4cd6-a54c-1f68a31a2f27"
      }]
    }],
    portsOut: [{
      name: "trigger",
      value: 0
    }, {
      name: "X"
    }, {
      name: "Y"
    }, {
      name: "Z"
    }]
  }, {
    opId: "65e8b8a2-ba13-485f-883a-2bcf377989da",
    objName: "Ops.Trigger.GateTrigger",
    id: "6ac2d91b-d652-4cd6-a54c-1f68a31a2f27",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Execute",
      links: [{
        portIn: "Execute",
        portOut: "then",
        objIn: "6ac2d91b-d652-4cd6-a54c-1f68a31a2f27",
        objOut: "509ca1fb-d07f-4c8b-8627-4aec21378443"
      }]
    }, {
      name: "Pass Through",
      links: [{
        portIn: "Pass Through",
        portOut: "result",
        objIn: "6ac2d91b-d652-4cd6-a54c-1f68a31a2f27",
        objOut: "6518e110-dbaa-4335-bed3-3cee7d570108"
      }]
    }],
    portsOut: [{
      name: "Trigger out"
    }]
  }, {
    opId: "712a25f4-3a93-4042-b8c5-2f56169186cc",
    objName: "Ops.Boolean.ToggleBool",
    id: "6518e110-dbaa-4335-bed3-3cee7d570108",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "trigger",
      links: [{
        portIn: "trigger",
        portOut: "then",
        objIn: "6518e110-dbaa-4335-bed3-3cee7d570108",
        objOut: "fa836447-779a-45d7-a2cc-fc9db11024b7"
      }]
    }, {
      name: "reset",
      links: [{
        portIn: "reset",
        portOut: "then",
        objIn: "6518e110-dbaa-4335-bed3-3cee7d570108",
        objOut: "08bab7af-e890-4fb6-a6fc-5d98001e862f"
      }, {
        portIn: "reset",
        portOut: "then",
        objIn: "6518e110-dbaa-4335-bed3-3cee7d570108",
        objOut: "fc1bac3a-0e1d-43b8-bb2c-cc4452cba9f0"
      }, {
        portIn: "reset",
        portOut: "then",
        objIn: "6518e110-dbaa-4335-bed3-3cee7d570108",
        objOut: "61dae76e-19bf-4ecc-88d2-896cf72d1dd2"
      }]
    }],
    portsOut: [{
      name: "result"
    }]
  }, {
    opId: "09122fbf-3b6b-4a05-ac76-fca031b505b9",
    objName: "Ops.Gl.Shader.Picker",
    id: "4c92ca84-ad02-480e-a7cc-1c14302135c5",
    uiAttribs: {
      title: "Picker.4",
      subPatch: 0,
      notWorkingMsg: null,
      selected: !1
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "4c92ca84-ad02-480e-a7cc-1c14302135c5",
        objOut: "1914fb54-89f4-4573-8669-9fee137ce339"
      }]
    }, {
      name: "Use Mouse Coordinates",
      value: !0
    }, {
      name: "x",
      links: [{
        portIn: "x",
        portOut: "Finger 1 X",
        objIn: "4c92ca84-ad02-480e-a7cc-1c14302135c5",
        objOut: "0edd9790-73d5-442b-9bda-f79466a8ae90"
      }]
    }, {
      name: "y",
      links: [{
        portIn: "y",
        portOut: "Finger 1 Y",
        objIn: "4c92ca84-ad02-480e-a7cc-1c14302135c5",
        objOut: "0edd9790-73d5-442b-9bda-f79466a8ae90"
      }]
    }, {
      name: "enabled",
      value: !0
    }, {
      name: "cursor index",
      value: 0
    }, {
      name: "cursor",
      value: "default"
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "Something Picked",
      value: !1
    }, {
      name: "pick texture"
    }]
  }, {
    opId: "2b58daad-4dde-4edb-af22-03ac55ab06ab",
    objName: "Ops.Gl.Shader.PickingMaterial",
    id: "71e72a41-73e1-4753-b55e-53d5e013e38a",
    uiAttribs: {
      subPatch: 0,
      notWorkingMsg: null,
      selected: !1
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "71e72a41-73e1-4753-b55e-53d5e013e38a",
        objOut: "00ec175c-c157-40bc-bb9d-f4fb0f5a96d1"
      }]
    }, {
      name: "billboard",
      value: !1
    }, {
      name: "cursor",
      value: "default"
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "is picked"
    }, {
      name: "On Picked"
    }]
  }, {
    opId: "9549e2ed-a544-4d33-a672-05c7854ccf5d",
    objName: "Ops.Boolean.IfTrueThen_v2",
    id: "61dae76e-19bf-4ecc-88d2-896cf72d1dd2",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "On Picked",
        objIn: "61dae76e-19bf-4ecc-88d2-896cf72d1dd2",
        objOut: "71e72a41-73e1-4753-b55e-53d5e013e38a"
      }]
    }, {
      name: "boolean",
      links: [{
        portIn: "boolean",
        portOut: "button down",
        objIn: "61dae76e-19bf-4ecc-88d2-896cf72d1dd2",
        objOut: "6d302986-e35e-41d9-91e4-77458e3cdee5"
      }]
    }],
    portsOut: [{
      name: "then"
    }, {
      name: "else",
      value: 0
    }]
  }, {
    opId: "ec55d252-3843-41b1-b731-0482dbd9e72b",
    objName: "Ops.Gl.Shader.BasicMaterial_v3",
    id: "d839b283-cc6e-4950-8acd-0c0930ad4ca2",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "d839b283-cc6e-4950-8acd-0c0930ad4ca2",
        objOut: "71e72a41-73e1-4753-b55e-53d5e013e38a"
      }]
    }, {
      name: "r",
      value: .36078431372549025
    }, {
      name: "g",
      value: .9529411764705882
    }, {
      name: "b",
      value: .6975240595200483
    }, {
      name: "a",
      value: 1
    }, {
      name: "texture",
      links: [{
        portIn: "texture",
        portOut: "value",
        objIn: "d839b283-cc6e-4950-8acd-0c0930ad4ca2",
        objOut: "6c691245-9271-42b7-adba-01708bf74bb6"
      }]
    }, {
      name: "colorizeTexture",
      value: !1
    }, {
      name: "textureOpacity",
      value: 0
    }, {
      name: "Alpha Mask Source index",
      value: 0
    }, {
      name: "Alpha Mask Source",
      value: "Luminance"
    }, {
      name: "Opacity TexCoords Transform",
      value: !1
    }, {
      name: "Discard Transparent Pixels",
      value: !1
    }, {
      name: "diffuseRepeatX",
      value: 1
    }, {
      name: "diffuseRepeatY",
      value: 1
    }, {
      name: "Tex Offset X",
      value: 0
    }, {
      name: "Tex Offset Y",
      value: 0
    }, {
      name: "Crop TexCoords",
      value: !1
    }, {
      name: "billboard",
      value: !1
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "shader"
    }]
  }, {
    opId: "fc5718d6-11a5-496e-8f16-1c78b1a2824c",
    objName: "Ops.Gl.Meshes.Rectangle_v2",
    id: "ee1f8452-ac1e-4803-b669-b616cdde30bf",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "ee1f8452-ac1e-4803-b669-b616cdde30bf",
        objOut: "48b19941-b3a1-40d4-b637-e584347b2ade"
      }, {
        portIn: "render",
        portOut: "else",
        objIn: "ee1f8452-ac1e-4803-b669-b616cdde30bf",
        objOut: "451dca01-ec44-4e54-9d13-83a0c7923330"
      }]
    }, {
      name: "width",
      value: .4
    }, {
      name: "height",
      value: .53717026
    }, {
      name: "pivot x index",
      value: 0
    }, {
      name: "pivot x",
      value: "center"
    }, {
      name: "pivot y index",
      value: 0
    }, {
      name: "pivot y",
      value: "center"
    }, {
      name: "num columns",
      value: 1
    }, {
      name: "num rows",
      value: 1
    }, {
      name: "axis index",
      value: 0
    }, {
      name: "axis",
      value: "xy"
    }, {
      name: "Active",
      value: !0
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "geometry"
    }]
  }, {
    opId: "d41e676e-d8a7-4a1e-8abf-f1bddfc982d5",
    objName: "Ops.Gl.Matrix.Billboard",
    id: "46dc590a-291d-4b9a-b413-6e12b4a7d396",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Exec",
      links: [{
        portIn: "Exec",
        portOut: "trigger",
        objIn: "46dc590a-291d-4b9a-b413-6e12b4a7d396",
        objOut: "d839b283-cc6e-4950-8acd-0c0930ad4ca2"
      }]
    }],
    portsOut: [{
      name: "Next"
    }]
  }, {
    opId: "9989b1c0-1073-4d5f-bfa0-36dd98b66e27",
    objName: "Ops.Trigger.SetNumberOnTrigger",
    id: "ac12587f-645a-41cd-bcc8-03adf98649a1",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Set",
      links: [{
        portIn: "Set",
        portOut: "then",
        objIn: "ac12587f-645a-41cd-bcc8-03adf98649a1",
        objOut: "61dae76e-19bf-4ecc-88d2-896cf72d1dd2"
      }]
    }, {
      name: "Number",
      links: [{
        portIn: "Number",
        portOut: "index",
        objIn: "ac12587f-645a-41cd-bcc8-03adf98649a1",
        objOut: "00ec175c-c157-40bc-bb9d-f4fb0f5a96d1"
      }]
    }],
    portsOut: [{
      name: "Next",
      value: 0
    }, {
      name: "Out Value"
    }]
  }, {
    opId: "650baeb1-db2d-4781-9af6-ab4e9d4277be",
    objName: "Ops.Gl.Matrix.Transform",
    id: "48b19941-b3a1-40d4-b637-e584347b2ade",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "then",
        objIn: "48b19941-b3a1-40d4-b637-e584347b2ade",
        objOut: "451dca01-ec44-4e54-9d13-83a0c7923330"
      }]
    }, {
      name: "posX",
      value: 0
    }, {
      name: "posY",
      value: 0
    }, {
      name: "posZ",
      value: 0
    }, {
      name: "scale",
      value: 1.2
    }, {
      name: "rotX",
      value: 0
    }, {
      name: "rotY",
      value: 0
    }, {
      name: "rotZ",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "9549e2ed-a544-4d33-a672-05c7854ccf5d",
    objName: "Ops.Boolean.IfTrueThen_v2",
    id: "451dca01-ec44-4e54-9d13-83a0c7923330",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "else",
        objIn: "451dca01-ec44-4e54-9d13-83a0c7923330",
        objOut: "c75981ba-1c08-4fa1-a3ec-59e3262327f0"
      }]
    }, {
      name: "boolean",
      links: [{
        portIn: "boolean",
        portOut: "is picked",
        objIn: "451dca01-ec44-4e54-9d13-83a0c7923330",
        objOut: "71e72a41-73e1-4753-b55e-53d5e013e38a"
      }]
    }],
    portsOut: [{
      name: "then"
    }, {
      name: "else"
    }]
  }, {
    opId: "e8196d70-d0a6-470a-9448-a7ac0c0e956e",
    objName: "Ops.Trigger.IfEqualsThen",
    id: "f756789c-3292-4f48-8eaf-a58f04249ddd",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "trigger",
        objIn: "f756789c-3292-4f48-8eaf-a58f04249ddd",
        objOut: "ee1f8452-ac1e-4803-b669-b616cdde30bf"
      }, {
        portIn: "exe",
        portOut: "trigger",
        objIn: "f756789c-3292-4f48-8eaf-a58f04249ddd",
        objOut: "e9ca4a57-9308-4e15-bf3c-712d6c747cff"
      }]
    }, {
      name: "Value 1",
      links: [{
        portIn: "Value 1",
        portOut: "index",
        objIn: "f756789c-3292-4f48-8eaf-a58f04249ddd",
        objOut: "00ec175c-c157-40bc-bb9d-f4fb0f5a96d1"
      }]
    }, {
      name: "Value 2",
      links: [{
        portIn: "Value 2",
        portOut: "Out Value",
        objIn: "f756789c-3292-4f48-8eaf-a58f04249ddd",
        objOut: "ac12587f-645a-41cd-bcc8-03adf98649a1"
      }]
    }],
    portsOut: [{
      name: "then"
    }, {
      name: "else",
      value: 0
    }]
  }, {
    opId: "390d0214-92a9-48e9-85b4-f3092ee9e043",
    objName: "Ops.Gl.Matrix.Coordinates",
    id: "223e4586-b75b-42fa-aa5d-662070a10d1a",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "Trigger out",
        objIn: "223e4586-b75b-42fa-aa5d-662070a10d1a",
        objOut: "b08fa606-6ef3-4dfa-aaff-53d7ad5c862b"
      }]
    }],
    portsOut: [{
      name: "trigger",
      value: 0
    }, {
      name: "X"
    }, {
      name: "Y"
    }, {
      name: "Z"
    }]
  }, {
    opId: "65e8b8a2-ba13-485f-883a-2bcf377989da",
    objName: "Ops.Trigger.GateTrigger",
    id: "b08fa606-6ef3-4dfa-aaff-53d7ad5c862b",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Execute",
      links: [{
        portIn: "Execute",
        portOut: "then",
        objIn: "b08fa606-6ef3-4dfa-aaff-53d7ad5c862b",
        objOut: "f756789c-3292-4f48-8eaf-a58f04249ddd"
      }]
    }, {
      name: "Pass Through",
      links: [{
        portIn: "Pass Through",
        portOut: "result",
        objIn: "b08fa606-6ef3-4dfa-aaff-53d7ad5c862b",
        objOut: "958a1de8-7a4c-4c8a-bff7-b14ed4392bbd"
      }]
    }],
    portsOut: [{
      name: "Trigger out"
    }]
  }, {
    opId: "712a25f4-3a93-4042-b8c5-2f56169186cc",
    objName: "Ops.Boolean.ToggleBool",
    id: "958a1de8-7a4c-4c8a-bff7-b14ed4392bbd",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "trigger",
      links: [{
        portIn: "trigger",
        portOut: "then",
        objIn: "958a1de8-7a4c-4c8a-bff7-b14ed4392bbd",
        objOut: "61dae76e-19bf-4ecc-88d2-896cf72d1dd2"
      }]
    }, {
      name: "reset",
      links: [{
        portIn: "reset",
        portOut: "then",
        objIn: "958a1de8-7a4c-4c8a-bff7-b14ed4392bbd",
        objOut: "fa836447-779a-45d7-a2cc-fc9db11024b7"
      }, {
        portIn: "reset",
        portOut: "then",
        objIn: "958a1de8-7a4c-4c8a-bff7-b14ed4392bbd",
        objOut: "fc1bac3a-0e1d-43b8-bb2c-cc4452cba9f0"
      }, {
        portIn: "reset",
        portOut: "then",
        objIn: "958a1de8-7a4c-4c8a-bff7-b14ed4392bbd",
        objOut: "08bab7af-e890-4fb6-a6fc-5d98001e862f"
      }]
    }],
    portsOut: [{
      name: "result"
    }]
  }, {
    opId: "fc5718d6-11a5-496e-8f16-1c78b1a2824c",
    objName: "Ops.Gl.Meshes.Rectangle_v2",
    id: "ee81e107-c297-4805-a724-2b66027e59cb",
    uiAttribs: {
      title: "rectangle",
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "ee81e107-c297-4805-a724-2b66027e59cb",
        objOut: "c1894429-36fc-43cf-89a7-c58dfb3000c4"
      }, {
        portIn: "render",
        portOut: "else",
        objIn: "ee81e107-c297-4805-a724-2b66027e59cb",
        objOut: "8465b7d9-e6d4-4378-a91f-c6b59816a4eb"
      }]
    }, {
      name: "width",
      value: 1
    }, {
      name: "height",
      value: 1.34292566
    }, {
      name: "pivot x index",
      value: 0
    }, {
      name: "pivot x",
      value: "center"
    }, {
      name: "pivot y index",
      value: 0
    }, {
      name: "pivot y",
      value: "center"
    }, {
      name: "num columns",
      value: 1
    }, {
      name: "num rows",
      value: 1
    }, {
      name: "axis index",
      value: 0
    }, {
      name: "axis",
      value: "xy"
    }, {
      name: "Active",
      value: !0
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "geometry"
    }]
  }, {
    opId: "9549e2ed-a544-4d33-a672-05c7854ccf5d",
    objName: "Ops.Boolean.IfTrueThen_v2",
    id: "5ff4293e-ad6b-4392-97bb-a6bc94084454",
    uiAttribs: {
      createdLocally: !0,
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "Next",
        objIn: "5ff4293e-ad6b-4392-97bb-a6bc94084454",
        objOut: "13b508d7-f978-458a-9d02-123ba1cbbbcd"
      }]
    }, {
      name: "boolean",
      links: [{
        portIn: "boolean",
        portOut: "Is Mobile",
        objIn: "5ff4293e-ad6b-4392-97bb-a6bc94084454",
        objOut: "34e10c3b-cb0a-49f7-bcaa-a00f7fd14682"
      }]
    }],
    portsOut: [{
      name: "then"
    }, {
      name: "else"
    }]
  }, {
    opId: "9549e2ed-a544-4d33-a672-05c7854ccf5d",
    objName: "Ops.Boolean.IfTrueThen_v2",
    id: "16a01a0b-c7aa-455f-83b2-de3a4e8b7b99",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "then",
        objIn: "16a01a0b-c7aa-455f-83b2-de3a4e8b7b99",
        objOut: "5ff4293e-ad6b-4392-97bb-a6bc94084454"
      }]
    }, {
      name: "boolean",
      links: [{
        portIn: "boolean",
        portOut: "is picked",
        objIn: "16a01a0b-c7aa-455f-83b2-de3a4e8b7b99",
        objOut: "4176fa40-1254-42f4-a279-f7a40e49b250"
      }]
    }],
    portsOut: [{
      name: "then"
    }, {
      name: "else"
    }]
  }, {
    opId: "650baeb1-db2d-4781-9af6-ab4e9d4277be",
    objName: "Ops.Gl.Matrix.Transform",
    id: "88b016f2-46b6-48a7-a59c-270481db78ec",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "then",
        objIn: "88b016f2-46b6-48a7-a59c-270481db78ec",
        objOut: "16a01a0b-c7aa-455f-83b2-de3a4e8b7b99"
      }]
    }, {
      name: "posX",
      value: 0
    }, {
      name: "posY",
      value: 0
    }, {
      name: "posZ",
      value: 0
    }, {
      name: "scale",
      value: 1.2
    }, {
      name: "rotX",
      value: 0
    }, {
      name: "rotY",
      value: 0
    }, {
      name: "rotZ",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "fc5718d6-11a5-496e-8f16-1c78b1a2824c",
    objName: "Ops.Gl.Meshes.Rectangle_v2",
    id: "394a29a9-b745-411b-b5b3-69b39863cebf",
    uiAttribs: {
      createdLocally: !0,
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "394a29a9-b745-411b-b5b3-69b39863cebf",
        objOut: "88b016f2-46b6-48a7-a59c-270481db78ec"
      }, {
        portIn: "render",
        portOut: "else",
        objIn: "394a29a9-b745-411b-b5b3-69b39863cebf",
        objOut: "16a01a0b-c7aa-455f-83b2-de3a4e8b7b99"
      }]
    }, {
      name: "width",
      value: .4
    }, {
      name: "height",
      value: .541717025
    }, {
      name: "pivot x index",
      value: 0
    }, {
      name: "pivot x",
      value: "center"
    }, {
      name: "pivot y index",
      value: 0
    }, {
      name: "pivot y",
      value: "center"
    }, {
      name: "num columns",
      value: 1
    }, {
      name: "num rows",
      value: 1
    }, {
      name: "axis index",
      value: 0
    }, {
      name: "axis",
      value: "xy"
    }, {
      name: "Active",
      value: !0
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "geometry"
    }]
  }, {
    opId: "9549e2ed-a544-4d33-a672-05c7854ccf5d",
    objName: "Ops.Boolean.IfTrueThen_v2",
    id: "b77f12bd-5941-485f-9a63-d31f2d9acbd9",
    uiAttribs: {
      createdLocally: !0,
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "Next",
        objIn: "b77f12bd-5941-485f-9a63-d31f2d9acbd9",
        objOut: "5e22eb2d-efcd-46b3-b0ea-8847f92f9c73"
      }]
    }, {
      name: "boolean",
      links: [{
        portIn: "boolean",
        portOut: "Is Mobile",
        objIn: "b77f12bd-5941-485f-9a63-d31f2d9acbd9",
        objOut: "34e10c3b-cb0a-49f7-bcaa-a00f7fd14682"
      }]
    }],
    portsOut: [{
      name: "then"
    }, {
      name: "else"
    }]
  }, {
    opId: "9549e2ed-a544-4d33-a672-05c7854ccf5d",
    objName: "Ops.Boolean.IfTrueThen_v2",
    id: "38949e62-e16c-4454-9efa-39eff6b12b08",
    uiAttribs: {
      createdLocally: !0,
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "then",
        objIn: "38949e62-e16c-4454-9efa-39eff6b12b08",
        objOut: "b77f12bd-5941-485f-9a63-d31f2d9acbd9"
      }]
    }, {
      name: "boolean",
      links: [{
        portIn: "boolean",
        portOut: "is picked",
        objIn: "38949e62-e16c-4454-9efa-39eff6b12b08",
        objOut: "eb16ce2b-7487-4f1c-9122-ef6809e2fd06"
      }]
    }],
    portsOut: [{
      name: "then"
    }, {
      name: "else"
    }]
  }, {
    opId: "fc5718d6-11a5-496e-8f16-1c78b1a2824c",
    objName: "Ops.Gl.Meshes.Rectangle_v2",
    id: "d4569d15-4101-4a06-9019-fee47632359c",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "else",
        objIn: "d4569d15-4101-4a06-9019-fee47632359c",
        objOut: "38949e62-e16c-4454-9efa-39eff6b12b08"
      }, {
        portIn: "render",
        portOut: "trigger",
        objIn: "d4569d15-4101-4a06-9019-fee47632359c",
        objOut: "835ee88d-7a1c-4e87-b672-423567482105"
      }]
    }, {
      name: "width",
      value: .3
    }, {
      name: "height",
      value: .41966427
    }, {
      name: "pivot x index",
      value: 0
    }, {
      name: "pivot x",
      value: "center"
    }, {
      name: "pivot y index",
      value: 0
    }, {
      name: "pivot y",
      value: "center"
    }, {
      name: "num columns",
      value: 1
    }, {
      name: "num rows",
      value: 1
    }, {
      name: "axis index",
      value: 0
    }, {
      name: "axis",
      value: "xy"
    }, {
      name: "Active",
      value: !0
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "geometry"
    }]
  }, {
    opId: "650baeb1-db2d-4781-9af6-ab4e9d4277be",
    objName: "Ops.Gl.Matrix.Transform",
    id: "835ee88d-7a1c-4e87-b672-423567482105",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "then",
        objIn: "835ee88d-7a1c-4e87-b672-423567482105",
        objOut: "38949e62-e16c-4454-9efa-39eff6b12b08"
      }]
    }, {
      name: "posX",
      value: 0
    }, {
      name: "posY",
      value: 0
    }, {
      name: "posZ",
      value: 0
    }, {
      name: "scale",
      value: 1.2
    }, {
      name: "rotX",
      value: 0
    }, {
      name: "rotY",
      value: 0
    }, {
      name: "rotZ",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "fc5718d6-11a5-496e-8f16-1c78b1a2824c",
    objName: "Ops.Gl.Meshes.Rectangle_v2",
    id: "e9ca4a57-9308-4e15-bf3c-712d6c747cff",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "e9ca4a57-9308-4e15-bf3c-712d6c747cff",
        objOut: "e83fcb38-d98e-4a89-9055-6cd6cc35b530"
      }, {
        portIn: "render",
        portOut: "else",
        objIn: "e9ca4a57-9308-4e15-bf3c-712d6c747cff",
        objOut: "8237f083-dc2f-4287-8350-94dc5d15090b"
      }]
    }, {
      name: "width",
      value: .2
    }, {
      name: "height",
      value: .26858513
    }, {
      name: "pivot x index",
      value: 0
    }, {
      name: "pivot x",
      value: "center"
    }, {
      name: "pivot y index",
      value: 0
    }, {
      name: "pivot y",
      value: "center"
    }, {
      name: "num columns",
      value: 1
    }, {
      name: "num rows",
      value: 1
    }, {
      name: "axis index",
      value: 0
    }, {
      name: "axis",
      value: "xy"
    }, {
      name: "Active",
      value: !0
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "geometry"
    }]
  }, {
    opId: "650baeb1-db2d-4781-9af6-ab4e9d4277be",
    objName: "Ops.Gl.Matrix.Transform",
    id: "e83fcb38-d98e-4a89-9055-6cd6cc35b530",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "then",
        objIn: "e83fcb38-d98e-4a89-9055-6cd6cc35b530",
        objOut: "8237f083-dc2f-4287-8350-94dc5d15090b"
      }]
    }, {
      name: "posX",
      value: 0
    }, {
      name: "posY",
      value: 0
    }, {
      name: "posZ",
      value: 0
    }, {
      name: "scale",
      value: 1.2
    }, {
      name: "rotX",
      value: 0
    }, {
      name: "rotY",
      value: 0
    }, {
      name: "rotZ",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "9549e2ed-a544-4d33-a672-05c7854ccf5d",
    objName: "Ops.Boolean.IfTrueThen_v2",
    id: "c75981ba-1c08-4fa1-a3ec-59e3262327f0",
    uiAttribs: {
      createdLocally: !0,
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "Next",
        objIn: "c75981ba-1c08-4fa1-a3ec-59e3262327f0",
        objOut: "46dc590a-291d-4b9a-b413-6e12b4a7d396"
      }]
    }, {
      name: "boolean",
      links: [{
        portIn: "boolean",
        portOut: "Is Mobile",
        objIn: "c75981ba-1c08-4fa1-a3ec-59e3262327f0",
        objOut: "34e10c3b-cb0a-49f7-bcaa-a00f7fd14682"
      }]
    }],
    portsOut: [{
      name: "then"
    }, {
      name: "else"
    }]
  }, {
    opId: "9549e2ed-a544-4d33-a672-05c7854ccf5d",
    objName: "Ops.Boolean.IfTrueThen_v2",
    id: "8237f083-dc2f-4287-8350-94dc5d15090b",
    uiAttribs: {
      createdLocally: !0,
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "then",
        objIn: "8237f083-dc2f-4287-8350-94dc5d15090b",
        objOut: "c75981ba-1c08-4fa1-a3ec-59e3262327f0"
      }]
    }, {
      name: "boolean",
      value: !1
    }],
    portsOut: [{
      name: "then"
    }, {
      name: "else"
    }]
  }, {
    opId: "e3f68bc3-892a-4c78-9974-aca25c27025d",
    objName: "Ops.Ui.PatchInput",
    id: "f871adcd-2cc2-4d74-8fa4-308c633b80ee",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [],
    portsOut: [{
      name: "in0 MainLoop width"
    }, {
      name: "in1 sequence trigger 14"
    }, {
      name: "in2 BrowserInfo Is Mobile"
    }, {
      name: "in3 MainLoop width"
    }, {
      name: "in4 MainLoop height"
    }, {
      name: "in5 MainLoop height"
    }]
  }, {
    opId: "851b44cb-5667-4140-9800-5aeb7031f1d7",
    objName: "Ops.Ui.PatchOutput",
    id: "a9d837be-c78e-4ec7-905e-01bdb6aa0b92",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [],
    portsOut: []
  }, {
    opId: "84d9a6f0-ed7a-466d-b386-225ed9e89c60",
    objName: "Ops.Ui.SubPatch",
    id: "1b4e1440-7da4-427b-95c8-3ee13c50120e",
    uiAttribs: {
      title: "About Us",
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "create port",
      value: null
    }, {
      name: "dataStr",
      value: '{"ports":[{"name":"in0 MainLoop width","type":0},{"name":"in1 sequence trigger 14","type":1},{"name":"in2 BrowserInfo Is Mobile","type":0},{"name":"in3 MainLoop width","type":0},{"name":"in4 MainLoop height","type":0},{"name":"in5 MainLoop height","type":0}],"portsOut":[]}'
    }, {
      name: "patchId",
      value: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72"
    }, {
      name: "in0 MainLoop width",
      links: [{
        portIn: "in0 MainLoop width",
        portOut: "width",
        objIn: "1b4e1440-7da4-427b-95c8-3ee13c50120e",
        objOut: "f7acf1fa-2a5e-4eee-8349-c255a630071a"
      }]
    }, {
      name: "in1 sequence trigger 14",
      links: [{
        portIn: "in1 sequence trigger 14",
        portOut: "trigger 14",
        objIn: "1b4e1440-7da4-427b-95c8-3ee13c50120e",
        objOut: "7f70882b-4023-4989-bc41-b73352394018"
      }]
    }, {
      name: "in2 BrowserInfo Is Mobile",
      links: [{
        portIn: "in2 BrowserInfo Is Mobile",
        portOut: "Is Mobile",
        objIn: "1b4e1440-7da4-427b-95c8-3ee13c50120e",
        objOut: "34e10c3b-cb0a-49f7-bcaa-a00f7fd14682"
      }]
    }, {
      name: "in3 MainLoop width",
      links: [{
        portIn: "in3 MainLoop width",
        portOut: "width",
        objIn: "1b4e1440-7da4-427b-95c8-3ee13c50120e",
        objOut: "f7acf1fa-2a5e-4eee-8349-c255a630071a"
      }]
    }, {
      name: "in4 MainLoop height",
      links: [{
        portIn: "in4 MainLoop height",
        portOut: "height",
        objIn: "1b4e1440-7da4-427b-95c8-3ee13c50120e",
        objOut: "f7acf1fa-2a5e-4eee-8349-c255a630071a"
      }]
    }, {
      name: "in5 MainLoop height",
      links: [{
        portIn: "in5 MainLoop height",
        portOut: "height",
        objIn: "1b4e1440-7da4-427b-95c8-3ee13c50120e",
        objOut: "f7acf1fa-2a5e-4eee-8349-c255a630071a"
      }]
    }],
    portsOut: [{
      name: "create port out",
      value: 0
    }]
  }, {
    opId: "e3f68bc3-892a-4c78-9974-aca25c27025d",
    objName: "Ops.Ui.PatchInput",
    id: "e1136c0a-2225-4b0a-83ab-28b77003668d",
    uiAttribs: {
      subPatch: "9d849031-4b83-414b-b43c-4bb9f5b080bb",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [],
    portsOut: [{
      name: "in0 sequence trigger 13"
    }, {
      name: "in1 BrowserInfo Is Mobile"
    }, {
      name: "in2 MainLoop width"
    }, {
      name: "in3 MainLoop height"
    }, {
      name: "in4 sequence trigger 13",
      value: 0
    }]
  }, {
    opId: "851b44cb-5667-4140-9800-5aeb7031f1d7",
    objName: "Ops.Ui.PatchOutput",
    id: "706447f1-10eb-4196-91e6-3e5ba25e6c29",
    uiAttribs: {
      subPatch: "9d849031-4b83-414b-b43c-4bb9f5b080bb",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [],
    portsOut: []
  }, {
    opId: "84d9a6f0-ed7a-466d-b386-225ed9e89c60",
    objName: "Ops.Ui.SubPatch",
    id: "f7ccf286-10d6-4763-9a4f-e7953c2fb537",
    uiAttribs: {
      title: "Logo",
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "create port",
      value: null
    }, {
      name: "dataStr",
      value: '{"ports":[{"name":"in0 sequence trigger 13","type":1},{"name":"in1 BrowserInfo Is Mobile","type":0},{"name":"in2 MainLoop width","type":0},{"name":"in3 MainLoop height","type":0},{"name":"in4 sequence trigger 13","type":1}],"portsOut":[]}'
    }, {
      name: "patchId",
      value: "9d849031-4b83-414b-b43c-4bb9f5b080bb"
    }, {
      name: "in0 sequence trigger 13",
      links: [{
        portIn: "in0 sequence trigger 13",
        portOut: "trigger 13",
        objIn: "f7ccf286-10d6-4763-9a4f-e7953c2fb537",
        objOut: "7f70882b-4023-4989-bc41-b73352394018"
      }]
    }, {
      name: "in1 BrowserInfo Is Mobile",
      links: [{
        portIn: "in1 BrowserInfo Is Mobile",
        portOut: "Is Mobile",
        objIn: "f7ccf286-10d6-4763-9a4f-e7953c2fb537",
        objOut: "34e10c3b-cb0a-49f7-bcaa-a00f7fd14682"
      }]
    }, {
      name: "in2 MainLoop width",
      links: [{
        portIn: "in2 MainLoop width",
        portOut: "width",
        objIn: "f7ccf286-10d6-4763-9a4f-e7953c2fb537",
        objOut: "f7acf1fa-2a5e-4eee-8349-c255a630071a"
      }]
    }, {
      name: "in3 MainLoop height",
      links: [{
        portIn: "in3 MainLoop height",
        portOut: "height",
        objIn: "f7ccf286-10d6-4763-9a4f-e7953c2fb537",
        objOut: "f7acf1fa-2a5e-4eee-8349-c255a630071a"
      }]
    }, {
      name: "in4 sequence trigger 13"
    }],
    portsOut: [{
      name: "create port out",
      value: 0
    }]
  }, {
    opId: "5c6d375a-82db-4366-8013-93f56b4061a9",
    objName: "Ops.String.NumberToString_v2",
    id: "2dd3935c-ba99-4710-9160-69c41baa09e2",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Number",
      value: 0
    }],
    portsOut: [{
      name: "Result",
      value: "0"
    }]
  }, {
    opId: "afea522b-ab72-4574-b721-5d37f5abaf77",
    objName: "Ops.Array.ArrayGetTexture",
    id: "7945aeb8-7d4c-4f8a-9cfc-6abb3e2add7e",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "array",
      links: [{
        portIn: "array",
        portOut: "TextureArray",
        objIn: "7945aeb8-7d4c-4f8a-9cfc-6abb3e2add7e",
        objOut: "69d73f32-6212-4514-91b7-957ac432945d"
      }]
    }, {
      name: "index",
      links: [{
        portIn: "index",
        portOut: "index",
        objIn: "7945aeb8-7d4c-4f8a-9cfc-6abb3e2add7e",
        objOut: "5357e93f-181e-46b0-a748-47fc482b0688"
      }]
    }],
    portsOut: [{
      name: "value"
    }]
  }, {
    opId: "4ee5bc6d-fd73-4498-8378-6846e57cdd7f",
    objName: "Ops.Gl.TextureArrayLoader",
    id: "69d73f32-6212-4514-91b7-957ac432945d",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null,
      warning: null,
      error: null
    },
    portsIn: [{
      name: "url",
      value: "assets/protestarsXXX.jpg"
    }, {
      name: "Left Pad",
      value: !1
    }, {
      name: "Num Digits",
      value: 3
    }, {
      name: "Index Start",
      value: 11
    }, {
      name: "Index End",
      value: 20
    }, {
      name: "filter index",
      value: 0
    }, {
      name: "filter",
      value: "linear"
    }, {
      name: "wrap index",
      value: 2
    }, {
      name: "wrap",
      value: "repeat"
    }, {
      name: "flip",
      value: !1
    }, {
      name: "unpackPreMultipliedAlpha",
      value: !1
    }],
    portsOut: [{
      name: "TextureArray"
    }, {
      name: "width",
      value: 3199
    }, {
      name: "height",
      value: 4e3
    }, {
      name: "loading",
      value: !1
    }, {
      name: "Aspect Ratio",
      value: .79975
    }]
  }, {
    opId: "afea522b-ab72-4574-b721-5d37f5abaf77",
    objName: "Ops.Array.ArrayGetTexture",
    id: "710719e1-82f3-4f84-908e-c0b82a8254fd",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "array",
      links: [{
        portIn: "array",
        portOut: "TextureArray",
        objIn: "710719e1-82f3-4f84-908e-c0b82a8254fd",
        objOut: "42c84d9f-99c6-49e0-86c3-981e8261c190"
      }]
    }, {
      name: "index",
      links: [{
        portIn: "index",
        portOut: "index",
        objIn: "710719e1-82f3-4f84-908e-c0b82a8254fd",
        objOut: "c19630f6-fa96-4c14-9468-1f67f2b09f7c"
      }]
    }],
    portsOut: [{
      name: "value"
    }]
  }, {
    opId: "4ee5bc6d-fd73-4498-8378-6846e57cdd7f",
    objName: "Ops.Gl.TextureArrayLoader",
    id: "42c84d9f-99c6-49e0-86c3-981e8261c190",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null,
      warning: null,
      error: null
    },
    portsIn: [{
      name: "url",
      value: "assets/protestarsXXX.jpg"
    }, {
      name: "Left Pad",
      value: !1
    }, {
      name: "Num Digits",
      value: 3
    }, {
      name: "Index Start",
      value: 21
    }, {
      name: "Index End",
      value: 30
    }, {
      name: "filter index",
      value: 0
    }, {
      name: "filter",
      value: "linear"
    }, {
      name: "wrap index",
      value: 2
    }, {
      name: "wrap",
      value: "repeat"
    }, {
      name: "flip",
      value: !1
    }, {
      name: "unpackPreMultipliedAlpha",
      value: !1
    }],
    portsOut: [{
      name: "TextureArray"
    }, {
      name: "width",
      value: 2662
    }, {
      name: "height",
      value: 4e3
    }, {
      name: "loading",
      value: !1
    }, {
      name: "Aspect Ratio",
      value: .6655
    }]
  }, {
    opId: "afea522b-ab72-4574-b721-5d37f5abaf77",
    objName: "Ops.Array.ArrayGetTexture",
    id: "6c691245-9271-42b7-adba-01708bf74bb6",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "array",
      links: [{
        portIn: "array",
        portOut: "TextureArray",
        objIn: "6c691245-9271-42b7-adba-01708bf74bb6",
        objOut: "ab223bc5-3ed6-4f21-8623-c4740ced0f17"
      }]
    }, {
      name: "index",
      links: [{
        portIn: "index",
        portOut: "index",
        objIn: "6c691245-9271-42b7-adba-01708bf74bb6",
        objOut: "00ec175c-c157-40bc-bb9d-f4fb0f5a96d1"
      }]
    }],
    portsOut: [{
      name: "value"
    }]
  }, {
    opId: "4ee5bc6d-fd73-4498-8378-6846e57cdd7f",
    objName: "Ops.Gl.TextureArrayLoader",
    id: "ab223bc5-3ed6-4f21-8623-c4740ced0f17",
    uiAttribs: {
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null,
      warning: null,
      error: null
    },
    portsIn: [{
      name: "url",
      value: "assets/protestarsXXX.jpg"
    }, {
      name: "Left Pad",
      value: !1
    }, {
      name: "Num Digits",
      value: 3
    }, {
      name: "Index Start",
      value: 31
    }, {
      name: "Index End",
      value: 40
    }, {
      name: "filter index",
      value: 0
    }, {
      name: "filter",
      value: "linear"
    }, {
      name: "wrap index",
      value: 2
    }, {
      name: "wrap",
      value: "repeat"
    }, {
      name: "flip",
      value: !1
    }, {
      name: "unpackPreMultipliedAlpha",
      value: !1
    }],
    portsOut: [{
      name: "TextureArray"
    }, {
      name: "width",
      value: 2903
    }, {
      name: "height",
      value: 4e3
    }, {
      name: "loading",
      value: !1
    }, {
      name: "Aspect Ratio",
      value: .72575
    }]
  }, {
    opId: "ca3bc984-e596-48fb-b53d-502eb13979b0",
    objName: "Ops.Gl.RandomCluster",
    id: "00ec175c-c157-40bc-bb9d-f4fb0f5a96d1",
    uiAttribs: {
      createdLocally: !0,
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "trigger",
        objIn: "00ec175c-c157-40bc-bb9d-f4fb0f5a96d1",
        objOut: "4c92ca84-ad02-480e-a7cc-1c14302135c5"
      }]
    }, {
      name: "num",
      value: 10
    }, {
      name: "random seed",
      value: 1
    }, {
      name: "round",
      value: !1
    }, {
      name: "size",
      value: 10
    }, {
      name: "scaleX",
      value: 1
    }, {
      name: "scaleY",
      value: 1
    }, {
      name: "scaleZ",
      value: 1
    }, {
      name: "Rotate X",
      value: 1
    }, {
      name: "Rotate Y",
      value: 1
    }, {
      name: "Rotate Z",
      value: 1
    }, {
      name: "Scroll X",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "index"
    }, {
      name: "rnd",
      value: .18710991083676268
    }]
  }, {
    opId: "68177370-116e-4c76-aef3-3b10d68e7227",
    objName: "Ops.Html.FontFile_v2",
    id: "43e99693-d2cb-463d-8caf-74d5e476c4eb",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "file",
      value: "assets/ProximaNova-Regular.otf",
      display: "file"
    }, {
      name: "family",
      value: "Proxima Nova Regular"
    }],
    portsOut: [{
      name: "Loaded",
      value: !0
    }, {
      name: "Loaded Trigger",
      value: 0
    }]
  }, {
    opId: "93492eeb-bf35-4a62-98f7-d85b0b79bfe5",
    objName: "Ops.Ui.Comment_v2",
    id: "b937b6ea-0ba4-4e8b-9728-d5c7b32740a8",
    uiAttribs: {
      comment_title: "Mobile",
      comment_text: "",
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      createdLocally: !0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "title",
      value: "Mobile"
    }, {
      name: "text",
      value: ""
    }],
    portsOut: []
  }, {
    opId: "93492eeb-bf35-4a62-98f7-d85b0b79bfe5",
    objName: "Ops.Ui.Comment_v2",
    id: "9715573f-e3d7-41aa-84fb-f6726ec0e3f4",
    uiAttribs: {
      comment_title: "Pc",
      comment_text: "",
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      createdLocally: !0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "title",
      value: "Pc"
    }, {
      name: "text",
      value: ""
    }],
    portsOut: []
  }, {
    opId: "2617b407-60a0-4ff6-b4a7-18136cfa7817",
    objName: "Ops.Math.MapRange",
    id: "10e0a91f-47c9-47e2-9b02-05cf5b608acf",
    uiAttribs: {
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      createdLocally: !0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "value",
      value: 0
    }, {
      name: "old min",
      value: 0
    }, {
      name: "old max",
      value: 1
    }, {
      name: "new min",
      value: -1
    }, {
      name: "new max",
      value: 1
    }, {
      name: "Easing index",
      value: 0
    }, {
      name: "Easing",
      value: "Linear"
    }],
    portsOut: [{
      name: "result",
      value: -1
    }]
  }, {
    opId: "93492eeb-bf35-4a62-98f7-d85b0b79bfe5",
    objName: "Ops.Ui.Comment_v2",
    id: "d0aa71e3-7226-42ef-8ab1-3dbf3e338ae5",
    uiAttribs: {
      comment_title: "Mobile",
      comment_text: "",
      subPatch: "9d849031-4b83-414b-b43c-4bb9f5b080bb",
      createdLocally: !0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "title",
      value: "Mobile"
    }, {
      name: "text",
      value: ""
    }],
    portsOut: []
  }, {
    opId: "93492eeb-bf35-4a62-98f7-d85b0b79bfe5",
    objName: "Ops.Ui.Comment_v2",
    id: "298c3176-d740-41af-ae00-b66eb0c571d5",
    uiAttribs: {
      comment_title: "Pc",
      comment_text: "",
      subPatch: "9d849031-4b83-414b-b43c-4bb9f5b080bb",
      createdLocally: !0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "title",
      value: "Pc"
    }, {
      name: "text",
      value: ""
    }],
    portsOut: []
  }, {
    opId: "1bbdae06-fbb2-489b-9bcc-36c9d65bd441",
    objName: "Ops.Math.Multiply",
    id: "5b20ee0a-4bbb-496c-a06c-7bac0e927644",
    uiAttribs: {
      createdLocally: !0,
      subPatch: "9d849031-4b83-414b-b43c-4bb9f5b080bb",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "number1",
      links: [{
        portIn: "number1",
        portOut: "result",
        objIn: "5b20ee0a-4bbb-496c-a06c-7bac0e927644",
        objOut: "11779718-6a58-42e6-9389-4606ca0873ed"
      }]
    }, {
      name: "number2",
      value: .95
    }],
    portsOut: [{
      name: "result",
      value: 169.1
    }]
  }, {
    opId: "a4ffe852-d200-4b96-9347-68feb01122ca",
    objName: "Ops.Math.Subtract",
    id: "d2fa8d27-ce2c-49cc-809f-e387aa07a4e8",
    uiAttribs: {
      createdLocally: !0,
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "number1",
      links: [{
        portIn: "number1",
        portOut: "in5 MainLoop height",
        objIn: "d2fa8d27-ce2c-49cc-809f-e387aa07a4e8",
        objOut: "f871adcd-2cc2-4d74-8fa4-308c633b80ee"
      }]
    }, {
      name: "number2",
      value: 22.37
    }],
    portsOut: [{
      name: "result"
    }]
  }, {
    opId: "a4ffe852-d200-4b96-9347-68feb01122ca",
    objName: "Ops.Math.Subtract",
    id: "ce1dd707-d623-425b-9f6e-733ed2deab4f",
    uiAttribs: {
      createdLocally: !0,
      subPatch: "9d849031-4b83-414b-b43c-4bb9f5b080bb",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "number1",
      links: [{
        portIn: "number1",
        portOut: "in3 MainLoop height",
        objIn: "ce1dd707-d623-425b-9f6e-733ed2deab4f",
        objOut: "e1136c0a-2225-4b0a-83ab-28b77003668d"
      }]
    }, {
      name: "number2",
      value: 35
    }],
    portsOut: [{
      name: "result",
      value: 321
    }]
  }, {
    opId: "949d6daf-d677-4ed6-a921-51a5732b64ac",
    objName: "Ops.Gl.PixelProjection",
    id: "501ea5af-544c-4a66-b4dc-e286e0eaa795",
    uiAttribs: {
      subPatch: "9d849031-4b83-414b-b43c-4bb9f5b080bb",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "else",
        objIn: "501ea5af-544c-4a66-b4dc-e286e0eaa795",
        objOut: "b3a2225d-75b7-48a7-857b-3bd2b972f034"
      }]
    }, {
      name: "use viewport size",
      value: !0
    }, {
      name: "Width",
      value: 500
    }, {
      name: "Height",
      value: 500
    }, {
      name: "frustum near",
      value: -500
    }, {
      name: "frustum far",
      value: 500
    }, {
      name: "Flip X",
      value: !1
    }, {
      name: "Flip Y",
      value: !1
    }, {
      name: "Zero Y",
      value: !1
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "2390f6b3-2122-412e-8c8d-5c2f574e8bd1",
    objName: "Ops.Gl.Meshes.TextMesh_v2",
    id: "e4ced3da-372f-4e06-9e22-4068747c7a12",
    uiAttribs: {
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Render",
      links: [{
        portIn: "Render",
        portOut: "trigger",
        objIn: "e4ced3da-372f-4e06-9e22-4068747c7a12",
        objOut: "30cad0d3-fc6e-4a94-b562-22c749c8b122"
      }]
    }, {
      name: "Text",
      value: "SHOP"
    }, {
      name: "Scale",
      value: 35
    }, {
      name: "Font",
      value: "Proxima Nova Regular"
    }, {
      name: "align index",
      value: 1
    }, {
      name: "align",
      value: "center"
    }, {
      name: "vertical align index",
      value: 1
    }, {
      name: "vertical align",
      value: "Middle"
    }, {
      name: "Line Height",
      value: 1
    }, {
      name: "Letter Spacing",
      value: 0
    }, {
      name: "filter index",
      value: 2
    }, {
      name: "filter",
      value: "mipmap"
    }, {
      name: "Anisotropic index",
      value: 0
    }, {
      name: "Anisotropic",
      value: 0
    }, {
      name: "Texture Color",
      value: 0
    }, {
      name: "Texture Mask",
      value: 0
    }, {
      name: "r",
      links: [{
        portIn: "r",
        portOut: "value",
        objIn: "e4ced3da-372f-4e06-9e22-4068747c7a12",
        objOut: "f1a92161-3e4d-4e65-a41a-0555a611ca55"
      }]
    }, {
      name: "g",
      links: [{
        portIn: "g",
        portOut: "value",
        objIn: "e4ced3da-372f-4e06-9e22-4068747c7a12",
        objOut: "48f22e03-e63f-482c-86ac-5930a6ece6f2"
      }]
    }, {
      name: "b",
      links: [{
        portIn: "b",
        portOut: "value",
        objIn: "e4ced3da-372f-4e06-9e22-4068747c7a12",
        objOut: "561e70b0-5941-46a3-a978-e62ed1feeb31"
      }]
    }, {
      name: "a",
      value: 1
    }],
    portsOut: [{
      name: "Next"
    }, {
      name: "texture"
    }, {
      name: "Total Lines",
      value: 1
    }, {
      name: "Width",
      value: 33.125
    }, {
      name: "Font Available",
      value: !0
    }]
  }, {
    opId: "a669d4f7-1e35-463c-bf8b-08c9f1b68e04",
    objName: "Ops.Html.HyperLink_v2",
    id: "85e40a10-9781-4720-a3f4-4fff9df504b4",
    uiAttribs: {
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Open",
      links: [{
        portIn: "Open",
        portOut: "Left Click",
        objIn: "85e40a10-9781-4720-a3f4-4fff9df504b4",
        objOut: "4e50e522-b4fa-4d4c-b641-1d857bc57337"
      }]
    }, {
      name: "URL",
      value: "https://protestars.github.io/Protestars/shop.html"
    }, {
      name: "Target Name",
      value: "_self"
    }, {
      name: "Specs",
      value: ""
    }],
    portsOut: []
  }, {
    opId: "75cadc63-62bb-4ddd-b519-aa99568a1e6b",
    objName: "Ops.Gl.Matrix.ScreenCoordinates",
    id: "8387aee1-d1f9-4191-bac4-c39258f7d79e",
    uiAttribs: {
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Execute",
      links: [{
        portIn: "Execute",
        portOut: "Next",
        objIn: "8387aee1-d1f9-4191-bac4-c39258f7d79e",
        objOut: "e4ced3da-372f-4e06-9e22-4068747c7a12"
      }]
    }],
    portsOut: [{
      name: "Trigger",
      value: 0
    }, {
      name: "X",
      value: 116.00001060962677
    }, {
      name: "Y",
      value: 321.73001432418823
    }, {
      name: "Visible",
      value: !0
    }]
  }, {
    opId: "650baeb1-db2d-4781-9af6-ab4e9d4277be",
    objName: "Ops.Gl.Matrix.Transform",
    id: "30cad0d3-fc6e-4a94-b562-22c749c8b122",
    uiAttribs: {
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "Trigger out",
        objIn: "30cad0d3-fc6e-4a94-b562-22c749c8b122",
        objOut: "4e50e522-b4fa-4d4c-b641-1d857bc57337"
      }]
    }, {
      name: "posX",
      value: 0
    }, {
      name: "posY",
      value: -17
    }, {
      name: "posZ",
      value: 0
    }, {
      name: "scale",
      value: 1
    }, {
      name: "rotX",
      value: 0
    }, {
      name: "rotY",
      value: 0
    }, {
      name: "rotZ",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "06ad9d35-ccf5-4d31-889c-e23fa062588a",
    objName: "Ops.Anim.BoolAnim",
    id: "f1a92161-3e4d-4e65-a41a-0555a611ca55",
    uiAttribs: {
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "Trigger out",
        objIn: "f1a92161-3e4d-4e65-a41a-0555a611ca55",
        objOut: "4e50e522-b4fa-4d4c-b641-1d857bc57337"
      }]
    }, {
      name: "bool",
      links: [{
        portIn: "bool",
        portOut: "Pointer Hover",
        objIn: "f1a92161-3e4d-4e65-a41a-0555a611ca55",
        objOut: "4e50e522-b4fa-4d4c-b641-1d857bc57337"
      }]
    }, {
      name: "easing",
      value: "linear"
    }, {
      name: "duration",
      value: .2
    }, {
      name: "Direction index",
      value: 0
    }, {
      name: "Direction",
      value: "Both"
    }, {
      name: "value false",
      value: .4823529411764706
    }, {
      name: "value true",
      value: 1
    }],
    portsOut: [{
      name: "trigger",
      value: 0
    }, {
      name: "value"
    }, {
      name: "finished",
      value: !0
    }, {
      name: "Finished Trigger",
      value: 0
    }]
  }, {
    opId: "06ad9d35-ccf5-4d31-889c-e23fa062588a",
    objName: "Ops.Anim.BoolAnim",
    id: "48f22e03-e63f-482c-86ac-5930a6ece6f2",
    uiAttribs: {
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "Trigger out",
        objIn: "48f22e03-e63f-482c-86ac-5930a6ece6f2",
        objOut: "4e50e522-b4fa-4d4c-b641-1d857bc57337"
      }]
    }, {
      name: "bool",
      links: [{
        portIn: "bool",
        portOut: "Pointer Hover",
        objIn: "48f22e03-e63f-482c-86ac-5930a6ece6f2",
        objOut: "4e50e522-b4fa-4d4c-b641-1d857bc57337"
      }]
    }, {
      name: "easing",
      value: "linear"
    }, {
      name: "duration",
      value: .2
    }, {
      name: "Direction index",
      value: 0
    }, {
      name: "Direction",
      value: "Both"
    }, {
      name: "value false",
      value: .47843137254901963
    }, {
      name: "value true",
      value: .9882352941176471
    }],
    portsOut: [{
      name: "trigger",
      value: 0
    }, {
      name: "value"
    }, {
      name: "finished",
      value: !0
    }, {
      name: "Finished Trigger",
      value: 0
    }]
  }, {
    opId: "06ad9d35-ccf5-4d31-889c-e23fa062588a",
    objName: "Ops.Anim.BoolAnim",
    id: "561e70b0-5941-46a3-a978-e62ed1feeb31",
    uiAttribs: {
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "Trigger out",
        objIn: "561e70b0-5941-46a3-a978-e62ed1feeb31",
        objOut: "4e50e522-b4fa-4d4c-b641-1d857bc57337"
      }]
    }, {
      name: "bool",
      links: [{
        portIn: "bool",
        portOut: "Pointer Hover",
        objIn: "561e70b0-5941-46a3-a978-e62ed1feeb31",
        objOut: "4e50e522-b4fa-4d4c-b641-1d857bc57337"
      }]
    }, {
      name: "easing",
      value: "linear"
    }, {
      name: "duration",
      value: .2
    }, {
      name: "Direction index",
      value: 0
    }, {
      name: "Direction",
      value: "Both"
    }, {
      name: "value false",
      value: .7215686274509804
    }, {
      name: "value true",
      value: .992
    }],
    portsOut: [{
      name: "trigger",
      value: 0
    }, {
      name: "value"
    }, {
      name: "finished",
      value: !0
    }, {
      name: "Finished Trigger",
      value: 0
    }]
  }, {
    opId: "949d6daf-d677-4ed6-a921-51a5732b64ac",
    objName: "Ops.Gl.PixelProjection",
    id: "63a4b0b9-8210-461e-bf58-014407ac9620",
    uiAttribs: {
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "else",
        objIn: "63a4b0b9-8210-461e-bf58-014407ac9620",
        objOut: "797dd7f1-415e-49ea-b5c5-580b9e4a8343"
      }]
    }, {
      name: "use viewport size",
      value: !0
    }, {
      name: "Width",
      value: 500
    }, {
      name: "Height",
      value: 500
    }, {
      name: "frustum near",
      value: -500
    }, {
      name: "frustum far",
      value: 500
    }, {
      name: "Flip X",
      value: !1
    }, {
      name: "Flip Y",
      value: !1
    }, {
      name: "Zero Y",
      value: !1
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "650baeb1-db2d-4781-9af6-ab4e9d4277be",
    objName: "Ops.Gl.Matrix.Transform",
    id: "4af4c1fe-7936-411a-9bda-8afc46a18ae5",
    uiAttribs: {
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "4af4c1fe-7936-411a-9bda-8afc46a18ae5",
        objOut: "63a4b0b9-8210-461e-bf58-014407ac9620"
      }]
    }, {
      name: "posX",
      value: 116
    }, {
      name: "posY",
      links: [{
        portIn: "posY",
        portOut: "result",
        objIn: "4af4c1fe-7936-411a-9bda-8afc46a18ae5",
        objOut: "4e1e2e11-e2f3-4b67-baa5-a767c573556c"
      }]
    }, {
      name: "posZ",
      value: 0
    }, {
      name: "scale",
      value: .7
    }, {
      name: "rotX",
      value: 0
    }, {
      name: "rotY",
      value: 0
    }, {
      name: "rotZ",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "334728ca-60a2-4a42-a059-d9b5f3fe4d32",
    objName: "Ops.Gl.InteractiveRectangle_v2",
    id: "4e50e522-b4fa-4d4c-b641-1d857bc57337",
    uiAttribs: {
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Trigger in",
      links: [{
        portIn: "Trigger in",
        portOut: "trigger",
        objIn: "4e50e522-b4fa-4d4c-b641-1d857bc57337",
        objOut: "4af4c1fe-7936-411a-9bda-8afc46a18ae5"
      }]
    }, {
      name: "Width",
      value: 85.15
    }, {
      name: "Height",
      value: 30
    }, {
      name: "ID",
      value: ""
    }, {
      name: "Class",
      value: ""
    }, {
      name: "Pivot x index",
      value: 0
    }, {
      name: "Pivot x",
      value: "center"
    }, {
      name: "Pivot y index",
      value: 0
    }, {
      name: "Pivot y",
      value: "center"
    }, {
      name: "Axis index",
      value: 0
    }, {
      name: "Axis",
      value: "xy"
    }, {
      name: "Is Interactive",
      value: !0
    }, {
      name: "Render Rectangle",
      value: !1
    }, {
      name: "Show Boundings",
      value: !1
    }, {
      name: "Cursor index",
      value: 2
    }, {
      name: "Cursor",
      value: "pointer"
    }, {
      name: "Render",
      value: !0
    }],
    portsOut: [{
      name: "Trigger out"
    }, {
      name: "geometry"
    }, {
      name: "Pointer Hover"
    }, {
      name: "Pointer Down",
      value: !1
    }, {
      name: "Pointer X",
      value: .5368676261016945
    }, {
      name: "Pointer Y",
      value: .04761930171587814
    }, {
      name: "Top",
      value: 11.869986772537231
    }, {
      name: "Left",
      value: 86.19749638438225
    }, {
      name: "Right",
      value: 145.80250597000122
    }, {
      name: "Bottom",
      value: 32.86999237537384
    }, {
      name: "Left Click"
    }, {
      name: "Dom Element"
    }]
  }, {
    opId: "93492eeb-bf35-4a62-98f7-d85b0b79bfe5",
    objName: "Ops.Ui.Comment_v2",
    id: "de4273f3-5405-4711-9e66-41315adfec12",
    uiAttribs: {
      comment_title: "Pc",
      comment_text: "",
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      createdLocally: !0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "title",
      value: "Pc"
    }, {
      name: "text",
      value: ""
    }],
    portsOut: []
  }, {
    opId: "a4ffe852-d200-4b96-9347-68feb01122ca",
    objName: "Ops.Math.Subtract",
    id: "4e1e2e11-e2f3-4b67-baa5-a767c573556c",
    uiAttribs: {
      createdLocally: !0,
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "number1",
      links: [{
        portIn: "number1",
        portOut: "Value",
        objIn: "4e1e2e11-e2f3-4b67-baa5-a767c573556c",
        objOut: "1467c882-28eb-4227-8f61-8f4c83908f7b"
      }]
    }, {
      name: "number2",
      value: 22.37
    }],
    portsOut: [{
      name: "result"
    }]
  }, {
    opId: "9549e2ed-a544-4d33-a672-05c7854ccf5d",
    objName: "Ops.Boolean.IfTrueThen_v2",
    id: "797dd7f1-415e-49ea-b5c5-580b9e4a8343",
    uiAttribs: {
      createdLocally: !0,
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "in0 sequence trigger 12",
        objIn: "797dd7f1-415e-49ea-b5c5-580b9e4a8343",
        objOut: "d3d1f063-04ec-4292-be7c-2622b0ef653e"
      }]
    }, {
      name: "boolean",
      links: [{
        portIn: "boolean",
        portOut: "in1 BrowserInfo Is Mobile",
        objIn: "797dd7f1-415e-49ea-b5c5-580b9e4a8343",
        objOut: "d3d1f063-04ec-4292-be7c-2622b0ef653e"
      }]
    }],
    portsOut: [{
      name: "then"
    }, {
      name: "else"
    }]
  }, {
    opId: "e3f68bc3-892a-4c78-9974-aca25c27025d",
    objName: "Ops.Ui.PatchInput",
    id: "d3d1f063-04ec-4292-be7c-2622b0ef653e",
    uiAttribs: {
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [],
    portsOut: [{
      name: "in0 sequence trigger 12"
    }, {
      name: "in1 BrowserInfo Is Mobile"
    }]
  }, {
    opId: "851b44cb-5667-4140-9800-5aeb7031f1d7",
    objName: "Ops.Ui.PatchOutput",
    id: "8e8840e4-c7e5-41c4-8cbc-d8948ef599b9",
    uiAttribs: {
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [],
    portsOut: []
  }, {
    opId: "84d9a6f0-ed7a-466d-b386-225ed9e89c60",
    objName: "Ops.Ui.SubPatch",
    id: "bca6adad-60d0-4b53-98b5-bb2098d68fef",
    uiAttribs: {
      title: "Shop Us",
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "create port",
      value: null
    }, {
      name: "dataStr",
      value: '{"ports":[{"name":"in0 sequence trigger 12","type":1},{"name":"in1 BrowserInfo Is Mobile","type":0}],"portsOut":[]}'
    }, {
      name: "patchId",
      value: "1ea5b205-b671-4251-b46f-63f2978d3a14"
    }, {
      name: "in0 sequence trigger 12",
      links: [{
        portIn: "in0 sequence trigger 12",
        portOut: "trigger 12",
        objIn: "bca6adad-60d0-4b53-98b5-bb2098d68fef",
        objOut: "7f70882b-4023-4989-bc41-b73352394018"
      }]
    }, {
      name: "in1 BrowserInfo Is Mobile",
      links: [{
        portIn: "in1 BrowserInfo Is Mobile",
        portOut: "Is Mobile",
        objIn: "bca6adad-60d0-4b53-98b5-bb2098d68fef",
        objOut: "34e10c3b-cb0a-49f7-bcaa-a00f7fd14682"
      }]
    }],
    portsOut: [{
      name: "create port out",
      value: 0
    }]
  }, {
    opId: "b5249226-6095-4828-8a1c-080654e192fa",
    objName: "Ops.Vars.VarSetNumber_v2",
    id: "4eaa49a8-dc19-4daa-9712-4007c365d4c0",
    uiAttribs: {
      title: "set #width",
      createdLocally: !0,
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Value",
      links: [{
        portIn: "Value",
        portOut: "width",
        objIn: "4eaa49a8-dc19-4daa-9712-4007c365d4c0",
        objOut: "f7acf1fa-2a5e-4eee-8349-c255a630071a"
      }]
    }, {
      name: "Variable",
      value: "width"
    }, {
      name: "Create new variable",
      value: 0
    }, {
      name: "",
      value: ["Rename"]
    }],
    portsOut: []
  }, {
    opId: "b5249226-6095-4828-8a1c-080654e192fa",
    objName: "Ops.Vars.VarSetNumber_v2",
    id: "7067ddaa-0c21-403a-9b93-893082b88281",
    uiAttribs: {
      title: "set #height",
      createdLocally: !0,
      subPatch: 0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Value",
      links: [{
        portIn: "Value",
        portOut: "height",
        objIn: "7067ddaa-0c21-403a-9b93-893082b88281",
        objOut: "f7acf1fa-2a5e-4eee-8349-c255a630071a"
      }]
    }, {
      name: "Variable",
      value: "height"
    }, {
      name: "Create new variable",
      value: 0
    }, {
      name: "",
      value: ["Rename"]
    }],
    portsOut: []
  }, {
    opId: "421f5b52-c0fa-47c4-8b7a-012b9e1c864a",
    objName: "Ops.Vars.VarGetNumber_v2",
    id: "086a1b81-801f-42c3-88ad-e73d621d5360",
    uiAttribs: {
      title: "#width",
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      createdLocally: !0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Variable",
      value: "width"
    }],
    portsOut: [{
      name: "Value",
      value: 633
    }]
  }, {
    opId: "421f5b52-c0fa-47c4-8b7a-012b9e1c864a",
    objName: "Ops.Vars.VarGetNumber_v2",
    id: "1467c882-28eb-4227-8f61-8f4c83908f7b",
    uiAttribs: {
      title: "#height",
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      createdLocally: !0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Variable",
      value: "height"
    }],
    portsOut: [{
      name: "Value"
    }]
  }, {
    opId: "a4ffe852-d200-4b96-9347-68feb01122ca",
    objName: "Ops.Math.Subtract",
    id: "0ec1644f-6694-4846-9a86-30e38710e992",
    uiAttribs: {
      createdLocally: !0,
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "number1",
      value: 1
    }, {
      name: "number2",
      value: 38.84
    }],
    portsOut: [{
      name: "result",
      value: -37.84
    }]
  }, {
    opId: "2390f6b3-2122-412e-8c8d-5c2f574e8bd1",
    objName: "Ops.Gl.Meshes.TextMesh_v2",
    id: "5c1f4cc5-699f-4e25-9c39-c1b7cf037ce6",
    uiAttribs: {
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Render",
      links: [{
        portIn: "Render",
        portOut: "trigger",
        objIn: "5c1f4cc5-699f-4e25-9c39-c1b7cf037ce6",
        objOut: "e36fcf8b-42b2-40ec-8ac9-6a6d32145500"
      }]
    }, {
      name: "Text",
      value: "SHOP"
    }, {
      name: "Scale",
      value: 35
    }, {
      name: "Font",
      value: "Proxima Nova Regular"
    }, {
      name: "align index",
      value: 1
    }, {
      name: "align",
      value: "center"
    }, {
      name: "vertical align index",
      value: 1
    }, {
      name: "vertical align",
      value: "Middle"
    }, {
      name: "Line Height",
      value: 1
    }, {
      name: "Letter Spacing",
      value: 0
    }, {
      name: "filter index",
      value: 2
    }, {
      name: "filter",
      value: "mipmap"
    }, {
      name: "Anisotropic index",
      value: 0
    }, {
      name: "Anisotropic",
      value: 0
    }, {
      name: "Texture Color",
      value: 0
    }, {
      name: "Texture Mask",
      value: 0
    }, {
      name: "r",
      value: .4823529411764706
    }, {
      name: "g",
      value: .47843137254901963
    }, {
      name: "b",
      value: .7215686274509804
    }, {
      name: "a",
      value: 1
    }],
    portsOut: [{
      name: "Next"
    }, {
      name: "texture"
    }, {
      name: "Total Lines",
      value: 1
    }, {
      name: "Width",
      value: 33.125
    }, {
      name: "Font Available",
      value: !0
    }]
  }, {
    opId: "a669d4f7-1e35-463c-bf8b-08c9f1b68e04",
    objName: "Ops.Html.HyperLink_v2",
    id: "e9bfff42-9c88-4c48-87a0-83225bfd15d6",
    uiAttribs: {
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Open",
      links: [{
        portIn: "Open",
        portOut: "Left Click",
        objIn: "e9bfff42-9c88-4c48-87a0-83225bfd15d6",
        objOut: "1e2355a8-9a2e-4389-b6af-be4beb66d505"
      }]
    }, {
      name: "URL",
      value: "https://protestars.github.io/Protestars/shop.html"
    }, {
      name: "Target Name",
      value: "_self"
    }, {
      name: "Specs",
      value: ""
    }],
    portsOut: []
  }, {
    opId: "75cadc63-62bb-4ddd-b519-aa99568a1e6b",
    objName: "Ops.Gl.Matrix.ScreenCoordinates",
    id: "aee38075-9ca6-42cc-97d9-303ef530b43a",
    uiAttribs: {
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Execute",
      links: [{
        portIn: "Execute",
        portOut: "Next",
        objIn: "aee38075-9ca6-42cc-97d9-303ef530b43a",
        objOut: "5c1f4cc5-699f-4e25-9c39-c1b7cf037ce6"
      }]
    }],
    portsOut: [{
      name: "Trigger",
      value: 0
    }, {
      name: "X",
      value: 116.00000166893005
    }, {
      name: "Y",
      value: 478.73001086711884
    }, {
      name: "Visible",
      value: !0
    }]
  }, {
    opId: "650baeb1-db2d-4781-9af6-ab4e9d4277be",
    objName: "Ops.Gl.Matrix.Transform",
    id: "e36fcf8b-42b2-40ec-8ac9-6a6d32145500",
    uiAttribs: {
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "Trigger out",
        objIn: "e36fcf8b-42b2-40ec-8ac9-6a6d32145500",
        objOut: "1e2355a8-9a2e-4389-b6af-be4beb66d505"
      }]
    }, {
      name: "posX",
      value: 0
    }, {
      name: "posY",
      value: -17
    }, {
      name: "posZ",
      value: 0
    }, {
      name: "scale",
      value: 1
    }, {
      name: "rotX",
      value: 0
    }, {
      name: "rotY",
      value: 0
    }, {
      name: "rotZ",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "949d6daf-d677-4ed6-a921-51a5732b64ac",
    objName: "Ops.Gl.PixelProjection",
    id: "2160f141-7f9f-4fc4-bae3-1cd928ccb1bf",
    uiAttribs: {
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "then",
        objIn: "2160f141-7f9f-4fc4-bae3-1cd928ccb1bf",
        objOut: "797dd7f1-415e-49ea-b5c5-580b9e4a8343"
      }]
    }, {
      name: "use viewport size",
      value: !0
    }, {
      name: "Width",
      value: 500
    }, {
      name: "Height",
      value: 500
    }, {
      name: "frustum near",
      value: -500
    }, {
      name: "frustum far",
      value: 500
    }, {
      name: "Flip X",
      value: !1
    }, {
      name: "Flip Y",
      value: !1
    }, {
      name: "Zero Y",
      value: !1
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "650baeb1-db2d-4781-9af6-ab4e9d4277be",
    objName: "Ops.Gl.Matrix.Transform",
    id: "145b6ae4-ad33-405c-a169-cbdc7f0d3f4c",
    uiAttribs: {
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "145b6ae4-ad33-405c-a169-cbdc7f0d3f4c",
        objOut: "2160f141-7f9f-4fc4-bae3-1cd928ccb1bf"
      }]
    }, {
      name: "posX",
      value: 116
    }, {
      name: "posY",
      links: [{
        portIn: "posY",
        portOut: "result",
        objIn: "145b6ae4-ad33-405c-a169-cbdc7f0d3f4c",
        objOut: "e67c1263-fbcb-4259-ac23-f231dbc86e22"
      }]
    }, {
      name: "posZ",
      value: 0
    }, {
      name: "scale",
      value: .7
    }, {
      name: "rotX",
      value: 0
    }, {
      name: "rotY",
      value: 0
    }, {
      name: "rotZ",
      value: 0
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    opId: "334728ca-60a2-4a42-a059-d9b5f3fe4d32",
    objName: "Ops.Gl.InteractiveRectangle_v2",
    id: "1e2355a8-9a2e-4389-b6af-be4beb66d505",
    uiAttribs: {
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Trigger in",
      links: [{
        portIn: "Trigger in",
        portOut: "trigger",
        objIn: "1e2355a8-9a2e-4389-b6af-be4beb66d505",
        objOut: "145b6ae4-ad33-405c-a169-cbdc7f0d3f4c"
      }]
    }, {
      name: "Width",
      value: 85.15
    }, {
      name: "Height",
      value: 30
    }, {
      name: "ID",
      value: ""
    }, {
      name: "Class",
      value: ""
    }, {
      name: "Pivot x index",
      value: 0
    }, {
      name: "Pivot x",
      value: "center"
    }, {
      name: "Pivot y index",
      value: 0
    }, {
      name: "Pivot y",
      value: "center"
    }, {
      name: "Axis index",
      value: 0
    }, {
      name: "Axis",
      value: "xy"
    }, {
      name: "Is Interactive",
      value: !0
    }, {
      name: "Render Rectangle",
      value: !1
    }, {
      name: "Show Boundings",
      value: !1
    }, {
      name: "Cursor index",
      value: 2
    }, {
      name: "Cursor",
      value: "pointer"
    }, {
      name: "Render",
      value: !0
    }],
    portsOut: [{
      name: "Trigger out"
    }, {
      name: "geometry"
    }, {
      name: "Pointer Hover",
      value: !1
    }, {
      name: "Pointer Down",
      value: !1
    }, {
      name: "Pointer X",
      value: .4697592211064472
    }, {
      name: "Pointer Y",
      value: .3333337023142634
    }, {
      name: "Top",
      value: 11.869985908269882
    }, {
      name: "Left",
      value: 86.19750308990479
    }, {
      name: "Right",
      value: 145.8025065511465
    }, {
      name: "Bottom",
      value: 32.86999753117561
    }, {
      name: "Left Click"
    }, {
      name: "Dom Element"
    }]
  }, {
    opId: "93492eeb-bf35-4a62-98f7-d85b0b79bfe5",
    objName: "Ops.Ui.Comment_v2",
    id: "b28dab44-0536-43bf-b932-941beaf439ac",
    uiAttribs: {
      comment_title: "Mobile",
      comment_text: "",
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      createdLocally: !0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "title",
      value: "Mobile"
    }, {
      name: "text",
      value: ""
    }],
    portsOut: []
  }, {
    opId: "a4ffe852-d200-4b96-9347-68feb01122ca",
    objName: "Ops.Math.Subtract",
    id: "e67c1263-fbcb-4259-ac23-f231dbc86e22",
    uiAttribs: {
      createdLocally: !0,
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "number1",
      links: [{
        portIn: "number1",
        portOut: "Value",
        objIn: "e67c1263-fbcb-4259-ac23-f231dbc86e22",
        objOut: "626c13e6-3d18-476f-acf2-4b11af377101"
      }]
    }, {
      name: "number2",
      value: 22.37
    }],
    portsOut: [{
      name: "result"
    }]
  }, {
    opId: "421f5b52-c0fa-47c4-8b7a-012b9e1c864a",
    objName: "Ops.Vars.VarGetNumber_v2",
    id: "0318f143-abb5-4fd6-a855-f23dc8cf8501",
    uiAttribs: {
      title: "#width",
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      createdLocally: !0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Variable",
      value: "width"
    }],
    portsOut: [{
      name: "Value"
    }]
  }, {
    opId: "421f5b52-c0fa-47c4-8b7a-012b9e1c864a",
    objName: "Ops.Vars.VarGetNumber_v2",
    id: "626c13e6-3d18-476f-acf2-4b11af377101",
    uiAttribs: {
      title: "#height",
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      createdLocally: !0,
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "Variable",
      value: "height"
    }],
    portsOut: [{
      name: "Value"
    }]
  }, {
    opId: "a4ffe852-d200-4b96-9347-68feb01122ca",
    objName: "Ops.Math.Subtract",
    id: "58f5db48-699d-4f36-87a9-a65e888855c8",
    uiAttribs: {
      createdLocally: !0,
      subPatch: "1ea5b205-b671-4251-b46f-63f2978d3a14",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "number1",
      links: [{
        portIn: "number1",
        portOut: "Value",
        objIn: "58f5db48-699d-4f36-87a9-a65e888855c8",
        objOut: "0318f143-abb5-4fd6-a855-f23dc8cf8501"
      }]
    }, {
      name: "number2",
      value: 38.84
    }],
    portsOut: [{
      name: "result",
      value: 594.16
    }]
  }, {
    opId: "a4ffe852-d200-4b96-9347-68feb01122ca",
    objName: "Ops.Math.Subtract",
    id: "37b5f6cb-1318-4f96-b4d1-1cf89825ef34",
    uiAttribs: {
      createdLocally: !0,
      subPatch: "c1285eb7-5b48-4b34-b0fe-298cbfd77a72",
      selected: !1,
      notWorkingMsg: null
    },
    portsIn: [{
      name: "number1",
      links: [{
        portIn: "number1",
        portOut: "in4 MainLoop height",
        objIn: "37b5f6cb-1318-4f96-b4d1-1cf89825ef34",
        objOut: "f871adcd-2cc2-4d74-8fa4-308c633b80ee"
      }]
    }, {
      name: "number2",
      value: 35.02
    }],
    portsOut: [{
      name: "result"
    }]
  }],
  users: [],
  userOps: [],
  tags: [],
  _id: "5fe1806dbe1b431d65d22840",
  name: "Protestars_2",
  userId: "5fc904e2c7a6b0498cb09a5f",
  created: "2020-12-22T05:13:17.161Z",
  cloneOf: "5fdb4bc97949dc1492c5a2ed",
  updated: "2021-01-27T16:07:59.831Z",
  log: [{
    _id: "5fe1806dbe1b431d65d22842",
    key: "collabsatcreate",
    text: "initial list of collaborators:"
  }],
  __v: 155,
  shortId: "EQqT8q",
  buildInfo: {
    core: {
      timestamp: 1610523835610,
      created: "2021-01-13T07:43:55.610Z",
      git: {
        branch: "master",
        commit: "23ff8761980d7d0ffbe66da8c6253e457a032a73",
        date: null
      }
    },
    ui: {
      timestamp: 1610553660883,
      created: "2021-01-13T16:01:00.883Z",
      git: {
        branch: "master",
        commit: "e55e23da99f900d1265b521915aca98ab2f2c3eb",
        date: "2021-01-13T15:58:36.000Z"
      }
    },
    host: "cables.gl",
    api: {
      timestamp: 1610523892604,
      created: "2021-01-13T07:44:52.604Z",
      git: {
        branch: "master",
        commit: "22108ec65a5e5a6155480e8881487305763feb18",
        date: null
      }
    }
  },
  opsHash: "af3651e1a66ff18997390f120906d5407448591b",
  ui: {
    viewBox: {
      x: -2700.5583606780274,
      y: -64.68358034390894,
      w: 2678.240740740741,
      h: 2297.2241452251837
    },
    timeLineLength: 20,
    bookmarks: [],
    subPatchViewBoxes: [{
      x: -640.953677906103,
      y: -1151.5319256315574,
      w: 2597.1338091563794,
      h: 2227.6557906159596
    }],
    renderer: {
      w: 633,
      h: 356,
      s: 1
    }
  },
  updatedByUser: "GruppoTre",
  views: 9,
  cachedNumComments: 0,
  cachedNumFavs: 0,
  statsAdmin: {
    filenameScreenshots: ["_screenshots/screenshot.png", "_screenshots/screenshot.webp", "_screenshots/screenshot_1608614163951.png", "_screenshots/screenshot_1608614311353.png", "_screenshots/screenshot_1608614431627.png", "_screenshots/screenshot_1608614522169.png", "_screenshots/screenshot_1608615876105.png", "_screenshots/screenshot_1609255166389.png", "_screenshots/screenshot_1609255485267.png", "_screenshots/screenshot_1609256719751.png", "_screenshots/screenshot_1609258661532.png", "_screenshots/screenshot_1609266051152.png", "_screenshots/screenshot_1609282750219.png", "_screenshots/screenshot_1609321940683.png", "_screenshots/screenshot_1609340046498.png", "_screenshots/screenshot_1609340057896.png", "_screenshots/screenshot_1609340220443.png", "_screenshots/screenshot_1609340363886.png", "_screenshots/screenshot_1609341237425.png", "_screenshots/screenshot_1609360213440.png", "_screenshots/screenshot_1609410435436.png", "_screenshots/screenshot_1609415759207.png", "_screenshots/screenshot_1609415781130.png", "_screenshots/screenshot_1609587851759.png", "_screenshots/screenshot_1609587916938.png", "_screenshots/screenshot_1609587928998.png", "_screenshots/screenshot_1609587940590.png", "_screenshots/screenshot_1609608817013.png", "_screenshots/screenshot_1609608858667.png", "_screenshots/screenshot_1609608862700.png", "_screenshots/screenshot_1609621882668.png", "_screenshots/screenshot_1609625923799.png", "_screenshots/screenshot_1609629340308.png", "_screenshots/screenshot_1609629447859.png", "_screenshots/screenshot_1609629701397.png", "_screenshots/screenshot_1609629910330.png", "_screenshots/screenshot_1609629985360.png", "_screenshots/screenshot_1609630447114.png", "_screenshots/screenshot_1609967792887.png", "_screenshots/screenshot_1610014844983.png", "_screenshots/screenshot_1610014888827.png", "_screenshots/screenshot_1610014909266.png", "_screenshots/screenshot_1610014934284.png", "_screenshots/screenshot_1610014939607.png", "_screenshots/screenshot_1610015091366.png", "_screenshots/screenshot_1610203981988.png", "_screenshots/screenshot_1610204141071.png", "_screenshots/screenshot_1610204207445.png", "_screenshots/screenshot_1610204214908.png", "_screenshots/screenshot_1610213939911.png", "_screenshots/screenshot_1610214698720.png", "_screenshots/screenshot_1610242887665.png", "_screenshots/screenshot_1610243022359.png", "_screenshots/screenshot_1610243024126.png", "_screenshots/screenshot_1610243099043.png", "_screenshots/screenshot_1610320017329.png", "_screenshots/screenshot_1610320308115.png", "_screenshots/screenshot_1610320759502.png", "_screenshots/screenshot_1610321539002.png", "_screenshots/screenshot_1610321564025.png", "_screenshots/screenshot_1610321907521.png", "_screenshots/screenshot_1610322015746.png", "_screenshots/screenshot_1610322065515.png", "_screenshots/screenshot_1610322130632.png", "_screenshots/screenshot_1610322146631.png", "_screenshots/screenshot_1610322166646.png", "_screenshots/screenshot_1610444693361.png", "_screenshots/screenshot_1610450003408.png", "_screenshots/screenshot_1610450844930.png", "_screenshots/screenshot_1610451165716.png", "_screenshots/screenshot_1610458160838.png", "_screenshots/screenshot_1610459579980.png", "_screenshots/screenshot_1610459810585.png", "_screenshots/screenshot_1610460426820.png", "_screenshots/screenshot_1610460476242.png", "_screenshots/screenshot_1610460819971.png", "_screenshots/screenshot_1610466804515.png", "_screenshots/screenshot_1610531388472.png", "_screenshots/screenshot_1610641905122.png", "_screenshots/screenshot_1610643143667.png", "_screenshots/screenshot_1610643281598.png", "_screenshots/screenshot_1610643342110.png", "_screenshots/screenshot_1610643365993.png", "_screenshots/screenshot_1610644717303.png", "_screenshots/screenshot_1610644725637.png", "_screenshots/screenshot_1610644756670.png", "_screenshots/screenshot_1610656916171.png", "_screenshots/screenshot_1610657037836.png", "_screenshots/screenshot_1610657103387.png", "_screenshots/screenshot_1610657124463.png", "_screenshots/screenshot_1610657173862.png", "_screenshots/screenshot_1610658351413.png", "_screenshots/screenshot_1610658369956.png", "_screenshots/screenshot_1610658769477.png", "_screenshots/screenshot_1610658941151.png", "_screenshots/screenshot_1610704172049.png", "_screenshots/screenshot_1610704324783.png", "_screenshots/screenshot_1610704788137.png", "_screenshots/screenshot_1610709059104.png", "_screenshots/screenshot_1610720678890.png", "_screenshots/screenshot_1610751551192.png", "_screenshots/screenshot_1610890470429.png", "_screenshots/screenshot_1610890808780.png", "_screenshots/screenshot_1610891854812.png", "_screenshots/screenshot_1610893021883.png", "_screenshots/screenshot_1610897909568.png", "_screenshots/screenshot_1610897923379.png", "_screenshots/screenshot_1610898260648.png", "_screenshots/screenshot_1610899077544.png", "_screenshots/screenshot_1610899138864.png", "_screenshots/screenshot_1610899441562.png", "_screenshots/screenshot_1610900515336.png", "_screenshots/screenshot_1610900867381.png", "_screenshots/screenshot_1610900880520.png", "_screenshots/screenshot_1610900909516.png", "_screenshots/screenshot_1610903127502.png", "_screenshots/screenshot_1610903218597.png", "_screenshots/screenshot_1610903422315.png", "_screenshots/screenshot_1610904046664.png", "_screenshots/screenshot_1610905974643.png", "_screenshots/screenshot_1610906005007.png", "_screenshots/screenshot_1610979487203.png", "_screenshots/screenshot_1610979609435.png", "_screenshots/screenshot_1610980570346.png", "_screenshots/screenshot_1610980629918.png", "_screenshots/screenshot_1610980825212.png", "_screenshots/screenshot_1610980830271.png", "_screenshots/screenshot_1610980907973.png", "_screenshots/screenshot_1610980987511.png", "_screenshots/screenshot_1610981092587.png", "_screenshots/screenshot_1610982492078.png", "_screenshots/screenshot_1610982538793.png", "_screenshots/screenshot_1610982654913.png", "_screenshots/screenshot_1610982957084.png", "_screenshots/screenshot_1610983356884.png", "_screenshots/screenshot_1610983381561.png", "_screenshots/screenshot_1610983443865.png", "_screenshots/screenshot_1610984614148.png", "_screenshots/screenshot_1610984674137.png", "_screenshots/screenshot_1610984691113.png", "_screenshots/screenshot_1610988215680.png", "_screenshots/screenshot_1610988261946.png", "_screenshots/screenshot_1610988272357.png", "_screenshots/screenshot_1611009987264.png", "_screenshots/screenshot_1611010020240.png", "_screenshots/screenshot_1611355839587.png", "_screenshots/screenshot_1611715125959.png", "_screenshots/screenshot_1611715140970.png", "_screenshots/screenshot_1611715285976.png", "_screenshots/screenshot_1611715688246.png", "_screenshots/screenshot_1611760648685.png", "_screenshots/screenshot_1611761408466.png", "_screenshots/screenshot_1611761415024.png", "_screenshots/screenshot_1611761453523.png"],
    filenameExports: ["_exports/cables_Protestars_21.zip", "_exports/cables_Protestars_210.zip", "_exports/cables_Protestars_211.zip", "_exports/cables_Protestars_212.zip", "_exports/cables_Protestars_213.zip", "_exports/cables_Protestars_214.zip", "_exports/cables_Protestars_215.zip", "_exports/cables_Protestars_216.zip", "_exports/cables_Protestars_217.zip", "_exports/cables_Protestars_218.zip", "_exports/cables_Protestars_219.zip", "_exports/cables_Protestars_22.zip", "_exports/cables_Protestars_220.zip", "_exports/cables_Protestars_221.zip", "_exports/cables_Protestars_222.zip", "_exports/cables_Protestars_223.zip", "_exports/cables_Protestars_224.zip", "_exports/cables_Protestars_225.zip", "_exports/cables_Protestars_226.zip", "_exports/cables_Protestars_227.zip", "_exports/cables_Protestars_228.zip", "_exports/cables_Protestars_229.zip", "_exports/cables_Protestars_23.zip", "_exports/cables_Protestars_230.zip", "_exports/cables_Protestars_231.zip", "_exports/cables_Protestars_232.zip", "_exports/cables_Protestars_233.zip", "_exports/cables_Protestars_234.zip", "_exports/cables_Protestars_235.zip", "_exports/cables_Protestars_236.zip", "_exports/cables_Protestars_24.zip", "_exports/cables_Protestars_25.zip", "_exports/cables_Protestars_26.zip", "_exports/cables_Protestars_27.zip", "_exports/cables_Protestars_28.zip", "_exports/cables_Protestars_29.zip"],
    filenameAssets: ["Icona-piattaforma.png", "Logo.png", "Logo_mobile.png", "ProximaNova-Regular.otf", "protestars1.jpg", "protestars10.jpg", "protestars11.jpg", "protestars12.jpg", "protestars13.jpg", "protestars14.jpg", "protestars15.jpg", "protestars2.jpg", "protestars3.jpg", "protestars4.jpg", "protestars5.jpg", "protestars6.jpg", "protestars7.jpg", "protestars8.jpg", "protestars9.jpg"],
    hasOldScreenshots: !1,
    hasOldExports: !1,
    sizeScreenshots: 30024.3037109375,
    sizeExports: 183814.509765625,
    sizeAssets: 43466.5732421875
  },
  cachedUsername: "GruppoTre",
  exports: 37
}, CABLES.exportedPatch || (CABLES.exportedPatch = CABLES.exportedPatches.EQqT8q);
var CABLES = CABLES || {};
CABLES.OPS = CABLES.OPS || {};
var Ops = Ops || {};
Ops.Gl = Ops.Gl || {}, Ops.Ui = Ops.Ui || {}, Ops.Anim = Ops.Anim || {}, Ops.Html = Ops.Html || {}, Ops.Json = Ops.Json || {}, Ops.Math = Ops.Math || {}, Ops.Vars = Ops.Vars || {}, Ops.Array = Ops.Array || {}, Ops.Patch = Ops.Patch || {}, Ops.Value = Ops.Value || {}, Ops.String = Ops.String || {}, Ops.Boolean = Ops.Boolean || {}, Ops.Devices = Ops.Devices || {}, Ops.Trigger = Ops.Trigger || {}, Ops.Website = Ops.Website || {}, Ops.Gl.Matrix = Ops.Gl.Matrix || {}, Ops.Gl.Meshes = Ops.Gl.Meshes || {}, Ops.Gl.Shader = Ops.Gl.Shader || {}, Ops.Devices.Mouse = Ops.Devices.Mouse || {}, Ops.Gl.Shader.PickingMaterial = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.patch.cgl,
      a = e.inTrigger("render"),
      n = e.outTrigger("trigger"),
      o = e.addOutPort(new CABLES.Port(e, "is picked", CABLES.OP_PORT_TYPE_VALUE)),
      r = e.outTrigger("On Picked"),
      s = e.addInPort(new CABLES.Port(e, "billboard", CABLES.OP_PORT_TYPE_VALUE, {
        display: "bool"
      }));
    s.set(!1), s.onChange = function() {
      s.get() ? b.define("BILLBOARD") : b.removeDefine("BILLBOARD")
    };
    const i = e.addInPort(new CABLES.Port(e, "cursor", CABLES.OP_PORT_TYPE_VALUE, {
      display: "dropdown",
      values: ["", "pointer", "auto", "default", "crosshair", "move", "n-resize", "ne-resize", "e-resize", "se-resize", "s-resize", "sw-resize", "w-resize", "nw-resize", "text", "wait", "help"]
    }));

    function l() {
      t.frameStore.pickingpassNum += 2;
      const e = t.frameStore.pickingpassNum;
      t.frameStore.pickingpass ? (d.setValue(e / 255), t.pushShader(b), n.trigger(), t.popShader()) : (o.set(t.frameStore.pickedColor == e), t.frameStore.pickedColor == e && (i.get().length > 0 && t.canvas.style.cursor != i.get() && (t.canvas.style.cursor = i.get()), r.trigger()), n.trigger())
    }
    i.set("pointer");
    const u = "".endl() + "IN vec3 vPosition;".endl() + "UNI mat4 projMatrix;".endl() + "UNI mat4 mvMatrix;".endl() + "void main()".endl() + "{".endl() + "   #ifdef BILLBOARD".endl() + "       vec3 position=vPosition;".endl() + "       gl_Position = projMatrix * mvMatrix * vec4(( ".endl() + "           position.x * vec3(".endl() + "               mvMatrix[0][0],".endl() + "               mvMatrix[1][0], ".endl() + "               mvMatrix[2][0] ) +".endl() + "           position.y * vec3(".endl() + "               mvMatrix[0][1],".endl() + "               mvMatrix[1][1], ".endl() + "               mvMatrix[2][1]) ), 1.0);".endl() + "   #endif ".endl() + "   #ifndef BILLBOARD".endl() + "       gl_Position = projMatrix * mvMatrix * vec4(vPosition,  1.0);".endl() + "   #endif".endl() + "}",
      c = "".endl() + "UNI float r;".endl() + "".endl() + "void main()".endl() + "{".endl() + "   outColor= vec4(r,1.0,0.0,1.0);".endl() + "}";
    var b = new CGL.Shader(t, "PickingMaterial");
    b.offScreenPass = !0, b.setSource(u, c);
    var d = new CGL.Uniform(b, "f", "r", 0);
    a.onTriggered = l, l()
  }, Ops.Gl.Shader.PickingMaterial.prototype = new CABLES.Op, CABLES.OPS["2b58daad-4dde-4edb-af22-03ac55ab06ab"] = {
    f: Ops.Gl.Shader.PickingMaterial,
    objName: "Ops.Gl.Shader.PickingMaterial"
  }, Ops.Trigger.Sequence = function() {
    CABLES.Op.apply(this, arguments);
    const e = this;
    var t = [],
      a = [],
      n = function() {
        for (var e = 0; e < a.length; e++) a[e].trigger()
      };
    e.inTrigger("exe").onTriggered = n;
    for (var o = 0; o < 16; o++)
      if (a.push(e.addOutPort(new CABLES.Port(e, "trigger " + o, CABLES.OP_PORT_TYPE_FUNCTION))), o < 15) {
        var r = e.addInPort(new CABLES.Port(e, "exe " + o, CABLES.OP_PORT_TYPE_FUNCTION));
        r.onTriggered = n, t.push(r)
      }
  }, Ops.Trigger.Sequence.prototype = new CABLES.Op, CABLES.OPS["641934f6-5143-4a6b-b592-08ab26e2cab0"] = {
    f: Ops.Trigger.Sequence,
    objName: "Ops.Trigger.Sequence"
  }, Ops.Devices.TouchScreen = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inValueBool("Disable Scaling", !0),
      a = e.inValueBool("Disable Scroll", !0),
      n = e.inValueBool("HDPI Coordinates", !1),
      o = e.inValueBool("Active", !0),
      r = e.outValue("Touched", !1),
      s = e.outValue("Fingers", 0),
      i = e.outValue("Finger 1 X", 0),
      l = e.outValue("Finger 1 Y", 0),
      u = e.outValue("Finger 1 Force", 0),
      c = e.outValue("Finger 2 X", 0),
      b = e.outValue("Finger 2 Y", 0),
      d = e.inSwitch("Area", ["Canvas", "Document"], "Canvas"),
      p = e.outArray("Events"),
      f = e.inValueBool("Normalize Coordinates"),
      m = e.inValueBool("Flip Y"),
      g = e.outTrigger("Touch Start"),
      v = e.outTrigger("Touch End");

    function h(t) {
      if (t.touches && t.touches.length > 0) {
        var a = t.target.getBoundingClientRect(),
          o = t.touches[0].clientX - t.touches[0].target.offsetLeft,
          r = t.touches[0].clientY - t.touches[0].target.offsetTop;
        m.get() && (r = a.height - r), n.get() && (o *= e.patch.cgl.pixelDensity || 1, r *= e.patch.cgl.pixelDensity || 1), f.get() && (o = o / a.width * 2 - 1, r = r / a.height * 2 - 1), i.set(o), l.set(r), t.touches[0].force && u.set(t.touches[0].force)
      }
      if (t.touches && t.touches.length > 1) {
        a = t.target.getBoundingClientRect(), o = t.touches[1].clientX - t.touches[1].target.offsetLeft, r = t.touches[1].clientY - t.touches[1].target.offsetTop;
        n.get() && (o *= e.patch.cgl.pixelDensity || 1, r *= e.patch.cgl.pixelDensity || 1), c.set(o), b.set(r)
      }
      p.set(t.touches)
    }
    d.onChange = j;
    const O = function(e) {
        r.set(!0), h(e), s.set(e.touches.length), g.trigger()
      },
      I = function(e) {
        r.set(!1), u.set(0), h(e), s.set(e.touches.length), v.trigger()
      },
      x = function(e) {
        h(e), s.set(e.touches.length), a.get() || t.get() && 1 !== e.scale ? (e.preventDefault(), document.body.style["touch-action"] = "none") : document.body.style["touch-action"] = "initial"
      },
      A = e.patch.cgl;
    let S = null;

    function j() {
      ! function() {
        S && (S.removeEventListener("touchmove", x), S.removeEventListener("touchstart", O), S.removeEventListener("touchend", I));
        S = null
      }(), S = "Document" == d.get() ? document : A.canvas, o.get() && (S.addEventListener("touchmove", x, {
        passive: !0
      }), S.addEventListener("touchstart", O, {
        passive: !0
      }), S.addEventListener("touchend", I, {
        passive: !0
      }))
    }
    o.onChange = function() {
      j()
    }, j()
  }, Ops.Devices.TouchScreen.prototype = new CABLES.Op, CABLES.OPS["cedffacf-0f09-4342-bd21-540bd9c8037d"] = {
    f: Ops.Devices.TouchScreen,
    objName: "Ops.Devices.TouchScreen"
  }, Ops.Gl.Shader.Picker = function() {
    CABLES.Op.apply(this, arguments);
    const e = this;
    e.render = e.inTrigger("render");
    const t = e.inValueBool("Use Mouse Coordinates", !0);
    e.x = e.inValueFloat("x"), e.y = e.inValueFloat("y"), e.enabled = e.inValueBool("enabled"), e.enabled.set(!0), e.trigger = e.outTrigger("trigger");
    const a = e.outValue("Something Picked"),
      n = this.inValueSelect("cursor", ["", "pointer", "auto", "default", "crosshair", "move", "n-resize", "ne-resize", "e-resize", "se-resize", "s-resize", "sw-resize", "w-resize", "nw-resize", "text", "wait", "help"]);
    n.set("default");
    const o = new Uint8Array(4);
    let r = null;
    const s = e.patch.cgl;
    let i = 0,
      l = !1;
    r = 1 == s.glVersion ? new CGL.Framebuffer(s, 4, 4) : new CGL.Framebuffer2(s, 4, 4, {
      multisampling: !1
    });
    const u = e.outTexture("pick texture");

    function c(t) {
      t && t.hasOwnProperty("offsetX") >= 0 && (e.x.set(t.offsetX * (window.devicePixelRatio || 1)), e.y.set(t.offsetY * (window.devicePixelRatio || 1)))
    }

    function b() {
      s.canvas.removeEventListener("mouseleave", p), s.canvas.removeEventListener("mousemove", c), s.canvas.removeEventListener("touchmove", m), s.canvas.removeEventListener("touchstart", d), s.canvas.removeEventListener("touchend", f), s.canvas.removeEventListener("touchcancel", f), t.get() && (s.canvas.addEventListener("mouseleave", p), s.canvas.addEventListener("mousemove", c), s.canvas.addEventListener("touchmove", m), s.canvas.addEventListener("touchstart", d), s.canvas.addEventListener("touchend", f), s.canvas.addEventListener("touchcancel", f))
    }

    function d(e) {
      l = !1, e.touches && e.touches.length > 0 && m(e)
    }

    function p(t) {
      e.x.set(-1e3), e.y.set(-1e3)
    }

    function f(t) {
      l = !0, e.x.set(-1e3), e.y.set(-1e3)
    }

    function m(e) {
      e.touches && e.touches.length > 0 && c(function(e) {
        if (e) return e.offsetX = e.pageX - e.target.offsetLeft, e.offsetY = e.pageY - e.target.offsetTop, /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (e.offsetX *= window.devicePixelRatio || 1, e.offsetY *= window.devicePixelRatio || 1), e
      }(e.touches[0]))
    }
    u.set(r.getTextureColor()), t.onChange = b, b();
    const g = function() {
      if (n.get() != s.canvas.style.cursor && (s.canvas.style.cursor = n.get()), e.enabled.get() && e.x.get() >= 0 && !l) {
        if (CABLES.now() - i >= 50) {
          const t = 2;
          s.resetViewPort();
          const a = Math.floor(s.canvasWidth / t),
            n = Math.floor(s.canvasHeight / t);
          a == r.getWidth() && n == r.getHeight() || (u.set(null), r.setSize(a, n), u.set(r.getTextureColor())), s.pushModelMatrix(), r.renderStart(), s.frameStore.renderOffscreen = !0, s.frameStore.pickingpass = !0, s.frameStore.pickingpassNum = 0, e.trigger.trigger(), s.frameStore.pickingpass = !1, s.frameStore.renderOffscreen = !1;
          let l = Math.floor(e.x.get() / t / window.devicePixelRatio),
            c = Math.floor(n - e.y.get() / t / window.devicePixelRatio);
          l < 0 && (l = 0), c < 0 && (c = 0), s.gl.readPixels(l, c, 1, 1, s.gl.RGBA, s.gl.UNSIGNED_BYTE, o), i = CABLES.now(), r.renderEnd(), s.popModelMatrix()
        }
        s.frameStore.pickedColor = o[0], s.frameStore.pickedColor ? a.set(!0) : a.set(!1), s.frameStore.pickingpassNum = 0, e.trigger.trigger()
      } else s.frameStore.pickedColor = -1e3, e.trigger.trigger(), a.set(!1)
    };
    u.onPreviewChanged = function() {
      u.showPreview, e.render.onTriggered = g
    }, e.render.onTriggered = g
  }, Ops.Gl.Shader.Picker.prototype = new CABLES.Op, CABLES.OPS["09122fbf-3b6b-4a05-ac76-fca031b505b9"] = {
    f: Ops.Gl.Shader.Picker,
    objName: "Ops.Gl.Shader.Picker"
  }, Ops.Gl.RandomCluster = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inTrigger("exe"),
      a = e.inValueInt("num"),
      n = e.inValueFloat("random seed", 1),
      o = e.inValueBool("round", !1),
      r = e.inValueFloat("size", 10),
      s = e.inValueFloat("scaleX", 1),
      i = e.inValueFloat("scaleY", 1),
      l = e.inValueFloat("scaleZ", 1),
      u = e.outTrigger("trigger"),
      c = e.outValue("index"),
      b = e.outValue("rnd"),
      d = e.inValueSlider("Rotate X", 1),
      p = e.inValueSlider("Rotate Y", 1),
      f = e.inValueSlider("Rotate Z", 1),
      m = e.inValue("Scroll X", 0);
    e.setPortGroup("Area", [r, s, i, l]), e.setPortGroup("Rotation", [d, p, f]), e.setPortGroup("Parameters", [a, o, n]), e.toWorkPortsNeedToBeLinked(t, u);
    const g = e.patch.cgl,
      v = [],
      h = [],
      O = [],
      I = [];
    vec3.create(), mat4.create();

    function x() {
      return vec3.fromValues(s.get() * (Math.seededRandom() - .5) * r.get(), i.get() * (Math.seededRandom() - .5) * r.get(), l.get() * (Math.seededRandom() - .5) * r.get())
    }

    function A() {
      v.length = 0, O.length = 0, I.length = 0, h.length = 0, Math.randomSeed = n.get();
      const e = o.get();
      for (let t = 0; t < a.get(); t++) {
        I.push(Math.seededRandom());
        let t = x();
        if (e)
          for (; vec3.len(t) > r.get() / 2;) t = x();
        h.push([t[0], t[1], t[2]]), v.push(t), O.push(vec3.fromValues(360 * Math.seededRandom() * CGL.DEG2RAD * d.get(), 360 * Math.seededRandom() * CGL.DEG2RAD * p.get(), 360 * Math.seededRandom() * CGL.DEG2RAD * f.get()))
      }
    }
    t.onTriggered = function() {
      if (g.shouldDrawHelpers(e) && CABLES.GL_MARKER.drawCube(e, r.get() / 2 * s.get(), r.get() / 2 * i.get(), r.get() / 2 * l.get()), 0 != m.get())
        for (let e = 0; e < h.length; e++) v[e][0] = h[e][0] + m.get(), v[e][0] = v[e][0] % r.get() - r.get() / 2;
      for (let e = 0; e < v.length; e++) g.pushModelMatrix(), mat4.translate(g.mMatrix, g.mMatrix, v[e]), O[e][0] && mat4.rotateX(g.mMatrix, g.mMatrix, O[e][0]), O[e][1] && mat4.rotateY(g.mMatrix, g.mMatrix, O[e][1]), O[e][2] && mat4.rotateZ(g.mMatrix, g.mMatrix, O[e][2]), c.set(e), b.set(I[e]), u.trigger(), g.popModelMatrix()
    }, n.onChange = A, a.onChange = A, r.onChange = A, s.onChange = A, l.onChange = A, i.onChange = A, o.onChange = A, d.onChange = A, p.onChange = A, f.onChange = A, a.set(100)
  }, Ops.Gl.RandomCluster.prototype = new CABLES.Op, CABLES.OPS["ca3bc984-e596-48fb-b53d-502eb13979b0"] = {
    f: Ops.Gl.RandomCluster,
    objName: "Ops.Gl.RandomCluster"
  }, Ops.Gl.MainLoop = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inValue("FPS Limit", 0),
      a = e.outTrigger("trigger"),
      n = e.outValue("width"),
      o = e.outValue("height"),
      r = e.inValueBool("Reduce FPS not focussed", !0),
      s = e.inValueBool("Reduce FPS loading"),
      i = e.inValueBool("Clear", !0),
      l = e.inValueBool("ClearAlpha", !0),
      u = e.inValueBool("Fullscreen Button", !1),
      c = e.inValueBool("Active", !0),
      b = e.inValueBool("Hires Displays", !1);
    e.onAnimFrame = x, b.onChange = function() {
      b.get() ? e.patch.cgl.pixelDensity = window.devicePixelRatio : e.patch.cgl.pixelDensity = 1, e.patch.cgl.updateSize(), CABLES.UI && gui.setLayout()
    }, c.onChange = function() {
      e.patch.removeOnAnimFrame(e), c.get() ? (e.setUiAttrib({
        extendTitle: ""
      }), e.onAnimFrame = x, e.patch.addOnAnimFrame(e), e.log("adding again!")) : e.setUiAttrib({
        extendTitle: "Inactive"
      })
    };
    const d = e.patch.cgl;
    let p = 0,
      f = 0;
    e.patch.cgl || e.uiAttr({
      error: "No webgl cgl context"
    });
    const m = vec3.create();
    vec3.set(m, 0, 0, 0);
    const g = vec3.create();
    vec3.set(g, 0, 0, -2), u.onChange = I, setTimeout(I, 100);
    let v = null,
      h = !0,
      O = !0;

    function I() {
      function t() {
        v && (v.style.display = "block")
      }
      if (e.patch.cgl.canvas.addEventListener("mouseleave", function() {
          v && (v.style.display = "none")
        }), e.patch.cgl.canvas.addEventListener("mouseenter", t), u.get()) {
        if (!v) {
          v = document.createElement("div");
          const a = e.patch.cgl.canvas.parentElement;
          a && a.appendChild(v), v.addEventListener("mouseenter", t), v.addEventListener("click", function(e) {
            CABLES.UI && !e.shiftKey ? gui.cycleRendererSize() : d.fullScreen()
          })
        }
        v.style.padding = "10px", v.style.position = "absolute", v.style.right = "5px", v.style.top = "5px", v.style.width = "20px", v.style.height = "20px", v.style.cursor = "pointer", v.style["border-radius"] = "40px", v.style.background = "#444", v.style["z-index"] = "9999", v.style.display = "none", v.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 490 490" style="width:20px;height:20px;" xml:space="preserve" width="512px" height="512px"><g><path d="M173.792,301.792L21.333,454.251v-80.917c0-5.891-4.776-10.667-10.667-10.667C4.776,362.667,0,367.442,0,373.333V480     c0,5.891,4.776,10.667,10.667,10.667h106.667c5.891,0,10.667-4.776,10.667-10.667s-4.776-10.667-10.667-10.667H36.416     l152.459-152.459c4.093-4.237,3.975-10.99-0.262-15.083C184.479,297.799,177.926,297.799,173.792,301.792z" fill="#FFFFFF"/><path d="M480,0H373.333c-5.891,0-10.667,4.776-10.667,10.667c0,5.891,4.776,10.667,10.667,10.667h80.917L301.792,173.792     c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262     L469.333,36.416v80.917c0,5.891,4.776,10.667,10.667,10.667s10.667-4.776,10.667-10.667V10.667C490.667,4.776,485.891,0,480,0z" fill="#FFFFFF"/><path d="M36.416,21.333h80.917c5.891,0,10.667-4.776,10.667-10.667C128,4.776,123.224,0,117.333,0H10.667     C4.776,0,0,4.776,0,10.667v106.667C0,123.224,4.776,128,10.667,128c5.891,0,10.667-4.776,10.667-10.667V36.416l152.459,152.459     c4.237,4.093,10.99,3.975,15.083-0.262c3.992-4.134,3.992-10.687,0-14.82L36.416,21.333z" fill="#FFFFFF"/><path d="M480,362.667c-5.891,0-10.667,4.776-10.667,10.667v80.917L316.875,301.792c-4.237-4.093-10.99-3.976-15.083,0.261     c-3.993,4.134-3.993,10.688,0,14.821l152.459,152.459h-80.917c-5.891,0-10.667,4.776-10.667,10.667s4.776,10.667,10.667,10.667     H480c5.891,0,10.667-4.776,10.667-10.667V373.333C490.667,367.442,485.891,362.667,480,362.667z" fill="#FFFFFF"/></g></svg>'
      } else v && (v.style.display = "none", v.remove(), v = null)
    }

    function x(u) {
      if (!c.get()) return;
      if (d.aborted || 0 === d.canvas.clientWidth || 0 === d.canvas.clientHeight) return;
      const b = performance.now();
      e.patch.config.fpsLimit = function() {
        if (s.get() && e.patch.loading.getProgress() < 1) return 5;
        if (r.get()) {
          if (!O) return 10;
          if (!h) return 30
        }
        return t.get()
      }(), -1 != d.canvasWidth ? (d.canvasWidth == n.get() && d.canvasHeight == o.get() || (n.set(d.canvasWidth), o.set(d.canvasHeight)), CABLES.now() - f > 1e3 && (CGL.fpsReport = CGL.fpsReport || [], e.patch.loading.getProgress() >= 1 && 0 !== f && CGL.fpsReport.push(p), p = 0, f = CABLES.now()), CGL.MESH.lastShader = null, CGL.MESH.lastMesh = null, d.renderStart(d, m, g), i.get() && (d.gl.clearColor(0, 0, 0, 1), d.gl.clear(d.gl.COLOR_BUFFER_BIT | d.gl.DEPTH_BUFFER_BIT)), a.trigger(), CGL.MESH.lastMesh && CGL.MESH.lastMesh.unBind(), CGL.Texture.previewTexture && (CGL.Texture.texturePreviewer || (CGL.Texture.texturePreviewer = new CGL.Texture.texturePreview(d)), CGL.Texture.texturePreviewer.render(CGL.Texture.previewTexture)), d.renderEnd(d), l.get() && (d.gl.clearColor(1, 1, 1, 1), d.gl.colorMask(!1, !1, !1, !0), d.gl.clear(d.gl.COLOR_BUFFER_BIT), d.gl.colorMask(!0, !0, !0, !0)), d.frameStore.phong || (d.frameStore.phong = {}), p++, CGL.profileData.profileMainloopMs = performance.now() - b) : d.setCanvas(e.patch.config.glCanvasId)
    }
    window.addEventListener("blur", () => {
      h = !1
    }), window.addEventListener("focus", () => {
      h = !0
    }), document.addEventListener("visibilitychange", () => {
      O = !document.hidden
    }), e.onDelete = function() {
      d.gl.clearColor(0, 0, 0, 0), d.gl.clear(d.gl.COLOR_BUFFER_BIT | d.gl.DEPTH_BUFFER_BIT)
    }
  }, Ops.Gl.MainLoop.prototype = new CABLES.Op, CABLES.OPS["b0472a1d-db16-4ba6-8787-f300fbdc77bb"] = {
    f: Ops.Gl.MainLoop,
    objName: "Ops.Gl.MainLoop"
  }, Ops.Array.ArrayGetTexture = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inArray("array"),
      a = e.inValueInt("index"),
      n = e.outObject("value");
    t.ignoreValueSerialize = !0, n.ignoreValueSerialize = !0, a.onChange = r, t.onChange = r, e.toWorkPortsNeedToBeLinked(t, n);
    const o = CGL.Texture.getEmptyTexture(e.patch.cgl);

    function r() {
      if (a.get() < 0) n.set(o);
      else {
        var e = t.get();
        if (e) {
          var r = a.get();
          r >= e.length ? n.set(o) : e[r] && (n.set(o), n.set(e[r]), e[r])
        } else n.set(o)
      }
    }
  }, Ops.Array.ArrayGetTexture.prototype = new CABLES.Op, CABLES.OPS["afea522b-ab72-4574-b721-5d37f5abaf77"] = {
    f: Ops.Array.ArrayGetTexture,
    objName: "Ops.Array.ArrayGetTexture"
  }, Ops.Patch.LoadingStatus = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.patch.cgl,
      a = e.patch,
      n = e.addInPort(new CABLES.Port(e, "exe", CABLES.OP_PORT_TYPE_FUNCTION)),
      o = e.addOutPort(new CABLES.Port(e, "finished", CABLES.OP_PORT_TYPE_FUNCTION)),
      r = e.addOutPort(new CABLES.Port(e, "status", CABLES.OP_PORT_TYPE_VALUE)),
      s = e.outValue("all loaded", !1),
      i = e.addOutPort(new CABLES.Port(e, "preRenderStatus", CABLES.OP_PORT_TYPE_VALUE)),
      l = e.addInPort(new CABLES.Port(e, "preRenderTimes", CABLES.OP_PORT_TYPE_VALUE)),
      u = e.inValueBool("PreRender Ops"),
      c = e.inBool("Play Timeline", !0);
    i.set(0);
    const b = e.addOutPort(new CABLES.Port(e, "numAssets", CABLES.OP_PORT_TYPE_VALUE)),
      d = e.addOutPort(new CABLES.Port(e, "loading", CABLES.OP_PORT_TYPE_FUNCTION)),
      p = e.outTrigger("loading finished");
    let f = !1;
    const m = [];
    let g = !0;
    const v = vec3.create();
    vec3.set(v, 0, 0, 0);
    const h = vec3.create();
    vec3.set(h, 0, 0, -2), document.body.classList.add("cables-loading");
    let O = 0;
    const I = function(a) {
      const n = m[O];
      i.set(O / (l.anim.keys.length - 1)), e.patch.timer.setTime(n), t.renderStart(t, v, h), o.trigger(), t.gl.clearColor(0, 0, 0, 1), t.gl.clear(t.gl.COLOR_BUFFER_BIT | t.gl.DEPTH_BUFFER_BIT), d.trigger(), t.renderEnd(t), O++
    };
    let x = null;

    function A() {
      a.loading.getProgress() >= 1 ? l.anim && O >= l.anim.keys.length ? (x = function() {}, s.set(!0), f = !0) : setTimeout(A, 30) : setTimeout(A, 100)
    }
    const S = a.loading.start("delayloading", "delayloading");
    setTimeout(function() {
      a.loading.finished(S)
    }, 100), n.onTriggered = (() => {
      r.set(a.loading.getProgress()), b.set(a.loading.getNumAssets()), a.loading.getProgress() >= 1 && f ? (g && (u.get() && e.patch.preRenderOps(), p.trigger(), e.patch.timer.setTime(0), c.get() && (e.patch.timer.play(), s.set(!0)), g = !1), o.trigger(), document.body.classList.remove("cables-loading"), document.body.classList.add("cables-loaded")) : (l.anim || (f = !0, x = function() {}), l.anim && a.loading.getProgress() >= 1 && O < l.anim.keys.length && (x = I, A(), d.trigger()), a.loading.getProgress() < 1 && (d.trigger(), e.patch.timer.setTime(0), e.patch.timer.pause()))
    })
  }, Ops.Patch.LoadingStatus.prototype = new CABLES.Op, CABLES.OPS["30f01b6d-b234-4ebe-a2c3-ebffd96a31e9"] = {
    f: Ops.Patch.LoadingStatus,
    objName: "Ops.Patch.LoadingStatus"
  }, Ops.Gl.Matrix.Transform = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inTrigger("render"),
      a = e.inValue("posX", 0),
      n = e.inValue("posY", 0),
      o = e.inValue("posZ", 0),
      r = e.inValue("scale", 1),
      s = e.inValue("rotX", 0),
      i = e.inValue("rotY", 0),
      l = e.inValue("rotZ", 0),
      u = e.outTrigger("trigger");
    e.setPortGroup("Rotation", [s, i, l]), e.setPortGroup("Position", [a, n, o]), e.setPortGroup("Scale", [r]), e.setUiAxisPorts(a, n, o);
    const c = e.patch.cgl,
      b = vec3.create(),
      d = vec3.create(),
      p = mat4.create();
    mat4.identity(p);
    let f = !1,
      m = !1,
      g = !0,
      v = !0,
      h = !0;

    function O() {
      mat4.identity(p), m && mat4.translate(p, p, b), 0 !== s.get() && mat4.rotateX(p, p, s.get() * CGL.DEG2RAD), 0 !== i.get() && mat4.rotateY(p, p, i.get() * CGL.DEG2RAD), 0 !== l.get() && mat4.rotateZ(p, p, l.get() * CGL.DEG2RAD), f && mat4.scale(p, p, d), h = !1
    }
    s.onChange = i.onChange = l.onChange = function() {
      h = !0
    }, a.onChange = n.onChange = o.onChange = function() {
      g = !0
    }, r.onChange = function() {
      v = !0
    }, t.onTriggered = function() {
      let t = !1;
      g && (! function() {
        m = !1, (0 !== a.get() || 0 !== n.get() || 0 !== o.get()) && (m = !0);
        vec3.set(b, a.get(), n.get(), o.get()), g = !1
      }(), t = !0), v && (f = !0, vec3.set(d, r.get(), r.get(), r.get()), v = !1, t = !0), h && (t = !0), t && O(), c.pushModelMatrix(), mat4.multiply(c.mMatrix, c.mMatrix, p), u.trigger(), c.popModelMatrix(), CABLES.UI && CABLES.UI.showCanvasTransforms && gui.setTransform(e.id, a.get(), n.get(), o.get()), e.isCurrentUiOp() && gui.setTransformGizmo({
        posX: a,
        posY: n,
        posZ: o
      })
    }, e.transform3d = function() {
      return {
        pos: [a, n, o]
      }
    }, O()
  }, Ops.Gl.Matrix.Transform.prototype = new CABLES.Op, CABLES.OPS["650baeb1-db2d-4781-9af6-ab4e9d4277be"] = {
    f: Ops.Gl.Matrix.Transform,
    objName: "Ops.Gl.Matrix.Transform"
  }, Ops.Gl.Matrix.Camera = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inTrigger("render"),
      a = e.outTrigger("trigger"),
      n = e.inValueSelect("projection mode", ["prespective", "ortogonal"], "prespective"),
      o = e.inValue("frustum near", .01),
      r = e.inValue("frustum far", 5e3),
      s = e.inValue("fov", 45),
      i = e.inValueBool("Auto Aspect Ratio", !0),
      l = e.inValue("Aspect Ratio", 1),
      u = e.inValue("eye X", 0),
      c = e.inValue("eye Y", 0),
      b = e.inValue("eye Z", 5),
      d = e.inValue("center X", 0),
      p = e.inValue("center Y", 0),
      f = e.inValue("center Z", 0),
      m = e.inValue("truck", 0),
      g = e.inValue("boom", 0),
      v = e.inValue("dolly", 0),
      h = e.inValue("tilt", 0),
      O = e.inValue("pan", 0),
      I = e.inValue("roll", 0),
      x = e.outValue("Aspect"),
      A = e.outArray("Look At Array"),
      S = e.patch.cgl;
    let j = 0;
    const P = vec3.create(),
      M = vec3.create(),
      _ = vec3.create(),
      C = mat4.create();
    mat4.identity(C);
    const T = [],
      L = vec3.create(),
      y = mat4.create();
    mat4.identity(y);
    let k = !0;
    t.onTriggered = function() {
      if (S.frameStore.shadowPass) return a.trigger();
      j = i.get() ? S.getViewPort()[2] / S.getViewPort()[3] : l.get(), x.set(j), S.pushViewMatrix(), k && (mat4.identity(y), vec3.set(L, m.get(), g.get(), v.get()), 0 === m.get() && 0 === g.get() && 0 === v.get() || mat4.translate(y, y, L), 0 !== h.get() && mat4.rotateX(y, y, h.get() * CGL.DEG2RAD), 0 !== O.get() && mat4.rotateY(y, y, O.get() * CGL.DEG2RAD), 0 !== I.get() && mat4.rotateZ(y, y, I.get() * CGL.DEG2RAD), k = !1), mat4.multiply(S.vMatrix, S.vMatrix, y), S.pushPMatrix(), S.pushViewMatrix(), "prespective" == n.get() ? mat4.perspective(S.pMatrix, .0174533 * s.get(), j, o.get(), r.get()) : "ortogonal" == n.get() && mat4.ortho(S.pMatrix, s.get() / 14 * -1, s.get() / 14 * 1, s.get() / 14 * -1 / j, s.get() / 14 * 1 / j, o.get(), r.get()), T[0] = u.get(), T[1] = c.get(), T[2] = b.get(), T[3] = d.get(), T[4] = p.get(), T[5] = f.get(), T[6] = 0, T[7] = 1, T[8] = 0, A.set(null), A.set(T), vec3.set(P, 0, 1, 0), vec3.set(M, u.get(), c.get(), b.get()), vec3.set(_, d.get(), p.get(), f.get()), mat4.lookAt(C, M, _, P), mat4.multiply(S.vMatrix, S.vMatrix, C), a.trigger(), S.popViewMatrix(), S.popPMatrix(), S.popViewMatrix(), e.isCurrentUiOp() && gui.setTransformGizmo({
        posX: m,
        posY: g,
        posZ: v
      })
    };
    const E = function() {
        i.get() ? l.setUiAttribs({
          hidePort: !0,
          greyout: !0
        }) : l.setUiAttribs({
          hidePort: !1,
          greyout: !1
        })
      },
      B = function() {
        k = !0
      };
    m.onChange = B, g.onChange = B, v.onChange = B, h.onChange = B, O.onChange = B, I.onChange = B, i.onChange = E, E()
  }, Ops.Gl.Matrix.Camera.prototype = new CABLES.Op, CABLES.OPS["b24dbfdc-485c-49d2-92a1-7258efd9239a"] = {
    f: Ops.Gl.Matrix.Camera,
    objName: "Ops.Gl.Matrix.Camera"
  }, Ops.Vars.VarGetNumber = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.outValue("Value");
    e.varName = e.inValueSelect("Variable", [], "", !0);
    let a = null;

    function n() {
      if (CABLES.UI) {
        const t = [],
          a = e.patch.getVars();
        for (const e in a) "0" != e && t.push(e);
        e.varName.uiAttribs.values = t
      }
    }

    function o() {
      n(), a && a.removeListener(r), (a = e.patch.getVar(e.varName.get())) ? (a.addListener(r), e.setUiError("unknownvar", null), e.setTitle("#" + e.varName.get()), r(a.getValue())) : (e.setUiError("unknownvar", "unknown variable! - there is no setVariable with this name (" + e.varName.get() + ")"), e.setTitle("#invalid"))
    }

    function r(e) {
      n(), t.set(e)
    }
    e.patch.addEventListener("variablesChanged", o), t.changeAlways = !0, o(), n(), e.patch.on("variableRename", (t, a) => {
      t == e.varName.get() && (e.varName.set(a), n())
    }), e.varName.onChange = function() {
      o()
    }, e.onDelete = function() {
      a && a.removeListener(r)
    }
  }, Ops.Vars.VarGetNumber.prototype = new CABLES.Op, CABLES.OPS["1b9c4504-d69a-43c2-b747-8ca795a8950f"] = {
    f: Ops.Vars.VarGetNumber,
    objName: "Ops.Vars.VarGetNumber"
  }, Ops.Trigger.SetNumberOnTrigger = function() {
    CABLES.Op.apply(this, arguments);
    const e = this.inTriggerButton("Set"),
      t = this.inValueFloat("Number"),
      a = this.outTrigger("Next"),
      n = this.outValue("Out Value");
    n.changeAlways = !0, e.onTriggered = function() {
      n.set(t.get()), a.trigger()
    }
  }, Ops.Trigger.SetNumberOnTrigger.prototype = new CABLES.Op, CABLES.OPS["9989b1c0-1073-4d5f-bfa0-36dd98b66e27"] = {
    f: Ops.Trigger.SetNumberOnTrigger,
    objName: "Ops.Trigger.SetNumberOnTrigger"
  }, Ops.Sequence = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = [],
      a = [];

    function n() {
      for (var e = 0; e < a.length; e++) a[e].trigger()
    }
    e.inTrigger("exe").onTriggered = n;
    for (var o = 0; o < 16; o++)
      if (a.push(e.outTrigger("trigger " + o)), o < 15) {
        var r = e.inTrigger("exe " + o);
        r.onTriggered = n, t.push(r)
      }
  }, Ops.Sequence.prototype = new CABLES.Op, CABLES.OPS["a466bc1f-06e9-4595-8849-bffb9fe22f99"] = {
    f: Ops.Sequence,
    objName: "Ops.Sequence"
  }, Ops.Trigger.IfEqualsThen = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inTrigger("exe");
    var a = e.inValue("Value 1", 0),
      n = e.inValue("Value 2", 0),
      o = e.addOutPort(new CABLES.Port(e, "then", CABLES.OP_PORT_TYPE_FUNCTION)),
      r = e.addOutPort(new CABLES.Port(e, "else", CABLES.OP_PORT_TYPE_FUNCTION));
    t.onTriggered = function() {
      a.get() == n.get() ? o.trigger() : r.trigger()
    }
  }, Ops.Trigger.IfEqualsThen.prototype = new CABLES.Op, CABLES.OPS["e8196d70-d0a6-470a-9448-a7ac0c0e956e"] = {
    f: Ops.Trigger.IfEqualsThen,
    objName: "Ops.Trigger.IfEqualsThen"
  }, Ops.Gl.Matrix.Coordinates = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inTrigger("render"),
      a = e.outTrigger("trigger"),
      n = e.outValue("X"),
      o = e.outValue("Y"),
      r = e.outValue("Z"),
      s = e.patch.cgl,
      i = vec3.create(),
      l = vec3.create();
    t.onTriggered = function() {
      vec3.transformMat4(i, l, s.mMatrix), n.set(i[0]), o.set(i[1]), r.set(i[2]), a.trigger()
    }
  }, Ops.Gl.Matrix.Coordinates.prototype = new CABLES.Op, CABLES.OPS["390d0214-92a9-48e9-85b4-f3092ee9e043"] = {
    f: Ops.Gl.Matrix.Coordinates,
    objName: "Ops.Gl.Matrix.Coordinates"
  }, Ops.Boolean.IfTrueThen_v2 = function() {
    CABLES.Op.apply(this, arguments);
    const e = this.inTrigger("exe"),
      t = this.inValueBool("boolean", !1),
      a = this.outTrigger("then"),
      n = this.outTrigger("else");
    e.onTriggered = function() {
      t.get() ? a.trigger() : n.trigger()
    }
  }, Ops.Boolean.IfTrueThen_v2.prototype = new CABLES.Op, CABLES.OPS["9549e2ed-a544-4d33-a672-05c7854ccf5d"] = {
    f: Ops.Boolean.IfTrueThen_v2,
    objName: "Ops.Boolean.IfTrueThen_v2"
  }, Ops.Anim.Timer_v2 = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inValue("Speed", 1),
      a = e.inValueBool("Play", !0),
      n = e.inTriggerButton("Reset"),
      o = e.inValueBool("Sync to timeline", !1),
      r = e.outValue("Time");
    e.setPortGroup("Controls", [a, n, t]);
    const s = new CABLES.Timer;
    let i = null,
      l = 0,
      u = !1;

    function c() {
      a.get() ? (s.play(), e.patch.addOnAnimFrame(e)) : (s.pause(), e.patch.removeOnAnimFrame(e))
    }
    a.onChange = c, c(), n.onTriggered = function() {
      l = 0, i = null, s.setTime(0), r.set(0)
    }, o.onChange = function() {
      u = o.get(), a.setUiAttribs({
        greyout: u
      }), n.setUiAttribs({
        greyout: u
      })
    }, e.onAnimFrame = function(e) {
      if (s.isPlaying())
        if (void 0 !== CABLES.overwriteTime) console.log("overwritten time!", CABLES.overwriteTime), r.set(CABLES.overwriteTime * t.get());
        else if (u) r.set(e * t.get());
      else {
        s.update();
        const e = s.get();
        if (null === i) return void(i = e);
        const a = Math.abs(e - i);
        i = e, (l += a * t.get()) != l && (l = 0), r.set(l)
      }
    }
  }, Ops.Anim.Timer_v2.prototype = new CABLES.Op, CABLES.OPS["aac7f721-208f-411a-adb3-79adae2e471a"] = {
    f: Ops.Anim.Timer_v2,
    objName: "Ops.Anim.Timer_v2"
  }, Ops.Array.ArrayGetObject = function() {
    CABLES.Op.apply(this, arguments);
    const e = this.inArray("array"),
      t = this.inValueInt("index"),
      a = this.outObject("value");
    let n = null;

    function o() {
      if (t.get() < 0) return void a.set(null);
      const o = e.get();
      if (!o) return void a.set(null);
      const r = t.get();
      r >= o.length ? a.set(null) : o[r] && (a.set(null), a.set(o[r]), n = o[r])
    }
    e.ignoreValueSerialize = !0, a.ignoreValueSerialize = !0, t.onChange = o, e.onChange = o, this.toWorkPortsNeedToBeLinked(e)
  }, Ops.Array.ArrayGetObject.prototype = new CABLES.Op, CABLES.OPS["44d34542-174c-47c6-b9c6-adde6fc371ac"] = {
    f: Ops.Array.ArrayGetObject,
    objName: "Ops.Array.ArrayGetObject"
  }, Ops.Json.ObjectGetString = function() {
    CABLES.Op.apply(this, arguments);
    const e = this;
    var t = e.inObject("data"),
      a = e.inString("Key");
    const n = e.outString("Result");

    function o() {
      t.get() && t.get().hasOwnProperty(a.get()) ? n.set(t.get()[a.get()]) : n.set(null)
    }
    n.ignoreValueSerialize = !0, t.ignoreValueSerialize = !0, a.onChange = function() {
      e.setUiAttrib({
        extendTitle: a.get()
      }), o()
    }, t.onChange = o
  }, Ops.Json.ObjectGetString.prototype = new CABLES.Op, CABLES.OPS["7d86cd28-f7d8-44a1-a4da-466c4782aaec"] = {
    f: Ops.Json.ObjectGetString,
    objName: "Ops.Json.ObjectGetString"
  }, Ops.Html.DivElement_v2 = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inString("Text", "Hello Div"),
      a = e.inString("Id"),
      n = e.inString("Class"),
      o = e.inValueEditor("Style", "position:absolute;z-index:9999;", "css"),
      r = e.inValueBool("Interactive", !1),
      s = e.inValueBool("Visible", !0),
      i = e.inValueBool("Convert Line Breaks", !1),
      l = e.outObject("DOM Element"),
      u = e.outValue("Hover"),
      c = e.outTrigger("Clicked");
    let b = null,
      d = null,
      p = "block";
    const f = document.createElement("div");
    f.dataset.op = e.id;
    const m = e.patch.cgl.canvas.parentElement;

    function g(e) {
      e ? ("none" == p && (p = "block"), f.style.visibility = "visible", f.style.display = p) : (f.style.visibility = "hidden", p = f.style.display || "block", f.style.display = "none")
    }

    function v() {
      g(s.get())
    }

    function h() {
      let e = t.get();
      d !== e && (d = e, e && i.get() && (e = e.replace(/(?:\r\n|\r|\n)/g, "<br>")), f.innerHTML != e && (f.innerHTML = e), l.set(null), l.set(f))
    }

    function O() {
      o.get() != f.style && (f.setAttribute("style", o.get()), v(), l.set(null), l.set(f)), f.parentElement || m.appendChild(f), j()
    }

    function I() {
      u.set(!0)
    }

    function x() {
      u.set(!1)
    }

    function A() {
      c.trigger()
    }

    function S() {
      b && (b.removeEventListener("click", A), b.removeEventListener("mouseleave", x), b.removeEventListener("mouseenter", I), b = null)
    }

    function j() {
      n.get() && o.get() ? e.setUiError("error", "DIV uses external and inline CSS", 1) : e.setUiError("error", null)
    }
    m.appendChild(f), l.set(f), n.onChange = function() {
      f.setAttribute("class", n.get()), j()
    }, i.onChange = t.onChange = h, o.onChange = O, r.onChange = function() {
      S(), r.get() && function() {
        b && S();
        (b = f) && (b.addEventListener("click", A), b.addEventListener("mouseleave", x), b.addEventListener("mouseenter", I))
      }()
    }, s.onChange = v, h(), O(), j(), e.onDelete = function() {
      f && f.parentNode && f.parentNode.removeChild(f)
    }, l.onLinkChanged = O, a.onChange = function() {
      f.id = a.get()
    }, e.addEventListener("onEnabledChange", function(t) {
      e.log("css changed"), g("visible" != f.style.visibility)
    })
  }, Ops.Html.DivElement_v2.prototype = new CABLES.Op, CABLES.OPS["db36db6d-83e4-4d27-b84c-8a20067aaffc"] = {
    f: Ops.Html.DivElement_v2,
    objName: "Ops.Html.DivElement_v2"
  }, Ops.Gl.TextureArrayLoader = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inValueString("url"),
      a = e.inValueBool("Left Pad", !1),
      n = e.inValue("Num Digits", 3);
    n.setUiAttribs({
      hidePort: !0,
      greyout: !0
    });
    const o = e.inValueInt("Index Start"),
      r = e.inValueInt("Index End"),
      s = e.inValueSelect("filter", ["nearest", "linear", "mipmap"]),
      i = e.inValueSelect("wrap", ["repeat", "mirrored repeat", "clamp to edge"], "clamp to edge"),
      l = e.addInPort(new CABLES.Port(e, "flip", CABLES.OP_PORT_TYPE_VALUE, {
        display: "bool"
      })),
      u = e.addInPort(new CABLES.Port(e, "unpackPreMultipliedAlpha", CABLES.OP_PORT_TYPE_VALUE, {
        display: "bool"
      })),
      c = e.outArray("TextureArray"),
      b = e.addOutPort(new CABLES.Port(e, "width", CABLES.OP_PORT_TYPE_VALUE)),
      d = e.addOutPort(new CABLES.Port(e, "height", CABLES.OP_PORT_TYPE_VALUE)),
      p = e.addOutPort(new CABLES.Port(e, "loading", CABLES.OP_PORT_TYPE_VALUE)),
      f = e.outValue("Aspect Ratio");
    r.set(10), l.set(!1), u.set(!1);
    const m = e.patch.cgl;
    let g = 0,
      v = 0;
    const h = [];
    c.set(h), l.onChange = function() {
      x()
    }, t.onChange = x, s.onChange = function() {
      "nearest" == s.get() && (g = CGL.Texture.FILTER_NEAREST);
      "linear" == s.get() && (g = CGL.Texture.FILTER_LINEAR);
      "mipmap" == s.get() && (g = CGL.Texture.FILTER_MIPMAP);
      x()
    }, i.onChange = function() {
      "repeat" == i.get() && (v = CGL.Texture.WRAP_REPEAT);
      "mirrored repeat" == i.get() && (v = CGL.Texture.WRAP_MIRRORED_REPEAT);
      "clamp to edge" == i.get() && (v = CGL.Texture.WRAP_CLAMP_TO_EDGE);
      x()
    }, u.onChange = function() {
      x()
    }, a.onChange = function() {
      const e = a.get();
      n.setUiAttribs({
        hidePort: !e,
        greyout: !e
      })
    };
    let O = 0;
    const I = function() {
      CGL.Texture.getTempTexture(m)
    };

    function x(e) {
      clearTimeout(O), O = setTimeout(function() {
        ! function(e) {
          for (var t = 0; t < h.length; t++) h[t] && h[t].delete();
          h.length = 0;
          for (var t = Math.floor(o.get()); t <= Math.floor(r.get()); t++) S(t, e)
        }(e)
      }, 30)
    }
    const A = "X";

    function S(r, s) {
      let i = t.get();
      if (!i) return;
      const O = i.indexOf(A),
        x = i.lastIndexOf(A);
      if (-1 === O) return;
      const S = i.substring(O, x + 1);
      let j = r;
      if (a.get() && (j = function e(t, a) {
          return t.toString().length < a ? e("0" + t, a) : t
        }(r, n.get())), i = i.replace(S, j), i = e.patch.getFilePath(i), s && (i += "?rnd=" + CABLES.generateUUID()), t.get() && t.get().length > 1) {
        p.set(!0);
        var P = CGL.Texture.load(m, i, function(a) {
          if (a) return I(), void e.uiAttr({
            error: 'could not load texture "' + t.get() + '"'
          });
          e.uiAttr({
            error: null
          }), b.set(P.width), d.set(P.height), f.set(P.width / P.height), h[r - parseInt(o.get())] = P, P.isPowerOfTwo() ? e.uiAttr({
            hint: null,
            warning: null
          }) : e.uiAttr({
            hint: "texture dimensions not power of two! - texture filtering will not work.",
            warning: null
          }), c.set(null), c.set(h)
        }, {
          wrap: v,
          flip: l.get(),
          unpackAlpha: u.get(),
          filter: g
        });
        p.set(!1)
      } else I()
    }
    e.onFileChanged = function(e) {}, s.set("linear"), i.set("repeat")
  }, Ops.Gl.TextureArrayLoader.prototype = new CABLES.Op, CABLES.OPS["4ee5bc6d-fd73-4498-8378-6846e57cdd7f"] = {
    f: Ops.Gl.TextureArrayLoader,
    objName: "Ops.Gl.TextureArrayLoader"
  }, Ops.Gl.Texture_v2 = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inUrl("File", [".jpg", ".png", ".webp", ".jpeg", ".avif"]),
      a = e.inSwitch("Filter", ["nearest", "linear", "mipmap"]),
      n = e.inValueSelect("Wrap", ["repeat", "mirrored repeat", "clamp to edge"], "clamp to edge"),
      o = e.inSwitch("Anisotropic", [0, 1, 2, 4, 8, 16], 0),
      r = e.inValueBool("Flip", !1),
      s = e.inValueBool("Pre Multiplied Alpha", !1),
      i = e.inValueBool("Active", !0),
      l = e.outTexture("Texture"),
      u = e.outValue("Width"),
      c = e.outValue("Height"),
      b = e.outValue("Aspect Ratio"),
      d = e.outValue("Loaded");
    e.setPortGroup("Size", [u, c]), s.hidePort(), e.toWorkPortsNeedToBeLinked(l);
    const p = e.patch.cgl;
    let f = null,
      m = null,
      g = null,
      v = 0,
      h = 0,
      O = 0,
      I = 0;
    t.onChange = r.onChange = function() {
      A()
    }, o.onChange = a.onChange = function() {
      "nearest" == a.get() ? v = CGL.Texture.FILTER_NEAREST : "linear" == a.get() ? v = CGL.Texture.FILTER_LINEAR : "mipmap" == a.get() ? v = CGL.Texture.FILTER_MIPMAP : "Anisotropic" == a.get() && (v = CGL.Texture.FILTER_ANISOTROPIC);
      O = parseFloat(o.get()), A()
    }, n.onChange = function() {
      "repeat" == n.get() && (h = CGL.Texture.WRAP_REPEAT);
      "mirrored repeat" == n.get() && (h = CGL.Texture.WRAP_MIRRORED_REPEAT);
      "clamp to edge" == n.get() && (h = CGL.Texture.WRAP_CLAMP_TO_EDGE);
      A()
    }, s.onChange = function() {
      A()
    }, d.set(!1), a.set("mipmap"), n.set("repeat"), l.set(CGL.Texture.getEmptyTexture(p)), i.onChange = function() {
      i.get() ? f != t.get() ? S() : l.set(g) : l.set(CGL.Texture.getEmptyTexture(p))
    };
    const x = function() {
      const e = CGL.Texture.getTempTexture(p);
      l.set(e)
    };

    function A(e) {
      clearTimeout(I), I = setTimeout(function() {
        S(e)
      }, 30)
    }

    function S(a) {
      if (!i.get()) return;
      m || (m = p.patch.loading.start("textureOp", t.get()));
      let n = e.patch.getFilePath(String(t.get()));
      a && (n += "?rnd=" + CABLES.uuid()), 0 == String(t.get()).indexOf("data:") && (n = t.get()), f = t.get(), t.get() && t.get().length > 1 ? (d.set(!1), e.setUiAttrib({
        extendTitle: CABLES.basename(n)
      }), e.refreshParams(), p.patch.loading.addAssetLoadingTask(() => {
        e.setUiError("urlerror", null), g && g.delete(), g = CGL.Texture.load(p, n, function(a) {
          if (a) return x(), e.error(a), e.setUiError("urlerror", 'could not load texture:<br/>"' + t.get() + '"', 2), void p.patch.loading.finished(m);
          l.set(g), u.set(g.width), c.set(g.height), b.set(g.width / g.height), g.isPowerOfTwo() ? e.setUiError("npot", null) : e.setUiError("npot", "Texture dimensions not power of two! - Texture filtering will not work in WebGL 1.", 0), l.set(null), l.set(g), d.set(!0), p.patch.loading.finished(m)
        }, {
          anisotropic: O,
          wrap: h,
          flip: r.get(),
          unpackAlpha: s.get(),
          filter: v
        }), l.set(null), l.set(g)
      })) : (p.patch.loading.finished(m), x())
    }
    e.onFileChanged = function(e) {
      t.get() && t.get().indexOf(e) > -1 && (l.set(null), l.set(CGL.Texture.getTempTexture(p)), S(!0))
    }
  }, Ops.Gl.Texture_v2.prototype = new CABLES.Op, CABLES.OPS["790f3702-9833-464e-8e37-6f0f813f7e16"] = {
    f: Ops.Gl.Texture_v2,
    objName: "Ops.Gl.Texture_v2"
  }, Ops.Gl.Shader.BasicMaterial_v3 = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = "{{MODULES_HEAD}}\n\nIN vec2 texCoord;\n\n#ifdef HAS_TEXTURES\n    IN vec2 texCoordOrig;\n    #ifdef HAS_TEXTURE_DIFFUSE\n        UNI sampler2D tex;\n    #endif\n    #ifdef HAS_TEXTURE_OPACITY\n        UNI sampler2D texOpacity;\n   #endif\n#endif\n\nvoid main()\n{\n    {{MODULE_BEGIN_FRAG}}\n    vec4 col=color;\n\n    #ifdef HAS_TEXTURES\n        vec2 uv=texCoord;\n\n        #ifdef CROP_TEXCOORDS\n            if(uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) discard;\n        #endif\n\n        #ifdef HAS_TEXTURE_DIFFUSE\n            col=texture(tex,uv);\n\n            #ifdef COLORIZE_TEXTURE\n                col.r*=color.r;\n                col.g*=color.g;\n                col.b*=color.b;\n            #endif\n        #endif\n        col.a*=color.a;\n        #ifdef HAS_TEXTURE_OPACITY\n            #ifdef TRANSFORMALPHATEXCOORDS\n                uv=texCoordOrig;\n            #endif\n            #ifdef ALPHA_MASK_ALPHA\n                col.a*=texture(texOpacity,uv).a;\n            #endif\n            #ifdef ALPHA_MASK_LUMI\n                col.a*=dot(vec3(0.2126,0.7152,0.0722), texture(texOpacity,uv).rgb);\n            #endif\n            #ifdef ALPHA_MASK_R\n                col.a*=texture(texOpacity,uv).r;\n            #endif\n            #ifdef ALPHA_MASK_G\n                col.a*=texture(texOpacity,uv).g;\n            #endif\n            #ifdef ALPHA_MASK_B\n                col.a*=texture(texOpacity,uv).b;\n            #endif\n            // #endif\n        #endif\n    #endif\n\n    {{MODULE_COLOR}}\n\n    #ifdef DISCARDTRANS\n        if(col.a<0.2) discard;\n    #endif\n\n    outColor = col;\n}\n",
      a = "IN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\nIN float attrVertIndex;\n\n{{MODULES_HEAD}}\n\nOUT vec3 norm;\nOUT vec2 texCoord;\nOUT vec2 texCoordOrig;\n\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\n#ifdef HAS_TEXTURES\n    UNI float diffuseRepeatX;\n    UNI float diffuseRepeatY;\n    UNI float texOffsetX;\n    UNI float texOffsetY;\n#endif\n\nvoid main()\n{\n    mat4 mMatrix=modelMatrix;\n    mat4 mvMatrix;\n\n    norm=attrVertNormal;\n    texCoordOrig=attrTexCoord;\n    texCoord=attrTexCoord;\n    #ifdef HAS_TEXTURES\n        texCoord.x=texCoord.x*diffuseRepeatX+texOffsetX;\n        texCoord.y=(1.0-texCoord.y)*diffuseRepeatY+texOffsetY;\n    #endif\n\n    vec4 pos = vec4(vPosition, 1.0);\n\n    #ifdef BILLBOARD\n       vec3 position=vPosition;\n       mvMatrix=viewMatrix*modelMatrix;\n\n       gl_Position = projMatrix * mvMatrix * vec4((\n           position.x * vec3(\n               mvMatrix[0][0],\n               mvMatrix[1][0],\n               mvMatrix[2][0] ) +\n           position.y * vec3(\n               mvMatrix[0][1],\n               mvMatrix[1][1],\n               mvMatrix[2][1]) ), 1.0);\n    #endif\n\n    {{MODULE_VERTEX_POSITION}}\n\n    #ifndef BILLBOARD\n        mvMatrix=viewMatrix * mMatrix;\n    #endif\n\n\n    #ifndef BILLBOARD\n        // gl_Position = projMatrix * viewMatrix * modelMatrix * pos;\n        gl_Position = projMatrix * mvMatrix * pos;\n    #endif\n}\n",
      n = e.inTrigger("render"),
      o = e.outTrigger("trigger"),
      r = e.outObject("shader", null, "shader");
    r.ignoreValueSerialize = !0, e.toWorkPortsNeedToBeLinked(n);
    const s = e.patch.cgl,
      i = new CGL.Shader(s, "basicmaterialnew");
    i.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"]), i.setSource(a, t), r.set(i), n.onTriggered = M;
    const l = e.inValueSlider("r", Math.random()),
      u = e.inValueSlider("g", Math.random()),
      c = e.inValueSlider("b", Math.random()),
      b = e.inValueSlider("a", 1);
    l.setUiAttribs({
      colorPick: !0
    }), i.addUniformFrag("4f", "color", l, u, c, b);
    const d = e.inTexture("texture");
    let p = null;
    d.onChange = C;
    const f = e.inValueBool("colorizeTexture", !1),
      m = e.inTexture("textureOpacity");
    let g = null;
    const v = e.inSwitch("Alpha Mask Source", ["Luminance", "R", "G", "B", "A"], "Luminance");
    v.setUiAttribs({
      greyout: !0
    }), m.onChange = _;
    const h = e.inValueBool("Opacity TexCoords Transform", !1),
      O = e.inValueBool("Discard Transparent Pixels"),
      I = e.inValue("diffuseRepeatX", 1),
      x = e.inValue("diffuseRepeatY", 1),
      A = e.inValue("Tex Offset X", 0),
      S = e.inValue("Tex Offset Y", 0),
      j = e.inBool("Crop TexCoords", !1);
    i.addUniformFrag("f", "diffuseRepeatX", I), i.addUniformFrag("f", "diffuseRepeatY", x), i.addUniformFrag("f", "texOffsetX", A), i.addUniformFrag("f", "texOffsetY", S);
    const P = e.inValueBool("billboard", !1);

    function M() {
      i && (s.pushShader(i), i.popTextures(), p && d.get() && i.pushTexture(p, d.get().tex), g && m.get() && i.pushTexture(g, m.get().tex), o.trigger(), s.popShader())
    }

    function _() {
      if (m.get()) {
        if (null !== g) return;
        i.removeUniform("texOpacity"), i.define("HAS_TEXTURE_OPACITY"), g || (g = new CGL.Uniform(i, "t", "texOpacity")), v.setUiAttribs({
          greyout: !1
        }), h.setUiAttribs({
          greyout: !1
        })
      } else i.removeUniform("texOpacity"), i.removeDefine("HAS_TEXTURE_OPACITY"), g = null, v.setUiAttribs({
        greyout: !0
      }), h.setUiAttribs({
        greyout: !0
      });
      T()
    }

    function C() {
      d.get() ? (i.hasDefine("HAS_TEXTURE_DIFFUSE") || i.define("HAS_TEXTURE_DIFFUSE"), p || (p = new CGL.Uniform(i, "t", "texDiffuse")), I.setUiAttribs({
        greyout: !1
      }), x.setUiAttribs({
        greyout: !1
      }), A.setUiAttribs({
        greyout: !1
      }), S.setUiAttribs({
        greyout: !1
      }), f.setUiAttribs({
        greyout: !1
      })) : (i.removeUniform("texDiffuse"), i.removeDefine("HAS_TEXTURE_DIFFUSE"), p = null, I.setUiAttribs({
        greyout: !0
      }), x.setUiAttribs({
        greyout: !0
      }), A.setUiAttribs({
        greyout: !0
      }), S.setUiAttribs({
        greyout: !0
      }), f.setUiAttribs({
        greyout: !0
      }))
    }

    function T() {
      i.toggleDefine("CROP_TEXCOORDS", j.get()), i.toggleDefine("COLORIZE_TEXTURE", f.get()), i.toggleDefine("TRANSFORMALPHATEXCOORDS", h.get()), i.toggleDefine("DISCARDTRANS", O.get()), i.toggleDefine("BILLBOARD", P.get()), i.toggleDefine("ALPHA_MASK_ALPHA", "A" == v.get()), i.toggleDefine("ALPHA_MASK_LUMI", "Luminance" == v.get()), i.toggleDefine("ALPHA_MASK_R", "R" == v.get()), i.toggleDefine("ALPHA_MASK_G", "G" == v.get()), i.toggleDefine("ALPHA_MASK_B", "B" == v.get())
    }
    v.onChange = P.onChange = O.onChange = h.onChange = j.onChange = f.onChange = T, e.setPortGroup("Color", [l, u, c, b]), e.setPortGroup("Color Texture", [d, f]), e.setPortGroup("Opacity", [m, v, O, h]), e.setPortGroup("Texture Transform", [I, x, A, S, j]), _(), C(), e.preRender = function() {
      i.bind(), M()
    }
  }, Ops.Gl.Shader.BasicMaterial_v3.prototype = new CABLES.Op, CABLES.OPS["ec55d252-3843-41b1-b731-0482dbd9e72b"] = {
    f: Ops.Gl.Shader.BasicMaterial_v3,
    objName: "Ops.Gl.Shader.BasicMaterial_v3"
  }, Ops.Gl.Meshes.Rectangle_v2 = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inTrigger("render"),
      a = e.outTrigger("trigger"),
      n = e.inValue("width", 1),
      o = e.inValue("height", 1),
      r = e.inSwitch("pivot x", ["left", "center", "right"]),
      s = e.inSwitch("pivot y", ["top", "center", "bottom"]),
      i = e.inValueInt("num columns", 1),
      l = e.inValueInt("num rows", 1),
      u = e.inSwitch("axis", ["xy", "xz"], "xy"),
      c = e.inValueBool("Active", !0),
      b = e.outObject("geometry", null, "geometry");
    b.ignoreValueSerialize = !0;
    const d = e.patch.cgl;
    u.set("xy"), r.set("center"), s.set("center"), e.setPortGroup("Pivot", [r, s]), e.setPortGroup("Size", [n, o]), e.setPortGroup("Structure", [i, l]), e.toWorkPortsNeedToBeLinked(t);
    const p = new CGL.Geometry("rectangle");
    let f = null,
      m = !1;

    function g() {
      let e = n.get(),
        t = parseFloat(o.get()),
        a = 0,
        c = 0;
      "string" == typeof e && (e = parseFloat(e)), "string" == typeof t && (t = parseFloat(t)), "center" == r.get() ? a = 0 : "right" == r.get() ? a = -e / 2 : "left" == r.get() && (a = +e / 2), "center" == s.get() ? c = 0 : "top" == s.get() ? c = -t / 2 : "bottom" == s.get() && (c = +t / 2);
      const g = [],
        v = [],
        h = [],
        O = [],
        I = [],
        x = [],
        A = Math.round(l.get()),
        S = Math.round(i.get()),
        j = e / S,
        P = t / A;
      let M, _, C;
      for (C = u.get(), _ = 0; _ <= A; _++)
        for (M = 0; M <= S; M++) g.push(M * j - n.get() / 2 + a), "xz" == C && g.push(0), g.push(_ * P - o.get() / 2 + c), "xy" == C && g.push(0), v.push(M / S), v.push(1 - _ / A), "xz" == C ? (h.push(0, 1, 0), O.push(1, 0, 0), I.push(0, 0, 1)) : "xy" == C && (h.push(0, 0, 1), O.push(-1, 0, 0), I.push(0, -1, 0));
      for (M = 0; M < S; M++)
        for (_ = 0; _ < A; _++) {
          const e = M + (S + 1) * _,
            t = e,
            a = e + 1,
            n = e + S + 1,
            o = e + 1 + S + 1;
          x.push(t), x.push(n), x.push(a), x.push(a), x.push(n), x.push(o)
        }
      p.clear(), p.vertices = g, p.texCoords = v, p.verticesIndices = x, p.vertexNormals = h, p.tangents = O, p.biTangents = I, S * A > 64e3 && p.unIndex(), f ? f.setGeom(p) : f = new CGL.Mesh(d, p), b.set(null), b.set(p), m = !1
    }
    u.onChange = r.onChange = s.onChange = n.onChange = o.onChange = l.onChange = i.onChange = function() {
      m = !0
    }, g(), e.preRender = t.onTriggered = function() {
      CGL.TextureEffect.checkOpNotInTextureEffect(e) && (m && g(), c.get() && f && f.render(d.getShader()), a.trigger())
    }, e.onDelete = function() {
      f && f.dispose()
    }
  }, Ops.Gl.Meshes.Rectangle_v2.prototype = new CABLES.Op, CABLES.OPS["fc5718d6-11a5-496e-8f16-1c78b1a2824c"] = {
    f: Ops.Gl.Meshes.Rectangle_v2,
    objName: "Ops.Gl.Meshes.Rectangle_v2"
  }, Ops.Gl.Matrix.Billboard = function() {
    CABLES.Op.apply(this, arguments);
    const e = this.inTrigger("Exec"),
      t = this.outTrigger("Next"),
      a = this.patch.cgl;
    var n = mat4.create(),
      o = mat4.create();
    mat4.create(), mat4.create();
    e.onTriggered = function() {
      mat4.invert(n, a.mMatrix), mat4.invert(o, a.vMatrix), mat4.mul(n, n, o), n[12] = 0, n[13] = 0, n[14] = 0, a.pushModelMatrix(), a.pushViewMatrix(), mat4.mul(a.mMatrix, a.mMatrix, n), t.trigger(), a.popViewMatrix(), a.popModelMatrix()
    }
  }, Ops.Gl.Matrix.Billboard.prototype = new CABLES.Op, CABLES.OPS["d41e676e-d8a7-4a1e-8abf-f1bddfc982d5"] = {
    f: Ops.Gl.Matrix.Billboard,
    objName: "Ops.Gl.Matrix.Billboard"
  }, Ops.Trigger.GateTrigger = function() {
    CABLES.Op.apply(this, arguments);
    const e = this.inTrigger("Execute"),
      t = this.inValueBool("Pass Through", !0),
      a = this.outTrigger("Trigger out");
    e.onTriggered = function() {
      t.get() && a.trigger()
    }
  }, Ops.Trigger.GateTrigger.prototype = new CABLES.Op, CABLES.OPS["65e8b8a2-ba13-485f-883a-2bcf377989da"] = {
    f: Ops.Trigger.GateTrigger,
    objName: "Ops.Trigger.GateTrigger"
  }, Ops.Boolean.ToggleBool = function() {
    CABLES.Op.apply(this, arguments);
    const e = this.inTriggerButton("trigger"),
      t = this.inTriggerButton("reset"),
      a = this.outBool("result");
    let n = !1;
    a.set(n), a.ignoreValueSerialize = !0, e.onTriggered = function() {
      n = !n, a.set(n)
    }, t.onTriggered = function() {
      n = !1, a.set(n)
    }
  }, Ops.Boolean.ToggleBool.prototype = new CABLES.Op, CABLES.OPS["712a25f4-3a93-4042-b8c5-2f56169186cc"] = {
    f: Ops.Boolean.ToggleBool,
    objName: "Ops.Boolean.ToggleBool"
  }, Ops.Vars.VarSetNumber_v2 = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inValueFloat("Value", 0);
    e.varName = e.inDropDown("Variable", [], "", !0), new CABLES.VarSetOpWrapper(e, "number", t, e.varName)
  }, Ops.Vars.VarSetNumber_v2.prototype = new CABLES.Op, CABLES.OPS["b5249226-6095-4828-8a1c-080654e192fa"] = {
    f: Ops.Vars.VarSetNumber_v2,
    objName: "Ops.Vars.VarSetNumber_v2"
  }, Ops.Gl.Meshes.TextMesh_v2 = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = "UNI sampler2D tex;\n#ifdef DO_MULTEX\n    UNI sampler2D texMul;\n#endif\n#ifdef DO_MULTEX_MASK\n    UNI sampler2D texMulMask;\n#endif\nIN vec2 texCoord;\nIN vec2 texPos;\nUNI float r;\nUNI float g;\nUNI float b;\nUNI float a;\n\nvoid main()\n{\n   vec4 col=texture(tex,texCoord);\n   col.a=col.r;\n   col.r*=r;\n   col.g*=g;\n   col.b*=b;\n   col*=a;\n   if(col.a==0.0)discard;\n\n\n    #ifdef DO_MULTEX\n        col*=texture(texMul,texPos);\n    #endif\n\n    #ifdef DO_MULTEX_MASK\n        col*=texture(texMulMask,texPos).r;\n    #endif\n\n\n\n   outColor=col;\n}",
      a = "UNI sampler2D tex;\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\nUNI float scale;\nIN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN mat4 instMat;\nIN vec2 attrTexOffsets;\nIN vec2 attrTexSize;\nIN vec2 attrTexPos;\nOUT vec2 texPos;\n\nOUT vec2 texCoord;\n\nvoid main()\n{\n   texCoord=(attrTexCoord*(attrTexSize)) + attrTexOffsets;\n   mat4 instModelMat=instMat;\n   instModelMat[3][0]*=scale;\n\n   texPos=attrTexPos;\n\n   vec4 vert=vec4( vPosition.x*(attrTexSize.x/attrTexSize.y)*scale,vPosition.y*scale,vPosition.z*scale, 1. );\n\n   mat4 mvMatrix=viewMatrix * modelMatrix * instModelMat;\n\n   #ifndef BILLBOARD\n       gl_Position = projMatrix * mvMatrix * vert;\n   #endif\n}\n",
      n = e.inTrigger("Render"),
      o = e.inString("Text", "cables"),
      r = e.inValueFloat("Scale", 1),
      s = e.inString("Font", "Arial"),
      i = e.inValueSelect("align", ["left", "center", "right"], "center"),
      l = e.inValueSelect("vertical align", ["Top", "Middle", "Bottom"], "Middle"),
      u = e.inValueFloat("Line Height", 1),
      c = e.inValueFloat("Letter Spacing"),
      b = e.inSwitch("filter", ["nearest", "linear", "mipmap"], "mipmap"),
      d = e.inSwitch("Anisotropic", [0, 1, 2, 4, 8, 16], 0),
      p = e.inTexture("Texture Color"),
      f = e.inTexture("Texture Mask"),
      m = e.outTrigger("Next"),
      g = e.outTexture("texture"),
      v = e.outNumber("Total Lines", 0),
      h = e.outNumber("Width", 0),
      O = e.outValue("Font Available", 0),
      I = e.patch.cgl;
    e.setPortGroup("Masking", [p, f]);
    const x = 1024;
    let A = !1,
      S = !0;
    i.onChange = o.onChange = u.onChange = function() {
      S = !0
    };
    let j = null;
    CABLES.OpTextureMeshCanvas = {};
    let P = 0;
    let M = null,
      _ = !0,
      C = !0;

    function T() {
      const t = A;
      try {
        A = document.fonts.check('20px "' + s.get() + '"')
      } catch (t) {
        e.error(t)
      }!t && A && (O.set(!0), C = !0, _ = !0), A || setTimeout(T, 250)
    }

    function L() {
      if (j = "" + s.get(), CABLES.OpTextureMeshCanvas.hasOwnProperty(j)) return CABLES.OpTextureMeshCanvas[j];
      const e = document.createElement("canvas");
      e.dataset.font = s.get(), e.id = "texturetext_" + CABLES.generateUUID(), e.style.display = "none", document.getElementsByTagName("body")[0].appendChild(e);
      const t = e.getContext("2d");
      return CABLES.OpTextureMeshCanvas[j] = {
        ctx: t,
        canvas: e,
        chars: {},
        characters: "?",
        fontSize: 320
      }, CABLES.OpTextureMeshCanvas[j]
    }
    d.onChange = b.onChange = (() => {
      L().texture = null, C = !0
    }), f.onChange = p.onChange = function() {
      y.toggleDefine("DO_MULTEX", p.get()), y.toggleDefine("DO_MULTEX_MASK", f.get())
    }, g.set(null), s.onChange = function() {
      C = !0, _ = !0, T()
    }, e.patch.on("fontLoaded", e => {
      e == s.get() && (C = !0, _ = !0)
    }), l.onChange = function() {
      "Middle" == l.get() ? P = 0 : "Top" == l.get() ? P = 1 : "Bottom" == l.get() && (P = 2)
    }, e.onDelete = function() {
      j && CABLES.OpTextureMeshCanvas[j] && CABLES.OpTextureMeshCanvas[j].canvas.remove()
    };
    var y = new CGL.Shader(I, "TextMesh");
    y.setSource(a, t);
    new CGL.Uniform(y, "t", "tex", 0), new CGL.Uniform(y, "t", "texMul", 1), new CGL.Uniform(y, "t", "texMulMask", 2), new CGL.Uniform(y, "f", "scale", r);
    const k = e.inValueSlider("r", 1),
      E = e.inValueSlider("g", 1),
      B = e.inValueSlider("b", 1),
      N = e.inValueSlider("a", 1);
    new CGL.Uniform(y, "f", "r", k), new CGL.Uniform(y, "f", "g", E), new CGL.Uniform(y, "f", "b", B), new CGL.Uniform(y, "f", "a", N);
    k.setUiAttribs({
      colorPick: !0
    }), e.setPortGroup("Display", [r, s]), e.setPortGroup("Alignment", [i, l]), e.setPortGroup("Color", [k, E, B, N]);
    let V = 0;
    const w = vec3.create();
    let R = -1,
      G = !1;

    function W() {
      const e = String(o.get() + "");
      if (!g.get()) return;
      const t = L();
      t.geom || (t.geom = new CGL.Geometry("textmesh"), t.geom.vertices = [1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0], t.geom.texCoords = new Float32Array([1, 1, 0, 1, 1, 0, 0, 0]), t.geom.verticesIndices = [0, 1, 2, 2, 1, 3]), M || (M = new CGL.Mesh(I, t.geom));
      const a = e.split("\n");
      v.set(a.length);
      const n = [],
        s = [],
        l = [],
        b = [];
      C = !1;
      const d = mat4.create();
      let p = 0;
      for (let e = 0; e < a.length; e++) {
        const o = a[e],
          r = o.length;
        let m = 0,
          g = 0,
          v = 0;
        for (var f = 0; f < r; f++) {
          const e = o.substring(f, f + 1),
            a = t.chars[String(e)];
          a && (v += a.texCoordWidth / a.texCoordHeight, v += c.get())
        }
        v -= c.get(), V = 0, "left" == i.get() ? g = 0 : "right" == i.get() ? g = v : "center" == i.get() && (g = v / 2), V = (e + 1) * u.get();
        for (f = 0; f < r; f++) {
          const r = o.substring(f, f + 1),
            i = t.chars[String(r)];
          if (!i) return void(C = !0);
          b.push(m / v * .99 + .005, .99 * (1 - e / (a.length - 1)) + .005), s.push(i.texCoordX, 1 - i.texCoordY - i.texCoordHeight), l.push(i.texCoordWidth, i.texCoordHeight), mat4.identity(d), mat4.translate(d, d, [m - g, 0 - e * u.get(), 0]), m += i.texCoordWidth / i.texCoordHeight + c.get(), p = Math.max(p, m - g), n.push(Array.prototype.slice.call(d)), 0
        }
      }
      const m = [].concat.apply([], n);
      G = !1, 0 == m.length && (G = !0), M.numInstances = m.length / 16, 0 != M.numInstances ? (h.set(p * r.get()), M.setAttribute("instMat", new Float32Array(m), 16, {
        instanced: !0
      }), M.setAttribute("attrTexOffsets", new Float32Array(s), 2, {
        instanced: !0
      }), M.setAttribute("attrTexSize", new Float32Array(l), 2, {
        instanced: !0
      }), M.setAttribute("attrTexPos", new Float32Array(b), 2, {
        instanced: !0
      }), _ = !1, C && U()) : G = !0
    }

    function F(e, t) {
      const a = L();
      t || (a.chars = {});
      const n = a.ctx;
      n.font = e + "px " + s.get(), n.textAlign = "left";
      var o = 0,
        r = 0;
      let i = 0;
      const l = 1.4 * e,
        u = {
          fits: !0
        };
      for (r = 0; r < a.characters.length; r++) {
        const s = String(a.characters.substring(r, r + 1)),
          u = n.measureText(s).width;
        i + u >= x && (o += l + 2, i = 0), t || (a.chars[s] = {
          str: s,
          texCoordX: i / x,
          texCoordY: o / x,
          texCoordWidth: u / x,
          texCoordHeight: l / x
        }, n.fillText(s, i, o + e)), i += u + 12
      }
      return o > x - l && (u.fits = !1), u.spaceLeft = x - o, u
    }

    function U() {
      let e = CGL.Texture.FILTER_LINEAR;
      "nearest" == b.get() && (e = CGL.Texture.FILTER_NEAREST), "mipmap" == b.get() && (e = CGL.Texture.FILTER_MIPMAP);
      const t = L();
      let a = String(o.get());
      null != a && void 0 != a || (a = "");
      for (let e = 0; e < a.length; e++) {
        const n = a.substring(e, e + 1); - 1 == t.characters.indexOf(n) && (t.characters += n, C = !0)
      }
      const n = t.ctx;
      t.canvas.width = t.canvas.height = x, t.texture || (t.texture = CGL.Texture.createFromImage(I, t.canvas, {
        filter: e,
        anisotropic: parseFloat(d.get())
      })), t.texture.setSize(x, x), n.fillStyle = "transparent", n.clearRect(0, 0, x, x), n.fillStyle = "rgba(255,255,255,255)";
      let r = t.fontSize + 40,
        s = F(r, !0);
      for (; !s.fits;) s = F(r -= 5, !0);
      F(r, !1), n.restore(), t.texture.initTexture(t.canvas, e), t.texture.unpackAlpha = !0, g.set(t.texture), t.lastChange = CABLES.now(), _ = !0, C = !1
    }
    n.onTriggered = function() {
      S && (W(), S = !1);
      const e = L();
      if (e.lastChange != R && (_ = !0, R = e.lastChange), C && U(), _ && W(), M && M.numInstances > 0) {
        I.pushBlendMode(CGL.BLEND_NORMAL, !0), I.setShader(y), I.setTexture(0, g.get().tex);
        const e = p.get();
        e && I.setTexture(1, e.tex);
        const t = f.get();
        t && I.setTexture(2, t.tex), 2 === P ? vec3.set(w, 0, V, 0) : 1 === P ? vec3.set(w, 0, 0, 0) : 0 === P && vec3.set(w, 0, V / 2, 0), w[1] -= u.get(), I.pushModelMatrix(), mat4.translate(I.mMatrix, I.mMatrix, w), G || M.render(I.getShader()), I.popModelMatrix(), I.setTexture(0, null), I.setPreviousShader(), I.popBlendMode()
      }
      m.trigger()
    }, c.onChange = function() {
      _ = !0
    }
  }, Ops.Gl.Meshes.TextMesh_v2.prototype = new CABLES.Op, CABLES.OPS["2390f6b3-2122-412e-8c8d-5c2f574e8bd1"] = {
    f: Ops.Gl.Meshes.TextMesh_v2,
    objName: "Ops.Gl.Meshes.TextMesh_v2"
  }, Ops.Html.HyperLink_v2 = function() {
    CABLES.Op.apply(this, arguments);
    const e = this.inTrigger("Open"),
      t = this.inString("URL", "https://cables.gl"),
      a = this.inString("Target Name", "_self"),
      n = this.inString("Specs", "");
    e.onTriggered = function() {
      window.open(t.get(), a.get(), n.get())
    }
  }, Ops.Html.HyperLink_v2.prototype = new CABLES.Op, CABLES.OPS["a669d4f7-1e35-463c-bf8b-08c9f1b68e04"] = {
    f: Ops.Html.HyperLink_v2,
    objName: "Ops.Html.HyperLink_v2"
  }, Ops.Gl.Matrix.ScreenCoordinates = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inTrigger("Execute"),
      a = e.outTrigger("Trigger"),
      n = e.outValue("X"),
      o = e.outValue("Y"),
      r = e.outValue("Visible"),
      s = e.patch.cgl,
      i = vec3.create(),
      l = mat4.create(),
      u = vec3.create(),
      c = vec3.create();
    t.onTriggered = function() {
      mat4.multiply(l, s.vMatrix, s.mMatrix), vec3.transformMat4(u, c, l), vec3.transformMat4(i, u, s.pMatrix);
      const e = s.getViewPort(),
        t = i[0] * e[2] / 2 + e[2] / 2,
        b = i[1] * e[3] / 2 + e[3] / 2;
      n.set(t / s.pixelDensity), o.set(b / s.pixelDensity), r.set(u[2] < 0 && t > 0 && t < e[2] && b > 0 && b < e[3]), a.trigger()
    }
  }, Ops.Gl.Matrix.ScreenCoordinates.prototype = new CABLES.Op, CABLES.OPS["75cadc63-62bb-4ddd-b519-aa99568a1e6b"] = {
    f: Ops.Gl.Matrix.ScreenCoordinates,
    objName: "Ops.Gl.Matrix.ScreenCoordinates"
  }, Ops.String.String_v2 = function() {
    CABLES.Op.apply(this, arguments);
    const e = this.inString("value", ""),
      t = this.outString("String");
    e.onChange = function() {
      t.set(e.get())
    }
  }, Ops.String.String_v2.prototype = new CABLES.Op, CABLES.OPS["d697ff82-74fd-4f31-8f54-295bc64e713d"] = {
    f: Ops.String.String_v2,
    objName: "Ops.String.String_v2"
  }, Ops.Value.ColorValue = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inValueSlider("r", Math.random()),
      a = e.inValueSlider("g", Math.random()),
      n = e.inValueSlider("b", Math.random());
    t.setUiAttribs({
      colorPick: !0
    });
    const o = e.inValueSlider("a"),
      r = e.outValue("outr"),
      s = e.outValue("outg"),
      i = e.outValue("outb"),
      l = e.outValue("outa"),
      u = e.outValue("Hex", "000000"),
      c = e.outArray("Array");

    function b(e) {
      var t = Math.round(255 * e).toString(16);
      return 1 === t.length && (t = "0" + t), t.toUpperCase()
    }

    function d() {
      r.set(t.get()), s.set(a.get()), i.set(n.get()), l.set(o.get());
      var e = b(t.get()) + b(a.get()) + b(n.get());
      u.set(e), c.set([t.get(), a.get(), n.get()])
    }
    t.onChange = a.onChange = n.onChange = o.onChange = d, d()
  }, Ops.Value.ColorValue.prototype = new CABLES.Op, CABLES.OPS["7caa37c8-f2a7-49f2-a29c-96af362abca0"] = {
    f: Ops.Value.ColorValue,
    objName: "Ops.Value.ColorValue"
  }, Ops.Anim.BoolAnim = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = new CABLES.Anim,
      a = e.inTrigger("exe"),
      n = e.inValueBool("bool"),
      o = t.createPort(e, "easing"),
      r = e.inValue("duration", .5),
      s = e.inValueSelect("Direction", ["Animate Both", "Only True", "Only False"], "Both"),
      i = e.inValue("value false", 0),
      l = e.inValue("value true", 1),
      u = e.outTrigger("trigger"),
      c = e.outValue("value"),
      b = e.outValueBool("finished"),
      d = e.outTrigger("Finished Trigger"),
      p = CABLES.now();

    function f() {
      b.set(!1);
      const e = (CABLES.now() - p) / 1e3,
        a = t.getValue(e);
      t.clear(), t.setValue(e, a), n.get() ? "Only False" != s.get() ? t.setValue(e + r.get(), l.get()) : t.setValue(e, l.get()) : "Only True" != s.get() ? t.setValue(e + r.get(), i.get()) : t.setValue(e, i.get())
    }
    e.toWorkPortsNeedToBeLinked(a), e.setPortGroup("Animation", [r, o]), e.setPortGroup("Values", [i, l]), s.onChange = n.onChange = i.onChange = l.onChange = r.onChange = f, f(), a.onTriggered = function() {
      const e = (CABLES.now() - p) / 1e3;
      c.set(t.getValue(e)), t.hasEnded(e) && (b.get() || d.trigger(), b.set(!0)), u.trigger()
    }
  }, Ops.Anim.BoolAnim.prototype = new CABLES.Op, CABLES.OPS["06ad9d35-ccf5-4d31-889c-e23fa062588a"] = {
    f: Ops.Anim.BoolAnim,
    objName: "Ops.Anim.BoolAnim"
  }, Ops.Gl.PixelProjection = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inTrigger("render"),
      a = e.inBool("use viewport size", !0),
      n = e.inValue("Width", 500),
      o = e.inValue("Height", 500),
      r = e.inValue("frustum near", -500),
      s = e.inValue("frustum far", 500),
      i = e.inBool("Flip X", !1),
      l = e.inBool("Flip Y", !1),
      u = (e.inBool("Zero Y", !1), e.outTrigger("trigger")),
      c = e.patch.cgl;

    function b() {
      n.setUiAttribs({
        greyout: a.get()
      }), o.setUiAttribs({
        greyout: a.get()
      })
    }
    e.setPortGroup("Canvas size", [a, n, o]), e.setPortGroup("Clipping", [r, s]), e.setPortGroup("Flip", [i, l]), e.toWorkPortsNeedToBeLinked(t), t.onTriggered = function() {
      let e = 0,
        t = 0,
        b = 0,
        d = 0;
      a.get() ? (b = c.getViewPort()[2] / c.pixelDensity, d = c.getViewPort()[3] / c.pixelDensity) : (b = n.get(), d = o.get());
      if (i.get()) {
        const t = b;
        b = 0, e = t
      }
      if (l.get()) {
        const e = d;
        d = 0, t = e
      }
      c.pushPMatrix(), mat4.ortho(c.pMatrix, e, b, t, d, parseFloat(r.get()), parseFloat(s.get())), u.trigger(), c.popPMatrix()
    }, a.onChange = b, b()
  }, Ops.Gl.PixelProjection.prototype = new CABLES.Op, CABLES.OPS["949d6daf-d677-4ed6-a921-51a5732b64ac"] = {
    f: Ops.Gl.PixelProjection,
    objName: "Ops.Gl.PixelProjection"
  }, Ops.Gl.InteractiveRectangle_v2 = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inTrigger("Trigger in"),
      a = e.outTrigger("Trigger out"),
      n = e.inValue("Width", 1),
      o = e.inValue("Height", 1),
      r = e.inString("ID"),
      s = e.inString("Class"),
      i = e.inValueSelect("Pivot x", ["center", "left", "right"]),
      l = e.inValueSelect("Pivot y", ["center", "top", "bottom"]),
      u = e.inValueSelect("Axis", ["xy", "xz"]),
      c = e.inValueBool("Is Interactive", !0),
      b = e.inValueBool("Render Rectangle", !0),
      d = e.inValueBool("Show Boundings", !0),
      p = e.inValueSelect("Cursor", ["auto", "crosshair", "pointer", "Hand", "move", "n-resize", "ne-resize", "e-resize", "se-resize", "s-resize", "sw-resize", "w-resize", "nw-resize", "text", "wait", "help", "none"], "pointer"),
      f = e.inValueBool("Render", !0),
      m = e.outObject("geometry");
    m.ignoreValueSerialize = !0;
    const g = e.outValue("Pointer Hover", !1),
      v = e.outValue("Pointer Down", !1),
      h = e.outValue("Pointer X"),
      O = e.outValue("Pointer Y"),
      I = e.outValue("Top"),
      x = e.outValue("Left"),
      A = e.outValue("Right"),
      S = e.outValue("Bottom"),
      j = e.outTrigger("Left Click"),
      P = e.outObject("Dom Element");
    f.setUiAttribs({
      title: "Active"
    });
    const M = e.patch.cgl;
    u.set("xy"), i.set("center"), l.set("center");
    const _ = new CGL.Geometry;
    let C = null,
      T = null;
    mat4.create();
    const L = mat4.create(),
      y = vec3.create(),
      k = vec3.create(),
      E = vec3.create();
    u.onChange = B, i.onChange = B, l.onChange = B, n.onChange = B, o.onChange = B, p.onChange = F, B();
    mat4.create(), mat4.create(), vec3.create();

    function B() {
      let e = n.get(),
        t = o.get(),
        a = 0,
        r = 0;
      "string" == typeof e && (e = parseFloat(e)), "string" == typeof t && (t = parseFloat(t)), "center" == i.get() && (a = 0, k[0] = -e / 2), "right" == i.get() && (a = -e / 2), "left" == i.get() && (a = e / 2), "center" == l.get() && (r = 0, k[1] = -t / 2), "top" == l.get() && (r = -t / 2), "bottom" == l.get() && (r = +t / 2);
      const s = [],
        c = [],
        b = [],
        d = [],
        p = e / 1,
        f = t / 1;
      let g, v;
      for (v = 0; v <= 1; v++)
        for (g = 0; g <= 1; g++) s.push(g * p - n.get() / 2 + a), "xz" == u.get() && s.push(0), s.push(v * f - o.get() / 2 + r), "xy" == u.get() && s.push(0), c.push(g / 1), c.push(1 - v / 1), "xz" == u.get() && (b.push(0), b.push(1), b.push(0)), "xy" == u.get() && (b.push(0), b.push(0), b.push(-1));
      for (g = 0; g < 1; g++)
        for (v = 0; v < 1; v++) {
          const e = g + 2 * v,
            t = e,
            a = e + 1,
            n = e + 1 + 1,
            o = e + 1 + 1 + 1;
          d.push(t), d.push(n), d.push(a), d.push(a), d.push(n), d.push(o)
        }
      _.clear(), _.vertices = s, _.texCoords = c, _.verticesIndices = d, _.vertexNormals = b, C ? C.setGeom(_) : C = new CGL.Mesh(M, _), m.set(null), m.set(_)
    }
    t.onTriggered = function() {
      T || (! function() {
        if (!T) {
          (T = document.createElement("div")).dataset.op = e.id, T.oncontextmenu = function(e) {
            e.preventDefault()
          }, T.style.padding = "0px", T.style.position = "absolute", T.style["box-sizing"] = "border-box", T.style.border = "1px solid red", T.style["z-index"] = "1000", T.style["-webkit-user-select"] = "none", T.style["user-select"] = "none", T.style["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", T.style["-webkit-touch-callout"] = "none";
          const t = e.patch.cgl.canvas.parentElement;
          t.appendChild(T), F(), Q(), U(), X()
        }
        D(), P.set(T)
      }(), te(), W(), Q()), D(), f.get() && b.get() && C && C.render(M.getShader()), a.trigger()
    };
    let N = 0,
      V = 0,
      w = 0,
      R = 0;
    const G = mat4.create();

    function W() {
      T && (d.get() ? T.style.border = "1px solid red" : T.style.border = "none")
    }

    function F() {
      T && (T.style.cursor = p.get())
    }

    function U() {
      T && T.setAttribute("id", r.get())
    }

    function D() {
      mat4.multiply(G, M.vMatrix, M.mMatrix), vec3.transformMat4(y, k, G), vec3.transformMat4(L, y, M.pMatrix);
      const t = L[0] * M.canvasWidth / 2 + M.canvasWidth / 2,
        a = L[1] * M.canvasHeight / 2 + M.canvasHeight / 2;
      E[0] = k[0] + n.get(), E[1] = k[1], vec3.transformMat4(y, E, G), vec3.transformMat4(L, y, M.pMatrix);
      const r = L[0] * M.canvasWidth / 2 + M.canvasWidth / 2,
        s = L[1] * M.canvasHeight / 2 + M.canvasHeight / 2;
      E[0] = k[0], E[1] = k[1] + o.get(), vec3.transformMat4(y, E, G), vec3.transformMat4(L, y, M.pMatrix);
      const i = L[0] * M.canvasWidth / 2 + M.canvasWidth / 2,
        l = L[1] * M.canvasHeight / 2 + M.canvasHeight / 2;
      E[0] = k[0] + n.get(), E[1] = k[1] + o.get(), vec3.transformMat4(y, E, G), vec3.transformMat4(L, y, M.pMatrix);
      const u = L[0] * M.canvasWidth / 2 + M.canvasWidth / 2,
        c = L[1] * M.canvasHeight / 2 + M.canvasHeight / 2;
      N = Math.min(t, r, i, u), V = Math.min(M.canvasHeight - a, M.canvasHeight - s, M.canvasHeight - l, M.canvasHeight - c);
      const b = Math.max(t, r, i, u),
        d = Math.max(M.canvasHeight - a, M.canvasHeight - s, M.canvasHeight - l, M.canvasHeight - c);
      I.set(V), x.set(N), A.set(b), S.set(d), w = Math.abs(b - N), R = Math.abs(d - V), N /= e.patch.cgl.pixelDensity, V /= e.patch.cgl.pixelDensity, w /= e.patch.cgl.pixelDensity, R /= e.patch.cgl.pixelDensity;
      const p = N + "px",
        f = V + "px",
        m = w + "px",
        g = R + "px";
      p != T.style.left && (T.style.left = p), f != T.style.top && (T.style.top = f), T.style.width != m && (T.style.width = m), T.style.height != g && (T.style.height = g)
    }

    function X() {
      T && (T.className = s.get())
    }
    d.onChange = W, r.onChange = U, s.onChange = X, e.onDelete = function() {
      T && T.remove()
    };
    let Y = null;

    function H(e) {
      n.get(), o.get();
      h.set(Math.max(0, Math.min(1, e.offsetX / w))), O.set(Math.max(0, Math.min(1, 1 - e.offsetY / R)))
    }

    function z(e) {
      v.set(!1), g.set(!1)
    }

    function Z(e) {
      g.set(!0)
    }

    function q(e) {
      v.set(!0)
    }

    function K(e) {
      v.set(!1)
    }

    function $(e) {
      j.trigger()
    }

    function J(e) {
      if (document.elementFromPoint(e.targetTouches[0].pageX, e.targetTouches[0].pageY) == T) {
        if (g.set(!0), e.touches && e.touches.length > 0) {
          const t = T.getBoundingClientRect(),
            a = e.targetTouches[0].pageX - t.left,
            n = e.targetTouches[0].pageY - t.top,
            o = e.touches[0];
          h.set(Math.max(0, Math.min(1, a / w))), O.set(Math.max(0, Math.min(1, 1 - n / R))), H(o)
        }
      } else g.set(!1)
    }

    function Q() {
      c.get() ? (te(), T && (T.style["pointer-events"] = "initial")) : (ee(), v.set(!1), g.set(!1), T && (T.style["pointer-events"] = "none"))
    }

    function ee() {
      Y && (document.removeEventListener("touchmove", J), Y.removeEventListener("touchend", K), Y.removeEventListener("touchstart", q), Y.removeEventListener("click", $), Y.removeEventListener("mousemove", H), Y.removeEventListener("mouseleave", z), Y.removeEventListener("mousedown", q), Y.removeEventListener("mouseup", K), Y.removeEventListener("mouseenter", Z), Y = null)
    }

    function te() {
      Y && ee(), (Y = T) && (document.addEventListener("touchmove", J), Y.addEventListener("touchend", K), Y.addEventListener("touchstart", q), Y.addEventListener("click", $), Y.addEventListener("mousemove", H), Y.addEventListener("mouseleave", z), Y.addEventListener("mousedown", q), Y.addEventListener("mouseup", K), Y.addEventListener("mouseenter", Z))
    }
    f.onChange = function() {
      f.get() ? (te(), T && (T.style.display = "block")) : (ee(), T && (T.style.display = "none"))
    }, c.onChange = Q
  }, Ops.Gl.InteractiveRectangle_v2.prototype = new CABLES.Op, CABLES.OPS["334728ca-60a2-4a42-a059-d9b5f3fe4d32"] = {
    f: Ops.Gl.InteractiveRectangle_v2,
    objName: "Ops.Gl.InteractiveRectangle_v2"
  }, Ops.Anim.Smooth = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inTrigger("Update"),
      a = e.inBool("Separate inc/dec", !1),
      n = e.inValue("Value"),
      o = e.outTrigger("Next"),
      r = e.inValue("Inc factor", 4),
      s = e.inValue("Dec factor", 4),
      i = e.outValue("Result", 0);
    let l, u, c = 0,
      b = 0,
      d = 0,
      p = 0;
    e.toWorkPortsNeedToBeLinked(t);
    let f = 4,
      m = 0;
    const g = 0,
      v = 1;

    function h() {
      const e = a.get();
      !1 === e ? m = g : !0 === e && (m = v), m == g ? (s.setUiAttribs({
        greyout: !0
      }), r.setUiAttribs({
        title: "Inc/Dec factor"
      })) : m == v && (s.setUiAttribs({
        greyout: !1
      }), r.setUiAttribs({
        title: "Inc factor"
      })), O(), I()
    }

    function O() {
      m == g ? (l = r.get(), u = r.get()) : m == v && (l = r.get(), u = s.get()), (l <= .2 || l != l) && (l = .2), (u <= .2 || u != u) && (u = .2)
    }

    function I() {
      let e = 1;
      performance.now() - p > 500 || 0 === p ? c = n.get() : e = (performance.now() - p) / (performance.now() - p), p = performance.now(), f <= 0 && (f = 1e-4);
      const t = b - c;
      (c += t >= 0 ? t / (u * e) : t / (l * e)) > 0 && c < 1e-9 && (c = 0), f != f && (c = 0), c == c && c != -1 / 0 && c != 1 / 0 || (c = n.get()), d != c && (i.set(c), d = c), o.trigger()
    }
    h(), O(), a.setUiAttribs({
      hidePort: !0
    }), r.onChange = s.onChange = O, a.onChange = h, I(), n.onChange = function() {
      b = n.get()
    }, r.onChange = function() {
      O()
    }, t.onTriggered = function() {
      I()
    }
  }, Ops.Anim.Smooth.prototype = new CABLES.Op, CABLES.OPS["5677b5b5-753a-4fbf-9e91-64c81ec68a2f"] = {
    f: Ops.Anim.Smooth,
    objName: "Ops.Anim.Smooth"
  }, Ops.Value.Number = function() {
    CABLES.Op.apply(this, arguments);
    const e = this.inValueFloat("value"),
      t = this.outValue("result");
    e.onChange = function() {
      t.set(e.get())
    }
  }, Ops.Value.Number.prototype = new CABLES.Op, CABLES.OPS["8fb2bb5d-665a-4d0a-8079-12710ae453be"] = {
    f: Ops.Value.Number,
    objName: "Ops.Value.Number"
  }, Ops.Devices.Mouse.Mouse_v2 = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inValueBool("Active", !0),
      a = e.inValueBool("relative"),
      n = e.inValueBool("normalize"),
      o = e.inValueBool("flip y", !0),
      r = e.inValueSelect("Area", ["Canvas", "Document", "Parent Element"], "Canvas"),
      s = e.inBool("right click prevent default", !0),
      i = e.inValueBool("Touch support", !0),
      l = e.inValueBool("smooth"),
      u = e.inValueFloat("smoothSpeed", 20),
      c = e.inValueFloat("multiply", 1),
      b = e.outValue("x", 0),
      d = e.outValue("y", 0),
      p = e.outValueBool("button down"),
      f = e.outTrigger("click"),
      m = e.outTrigger("Button Up"),
      g = e.outTrigger("click right"),
      v = e.outValueBool("mouseOver"),
      h = e.outValue("button");
    e.setPortGroup("Behavior", [a, n, o, r, s, i]), e.setPortGroup("Smoothing", [l, u, c]);
    let O = 0;
    const I = e.patch.cgl;
    let x = null;

    function A(e, t) {
      if (n.get()) {
        let a = I.canvas.width / I.pixelDensity,
          n = I.canvas.height / I.pixelDensity;
        x == document.body && (a = x.clientWidth / I.pixelDensity, n = x.clientHeight / I.pixelDensity), b.set(((e || 0) / a * 2 - 1) * c.get()), d.set(((t || 0) / n * 2 - 1) * c.get())
      } else b.set((e || 0) * c.get()), d.set((t || 0) * c.get())
    }
    l.onChange = function() {
      l.get() ? O = setInterval(k, 5) : O && clearTimeout(O)
    };
    let S = 0,
      j = 0;
    n.onChange = function() {
      A(P = 0, M = 0)
    };
    var P = I.canvas.width / 2,
      M = I.canvas.height / 2;
    S = P, j = M, b.set(P), d.set(M);
    let _ = 0,
      C = 0,
      T = 0,
      L = 0;
    D(), r.onChange = D;
    let y = 0;

    function k() {
      (y = u.get()) <= 0 && (y = .01);
      const e = Math.abs(P - S),
        t = Math.round(e / y, 0);
      S = S < P ? S + t : S - t;
      const a = Math.abs(M - j),
        n = Math.round(a / y, 0);
      A(S, j = j < M ? j + n : j - n)
    }

    function E(e) {
      p.set(!1), v.set(!0), y = u.get()
    }

    function B(e) {
      h.set(e.which), p.set(!0)
    }

    function N(e) {
      h.set(0), p.set(!1), m.trigger()
    }

    function V(e) {
      g.trigger(), s.get() && e.preventDefault()
    }

    function w(e) {
      f.trigger()
    }

    function R(e) {
      _ = 0, C = 0, y = 100, v.set(!1), p.set(!1)
    }

    function G(e) {
      v.set(!0), a.get() ? (0 != _ && 0 != C && (T = e.offsetX - _, L = e.offsetY - C), _ = e.offsetX, C = e.offsetY, P += T, (M += L) > 460 && (M = 460)) : ("Document" != r.get() ? (T = e.offsetX, L = e.offsetY) : (T = e.clientX, L = e.clientY), l.get() ? (P = T, M = o.get() ? x.clientHeight - L : L) : o.get() ? A(T, x.clientHeight - L) : A(T, L))
    }

    function W(e) {
      p.set(!0), e.touches && e.touches.length > 0 && B(e.touches[0])
    }

    function F(e) {
      p.set(!1), N()
    }

    function U() {
      x && (x.removeEventListener("touchend", F), x.removeEventListener("touchstart", W), x.removeEventListener("click", w), x.removeEventListener("mousemove", G), x.removeEventListener("mouseleave", R), x.removeEventListener("mousedown", B), x.removeEventListener("mouseup", N), x.removeEventListener("mouseenter", E), x.removeEventListener("contextmenu", V), x = null)
    }

    function D() {
      !x && t.get() || U(), t.get() && (x = I.canvas, "Document" == r.get() && (x = document.body), "Parent Element" == r.get() && (x = I.canvas.parentElement), i.get() && (x.addEventListener("touchend", F), x.addEventListener("touchstart", W)), x.addEventListener("click", w), x.addEventListener("mousemove", G), x.addEventListener("mouseleave", R), x.addEventListener("mousedown", B), x.addEventListener("mouseup", N), x.addEventListener("mouseenter", E), x.addEventListener("contextmenu", V))
    }
    a.onChange = function() {
      T = 0, L = 0
    }, i.onChange = function() {
      U(), D()
    }, t.onChange = function() {
      x && U(), t.get() && D()
    }, e.onDelete = function() {
      U()
    }, D()
  }, Ops.Devices.Mouse.Mouse_v2.prototype = new CABLES.Op, CABLES.OPS["9fa3fc46-3147-4e3a-8ee8-a93ea9e8786e"] = {
    f: Ops.Devices.Mouse.Mouse_v2,
    objName: "Ops.Devices.Mouse.Mouse_v2"
  }, Ops.Math.ApproachInterpolation = function() {
    CABLES.Op.apply(this, arguments);
    const e = this;
    var t = 5,
      a = e.inTrigger("Update"),
      n = e.inValue("Value"),
      o = e.outTrigger("Next"),
      r = e.inValue("Divisor", t),
      s = e.outValue("Result", 0),
      i = 0,
      l = 0,
      u = 0;
    n.onChange = function() {
      l = n.get()
    }, r.onChange = function() {
      0 == (t = r.get()) && (t = 5)
    };
    var c = 0;
    a.onTriggered = function() {
      CABLES.now() - u > 500 && (i = n.get()), u = CABLES.now(), t <= 0 && (t = 1e-4), (i += (l - i) / t) > 0 && i < 1e-9 && (i = 0), t != t && (i = 0), c != i && (s.set(i), c = i), o.trigger()
    }
  }, Ops.Math.ApproachInterpolation.prototype = new CABLES.Op, CABLES.OPS["eb4aa728-d0ee-4c53-833d-d0b086b11250"] = {
    f: Ops.Math.ApproachInterpolation,
    objName: "Ops.Math.ApproachInterpolation"
  }, Ops.Math.DeltaSum = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inValue("Delta Value"),
      a = e.inValue("Default Value", 0),
      n = e.inTriggerButton("Reset"),
      o = e.inValueBool("Limit", !1),
      r = e.inValue("Min", 0),
      s = e.inValue("Max", 100),
      i = e.inValue("Multiply", 1);
    t.changeAlways = !0;
    var l = 0,
      u = e.outValue("Absolute Value");

    function c() {
      var e = a.get();
      o.get() && (e = Math.max(r.get(), e), e = Math.min(s.get(), e)), l = e, u.set(l)
    }

    function b() {
      o.get() ? (r.setUiAttribs({
        greyout: !1
      }), s.setUiAttribs({
        greyout: !1
      })) : (r.setUiAttribs({
        greyout: !0
      }), s.setUiAttribs({
        greyout: !0
      }))
    }
    o.onChange = b, b(), a.onChange = c, n.onTriggered = c, t.onChange = function() {
      l += t.get() * i.get(), o.get() && (l < r.get() && (l = r.get()), l > s.get() && (l = s.get())), u.set(l)
    }
  }, Ops.Math.DeltaSum.prototype = new CABLES.Op, CABLES.OPS["d9d4b3db-c24b-48da-b798-9e6230d861f7"] = {
    f: Ops.Math.DeltaSum,
    objName: "Ops.Math.DeltaSum"
  }, Ops.Devices.Mouse.MouseWheel_v2 = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inValue("Speed", 1),
      a = e.inValueBool("prevent scroll", !0),
      n = e.inValueBool("Flip Direction"),
      o = e.inBool("Simple Delta", !1),
      r = e.inSwitch("Area", ["Canvas", "Document"], "Canvas"),
      s = e.inValueBool("active", !0),
      i = e.outValue("delta", 0),
      l = e.outValue("delta X", 0),
      u = e.outValue("browser event delta", 0),
      c = e.patch.cgl;
    CABLES.now();
    let b = 1,
      d = null;
    r.onChange = g;
    v();
    window.chrome;
    const p = window.navigator;
    p.vendor, p.userAgent.indexOf("OPR"), p.userAgent.indexOf("Edge"), p.userAgent.match("CriOS"), window.navigator.userAgent.indexOf("Windows"), window.navigator.userAgent.indexOf("Linux"), window.navigator.userAgent.indexOf("Mac"), navigator.userAgent.search("Firefox");
    n.onChange = function() {
      b = n.get() ? -1 : 1
    };
    let f = 0;

    function m(e) {
      if (!(Date.now() - f < 10)) {
        if (f = Date.now(), u.set(e.wheelDelta || e.deltaY), e.deltaY) {
          let a = function(e) {
            let t = 0;
            return "detail" in e && (t = e.detail), "deltaY" in e && (t = e.deltaY, e.deltaY > 20 ? t = 20 : e.deltaY < -20 && (t = -20)), t
          }(e);
          o.get() ? a = a > 0 ? t.get() : -t.get() : a *= .01 * t.get(), i.set(0), i.set(a)
        }
        if (e.deltaX) {
          let a = function(e) {
            let t = 0;
            return "deltaX" in e && (t = e.deltaX, e.deltaX > 20 ? t = 20 : e.deltaX < -20 && (t = -20)), t
          }(e);
          a *= .01 * t.get(), l.set(0), l.set(a)
        }
        a.get() && e.preventDefault()
      }
    }

    function g() {
      d && d.removeEventListener("wheel", m), d = "Document" == r.get() ? document : c.canvas, s.get() && v()
    }

    function v() {
      d || g(), d.addEventListener("wheel", m, {
        passive: !1
      })
    }
    s.onChange = function() {
      g()
    }
  }, Ops.Devices.Mouse.MouseWheel_v2.prototype = new CABLES.Op, CABLES.OPS["7b9626db-536b-4bb4-85c3-95401bc60d1b"] = {
    f: Ops.Devices.Mouse.MouseWheel_v2,
    objName: "Ops.Devices.Mouse.MouseWheel_v2"
  }, Ops.Math.Divide = function() {
    CABLES.Op.apply(this, arguments);
    const e = this.inValueFloat("number1", 1),
      t = this.inValueFloat("number2", 2),
      a = this.outValue("result");

    function n() {
      a.set(e.get() / t.get())
    }
    e.onChange = t.onChange = n, n()
  }, Ops.Math.Divide.prototype = new CABLES.Op, CABLES.OPS["86fcfd8c-038d-4b91-9820-a08114f6b7eb"] = {
    f: Ops.Math.Divide,
    objName: "Ops.Math.Divide"
  }, Ops.Html.BrowserInfo_v3 = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.outBool("Is Mobile", !1),
      a = e.outBool("Is IE", !1),
      n = e.outBool("Is Edge", !1),
      o = e.outBool("Is Chrome", !1),
      r = e.outBool("Is Firefox", !1),
      s = e.outBool("Is Opera", !1),
      i = e.outBool("Is Safari", !1),
      l = e.outBool("Is Windows", !1),
      u = e.outBool("Is Linux", !1),
      c = e.outBool("Is Mac", !1),
      b = e.outBool("Is iOS", !1),
      d = e.outBool("Is Android", !1),
      p = e.outBool("Is Electron", !1),
      f = e.outString("Operating System", ""),
      m = e.outString("Browser Name", ""),
      g = e.outString("OS Version", ""),
      v = e.outString("Language"),
      h = e.outString("User Agent");
    e.setPortGroup("Browsers", [a, n, o, r, s, i]), e.setPortGroup("Operating Systems", [l, u, c, b, d, p]), e.setPortGroup("Textual Information", [f, m, v, g, h]);
    const O = platform,
      I = O.os.family,
      x = "Opera" === O.name,
      A = "Safari" === O.name,
      S = "IE" === O.name,
      j = "Microsoft Edge" === O.name,
      P = "Chrome" === O.name || "Chrome Mobile" === O.name,
      M = (O.layout, "Firefox" === O.name || "Firefox Mobile" === O.name || "Firefox for iOS" === O.name),
      _ = "Linux" === I || "Ubuntu" === I || "SuSE" === I || "Fedora" === I || "OpenBSD" === I || "Debian" === I || "Red Hat" === I,
      C = "Mac" === I || "Macintosh" === I || "Mac OS X" === I || "OS X" === I,
      T = "Windows" === I || "Windows 98;" === I,
      L = "Android" === I,
      y = "iOS" === I,
      k = "webOS" === I || "Windows Phone" === I || "Android" === I || "iOS" === I || "Chrome Mobile" === O.name || "Firefox for iOS" === O.name || "Firefox Mobile" === O.name || "IE Mobile" === O.name || "Opera Mobile" === O.name,
      E = "Electron" === O.name;
    t.set(k), a.set(S), n.set(j), o.set(P), r.set(M), s.set(x), i.set(A), c.set(C), u.set(_), l.set(T), b.set(y), d.set(L), p.set(E), v.set(navigator.language || navigator.userLanguage), h.set(O.ua), g.set(O.os.version), f.set(O.os.toString()), m.set(O.name)
  }, Ops.Html.BrowserInfo_v3.prototype = new CABLES.Op, CABLES.OPS["ec3e0121-b2c2-4c31-bbda-a6982080f73f"] = {
    f: Ops.Html.BrowserInfo_v3,
    objName: "Ops.Html.BrowserInfo_v3"
  }, Ops.Math.Subtract = function() {
    CABLES.Op.apply(this, arguments);
    const e = this.inValue("number1", 1),
      t = this.inValue("number2", 1),
      a = this.outValue("result");

    function n() {
      var n = e.get() - t.get();
      isNaN(n) || a.set(n)
    }
    e.onChange = n, t.onChange = n, n()
  }, Ops.Math.Subtract.prototype = new CABLES.Op, CABLES.OPS["a4ffe852-d200-4b96-9347-68feb01122ca"] = {
    f: Ops.Math.Subtract,
    objName: "Ops.Math.Subtract"
  }, Ops.Anim.LFO = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inValue("Time"),
      a = e.inValueSelect("Type", ["sine", "triangle", "ramp up", "ramp down", "block"], "sine"),
      n = e.inValue("Phase", 0),
      o = e.inValue("Amplitude", 1),
      r = e.outValue("Result");
    let s = 0;
    a.onChange = l, l();
    const i = Math.PI / 2;

    function l() {
      "sine" == a.get() && (t.onChange = f), "ramp up" == a.get() && (t.onChange = b), "ramp down" == a.get() && (t.onChange = d), "block" == a.get() && (t.onChange = c), "triangle" == a.get() && (t.onChange = p)
    }

    function u() {
      return t.get() + n.get()
    }

    function c() {
      var e = u() + .5;
      s = (s = e % 2) <= 1 ? -1 : 1, s *= o.get(), r.set(s)
    }

    function b() {
      var e = u() + 1;
      s = (e *= .5) % 1, s -= .5, s *= 2, s *= o.get(), r.set(s)
    }

    function d() {
      var e = u();
      s = e % 1, s -= .5, s *= -2, s *= o.get(), r.set(s)
    }

    function p() {
      var e = u();
      (s = e % 2) > 1 && (s = 2 - s), s -= .5, s *= 2, s *= o.get(), r.set(s)
    }

    function f() {
      var e = u() * Math.PI - i;
      s = Math.sin(e), s *= o.get(), r.set(s)
    }
  }, Ops.Anim.LFO.prototype = new CABLES.Op, CABLES.OPS["559bb980-78fb-47a7-a199-16f10808b150"] = {
    f: Ops.Anim.LFO,
    objName: "Ops.Anim.LFO"
  }, Ops.Math.MapRange = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.outValue("result");
    var a = e.inValueFloat("value"),
      n = e.inValueFloat("old min"),
      o = e.inValueFloat("old max"),
      r = e.inValueFloat("new min"),
      s = e.inValueFloat("new max"),
      i = e.inValueSelect("Easing", ["Linear", "Smoothstep", "Smootherstep"], "Linear");
    e.setPortGroup("Input Range", [n, o]), e.setPortGroup("Output Range", [r, s]);
    var l = 0,
      u = 0;

    function c() {
      if (a.get() >= Math.max(o.get(), n.get())) t.set(s.get());
      else if (a.get() <= Math.min(o.get(), n.get())) t.set(r.get());
      else {
        var e = r.get(),
          i = s.get(),
          c = n.get(),
          b = o.get(),
          d = a.get(),
          p = !1,
          f = Math.min(c, b),
          m = Math.max(c, b);
        f != c && (p = !0);
        var g = !1,
          v = Math.min(e, i),
          h = Math.max(e, i);
        v != e && (g = !0);
        var O = 0;
        O = p ? (m - d) * (h - v) / (m - f) : (d - f) * (h - v) / (m - f), u = g ? h - O : O + v, 0 === l ? t.set(u) : 1 == l ? (d = Math.max(0, Math.min(1, (u - e) / (i - e))), t.set(e + d * d * (3 - 2 * d) * (i - e))) : 2 == l && (d = Math.max(0, Math.min(1, (u - e) / (i - e))), t.set(e + d * d * d * (d * (6 * d - 15) + 10) * (i - e)))
      }
    }
    i.onChange = function() {
      l = "Smoothstep" == i.get() ? 1 : "Smootherstep" == i.get() ? 2 : 0
    }, a.set(0), n.set(0), o.set(1), r.set(-1), s.set(1), a.onChange = c, n.onChange = c, o.onChange = c, r.onChange = c, s.onChange = c, t.set(0), c()
  }, Ops.Math.MapRange.prototype = new CABLES.Op, CABLES.OPS["2617b407-60a0-4ff6-b4a7-18136cfa7817"] = {
    f: Ops.Math.MapRange,
    objName: "Ops.Math.MapRange"
  }, Ops.Math.Ease = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inValue("Value"),
      a = e.inValue("Min", 0),
      n = e.inValue("Max", 1),
      o = e.outValue("Result"),
      r = new CABLES.Anim;
    r.createPort(e, "Easing", function() {
      r.keys[0].setEasing(r.defaultEasing)
    }), r.setValue(0, 0), r.setValue(1, 1), e.onLoaded = a.onChange = n.onChange = function() {
      r.keys[0].time = r.keys[0].value = Math.min(a.get(), n.get()), r.keys[1].time = r.keys[1].value = Math.max(a.get(), n.get())
    }, t.onChange = function() {
      const e = r.getValue(t.get());
      o.set(e)
    }
  }, Ops.Math.Ease.prototype = new CABLES.Op, CABLES.OPS["8f6e4a08-33e6-408f-ac4a-198bd03b417b"] = {
    f: Ops.Math.Ease,
    objName: "Ops.Math.Ease"
  }, Ops.Ui.PatchInput = function() {
    CABLES.Op.apply(this, arguments);
    const e = this;
    e.getPatchOp = function() {
      for (var t in e.patch.ops)
        if (e.patch.ops[t].patchId && e.patch.ops[t].patchId.get() == e.uiAttribs.subPatch) return e.patch.ops[t]
    }
  }, Ops.Ui.PatchInput.prototype = new CABLES.Op, CABLES.OPS["e3f68bc3-892a-4c78-9974-aca25c27025d"] = {
    f: Ops.Ui.PatchInput,
    objName: "Ops.Ui.PatchInput"
  }, Ops.Ui.PatchOutput = function() {
    CABLES.Op.apply(this, arguments)
  }, Ops.Ui.PatchOutput.prototype = new CABLES.Op, CABLES.OPS["851b44cb-5667-4140-9800-5aeb7031f1d7"] = {
    f: Ops.Ui.PatchOutput,
    objName: "Ops.Ui.PatchOutput"
  }, Ops.Ui.SubPatch = function() {
    CABLES.Op.apply(this, arguments);
    const e = this;
    e.dyn = e.addInPort(new CABLES.Port(e, "create port", CABLES.OP_PORT_TYPE_DYNAMIC)), e.dynOut = e.addOutPort(new CABLES.Port(e, "create port out", CABLES.OP_PORT_TYPE_DYNAMIC));
    const t = e.addInPort(new CABLES.Port(e, "dataStr", CABLES.OP_PORT_TYPE_VALUE, {
      display: "readonly"
    }));
    e.patchId = e.addInPort(new CABLES.Port(e, "patchId", CABLES.OP_PORT_TYPE_VALUE, {
      display: "readonly"
    })), t.setUiAttribs({
      hideParam: !0
    }), e.patchId.setUiAttribs({
      hideParam: !0
    });
    let a = {
      ports: [],
      portsOut: []
    };
    e.patchId.onChange = function() {
      const t = e.patch.getSubPatchOps(n);
      if (2 == t.length)
        for (let a = 0; a < t.length; a++) e.patch.deleteOp(t[a].id)
    };
    var n = CABLES.generateUUID();
    e.patchId.set(n), e.onLoaded = function() {}, e.onLoadedValueSet = function() {
      (a = JSON.parse(t.get())) || (a = {
        ports: [],
        portsOut: []
      }), i()
    }, u(), l();
    let o = !1;

    function r() {
      t.set(JSON.stringify(a))
    }

    function s(e, t) {
      e.addEventListener("onUiAttrChange", function(t) {
        if (t.title) {
          let n = 0;
          for (n = 0; n < a.portsOut.length; n++) a.portsOut[n].name == e.name && (a.portsOut[n].title = t.title);
          for (n = 0; n < a.ports.length; n++) a.ports[n].name == e.name && (a.ports[n].title = t.title);
          r()
        }
      }), e.direction == CABLES.PORT_DIR_IN && (e.type == CABLES.OP_PORT_TYPE_FUNCTION ? e.onTriggered = function() {
        t.isLinked() && t.trigger()
      } : e.onChange = function() {
        t.set(e.get())
      })
    }

    function i() {
      if (!e.patchId.get()) return;
      const t = a.ports || [],
        n = a.portsOut || [];
      let r = 0;
      for (r = 0; r < t.length; r++)
        if (!e.getPortByName(t[r].name)) {
          const a = e.addInPort(new CABLES.Port(e, t[r].name, t[r].type)),
            n = u(),
            o = n.addOutPort(new CABLES.Port(n, t[r].name, t[r].type));
          a.ignoreValueSerialize = !0, a.setUiAttribs({
            editableTitle: !0
          }), t[r].title && (a.setUiAttribs({
            title: t[r].title
          }), o.setUiAttribs({
            title: t[r].title
          })), s(a, o)
        } for (r = 0; r < n.length; r++)
        if (!e.getPortByName(n[r].name)) {
          const t = e.addOutPort(new CABLES.Port(e, n[r].name, n[r].type)),
            a = l(),
            o = a.addInPort(new CABLES.Port(a, n[r].name, n[r].type));
          t.ignoreValueSerialize = !0, t.setUiAttribs({
            editableTitle: !0
          }), n[r].title && (t.setUiAttribs({
            title: n[r].title
          }), o.setUiAttribs({
            title: n[r].title
          })), s(o, t)
        } o = !0
    }

    function l() {
      let t = e.patch.getSubPatchOp(e.patchId.get(), "Ops.Ui.PatchOutput");
      return t || (e.patch.addOp("Ops.Ui.PatchOutput", {
        subPatch: e.patchId.get()
      }), (t = e.patch.getSubPatchOp(e.patchId.get(), "Ops.Ui.PatchOutput")) || e.warn("no patchinput2!")), t
    }

    function u() {
      let t = e.patch.getSubPatchOp(e.patchId.get(), "Ops.Ui.PatchInput");
      return t || (e.patch.addOp("Ops.Ui.PatchInput", {
        subPatch: e.patchId.get()
      }), (t = e.patch.getSubPatchOp(e.patchId.get(), "Ops.Ui.PatchInput")) || e.warn("no patchinput2!")), t
    }
    t.onChange = function() {
      o || t.get()
    }, e.dyn.onLinkChanged = function() {
      if (e.dyn.isLinked()) {
        const t = e.dyn.links[0].getOtherPort(e.dyn);
        e.dyn.removeLinks(), t.removeLinkTo(e.dyn);
        const n = "in" + a.ports.length + " " + t.parent.name + " " + t.name;
        a.ports.push({
          name: n,
          type: t.type
        }), i();
        gui.scene().link(t.parent, t.getName(), e, n);
        o = !0, r()
      } else setTimeout(function() {
        e.dyn.removeLinks(), gui.patch().removeDeadLinks()
      }, 100)
    }, e.dynOut.onLinkChanged = function() {
      if (e.dynOut.isLinked()) {
        const t = e.dynOut.links[0].getOtherPort(e.dynOut);
        e.dynOut.removeLinks(), t.removeLinkTo(e.dynOut);
        const n = "out" + a.ports.length + " " + t.parent.name + " " + t.name;
        a.portsOut.push({
          name: n,
          type: t.type
        }), i(), gui.scene().link(t.parent, t.getName(), e, n), o = !0, r()
      } else setTimeout(function() {
        e.dynOut.removeLinks(), gui.patch().removeDeadLinks()
      }, 100), e.log("dynOut unlinked...");
      gui.patch().removeDeadLinks()
    }, e.addSubLink = function(t, n) {
      const o = a.ports.length,
        s = "in" + (o - 1) + " " + n.parent.name + " " + n.name;
      if (t.direction == CABLES.PORT_DIR_IN) gui.scene().link(t.parent, t.getName(), u(), s);
      else gui.scene().link(t.parent, t.getName(), l(), "out" + o + " " + n.parent.name + " " + n.name);
      const i = gui.patch().getSubPatchBounds(e.patchId.get());
      return u().uiAttr({
        translate: {
          x: i.minx,
          y: i.miny - 100
        }
      }), l().uiAttr({
        translate: {
          x: i.minx,
          y: i.maxy + 100
        }
      }), r(), s
    }, e.onDelete = function() {
      for (let t = e.patch.ops.length - 1; t >= 0; t--) e.patch.ops[t].uiAttribs && e.patch.ops[t].uiAttribs.subPatch == e.patchId.get() && e.patch.deleteOp(e.patch.ops[t].id)
    }
  }, Ops.Ui.SubPatch.prototype = new CABLES.Op, CABLES.OPS["84d9a6f0-ed7a-466d-b386-225ed9e89c60"] = {
    f: Ops.Ui.SubPatch,
    objName: "Ops.Ui.SubPatch"
  }, Ops.Gl.ClearColor = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inTrigger("render"),
      a = e.outTrigger("trigger"),
      n = e.inFloatSlider("r", .1),
      o = e.inFloatSlider("g", .1),
      r = e.inFloatSlider("b", .1),
      s = e.inFloatSlider("a", 1);
    n.setUiAttribs({
      colorPick: !0
    });
    const i = e.patch.cgl;
    t.onTriggered = function() {
      i.gl.clearColor(n.get(), o.get(), r.get(), s.get()), i.gl.clear(i.gl.COLOR_BUFFER_BIT | i.gl.DEPTH_BUFFER_BIT), a.trigger()
    }
  }, Ops.Gl.ClearColor.prototype = new CABLES.Op, CABLES.OPS["19b441eb-9f63-4f35-ba08-b87841517c4d"] = {
    f: Ops.Gl.ClearColor,
    objName: "Ops.Gl.ClearColor"
  }, Ops.Value.FileInput_v2 = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inUrl("File"),
      a = e.outString("URL");
    t.onChange = function() {
      const n = e.patch.getFilePath(String(t.get()));
      a.set(n)
    }
  }, Ops.Value.FileInput_v2.prototype = new CABLES.Op, CABLES.OPS["3f20a79f-a35f-4a4d-b2f3-c46973a4531f"] = {
    f: Ops.Value.FileInput_v2,
    objName: "Ops.Value.FileInput_v2"
  }, Ops.Website.FilenameInfo = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inString("URL", ""),
      a = e.outString("Protocol"),
      n = e.outString("Host"),
      o = e.outString("Full Path"),
      r = e.outString("Filename"),
      s = e.outString("Is URL"),
      i = e.outString("Suffix");
    t.onChange = (() => {
      const e = t.get(),
        l = function(e) {
          try {
            new URL(e)
          } catch (e) {
            return !1
          }
          return !0
        }(e);
      if (s.set(l), e.indexOf(":") > -1) {
        const t = e.split(":");
        a.set(t[0])
      }
      if (e.indexOf("/") > -1) {
        const t = e.split("/");
        n.set(t[2])
      }
      if (e.indexOf(".") > -1) {
        const t = e.split(".");
        i.set(t[t.length - 1])
      } else i.set("");
      if (e.indexOf("/") > -1) {
        const t = e.split("/");
        r.set(t[t.length - 1]), t.length = t.length - 1;
        const a = t.join("/");
        o.set(a)
      } else l || r.set(e)
    })
  }, Ops.Website.FilenameInfo.prototype = new CABLES.Op, CABLES.OPS["0a349745-20c8-44c4-8a70-214c7ccf87e9"] = {
    f: Ops.Website.FilenameInfo,
    objName: "Ops.Website.FilenameInfo"
  }, Ops.Value.SwitchFile = function() {
    CABLES.Op.apply(this, arguments);
    const e = this;
    let t = e.inValueInt("Index"),
      a = [],
      n = e.outValue("Result");
    t.onChange = o;
    for (let t = 0; t < 10; t++) {
      let n = e.inFile("File " + t);
      a.push(n), n.onChange = o
    }

    function o() {
      const e = t.get();
      e >= 0 && a[e] && n.set(a[e].get())
    }
  }, Ops.Value.SwitchFile.prototype = new CABLES.Op, CABLES.OPS["ce6e3213-1ce0-4c90-a7d5-e5dc1c23fa63"] = {
    f: Ops.Value.SwitchFile,
    objName: "Ops.Value.SwitchFile"
  }, Ops.String.NumberToString_v2 = function() {
    CABLES.Op.apply(this, arguments);
    const e = this.inValue("Number"),
      t = this.outString("Result");

    function a() {
      t.set(String(e.get() || 0))
    }
    e.onChange = a, a()
  }, Ops.String.NumberToString_v2.prototype = new CABLES.Op, CABLES.OPS["5c6d375a-82db-4366-8013-93f56b4061a9"] = {
    f: Ops.String.NumberToString_v2,
    objName: "Ops.String.NumberToString_v2"
  }, Ops.Html.FontFile_v2 = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inUrl("file", [".otf", ".ttf", ".woff", ".woff2"]),
      a = e.inString("family"),
      n = e.outValue("Loaded"),
      o = e.outTrigger("Loaded Trigger");
    let r, s = null;

    function i() {
      if (t.get() && a.get())
        if (document.fonts) r = new FontFace(a.get(), "url(" + e.patch.getFilePath(String(t.get())) + ")"), s = e.patch.cgl.patch.loading.start("FontFile", t.get()), document.fonts.add(r), r.load(), r.loaded.then(t => {
          n.set(!0), o.trigger(), e.patch.cgl.patch.loading.finished(s), e.patch.emitEvent("fontLoaded", a.get())
        }, t => {
          e.setUiError("loadingerror", "Font loading error!" + r.status)
        });
        else {
          const n = e.patch.getFilePath(String(t.get())),
            o = "".endl() + "@font-face".endl() + "{".endl() + '  font-family: "' + a.get() + '";'.endl() + '  src: url("' + n + '") format("truetype");'.endl() + "}",
            r = document.createElement("style");
          r.type = "text/css", r.innerHTML = o, document.getElementsByTagName("head")[document.getElementsByTagName("head").length - 1].appendChild(r)
        }
    }
    t.onChange = function() {
      n.set(!1), i()
    }, a.onChange = i
  }, Ops.Html.FontFile_v2.prototype = new CABLES.Op, CABLES.OPS["68177370-116e-4c76-aef3-3b10d68e7227"] = {
    f: Ops.Html.FontFile_v2,
    objName: "Ops.Html.FontFile_v2"
  }, Ops.Ui.Comment_v2 = function() {
    CABLES.Op.apply(this, arguments);
    const e = this,
      t = e.inString("title", "New comment"),
      a = e.inTextarea("text");

    function n() {
      CABLES.UI && (e.uiAttr({
        comment_title: t.get(),
        comment_text: a.get()
      }), e.name = t.get())
    }
    e.init = t.onChange = a.onChange = e.onLoaded = n, n()
  }, Ops.Ui.Comment_v2.prototype = new CABLES.Op, CABLES.OPS["93492eeb-bf35-4a62-98f7-d85b0b79bfe5"] = {
    f: Ops.Ui.Comment_v2,
    objName: "Ops.Ui.Comment_v2"
  }, Ops.Math.Multiply = function() {
    CABLES.Op.apply(this, arguments);
    const e = this.inValueFloat("number1", 1),
      t = this.inValueFloat("number2", 2),
      a = this.outValue("result");

    function n() {
      const n = e.get(),
        o = t.get();
      a.set(n * o)
    }
    e.onChange = t.onChange = n, n()
  }, Ops.Math.Multiply.prototype = new CABLES.Op, CABLES.OPS["1bbdae06-fbb2-489b-9bcc-36c9d65bd441"] = {
    f: Ops.Math.Multiply,
    objName: "Ops.Math.Multiply"
  }, Ops.Vars.VarGetNumber_v2 = function() {
    CABLES.Op.apply(this, arguments);
    const e = this;
    var t = e.outValue("Value");
    e.varName = e.inValueSelect("Variable", [], "", !0), new CABLES.VarGetOpWrapper(e, "number", e.varName, t)
  }, Ops.Vars.VarGetNumber_v2.prototype = new CABLES.Op, CABLES.OPS["421f5b52-c0fa-47c4-8b7a-012b9e1c864a"] = {
    f: Ops.Vars.VarGetNumber_v2,
    objName: "Ops.Vars.VarGetNumber_v2"
  }, window.addEventListener("load", function(e) {
    CABLES.jsLoaded = new Event("CABLES.jsLoaded"), document.dispatchEvent(CABLES.jsLoaded)
  }),
  function() {
    "use strict";
    var e = {
        function: !0,
        object: !0
      },
      t = e[typeof window] && window || this,
      a = e[typeof exports] && exports,
      n = e[typeof module] && module && !module.nodeType && module,
      o = a && n && "object" == typeof global && global;
    !o || o.global !== o && o.window !== o && o.self !== o || (t = o);
    var r = Math.pow(2, 53) - 1,
      s = /\bOpera/,
      i = Object.prototype,
      l = i.hasOwnProperty,
      u = i.toString;

    function c(e) {
      return (e = String(e)).charAt(0).toUpperCase() + e.slice(1)
    }

    function b(e) {
      return e = g(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : c(e)
    }

    function d(e, t) {
      for (var a in e) l.call(e, a) && t(e[a], a, e)
    }

    function p(e) {
      return null == e ? c(e) : u.call(e).slice(8, -1)
    }

    function f(e) {
      return String(e).replace(/([ -])(?!$)/g, "$1?")
    }

    function m(e, t) {
      var a = null;
      return function(e, t) {
        var a = -1,
          n = e ? e.length : 0;
        if ("number" == typeof n && n > -1 && n <= r)
          for (; ++a < n;) t(e[a], a, e);
        else d(e, t)
      }(e, function(n, o) {
        a = t(a, n, o, e)
      }), a
    }

    function g(e) {
      return String(e).replace(/^ +| +$/g, "")
    }
    var v = function e(a) {
      var n = t,
        o = a && "object" == typeof a && "String" != p(a);
      o && (n = a, a = null);
      var r = n.navigator || {},
        i = r.userAgent || "";
      a || (a = i);
      var l, c, v, h, O, I = o ? !!r.likeChrome : /\bChrome\b/.test(a) && !/internal|\n/i.test(u.toString()),
        x = o ? "Object" : "ScriptBridgingProxyObject",
        A = o ? "Object" : "Environment",
        S = o && n.java ? "JavaPackage" : p(n.java),
        j = o ? "Object" : "RuntimeObject",
        P = /\bJava/.test(S) && n.java,
        M = P && p(n.environment) == A,
        _ = P ? "a" : "α",
        C = P ? "b" : "β",
        T = n.document || {},
        L = n.operamini || n.opera,
        y = s.test(y = o && L ? L["[[Class]]"] : p(L)) ? y : L = null,
        k = a,
        E = [],
        B = null,
        N = a == i,
        V = N && L && "function" == typeof L.version && L.version(),
        w = m([{
          label: "EdgeHTML",
          pattern: "Edge"
        }, "Trident", {
          label: "WebKit",
          pattern: "AppleWebKit"
        }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"], function(e, t) {
          return e || RegExp("\\b" + (t.pattern || f(t)) + "\\b", "i").exec(a) && (t.label || t)
        }),
        R = function(e) {
          return m(e, function(e, t) {
            return e || RegExp("\\b" + (t.pattern || f(t)) + "\\b", "i").exec(a) && (t.label || t)
          })
        }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
          label: "Microsoft Edge",
          pattern: "(?:Edge|Edg|EdgA|EdgiOS)"
        }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
          label: "Samsung Internet",
          pattern: "SamsungBrowser"
        }, "SeaMonkey", {
          label: "Silk",
          pattern: "(?:Cloud9|Silk-Accelerated)"
        }, "Sleipnir", "SlimBrowser", {
          label: "SRWare Iron",
          pattern: "Iron"
        }, "Sunrise", "Swiftfox", "Vivaldi", "Waterfox", "WebPositive", {
          label: "Yandex Browser",
          pattern: "YaBrowser"
        }, {
          label: "UC Browser",
          pattern: "UCBrowser"
        }, "Opera Mini", {
          label: "Opera Mini",
          pattern: "OPiOS"
        }, "Opera", {
          label: "Opera",
          pattern: "OPR"
        }, "Chromium", "Chrome", {
          label: "Chrome",
          pattern: "(?:HeadlessChrome)"
        }, {
          label: "Chrome Mobile",
          pattern: "(?:CriOS|CrMo)"
        }, {
          label: "Firefox",
          pattern: "(?:Firefox|Minefield)"
        }, {
          label: "Firefox for iOS",
          pattern: "FxiOS"
        }, {
          label: "IE",
          pattern: "IEMobile"
        }, {
          label: "IE",
          pattern: "MSIE"
        }, "Safari"]),
        G = U([{
          label: "BlackBerry",
          pattern: "BB10"
        }, "BlackBerry", {
          label: "Galaxy S",
          pattern: "GT-I9000"
        }, {
          label: "Galaxy S2",
          pattern: "GT-I9100"
        }, {
          label: "Galaxy S3",
          pattern: "GT-I9300"
        }, {
          label: "Galaxy S4",
          pattern: "GT-I9500"
        }, {
          label: "Galaxy S5",
          pattern: "SM-G900"
        }, {
          label: "Galaxy S6",
          pattern: "SM-G920"
        }, {
          label: "Galaxy S6 Edge",
          pattern: "SM-G925"
        }, {
          label: "Galaxy S7",
          pattern: "SM-G930"
        }, {
          label: "Galaxy S7 Edge",
          pattern: "SM-G935"
        }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
          label: "Kindle Fire",
          pattern: "(?:Cloud9|Silk-Accelerated)"
        }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
          label: "Wii U",
          pattern: "WiiU"
        }, "Wii", "Xbox One", {
          label: "Xbox 360",
          pattern: "Xbox"
        }, "Xoom"]),
        W = function(e) {
          return m(e, function(e, t, n) {
            return e || (t[G] || t[/^[a-z]+(?: +[a-z]+\b)*/i.exec(G)] || RegExp("\\b" + f(n) + "(?:\\b|\\w*\\d)", "i").exec(a)) && n
          })
        }({
          Apple: {
            iPad: 1,
            iPhone: 1,
            iPod: 1
          },
          Alcatel: {},
          Archos: {},
          Amazon: {
            Kindle: 1,
            "Kindle Fire": 1
          },
          Asus: {
            Transformer: 1
          },
          "Barnes & Noble": {
            Nook: 1
          },
          BlackBerry: {
            PlayBook: 1
          },
          Google: {
            "Google TV": 1,
            Nexus: 1
          },
          HP: {
            TouchPad: 1
          },
          HTC: {},
          Huawei: {},
          Lenovo: {},
          LG: {},
          Microsoft: {
            Xbox: 1,
            "Xbox One": 1
          },
          Motorola: {
            Xoom: 1
          },
          Nintendo: {
            "Wii U": 1,
            Wii: 1
          },
          Nokia: {
            Lumia: 1
          },
          Oppo: {},
          Samsung: {
            "Galaxy S": 1,
            "Galaxy S2": 1,
            "Galaxy S3": 1,
            "Galaxy S4": 1
          },
          Sony: {
            PlayStation: 1,
            "PlayStation Vita": 1
          },
          Xiaomi: {
            Mi: 1,
            Redmi: 1
          }
        }),
        F = function(e) {
          return m(e, function(e, t) {
            var n = t.pattern || f(t);
            return !e && (e = RegExp("\\b" + n + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a)) && (e = function(e, t, a) {
              var n = {
                "10.0": "10",
                6.4: "10 Technical Preview",
                6.3: "8.1",
                6.2: "8",
                6.1: "Server 2008 R2 / 7",
                "6.0": "Server 2008 / Vista",
                5.2: "Server 2003 / XP 64-bit",
                5.1: "XP",
                5.01: "2000 SP1",
                "5.0": "2000",
                "4.0": "NT",
                "4.90": "ME"
              };
              return t && a && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (n = n[/[\d.]+$/.exec(e)]) && (e = "Windows " + n), e = String(e), t && a && (e = e.replace(RegExp(t, "i"), a)), e = b(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
            }(e, n, t.label || t)), e
          })
        }(["Windows Phone", "KaiOS", "Android", "CentOS", {
          label: "Chrome OS",
          pattern: "CrOS"
        }, "Debian", {
          label: "DragonFly BSD",
          pattern: "DragonFly"
        }, "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);

      function U(e) {
        return m(e, function(e, t) {
          var n = t.pattern || f(t);
          return !e && (e = RegExp("\\b" + n + " *\\d+[.\\w_]*", "i").exec(a) || RegExp("\\b" + n + " *\\w+-[\\w]*", "i").exec(a) || RegExp("\\b" + n + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(a)) && ((e = String(t.label && !RegExp(n, "i").test(t.label) ? t.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]), t = t.label || t, e = b(e[0].replace(RegExp(n, "i"), t).replace(RegExp("; *(?:" + t + "[_-])?", "i"), " ").replace(RegExp("(" + t + ")[-_.]?(\\w)", "i"), "$1 $2"))), e
        })
      }

      function D(e) {
        return m(e, function(e, t) {
          return e || (RegExp(t + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(a) || 0)[1] || null
        })
      }
      if (w && (w = [w]), /\bAndroid\b/.test(F) && !G && (l = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(a)) && (G = g(l[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null), W && !G ? G = U([W]) : W && G && (G = G.replace(RegExp("^(" + f(W) + ")[-_.\\s]", "i"), W + " ").replace(RegExp("^(" + f(W) + ")[-_.]?(\\w)", "i"), W + " $2")), (l = /\bGoogle TV\b/.exec(G)) && (G = l[0]), /\bSimulator\b/i.test(a) && (G = (G ? G + " " : "") + "Simulator"), "Opera Mini" == R && /\bOPiOS\b/.test(a) && E.push("running in Turbo/Uncompressed mode"), "IE" == R && /\blike iPhone OS\b/.test(a) ? (W = (l = e(a.replace(/like iPhone OS/, ""))).manufacturer, G = l.product) : /^iP/.test(G) ? (R || (R = "Safari"), F = "iOS" + ((l = / OS ([\d_]+)/i.exec(a)) ? " " + l[1].replace(/_/g, ".") : "")) : "Konqueror" == R && /^Linux\b/i.test(F) ? F = "Kubuntu" : W && "Google" != W && (/Chrome/.test(R) && !/\bMobile Safari\b/i.test(a) || /\bVita\b/.test(G)) || /\bAndroid\b/.test(F) && /^Chrome/.test(R) && /\bVersion\//i.test(a) ? (R = "Android Browser", F = /\bAndroid\b/.test(F) ? F : "Android") : "Silk" == R ? (/\bMobi/i.test(a) || (F = "Android", E.unshift("desktop mode")), /Accelerated *= *true/i.test(a) && E.unshift("accelerated")) : "UC Browser" == R && /\bUCWEB\b/.test(a) ? E.push("speed mode") : "PaleMoon" == R && (l = /\bFirefox\/([\d.]+)\b/.exec(a)) ? E.push("identifying as Firefox " + l[1]) : "Firefox" == R && (l = /\b(Mobile|Tablet|TV)\b/i.exec(a)) ? (F || (F = "Firefox OS"), G || (G = l[1])) : !R || (l = !/\bMinefield\b/i.test(a) && /\b(?:Firefox|Safari)\b/.exec(R)) ? (R && !G && /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(l + "/") + 8)) && (R = null), (l = G || W || F) && (G || W || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(F)) && (R = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(F) ? F : l) + " Browser")) : "Electron" == R && (l = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) && E.push("Chromium " + l), V || (V = D(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)", "Version", f(R), "(?:Firefox|Minefield|NetFront)"])), (l = ("iCab" == w && parseFloat(V) > 3 ? "WebKit" : /\bOpera\b/.test(R) && (/\bOPR\b/.test(a) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(a) && !/^(?:Trident|EdgeHTML)$/.test(w) && "WebKit" || !w && /\bMSIE\b/i.test(a) && ("Mac OS" == F ? "Tasman" : "Trident") || "WebKit" == w && /\bPlayStation\b(?! Vita\b)/i.test(R) && "NetFront") && (w = [l]), "IE" == R && (l = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1]) ? (R += " Mobile", F = "Windows Phone " + (/\+$/.test(l) ? l : l + ".x"), E.unshift("desktop mode")) : /\bWPDesktop\b/i.test(a) ? (R = "IE Mobile", F = "Windows Phone 8.x", E.unshift("desktop mode"), V || (V = (/\brv:([\d.]+)/.exec(a) || 0)[1])) : "IE" != R && "Trident" == w && (l = /\brv:([\d.]+)/.exec(a)) && (R && E.push("identifying as " + R + (V ? " " + V : "")), R = "IE", V = l[1]), N) {
        if (h = "global", O = null != (v = n) ? typeof v[h] : "number", /^(?:boolean|number|string|undefined)$/.test(O) || "object" == O && !v[h]) p(l = n.runtime) == x ? (R = "Adobe AIR", F = l.flash.system.Capabilities.os) : p(l = n.phantom) == j ? (R = "PhantomJS", V = (l = l.version || null) && l.major + "." + l.minor + "." + l.patch) : "number" == typeof T.documentMode && (l = /\bTrident\/(\d+)/i.exec(a)) ? (V = [V, T.documentMode], (l = +l[1] + 4) != V[1] && (E.push("IE " + V[1] + " mode"), w && (w[1] = ""), V[1] = l), V = "IE" == R ? String(V[1].toFixed(1)) : V[0]) : "number" == typeof T.documentMode && /^(?:Chrome|Firefox)\b/.test(R) && (E.push("masking as " + R + " " + V), R = "IE", V = "11.0", w = ["Trident"], F = "Windows");
        else if (P && (k = (l = P.lang.System).getProperty("os.arch"), F = F || l.getProperty("os.name") + " " + l.getProperty("os.version")), M) {
          try {
            V = n.require("ringo/engine").version.join("."), R = "RingoJS"
          } catch (e) {
            (l = n.system) && l.global.system == n.system && (R = "Narwhal", F || (F = l[0].os || null))
          }
          R || (R = "Rhino")
        } else "object" == typeof n.process && !n.process.browser && (l = n.process) && ("object" == typeof l.versions && ("string" == typeof l.versions.electron ? (E.push("Node " + l.versions.node), R = "Electron", V = l.versions.electron) : "string" == typeof l.versions.nw && (E.push("Chromium " + V, "Node " + l.versions.node), R = "NW.js", V = l.versions.nw)), R || (R = "Node.js", k = l.arch, F = l.platform, V = (V = /[\d.]+/.exec(l.version)) ? V[0] : null));
        F = F && b(F)
      }
      if (V && (l = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(V) || /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (N && r.appMinorVersion)) || /\bMinefield\b/i.test(a) && "a") && (B = /b/i.test(l) ? "beta" : "alpha", V = V.replace(RegExp(l + "\\+?$"), "") + ("beta" == B ? C : _) + (/\d+\+?/.exec(l) || "")), "Fennec" == R || "Firefox" == R && /\b(?:Android|Firefox OS|KaiOS)\b/.test(F)) R = "Firefox Mobile";
      else if ("Maxthon" == R && V) V = V.replace(/\.[\d.]+/, ".x");
      else if (/\bXbox\b/i.test(G)) "Xbox 360" == G && (F = null), "Xbox 360" == G && /\bIEMobile\b/.test(a) && E.unshift("mobile mode");
      else if (!/^(?:Chrome|IE|Opera)$/.test(R) && (!R || G || /Browser|Mobi/.test(R)) || "Windows CE" != F && !/Mobi/i.test(a))
        if ("IE" == R && N) try {
          null === n.external && E.unshift("platform preview")
        } catch (e) {
          E.unshift("embedded")
        } else(/\bBlackBerry\b/.test(G) || /\bBB10\b/.test(a)) && (l = (RegExp(G.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) || 0)[1] || V) ? (F = ((l = [l, /BB10/.test(a)])[1] ? (G = null, W = "BlackBerry") : "Device Software") + " " + l[0], V = null) : this != d && "Wii" != G && (N && L || /Opera/.test(R) && /\b(?:MSIE|Firefox)\b/i.test(a) || "Firefox" == R && /\bOS X (?:\d+\.){2,}/.test(F) || "IE" == R && (F && !/^Win/.test(F) && V > 5.5 || /\bWindows XP\b/.test(F) && V > 8 || 8 == V && !/\bTrident\b/.test(a))) && !s.test(l = e.call(d, a.replace(s, "") + ";")) && l.name && (l = "ing as " + l.name + ((l = l.version) ? " " + l : ""), s.test(R) ? (/\bIE\b/.test(l) && "Mac OS" == F && (F = null), l = "identify" + l) : (l = "mask" + l, R = y ? b(y.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(l) && (F = null), N || (V = null)), w = ["Presto"], E.push(l));
        else R += " Mobile";
      (l = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1]) && (l = [parseFloat(l.replace(/\.(\d)$/, ".0$1")), l], "Safari" == R && "+" == l[1].slice(-1) ? (R = "WebKit Nightly", B = "alpha", V = l[1].slice(0, -1)) : V != l[1] && V != (l[2] = (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1]) || (V = null), l[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(a) || 0)[1], 537.36 == l[0] && 537.36 == l[2] && parseFloat(l[1]) >= 28 && "WebKit" == w && (w = ["Blink"]), N && (I || l[1]) ? (w && (w[1] = "like Chrome"), l = l[1] || ((l = l[0]) < 530 ? 1 : l < 532 ? 2 : l < 532.05 ? 3 : l < 533 ? 4 : l < 534.03 ? 5 : l < 534.07 ? 6 : l < 534.1 ? 7 : l < 534.13 ? 8 : l < 534.16 ? 9 : l < 534.24 ? 10 : l < 534.3 ? 11 : l < 535.01 ? 12 : l < 535.02 ? "13+" : l < 535.07 ? 15 : l < 535.11 ? 16 : l < 535.19 ? 17 : l < 536.05 ? 18 : l < 536.1 ? 19 : l < 537.01 ? 20 : l < 537.11 ? "21+" : l < 537.13 ? 23 : l < 537.18 ? 24 : l < 537.24 ? 25 : l < 537.36 ? 26 : "Blink" != w ? "27" : "28")) : (w && (w[1] = "like Safari"), l = (l = l[0]) < 400 ? 1 : l < 500 ? 2 : l < 526 ? 3 : l < 533 ? 4 : l < 534 ? "4+" : l < 535 ? 5 : l < 537 ? 6 : l < 538 ? 7 : l < 601 ? 8 : l < 602 ? 9 : l < 604 ? 10 : l < 606 ? 11 : l < 608 ? 12 : "12"), w && (w[1] += " " + (l += "number" == typeof l ? ".x" : /[.+]/.test(l) ? "" : "+")), "Safari" == R && (!V || parseInt(V) > 45) ? V = l : "Chrome" == R && /\bHeadlessChrome/i.test(a) && E.unshift("headless")), "Opera" == R && (l = /\bzbov|zvav$/.exec(F)) ? (R += " ", E.unshift("desktop mode"), "zvav" == l ? (R += "Mini", V = null) : R += "Mobile", F = F.replace(RegExp(" *" + l + "$"), "")) : "Safari" == R && /\bChrome\b/.exec(w && w[1]) ? (E.unshift("desktop mode"), R = "Chrome Mobile", V = null, /\bOS X\b/.test(F) ? (W = "Apple", F = "iOS 4.3+") : F = null) : /\bSRWare Iron\b/.test(R) && !V && (V = D("Chrome")), V && 0 == V.indexOf(l = /[\d.]+$/.exec(F)) && a.indexOf("/" + l + "-") > -1 && (F = g(F.replace(l, ""))), F && -1 != F.indexOf(R) && !RegExp(R + " OS").test(F) && (F = F.replace(RegExp(" *" + f(R) + " *"), "")), w && !/\b(?:Avant|Nook)\b/.test(R) && (/Browser|Lunascape|Maxthon/.test(R) || "Safari" != R && /^iOS/.test(F) && /\bSafari\b/.test(w[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(R) && w[1]) && (l = w[w.length - 1]) && E.push(l), E.length && (E = ["(" + E.join("; ") + ")"]), W && G && G.indexOf(W) < 0 && E.push("on " + W), G && E.push((/^on /.test(E[E.length - 1]) ? "" : "on ") + G), F && (l = / ([\d.+]+)$/.exec(F), c = l && "/" == F.charAt(F.length - l[0].length - 1), F = {
        architecture: 32,
        family: l && !c ? F.replace(l[0], "") : F,
        version: l ? l[1] : null,
        toString: function() {
          var e = this.version;
          return this.family + (e && !c ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
        }
      }), (l = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(k)) && !/\bi686\b/i.test(k) ? (F && (F.architecture = 64, F.family = F.family.replace(RegExp(" *" + l), "")), R && (/\bWOW64\b/i.test(a) || N && /\w(?:86|32)$/.test(r.cpuClass || r.platform) && !/\bWin64; x64\b/i.test(a)) && E.unshift("32-bit")) : F && /^OS X/.test(F.family) && "Chrome" == R && parseFloat(V) >= 39 && (F.architecture = 64), a || (a = null);
      var X = {};
      return X.description = a, X.layout = w && w[0], X.manufacturer = W, X.name = R, X.prerelease = B, X.product = G, X.ua = a, X.version = R && V, X.os = F || {
        architecture: null,
        family: null,
        version: null,
        toString: function() {
          return "null"
        }
      }, X.parse = e, X.toString = function() {
        return this.description || ""
      }, X.version && E.unshift(V), X.name && E.unshift(R), F && R && (F != String(F).split(" ")[0] || F != R.split(" ")[0] && !G) && E.push(G ? "(" + F + ")" : "on " + F), E.length && (X.description = E.join(" ")), X
    }();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (t.platform = v, define(function() {
      return v
    })) : a && n ? d(v, function(e, t) {
      a[t] = e
    }) : t.platform = v
  }.call(this), this.CABLES = this.CABLES || {}, this.CABLES.COREMODULES = this.CABLES.COREMODULES || {}, this.CABLES.COREMODULES.Vargetset = function(e) {
    var t = {};

    function a(n) {
      if (t[n]) return t[n].exports;
      var o = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(o.exports, o, o.exports, a), o.l = !0, o.exports
    }
    return a.m = e, a.c = t, a.d = function(e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      })
    }, a.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }, a.t = function(e, t) {
      if (1 & t && (e = a(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (a.r(n), Object.defineProperty(n, "default", {
          enumerable: !0,
          value: e
        }), 2 & t && "string" != typeof e)
        for (var o in e) a.d(n, o, function(t) {
          return e[t]
        }.bind(null, o));
      return n
    }, a.n = function(e) {
      var t = e && e.__esModule ? function() {
        return e.default
      } : function() {
        return e
      };
      return a.d(t, "a", t), t
    }, a.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "", a(a.s = 0)
  }([function(e, t) {
    CABLES.VarSetOpWrapper = class {
      constructor(e, t, a, n) {
        this._valuePort = a, this._varNamePort = n, this._op = e, this._type = t, this._btnCreate = e.inTriggerButton("Create new variable"), this._btnCreate.setUiAttribs({
          hidePort: !0
        }), this._btnCreate.onTriggered = this._createVar.bind(this), this._helper = e.inUiTriggerButtons("", ["Rename"]), this._helper.setUiAttribs({
          hidePort: !0
        }), this._helper.onTriggered = (t => {
          "Rename" == t && CABLES.CMD.PATCH.renameVariable(e.varName.get())
        }), this._op.setPortGroup("Variable", [this._helper, this._varNamePort, this._btnCreate]), this._op.on("uiParamPanel", this._updateVarNamesDropdown.bind(this)), this._op.patch.addEventListener("variablesChanged", this._updateName.bind(this)), this._op.patch.addEventListener("variableRename", this._renameVar.bind(this)), this._varNamePort.onChange = this._updateName.bind(this), this._valuePort.onChange = this._setVarValue.bind(this), this._valuePort.changeAlways = !0, this._op.init = (() => {
          this._updateName(), this._setVarValue(), this._updateErrorUi()
        })
      }
      _updateErrorUi() {
        CABLES.UI && (this._varNamePort.get() ? this._op.setUiError("novarname", null) : this._op.setUiError("novarname", "no variable selected"))
      }
      _updateName() {
        const e = this._varNamePort.get();
        CABLES.UI && this._op.setTitle("set #" + e), this._updateErrorUi();
        const t = this._op.patch.getVar(e);
        t && !t.type && (t.type = this._type), this._op.patch.hasVar(e) || this._setVarValue(), this._updateVarNamesDropdown(), this._op.isCurrentUiOp() && this._op.refreshParams()
      }
      _createVar() {
        CABLES.CMD.PATCH.createVariable(this._op, this._type, () => {
          this._updateName()
        })
      }
      _updateVarNamesDropdown() {
        if (CABLES.UI) {
          const e = [],
            t = this._op.patch.getVars();
          for (const a in t) t[a].type == this._type && "0" != a && e.push(a);
          this._varNamePort.uiAttribs.values = e
        }
      }
      _renameVar(e, t) {
        e == this._varNamePort.get() && (this._varNamePort.set(t), this._updateName())
      }
      _setVarValue() {
        this._op.patch.setVarValue(this._varNamePort.get(), this._valuePort.get())
      }
    }, CABLES.VarGetOpWrapper = class {
      constructor(e, t, a, n) {
        this._op = e, this._type = t, this._varnamePort = a, this._variable = null, this._valueOutPort = n, this._op.on("uiParamPanel", this._updateVarNamesDropdown.bind(this)), this._op.patch.on("variableRename", this._renameVar.bind(this)), this._op.patch.on("variableDeleted", e => {
          this._op.isCurrentUiOp() && this._op.refreshParams()
        }), this._varnamePort.onChange = this._init.bind(this), this._op.patch.addEventListener("variablesChanged", this._init.bind(this)), this._op.onDelete = function() {
          this._variable && this._variable.removeListener(this._setValueOut.bind(this))
        }, this._op.init = (() => {
          this._init()
        })
      }
      _renameVar(e, t) {
        e == this._varnamePort.get() && (this._varnamePort.set(t), this._updateVarNamesDropdown())
      }
      _updateVarNamesDropdown() {
        if (CABLES.UI) {
          const e = [],
            t = this._op.patch.getVars();
          for (const a in t) t[a].type == this._type && "0" != a && e.push(a);
          this._op.varName.uiAttribs.values = e
        }
      }
      _setValueOut(e) {
        this._updateVarNamesDropdown(), this._valueOutPort.set(e)
      }
      _init() {
        this._updateVarNamesDropdown(), this._variable && this._variable.removeListener(this._setValueOut.bind(this)), this._variable = this._op.patch.getVar(this._op.varName.get()), this._variable ? (this._variable.addListener(this._setValueOut.bind(this)), this._op.setUiError("unknownvar", null), this._op.setTitle("#" + this._varnamePort.get()), this._valueOutPort.set(this._variable.getValue())) : (this._op.setUiError("unknownvar", "unknown variable! - there is no setVariable with this name (" + this._varnamePort.get() + ")"), this._op.setTitle("#invalid"), this._valueOutPort.set(0))
      }
    }
  }]).Cables;
