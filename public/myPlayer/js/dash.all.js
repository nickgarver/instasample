/*! v2.4.1-9de5764, 2017-02-01T21:55:06Z */ ! function a(b, c, d) {
  function e(g, h) {
    if (!c[g]) {
      if (!b[g]) {
        var i = "function" == typeof require && require;
        if (!h && i) return i(g, !0);
        if (f) return f(g, !0);
        var j = new Error("Cannot find module '" + g + "'");
        throw j.code = "MODULE_NOT_FOUND", j
      }
      var k = c[g] = {
        exports: {}
      };
      b[g][0].call(k.exports, function(a) {
        var c = b[g][1][a];
        return e(c ? c : a)
      }, k, k.exports, a, b, c, d)
    }
    return c[g].exports
  }
  for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
  return e
}({
  1: [function(b, c, d) {
    "use strict";
    var e = {};
    e.encode = function(a) {
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a.charCodeAt(c);
        d < 128 ? b.push(d) : d < 2048 ? (b.push(192 | d >> 6), b.push(128 | 63 & d)) : d < 65536 ? (b.push(224 | d >> 12), b.push(128 | 63 & d >> 6), b.push(128 | 63 & d)) : (b.push(240 | d >> 18), b.push(128 | 63 & d >> 12), b.push(128 | 63 & d >> 6), b.push(128 | 63 & d))
      }
      return b
    }, e.decode = function(a) {
      for (var b = [], c = 0; c < a.length;) {
        var d = a[c++];
        d < 128 || (d < 224 ? (d = (31 & d) << 6, d |= 63 & a[c++]) : d < 240 ? (d = (15 & d) << 12, d |= (63 & a[c++]) << 6, d |= 63 & a[c++]) : (d = (7 & d) << 18, d |= (63 & a[c++]) << 12, d |= (63 & a[c++]) << 6, d |= 63 & a[c++])), b.push(String.fromCharCode(d))
      }
      return b.join("")
    };
    var f = {};
    ! function(b) {
      var c = function(a) {
          for (var c = 0, d = [], e = 0 | a.length / 3; 0 < e--;) {
            var f = (a[c] << 16) + (a[c + 1] << 8) + a[c + 2];
            c += 3, d.push(b.charAt(63 & f >> 18)), d.push(b.charAt(63 & f >> 12)), d.push(b.charAt(63 & f >> 6)), d.push(b.charAt(63 & f))
          }
          if (2 == a.length - c) {
            var f = (a[c] << 16) + (a[c + 1] << 8);
            d.push(b.charAt(63 & f >> 18)), d.push(b.charAt(63 & f >> 12)), d.push(b.charAt(63 & f >> 6)), d.push("=")
          } else if (1 == a.length - c) {
            var f = a[c] << 16;
            d.push(b.charAt(63 & f >> 18)), d.push(b.charAt(63 & f >> 12)), d.push("==")
          }
          return d.join("")
        },
        d = function() {
          for (var a = [], c = 0; c < b.length; ++c) a[b.charCodeAt(c)] = c;
          return a["=".charCodeAt(0)] = 0, a
        }(),
        g = function(a) {
          for (var b = 0, c = [], e = 0 | a.length / 4; 0 < e--;) {
            var f = (d[a.charCodeAt(b)] << 18) + (d[a.charCodeAt(b + 1)] << 12) + (d[a.charCodeAt(b + 2)] << 6) + d[a.charCodeAt(b + 3)];
            c.push(255 & f >> 16), c.push(255 & f >> 8), c.push(255 & f), b += 4
          }
          return c && ("=" == a.charAt(b - 2) ? (c.pop(), c.pop()) : "=" == a.charAt(b - 1) && c.pop()), c
        },
        h = {};
      h.encode = function(a) {
        for (var b = [], c = 0; c < a.length; ++c) b.push(a.charCodeAt(c));
        return b
      }, h.decode = function(b) {
        for (var c = 0; c < s.length; ++c) a[c] = String.fromCharCode(a[c]);
        return a.join("")
      }, f.decodeArray = function(a) {
        var b = g(a);
        return new Uint8Array(b)
      }, f.encodeASCII = function(a) {
        var b = h.encode(a);
        return c(b)
      }, f.decodeASCII = function(a) {
        var b = g(a);
        return h.decode(b)
      }, f.encode = function(a) {
        var b = e.encode(a);
        return c(b)
      }, f.decode = function(a) {
        var b = g(a);
        return e.decode(b)
      }
    }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), "undefined" != typeof d && (d.decode = f.decode, d.decodeArray = f.decodeArray)
  }, {}],
  2: [function(a, b, c) {
    "use strict";
    ! function(a) {
      var b = {
          42: 225,
          92: 233,
          94: 237,
          95: 243,
          96: 250,
          123: 231,
          124: 247,
          125: 209,
          126: 241,
          127: 9608,
          128: 174,
          129: 176,
          130: 189,
          131: 191,
          132: 8482,
          133: 162,
          134: 163,
          135: 9834,
          136: 224,
          137: 32,
          138: 232,
          139: 226,
          140: 234,
          141: 238,
          142: 244,
          143: 251,
          144: 193,
          145: 201,
          146: 211,
          147: 218,
          148: 220,
          149: 252,
          150: 8216,
          151: 161,
          152: 42,
          153: 8217,
          154: 9473,
          155: 169,
          156: 8480,
          157: 8226,
          158: 8220,
          159: 8221,
          160: 192,
          161: 194,
          162: 199,
          163: 200,
          164: 202,
          165: 203,
          166: 235,
          167: 206,
          168: 207,
          169: 239,
          170: 212,
          171: 217,
          172: 249,
          173: 219,
          174: 171,
          175: 187,
          176: 195,
          177: 227,
          178: 205,
          179: 204,
          180: 236,
          181: 210,
          182: 242,
          183: 213,
          184: 245,
          185: 123,
          186: 125,
          187: 92,
          188: 94,
          189: 95,
          190: 124,
          191: 8764,
          192: 196,
          193: 228,
          194: 214,
          195: 246,
          196: 223,
          197: 165,
          198: 164,
          199: 9475,
          200: 197,
          201: 229,
          202: 216,
          203: 248,
          204: 9487,
          205: 9491,
          206: 9495,
          207: 9499
        },
        c = function(a) {
          var c = a;
          return b.hasOwnProperty(a) && (c = b[a]), String.fromCharCode(c)
        },
        d = 15,
        e = 32,
        f = {
          17: 1,
          18: 3,
          21: 5,
          22: 7,
          23: 9,
          16: 11,
          19: 12,
          20: 14
        },
        g = {
          17: 2,
          18: 4,
          21: 6,
          22: 8,
          23: 10,
          19: 13,
          20: 15
        },
        h = {
          25: 1,
          26: 3,
          29: 5,
          30: 7,
          31: 9,
          24: 11,
          27: 12,
          28: 14
        },
        i = {
          25: 2,
          26: 4,
          29: 6,
          30: 8,
          31: 10,
          27: 13,
          28: 15
        },
        j = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"],
        k = {
          verboseFilter: {
            DATA: 3,
            DEBUG: 3,
            INFO: 2,
            WARNING: 2,
            TEXT: 1,
            ERROR: 0
          },
          time: null,
          verboseLevel: 0,
          setTime: function(a) {
            this.time = a
          },
          log: function(a, b) {
            var c = this.verboseFilter[a];
            this.verboseLevel >= c && console.log(this.time + " [" + a + "] " + b)
          }
        },
        l = function(a) {
          for (var b = [], c = 0; c < a.length; c++) b.push(a[c].toString(16));
          return b
        },
        m = function(a, b, c, d, e) {
          this.foreground = a || "white", this.underline = b || !1, this.italics = c || !1, this.background = d || "black", this.flash = e || !1
        };
      m.prototype = {
        reset: function() {
          this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
        },
        setStyles: function(a) {
          for (var b = ["foreground", "underline", "italics", "background", "flash"], c = 0; c < b.length; c++) {
            var d = b[c];
            a.hasOwnProperty(d) && (this[d] = a[d])
          }
        },
        isDefault: function() {
          return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
        },
        equals: function(a) {
          return this.foreground === a.foreground && this.underline === a.underline && this.italics === a.italics && this.background === a.background && this.flash === a.flash
        },
        copy: function(a) {
          this.foreground = a.foreground, this.underline = a.underline, this.italics = a.italics, this.background = a.background, this.flash = a.flash
        },
        toString: function() {
          return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
        }
      };
      var n = function(a, b, c, d, e, f) {
        this.uchar = a || " ", this.penState = new m(b, c, d, e, f)
      };
      n.prototype = {
        reset: function() {
          this.uchar = " ", this.penState.reset()
        },
        setChar: function(a, b) {
          this.uchar = a, this.penState.copy(b)
        },
        setPenState: function(a) {
          this.penState.copy(a)
        },
        equals: function(a) {
          return this.uchar === a.uchar && this.penState.equals(a.penState)
        },
        copy: function(a) {
          this.uchar = a.uchar, this.penState.copy(a.penState)
        },
        isEmpty: function() {
          return " " === this.uchar && this.penState.isDefault()
        }
      };
      var o = function() {
        this.chars = [];
        for (var a = 0; a < e; a++) this.chars.push(new n);
        this.pos = 0, this.currPenState = new m
      };
      o.prototype = {
        equals: function(a) {
          for (var b = !0, c = 0; c < e; c++)
            if (!this.chars[c].equals(a.chars[c])) {
              b = !1;
              break
            }
          return b
        },
        copy: function(a) {
          for (var b = 0; b < e; b++) this.chars[b].copy(a.chars[b])
        },
        isEmpty: function() {
          for (var a = !0, b = 0; b < e; b++)
            if (!this.chars[b].isEmpty()) {
              a = !1;
              break
            }
          return a
        },
        setCursor: function(a) {
          this.pos !== a && (this.pos = a), this.pos < 0 ? (k.log("ERROR", "Negative cursor position " + this.pos), this.pos = 0) : this.pos > e && (k.log("ERROR", "Too large cursor position " + this.pos), this.pos = e)
        },
        moveCursor: function(a) {
          var b = this.pos + a;
          if (a > 1)
            for (var c = this.pos + 1; c < b + 1; c++) this.chars[c].setPenState(this.currPenState);
          this.setCursor(b)
        },
        backSpace: function() {
          this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
        },
        insertChar: function(a) {
          a >= 144 && this.backSpace();
          var b = c(a);
          return this.pos >= e ? void k.log("ERROR", "Cannot insert " + a.toString(16) + " (" + b + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(b, this.currPenState), void this.moveCursor(1))
        },
        clearFromPos: function(a) {
          var b;
          for (b = a; b < e; b++) this.chars[b].reset()
        },
        clear: function() {
          this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
        },
        clearToEndOfRow: function() {
          this.clearFromPos(this.pos)
        },
        getTextString: function() {
          for (var a = [], b = !0, c = 0; c < e; c++) {
            var d = this.chars[c].uchar;
            " " !== d && (b = !1), a.push(d)
          }
          return b ? "" : a.join("")
        },
        setPenStyles: function(a) {
          this.currPenState.setStyles(a);
          var b = this.chars[this.pos];
          b.setPenState(this.currPenState)
        }
      };
      var p = function() {
        this.rows = [];
        for (var a = 0; a < d; a++) this.rows.push(new o);
        this.currRow = d - 1, this.nrRollUpRows = null, this.reset()
      };
      p.prototype = {
        reset: function() {
          for (var a = 0; a < d; a++) this.rows[a].clear();
          this.currRow = d - 1
        },
        equals: function(a) {
          for (var b = !0, c = 0; c < d; c++)
            if (!this.rows[c].equals(a.rows[c])) {
              b = !1;
              break
            }
          return b
        },
        copy: function(a) {
          for (var b = 0; b < d; b++) this.rows[b].copy(a.rows[b])
        },
        isEmpty: function() {
          for (var a = !0, b = 0; b < d; b++)
            if (!this.rows[b].isEmpty()) {
              a = !1;
              break
            }
          return a
        },
        backSpace: function() {
          var a = this.rows[this.currRow];
          a.backSpace()
        },
        clearToEndOfRow: function() {
          var a = this.rows[this.currRow];
          a.clearToEndOfRow()
        },
        insertChar: function(a) {
          var b = this.rows[this.currRow];
          b.insertChar(a)
        },
        setPen: function(a) {
          var b = this.rows[this.currRow];
          b.setPenStyles(a)
        },
        moveCursor: function(a) {
          var b = this.rows[this.currRow];
          b.moveCursor(a)
        },
        setCursor: function(a) {
          k.log("INFO", "setCursor: " + a);
          var b = this.rows[this.currRow];
          b.setCursor(a)
        },
        setPAC: function(a) {
          k.log("INFO", "pacData = " + JSON.stringify(a));
          var b = a.row - 1;
          this.nrRollUpRows && b < this.nrRollUpRows - 1 && (b = this.nrRollUpRows - 1), this.currRow = b;
          var c = this.rows[this.currRow];
          if (null !== a.indent) {
            var d = a.indent,
              e = Math.max(d - 1, 0);
            c.setCursor(a.indent), a.color = c.chars[e].penState.foreground
          }
          var f = {
            foreground: a.color,
            underline: a.underline,
            italics: a.italics,
            background: "black",
            flash: !1
          };
          this.setPen(f)
        },
        setBkgData: function(a) {
          k.log("INFO", "bkgData = " + JSON.stringify(a)), this.backSpace(), this.setPen(a), this.insertChar(32)
        },
        setRollUpRows: function(a) {
          this.nrRollUpRows = a
        },
        rollUp: function() {
          if (null === this.nrRollUpRows) return void k.log("DEBUG", "roll_up but nrRollUpRows not set yet");
          k.log("TEXT", this.getDisplayText());
          var a = this.currRow + 1 - this.nrRollUpRows,
            b = this.rows.splice(a, 1)[0];
          b.clear(), this.rows.splice(this.currRow, 0, b), k.log("INFO", "Rolling up")
        },
        getDisplayText: function(a) {
          a = a || !1;
          for (var b = [], c = "", e = -1, f = 0; f < d; f++) {
            var g = this.rows[f].getTextString();
            g && (e = f + 1, a ? b.push("Row " + e + ': "' + g + '"') : b.push(g.trim()))
          }
          return b.length > 0 && (c = a ? "[" + b.join(" | ") + "]" : b.join("\n")), c
        },
        getTextAndFormat: function() {
          return this.rows
        }
      };
      var q = function(a, b) {
        this.chNr = a, this.outputFilter = b, this.mode = null, this.verbose = 0, this.displayedMemory = new p, this.nonDisplayedMemory = new p, this.lastOutputScreen = new p, this.currRollUpRow = this.displayedMemory.rows[d - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
      };
      q.prototype = {
        modes: ["MODE_ROLL-UP", "MODE_POP-ON", "MODE_PAINT-ON", "MODE_TEXT"],
        reset: function() {
          this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.currRollUpRow = this.displayedMemory.rows[d - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.lastCueEndTime = null
        },
        getHandler: function() {
          return this.outputFilter
        },
        setHandler: function(a) {
          this.outputFilter = a
        },
        setPAC: function(a) {
          this.writeScreen.setPAC(a)
        },
        setBkgData: function(a) {
          this.writeScreen.setBkgData(a)
        },
        setMode: function(a) {
          a !== this.mode && (this.mode = a, k.log("INFO", "MODE=" + a), "MODE_POP-ON" == this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = a)
        },
        insertChars: function(a) {
          for (var b = 0; b < a.length; b++) this.writeScreen.insertChar(a[b]);
          var c = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
          k.log("INFO", c + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (k.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
        },
        cc_RCL: function() {
          k.log("INFO", "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
        },
        cc_BS: function() {
          k.log("INFO", "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
        },
        cc_AOF: function() {},
        cc_AON: function() {},
        cc_DER: function() {
          k.log("INFO", "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
        },
        cc_RU: function(a) {
          k.log("INFO", "RU(" + a + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(a)
        },
        cc_FON: function() {
          k.log("INFO", "FON - Flash On"), this.writeScreen.setPen({
            flash: !0
          })
        },
        cc_RDC: function() {
          k.log("INFO", "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
        },
        cc_TR: function() {
          k.log("INFO", "TR"), this.setMode("MODE_TEXT")
        },
        cc_RTD: function() {
          k.log("INFO", "RTD"), this.setMode("MODE_TEXT")
        },
        cc_EDM: function() {
          k.log("INFO", "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate()
        },
        cc_CR: function() {
          k.log("CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate()
        },
        cc_ENM: function() {
          k.log("INFO", "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
        },
        cc_EOC: function() {
          if (k.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
            var a = this.displayedMemory;
            this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = a, this.writeScreen = this.nonDisplayedMemory, k.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
          }
          this.outputDataUpdate()
        },
        cc_TO: function(a) {
          k.log("INFO", "TO(" + a + ") - Tab Offset"), this.writeScreen.moveCursor(a)
        },
        cc_MIDROW: function(a) {
          var b = {
            flash: !1
          };
          if (b.underline = a % 2 === 1, b.italics = a >= 46, b.italics) b.foreground = "white";
          else {
            var c = Math.floor(a / 2) - 16,
              d = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
            b.foreground = d[c]
          }
          k.log("INFO", "MIDROW: " + JSON.stringify(b)), this.writeScreen.setPen(b)
        },
        outputDataUpdate: function() {
          var a = k.time;
          null !== a && this.outputFilter && (this.outputFilter.updateData && this.outputFilter.updateData(a, this.displayedMemory), null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, a, this.lastOutputScreen), this.cueStartTime = this.displayedMemory.isEmpty() ? null : a) : this.cueStartTime = a, this.lastOutputScreen.copy(this.displayedMemory))
        },
        cueSplitAtTime: function(a) {
          this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, a, this.displayedMemory), this.cueStartTime = a))
        }
      };
      var r = function(a, b, c) {
        this.field = a || 1, this.outputs = [b, c], this.channels = [new q(1, b), new q(2, c)], this.currChNr = -1, this.lastCmdA = null, this.lastCmdB = null, this.bufferedData = [], this.startTime = null, this.lastTime = null, this.dataCounters = {
          padding: 0,
          char: 0,
          cmd: 0,
          other: 0
        }
      };
      r.prototype = {
        getHandler: function(a) {
          return this.channels[a].getHandler()
        },
        setHandler: function(a, b) {
          this.channels[a].setHandler(b)
        },
        addData: function(a, b) {
          var c, d, e, f = !1;
          this.lastTime = a, k.setTime(a);
          for (var g = 0; g < b.length; g += 2)
            if (d = 127 & b[g], e = 127 & b[g + 1], 0 !== d || 0 !== e) {
              if (k.log("DATA", "[" + l([b[g], b[g + 1]]) + "] -> (" + l([d, e]) + ")"), c = this.parseCmd(d, e), c || (c = this.parseMidrow(d, e)), c || (c = this.parsePAC(d, e)), c || (c = this.parseBackgroundAttributes(d, e)), !c && (f = this.parseChars(d, e)))
                if (this.currChNr && this.currChNr >= 0) {
                  var h = this.channels[this.currChNr - 1];
                  h.insertChars(f)
                } else k.log("WARNING", "No channel found yet. TEXT-MODE?");
              c ? this.dataCounters.cmd += 2 : f ? this.dataCounters.char += 2 : (this.dataCounters.other += 2, k.log("WARNING", "Couldn't parse cleaned data " + l([d, e]) + " orig: " + l([b[g], b[g + 1]])))
            } else this.dataCounters.padding += 2
        },
        parseCmd: function(a, b) {
          var c = null,
            d = (20 === a || 28 === a) && 32 <= b && b <= 47,
            e = (23 === a || 31 === a) && 33 <= b && b <= 35;
          if (!d && !e) return !1;
          if (a === this.lastCmdA && b === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, k.log("DEBUG", "Repeated command (" + l([a, b]) + ") is dropped"), !0;
          c = 20 === a || 23 === a ? 1 : 2;
          var f = this.channels[c - 1];
          return 20 === a || 28 === a ? 32 === b ? f.cc_RCL() : 33 === b ? f.cc_BS() : 34 === b ? f.cc_AOF() : 35 === b ? f.cc_AON() : 36 === b ? f.cc_DER() : 37 === b ? f.cc_RU(2) : 38 === b ? f.cc_RU(3) : 39 === b ? f.cc_RU(4) : 40 === b ? f.cc_FON() : 41 === b ? f.cc_RDC() : 42 === b ? f.cc_TR() : 43 === b ? f.cc_RTD() : 44 === b ? f.cc_EDM() : 45 === b ? f.cc_CR() : 46 === b ? f.cc_ENM() : 47 === b && f.cc_EOC() : f.cc_TO(b - 32), this.lastCmdA = a, this.lastCmdB = b, this.currChNr = c, !0
        },
        parseMidrow: function(a, b) {
          var c = null;
          if ((17 === a || 25 === a) && 32 <= b && b <= 47) {
            if (c = 17 === a ? 1 : 2, c !== this.currChNr) return k.log("ERROR", "Mismatch channel in midrow parsing"), !1;
            var d = this.channels[c - 1];
            return d.cc_MIDROW(b), k.log("DEBUG", "MIDROW (" + l([a, b]) + ")"), !0
          }
          return !1
        },
        parsePAC: function(a, b) {
          var c = null,
            d = null,
            e = (17 <= a && a <= 23 || 25 <= a && a <= 31) && 64 <= b && b <= 127,
            j = (16 === a || 24 === a) && 64 <= b && b <= 95;
          if (!e && !j) return !1;
          if (a === this.lastCmdA && b === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, !0;
          c = a <= 23 ? 1 : 2, d = 64 <= b && b <= 95 ? 1 === c ? f[a] : h[a] : 1 === c ? g[a] : i[a];
          var k = this.interpretPAC(d, b),
            l = this.channels[c - 1];
          return l.setPAC(k), this.lastCmdA = a, this.lastCmdB = b, this.currChNr = c, !0
        },
        interpretPAC: function(a, b) {
          var c = b,
            d = {
              color: null,
              italics: !1,
              indent: null,
              underline: !1,
              row: a
            };
          return c = b > 95 ? b - 96 : b - 64, d.underline = 1 === (1 & c), c <= 13 ? d.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(c / 2)] : c <= 15 ? (d.italics = !0, d.color = "white") : d.indent = 4 * Math.floor((c - 16) / 2), d
        },
        parseChars: function(a, b) {
          var d = null,
            e = null,
            f = null;
          if (a >= 25 ? (d = 2, f = a - 8) : (d = 1, f = a), 17 <= f && f <= 19) {
            var g = b;
            g = 17 === f ? b + 80 : 18 === f ? b + 112 : b + 144, k.log("INFO", "Special char '" + c(g) + "' in channel " + d), e = [g]
          } else 32 <= a && a <= 127 && (e = 0 === b ? [a] : [a, b]);
          if (e) {
            var h = l(e);
            k.log("DEBUG", "Char codes =  " + h.join(",")), this.lastCmdA = null, this.lastCmdB = null
          }
          return e
        },
        parseBackgroundAttributes: function(a, b) {
          var c, d, e, f, g = (16 === a || 24 === a) && 32 <= b && b <= 47,
            h = (23 === a || 31 === a) && 45 <= b && b <= 47;
          return !(!g && !h) && (c = {}, 16 === a || 24 === a ? (d = Math.floor((b - 32) / 2), c.background = j[d], b % 2 === 1 && (c.background = c.background + "_semi")) : 45 === b ? c.background = "transparent" : (c.foreground = "black", 47 === b && (c.underline = !0)), e = a < 24 ? 1 : 2, f = this.channels[e - 1], f.setBkgData(c), this.lastCmdA = null, this.lastCmdB = null, !0)
        },
        reset: function() {
          for (var a = 0; a < this.channels.length; a++) this.channels[a] && this.channels[a].reset();
          this.lastCmdA = null, this.lastCmdB = null
        },
        cueSplitAtTime: function(a) {
          for (var b = 0; b < this.channels.length; b++) this.channels[b] && this.channels[b].cueSplitAtTime(a)
        }
      };
      var s = function(a, b, c) {
          for (var d = 0, e = b, f = 0, g = [], h = function(a, b, c, d) {
              if (4 !== a || b < 8) return null;
              var e = c.getUint8(d),
                f = c.getUint16(d + 1),
                g = c.getUint32(d + 3),
                h = c.getUint8(d + 7);
              return 181 == e && 49 == f && 1195456820 == g && 3 == h
            }; e < b + c;) {
            if (d = a.getUint32(e), f = 31 & a.getUint8(e + 4), 6 === f)
              for (var i = e + 5, j = -1; i < e + 4 + d - 1;) {
                j = 0;
                for (var k = 255; 255 === k;) k = a.getUint8(i), j += k, i++;
                var l = 0;
                for (k = 255; 255 === k;) k = a.getUint8(i), l += k, i++;
                h(j, l, a, i) && g.push([i, l]), i += l
              }
            e += d + 4
          }
          return g
        },
        t = function(a, b) {
          var c = b[0],
            d = [
              [],
              []
            ];
          c += 8;
          var e = 31 & a.getUint8(c);
          c += 2;
          for (var f = 0; f < e; f++) {
            var g = a.getUint8(c),
              h = 4 & g,
              i = 3 & g;
            c++;
            var j = a.getUint8(c);
            c++;
            var k = a.getUint8(c);
            c++, h && (127 & j) + (127 & k) !== 0 && (0 === i ? (d[0].push(j), d[0].push(k)) : 1 === i && (d[1].push(j), d[1].push(k)))
          }
          return d
        };
      a.logger = k, a.PenState = m, a.CaptionScreen = p, a.Cea608Parser = r, a.findCea608Nalus = s, a.extractCea608DataFromRange = t
    }("undefined" == typeof c ? (void 0).cea608parser = {} : c)
  }, {}],
  3: [function(a, b, c) {
    "use strict";

    function d(a) {
      var b, c, d;
      for (b = [], d = 0, c = a.length; d < c; d += 1) a[d].isRoot ? b.push("root") : b.push(a[d].name);
      var e = function(a, b) {
          var c;
          if (null !== a && null !== b)
            for (c in a) a.hasOwnProperty(c) && (b.hasOwnProperty(c) || (b[c] = a[c]))
        },
        f = function(a, b, c) {
          var d, f, g, h, i;
          if (null !== a && 0 !== a.length)
            for (d = 0, f = a.length; d < f; d += 1) g = a[d], b.hasOwnProperty(g.name) && (c.hasOwnProperty(g.name) ? g.merge && (h = b[g.name], i = c[g.name], "object" == typeof h && "object" == typeof i ? e(h, i) : null != g.mergeFunction ? c[g.name] = g.mergeFunction(h, i) : c[g.name] = h + i) : c[g.name] = b[g.name])
        },
        g = function a(b, c) {
          var d, e, g, h, i, j, k, l = b;
          if (null !== l.children && 0 !== l.children.length)
            for (d = 0, e = l.children.length; d < e; d += 1)
              if (j = l.children[d], c.hasOwnProperty(j.name))
                if (j.isArray)
                  for (i = c[j.name + "_asArray"], g = 0, h = i.length; g < h; g += 1) k = i[g], f(l.properties, c, k), a(j, k);
                else k = c[j.name], f(l.properties, c, k), a(j, k)
        },
        h = function c(d) {
          var e, f, h, i, j, k, l;
          if (null === d) return d;
          if ("object" != typeof d) return d;
          for (e = 0, f = b.length; e < f; e += 1) "root" === b[e] && (j = a[e], k = d, g(j, k));
          for (i in d)
            if (d.hasOwnProperty(i) && "__children" != i) {
              if (h = b.indexOf(i), h !== -1)
                if (j = a[h], j.isArray)
                  for (l = d[i + "_asArray"], e = 0, f = l.length; e < f; e += 1) k = l[e], g(j, k);
                else k = d[i], g(j, k);
              c(d[i])
            }
          return d
        };
      return {
        run: h
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    }), c.default = d, b.exports = c.default
  }, {}],
  4: [function(a, b, c) {
    "use strict";

    function d(a) {
      function b() {
        void 0 === a.escapeMode && (a.escapeMode = !0), void 0 === a.attributePrefix && (a.attributePrefix = "_"), a.arrayAccessForm = a.arrayAccessForm || "none", a.emptyNodeForm = a.emptyNodeForm || "text", void 0 === a.enableToStringFunc && (a.enableToStringFunc = !0), a.arrayAccessFormPaths = a.arrayAccessFormPaths || [], void 0 === a.skipEmptyTextNodesForObj && (a.skipEmptyTextNodesForObj = !0), void 0 === a.stripWhitespaces && (a.stripWhitespaces = !0), a.datetimeAccessFormPaths = a.datetimeAccessFormPaths || [], void 0 === a.useDoubleQuotes && (a.useDoubleQuotes = !1), a.xmlElementsFilter = a.xmlElementsFilter || [], a.jsonPropertiesFilter = a.jsonPropertiesFilter || [], void 0 === a.keepCData && (a.keepCData = !1), void 0 === a.ignoreRoot && (a.ignoreRoot = !1)
      }

      function c() {}

      function d(a) {
        var b = a.localName;
        return null == b && (b = a.baseName), null != b && "" != b || (b = a.nodeName), b
      }

      function e(a) {
        return a.prefix
      }

      function f(a) {
        return "string" == typeof a ? a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") : a
      }

      function g(a, b, c, d) {
        for (var e = 0; e < a.length; e++) {
          var f = a[e];
          if ("string" == typeof f) {
            if (f == d) break
          } else if (f instanceof RegExp) {
            if (f.test(d)) break
          } else if ("function" == typeof f && f(b, c, d)) break
        }
        return e != a.length
      }

      function h(b, c, d) {
        switch (a.arrayAccessForm) {
          case "property":
            b[c] instanceof Array ? b[c + "_asArray"] = b[c] : b[c + "_asArray"] = [b[c]]
        }!(b[c] instanceof Array) && a.arrayAccessFormPaths.length > 0 && g(a.arrayAccessFormPaths, b, c, d) && (b[c] = [b[c]])
      }

      function i(a) {
        var b = a.split(/[-T:+Z]/g),
          c = new Date(b[0], b[1] - 1, b[2]),
          d = b[5].split(".");
        if (c.setHours(b[3], b[4], d[0]), d.length > 1 && c.setMilliseconds(d[1]), b[6] && b[7]) {
          var e = 60 * b[6] + Number(b[7]),
            f = /\d\d-\d\d:\d\d$/.test(a) ? "-" : "+";
          e = 0 + ("-" == f ? -1 * e : e), c.setMinutes(c.getMinutes() - e - c.getTimezoneOffset())
        } else a.indexOf("Z", a.length - 1) !== -1 && (c = new Date(Date.UTC(c.getFullYear(), c.getMonth(), c.getDate(), c.getHours(), c.getMinutes(), c.getSeconds(), c.getMilliseconds())));
        return c
      }

      function j(b, c, d) {
        if (a.datetimeAccessFormPaths.length > 0) {
          var e = d.split(".#")[0];
          return g(a.datetimeAccessFormPaths, b, c, e) ? i(b) : b
        }
        return b
      }

      function k(b, c, d, e) {
        return !(c == z.ELEMENT_NODE && a.xmlElementsFilter.length > 0) || g(a.xmlElementsFilter, b, d, e)
      }

      function l(b, c) {
        if (b.nodeType == z.DOCUMENT_NODE) {
          for (var f = new Object, g = b.childNodes, i = 0; i < g.length; i++) {
            var m = g.item(i);
            if (m.nodeType == z.ELEMENT_NODE)
              if (a.ignoreRoot) f = l(m);
              else {
                f = {};
                var n = d(m);
                f[n] = l(m)
              }
          }
          return f
        }
        if (b.nodeType == z.ELEMENT_NODE) {
          var f = new Object;
          f.__cnt = 0;
          for (var o = [], g = b.childNodes, i = 0; i < g.length; i++) {
            var m = g.item(i),
              n = d(m);
            if (m.nodeType != z.COMMENT_NODE) {
              var p = c + "." + n;
              if (k(f, m.nodeType, n, p))
                if (f.__cnt++, null == f[n]) {
                  var q = l(m, p);
                  if ("#text" != n || /[^\s]/.test(q)) {
                    var r = {};
                    r[n] = q, o.push(r)
                  }
                  f[n] = q, h(f, n, p)
                } else {
                  null != f[n] && (f[n] instanceof Array || (f[n] = [f[n]], h(f, n, p)));
                  var q = l(m, p);
                  if ("#text" != n || /[^\s]/.test(q)) {
                    var r = {};
                    r[n] = q, o.push(r)
                  }
                  f[n][f[n].length] = q
                }
            }
          }
          f.__children = o;
          for (var s = d(b), t = 0; t < b.attributes.length; t++) {
            var u = b.attributes.item(t);
            f.__cnt++;
            for (var v = u.value, w = 0, x = a.matchers.length; w < x; w++) {
              var y = a.matchers[w];
              y.test(u, s) && (v = y.converter(u.value))
            }
            f[a.attributePrefix + u.name] = v
          }
          var A = e(b);
          return null != A && "" != A && (f.__cnt++, f.__prefix = A), null != f["#text"] && (f.__text = f["#text"], f.__text instanceof Array && (f.__text = f.__text.join("\n")), a.stripWhitespaces && (f.__text = f.__text.trim()), delete f["#text"], "property" == a.arrayAccessForm && delete f["#text_asArray"], f.__text = j(f.__text, n, c + "." + n)), null != f["#cdata-section"] && (f.__cdata = f["#cdata-section"], delete f["#cdata-section"], "property" == a.arrayAccessForm && delete f["#cdata-section_asArray"]), 0 == f.__cnt && "text" == a.emptyNodeForm ? f = "" : 1 == f.__cnt && null != f.__text ? f = f.__text : 1 != f.__cnt || null == f.__cdata || a.keepCData ? f.__cnt > 1 && null != f.__text && a.skipEmptyTextNodesForObj && (a.stripWhitespaces && "" == f.__text || "" == f.__text.trim()) && delete f.__text : f = f.__cdata, delete f.__cnt, !a.enableToStringFunc || null == f.__text && null == f.__cdata || (f.toString = function() {
            return (null != this.__text ? this.__text : "") + (null != this.__cdata ? this.__cdata : "")
          }), f
        }
        if (b.nodeType == z.TEXT_NODE || b.nodeType == z.CDATA_SECTION_NODE) return b.nodeValue
      }

      function m(b, c, d, e) {
        var g = "<" + (null != b && null != b.__prefix ? b.__prefix + ":" : "") + c;
        if (null != d)
          for (var h = 0; h < d.length; h++) {
            var i = d[h],
              j = b[i];
            a.escapeMode && (j = f(j)), g += " " + i.substr(a.attributePrefix.length) + "=", g += a.useDoubleQuotes ? '"' + j + '"' : "'" + j + "'"
          }
        return g += e ? "/>" : ">"
      }

      function n(a, b) {
        return "</" + (null != a.__prefix ? a.__prefix + ":" : "") + b + ">"
      }

      function o(a, b) {
        return a.indexOf(b, a.length - b.length) !== -1
      }

      function p(b, c) {
        return !!("property" == a.arrayAccessForm && o(c.toString(), "_asArray") || 0 == c.toString().indexOf(a.attributePrefix) || 0 == c.toString().indexOf("__") || b[c] instanceof Function)
      }

      function q(a) {
        var b = 0;
        if (a instanceof Object)
          for (var c in a) p(a, c) || b++;
        return b
      }

      function r(b, c, d) {
        return 0 == a.jsonPropertiesFilter.length || "" == d || g(a.jsonPropertiesFilter, b, c, d)
      }

      function s(b) {
        var c = [];
        if (b instanceof Object)
          for (var d in b) d.toString().indexOf("__") == -1 && 0 == d.toString().indexOf(a.attributePrefix) && c.push(d);
        return c
      }

      function t(b) {
        var c = "";
        return null != b.__cdata && (c += "<![CDATA[" + b.__cdata + "]]>"), null != b.__text && (c += a.escapeMode ? f(b.__text) : b.__text), c
      }

      function u(b) {
        var c = "";
        return b instanceof Object ? c += t(b) : null != b && (c += a.escapeMode ? f(b) : b), c
      }

      function v(a, b) {
        return "" === a ? b : a + "." + b
      }

      function w(a, b, c, d) {
        var e = "";
        if (0 == a.length) e += m(a, b, c, !0);
        else
          for (var f = 0; f < a.length; f++) e += m(a[f], b, s(a[f]), !1), e += x(a[f], v(d, b)), e += n(a[f], b);
        return e
      }

      function x(a, b) {
        var c = "",
          d = q(a);
        if (d > 0)
          for (var e in a)
            if (!p(a, e) && ("" == b || r(a, e, v(b, e)))) {
              var f = a[e],
                g = s(f);
              if (null == f || void 0 == f) c += m(f, e, g, !0);
              else if (f instanceof Object)
                if (f instanceof Array) c += w(f, e, g, b);
                else if (f instanceof Date) c += m(f, e, g, !1), c += f.toISOString(), c += n(f, e);
              else {
                var h = q(f);
                h > 0 || null != f.__text || null != f.__cdata ? (c += m(f, e, g, !1), c += x(f, v(b, e)), c += n(f, e)) : c += m(f, e, g, !0)
              } else c += m(f, e, g, !1), c += u(f), c += n(f, e)
            }
        return c += u(a)
      }
      var y = "1.2.0";
      a = a || {}, b(), c();
      var z = {
        ELEMENT_NODE: 1,
        TEXT_NODE: 3,
        CDATA_SECTION_NODE: 4,
        COMMENT_NODE: 8,
        DOCUMENT_NODE: 9
      };
      this.parseXmlString = function(a) {
        var b = window.ActiveXObject || "ActiveXObject" in window;
        if (void 0 === a) return null;
        var c;
        if (window.DOMParser) {
          var d = new window.DOMParser,
            e = null;
          if (!b) try {
            e = d.parseFromString("INVALID", "text/xml").getElementsByTagName("parsererror")[0].namespaceURI
          } catch (f) {
            e = null
          }
          try {
            c = d.parseFromString(a, "text/xml"), null != e && c.getElementsByTagNameNS(e, "parsererror").length > 0 && (c = null)
          } catch (f) {
            c = null
          }
        } else 0 == a.indexOf("<?") && (a = a.substr(a.indexOf("?>") + 2)), c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(a);
        return c
      }, this.asArray = function(a) {
        return void 0 === a || null == a ? [] : a instanceof Array ? a : [a]
      }, this.toXmlDateTime = function(a) {
        return a instanceof Date ? a.toISOString() : "number" == typeof a ? new Date(a).toISOString() : null
      }, this.asDateTime = function(a) {
        return "string" == typeof a ? i(a) : a
      }, this.xml2json = function(a) {
        return l(a)
      }, this.xml_str2json = function(a) {
        var b = this.parseXmlString(a);
        return null != b ? this.xml2json(b) : null
      }, this.json2xml_str = function(a) {
        return x(a, "")
      }, this.json2xml = function(a) {
        var b = this.json2xml_str(a);
        return this.parseXmlString(b)
      }, this.getVersion = function() {
        return y
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    }), c.default = d, b.exports = c.default
  }, {}],
  5: [function(a, b, c) {
    (function(b) {
      "use strict";

      function d(a) {
        return a && a.__esModule ? a : {
          default: a
        }
      }
      Object.defineProperty(c, "__esModule", {
        value: !0
      });
      var e = a(52),
        f = d(e),
        g = a(107),
        h = d(g),
        i = a(76),
        j = d(i),
        k = a(54),
        l = d(k),
        m = a(11),
        n = "undefined" != typeof window && window || b,
        o = n.dashjs;
      o || (o = n.dashjs = {}), o.MediaPlayer = f.default, o.Protection = h.default, o.MetricsReporting = j.default, o.MediaPlayerFactory = l.default, o.Version = (0, m.getVersionString)(), c.default = o, c.MediaPlayer = f.default, c.Protection = h.default, c.MetricsReporting = j.default, c.MediaPlayerFactory = l.default
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
  }, {
    107: 107,
    11: 11,
    52: 52,
    54: 54,
    76: 76
  }],
  6: [function(a, b, c) { /*! codem-isoboxer v0.2.7 https://github.com/madebyhiro/codem-isoboxer/blob/master/LICENSE.txt */
    var d = {};
    d.parseBuffer = function(a) {
      return new e(a).parse()
    }, d.addBoxParser = function(a, b) {
      "string" == typeof a && "function" == typeof b && (f.prototype._boxParsers[a] = b)
    }, d.Utils = {}, d.Utils.dataViewToString = function(a, b) {
      var c = b || "utf-8";
      if ("undefined" != typeof TextDecoder) return new TextDecoder(c).decode(a);
      var d = [],
        e = 0;
      if ("utf-8" === c)
        for (; e < a.byteLength;) {
          var f = a.getUint8(e++);
          f < 128 || (f < 224 ? (f = (31 & f) << 6, f |= 63 & a.getUint8(e++)) : f < 240 ? (f = (15 & f) << 12, f |= (63 & a.getUint8(e++)) << 6, f |= 63 & a.getUint8(e++)) : (f = (7 & f) << 18, f |= (63 & a.getUint8(e++)) << 12, f |= (63 & a.getUint8(e++)) << 6, f |= 63 & a.getUint8(e++))), d.push(String.fromCharCode(f))
        } else
          for (; e < a.byteLength;) d.push(String.fromCharCode(a.getUint8(e++)));
      return d.join("")
    }, "undefined" != typeof c && (c.parseBuffer = d.parseBuffer, c.addBoxParser = d.addBoxParser, c.Utils = d.Utils), d.Cursor = function(a) {
      this.offset = "undefined" == typeof a ? 0 : a
    };
    var e = function(a) {
      this._raw = new DataView(a), this._cursor = new d.Cursor, this.boxes = []
    };
    e.prototype.fetch = function(a) {
      var b = this.fetchAll(a, !0);
      return b.length ? b[0] : null
    }, e.prototype.fetchAll = function(a, b) {
      var c = [];
      return e._sweep.call(this, a, c, b), c
    }, e.prototype.parse = function() {
      for (this._cursor.offset = 0, this.boxes = []; this._cursor.offset < this._raw.byteLength;) {
        var a = f.parse(this);
        if ("undefined" == typeof a.type) break;
        this.boxes.push(a)
      }
      return this
    }, e._sweep = function(a, b, c) {
      this.type && this.type == a && b.push(this);
      for (var d in this.boxes) {
        if (b.length && c) return;
        e._sweep.call(this.boxes[d], a, b, c)
      }
    };
    var f = function() {
      this._cursor = new d.Cursor
    };
    f.parse = function(a) {
      var b = new f;
      return b._offset = a._cursor.offset, b._root = a._root ? a._root : a, b._raw = a._raw, b._parent = a, b._parseBox(), a._cursor.offset = b._raw.byteOffset + b._raw.byteLength, b
    }, f.prototype._readInt = function(a) {
      var b = null;
      switch (a) {
        case 8:
          b = this._raw.getInt8(this._cursor.offset - this._raw.byteOffset);
          break;
        case 16:
          b = this._raw.getInt16(this._cursor.offset - this._raw.byteOffset);
          break;
        case 32:
          b = this._raw.getInt32(this._cursor.offset - this._raw.byteOffset);
          break;
        case 64:
          var c = this._raw.getInt32(this._cursor.offset - this._raw.byteOffset),
            d = this._raw.getInt32(this._cursor.offset - this._raw.byteOffset + 4);
          b = c * Math.pow(2, 32) + d
      }
      return this._cursor.offset += a >> 3, b
    }, f.prototype._readUint = function(a) {
      var b = null;
      switch (a) {
        case 8:
          b = this._raw.getUint8(this._cursor.offset - this._raw.byteOffset);
          break;
        case 16:
          b = this._raw.getUint16(this._cursor.offset - this._raw.byteOffset);
          break;
        case 24:
          var c = this._raw.getUint16(this._cursor.offset - this._raw.byteOffset),
            d = this._raw.getUint8(this._cursor.offset - this._raw.byteOffset + 2);
          b = (c << 8) + d;
          break;
        case 32:
          b = this._raw.getUint32(this._cursor.offset - this._raw.byteOffset);
          break;
        case 64:
          var c = this._raw.getUint32(this._cursor.offset - this._raw.byteOffset),
            d = this._raw.getUint32(this._cursor.offset - this._raw.byteOffset + 4);
          b = c * Math.pow(2, 32) + d
      }
      return this._cursor.offset += a >> 3, b
    }, f.prototype._readString = function(a) {
      for (var b = "", c = 0; c < a; c++) {
        var d = this._readUint(8);
        b += String.fromCharCode(d)
      }
      return b
    }, f.prototype._readTerminatedString = function() {
      for (var a = ""; this._cursor.offset - this._offset < this._raw.byteLength;) {
        var b = this._readUint(8);
        if (0 == b) break;
        a += String.fromCharCode(b)
      }
      return a
    }, f.prototype._readTemplate = function(a) {
      var b = this._readUint(a / 2),
        c = this._readUint(a / 2);
      return b + c / Math.pow(2, a / 2)
    }, f.prototype._parseBox = function() {
      if (this._cursor.offset = this._offset, this._offset + 8 > this._raw.buffer.byteLength) return void(this._root._incomplete = !0);
      switch (this.size = this._readUint(32), this.type = this._readString(4), 1 == this.size && (this.largesize = this._readUint(64)), "uuid" == this.type && (this.usertype = this._readString(16)), this.size) {
        case 0:
          this._raw = new DataView(this._raw.buffer, this._offset, this._raw.byteLength - this._cursor.offset);
          break;
        case 1:
          this._offset + this.size > this._raw.buffer.byteLength ? (this._incomplete = !0, this._root._incomplete = !0) : this._raw = new DataView(this._raw.buffer, this._offset, this.largesize);
          break;
        default:
          this._offset + this.size > this._raw.buffer.byteLength ? (this._incomplete = !0, this._root._incomplete = !0) : this._raw = new DataView(this._raw.buffer, this._offset, this.size)
      }!this._incomplete && this._boxParsers[this.type] && this._boxParsers[this.type].call(this)
    }, f.prototype._parseFullBox = function() {
      this.version = this._readUint(8), this.flags = this._readUint(24)
    }, f.prototype._boxParsers = {}, f.prototype._boxParsers.avc1 = function() {
      this.version = this._readUint(16), this.revision_level = this._readUint(16), this.vendor = this._readUint(32), this.temporal_quality = this._readUint(32), this.spatial_quality = this._readUint(32), this.width = this._readUint(16), this.height = this._readUint(16), this.horizontal_resolution = this._readUint(32), this.vertical_resolution = this._readUint(32), this.data_size = this._readUint(32), this.frame_count = this._readUint(16), this.compressor_name = this._readUint(32), this.depth = this._readUint(16), this.color_table_id = this._readUint(16)
    }, ["moov", "trak", "tref", "mdia", "minf", "stbl", "edts", "dinf", "mvex", "moof", "traf", "mfra", "udta", "meco", "strk", "vttc"].forEach(function(a) {
      f.prototype._boxParsers[a] = function() {
        for (this.boxes = []; this._cursor.offset - this._raw.byteOffset < this._raw.byteLength;) this.boxes.push(f.parse(this))
      }
    }), f.prototype._boxParsers.elst = function() {
      this._parseFullBox(), this.entry_count = this._readUint(32), this.entries = [];
      for (var a = 1; a <= this.entry_count; a++) {
        var b = {};
        1 == this.version ? (b.segment_duration = this._readUint(64), b.media_time = this._readInt(64)) : (b.segment_duration = this._readUint(32), b.media_time = this._readInt(32)), b.media_rate_integer = this._readInt(16), b.media_rate_fraction = this._readInt(16), this.entries.push(b)
      }
    }, f.prototype._boxParsers.emsg = function() {
      this._parseFullBox(), this.scheme_id_uri = this._readTerminatedString(), this.value = this._readTerminatedString(), this.timescale = this._readUint(32), this.presentation_time_delta = this._readUint(32), this.event_duration = this._readUint(32), this.id = this._readUint(32), this.message_data = new DataView(this._raw.buffer, this._cursor.offset, this._raw.byteLength - (this._cursor.offset - this._offset))
    }, f.prototype._boxParsers.free = f.prototype._boxParsers.skip = function() {
      this.data = new DataView(this._raw.buffer, this._cursor.offset, this._raw.byteLength - (this._cursor.offset - this._offset))
    }, f.prototype._boxParsers.ftyp = f.prototype._boxParsers.styp = function() {
      for (this.major_brand = this._readString(4), this.minor_versions = this._readUint(32), this.compatible_brands = []; this._cursor.offset - this._raw.byteOffset < this._raw.byteLength;) this.compatible_brands.push(this._readString(4))
    }, f.prototype._boxParsers.hdlr = function() {
      this._parseFullBox(), this.pre_defined = this._readUint(32), this.handler_type = this._readString(4), this.reserved = [this._readUint(32), this._readUint(32), this._readUint(32)], this.name = this._readTerminatedString()
    }, f.prototype._boxParsers.mdat = function() {
      this.data = new DataView(this._raw.buffer, this._cursor.offset, this._raw.byteLength - (this._cursor.offset - this._offset))
    }, f.prototype._boxParsers.mdhd = function() {
      this._parseFullBox(), 1 == this.version ? (this.creation_time = this._readUint(64), this.modification_time = this._readUint(64), this.timescale = this._readUint(32), this.duration = this._readUint(64)) : (this.creation_time = this._readUint(32), this.modification_time = this._readUint(32), this.timescale = this._readUint(32), this.duration = this._readUint(32));
      var a = this._readUint(16);
      this.pad = a >> 15, this.language = String.fromCharCode((a >> 10 & 31) + 96, (a >> 5 & 31) + 96, (31 & a) + 96), this.pre_defined = this._readUint(16)
    }, f.prototype._boxParsers.mehd = function() {
      this._parseFullBox(), 1 == this.version ? this.fragment_duration = this._readUint(64) : this.fragment_duration = this._readUint(32)
    }, f.prototype._boxParsers.mfhd = function() {
      this._parseFullBox(), this.sequence_number = this._readUint(32)
    }, f.prototype._boxParsers.mfro = function() {
      this._parseFullBox(), this.mfra_size = this._readUint(32)
    }, f.prototype._boxParsers.mp4a = function() {
      this.reserved1 = [this._readUint(32), this._readUint(32)], this.channelcount = this._readUint(16), this.samplesize = this._readUint(16), this.pre_defined = this._readUint(16), this.reserved2 = this._readUint(16), this.sample_rate = this._readUint(32)
    }, f.prototype._boxParsers.mvhd = function() {
      this._parseFullBox(), 1 == this.version ? (this.creation_time = this._readUint(64), this.modification_time = this._readUint(64), this.timescale = this._readUint(32), this.duration = this._readUint(64)) : (this.creation_time = this._readUint(32), this.modification_time = this._readUint(32), this.timescale = this._readUint(32), this.duration = this._readUint(32)), this.rate = this._readTemplate(32), this.volume = this._readTemplate(16), this.reserved1 = this._readUint(16), this.reserved2 = [this._readUint(32), this._readUint(32)], this.matrix = [];
      for (var a = 0; a < 9; a++) this.matrix.push(this._readTemplate(32));
      this.pre_defined = [];
      for (var a = 0; a < 6; a++) this.pre_defined.push(this._readUint(32));
      this.next_track_ID = this._readUint(32)
    }, f.prototype._boxParsers.payl = function() {
      var a = new DataView(this._raw.buffer, this._cursor.offset, this._raw.byteLength - (this._cursor.offset - this._offset));
      this.cue_text = d.Utils.dataViewToString(a)
    }, f.prototype._boxParsers.sidx = function() {
      this._parseFullBox(), this.reference_ID = this._readUint(32), this.timescale = this._readUint(32), 0 == this.version ? (this.earliest_presentation_time = this._readUint(32), this.first_offset = this._readUint(32)) : (this.earliest_presentation_time = this._readUint(64), this.first_offset = this._readUint(64)), this.reserved = this._readUint(16), this.reference_count = this._readUint(16), this.references = [];
      for (var a = 0; a < this.reference_count; a++) {
        var b = {},
          c = this._readUint(32);
        b.reference_type = c >> 31 & 1, b.referenced_size = 2147483647 & c, b.subsegment_duration = this._readUint(32);
        var d = this._readUint(32);
        b.starts_with_SAP = d >> 31 & 1, b.SAP_type = d >> 28 & 7, b.SAP_delta_time = 268435455 & d, this.references.push(b)
      }
    }, f.prototype._boxParsers.ssix = function() {
      this._parseFullBox(), this.subsegment_count = this._readUint(32), this.subsegments = [];
      for (var a = 0; a < this.subsegment_count; a++) {
        var b = {};
        b.ranges_count = this._readUint(32), b.ranges = [];
        for (var c = 0; c < b.ranges_count; c++) {
          var d = {};
          d.level = this._readUint(8), d.range_size = this._readUint(24), b.ranges.push(d)
        }
        this.subsegments.push(b)
      }
    }, f.prototype._boxParsers.stsd = function() {
      this._parseFullBox(), this.entry_count = this._readUint(32), this.entries = [];
      for (var a = 0; a < this.entry_count; a++) this.entries.push(f.parse(this))
    }, f.prototype._boxParsers.subs = function() {
      this._parseFullBox(), this.entry_count = this._readUint(32), this.samples_with_subsamples = [];
      for (var a = 0, b = 0; b < this.entry_count; b++) {
        var c = this._readUint(32);
        a += c;
        var d = this._readUint(16);
        if (d > 0) {
          for (var e = {
              nr: a,
              subsamples: []
            }, f = 0; f < d; f++) {
            var g = {};
            1 & this.version ? g.size = this._readUint(32) : g.size = this._readUint(16), g.priority = this._readUint(8), g.discardable = this._readUint(8), g.codec_specific_parameters = this._readUint(32), e.subsamples.push(g)
          }
          this.samples_with_subsamples.push(e)
        }
      }
    }, f.prototype._boxParsers.tfdt = function() {
      this._parseFullBox(), 1 == this.version ? this.baseMediaDecodeTime = this._readUint(64) : this.baseMediaDecodeTime = this._readUint(32)
    }, f.prototype._boxParsers.tfhd = function() {
      this._parseFullBox(), this.track_ID = this._readUint(32), 1 & this.flags && (this.base_data_offset = this._readUint(64)), 2 & this.flags && (this.sample_description_offset = this._readUint(32)), 8 & this.flags && (this.default_sample_duration = this._readUint(32)), 16 & this.flags && (this.default_sample_size = this._readUint(32)), 32 & this.flags && (this.default_sample_flags = this._readUint(32))
    }, f.prototype._boxParsers.tfra = function() {
      this._parseFullBox(), this.track_ID = this._readUint(32), this._packed = this._readUint(32), this.reserved = this._packed >>> 6, this.length_size_of_traf_num = (this._packed && 0xffff00000000) >>> 4, this.length_size_of_trun_num = (this._packed && 4294901760) >>> 2, this.length_size_of_sample_num = this._packed && 255, this.number_of_entry = this._readUint(32), this.entries = [];
      for (var a = 0; a < this.number_of_entry; a++) {
        var b = {};
        1 == this.version ? (b.time = this._readUint(64), b.moof_offset = this._readUint(64)) : (b.time = this._readUint(32), b.moof_offset = this._readUint(32)), b.traf_number = this._readUint(8 * (this.length_size_of_traf_num + 1)), b.trun_number = this._readUint(8 * (this.length_size_of_trun_num + 1)), b.sample_number = this._readUint(8 * (this.length_size_of_sample_num + 1)), this.entries.push(b)
      }
    }, f.prototype._boxParsers.tkhd = function() {
      this._parseFullBox(), 1 == this.version ? (this.creation_time = this._readUint(64), this.modification_time = this._readUint(64), this.track_ID = this._readUint(32), this.reserved1 = this._readUint(32), this.duration = this._readUint(64)) : (this.creation_time = this._readUint(32), this.modification_time = this._readUint(32), this.track_ID = this._readUint(32), this.reserved1 = this._readUint(32), this.duration = this._readUint(32)), this.reserved2 = [this._readUint(32), this._readUint(32)], this.layer = this._readUint(16), this.alternate_group = this._readUint(16), this.volume = this._readTemplate(16), this.reserved3 = this._readUint(16), this.matrix = [];
      for (var a = 0; a < 9; a++) this.matrix.push(this._readTemplate(32));
      this.width = this._readUint(32), this.height = this._readUint(32)
    }, f.prototype._boxParsers.trex = function() {
      this._parseFullBox(), this.track_ID = this._readUint(32), this.default_sample_description_index = this._readUint(32), this.default_sample_duration = this._readUint(32), this.default_sample_size = this._readUint(32), this.default_sample_flags = this._readUint(32)
    }, f.prototype._boxParsers.trun = function() {
      this._parseFullBox(), this.sample_count = this._readUint(32), 1 & this.flags && (this.data_offset = this._readInt(32)), 4 & this.flags && (this.first_sample_flags = this._readUint(32)), this.samples = [];
      for (var a = 0; a < this.sample_count; a++) {
        var b = {};
        256 & this.flags && (b.sample_duration = this._readUint(32)), 512 & this.flags && (b.sample_size = this._readUint(32)), 1024 & this.flags && (b.sample_flags = this._readUint(32)), 2048 & this.flags && (0 == this.version ? b.sample_composition_time_offset = this._readUint(32) : b.sample_composition_time_offset = this._readInt(32)), this.samples.push(b)
      }
    }, f.prototype._boxParsers.vlab = function() {
      var a = new DataView(this._raw.buffer, this._cursor.offset, this._raw.byteLength - (this._cursor.offset - this._offset));
      this.source_label = d.Utils.dataViewToString(a)
    }, f.prototype._boxParsers.vttC = function() {
      var a = new DataView(this._raw.buffer, this._cursor.offset, this._raw.byteLength - (this._cursor.offset - this._offset));
      this.config = d.Utils.dataViewToString(a)
    }, f.prototype._boxParsers.vtte = function() {}
  }, {}],
  7: [function(a, b, c) {
    var d = c.decimalAdjust = function(a, b, c) {
      return "undefined" == typeof c || 0 === +c ? Math[a](b) : (b = +b, c = +c, isNaN(b) || "number" != typeof c || c % 1 !== 0 ? NaN : (b = b.toString().split("e"), b = Math[a](+(b[0] + "e" + (b[1] ? +b[1] - c : -c))), b = b.toString().split("e"), +(b[0] + "e" + (b[1] ? +b[1] + c : c))))
    };
    b.exports = {
      round10: function(a, b) {
        return d("round", a, b)
      },
      floor10: function(a, b) {
        return d("floor", a, b)
      },
      ceil10: function(a, b) {
        return d("ceil", a, b)
      }
    }, b.exports.polyfill = function() {
      Math.round10 || (Math.round10 = b.exports.round10), Math.floor10 || (Math.floor10 = b.exports.floor10), Math.ceil10 || (Math.ceil10 = b.exports.ceil10)
    }
  }, {}],
  8: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        k = !0, l = !0, m = (new Date).getTime()
      }

      function b(a) {
        l = a
      }

      function c(a) {
        k = a
      }

      function d() {
        return k
      }

      function e() {
        var a = "",
          b = null;
        l && (b = (new Date).getTime(), a += "[" + (b - m) + "]"), a.length > 0 && (a += " "), Array.apply(null, arguments).forEach(function(b) {
          a += b + " "
        }), k && console.log(a), h.trigger(i.default.LOG, {
          message: a
        })
      }
      var f = this.context,
        h = (0, g.default)(f).getInstance(),
        j = void 0,
        k = void 0,
        l = void 0,
        m = void 0;
      return j = {
        log: e,
        setLogTimestampVisible: b,
        setLogToBrowserConsole: c,
        getLogToBrowserConsole: d
      }, a(), j
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(9),
      g = d(f),
      h = a(13),
      i = d(h),
      j = a(10),
      k = d(j);
    e.__dashjs_factory_name = "Debug", c.default = k.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    13: 13,
    9: 9
  }],
  9: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a, b, c) {
        var e = arguments.length <= 3 || void 0 === arguments[3] ? h : arguments[3];
        if (!a) throw new Error("event type cannot be null or undefined");
        if (!b || "function" != typeof b) throw new Error("listener must be a function: " + b);
        if (!(d(a, b, c) >= 0)) {
          f[a] = f[a] || [];
          var g = {
              callback: b,
              scope: c,
              priority: e
            },
            i = f[a].some(function(b, c) {
              if (e > b.priority) return f[a].splice(c, 0, g), !0
            });
          i || f[a].push(g)
        }
      }

      function b(a, b, c) {
        if (a && b && f[a]) {
          var e = d(a, b, c);
          e < 0 || f[a].splice(e, 1)
        }
      }

      function c(a, b) {
        if (a && f[a]) {
          if (b = b || {}, b.hasOwnProperty("type")) throw new Error("'type' is a reserved word for event dispatching");
          b.type = a, f[a].forEach(function(a) {
            return a.callback.call(a.scope, b)
          })
        }
      }

      function d(a, b, c) {
        var d = -1;
        return f[a] ? (f[a].some(function(a, e) {
          if (a.callback === b && (!c || c === a.scope)) return d = e, !0
        }), d) : d
      }

      function e() {
        f = {}
      }
      var f = {},
        g = {
          on: a,
          off: b,
          trigger: c,
          reset: e
        };
      return g
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f),
      h = 0,
      i = 5e3;
    e.__dashjs_factory_name = "EventBus";
    var j = g.default.getSingletonFactory(e);
    j.EVENT_PRIORITY_LOW = h, j.EVENT_PRIORITY_HIGH = i, c.default = j, b.exports = c.default
  }, {
    10: 10
  }],
  10: [function(a, b, c) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var d = function() {
      function a(a, b, c, d) {
        var e = g(d);
        !e[a] && b && (e[a] = {
          instance: b,
          override: c
        })
      }

      function b(a, b) {
        for (var c in j) {
          var d = j[c];
          if (d.context === a && d.name === b) return d.instance
        }
        return null
      }

      function c(a, b, c) {
        for (var d in j) {
          var e = j[d];
          if (e.context === a && e.name === b) return void(j[d].instance = c)
        }
        j.push({
          name: b,
          context: a,
          instance: c
        })
      }

      function d(a) {
        return function(b) {
          return void 0 === b && (b = {}), {
            create: function() {
              return f(a.__dashjs_factory_name, a.apply({
                context: b
              }, arguments), b, arguments)
            }
          }
        }
      }

      function e(a) {
        return function(c) {
          var d = void 0;
          return void 0 === c && (c = {}), {
            getInstance: function() {
              return d || (d = b(c, a.__dashjs_factory_name)), d || (d = f(a.__dashjs_factory_name, a.apply({
                context: c
              }, arguments), c, arguments), j.push({
                name: a.__dashjs_factory_name,
                context: c,
                instance: d
              })), d
            }
          }
        }
      }

      function f(a, b, c, d) {
        var e = g(c),
          f = e[a];
        if (f) {
          var i = f.instance;
          if (!f.override) return i.apply({
            context: c,
            factory: h
          }, d);
          i = i.apply({
            context: c,
            factory: h,
            parent: b
          }, d);
          for (var j in i) b.hasOwnProperty(j) && (b[j] = i[j])
        }
        return b
      }

      function g(a) {
        var b = void 0;
        return i.forEach(function(c) {
          c === a && (b = c)
        }), b || (b = i.push(a)), b
      }
      var h = void 0,
        i = [],
        j = [];
      return h = {
        extend: a,
        getSingletonInstance: b,
        setSingletonInstance: c,
        getSingletonFactory: e,
        getClassFactory: d
      }
    }();
    c.default = d, b.exports = c.default
  }, {}],
  11: [function(a, b, c) {
    "use strict";

    function d() {
      return e
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    }), c.getVersionString = d;
    var e = "2.4.1"
  }, {}],
  12: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function f(a, b) {
      if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
      a.prototype = Object.create(b && b.prototype, {
        constructor: {
          value: a,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var g = function(a, b, c) {
        for (var d = !0; d;) {
          var e = a,
            f = b,
            g = c;
          d = !1, null === e && (e = Function.prototype);
          var h = Object.getOwnPropertyDescriptor(e, f);
          if (void 0 !== h) {
            if ("value" in h) return h.value;
            var i = h.get;
            if (void 0 === i) return;
            return i.call(g)
          }
          var j = Object.getPrototypeOf(e);
          if (null === j) return;
          a = j, b = f, c = g, d = !0, h = j = void 0
        }
      },
      h = a(14),
      i = d(h),
      j = function(a) {
        function b() {
          e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this), this.BUFFERING_COMPLETED = "bufferingCompleted", this.BUFFER_CLEARED = "bufferCleared", this.BUFFER_LEVEL_UPDATED = "bufferLevelUpdated", this.BYTES_APPENDED = "bytesAppended", this.CHECK_FOR_EXISTENCE_COMPLETED = "checkForExistenceCompleted", this.CURRENT_TRACK_CHANGED = "currentTrackChanged", this.DATA_UPDATE_COMPLETED = "dataUpdateCompleted", this.DATA_UPDATE_STARTED = "dataUpdateStarted", this.INITIALIZATION_LOADED = "initializationLoaded", this.INIT_FRAGMENT_LOADED = "initFragmentLoaded", this.INIT_REQUESTED = "initRequested", this.INTERNAL_MANIFEST_LOADED = "internalManifestLoaded", this.LIVE_EDGE_SEARCH_COMPLETED = "liveEdgeSearchCompleted", this.LOADING_COMPLETED = "loadingCompleted", this.LOADING_PROGRESS = "loadingProgress", this.MANIFEST_UPDATED = "manifestUpdated", this.MEDIA_FRAGMENT_LOADED = "mediaFragmentLoaded", this.QUOTA_EXCEEDED = "quotaExceeded", this.REPRESENTATION_UPDATED = "representationUpdated", this.SEGMENTS_LOADED = "segmentsLoaded", this.SERVICE_LOCATION_BLACKLIST_CHANGED = "serviceLocationBlacklistChanged", this.SOURCEBUFFER_APPEND_COMPLETED = "sourceBufferAppendCompleted", this.SOURCEBUFFER_REMOVE_COMPLETED = "sourceBufferRemoveCompleted", this.STREAMS_COMPOSED = "streamsComposed", this.STREAM_BUFFERING_COMPLETED = "streamBufferingCompleted", this.STREAM_COMPLETED = "streamCompleted", this.STREAM_TEARDOWN_COMPLETE = "streamTeardownComplete", this.TIMED_TEXT_REQUESTED = "timedTextRequested", this.TIME_SYNCHRONIZATION_COMPLETED = "timeSynchronizationComplete", this.URL_RESOLUTION_FAILED = "urlResolutionFailed", this.WALLCLOCK_TIME_UPDATED = "wallclockTimeUpdated", this.XLINK_ELEMENT_LOADED = "xlinkElementLoaded", this.XLINK_READY = "xlinkReady"
        }
        return f(b, a), b
      }(i.default);
    c.default = j, b.exports = c.default
  }, {
    14: 14
  }],
  13: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function f(a, b) {
      if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
      a.prototype = Object.create(b && b.prototype, {
        constructor: {
          value: a,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var g = function(a, b, c) {
        for (var d = !0; d;) {
          var e = a,
            f = b,
            g = c;
          d = !1, null === e && (e = Function.prototype);
          var h = Object.getOwnPropertyDescriptor(e, f);
          if (void 0 !== h) {
            if ("value" in h) return h.value;
            var i = h.get;
            if (void 0 === i) return;
            return i.call(g)
          }
          var j = Object.getPrototypeOf(e);
          if (null === j) return;
          a = j, b = f, c = g, d = !0, h = j = void 0
        }
      },
      h = a(12),
      i = d(h),
      j = function(a) {
        function b() {
          e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).apply(this, arguments)
        }
        return f(b, a), b
      }(i.default),
      k = new j;
    c.default = k, b.exports = c.default
  }, {
    12: 12
  }],
  14: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function() {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
          }
        }
        return function(b, c, d) {
          return c && a(b.prototype, c), d && a(b, d), b
        }
      }(),
      f = function() {
        function a() {
          d(this, a)
        }
        return e(a, [{
          key: "extend",
          value: function(a, b) {
            if (a) {
              var c = !!b && b.override,
                d = !!b && b.publicOnly;
              for (var e in a) !a.hasOwnProperty(e) || this[e] && !c || d && a[e].indexOf("public_") === -1 || (this[e] = a[e])
            }
          }
        }]), a
      }();
    c.default = f, b.exports = c.default
  }, {}],
  15: [function(a, b, c) {
    "use strict";

    function d(a) {
      if (a && a.__esModule) return a;
      var b = {};
      if (null != a)
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
      return b.default = a, b
    }

    function e(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function f() {
      function a(a) {
        a && a.dashManifestModel && (I = a.dashManifestModel)
      }

      function b() {
        J = [], K = {}
      }

      function c(a, b) {
        return b.getRepresentationForQuality(a.quality)
      }

      function d(a) {
        return K ? K[a.streamInfo.id][a.index] : null
      }

      function e(a) {
        for (var b = J.length, c = 0; c < b; c++) {
          var d = J[c];
          if (a.id === d.id) return d
        }
        return null
      }

      function f(a, b) {
        var c = new h.default,
          d = b.adaptation.period.mpd.manifest.Period_asArray[b.adaptation.period.index].AdaptationSet_asArray[b.adaptation.index],
          e = I.getRepresentationFor(b.index, d);
        return c.id = b.id, c.quality = b.index, c.bandwidth = I.getBandwidth(e), c.DVRWindow = b.segmentAvailabilityRange, c.fragmentDuration = b.segmentDuration || (b.segments && b.segments.length > 0 ? b.segments[0].duration : NaN), c.MSETimeOffset = b.MSETimeOffset, c.useCalculatedLiveEdgeTime = b.useCalculatedLiveEdgeTime, c.mediaInfo = g(a, b.adaptation), c
      }

      function g(a, b) {
        var c, d = new j.default,
          e = b.period.mpd.manifest.Period_asArray[b.period.index].AdaptationSet_asArray[b.index];
        return d.id = b.id, d.index = b.index, d.type = b.type, d.streamInfo = k(a, b.period), d.representationCount = I.getRepresentationCount(e), d.lang = I.getLanguageForAdaptation(e), c = I.getViewpointForAdaptation(e), d.viewpoint = c ? c.value : void 0, d.accessibility = I.getAccessibilityForAdaptation(e).map(function(a) {
          var b = a.value,
            c = b;
          return a.schemeIdUri && a.schemeIdUri.search("cea-608") >= 0 && "undefined" != typeof t.default && (c = b ? "cea-608:" + b : "cea-608", d.embeddedCaptions = !0), c
        }), d.audioChannelConfiguration = I.getAudioChannelConfigurationForAdaptation(e).map(function(a) {
          return a.value
        }), d.roles = I.getRolesForAdaptation(e).map(function(a) {
          return a.value
        }), d.codec = I.getCodec(e), d.mimeType = I.getMimeType(e), d.contentProtection = I.getContentProtectionData(e), d.bitrateList = I.getBitrateListForAdaptation(e), d.contentProtection && d.contentProtection.forEach(function(a) {
          a.KID = I.getKID(a)
        }), d.isText = I.getIsTextTrack(d.mimeType), d
      }

      function i(a, b, c) {
        a.id = b, a.index = 100 + parseInt(b.substring(2, 3)), a.type = "embeddedText", a.codec = "cea-608-in-SEI", a.isText = !0, a.isEmbedded = !0, a.lang = b + " " + c, a.roles = ["caption"]
      }

      function k(a, b) {
        var c = new l.default,
          d = 1;
        return c.id = b.id, c.index = b.index, c.start = b.start, c.duration = b.duration, c.manifestInfo = m(a, b.mpd), c.isLast = 1 === a.Period_asArray.length || Math.abs(c.start + c.duration - c.manifestInfo.duration) < d, c.isFirst = 1 === a.Period_asArray.length || I.getRegularPeriods(a, I.getMpd(a))[0].id === b.id, c
      }

      function m(a, b) {
        var c = new n.default;
        return c.DVRWindowSize = b.timeShiftBufferDepth, c.loadedTime = b.manifest.loadedTime, c.availableFrom = b.availabilityStartTime, c.minBufferTime = b.manifest.minBufferTime, c.maxFragmentDuration = b.maxSegmentDuration, c.duration = I.getDuration(a), c.isDynamic = I.getIsDynamic(a), c
      }

      function o(a, b, c) {
        var d = I.getAdaptationForType(a, b.index, c, b);
        if (!d) return null;
        var f = e(b),
          h = f.id,
          i = I.getIndexForAdaptation(d, a, b.index);
        return K[h] = K[h] || I.getAdaptationsForPeriod(a, f), g(a, K[h][i])
      }

      function q(a, b, c) {
        var d, f, h, j, k, l, m = e(b),
          n = m.id,
          o = I.getAdaptationsForType(a, b.index, "embeddedText" !== c ? c : "video"),
          p = [];
        if (!o) return p;
        for (K[n] = K[n] || I.getAdaptationsForPeriod(a, m), j = 0, l = o.length; j < l; j++) {
          if (d = o[j], h = I.getIndexForAdaptation(d, a, b.index), f = g(a, K[n][h]), "embeddedText" === c) {
            var q = f.accessibility.length;
            for (k = 0; k < q; k++)
              if (f) {
                var r = f.accessibility[k];
                if (0 === r.indexOf("cea-608:")) {
                  var s = r.substring(8),
                    t = s.split(";");
                  if ("CC" === t[0].substring(0, 2))
                    for (k = 0; k < t.length; k++) f || (f = g.call(this, a, K[n][h])), i(f, t[k].substring(0, 3), t[k].substring(4)), p.push(f), f = null;
                  else
                    for (k = 0; k < t.length; k++) f || (f = g.call(this, a, K[n][h])), i(f, "CC" + (k + 1), t[k]), p.push(f), f = null
                } else 0 === r.indexOf("cea-608") && (i(f, "CC1", "eng"), p.push(f), f = null)
              }
          }
          f && "embeddedText" !== c && p.push(f)
        }
        return p
      }

      function r(a) {
        if (!a) return null;
        var b = [],
          c = I.getMpd(a);
        J = I.getRegularPeriods(a, c), K = {};
        for (var d = 0, e = J.length; d < e; d++) b.push(k(a, J[d]));
        return b
      }

      function s(a) {
        var b = I.getMpd(a);
        return m(a, b)
      }

      function u(a, b) {
        var c = a.getRepresentationController().getRepresentationForQuality(b);
        return a.getIndexHandler().getInitRequest(c)
      }

      function w(a, b) {
        var d = c(b, a.getRepresentationController());
        return a.getIndexHandler().getNextSegmentRequest(d)
      }

      function x(a, b, d, e) {
        var f = c(b, a.getRepresentationController());
        return a.getIndexHandler().getSegmentRequestForTime(f, d, e)
      }

      function y(a, b, d) {
        var e = c(b, a.getRepresentationController());
        return a.getIndexHandler().generateSegmentRequestForTime(e, d)
      }

      function z(a) {
        return a.getIndexHandler().getCurrentTime()
      }

      function A(a, b) {
        return a.getIndexHandler().setCurrentTime(b)
      }

      function B(a, b) {
        var c, f, g = e(b.getStreamInfo()),
          h = b.getMediaInfo(),
          i = d(h),
          j = b.getType();
        c = h.id, f = c ? I.getAdaptationForId(c, a, g.index) : I.getAdaptationForIndex(h.index, a, g.index), b.getRepresentationController().updateData(f, i, j)
      }

      function C(a, b, c) {
        var d = b.getRepresentationForQuality(c);
        return d ? f(a, d) : null
      }

      function D(a, b) {
        var c = b.getCurrentRepresentation();
        return c ? f(a, c) : null
      }

      function E(a, b, c) {
        var d = new p.default,
          e = a.scheme_id_uri,
          f = a.value,
          g = a.timescale,
          h = a.presentation_time_delta,
          i = a.event_duration,
          j = a.id,
          k = a.message_data,
          l = c * g + h;
        return b[e] ? (d.eventStream = b[e], d.eventStream.value = f, d.eventStream.timescale = g, d.duration = i, d.id = j, d.presentationTime = l, d.messageData = k, d.presentationTimeDelta = h, d) : null
      }

      function F(a, b, f) {
        var g = [];
        return b instanceof l.default ? g = I.getEventsForPeriod(a, e(b)) : b instanceof j.default ? g = I.getEventStreamForAdaptationSet(a, d(b)) : b instanceof h.default && (g = I.getEventStreamForRepresentation(a, c(b, f.getRepresentationController()))), g
      }

      function G() {
        J = [], K = {}
      }
      var H = void 0,
        I = void 0,
        J = void 0,
        K = void 0;
      return H = {
        initialize: b,
        convertDataToTrack: f,
        convertDataToMedia: g,
        convertDataToStream: k,
        getDataForTrack: c,
        getDataForMedia: d,
        getDataForStream: e,
        getStreamsInfo: r,
        getManifestInfo: s,
        getMediaInfoForType: o,
        getAllMediaInfoForType: q,
        getCurrentRepresentationInfo: D,
        getRepresentationInfoForQuality: C,
        updateData: B,
        getInitRequest: u,
        getNextFragmentRequest: w,
        getFragmentRequestForTime: x,
        generateFragmentRequestForTime: y,
        getIndexHandlerTime: z,
        setIndexHandlerTime: A,
        getEventsFor: F,
        getEvent: E,
        setConfig: a,
        reset: G,
        metricsList: v
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var g = a(173),
      h = e(g),
      i = a(168),
      j = e(i),
      k = a(170),
      l = e(k),
      m = a(167),
      n = e(m),
      o = a(42),
      p = e(o),
      q = a(10),
      r = e(q),
      s = a(2),
      t = e(s),
      u = a(20),
      v = d(u);
    f.__dashjs_factory_name = "DashAdapter", c.default = r.default.getSingletonFactory(f), b.exports = c.default
  }, {
    10: 10,
    167: 167,
    168: 168,
    170: 170,
    173: 173,
    2: 2,
    20: 20,
    42: 42
  }],
  16: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b() {
        V = -1, Z = 0, $ = NaN, N.on(l.default.INITIALIZATION_LOADED, J, U), N.on(l.default.SEGMENTS_LOADED, K, U)
      }

      function c(b) {
        _ = b, Y = _.getType(), X = _.isDynamic(), aa = (0, y.default)(L).create(a, X)
      }

      function d() {
        return _
      }

      function e(a) {
        Z = a
      }

      function f() {
        return Z
      }

      function h() {
        return V
      }

      function k() {
        return $
      }

      function m() {
        aa = null, Z = 0, $ = NaN, W = NaN, V = -1, X = null, Y = null, _ = null, N.off(l.default.INITIALIZATION_LOADED, J, U), N.off(l.default.SEGMENTS_LOADED, K, U)
      }

      function o(a) {
        return a ? a.split("$$").join("$") : a
      }

      function p(a, b) {
        if (null === b || null === a || a.indexOf("$RepresentationID$") === -1) return a;
        var c = b.toString();
        return a.split("$RepresentationID$").join(c)
      }

      function q(a, b, c) {
        var d, e, f = T.resolve(c.path);
        return f && b !== f.url && O.isRelative(b) ? (d = f.url, e = f.serviceLocation, b && (d = O.resolve(b, d))) : d = b, !O.isRelative(d) && (a.url = d, a.serviceLocation = e, !0)
      }

      function s(a, b) {
        var c = new g.default,
          d = a.adaptation.period,
          e = d.start;
        if (c.mediaType = b, c.type = j.HTTPRequest.INIT_SEGMENT_TYPE, c.range = a.range, c.availabilityStartTime = Q.calcAvailabilityStartTimeFromPresentationTime(e, d.mpd, X), c.availabilityEndTime = Q.calcAvailabilityEndTimeFromPresentationTime(e + d.duration, d.mpd, X), c.quality = a.index, c.mediaInfo = _.getMediaInfo(), q(c, a.initialization, a)) return c
      }

      function u(a) {
        if (!a) return null;
        var b = s(a, Y);
        return b
      }

      function x(a) {
        var b = !1;
        if (X || V !== a.availableSegmentsNumber) {
          var c = (0, w.getSegmentByIndex)(V, a);
          if (c) {
            var d = c.presentationStartTime - a.adaptation.period.start,
              e = a.adaptation.period.duration;
            M(a.segmentInfoType + ": " + d + " / " + e), b = ("SegmentTimeline" !== a.segmentInfoType || !X) && d >= e
          }
        } else b = !0;
        return b
      }

      function A(a) {
        return aa.getSegments(a, W, V, B)
      }

      function B(a, b) {
        if (a.segments = b, b && b.length > 0 && ($ = isNaN($) ? b[0].presentationStartTime : Math.min(b[0].presentationStartTime, $)), X && isNaN(Q.getExpectedLiveEdge())) {
          var c = b[b.length - 1],
            d = c.presentationStartTime,
            e = S.getMetricsFor("stream");
          Q.setExpectedLiveEdge(d), S.updateManifestUpdateInfo(R.getCurrentManifestUpdate(e), {
            presentationStartTime: d
          })
        }
      }

      function C(a) {
        if (!a) throw new i.default("no representation");
        return a.segments = null, A(a), a
      }

      function D(a, b) {
        var c, d = v.default.hasInitialization(a),
          e = v.default.hasSegments(a);
        return a.segmentDuration || a.segments || C(a), a.segmentAvailabilityRange = null, a.segmentAvailabilityRange = Q.calcSegmentAvailabilityRange(a, X), a.segmentAvailabilityRange.end < a.segmentAvailabilityRange.start && !a.useCalculatedLiveEdgeTime ? (c = new i.default(z, "no segments are available yet", {
          availabilityDelay: a.segmentAvailabilityRange.start - a.segmentAvailabilityRange.end
        }), void N.trigger(l.default.REPRESENTATION_UPDATED, {
          sender: this,
          representation: a,
          error: c
        })) : (b || (V = -1), a.segmentDuration && C(a), d || P.loadInitialization(a), e || P.loadSegments(a, Y, a.indexRange), void(d && e && N.trigger(l.default.REPRESENTATION_UPDATED, {
          sender: this,
          representation: a
        })))
      }

      function E(a, b, c) {
        var d, e, f, g, h, i = b.segments,
          j = i ? i.length : null,
          k = -1;
        if (i && j > 0)
          for (h = 0; h < j; h++)
            if (e = i[h], f = e.presentationStartTime, g = e.duration, d = void 0 === c || null === c ? g / 2 : c, a + d >= f && a - d < f + g) {
              k = e.availabilityIdx;
              break
            }
        return k
      }

      function F(a) {
        if (null === a || void 0 === a) return null;
        var b = new g.default,
          c = a.representation,
          d = c.adaptation.period.mpd.manifest.Period_asArray[c.adaptation.period.index].AdaptationSet_asArray[c.adaptation.index].Representation_asArray[c.index].bandwidth,
          e = a.media;
        return e = (0, w.replaceTokenForTemplate)(e, "Number", a.replacementNumber), e = (0, w.replaceTokenForTemplate)(e, "Time", a.replacementTime), e = (0, w.replaceTokenForTemplate)(e, "Bandwidth", d), e = p(e, c.id), e = o(e), b.mediaType = Y, b.type = j.HTTPRequest.MEDIA_SEGMENT_TYPE, b.range = a.mediaRange, b.startTime = a.presentationStartTime, b.duration = a.duration, b.timescale = c.timescale, b.availabilityStartTime = a.availabilityStartTime, b.availabilityEndTime = a.availabilityEndTime, b.wallStartTime = a.wallStartTime, b.quality = c.index, b.index = a.availabilityIdx, b.mediaInfo = _.getMediaInfo(), b.adaptationIndex = c.adaptation.index, q(b, e, c) ? b : void 0
      }

      function G(a, b, c) {
        var d, e, f, h = V,
          i = !!c && c.keepIdx,
          j = c ? c.timeThreshold : null,
          k = !(!c || !c.ignoreIsFinished);
        return a ? (W !== b && (W = b, M("Getting the request for " + Y + " time : " + b)), A(a), V = E(b, a, j), V < 0 && (A(a), V = E(b, a, j)), V > 0 && M("Index for " + Y + " time " + b + " is " + V), f = !k && x(a), f ? (d = new g.default, d.action = g.default.ACTION_COMPLETE, d.index = V, d.mediaType = Y, d.mediaInfo = _.getMediaInfo(), M("Signal complete.", d)) : (e = (0, w.getSegmentByIndex)(V, a), d = F(e)), i && h >= 0 && (V = "SegmentTimeline" === a.segmentInfoType && X ? V : h), d) : null
      }

      function H(a, b) {
        var c = (a.segmentAvailabilityRange.end - a.segmentAvailabilityRange.start) / 2;
        return a.segments = null, a.segmentAvailabilityRange = {
          start: b - c,
          end: b + c
        }, G(a, b, {
          keepIdx: !1,
          ignoreIsFinished: !0
        })
      }

      function I(a) {
        var b, c, d;
        return a && V !== -1 ? (W = null, V++, M("Getting the next request at index: " + V), d = x(a), d ? (b = new g.default, b.action = g.default.ACTION_COMPLETE, b.index = V, b.mediaType = Y, b.mediaInfo = _.getMediaInfo(), M("Signal complete.")) : (A(a), c = (0, w.getSegmentByIndex)(V, a), b = F(c), !c && X && V--), b) : null
      }

      function J(a) {
        var b = a.representation;
        b.segments && N.trigger(l.default.REPRESENTATION_UPDATED, {
          sender: this,
          representation: b
        })
      }

      function K(a) {
        if (!a.error && Y === a.mediaType) {
          var b, c, d, e, f = a.segments,
            g = a.representation,
            h = [],
            i = 0;
          for (b = 0, c = f.length; b < c; b++) d = f[b], e = (0, w.getTimeBasedSegment)(Q, X, g, d.startTime, d.duration, d.timescale, d.media, d.mediaRange, i), h.push(e), e = null, i++;
          g.segmentAvailabilityRange = {
            start: h[0].presentationStartTime,
            end: h[c - 1].presentationStartTime
          }, g.availableSegmentsNumber = c, B(g, h), v.default.hasInitialization(g) && N.trigger(l.default.REPRESENTATION_UPDATED, {
            sender: this,
            representation: g
          })
        }
      }
      var L = this.context,
        M = (0, r.default)(L).getInstance().log,
        N = (0, n.default)(L).getInstance(),
        O = (0, t.default)(L).getInstance(),
        P = a.segmentBaseLoader,
        Q = a.timelineConverter,
        R = a.dashMetrics,
        S = a.metricsModel,
        T = a.baseURLController,
        U = void 0,
        V = void 0,
        W = void 0,
        X = void 0,
        Y = void 0,
        Z = void 0,
        $ = void 0,
        _ = void 0,
        aa = void 0;
      return U = {
        initialize: c,
        getStreamProcessor: d,
        getInitRequest: u,
        getSegmentRequestForTime: G,
        getNextSegmentRequest: I,
        generateSegmentRequestForTime: H,
        updateRepresentation: D,
        setCurrentTime: e,
        getCurrentTime: f,
        getCurrentIndex: h,
        getEarliestTime: k,
        reset: m
      }, b(), U
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(164),
      g = d(f),
      h = a(163),
      i = d(h),
      j = a(180),
      k = a(13),
      l = d(k),
      m = a(9),
      n = d(m),
      o = a(10),
      p = d(o),
      q = a(8),
      r = d(q),
      s = a(159),
      t = d(s),
      u = a(46),
      v = d(u),
      w = a(36),
      x = a(35),
      y = d(x),
      z = 1;
    e.__dashjs_factory_name = "DashHandler";
    var A = p.default.getClassFactory(e);
    A.SEGMENTS_UNAVAILABLE_ERROR_CODE = z, c.default = A, b.exports = c.default
  }, {
    10: 10,
    13: 13,
    159: 159,
    163: 163,
    164: 164,
    180: 180,
    35: 35,
    36: 36,
    46: 46,
    8: 8,
    9: 9
  }],
  17: [function(a, b, c) {
    "use strict";

    function d(a) {
      if (a && a.__esModule) return a;
      var b = {};
      if (null != a)
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
      return b.default = a, b
    }

    function e(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function f() {
      function a(a, b) {
        var c, d = C.getValue(),
          e = d.Period_asArray[b];
        return c = x(e, a), null === c ? null : c.bandwidth
      }

      function b(a, b) {
        var c, d = C.getValue(),
          e = d.Period_asArray[b];
        return c = w(e, a)
      }

      function c(a, b) {
        var c, d = C.getValue(),
          e = d.Period_asArray[b];
        return c = z(e, a)
      }

      function d(a) {
        return m(a, o.TRACK_SWITCH)
      }

      function e(a) {
        return m(a, o.BUFFER_LEVEL)
      }

      function f(a) {
        var b = e(a);
        return b ? (0, p.round10)(b.level / 1e3, -3) : 0
      }

      function h(a) {
        return a.RequestsQueue
      }

      function j(a) {
        if (null === a) return null;
        var b, c, d = a.HttpList,
          e = null;
        if (null === d || d.length <= 0) return null;
        for (b = d.length, c = b - 1; c >= 0;) {
          if (d[c].responsecode) {
            e = d[c];
            break
          }
          c--
        }
        return e
      }

      function l(a) {
        return null === a ? [] : a.HttpList ? a.HttpList : []
      }

      function m(a, b) {
        if (null === a) return null;
        var c = a[b];
        if (null === c) return null;
        var d = c.length;
        return d <= 0 ? null : c[d - 1]
      }

      function n(a) {
        return m(a, o.DROPPED_FRAMES)
      }

      function q(a) {
        return m(a, o.SCHEDULING_INFO)
      }

      function r(a) {
        return m(a, o.MANIFEST_UPDATE)
      }

      function s(a) {
        return m(a, o.DVR_INFO)
      }

      function t(a, b) {
        var c, d, e, f = {};
        if (null === a) return null;
        for (c = l(a), e = c.length - 1; e >= 0; e--)
          if (d = c[e], d.type === g.HTTPRequest.MPD_TYPE) {
            f = v(d._responseHeaders);
            break
          }
        return void 0 === f[b] ? null : f[b]
      }

      function u(a, b) {
        if (null === a) return null;
        var c, d = j(a);
        return null === d || null === d._responseHeaders ? null : (c = v(d._responseHeaders), void 0 === c[b] ? null : c[b])
      }

      function v(a) {
        var b = {};
        if (!a) return b;
        for (var c = a.trim().split("\r\n"), d = 0, e = c.length; d < e; d++) {
          var f = c[d],
            g = f.indexOf(": ");
          g > 0 && (b[f.substring(0, g)] = f.substring(g + 2))
        }
        return b
      }

      function w(a, b) {
        var c = x(a, b, !0);
        return null !== c ? c : -1
      }

      function x(a, b, c) {
        var d, e, f, g, h, i;
        for (e = a.AdaptationSet_asArray, h = 0; h < e.length; h += 1)
          for (d = e[h], g = d.Representation_asArray, i = 0; i < g.length; i += 1)
            if (f = g[i], b === f.id) return c ? i : f;
        return null
      }

      function y(a, b) {
        return (0, k.default)(B).getInstance().getIsTypeOf(a, b)
      }

      function z(a, b) {
        var c, d, e, f;
        if (!a || !b) return -1;
        for (d = a.AdaptationSet_asArray, f = 0; f < d.length; f += 1)
          if (c = d[f], e = c.Representation_asArray, y(c, b)) return e.length;
        return -1
      }
      var A = void 0,
        B = this.context,
        C = (0, i.default)(B).getInstance();
      return A = {
        getBandwidthForRepresentation: a,
        getIndexForRepresentation: b,
        getMaxIndexForBufferType: c,
        getCurrentRepresentationSwitch: d,
        getLatestBufferLevelVO: e,
        getCurrentBufferLevel: f,
        getCurrentHttpRequest: j,
        getHttpRequests: l,
        getCurrentDroppedFrames: n,
        getCurrentSchedulingInfo: q,
        getCurrentDVRInfo: s,
        getCurrentManifestUpdate: r,
        getLatestFragmentRequestHeaderValueByID: u,
        getLatestMPDRequestHeaderValueByID: t,
        getRequestsQueue: h
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var g = a(180),
      h = a(101),
      i = e(h),
      j = a(22),
      k = e(j),
      l = a(10),
      m = e(l),
      n = a(20),
      o = d(n),
      p = a(7);
    f.__dashjs_factory_name = "DashMetrics", c.default = m.default.getSingletonFactory(f), b.exports = c.default
  }, {
    10: 10,
    101: 101,
    180: 180,
    20: 20,
    22: 22,
    7: 7
  }],
  18: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        u = (0, m.default)(n).getInstance(), v = (0, s.default)(n).getInstance(), y = (0, g.default)(n).getInstance(), C = (0, B.default)(n).create({
          errHandler: u,
          metricsModel: A,
          requestModifier: y
        })
      }

      function b(a) {
        a.baseURLController && (D = a.baseURLController), a.metricsModel && (A = a.metricsModel)
      }

      function c(a, b) {
        var d = null,
          e = null,
          f = D.resolve(a.path),
          g = b || {
            init: !0,
            url: f ? f.url : void 0,
            range: {
              start: 0,
              end: 1500
            },
            searching: !1,
            bytesLoaded: 0,
            bytesToLoad: 1500
          };
        p("Start searching for initialization.");
        var i = j(g),
          k = function(b) {
            g.bytesLoaded = g.range.end, e = v.parse(b), d = h(e), d ? (a.range = d, r.trigger(o.default.INITIALIZATION_LOADED, {
              representation: a
            })) : (g.range.end = g.bytesLoaded + g.bytesToLoad, c(a, g))
          },
          l = function() {
            r.trigger(o.default.INITIALIZATION_LOADED, {
              representation: a
            })
          };
        C.load({
          request: i,
          success: k,
          error: l
        }), p("Perform init search: " + g.url)
      }

      function d(a, b, c, e, g) {
        if (c && (void 0 === c.start || void 0 === c.end)) {
          var h = c ? c.toString().split("-") : null;
          c = h ? {
            start: parseFloat(h[0]),
            end: parseFloat(h[1])
          } : null
        }
        g = g ? g : l;
        var i = null,
          k = null,
          m = !!c,
          n = D.resolve(a.path),
          o = {
            init: !1,
            url: n ? n.url : void 0,
            range: m ? c : {
              start: 0,
              end: 1500
            },
            searching: !m,
            bytesLoaded: e ? e.bytesLoaded : 0,
            bytesToLoad: 1500
          },
          q = j(o),
          r = function(c) {
            var e = o.bytesToLoad,
              h = c.byteLength;
            if (o.bytesLoaded = o.range.end - o.range.start, i = v.parse(c), k = i.getBox("sidx"), k && k.isComplete) {
              var j, l, m = k.references;
              if (null !== m && void 0 !== m && m.length > 0 && (j = 1 === m[0].reference_type), j) {
                p("Initiate multiple SIDX load."), o.range.end = o.range.start + k.size;
                var n, q, r, s, t, u = [],
                  w = 0,
                  x = (k.offset || o.range.start) + k.size,
                  y = function(c) {
                    c ? (u = u.concat(c), w++, w >= q && g(u, a, b)) : g(null, a, b)
                  };
                for (n = 0, q = m.length; n < q; n++) r = x, s = x + m[n].referenced_size - 1, x += m[n].referenced_size, t = {
                  start: r,
                  end: s
                }, d(a, null, t, o, y)
              } else p("Parsing segments from SIDX."), l = f(k, o), g(l, a, b)
            } else {
              if (k) o.range.start = k.offset || o.range.start, o.range.end = o.range.start + (k.size || e);
              else {
                if (h < o.bytesLoaded) return void g(null, a, b);
                var z = i.getLastBox();
                z && z.size ? (o.range.start = z.offset + z.size, o.range.end = o.range.start + e) : o.range.end += e
              }
              d(a, b, o.range, o, g)
            }
          },
          s = function() {
            g(null, a, b)
          };
        C.load({
          request: q,
          success: r,
          error: s
        }), p("Perform SIDX load: " + o.url)
      }

      function e() {
        C.abort(), C = null, u = null, v = null, y = null
      }

      function f(a, b) {
        for (var c, d, e, f, g = a.references, h = g.length, j = a.timescale, k = a.earliest_presentation_time, l = b.range.start + a.offset + a.first_offset + a.size, m = [], n = 0; n < h; n++) e = g[n].subsegment_duration, f = g[n].referenced_size, c = new i.default, c.duration = e, c.startTime = k, c.timescale = j, d = l + f - 1, c.mediaRange = l + "-" + d, m.push(c), k += e, l += f;
        return m
      }

      function h(a) {
        var b, c, d = a.getBox("ftyp"),
          e = a.getBox("moov"),
          f = null;
        return p("Searching for initialization."), e && e.isComplete && (b = d ? d.offset : e.offset, c = e.offset + e.size - 1, f = b + "-" + c, p("Found the initialization.  Range: " + f)), f
      }

      function j(a) {
        if (a.url) {
          var b = new z.default;
          return b.type = a.init ? x.HTTPRequest.INIT_SEGMENT_TYPE : x.HTTPRequest.MEDIA_SEGMENT_TYPE, b.url = a.url, b.range = a.range.start + "-" + a.range.end, b
        }
      }

      function l(a, b, c) {
        a ? r.trigger(o.default.SEGMENTS_LOADED, {
          segments: a,
          representation: b,
          mediaType: c
        }) : r.trigger(o.default.SEGMENTS_LOADED, {
          segments: null,
          representation: b,
          mediaType: c,
          error: new k.default(null, "error loading segments", null)
        })
      }
      var n = this.context,
        p = (0, w.default)(n).getInstance().log,
        r = (0, q.default)(n).getInstance(),
        t = void 0,
        u = void 0,
        v = void 0,
        y = void 0,
        A = void 0,
        C = void 0,
        D = void 0;
      return t = {
        setConfig: b,
        initialize: a,
        loadInitialization: c,
        loadSegments: d,
        reset: e
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(157),
      g = d(f),
      h = a(47),
      i = d(h),
      j = a(163),
      k = d(j),
      l = a(152),
      m = d(l),
      n = a(13),
      o = d(n),
      p = a(9),
      q = d(p),
      r = a(147),
      s = d(r),
      t = a(10),
      u = d(t),
      v = a(8),
      w = d(v),
      x = a(180),
      y = a(164),
      z = d(y),
      A = a(59),
      B = d(A);
    e.__dashjs_factory_name = "SegmentBaseLoader", c.default = u.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    13: 13,
    147: 147,
    152: 152,
    157: 157,
    163: 163,
    164: 164,
    180: 180,
    47: 47,
    59: 59,
    8: 8,
    9: 9
  }],
  19: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        y = {
          EBML: {
            tag: 440786851,
            required: !0
          },
          Segment: {
            tag: 408125543,
            required: !0,
            SeekHead: {
              tag: 290298740,
              required: !0
            },
            Info: {
              tag: 357149030,
              required: !0,
              TimecodeScale: {
                tag: 2807729,
                required: !0,
                parse: "getMatroskaUint"
              },
              Duration: {
                tag: 17545,
                required: !0,
                parse: "getMatroskaFloat"
              }
            },
            Tracks: {
              tag: 374648427,
              required: !0
            },
            Cues: {
              tag: 475249515,
              required: !0,
              CuePoint: {
                tag: 187,
                required: !0,
                CueTime: {
                  tag: 179,
                  required: !0,
                  parse: "getMatroskaUint"
                },
                CueTrackPositions: {
                  tag: 183,
                  required: !0,
                  CueTrack: {
                    tag: 247,
                    required: !0,
                    parse: "getMatroskaUint"
                  },
                  CueClusterPosition: {
                    tag: 241,
                    required: !0,
                    parse: "getMatroskaUint"
                  },
                  CueBlockNumber: {
                    tag: 21368
                  }
                }
              }
            }
          },
          Void: {
            tag: 236,
            required: !0
          }
        }
      }

      function b() {
        A = (0, q.default)(p).getInstance(), B = (0, s.default)(p).getInstance(), D = (0, z.default)(p).create({
          errHandler: A,
          metricsModel: C,
          requestModifier: B
        })
      }

      function c(a) {
        if (!a.baseURLController || !a.metricsModel) throw new Error("Missing config parameter(s)");
        E = a.baseURLController, C = a.metricsModel
      }

      function d(a) {
        var b = [],
          c = void 0,
          d = void 0,
          e = void 0,
          f = (0, k.default)(p).create({
            data: a
          }),
          g = void 0;
        for (f.consumeTag(y.Segment.Cues), d = f.getMatroskaCodedNum(); f.moreData() && f.consumeTagAndSize(y.Segment.Cues.CuePoint, !0);) {
          for (c = {}, c.CueTime = f.parseTag(y.Segment.Cues.CuePoint.CueTime), c.CueTracks = []; f.moreData() && f.consumeTagAndSize(y.Segment.Cues.CuePoint.CueTrackPositions, !0);) {
            if (e = {}, e.Track = f.parseTag(y.Segment.Cues.CuePoint.CueTrackPositions.CueTrack), 0 === e.Track) throw new Error("Cue track cannot be 0");
            e.ClusterPosition = f.parseTag(y.Segment.Cues.CuePoint.CueTrackPositions.CueClusterPosition), f.getPos() + 4 > d || !f.consumeTag(y.Segment.Cues.CuePoint.CueTrackPositions.CueBlockNumber, !0) ? c.CueTracks.push(e) : (g = f.getMatroskaCodedNum(), e.BlockNumber = f.getMatroskaUint(g), c.CueTracks.push(e))
          }
          if (0 === c.CueTracks.length) throw new Error("Mandatory cuetrack not found");
          b.push(c)
        }
        if (0 === b.length) throw new Error("mandatory cuepoint not found");
        return b
      }

      function e(a, b, c, e) {
        var f = void 0,
          g = void 0,
          h = void 0,
          i = void 0,
          j = void 0,
          k = void 0,
          l = void 0,
          m = void 0;
        for (g = d(a), h = [], j = 0, k = g.length; j < k; j += 1) i = new u.default, f = 0, f = j < g.length - 1 ? g[j + 1].CueTime - g[j].CueTime : e - g[j].CueTime, i.duration = f, i.startTime = g[j].CueTime, i.timescale = 1e3, l = g[j].CueTracks[0].ClusterPosition + b, m = j < g.length - 1 ? g[j + 1].CueTracks[0].ClusterPosition + b - 1 : c - 1, i.mediaRange = l + "-" + m, h.push(i);
        return r("Parsed cues: " + h.length + " cues."), h
      }

      function f(a, b, c, d) {
        var f = (0, k.default)(p).create({
            data: a
          }),
          g = void 0,
          h = void 0,
          i = c.split("-"),
          j = null,
          l = {
            url: b,
            range: {
              start: parseFloat(i[0]),
              end: parseFloat(i[1])
            },
            request: j
          },
          n = void 0,
          o = void 0;
        for (r("Parse EBML header: " + l.url), f.skipOverElement(y.EBML), f.consumeTag(y.Segment), n = f.getMatroskaCodedNum(), n += f.getPos(), o = f.getPos(); f.moreData() && !f.consumeTagAndSize(y.Segment.Info, !0);)
          if (!(f.skipOverElement(y.Segment.SeekHead, !0) || f.skipOverElement(y.Segment.Tracks, !0) || f.skipOverElement(y.Segment.Cues, !0) || f.skipOverElement(y.Void, !0))) throw new Error("no valid top level element found");
        for (; void 0 === g;) {
          var q = f.getMatroskaCodedNum(!0),
            s = f.getMatroskaCodedNum();
          switch (q) {
            case y.Segment.Info.Duration.tag:
              g = f[y.Segment.Info.Duration.parse](s);
              break;
            default:
              f.setPos(f.getPos() + s)
          }
        }
        j = m(l);
        var t = function(a) {
            h = e(a, o, n, g), d(h)
          },
          u = function() {
            r("Download Error: Cues " + l.url), d(null)
          };
        D.load({
          request: j,
          success: t,
          error: u
        }), r("Perform cues load: " + l.url + " bytes=" + l.range.start + "-" + l.range.end)
      }

      function h(a, b) {
        var c = null,
          d = E.resolve(a.path),
          e = d ? d.url : void 0,
          f = a.range.split("-"),
          h = b || {
            range: {
              start: parseFloat(f[0]),
              end: parseFloat(f[1])
            },
            request: c,
            url: e,
            init: !0
          };
        r("Start loading initialization."), c = m(h);
        var i = function() {
            t.trigger(g.default.INITIALIZATION_LOADED, {
              representation: a
            })
          },
          j = function() {
            t.trigger(g.default.INITIALIZATION_LOADED, {
              representation: a
            })
          };
        D.load({
          request: c,
          success: i,
          error: j
        }), r("Perform init load: " + h.url)
      }

      function j(a, b, c, d) {
        var e = null,
          g = E.resolve(a.path),
          h = g ? g.url : void 0,
          i = 8192,
          j = {
            bytesLoaded: 0,
            bytesToLoad: i,
            range: {
              start: 0,
              end: i
            },
            request: e,
            url: h,
            init: !1
          };
        d = d ? d : l, e = m(j), r("Parsing ebml header");
        var k = function(e) {
            f(e, h, c, function(c) {
              d(c, a, b)
            })
          },
          n = function() {
            d(null, a, b)
          };
        D.load({
          request: e,
          success: k,
          error: n
        })
      }

      function l(a, b, c) {
        a ? t.trigger(g.default.SEGMENTS_LOADED, {
          segments: a,
          representation: b,
          mediaType: c
        }) : t.trigger(g.default.SEGMENTS_LOADED, {
          segments: null,
          representation: b,
          mediaType: c,
          error: new Error(null, "error loading segments", null)
        })
      }

      function m(a) {
        var b = new x.default;
        return b.type = a.init ? v.HTTPRequest.INIT_SEGMENT_TYPE : v.HTTPRequest.MEDIA_SEGMENT_TYPE, b.url = a.url, b.range = a.range.start + "-" + a.range.end, b
      }

      function n() {
        A = null, B = null, r = null
      }
      var p = this.context,
        r = (0, o.default)(p).getInstance().log,
        t = (0, i.default)(p).getInstance(),
        w = void 0,
        y = void 0,
        A = void 0,
        B = void 0,
        C = void 0,
        D = void 0,
        E = void 0;
      return w = {
        setConfig: c,
        initialize: b,
        loadInitialization: h,
        loadSegments: j,
        reset: n
      }, a(), w
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(13),
      g = d(f),
      h = a(9),
      i = d(h),
      j = a(151),
      k = d(j),
      l = a(10),
      m = d(l),
      n = a(8),
      o = d(n),
      p = a(152),
      q = d(p),
      r = a(157),
      s = d(r),
      t = a(47),
      u = d(t),
      v = a(180),
      w = a(164),
      x = d(w),
      y = a(59),
      z = d(y);
    e.__dashjs_factory_name = "WebmSegmentBaseLoader", c.default = m.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    13: 13,
    151: 151,
    152: 152,
    157: 157,
    164: 164,
    180: 180,
    47: 47,
    59: 59,
    8: 8,
    9: 9
  }],
  20: [function(a, b, c) {
    "use strict";
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var d = "TcpList";
    c.TCP_CONNECTION = d;
    var e = "HttpList";
    c.HTTP_REQUEST = e;
    var f = "RepSwitchList";
    c.TRACK_SWITCH = f;
    var g = "BufferLevel";
    c.BUFFER_LEVEL = g;
    var h = "BufferState";
    c.BUFFER_STATE = h;
    var i = "DVRInfo";
    c.DVR_INFO = i;
    var j = "DroppedFrames";
    c.DROPPED_FRAMES = j;
    var k = "SchedulingInfo";
    c.SCHEDULING_INFO = k;
    var l = "RequestsQueue";
    c.REQUESTS_QUEUE = l;
    var m = "ManifestUpdate";
    c.MANIFEST_UPDATE = m;
    var n = "ManifestUpdatePeriodInfo";
    c.MANIFEST_UPDATE_STREAM_INFO = n;
    var o = "ManifestUpdateRepresentationInfo";
    c.MANIFEST_UPDATE_TRACK_INFO = o;
    var p = "PlayList";
    c.PLAY_LIST = p;
    var q = "DVBErrors";
    c.DVB_ERRORS = q
  }, {}],
  21: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        Q = null, R = -1, S = !0, T = [], W = (0, m.default)(N).getInstance(), Y = (0, q.default)(N).getInstance(), Z = (0, o.default)(N).getInstance(), $ = (0, s.default)(N).getInstance(), _ = (0, u.default)(N).getInstance(), aa = (0, y.default)(N).getInstance(), ba = (0, k.default)(N).getInstance(), ca = (0, g.default)(N).getInstance(), da = (0, i.default)(N).getInstance(), ea = (0, w.default)(N).getInstance(), O.on(E.default.QUALITY_CHANGE_REQUESTED, L, P), O.on(E.default.REPRESENTATION_UPDATED, H, P), O.on(E.default.WALLCLOCK_TIME_UPDATED, I, P), O.on(E.default.BUFFER_LEVEL_UPDATED, J, P)
      }

      function b(a) {
        a.abrController && (W = a.abrController)
      }

      function c(a) {
        V = a, X = V.getIndexHandler()
      }

      function d() {
        return V
      }

      function e() {
        return Q
      }

      function f() {
        return R
      }

      function h() {
        return S
      }

      function j() {
        return U
      }

      function l() {
        O.off(E.default.QUALITY_CHANGE_REQUESTED, L, P), O.off(E.default.REPRESENTATION_UPDATED, H, P), O.off(E.default.WALLCLOCK_TIME_UPDATED, I, P), O.off(E.default.BUFFER_LEVEL_UPDATED, J, P), Q = null, R = -1, S = !0, T = [], W = null, Y = null, Z = null, $ = null, _ = null, aa = null, ba = null, ca = null, da = null, ea = null
      }

      function n(a, b, c) {
        var d, e, f = null,
          g = V.getStreamInfo(),
          h = W.getTopQualityIndexFor(c, g.id);
        if (S = !0, O.trigger(E.default.DATA_UPDATE_STARTED, {
            sender: this
          }), T = z(b), null === Q && "fragmentedText" !== c ? (e = W.getAverageThroughput(c), f = e || W.getInitialBitrateFor(c, g), d = W.getQualityForBitrate(V.getMediaInfo(), f)) : d = W.getQualityFor(c, g), d > h && (d = h), U = t(d), Q = a, "video" !== c && "audio" !== c && "fragmentedText" !== c) return S = !1, void O.trigger(E.default.DATA_UPDATE_COMPLETED, {
          sender: this,
          data: Q,
          currentRepresentation: U
        });
        for (var i = 0; i < T.length; i++) X.updateRepresentation(T[i], !0)
      }

      function p() {
        var a = new Date,
          b = j(),
          c = 1e3 * Z.getTime();
        _.addRepresentationSwitch(b.adaptation.type, a, c, b.id)
      }

      function r() {
        var a = ba.calcSegmentAvailabilityRange(U, V.isDynamic());
        _.addDVRInfo(V.getType(), Z.getTime(), V.getStreamInfo().manifestInfo, a)
      }

      function t(a) {
        return T[a]
      }

      function v(a) {
        return T.indexOf(a)
      }

      function x() {
        for (var a = 0, b = T.length; a < b; a++) {
          var c = T[a].segmentInfoType;
          if (null === T[a].segmentAvailabilityRange || !K.default.hasInitialization(T[a]) || ("SegmentBase" === c || "BaseURL" === c) && !T[a].segments) return !1
        }
        return !0
      }

      function z(a) {
        var b, c = $.getValue();
        return R = ca.getIndexForAdaptation(Q, c, a.period.index), b = ca.getRepresentationsForAdaptation(c, a)
      }

      function B(a) {
        for (var b, c = 0, d = T.length; c < d; c++) b = T[c], b.segmentAvailabilityRange = ba.calcSegmentAvailabilityRange(b, a)
      }

      function D() {
        T.forEach(function(a) {
          a.segmentAvailabilityRange = null
        })
      }

      function F(a) {
        var b = a,
          c = function() {
            if (!h()) {
              S = !0, O.trigger(E.default.DATA_UPDATE_STARTED, {
                sender: P
              }), D();
              for (var a = 0; a < T.length; a++) X.updateRepresentation(T[a], !0)
            }
          };
        S = !1, O.trigger(G.default.AST_IN_FUTURE, {
          delay: b
        }), setTimeout(c, b)
      }

      function H(a) {
        if (a.sender.getStreamProcessor() === V && h()) {
          var b, c, d, e = a.representation,
            f = _.getMetricsFor("stream"),
            g = _.getMetricsFor(j().adaptation.type),
            i = da.getCurrentManifestUpdate(f),
            k = !1,
            l = 0;
          if ("dynamic" === e.adaptation.period.mpd.manifest.type) {
            var m = e.segmentAvailabilityRange.end - e.segmentAvailabilityRange.start,
              n = Z.computeLiveDelay(U.segmentDuration, V.getStreamInfo().manifestInfo.DVRWindowSize);
            l = 1e3 * (n - m)
          }
          if (l > 0) return r(), F(l), c = new A.default(M, "Segments update failed", null), void O.trigger(E.default.DATA_UPDATE_COMPLETED, {
            sender: this,
            data: Q,
            currentRepresentation: U,
            error: c
          });
          if (i) {
            for (var o = 0; o < i.trackInfo.length; o++)
              if (b = i.trackInfo[o], b.index === e.index && b.mediaType === V.getType()) {
                k = !0;
                break
              }
            k || _.addManifestUpdateRepresentationInfo(i, e.id, e.index, e.adaptation.period.index, V.getType(), e.presentationTimeOffset, e.startNumber, e.segmentInfoType)
          }
          x() && (S = !1, W.setPlaybackQuality(V.getType(), V.getStreamInfo(), v(U)), _.updateManifestUpdateInfo(i, {
            latency: U.segmentAvailabilityRange.end - Z.getTime()
          }), d = da.getCurrentRepresentationSwitch(g), d || p(), O.trigger(E.default.DATA_UPDATE_COMPLETED, {
            sender: this,
            data: Q,
            currentRepresentation: U
          }))
        }
      }

      function I(a) {
        a.isDynamic && B(a.isDynamic)
      }

      function J(a) {
        a.sender.getStreamProcessor() === V && r()
      }

      function L(a) {
        a.mediaType === V.getType() && V.getStreamInfo().id === a.streamInfo.id && a.oldQuality !== a.newQuality && (U = t(a.newQuality), aa.setSavedBitrateSettings(a.mediaType, U.bandwidth), p())
      }
      var M = 1,
        N = this.context,
        O = (0, C.default)(N).getInstance(),
        P = void 0,
        Q = void 0,
        R = void 0,
        S = void 0,
        T = void 0,
        U = void 0,
        V = void 0,
        W = void 0,
        X = void 0,
        Y = void 0,
        Z = void 0,
        $ = void 0,
        _ = void 0,
        aa = void 0,
        ba = void 0,
        ca = void 0,
        da = void 0,
        ea = void 0;
      return P = {
        initialize: c,
        setConfig: b,
        getData: e,
        getDataIndex: f,
        isUpdating: h,
        updateData: n,
        getStreamProcessor: d,
        getCurrentRepresentation: j,
        getRepresentationForQuality: t,
        reset: l
      }, a(), P
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(22),
      g = d(f),
      h = a(17),
      i = d(h),
      j = a(38),
      k = d(j),
      l = a(61),
      m = d(l),
      n = a(69),
      o = d(n),
      p = a(72),
      q = d(p),
      r = a(101),
      s = d(r),
      t = a(103),
      u = d(t),
      v = a(102),
      w = d(v),
      x = a(150),
      y = d(x),
      z = a(163),
      A = d(z),
      B = a(9),
      C = d(B),
      D = a(13),
      E = d(D),
      F = a(53),
      G = d(F),
      H = a(10),
      I = d(H),
      J = a(46),
      K = d(J);
    e.__dashjs_factory_name = "RepresentationController", c.default = I.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    101: 101,
    102: 102,
    103: 103,
    13: 13,
    150: 150,
    163: 163,
    17: 17,
    22: 22,
    38: 38,
    46: 46,
    53: 53,
    61: 61,
    69: 69,
    72: 72,
    9: 9
  }],
  22: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a, b) {
        var c, d, e, f = !1,
          g = !1,
          h = a.ContentComponent_asArray,
          i = "text" !== b ? new RegExp(b) : new RegExp("(vtt|ttml)");
        if (a.Representation_asArray.length > 0 && a.Representation_asArray[0].hasOwnProperty("codecs")) {
          var j = a.Representation_asArray[0].codecs;
          if (0 === j.search("stpp") || 0 === j.search("wvtt")) return "fragmentedText" === b
        }
        if (h) {
          if (h.length > 1) return "muxed" === b;
          h[0] && h[0].contentType === b && (f = !0, g = !0)
        }
        if (a.hasOwnProperty("mimeType") && (f = i.test(a.mimeType), g = !0), !g)
          for (c = 0, d = a.Representation_asArray.length; !g && c < d;) e = a.Representation_asArray[c], e.hasOwnProperty("mimeType") && (f = i.test(e.mimeType), g = !0), c++;
        return f
      }

      function b(b) {
        return a(b, "audio")
      }

      function c(b) {
        return a(b, "video")
      }

      function d(b) {
        return a(b, "fragmentedText")
      }

      function e(b) {
        return a(b, "text")
      }

      function f(b) {
        return a(b, "muxed")
      }

      function h(a) {
        return "text/vtt" === a || "application/ttml+xml" === a
      }

      function j(a) {
        var b = "";
        return a.hasOwnProperty("lang") && (b = a.lang.replace(/[^A-Za-z0-9-]/g, "")), b
      }

      function l(a) {
        return a.hasOwnProperty("Viewpoint") ? a.Viewpoint : null
      }

      function n(a) {
        return a.hasOwnProperty("Role_asArray") ? a.Role_asArray : []
      }

      function p(a) {
        return a.hasOwnProperty("Accessibility_asArray") ? a.Accessibility_asArray : []
      }

      function r(a) {
        return a.hasOwnProperty("AudioChannelConfiguration_asArray") ? a.AudioChannelConfiguration_asArray : []
      }

      function t(a) {
        return n(a).filter(function(a) {
          return "main" === a.value
        })[0]
      }

      function v() {
        return function(a, b) {
          return a.bandwidth - b.bandwidth
        }
      }

      function x(a) {
        return void 0 !== a.Representation_asArray && null !== a.Representation_asArray && a.Representation_asArray.sort(v()), a
      }

      function z(a, b, c) {
        var d, e, f = b.Period_asArray[c].AdaptationSet_asArray;
        for (d = 0, e = f.length; d < e; d++)
          if (f[d].hasOwnProperty("id") && f[d].id === a) return f[d];
        return null
      }

      function B(a, b, c) {
        var d = b.Period_asArray[c].AdaptationSet_asArray;
        return d[a]
      }

      function D(a, b, c) {
        var d, e, f = b.Period_asArray[c].AdaptationSet_asArray;
        for (d = 0, e = f.length; d < e; d++)
          if (f[d] === a) return d;
        return -1
      }

      function E(b, c, d) {
        var e, f, g = b.Period_asArray[c].AdaptationSet_asArray,
          h = [];
        for (e = 0, f = g.length; e < f; e++) a(g[e], d) && h.push(x(g[e]));
        return h
      }

      function F(a, b, c, d) {
        var e = E(a, b, c);
        if (!e || 0 === e.length) return null;
        if (e.length > 1 && d)
          for (var f = ja.getCurrentTrackFor(c, d), g = ka.getAllMediaInfoForType(a, d, c), h = 0, i = e.length; h < i; h++) {
            if (f && ja.isTracksEqual(f, g[h])) return e[h];
            if (t(e[h])) return e[h]
          }
        return e[0]
      }

      function G(a) {
        var b = a.Representation_asArray[0];
        return b.mimeType + ';codecs="' + b.codecs + '"'
      }

      function H(a) {
        return a.Representation_asArray[0].mimeType
      }

      function I(a) {
        return a && a.hasOwnProperty("cenc:default_KID") ? a["cenc:default_KID"] : null
      }

      function J(a) {
        return a && a.hasOwnProperty("ContentProtection_asArray") && 0 !== a.ContentProtection_asArray.length ? a.ContentProtection_asArray : null
      }

      function K(a) {
        var b = !1;
        return a.hasOwnProperty("type") && (b = "dynamic" === a.type), b
      }

      function L(a) {
        var b, c, d = K(a);
        return b = !isNaN(a.timeShiftBufferDepth), c = d && b
      }

      function M(a, b) {
        var c = !1;
        return a.profiles && a.profiles.length > 0 && (c = a.profiles.indexOf(b) !== -1), c
      }

      function N(a) {
        return M(a, "urn:mpeg:dash:profile:isoff-on-demand:2011")
      }

      function O(a) {
        return M(a, "urn:dvb:dash:profile:dvb-dash:2014")
      }

      function P(a) {
        var b;
        return b = a.hasOwnProperty("mediaPresentationDuration") ? a.mediaPresentationDuration : Number.MAX_VALUE
      }

      function Q(a) {
        return a.bandwidth
      }

      function R(a) {
        var b = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
          c = NaN;
        return a.hasOwnProperty("minimumUpdatePeriod") && (c = a.minimumUpdatePeriod), isNaN(c) ? c : Math.max(c - b, 1)
      }

      function S(a) {
        return a.Representation_asArray.length
      }

      function T(a) {
        if (!a || !a.Representation_asArray || !a.Representation_asArray.length) return null;
        for (var b = x(a), c = b.Representation_asArray, d = c.length, e = [], f = 0; f < d; f++) e.push({
          bandwidth: c[f].bandwidth,
          width: c[f].width || 0,
          height: c[f].height || 0
        });
        return e
      }

      function U(a, b) {
        return b.Representation_asArray[a]
      }

      function V(a, b) {
        for (var c, d, e, f, i, j = x(a.Period_asArray[b.period.index].AdaptationSet_asArray[b.index]), k = [], l = 0; l < j.Representation_asArray.length; l++) f = j.Representation_asArray[l], c = new g.default, c.index = l, c.adaptation = b, f.hasOwnProperty("id") && (c.id = f.id), f.hasOwnProperty("bandwidth") && (c.bandwidth = f.bandwidth), f.hasOwnProperty("maxPlayoutRate") && (c.maxPlayoutRate = f.maxPlayoutRate), f.hasOwnProperty("SegmentBase") ? (e = f.SegmentBase, c.segmentInfoType = "SegmentBase") : f.hasOwnProperty("SegmentList") ? (e = f.SegmentList, e.hasOwnProperty("SegmentTimeline") ? (c.segmentInfoType = "SegmentTimeline", i = e.SegmentTimeline.S_asArray[e.SegmentTimeline.S_asArray.length - 1], (!i.hasOwnProperty("r") || i.r >= 0) && (c.useCalculatedLiveEdgeTime = !0)) : (c.segmentInfoType = "SegmentList", c.useCalculatedLiveEdgeTime = !0)) : f.hasOwnProperty("SegmentTemplate") ? (e = f.SegmentTemplate, e.hasOwnProperty("SegmentTimeline") ? (c.segmentInfoType = "SegmentTimeline", i = e.SegmentTimeline.S_asArray[e.SegmentTimeline.S_asArray.length - 1], (!i.hasOwnProperty("r") || i.r >= 0) && (c.useCalculatedLiveEdgeTime = !0)) : c.segmentInfoType = "SegmentTemplate", e.hasOwnProperty("initialization") && (c.initialization = e.initialization.split("$Bandwidth$").join(f.bandwidth).split("$RepresentationID$").join(f.id))) : c.segmentInfoType = "BaseURL", e && (e.hasOwnProperty("Initialization") ? (d = e.Initialization, d.hasOwnProperty("sourceURL") ? c.initialization = d.sourceURL : d.hasOwnProperty("range") && (c.range = d.range)) : f.hasOwnProperty("mimeType") && h(f.mimeType) && (c.range = 0), e.hasOwnProperty("timescale") && (c.timescale = e.timescale), e.hasOwnProperty("duration") && (c.segmentDuration = e.duration / c.timescale), e.hasOwnProperty("startNumber") && (c.startNumber = e.startNumber), e.hasOwnProperty("indexRange") && (c.indexRange = e.indexRange), e.hasOwnProperty("presentationTimeOffset") && (c.presentationTimeOffset = e.presentationTimeOffset / c.timescale)), c.MSETimeOffset = ia.calcMSETimeOffset(c), c.path = [b.period.index, b.index, l], k.push(c);
        return k
      }

      function W(a, e) {
        for (var g, h, j = a.Period_asArray[e.index], k = [], l = 0; l < j.AdaptationSet_asArray.length; l++) h = j.AdaptationSet_asArray[l], g = new i.default, h.hasOwnProperty("id") && (g.id = h.id), g.index = l, g.period = e, f(h) ? g.type = "muxed" : b(h) ? g.type = "audio" : c(h) ? g.type = "video" : d(h) ? g.type = "fragmentedText" : g.type = "text", k.push(g);
        return k
      }

      function X(a, b) {
        var c, d, e = K(a),
          f = [],
          g = null,
          h = null,
          i = null,
          j = null;
        for (d = 0, c = a.Period_asArray.length; d < c; d++) h = a.Period_asArray[d], h.hasOwnProperty("start") ? (j = new k.default, j.start = h.start) : null !== g && h.hasOwnProperty("duration") && null !== i ? (j = new k.default, j.start = i.start + i.duration, j.duration = h.duration) : 0 !== d || e || (j = new k.default, j.start = 0), null !== i && isNaN(i.duration) && (i.duration = j.start - i.start), null !== j && (j.id = Y(h, d)), null !== j && h.hasOwnProperty("duration") && (j.duration = h.duration), null !== j && (j.index = d, j.mpd = b, f.push(j), g = h, i = j), h = null, j = null;
        return 0 === f.length ? f : (null !== i && isNaN(i.duration) && (i.duration = $(a, i) - i.start), f)
      }

      function Y(a, b) {
        if (!a) throw new Error("Period cannot be null or undefined");
        var c = k.default.DEFAULT_ID + "_" + b;
        return a.hasOwnProperty("id") && "__proto__" !== a.id && (c = a.id), c
      }

      function Z(a) {
        var b = new m.default;
        return b.manifest = a, a.hasOwnProperty("availabilityStartTime") ? b.availabilityStartTime = new Date(a.availabilityStartTime.getTime()) : b.availabilityStartTime = new Date(a.loadedTime.getTime()), a.hasOwnProperty("availabilityEndTime") && (b.availabilityEndTime = new Date(a.availabilityEndTime.getTime())), a.hasOwnProperty("minimumUpdatePeriod") && (b.minimumUpdatePeriod = a.minimumUpdatePeriod), a.hasOwnProperty("mediaPresentationDuration") && (b.mediaPresentationDuration = a.mediaPresentationDuration), a.hasOwnProperty("suggestedPresentationDelay") && (b.suggestedPresentationDelay = a.suggestedPresentationDelay), a.hasOwnProperty("timeShiftBufferDepth") && (b.timeShiftBufferDepth = a.timeShiftBufferDepth), a.hasOwnProperty("maxSegmentDuration") && (b.maxSegmentDuration = a.maxSegmentDuration), b
      }

      function $(a, b) {
        var c = K(a),
          d = void 0;
        if (a.mediaPresentationDuration) d = a.mediaPresentationDuration;
        else if (b.duration) d = b.duration;
        else {
          if (!c) throw new Error("Must have @mediaPresentationDuratio on MPD or an explicit @duration on the last period.");
          d = Number.POSITIVE_INFINITY
        }
        return d
      }

      function _(a, b) {
        var c = a.Period_asArray,
          d = c[b.index].EventStream_asArray,
          e = [];
        if (d)
          for (var f = 0; f < d.length; f++) {
            var g = new A.default;
            if (g.period = b, g.timescale = 1, !d[f].hasOwnProperty("schemeIdUri")) throw new Error("Invalid EventStream. SchemeIdUri has to be set");
            g.schemeIdUri = d[f].schemeIdUri, d[f].hasOwnProperty("timescale") && (g.timescale = d[f].timescale), d[f].hasOwnProperty("value") && (g.value = d[f].value);
            for (var h = 0; h < d[f].Event_asArray.length; h++) {
              var i = new w.default;
              i.presentationTime = 0, i.eventStream = g, d[f].Event_asArray[h].hasOwnProperty("presentationTime") && (i.presentationTime = d[f].Event_asArray[h].presentationTime), d[f].Event_asArray[h].hasOwnProperty("duration") && (i.duration = d[f].Event_asArray[h].duration), d[f].Event_asArray[h].hasOwnProperty("id") && (i.id = d[f].Event_asArray[h].id), e.push(i)
            }
          }
        return e
      }

      function aa(a, b) {
        var c = [];
        if (!a) return c;
        for (var d = 0; d < a.length; d++) {
          var e = new A.default;
          if (e.timescale = 1, e.representation = b, !a[d].hasOwnProperty("schemeIdUri")) throw new Error("Invalid EventStream. SchemeIdUri has to be set");
          e.schemeIdUri = a[d].schemeIdUri, a[d].hasOwnProperty("timescale") && (e.timescale = a[d].timescale), a[d].hasOwnProperty("value") && (e.value = a[d].value), c.push(e)
        }
        return c
      }

      function ba(a, b) {
        var c = a.Period_asArray[b.period.index].AdaptationSet_asArray[b.index].InbandEventStream_asArray;
        return aa(c, null)
      }

      function ca(a, b) {
        var c = a.Period_asArray[b.adaptation.period.index].AdaptationSet_asArray[b.adaptation.index].Representation_asArray[b.index].InbandEventStream_asArray;
        return aa(c, b)
      }

      function da(a) {
        var b = K(a),
          c = a.hasOwnProperty("availabilityStartTime"),
          d = a.UTCTiming_asArray,
          e = [];
        return (b || c) && d && d.forEach(function(a) {
          var b = new o.default;
          a.hasOwnProperty("schemeIdUri") && (b.schemeIdUri = a.schemeIdUri, a.hasOwnProperty("value") && (b.value = a.value.toString(), e.push(b)))
        }), e
      }

      function ea(a) {
        var b = [],
          c = a.BaseURL_asArray || [a.baseUri],
          d = !1;
        return c.some(function(c) {
          if (c) {
            var e = new y.default,
              f = c.__text || c;
            return la.isRelative(f) && (d = !0, a.baseUri && (f = a.baseUri + f)), e.url = f, c.hasOwnProperty("serviceLocation") && c.serviceLocation.length ? e.serviceLocation = c.serviceLocation : e.serviceLocation = f, c.hasOwnProperty("dvb:priority") && (e.dvb_priority = c["dvb:priority"]), c.hasOwnProperty("dvb:weight") && (e.dvb_weight = c["dvb:weight"]), b.push(e), d
          }
        }), b
      }

      function fa(a) {
        return a.hasOwnProperty("Location") && (a.Location = a.Location_asArray[0]), a.Location
      }
      var ga = void 0,
        ha = this.context,
        ia = (0, q.default)(ha).getInstance(),
        ja = (0, s.default)(ha).getInstance(),
        ka = (0,
          u.default)(ha).getInstance(),
        la = (0, C.default)(ha).getInstance();
      return ga = {
        getIsTypeOf: a,
        getIsAudio: b,
        getIsVideo: c,
        getIsText: e,
        getIsMuxed: f,
        getIsTextTrack: h,
        getIsFragmentedText: d,
        getIsMain: t,
        getLanguageForAdaptation: j,
        getViewpointForAdaptation: l,
        getRolesForAdaptation: n,
        getAccessibilityForAdaptation: p,
        getAudioChannelConfigurationForAdaptation: r,
        processAdaptation: x,
        getAdaptationForIndex: B,
        getIndexForAdaptation: D,
        getAdaptationForId: z,
        getAdaptationsForType: E,
        getAdaptationForType: F,
        getCodec: G,
        getMimeType: H,
        getKID: I,
        getContentProtectionData: J,
        getIsDynamic: K,
        getIsDVR: L,
        getIsOnDemand: N,
        getIsDVB: O,
        getDuration: P,
        getBandwidth: Q,
        getManifestUpdatePeriod: R,
        getRepresentationCount: S,
        getBitrateListForAdaptation: T,
        getRepresentationFor: U,
        getRepresentationsForAdaptation: V,
        getAdaptationsForPeriod: W,
        getRegularPeriods: X,
        getMpd: Z,
        getEventsForPeriod: _,
        getEventStreams: aa,
        getEventStreamForAdaptationSet: ba,
        getEventStreamForRepresentation: ca,
        getUTCTimingSources: da,
        getBaseURLsFromElement: ea,
        getRepresentationSortFunction: v,
        getLocation: fa
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(46),
      g = d(f),
      h = a(40),
      i = d(h),
      j = a(45),
      k = d(j),
      l = a(44),
      m = d(l),
      n = a(48),
      o = d(n),
      p = a(38),
      q = d(p),
      r = a(67),
      s = d(r),
      t = a(15),
      u = d(t),
      v = a(42),
      w = d(v),
      x = a(41),
      y = d(x),
      z = a(43),
      A = d(z),
      B = a(159),
      C = d(B),
      D = a(10),
      E = d(D);
    e.__dashjs_factory_name = "DashManifestModel", c.default = E.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    15: 15,
    159: 159,
    38: 38,
    40: 40,
    41: 41,
    42: 42,
    43: 43,
    44: 44,
    45: 45,
    46: 46,
    48: 48,
    67: 67
  }],
  23: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        h = [new s.default, new u.default, new w.default, new q.default], i = new o.default({
          escapeMode: !1,
          attributePrefix: "",
          arrayAccessForm: "property",
          emptyNodeForm: "object",
          stripWhitespaces: !1,
          enableToStringFunc: !1,
          ignoreRoot: !0,
          matchers: h
        }), j = new m.default([new y.default, new A.default])
      }

      function b(a, b) {
        var c;
        try {
          var f = window.performance.now();
          if (c = i.xml_str2json(a), !c) throw new Error("parser error");
          var g = window.performance.now();
          j.run(c);
          var k = window.performance.now();
          b.setMatchers(h), b.setIron(j), d("Parsing complete: ( xml2json: " + (g - f).toPrecision(3) + "ms, objectiron: " + (k - g).toPrecision(3) + "ms, total: " + ((k - f) / 1e3).toPrecision(3) + "s)")
        } catch (l) {
          return e.manifestError("parsing the manifest failed", "parse", a, l), null
        }
        return c
      }
      var c = this.context,
        d = (0, k.default)(c).getInstance().log,
        e = (0, g.default)(c).getInstance(),
        f = void 0,
        h = void 0,
        i = void 0,
        j = void 0;
      return f = {
        parse: b
      }, a(), f
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(152),
      g = d(f),
      h = a(10),
      i = d(h),
      j = a(8),
      k = d(j),
      l = a(3),
      m = d(l),
      n = a(4),
      o = d(n),
      p = a(32),
      q = d(p),
      r = a(30),
      s = d(r),
      t = a(29),
      u = d(t),
      v = a(31),
      w = d(v),
      x = a(26),
      y = d(x),
      z = a(27),
      A = d(z);
    e.__dashjs_factory_name = "DashParser", c.default = i.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    152: 152,
    26: 26,
    27: 27,
    29: 29,
    3: 3,
    30: 30,
    31: 31,
    32: 32,
    4: 4,
    8: 8
  }],
  24: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function() {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
          }
        }
        return function(b, c, d) {
          return c && a(b.prototype, c), d && a(b, d), b
        }
      }(),
      f = function() {
        function a(b, c) {
          d(this, a);
          var e = function(a) {
            return a && a.length && a.charAt(0) === a.charAt(0).toUpperCase()
          };
          this._name = b, this._merge = void 0 !== c ? c : e(b)
        }
        return e(a, [{
          key: "name",
          get: function() {
            return this._name
          }
        }, {
          key: "merge",
          get: function() {
            return this._merge
          }
        }]), a
      }();
    c.default = f, b.exports = c.default
  }, {}],
  25: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = function() {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
          }
        }
        return function(b, c, d) {
          return c && a(b.prototype, c), d && a(b, d), b
        }
      }(),
      g = a(24),
      h = d(g),
      i = function() {
        function a(b, c, d, f, g) {
          var i = this;
          e(this, a), this._name = b || "", this._properties = [], this._children = d || [], this._isRoot = f || !1, this._isArray = g || !0, Array.isArray(c) && c.forEach(function(a) {
            i._properties.push(new h.default(a))
          })
        }
        return f(a, [{
          key: "name",
          get: function() {
            return this._name
          }
        }, {
          key: "isRoot",
          get: function() {
            return this._isRoot
          }
        }, {
          key: "isArray",
          get: function() {
            return this._isArray
          }
        }, {
          key: "children",
          get: function() {
            return this._children
          }
        }, {
          key: "properties",
          get: function() {
            return this._properties
          }
        }]), a
      }();
    c.default = i, b.exports = c.default
  }, {
    24: 24
  }],
  26: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function f(a, b) {
      if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
      a.prototype = Object.create(b && b.prototype, {
        constructor: {
          value: a,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var g = function(a, b, c) {
        for (var d = !0; d;) {
          var e = a,
            f = b,
            g = c;
          d = !1, null === e && (e = Function.prototype);
          var h = Object.getOwnPropertyDescriptor(e, f);
          if (void 0 !== h) {
            if ("value" in h) return h.value;
            var i = h.get;
            if (void 0 === i) return;
            return i.call(g)
          }
          var j = Object.getPrototypeOf(e);
          if (null === j) return;
          a = j, b = f, c = g, d = !0, h = j = void 0
        }
      },
      h = a(25),
      i = d(h),
      j = function(a) {
        function b() {
          e(this, b);
          var a = ["profiles", "width", "height", "sar", "frameRate", "audioSamplingRate", "mimeType", "segmentProfiles", "codecs", "maximumSAPPeriod", "startWithSAP", "maxPlayoutRate", "codingDependency", "scanType", "FramePacking", "AudioChannelConfiguration", "ContentProtection", "EssentialProperty", "SupplementalProperty", "InbandEventStream"];
          g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this, "AdaptationSet", a, [new i.default("Representation", a, [new i.default("SubRepresentation", a)])])
        }
        return f(b, a), b
      }(i.default);
    c.default = j, b.exports = c.default
  }, {
    25: 25
  }],
  27: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function f(a, b) {
      if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
      a.prototype = Object.create(b && b.prototype, {
        constructor: {
          value: a,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var g = function(a, b, c) {
        for (var d = !0; d;) {
          var e = a,
            f = b,
            g = c;
          d = !1, null === e && (e = Function.prototype);
          var h = Object.getOwnPropertyDescriptor(e, f);
          if (void 0 !== h) {
            if ("value" in h) return h.value;
            var i = h.get;
            if (void 0 === i) return;
            return i.call(g)
          }
          var j = Object.getPrototypeOf(e);
          if (null === j) return;
          a = j, b = f, c = g, d = !0, h = j = void 0
        }
      },
      h = a(25),
      i = d(h),
      j = function(a) {
        function b() {
          e(this, b);
          var a = ["SegmentBase", "SegmentTemplate", "SegmentList"];
          g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this, "Period", a, [new i.default("AdaptationSet", a, [new i.default("Representation", a)])])
        }
        return f(b, a), b
      }(i.default);
    c.default = j, b.exports = c.default
  }, {
    25: 25
  }],
  28: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function() {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
          }
        }
        return function(b, c, d) {
          return c && a(b.prototype, c), d && a(b, d), b
        }
      }(),
      f = function() {
        function a(b, c) {
          d(this, a), this._test = b, this._converter = c
        }
        return e(a, [{
          key: "test",
          get: function() {
            return this._test
          }
        }, {
          key: "converter",
          get: function() {
            return this._converter
          }
        }]), a
      }();
    c.default = f, b.exports = c.default
  }, {}],
  29: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function f(a, b) {
      if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
      a.prototype = Object.create(b && b.prototype, {
        constructor: {
          value: a,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var g = function(a, b, c) {
        for (var d = !0; d;) {
          var e = a,
            f = b,
            g = c;
          d = !1, null === e && (e = Function.prototype);
          var h = Object.getOwnPropertyDescriptor(e, f);
          if (void 0 !== h) {
            if ("value" in h) return h.value;
            var i = h.get;
            if (void 0 === i) return;
            return i.call(g)
          }
          var j = Object.getPrototypeOf(e);
          if (null === j) return;
          a = j, b = f, c = g, d = !0, h = j = void 0
        }
      },
      h = a(28),
      i = d(h),
      j = 60,
      k = 60,
      l = 1e3,
      m = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})(?::([0-9]*)(\.[0-9]*)?)?(?:([+-])([0-9]{2})(?::?)([0-9]{2}))?/,
      n = function(a) {
        function b() {
          e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this, function(a) {
            return m.test(a.value)
          }, function(a) {
            var b = m.exec(a),
              c = void 0;
            if (c = Date.UTC(parseInt(b[1], 10), parseInt(b[2], 10) - 1, parseInt(b[3], 10), parseInt(b[4], 10), parseInt(b[5], 10), b[6] && parseInt(b[6], 10) || 0, b[7] && parseFloat(b[7]) * l || 0), b[9] && b[10]) {
              var d = parseInt(b[9], 10) * k + parseInt(b[10], 10);
              c += ("+" === b[8] ? -1 : 1) * d * j * l
            }
            return new Date(c)
          })
        }
        return f(b, a), b
      }(i.default);
    c.default = n, b.exports = c.default
  }, {
    28: 28
  }],
  30: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function f(a, b) {
      if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
      a.prototype = Object.create(b && b.prototype, {
        constructor: {
          value: a,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var g = function(a, b, c) {
        for (var d = !0; d;) {
          var e = a,
            f = b,
            g = c;
          d = !1, null === e && (e = Function.prototype);
          var h = Object.getOwnPropertyDescriptor(e, f);
          if (void 0 !== h) {
            if ("value" in h) return h.value;
            var i = h.get;
            if (void 0 === i) return;
            return i.call(g)
          }
          var j = Object.getPrototypeOf(e);
          if (null === j) return;
          a = j, b = f, c = g, d = !0, h = j = void 0
        }
      },
      h = a(28),
      i = d(h),
      j = /^([-])?P(([\d.]*)Y)?(([\d.]*)M)?(([\d.]*)D)?T?(([\d.]*)H)?(([\d.]*)M)?(([\d.]*)S)?/,
      k = 31536e3,
      l = 2592e3,
      m = 86400,
      n = 3600,
      o = 60,
      p = function(a) {
        function b() {
          e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this, function(a) {
            for (var b = ["minBufferTime", "mediaPresentationDuration", "minimumUpdatePeriod", "timeShiftBufferDepth", "maxSegmentDuration", "maxSubsegmentDuration", "suggestedPresentationDelay", "start", "starttime", "duration"], c = b.length, d = 0; d < c; d++)
              if (a.nodeName === b[d]) return j.test(a.value);
            return !1
          }, function(a) {
            var b = j.exec(a),
              c = parseFloat(b[2] || 0) * k + parseFloat(b[4] || 0) * l + parseFloat(b[6] || 0) * m + parseFloat(b[8] || 0) * n + parseFloat(b[10] || 0) * o + parseFloat(b[12] || 0);
            return void 0 !== b[1] && (c = -c), c
          })
        }
        return f(b, a), b
      }(i.default);
    c.default = p, b.exports = c.default
  }, {
    28: 28
  }],
  31: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function f(a, b) {
      if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
      a.prototype = Object.create(b && b.prototype, {
        constructor: {
          value: a,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var g = function(a, b, c) {
        for (var d = !0; d;) {
          var e = a,
            f = b,
            g = c;
          d = !1, null === e && (e = Function.prototype);
          var h = Object.getOwnPropertyDescriptor(e, f);
          if (void 0 !== h) {
            if ("value" in h) return h.value;
            var i = h.get;
            if (void 0 === i) return;
            return i.call(g)
          }
          var j = Object.getPrototypeOf(e);
          if (null === j) return;
          a = j, b = f, c = g, d = !0, h = j = void 0
        }
      },
      h = a(28),
      i = d(h),
      j = /^[-+]?[0-9]+[.]?[0-9]*([eE][-+]?[0-9]+)?$/,
      k = function(a) {
        function b() {
          e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this, function(a) {
            return j.test(a.value)
          }, function(a) {
            return parseFloat(a)
          })
        }
        return f(b, a), b
      }(i.default);
    c.default = k, b.exports = c.default
  }, {
    28: 28
  }],
  32: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function f(a, b) {
      if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
      a.prototype = Object.create(b && b.prototype, {
        constructor: {
          value: a,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var g = function(a, b, c) {
        for (var d = !0; d;) {
          var e = a,
            f = b,
            g = c;
          d = !1, null === e && (e = Function.prototype);
          var h = Object.getOwnPropertyDescriptor(e, f);
          if (void 0 !== h) {
            if ("value" in h) return h.value;
            var i = h.get;
            if (void 0 === i) return;
            return i.call(g)
          }
          var j = Object.getPrototypeOf(e);
          if (null === j) return;
          a = j, b = f, c = g, d = !0, h = j = void 0
        }
      },
      h = a(28),
      i = d(h),
      j = function(a) {
        function b() {
          e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this, function(a, b) {
            var c = {
              MPD: ["id", "profiles"],
              Period: ["id"],
              BaseURL: ["serviceLocation", "byteRange"],
              SegmentBase: ["indexRange"],
              Initialization: ["range"],
              RepresentationIndex: ["range"],
              SegmentList: ["indexRange"],
              BitstreamSwitching: ["range"],
              SegmentURL: ["mediaRange", "indexRange"],
              SegmentTemplate: ["indexRange", "media", "index", "initialization", "bitstreamSwitching"],
              AssetIdentifier: ["value", "id"],
              EventStream: ["value"],
              AdaptationSet: ["profiles", "mimeType", "segmentProfiles", "codecs", "contentType"],
              FramePacking: ["value", "id"],
              AudioChannelConfiguration: ["value", "id"],
              ContentProtection: ["value", "id"],
              EssentialProperty: ["value", "id"],
              SupplementalProperty: ["value", "id"],
              InbandEventStream: ["value", "id"],
              Accessibility: ["value", "id"],
              Role: ["value", "id"],
              Rating: ["value", "id"],
              Viewpoint: ["value", "id"],
              ContentComponent: ["contentType"],
              Representation: ["id", "dependencyId", "mediaStreamStructureId"],
              Subset: ["id"],
              Metrics: ["metrics"],
              Reporting: ["value", "id"]
            };
            if (c.hasOwnProperty(b)) {
              var d = c[b];
              return void 0 !== d && d.indexOf(a.name) >= 0
            }
            return !1
          }, function(a) {
            return String(a)
          })
        }
        return f(b, a), b
      }(i.default);
    c.default = j, b.exports = c.default
  }, {
    28: 28
  }],
  33: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a) {
        a && a.boxParser && (e = a.boxParser)
      }

      function b(a) {
        var b, c, d, f, g, h, i, j, k, l, m, n, o, p = e.parse(a),
          q = p.getBox("tfhd"),
          r = p.getBox("tfdt"),
          s = p.getBox("trun"),
          t = p.getBox("moof"),
          u = p.getBox("mfhd"),
          v = p.getBox("subs");
        for (m = u.sequence_number, d = s.sample_count, g = r.baseMediaDecodeTime, l = (q.base_data_offset || 0) + (s.data_offset || 0), h = [], o = 0, j = 0; j < d; j++) {
          i = s.samples[j], b = void 0 !== i.sample_duration ? i.sample_duration : q.default_sample_duration, f = void 0 !== i.sample_size ? i.sample_size : q.default_sample_size, c = void 0 !== i.sample_composition_time_offset ? i.sample_composition_time_offset : 0;
          var w = {
            dts: g,
            cts: g + c,
            duration: b,
            offset: t.offset + l,
            size: f,
            subSizes: [f]
          };
          if (v && o < v.samples_with_subsamples.length && v.samples_with_subsamples[o].nr == j + 1) {
            for (w.subSizes = [], k = 0; k < v.samples_with_subsamples[o].subsamples.length; k++) {
              var x = v.samples_with_subsamples[o].subsamples[k].size;
              w.subSizes.push(x)
            }
            o++
          }
          h.push(w), l += f, g += b
        }
        return n = g - r.baseMediaDecodeTime, {
          sampleList: h,
          sequenceNumber: m,
          totalDuration: n
        }
      }

      function c(a) {
        var b = e.parse(a),
          c = b.getBox("mdhd");
        return c ? c.timescale : NaN
      }
      var d = void 0,
        e = void 0;
      return d = {
        getSamplesInfo: b,
        getMediaTimescaleFromMoov: c,
        setConfig: a
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f);
    e.__dashjs_factory_name = "FragmentedTextBoxParser", c.default = g.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10
  }],
  34: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a, b) {
      function c(a, c, e, f) {
        var g, i, j, k, l, m, n, o = a.adaptation.period.mpd.manifest.Period_asArray[a.adaptation.period.index].AdaptationSet_asArray[a.adaptation.index].Representation_asArray[a.index].SegmentList,
          p = o.SegmentURL_asArray.length,
          q = [];
        for (n = a.startNumber, k = (0, h.decideSegmentListRangeForTemplate)(d, b, a, c, e, f), l = Math.max(k.start, 0), m = Math.min(k.end, o.SegmentURL_asArray.length - 1), g = l; g <= m; g++) j = o.SegmentURL_asArray[g], i = (0, h.getIndexBasedSegment)(d, b, a, g), i.replacementTime = (n + g - 1) * a.segmentDuration, i.media = j.media ? j.media : "", i.mediaRange = j.mediaRange, i.index = j.index, i.indexRange = j.indexRange, q.push(i), i = null;
        return a.availableSegmentsNumber = p, q
      }
      var d = a.timelineConverter,
        e = void 0;
      return e = {
        getSegments: c
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f),
      h = a(36);
    e.__dashjs_factory_name = "ListSegmentsGetter";
    var i = g.default.getClassFactory(e);
    c.default = i, b.exports = c.default
  }, {
    10: 10,
    36: 36
  }],
  35: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a, b) {
      function c() {
        h = (0, i.default)(f).create(a, b), j = (0, k.default)(f).create(a, b), l = (0, m.default)(f).create(a, b)
      }

      function d(a, b, c, d, f) {
        var g, i = a.segmentInfoType;
        return "SegmentBase" !== i && "BaseURL" !== i && e(a, c) ? ("SegmentTimeline" === i ? g = h.getSegments(a, b, c, f) : "SegmentTemplate" === i ? g = j.getSegments(a, b, c, f) : "SegmentList" === i && (g = l.getSegments(a, b, c, f)), d && d(a, g)) : g = a.segments, g
      }

      function e(a, b) {
        var c, d, e = a.segments,
          f = !1;
        return e && 0 !== e.length ? (d = e[0].availabilityIdx, c = e[e.length - 1].availabilityIdx, f = b < d || b > c) : f = !0, f
      }
      var f = this.context,
        g = void 0,
        h = void 0,
        j = void 0,
        l = void 0;
      return g = {
        getSegments: d
      }, c(), g
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f),
      h = a(39),
      i = d(h),
      j = a(37),
      k = d(j),
      l = a(34),
      m = d(l);
    e.__dashjs_factory_name = "SegmentsGetter";
    var n = g.default.getClassFactory(e);
    c.default = n, b.exports = c.default
  }, {
    10: 10,
    34: 34,
    37: 37,
    39: 39
  }],
  36: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a, b) {
      for (; a.length < b;) a = "0" + a;
      return a
    }

    function f(a, b) {
      return a.representation.startNumber + b
    }

    function g(a, b, c) {
      var d, f, g, h, i, j, k = "%0",
        l = b.length,
        m = k.length;
      if (!a) return a;
      for (;;) {
        if (d = a.indexOf("$" + b), d < 0) return a;
        if (f = a.indexOf("$", d + l), f < 0) return a;
        if (g = a.indexOf(k, d + l), g > d && g < f) switch (h = a.charAt(f - 1), i = parseInt(a.substring(g + m, f - 1), 10), h) {
          case "d":
          case "i":
          case "u":
            j = e(c.toString(), i);
            break;
          case "x":
            j = e(c.toString(16), i);
            break;
          case "X":
            j = e(c.toString(16), i).toUpperCase();
            break;
          case "o":
            j = e(c.toString(8), i);
            break;
          default:
            return a
        } else j = c;
        a = a.substring(0, d) + j + a.substring(f + 1)
      }
    }

    function h(a, b, c, d) {
      var e, g, h, i;
      return g = c.segmentDuration, isNaN(g) && (g = c.adaptation.period.duration), h = c.adaptation.period.start + d * g, i = h + g, e = new n.default, e.representation = c, e.duration = g, e.presentationStartTime = h, e.mediaStartTime = a.calcMediaTimeFromPresentationTime(e.presentationStartTime, c), e.availabilityStartTime = a.calcAvailabilityStartTimeFromPresentationTime(e.presentationStartTime, c.adaptation.period.mpd, b), e.availabilityEndTime = a.calcAvailabilityEndTimeFromPresentationTime(i, c.adaptation.period.mpd, b), e.wallStartTime = a.calcWallTimeForSegment(e, b), e.replacementNumber = f(e, d), e.availabilityIdx = d, e
    }

    function i(a, b, c, d, e, h, i, j, k) {
      var l, m, o, p = d / h,
        q = Math.min(e / h, c.adaptation.period.mpd.maxSegmentDuration);
      return l = a.calcPresentationTimeFromMediaTime(p, c), m = l + q, o = new n.default, o.representation = c, o.duration = q, o.mediaStartTime = p, o.presentationStartTime = l, o.availabilityStartTime = c.adaptation.period.mpd.manifest.loadedTime, o.availabilityEndTime = a.calcAvailabilityEndTimeFromPresentationTime(m, c.adaptation.period.mpd, b), o.wallStartTime = a.calcWallTimeForSegment(o, b), o.replacementTime = d, o.replacementNumber = f(o, k), i = g(i, "Number", o.replacementNumber), i = g(i, "Time", o.replacementTime), o.media = i, o.mediaRange = j, o.availabilityIdx = k, o
    }

    function j(a, b) {
      if (!b || !b.segments) return null;
      var c, d, e = b.segments.length;
      if (a < e && (c = b.segments[a], c && c.availabilityIdx === a)) return c;
      for (d = 0; d < e; d++)
        if (c = b.segments[d], c && c.availabilityIdx === a) return c;
      return null
    }

    function k(a, b, c, d, e) {
      var f, g, h, i = 2,
        j = e || 10,
        k = 0,
        l = Number.POSITIVE_INFINITY;
      return b && !a.isTimeSyncCompleted() ? h = {
        start: k,
        end: l
      } : !b && c || d < 0 ? null : (f = Math.max(d - i, k), g = Math.min(d + j, l), h = {
        start: f,
        end: g
      })
    }

    function l(a, b, c, d, e, f) {
      var g, h, i, k = c.segmentDuration,
        l = c.adaptation.period.mpd.manifest.minBufferTime,
        m = c.segmentAvailabilityRange,
        n = {
          start: a.calcPeriodRelativeTimeFromMpdRelativeTime(c, m.start),
          end: a.calcPeriodRelativeTimeFromMpdRelativeTime(c, m.end)
        },
        o = c.segments,
        p = 2 * k,
        q = f || Math.max(2 * l, 10 * k),
        r = NaN,
        s = null;
      return n.start = Math.max(n.start, 0), b && !a.isTimeSyncCompleted() ? (g = Math.floor(n.start / k), h = Math.floor(n.end / k), i = {
        start: g,
        end: h
      }) : (o && o.length > 0 ? (s = j(e, c), r = s ? a.calcPeriodRelativeTimeFromMpdRelativeTime(c, s.presentationStartTime) : e > 0 ? e * k : a.calcPeriodRelativeTimeFromMpdRelativeTime(c, d)) : r = e > 0 ? e * k : b ? n.end : n.start, g = Math.floor(Math.max(r - p, n.start) / k), h = Math.floor(Math.min(g + q / k, n.end / k)), i = {
        start: g,
        end: h
      })
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    }), c.replaceTokenForTemplate = g, c.getIndexBasedSegment = h, c.getTimeBasedSegment = i, c.getSegmentByIndex = j, c.decideSegmentListRangeForTimeline = k, c.decideSegmentListRangeForTemplate = l;
    var m = a(47),
      n = d(m)
  }, {
    47: 47
  }],
  37: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a, b) {
      function c(a, c, e, f) {
        var g, i, j, k, l, m = a.adaptation.period.mpd.manifest.Period_asArray[a.adaptation.period.index].AdaptationSet_asArray[a.adaptation.index].Representation_asArray[a.index].SegmentTemplate,
          n = a.segmentDuration,
          o = a.segmentAvailabilityRange,
          p = [],
          q = null,
          r = null;
        for (l = a.startNumber, g = isNaN(n) && !b ? {
            start: l,
            end: l
          } : (0, h.decideSegmentListRangeForTemplate)(d, b, a, c, e, f), j = g.start, k = g.end, i = j; i <= k; i++) r = (0, h.getIndexBasedSegment)(d, b, a, i), r.replacementTime = (l + i - 1) * a.segmentDuration, q = m.media, q = (0, h.replaceTokenForTemplate)(q, "Number", r.replacementNumber), q = (0, h.replaceTokenForTemplate)(q, "Time", r.replacementTime), r.media = q, p.push(r), r = null;
        return isNaN(n) ? a.availableSegmentsNumber = 1 : a.availableSegmentsNumber = Math.ceil((o.end - o.start) / n), p
      }
      var d = a.timelineConverter,
        e = void 0;
      return e = {
        getSegments: c
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f),
      h = a(36);
    e.__dashjs_factory_name = "TemplateSegmentsGetter";
    var i = g.default.getClassFactory(e);
    c.default = i, b.exports = c.default
  }, {
    10: 10,
    36: 36
  }],
  38: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        z = 0, A = !1, B = NaN, x.on(i.default.TIME_SYNCHRONIZATION_COMPLETED, t, this)
      }

      function b() {
        return A
      }

      function c(a) {
        A = a
      }

      function d() {
        return z
      }

      function e(a) {
        z = a
      }

      function f() {
        return B
      }

      function h(a) {
        B = a
      }

      function j(a, b, c, d) {
        var e = NaN;
        return e = d ? c && b.timeShiftBufferDepth != Number.POSITIVE_INFINITY ? new Date(b.availabilityStartTime.getTime() + 1e3 * (a + b.timeShiftBufferDepth)) : b.availabilityEndTime : c ? new Date(b.availabilityStartTime.getTime() + 1e3 * (a - z)) : b.availabilityStartTime
      }

      function k(a, b, c) {
        return j.call(this, a, b, c)
      }

      function l(a, b, c) {
        return j.call(this, a, b, c, !0)
      }

      function m(a, b) {
        return (a.getTime() - b.mpd.availabilityStartTime.getTime() + 1e3 * z) / 1e3
      }

      function n(a, b) {
        var c = b.adaptation.period.start,
          d = b.presentationTimeOffset;
        return a + (c - d)
      }

      function o(a, b) {
        var c = b.adaptation.period.start,
          d = b.presentationTimeOffset;
        return a - c + d
      }

      function p(a, b) {
        var c, d, e;
        return b && (c = a.representation.adaptation.period.mpd.suggestedPresentationDelay, d = a.presentationStartTime + c, e = new Date(a.availabilityStartTime.getTime() + 1e3 * d)), e
      }

      function q(a, b) {
        var c = a.adaptation.period,
          d = {
            start: c.start,
            end: c.start + c.duration
          };
        if (!b) return d;
        if (!A && a.segmentAvailabilityRange) return a.segmentAvailabilityRange;
        var e = a.segmentDuration || (a.segments && a.segments.length ? a.segments[a.segments.length - 1].duration : 0),
          f = m(new Date, c),
          g = c.start + c.duration;
        return d.start = Math.max(f - c.mpd.timeShiftBufferDepth, c.start), d.end = f >= g && f - e < g ? g - e : f - e, d
      }

      function r(a, b) {
        var c = a.adaptation.period.start;
        return b - c
      }

      function s(a, b) {
        var c = a.adaptation.period.start;
        return b + c
      }

      function t(a) {
        A || void 0 !== a.offset && (e(a.offset / 1e3), A = !0)
      }

      function u(a) {
        var b = a.presentationTimeOffset,
          c = a.adaptation.period.start;
        return c - b
      }

      function v() {
        x.off(i.default.TIME_SYNCHRONIZATION_COMPLETED, t, this), z = 0, A = !1, B = NaN
      }
      var w = this.context,
        x = (0, g.default)(w).getInstance(),
        y = void 0,
        z = void 0,
        A = void 0,
        B = void 0;
      return y = {
        initialize: a,
        isTimeSyncCompleted: b,
        setTimeSyncCompleted: c,
        getClientTimeOffset: d,
        setClientTimeOffset: e,
        getExpectedLiveEdge: f,
        setExpectedLiveEdge: h,
        calcAvailabilityStartTimeFromPresentationTime: k,
        calcAvailabilityEndTimeFromPresentationTime: l,
        calcPresentationTimeFromWallTime: m,
        calcPresentationTimeFromMediaTime: n,
        calcPeriodRelativeTimeFromMpdRelativeTime: r,
        calcMpdRelativeTimeFromPeriodRelativeTime: s,
        calcMediaTimeFromPresentationTime: o,
        calcSegmentAvailabilityRange: q,
        calcWallTimeForSegment: p,
        calcMSETimeOffset: u,
        reset: v
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(9),
      g = d(f),
      h = a(13),
      i = d(h),
      j = a(10),
      k = d(j);
    e.__dashjs_factory_name = "TimelineConverter", c.default = k.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    13: 13,
    9: 9
  }],
  39: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a, b) {
      function c(a, c, e, f) {
        var g, i, j, k, l, m, n, o, p, q, r, s, t, u, v = a.adaptation.period.mpd.manifest.Period_asArray[a.adaptation.period.index].AdaptationSet_asArray[a.adaptation.index].Representation_asArray[a.index].SegmentTemplate || a.adaptation.period.mpd.manifest.Period_asArray[a.adaptation.period.index].AdaptationSet_asArray[a.adaptation.index].Representation_asArray[a.index].SegmentList,
          w = v.SegmentTimeline,
          x = v.SegmentURL_asArray,
          y = a.availableSegmentsNumber > 0,
          z = 10,
          A = 0,
          B = 0,
          C = -1,
          D = [],
          E = !1,
          F = function(c, e) {
            var f = v.media,
              g = c.mediaRange;
            return x && (f = x[e].media || "", g = x[e].mediaRange), (0, h.getTimeBasedSegment)(d, b, a, A, c.d, u, f, g, C)
          };
        for (u = a.timescale, g = w.S_asArray, p = (0, h.decideSegmentListRangeForTimeline)(d, b, c, e, f), p ? (s = p.start, t = p.end) : r = d.calcMediaTimeFromPresentationTime(c || 0, a), j = 0, k = g.length; j < k; j++) {
          if (i = g[j], m = 0, i.hasOwnProperty("r") && (m = i.r), i.hasOwnProperty("t") && (A = i.t, B = A / u), m < 0) {
            if (o = g[j + 1], o && o.hasOwnProperty("t")) n = o.t / u;
            else {
              var G = a.segmentAvailabilityRange ? a.segmentAvailabilityRange.end : d.calcSegmentAvailabilityRange(a, b).end;
              n = d.calcMediaTimeFromPresentationTime(G, a), a.segmentDuration = i.d / u
            }
            m = Math.ceil((n - B) / (i.d / u)) - 1
          }
          if (q) {
            if (y) break;
            C += m + 1
          } else
            for (l = 0; l <= m; l++) {
              if (C++, p) {
                if (C > t) {
                  if (q = !0, y) break;
                  continue
                }
                C >= s && D.push(F(i, C))
              } else {
                if (D.length > z) {
                  if (q = !0, y) break;
                  continue
                }
                E ? D.push(F(i, C)) : B >= r - i.d / u * 1.5 && (E = !0, D.push(F(i, C)))
              }
              A += i.d, B = A / u
            }
        }
        return y || (a.availableSegmentsNumber = C + 1), D
      }
      var d = a.timelineConverter,
        e = void 0;
      return e = {
        getSegments: c
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f),
      h = a(36);
    e.__dashjs_factory_name = "TimelineSegmentsGetter";
    var i = g.default.getClassFactory(e);
    c.default = i, b.exports = c.default
  }, {
    10: 10,
    36: 36
  }],
  40: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.period = null, this.index = -1, this.type = null
    };
    c.default = e, b.exports = c.default
  }, {}],
  41: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = 1,
      f = 1,
      g = function a(b, c, g, h) {
        d(this, a), this.url = b || "", this.serviceLocation = c || b || "", this.dvb_priority = g || e, this.dvb_weight = h || f
      };
    g.DEFAULT_DVB_PRIORITY = e, g.DEFAULT_DVB_WEIGHT = f, c.default = g, b.exports = c.default
  }, {}],
  42: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.duration = NaN, this.presentationTime = NaN, this.id = NaN, this.messageData = "", this.eventStream = null, this.presentationTimeDelta = NaN
    };
    c.default = e, b.exports = c.default
  }, {}],
  43: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.adaptionSet = null, this.representation = null, this.period = null, this.timescale = 1, this.value = "", this.schemeIdUri = ""
    };
    c.default = e, b.exports = c.default
  }, {}],
  44: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.manifest = null, this.suggestedPresentationDelay = 0, this.availabilityStartTime = null, this.availabilityEndTime = Number.POSITIVE_INFINITY, this.timeShiftBufferDepth = Number.POSITIVE_INFINITY, this.maxSegmentDuration = Number.POSITIVE_INFINITY, this.minimumUpdatePeriod = NaN, this.mediaPresentationDuration = NaN
    };
    c.default = e, b.exports = c.default
  }, {}],
  45: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.id = null, this.index = -1, this.duration = NaN, this.start = NaN, this.mpd = null
    };
    e.DEFAULT_ID = "defaultId", c.default = e, b.exports = c.default
  }, {}],
  46: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function() {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
          }
        }
        return function(b, c, d) {
          return c && a(b.prototype, c), d && a(b, d), b
        }
      }(),
      f = function() {
        function a() {
          d(this, a), this.id = null, this.index = -1, this.adaptation = null, this.segmentInfoType = null, this.initialization = null, this.segmentDuration = NaN, this.timescale = 1, this.startNumber = 1, this.indexRange = null, this.range = null, this.presentationTimeOffset = 0, this.MSETimeOffset = NaN, this.segmentAvailabilityRange = null, this.availableSegmentsNumber = 0, this.bandwidth = NaN, this.maxPlayoutRate = NaN
        }
        return e(a, null, [{
          key: "hasInitialization",
          value: function(a) {
            return null !== a.initialization || ("BaseURL" !== a.segmentInfoType || "SegmentBase" !== a.segmentInfoType) && null !== a.range
          }
        }, {
          key: "hasSegments",
          value: function(a) {
            return "BaseURL" !== a.segmentInfoType && "SegmentBase" !== a.segmentInfoType && !a.indexRange
          }
        }]), a
      }();
    c.default = f, b.exports = c.default
  }, {}],
  47: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.indexRange = null, this.index = null, this.mediaRange = null, this.media = null, this.duration = NaN, this.replacementTime = null, this.replacementNumber = NaN, this.mediaStartTime = NaN, this.presentationStartTime = NaN, this.availabilityStartTime = NaN, this.availabilityEndTime = NaN, this.availabilityIdx = NaN, this.wallStartTime = NaN, this.representation = null
    };
    c.default = e, b.exports = c.default
  }, {}],
  48: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.schemeIdUri = "", this.value = ""
    };
    c.default = e, b.exports = c.default
  }, {}],
  49: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b() {
        n = (0, g.default)(h).create({
          errHandler: a.errHandler,
          metricsModel: a.metricsModel,
          requestModifier: a.requestModifier
        })
      }

      function c(a) {
        var b = function(b) {
          j.trigger(o.default.CHECK_FOR_EXISTENCE_COMPLETED, {
            request: a,
            exists: b
          })
        };
        if (a) {
          var c = new i.default(a.url);
          n.load({
            request: c,
            success: function() {
              b(!0)
            },
            error: function() {
              b(!1)
            }
          })
        } else b(!1)
      }

      function d(a) {
        var b = function(b, c) {
          j.trigger(o.default.LOADING_COMPLETED, {
            request: a,
            response: b || null,
            error: c || null,
            sender: l
          })
        };
        a ? n.load({
          request: a,
          progress: function() {
            j.trigger(o.default.LOADING_PROGRESS, {
              request: a
            })
          },
          success: function(a) {
            b(a)
          },
          error: function(a, c, d) {
            b(void 0, new k.default(r, d, c))
          }
        }) : b(void 0, new k.default(s, t))
      }

      function e() {
        n && n.abort()
      }

      function f() {
        n && (n.abort(), n = null)
      }
      var h = this.context,
        j = (0, m.default)(h).getInstance(),
        l = void 0,
        n = void 0;
      return l = {
        checkForExistence: c,
        load: d,
        abort: e,
        reset: f
      }, b(), l
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(59),
      g = d(f),
      h = a(165),
      i = d(h),
      j = a(163),
      k = d(j),
      l = a(9),
      m = d(l),
      n = a(13),
      o = d(n),
      p = a(10),
      q = d(p),
      r = 1,
      s = 2,
      t = "request is null";
    e.__dashjs_factory_name = "FragmentLoader";
    var u = q.default.getClassFactory(e);
    u.FRAGMENT_LOADER_ERROR_LOADING_FAILURE = r, u.FRAGMENT_LOADER_ERROR_NULL_REQUEST = s, c.default = u, b.exports = c.default
  }, {
    10: 10,
    13: 13,
    163: 163,
    165: 165,
    59: 59,
    9: 9
  }],
  50: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b() {
        h.on(t.default.XLINK_READY, c, n), q = (0, i.default)(f).create({
          errHandler: a.errHandler,
          metricsModel: a.metricsModel,
          requestModifier: a.requestModifier
        }), s = (0, g.default)(f).create({
          errHandler: a.errHandler,
          metricsModel: a.metricsModel,
          requestModifier: a.requestModifier
        })
      }

      function c(a) {
        h.trigger(t.default.INTERNAL_MANIFEST_LOADED, {
          manifest: a.manifest
        })
      }

      function d(a) {
        var b = new m.default(a, p.HTTPRequest.MPD_TYPE);
        q.load({
          request: b,
          success: function(b, c, d) {
            var e, f;
            d.responseURL && d.responseURL !== a ? (f = j.parseBaseUrl(d.responseURL), e = d.responseURL) : (j.isRelative(a) && (a = j.resolve(a, window.location.href)), f = j.parseBaseUrl(a));
            var g = l.parse(b, s);
            g ? (g.url = e || a, g.originalUrl || (g.originalUrl = g.url), g.baseUri = f, g.loadedTime = new Date, s.resolveManifestOnLoad(g)) : h.trigger(t.default.INTERNAL_MANIFEST_LOADED, {
              manifest: null,
              error: new o.default(w, y)
            })
          },
          error: function(b, c, d) {
            h.trigger(t.default.INTERNAL_MANIFEST_LOADED, {
              manifest: null,
              error: new o.default(x, "Failed loading manifest: " + a + ", " + d)
            })
          }
        })
      }

      function e() {
        h.off(t.default.XLINK_READY, c, n), s && (s.reset(), s = null), q && (q.abort(), q = null)
      }
      var f = this.context,
        h = (0, r.default)(f).getInstance(),
        j = (0, k.default)(f).getInstance(),
        l = a.parser,
        n = void 0,
        q = void 0,
        s = void 0;
      return n = {
        load: d,
        reset: e
      }, b(), n
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(75),
      g = d(f),
      h = a(59),
      i = d(h),
      j = a(159),
      k = d(j),
      l = a(171),
      m = d(l),
      n = a(163),
      o = d(n),
      p = a(180),
      q = a(9),
      r = d(q),
      s = a(13),
      t = d(s),
      u = a(10),
      v = d(u),
      w = 1,
      x = 2,
      y = "parsing failed";
    e.__dashjs_factory_name = "ManifestLoader";
    var z = v.default.getClassFactory(e);
    z.MANIFEST_LOADER_ERROR_PARSING_FAILURE = w, z.MANIFEST_LOADER_ERROR_LOADING_FAILURE = x, c.default = z, b.exports = c.default
  }, {
    10: 10,
    13: 13,
    159: 159,
    163: 163,
    171: 171,
    180: 180,
    59: 59,
    75: 75,
    9: 9
  }],
  51: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a) {
        a && (a.manifestModel && (B = a.manifestModel), a.dashManifestModel && (C = a.dashManifestModel))
      }

      function b(a) {
        A = a, w = NaN, x = null, z = !1, y = !0, D = (0, m.default)(s).getInstance(), u.on(i.default.STREAMS_COMPOSED, r, this), u.on(i.default.PLAYBACK_STARTED, p, this), u.on(i.default.PLAYBACK_PAUSED, q, this), u.on(i.default.INTERNAL_MANIFEST_LOADED, n, this)
      }

      function c(a) {
        k(a)
      }

      function d() {
        return A
      }

      function e() {
        u.off(i.default.PLAYBACK_STARTED, p, this), u.off(i.default.PLAYBACK_PAUSED, q, this), u.off(i.default.STREAMS_COMPOSED, r, this), u.off(i.default.INTERNAL_MANIFEST_LOADED, n, this), f(), y = !0, z = !1, w = NaN, D = null
      }

      function f() {
        null !== x && (clearInterval(x), x = null)
      }

      function h() {
        f(), isNaN(w) || (t("Refresh manifest in " + w + " seconds."), x = setTimeout(l, 1e3 * w))
      }

      function j() {
        z = !0;
        var a = B.getValue(),
          b = a.url,
          c = C.getLocation(a);
        c && (b = c), A.load(b)
      }

      function k(a) {
        B.setValue(a);
        var b = new Date,
          c = (b.getTime() - a.loadedTime.getTime()) / 1e3;
        w = C.getManifestUpdatePeriod(a, c), u.trigger(i.default.MANIFEST_UPDATED, {
          manifest: a
        }), t("Manifest has been refreshed at " + b + "[" + b.getTime() / 1e3 + "] "), y || h()
      }

      function l() {
        y && !D.getScheduleWhilePaused() || z || j()
      }

      function n(a) {
        a.error || k(a.manifest)
      }

      function p() {
        y = !1, h()
      }

      function q() {
        y = !0, f()
      }

      function r() {
        z = !1
      }
      var s = this.context,
        t = (0, o.default)(s).getInstance().log,
        u = (0, g.default)(s).getInstance(),
        v = void 0,
        w = void 0,
        x = void 0,
        y = void 0,
        z = void 0,
        A = void 0,
        B = void 0,
        C = void 0,
        D = void 0;
      return v = {
        initialize: b,
        setManifest: c,
        getManifestLoader: d,
        refreshManifest: j,
        setConfig: a,
        reset: e
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(9),
      g = d(f),
      h = a(13),
      i = d(h),
      j = a(10),
      k = d(j),
      l = a(102),
      m = d(l),
      n = a(8),
      o = d(n);
    e.__dashjs_factory_name = "ManifestUpdater", c.default = k.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    102: 102,
    13: 13,
    8: 8,
    9: 9
  }],
  52: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        ec = !1, fc = !1, gc = !0, jc = null, dc = null, lc = null, ca.default.extend(ea.default), nc = (0, I.default)(Zb).getInstance()
      }

      function b(a, b, c) {
        return pc = (0, u.default)(Zb).getInstance(), oc = (0, s.default)(Zb).getInstance(), pc.supportsMediaSource() ? void(ec || (ec = !0, hc = (0, M.default)(Zb).getInstance(), sc = (0, i.default)(Zb).getInstance(), ic = (0, m.default)(Zb).getInstance(), ic.initialize(), uc = (0, na.default)(Zb).getInstance(), tc = (0, pa.default)(Zb).getInstance(), mc = (0, K.default)(Zb).getInstance(), mc.setConfig({
          adapter: Ob()
        }), gb(), sa(void 0 === c || c), a && Eb(a), b && Ib(b), ac("[dash.js " + T() + "] MediaPlayer has been initialized"))) : void oc.capabilityError("mediasource")
      }

      function c() {
        return !!vc && !!cc
      }

      function d() {
        if (!fc) throw Vb;
        (!gc || f() && fc) && sc.play()
      }

      function e() {
        if (!fc) throw Vb;
        sc.pause()
      }

      function f() {
        if (!fc) throw Vb;
        return sc.isPaused()
      }

      function h() {
        if (!fc) throw Vb;
        return sc.isSeeking()
      }

      function j() {
        if (!fc) throw Vb;
        return sc.getIsDynamic()
      }

      function l(a) {
        if (!vc) throw Wb;
        Db().muted = a
      }

      function n() {
        if (!vc) throw Wb;
        return Db().muted
      }

      function p(a) {
        if (!vc) throw Wb;
        Db().volume = a
      }

      function r() {
        if (!vc) throw Wb;
        return Db().volume
      }

      function t(a) {
        var b = ["video", "audio", "fragmentedText"];
        if (a) {
          if (b.indexOf(a) !== -1) {
            var c = wa().getCurrentBufferLevel(xa(a));
            return c ? c : NaN
          }
          return ac("Warning  - getBufferLength requested for invalid type"), NaN
        }
        return b.map(function(a) {
          return Na(a).length > 0 ? wa().getCurrentBufferLevel(xa(a)) : Number.MAX_VALUE
        }).reduce(function(a, b) {
          return Math.min(a, b)
        })
      }

      function v() {
        var a = Rb();
        return a ? a.manifestInfo.DVRWindowSize : 0
      }

      function x(a) {
        var b = Rb();
        if (!b) return 0;
        var c = b.range.start + a;
        return c > b.range.end && (c = b.range.end), c
      }

      function z(a) {
        if (!fc) throw Vb;
        var b = sc.getIsDynamic() ? x(a) : a;
        sc.seek(b)
      }

      function B(a) {
        if (!fc) throw Vb;
        var b = Db().currentTime;
        if (void 0 !== a) b = qc.getTimeRelativeToStreamId(b, a);
        else if (sc.getIsDynamic()) {
          var c = Rb();
          b = null === c ? 0 : D() - (c.range.end - c.time)
        }
        return b
      }

      function D() {
        if (!fc) throw Vb;
        var a = Db().duration;
        if (sc.getIsDynamic()) {
          var b, c = Rb();
          if (!c) return 0;
          b = c.range.end - c.range.start, a = b < c.manifestInfo.DVRWindowSize ? b : c.manifestInfo.DVRWindowSize
        }
        return a
      }

      function F() {
        if (!fc) throw Vb;
        return B() < 0 ? NaN : Sb(B())
      }

      function H() {
        if (!fc) throw Vb;
        return Sb(D())
      }

      function J(a, b, c) {
        var d = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3],
          e = new Date(1e3 * a),
          f = e.toLocaleDateString(b),
          g = e.toLocaleTimeString(b, {
            hour12: c
          });
        return d ? g + " " + f : g
      }

      function L(a) {
        a = Math.max(a, 0);
        var b = Math.floor(a / 3600),
          c = Math.floor(a % 3600 / 60),
          d = Math.floor(a % 3600 % 60);
        return (0 === b ? "" : b < 10 ? "0" + b.toString() + ":" : b.toString() + ":") + (c < 10 ? "0" + c.toString() : c.toString()) + ":" + (d < 10 ? "0" + d.toString() : d.toString())
      }

      function N(a, b, c) {
        ga.default.extend(a, b, c, Zb)
      }

      function P(a, b, c) {
        $b.on(a, b, c)
      }

      function R(a, b, c) {
        $b.off(a, b, c)
      }

      function T() {
        return (0, ha.getVersionString)()
      }

      function V() {
        return _b
      }

      function X() {
        if (!vc) throw Wb;
        return vc
      }

      function Z(a) {
        nc.setLiveDelayFragmentCount(a)
      }

      function _(a) {
        nc.setLiveDelay(a)
      }

      function ba() {
        return nc.getLiveDelay()
      }

      function da(a) {
        nc.setUseSuggestedPresentationDelay(a)
      }

      function fa(a, b) {
        nc.setLastBitrateCachingInfo(a, b)
      }

      function ia(a, b) {
        nc.setLastMediaSettingsCachingInfo(a, b)
      }

      function ka(a, b) {
        hc.setMaxAllowedBitrateFor(a, b)
      }

      function ma(a) {
        return hc.getMaxAllowedBitrateFor(a)
      }

      function oa(a, b) {
        hc.setMaxAllowedRepresentationRatioFor(a, b)
      }

      function qa(a) {
        return hc.getMaxAllowedRepresentationRatioFor(a)
      }

      function sa(a) {
        gc = a
      }

      function ta() {
        return gc
      }

      function ua(a) {
        nc.setScheduleWhilePaused(a)
      }

      function va() {
        return nc.getScheduleWhilePaused()
      }

      function wa() {
        return tc
      }

      function xa(a) {
        return mc.getReadOnlyMetricsFor(a)
      }

      function ya(a) {
        if (!fc) throw Vb;
        return hc.getQualityFor(a, qc.getActiveStreamInfo())
      }

      function za(a, b) {
        if (!fc) throw Vb;
        hc.setPlaybackQuality(a, qc.getActiveStreamInfo(), b)
      }

      function Aa() {
        hc.setElementSize(), hc.setWindowResizeEventCalled(!0)
      }

      function Ba() {
        return hc.getLimitBitrateByPortal()
      }

      function Ca(a) {
        hc.setLimitBitrateByPortal(a)
      }

      function Da() {
        return hc.getUsePixelRatioInLimitBitrateByPortal()
      }

      function Ea(a) {
        hc.setUsePixelRatioInLimitBitrateByPortal(a)
      }

      function Fa(a) {
        if (!fc) throw Vb;
        void 0 === wc && (wc = (0, C.default)(Zb).getInstance());
        for (var b = Db().textTracks, c = b.length, d = 0; d < c; d++) {
          var e = b[d],
            f = a === d ? "showing" : "hidden";
          e.mode !== f && (e.mode = f)
        }
        wc.setTextTrack()
      }

      function Ga() {
        var a = NaN;
        return wc && (a = wc.getCurrentTrackIdx()), a
      }

      function Ha(a) {
        if (!fc) throw Vb;
        var b = Tb();
        return b ? b.getBitrateListFor(a) : []
      }

      function Ia(a, b) {
        hc.setInitialBitrateFor(a, b)
      }

      function Ja(a) {
        if (!fc) throw Vb;
        return hc.getInitialBitrateFor(a)
      }

      function Ka(a, b) {
        hc.setInitialRepresentationRatioFor(a, b)
      }

      function La(a) {
        return hc.getInitialRepresentationRatioFor(a)
      }

      function Ma(a) {
        if (!fc) throw Vb;
        return lc.getStreamsInfo(a)
      }

      function Na(a) {
        if (!fc) throw Vb;
        var b = qc.getActiveStreamInfo();
        return b ? ic.getTracksFor(a, b) : []
      }

      function Oa(a, b, c) {
        if (!fc) throw Vb;
        return c = c || lc.getStreamsInfo(b)[0], c ? lc.getAllMediaInfoForType(b, c, a) : []
      }

      function Pa(a) {
        if (!fc) throw Vb;
        var b = qc.getActiveStreamInfo();
        return b ? ic.getCurrentTrackFor(a, b) : null
      }

      function Qa(a, b) {
        ic.setInitialSettings(a, b)
      }

      function Ra(a) {
        return ic.getInitialSettings(a)
      }

      function Sa(a) {
        if (!fc) throw Vb;
        ic.setTrack(a)
      }

      function Ta(a) {
        return ic.getSwitchMode(a)
      }

      function Ua(a, b) {
        ic.setSwitchMode(a, b)
      }

      function Va(a) {
        ic.setSelectionModeForInitialTrack(a)
      }

      function Wa() {
        return ic.getSelectionModeForInitialTrack()
      }

      function Xa() {
        return hc.getAutoSwitchBitrateFor("video") || hc.getAutoSwitchBitrateFor("audio")
      }

      function Ya(a) {
        hc.setAutoSwitchBitrateFor("video", a), hc.setAutoSwitchBitrateFor("audio", a)
      }

      function Za(a) {
        return hc.getAutoSwitchBitrateFor(a)
      }

      function $a(a, b) {
        hc.setAutoSwitchBitrateFor(a, b)
      }

      function _a(a) {
        nc.setFastSwitchEnabled(a)
      }

      function ab() {
        return nc.getFastSwitchEnabled()
      }

      function bb(a) {
        nc.setBufferOccupancyABREnabled(a)
      }

      function cb(a, b) {
        var c = Mb(),
          d = this,
          e = function a(e) {
            e.error ? b(null, e.error) : b(e.manifest), $b.off(ca.default.INTERNAL_MANIFEST_LOADED, a, d), c.reset()
          };
        $b.on(ca.default.INTERNAL_MANIFEST_LOADED, e, d);
        var f = (0, E.default)(Zb).getInstance();
        f.initialize(), c.load(f.parseURI(a))
      }

      function db(a, b) {
        eb(a, b);
        var c = new g.default;
        c.schemeIdUri = a, c.value = b, nc.getUTCTimingSources().push(c)
      }

      function eb(a, b) {
        var c = nc.getUTCTimingSources();
        c.forEach(function(d, e) {
          d.schemeIdUri === a && d.value === b && c.splice(e, 1)
        })
      }

      function fb() {
        nc.setUTCTimingSources([])
      }

      function gb() {
        db(I.default.DEFAULT_UTC_TIMING_SOURCE.scheme, I.default.DEFAULT_UTC_TIMING_SOURCE.value)
      }

      function hb(a) {
        nc.setUseManifestDateHeaderTimeSource(a)
      }

      function ib(a) {
        nc.setBufferToKeep(a)
      }

      function jb(a) {
        nc.setBufferPruningInterval(a)
      }

      function kb(a) {
        nc.setStableBufferTime(a)
      }

      function lb(a) {
        nc.setBufferTimeAtTopQuality(a)
      }

      function mb(a) {
        nc.setBufferTimeAtTopQualityLongForm(a)
      }

      function nb(a) {
        nc.setLongFormContentDurationThreshold(a)
      }

      function ob(a) {
        nc.setRichBufferThreshold(a)
      }

      function pb(a) {
        nc.setBandwidthSafetyFactor(a)
      }

      function qb() {
        return nc.getBandwidthSafetyFactor()
      }

      function rb(a) {
        nc.setAbandonLoadTimeout(a)
      }

      function sb(a) {
        nc.setFragmentRetryAttempts(a)
      }

      function tb(a) {
        nc.setFragmentRetryInterval(a)
      }

      function ub(a) {
        vb(void 0, a)
      }

      function vb(a, b) {
        nc.setXHRWithCredentialsForType(a, b)
      }

      function wb(a) {
        return nc.getXHRWithCredentialsForType(a)
      }

      function xb() {
        return Pb()
      }

      function yb(a) {
        jc = a
      }

      function zb(a) {
        dc = a
      }

      function Ab(a) {
        var b = (0, w.default)(Zb).getInstance();
        b.setConfig({
          videoModel: vc
        }), b.initialize(), b.displayCConTop(a)
      }

      function Bb() {
        return vc ? vc.getVideoContainer() : null
      }

      function Cb(a) {
        if (!vc) throw Wb;
        vc.setVideoContainer(a)
      }

      function Db() {
        if (!vc) throw Wb;
        return vc.getElement()
      }

      function Eb(a) {
        if (!ec) throw Yb;
        vc = null, a && (vc = (0, S.default)(Zb).getInstance(), vc.initialize(), vc.setElement(a), Pb(), Qb()), Kb()
      }

      function Fb() {
        return vc ? vc.getTTMLRenderingDiv() : null
      }

      function Gb(a) {
        if (!vc) throw Wb;
        vc.setTTMLRenderingDiv(a)
      }

      function Hb() {
        if (!cc) throw Xb;
        return cc
      }

      function Ib(a) {
        if (!ec) throw Yb;
        if ("string" == typeof a) {
          var b = (0, E.default)(Zb).getInstance();
          b.initialize(), cc = b.parseURI(a)
        } else cc = a;
        Kb()
      }

      function Jb() {
        Ib(null), Eb(null), dc = null, jc = null
      }

      function Kb() {
        fc ? (fc = !1, lc.reset(), qc.reset(), sc.reset(), hc.reset(), rc.reset(), ic.reset(), qc = null, kc = null, c() && Ub()) : c() && Ub()
      }

      function Lb() {
        var a = (0, Q.default)(Zb).getInstance();
        a.initialize();
        var b = (0, y.default)(Zb).getInstance();
        b.setConfig({
          dashManifestModel: uc
        }), ic.initialize(), ic.setConfig({
          errHandler: oc
        }), rc = (0, U.default)(Zb).getInstance(), rc.initialize(), rc.setConfig({
          abrRulesCollection: a
        }), qc = (0, k.default)(Zb).getInstance(), qc.setConfig({
          capabilities: pc,
          manifestLoader: Mb(),
          manifestModel: (0, G.default)(Zb).getInstance(),
          dashManifestModel: uc,
          protectionController: jc,
          adapter: lc,
          metricsModel: mc,
          dashMetrics: tc,
          liveEdgeFinder: (0, q.default)(Zb).getInstance(),
          mediaSourceController: (0, W.default)(Zb).getInstance(),
          timeSyncController: (0, O.default)(Zb).getInstance(),
          baseURLController: (0, Y.default)(Zb).getInstance(),
          errHandler: oc,
          timelineConverter: (0, ra.default)(Zb).getInstance()
        }), qc.initialize(gc, dc), hc.setConfig({
          abrRulesCollection: a,
          rulesController: rc,
          streamController: qc
        })
      }

      function Mb() {
        return (0, o.default)(Zb).create({
          errHandler: oc,
          parser: Nb(),
          metricsModel: mc,
          requestModifier: (0, A.default)(Zb).getInstance()
        })
      }

      function Nb() {
        return (0, la.default)(Zb).create()
      }

      function Ob() {
        return lc = (0, ja.default)(Zb).getInstance(), lc.initialize(), lc.setConfig({
          dashManifestModel: uc
        }), lc
      }

      function Pb() {
        if (jc) return jc;
        var a = dashjs.Protection;
        if ("function" == typeof a) {
          var b = a(Zb).create();
          return ca.default.extend(a.events), ea.default.extend(a.events, {
            publicOnly: !0
          }), jc = b.createProtectionSystem({
            log: ac,
            videoModel: vc,
            capabilities: pc,
            eventBus: $b,
            adapter: lc
          })
        }
        return null
      }

      function Qb() {
        if (kc) return kc;
        var a = dashjs.MetricsReporting;
        if ("function" == typeof a) {
          var b = a(Zb).create();
          return kc = b.createMetricsReporting({
            log: ac,
            eventBus: $b,
            mediaElement: Db(),
            dashManifestModel: uc,
            metricsModel: mc
          })
        }
        return null
      }

      function Rb() {
        var a = mc.getReadOnlyMetricsFor("video") || mc.getReadOnlyMetricsFor("audio");
        return tc.getCurrentDVRInfo(a)
      }

      function Sb(a) {
        var b, c, d = Rb();
        return d ? (b = d.manifestInfo.availableFrom.getTime() / 1e3, c = a + (b + d.range.start)) : 0
      }

      function Tb() {
        if (!fc) throw Vb;
        var a = qc.getActiveStreamInfo();
        return a ? qc.getStreamById(a.id) : null
      }

      function Ub() {
        fc || (fc = !0, ac("Playback Initialized"), Lb(), "string" == typeof cc ? qc.load(cc) : qc.loadWithManifest(cc))
      }
      var Vb = "You must first call play() to init playback before calling this method",
        Wb = "You must first call attachView() to set the video element before calling this method",
        Xb = "You must first call attachSource() with a valid source before calling this method",
        Yb = "MediaPlayer not initialized!",
        Zb = this.context,
        $b = (0, aa.default)(Zb).getInstance(),
        _b = (0, $.default)(Zb).getInstance(),
        ac = _b.log,
        bc = void 0,
        cc = void 0,
        dc = void 0,
        ec = void 0,
        fc = void 0,
        gc = void 0,
        hc = void 0,
        ic = void 0,
        jc = void 0,
        kc = void 0,
        lc = void 0,
        mc = void 0,
        nc = void 0,
        oc = void 0,
        pc = void 0,
        qc = void 0,
        rc = void 0,
        sc = void 0,
        tc = void 0,
        uc = void 0,
        vc = void 0,
        wc = void 0;
      return bc = {
        initialize: b,
        on: P,
        off: R,
        extend: N,
        attachView: Eb,
        attachSource: Ib,
        isReady: c,
        play: d,
        isPaused: f,
        pause: e,
        isSeeking: h,
        isDynamic: j,
        seek: z,
        setMute: l,
        isMuted: n,
        setVolume: p,
        getVolume: r,
        time: B,
        duration: D,
        timeAsUTC: F,
        durationAsUTC: H,
        getActiveStream: Tb,
        getDVRWindowSize: v,
        getDVRSeekOffset: x,
        convertToTimeCode: L,
        formatUTC: J,
        getVersion: T,
        getDebug: V,
        getBufferLength: t,
        getVideoModel: X,
        getVideoContainer: Bb,
        getTTMLRenderingDiv: Fb,
        getVideoElement: Db,
        getSource: Hb,
        setLiveDelayFragmentCount: Z,
        setLiveDelay: _,
        getLiveDelay: ba,
        useSuggestedPresentationDelay: da,
        enableLastBitrateCaching: fa,
        enableLastMediaSettingsCaching: ia,
        setMaxAllowedBitrateFor: ka,
        getMaxAllowedBitrateFor: ma,
        setMaxAllowedRepresentationRatioFor: oa,
        getMaxAllowedRepresentationRatioFor: qa,
        setAutoPlay: sa,
        getAutoPlay: ta,
        setScheduleWhilePaused: ua,
        getScheduleWhilePaused: va,
        getDashMetrics: wa,
        getMetricsFor: xa,
        getQualityFor: ya,
        setQualityFor: za,
        updatePortalSize: Aa,
        getLimitBitrateByPortal: Ba,
        setLimitBitrateByPortal: Ca,
        getUsePixelRatioInLimitBitrateByPortal: Da,
        setUsePixelRatioInLimitBitrateByPortal: Ea,
        setTextTrack: Fa,
        getBitrateInfoListFor: Ha,
        setInitialBitrateFor: Ia,
        getInitialBitrateFor: Ja,
        setInitialRepresentationRatioFor: Ka,
        getInitialRepresentationRatioFor: La,
        getStreamsFromManifest: Ma,
        getTracksFor: Na,
        getTracksForTypeFromManifest: Oa,
        getCurrentTrackFor: Pa,
        setInitialMediaSettingsFor: Qa,
        getInitialMediaSettingsFor: Ra,
        setCurrentTrack: Sa,
        getTrackSwitchModeFor: Ta,
        setTrackSwitchModeFor: Ua,
        setSelectionModeForInitialTrack: Va,
        getSelectionModeForInitialTrack: Wa,
        getAutoSwitchQuality: Xa,
        setAutoSwitchQuality: Ya,
        setFastSwitchEnabled: _a,
        getFastSwitchEnabled: ab,
        getAutoSwitchQualityFor: Za,
        setAutoSwitchQualityFor: $a,
        enableBufferOccupancyABR: bb,
        setBandwidthSafetyFactor: pb,
        getBandwidthSafetyFactor: qb,
        setAbandonLoadTimeout: rb,
        retrieveManifest: cb,
        addUTCTimingSource: db,
        removeUTCTimingSource: eb,
        clearDefaultUTCTimingSources: fb,
        restoreDefaultUTCTimingSources: gb,
        setBufferToKeep: ib,
        setBufferPruningInterval: jb,
        setStableBufferTime: kb,
        setBufferTimeAtTopQuality: lb,
        setFragmentLoaderRetryAttempts: sb,
        setFragmentLoaderRetryInterval: tb,
        setXHRWithCredentials: ub,
        setXHRWithCredentialsForType: vb,
        getXHRWithCredentialsForType: wb,
        setBufferTimeAtTopQualityLongForm: mb,
        setLongFormContentDurationThreshold: nb,
        setRichBufferThreshold: ob,
        getProtectionController: xb,
        attachProtectionController: yb,
        setProtectionData: zb,
        enableManifestDateHeaderTimeSource: hb,
        displayCaptionsOnTop: Ab,
        attachVideoContainer: Cb,
        attachTTMLRenderingDiv: Gb,
        getCurrentTextTrackIndex: Ga,
        reset: Jb
      }, a(), bc
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(48),
      g = d(f),
      h = a(69),
      i = d(h),
      j = a(72),
      k = d(j),
      l = a(67),
      m = d(l),
      n = a(50),
      o = d(n),
      p = a(155),
      q = d(p),
      r = a(152),
      s = d(r),
      t = a(148),
      u = d(t),
      v = a(58),
      w = d(v),
      x = a(71),
      y = d(x),
      z = a(157),
      A = d(z),
      B = a(57),
      C = d(B),
      D = a(104),
      E = d(D),
      F = a(101),
      G = d(F),
      H = a(102),
      I = d(H),
      J = a(103),
      K = d(J),
      L = a(61),
      M = d(L),
      N = a(74),
      O = d(N),
      P = a(134),
      Q = d(P),
      R = a(105),
      S = d(R),
      T = a(131),
      U = d(T),
      V = a(68),
      W = d(V),
      X = a(62),
      Y = d(X),
      Z = a(8),
      $ = d(Z),
      _ = a(9),
      aa = d(_),
      ba = a(13),
      ca = d(ba),
      da = a(53),
      ea = d(da),
      fa = a(10),
      ga = d(fa),
      ha = a(11),
      ia = a(15),
      ja = d(ia),
      ka = a(23),
      la = d(ka),
      ma = a(22),
      na = d(ma),
      oa = a(17),
      pa = d(oa),
      qa = a(38),
      ra = d(qa);
    e.__dashjs_factory_name = "MediaPlayer";
    var sa = ga.default.getClassFactory(e);
    sa.events = ea.default, c.default = sa, b.exports = c.default
  }, {
    10: 10,
    101: 101,
    102: 102,
    103: 103,
    104: 104,
    105: 105,
    11: 11,
    13: 13,
    131: 131,
    134: 134,
    148: 148,
    15: 15,
    152: 152,
    155: 155,
    157: 157,
    17: 17,
    22: 22,
    23: 23,
    38: 38,
    48: 48,
    50: 50,
    53: 53,
    57: 57,
    58: 58,
    61: 61,
    62: 62,
    67: 67,
    68: 68,
    69: 69,
    71: 71,
    72: 72,
    74: 74,
    8: 8,
    9: 9
  }],
  53: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function f(a, b) {
      if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
      a.prototype = Object.create(b && b.prototype, {
        constructor: {
          value: a,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var g = function(a, b, c) {
        for (var d = !0; d;) {
          var e = a,
            f = b,
            g = c;
          d = !1, null === e && (e = Function.prototype);
          var h = Object.getOwnPropertyDescriptor(e, f);
          if (void 0 !== h) {
            if ("value" in h) return h.value;
            var i = h.get;
            if (void 0 === i) return;
            return i.call(g)
          }
          var j = Object.getPrototypeOf(e);
          if (null === j) return;
          a = j, b = f, c = g, d = !0, h = j = void 0
        }
      },
      h = a(14),
      i = d(h),
      j = function(a) {
        function b() {
          e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this), this.AST_IN_FUTURE = "astInFuture", this.BUFFER_EMPTY = "bufferStalled", this.BUFFER_LOADED = "bufferLoaded", this.BUFFER_LEVEL_STATE_CHANGED = "bufferStateChanged", this.ERROR = "error", this.FRAGMENT_LOADING_COMPLETED = "fragmentLoadingCompleted", this.FRAGMENT_LOADING_STARTED = "fragmentLoadingStarted", this.FRAGMENT_LOADING_ABANDONED = "fragmentLoadingAbandoned", this.LOG = "log", this.MANIFEST_LOADED = "manifestLoaded", this.METRICS_CHANGED = "metricsChanged", this.METRIC_CHANGED = "metricChanged", this.METRIC_ADDED = "metricAdded", this.METRIC_UPDATED = "metricUpdated", this.PERIOD_SWITCH_COMPLETED = "periodSwitchCompleted", this.PERIOD_SWITCH_STARTED = "periodSwitchStarted", this.QUALITY_CHANGE_REQUESTED = "qualityChangeRequested", this.QUALITY_CHANGE_RENDERED = "qualityChangeRendered", this.STREAM_INITIALIZED = "streamInitialized", this.TEXT_TRACKS_ADDED = "allTextTracksAdded", this.TEXT_TRACK_ADDED = "textTrackAdded", this.CAN_PLAY = "canPlay", this.PLAYBACK_ENDED = "playbackEnded", this.PLAYBACK_ERROR = "playbackError", this.PLAYBACK_NOT_ALLOWED = "playbackNotAllowed", this.PLAYBACK_METADATA_LOADED = "playbackMetaDataLoaded", this.PLAYBACK_PAUSED = "playbackPaused", this.PLAYBACK_PLAYING = "playbackPlaying", this.PLAYBACK_PROGRESS = "playbackProgress", this.PLAYBACK_RATE_CHANGED = "playbackRateChanged", this.PLAYBACK_SEEKED = "playbackSeeked", this.PLAYBACK_SEEKING = "playbackSeeking", this.PLAYBACK_STARTED = "playbackStarted", this.PLAYBACK_TIME_UPDATED = "playbackTimeUpdated"
        }
        return f(b, a), b
      }(i.default),
      k = new j;
    c.default = k, b.exports = c.default
  }, {
    14: 14
  }],
  54: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a, b, c) {
        if (!a || "VIDEO" !== a.nodeName) return null;
        if (a._dashjs_player) return a._dashjs_player;
        var e, f = a.id || a.name || "video element";
        if (b = b || [].slice.call(a.querySelectorAll("source")).filter(function(a) {
            return a.type == d
          })[0], !b && a.src) b = document.createElement("source"), b.src = a.src;
        else if (!b && !a.src) return null;
        return c = c || {}, e = (0, i.default)(c).create(), e.initialize(a, b.src, a.autoplay), e.getDebug().log("Converted " + f + " to dash.js player and added content: " + b.src), a._dashjs_player = e, e
      }

      function b(b, e) {
        var f = [];
        b = b || "[data-dashjs-player]", e = e || document;
        for (var g = e.querySelectorAll(b), h = 0; h < g.length; h++) {
          var i = a(g[h], null);
          f.push(i)
        }
        for (var j = e.querySelectorAll('source[type="' + d + '"]'), h = 0; h < j.length; h++) {
          var k = c(j[h]),
            i = a(k, null);
          f.push(i)
        }
        return f
      }

      function c(a) {
        for (var b = !0; b;) {
          var c = a;
          if (b = !1, "video" === c.nodeName.toLowerCase()) return c;
          a = c.parentNode, b = !0
        }
      }
      var d = "application/dash+xml";
      return {
        create: a,
        createAll: b
      }
    }

    function f() {
      window.removeEventListener("load", f), j.createAll()
    }

    function g() {
      window.dashjs && (window.clearInterval(k), j.createAll())
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var h = a(52),
      i = d(h),
      j = e(),
      k = void 0,
      l = "undefined" != typeof window && window && window.dashjs && window.dashjs.skipAutoCreate;
    !l && "undefined" != typeof window && window && window.addEventListener && ("complete" === window.document.readyState ? window.dashjs ? j.createAll() : k = window.setInterval(g, 500) : window.addEventListener("load", f)), c.default = j, b.exports = c.default
  }, {
    52: 52
  }],
  55: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b() {
        ja = [], ka = !1, la = !1, ma = null, na = {}, oa = !1, pa = !1, ra = (0, g.default)($).getInstance(), sa = (0, w.default)($).getInstance(), wa = (0, q.default)($).getInstance(), ta = (0, k.default)($).getInstance(), ua = (0, o.default)($).create(), xa = (0, O.default)($).getInstance(), aa.on(I.default.BUFFERING_COMPLETED, U, ia), aa.on(I.default.DATA_UPDATE_COMPLETED, V, ia)
      }

      function c(a, b) {
        ma = a, qa = b, qa && (aa.on(I.default.KEY_ERROR, D, ia), aa.on(I.default.SERVER_CERTIFICATE_UPDATED, D, ia), aa.on(I.default.LICENSE_REQUEST_COMPLETE, D, ia), aa.on(I.default.KEY_SYSTEM_SELECTED, D, ia), aa.on(I.default.KEY_SESSION_CREATED, D, ia))
      }

      function d(a) {
        ka || (aa.on(I.default.CURRENT_TRACK_CHANGED, J, ia), Q(a), ka = !0)
      }

      function e() {
        for (var a = ja.length, b = 0; b < a; b++) ja[b].reset();
        ja = [], ka = !1, la = !1, x(), aa.off(I.default.CURRENT_TRACK_CHANGED, J, ia)
      }

      function f() {
        sa && (sa.pause(), sa = null), ua && (ua.reset(), ua = null), e(), ta = null, wa = null, ca = null, ba = null, da = null, ea = null, _ = null, fa = null, oa = !1, pa = !1, na = {}, aa.off(I.default.DATA_UPDATE_COMPLETED, V, ia), aa.off(I.default.BUFFERING_COMPLETED, U, ia), aa.off(I.default.KEY_ERROR, D, ia), aa.off(I.default.SERVER_CERTIFICATE_UPDATED, D, ia), aa.off(I.default.LICENSE_REQUEST_COMPLETE, D, ia), aa.off(I.default.KEY_SYSTEM_SELECTED, D, ia), aa.off(I.default.KEY_SESSION_CREATED, D, ia)
      }

      function h() {
        return ma.duration
      }

      function j() {
        return ma.start
      }

      function l() {
        return ma.index
      }

      function n() {
        return ma.id
      }

      function p() {
        return ma
      }

      function r(a) {
        return null !== S(a)
      }

      function t(a) {
        var b = S(a);
        return wa.getBitrateList(b)
      }

      function v() {
        va && va.start()
      }

      function x() {
        va && va.clear()
      }

      function z() {
        return ka
      }

      function B() {
        return pa
      }

      function D(a) {
        a.error && (fa.mediaKeySessionError(a.error), _(a.error), f())
      }

      function F(a) {
        return "text" === a.type ? a.mimeType : a.type
      }

      function H(a, b, c) {
        var d, e, f = a.type;
        if ("muxed" === f && a) return e = "Multiplexed representations are intentionally not supported, as they are not compliant with the DASH-AVC/264 guidelines", _(e), fa.manifestError(e, "multiplexedrep", ba.getValue()), !1;
        if ("text" === f || "fragmentedText" === f || "embeddedText" === f) return !0;
        if (d = a.codec, _(f + " codec: " + d), a.contentProtection && !ea.supportsEncryptedMedia()) fa.capabilityError("encryptedmedia");
        else if (!ea.supportsCodec((0, s.default)($).getInstance().getElement(), d)) return e = f + "Codec (" + d + ") is not supported.", fa.manifestError(e, "codec", c), _(e), !1;
        return !0
      }

      function J(a) {
        if (a.newMediaInfo.streamInfo.id === ma.id) {
          var b = W(a.oldMediaInfo);
          if (b) {
            var c = sa.getTime(),
              d = b.getBuffer(),
              e = a.newMediaInfo,
              f = ba.getValue(),
              g = ja.indexOf(b),
              h = b.getMediaSource();
            "fragmentedText" !== e.type ? (b.reset(!0), N(e, f, h, {
              buffer: d,
              replaceIdx: g,
              currentTime: c
            }), sa.seek(sa.getTime())) : b.updateMediaInfo(f, e)
          }
        }
      }

      function L(a) {
        var b = a.split("/")[1];
        return "webm" === b.toLowerCase()
      }

      function M(a) {
        var b = L(a.mimeType) ? (0, C.default)($).getInstance() : (0, A.default)($).getInstance();
        b.setConfig({
          baseURLController: ha,
          metricsModel: (0, u.default)($).getInstance()
        }), b.initialize();
        var c = (0, y.default)($).create({
          segmentBaseLoader: b,
          timelineConverter: ga,
          dashMetrics: (0, E.default)($).getInstance(),
          metricsModel: (0, u.default)($).getInstance(),
          baseURLController: ha
        });
        return c
      }

      function N(a, b, c, d) {
        var e = (0, i.default)($).create({
            indexHandler: M(a),
            timelineConverter: ga,
            adapter: da,
            manifestModel: ba
          }),
          f = da.getAllMediaInfoForType(b, ma, a.type);
        if (e.initialize(F(a), ua, c, ia, va), wa.updateTopQualityIndex(a), d ? (e.setBuffer(d.buffer), e.getIndexHandler().setCurrentTime(d.currentTime), ja[d.replaceIdx] = e) : ja.push(e), "text" === a.type || "fragmentedText" === a.type) {
          for (var g, h = 0; h < f.length; h++) f[h].index === a.index && (g = h), e.updateMediaInfo(b, f[h]);
          "fragmentedText" === a.type && e.updateMediaInfo(b, f[g])
        } else e.updateMediaInfo(b, a);
        return e
      }

      function P(a, b) {
        var c, d = ba.getValue(),
          e = da.getAllMediaInfoForType(d, ma, a),
          f = null;
        if (!e || 0 === e.length) return void _("No " + a + " data.");
        for (var g = 0, h = e.length; g < h; g++)
          if (f = e[g], "embeddedText" === a) xa.addEmbeddedTrack(f);
          else {
            if (!H(f, b, d)) continue;
            ta.isMultiTrackSupportedByType(f.type) && ta.addTrack(f, ma)
          }
          "embeddedText" !== a && 0 !== ta.getTracksFor(a, ma).length && (ta.checkInitialMediaSettingsForType(a, ma), c = ta.getCurrentTrackFor(a, ma), N(c, d, b))
      }

      function Q(a) {
        var b, c = ba.getValue();
        if (va = (0, m.default)($).getInstance(), va.initialize(), va.setConfig({
            manifestModel: ba,
            manifestUpdater: ca
          }), b = da.getEventsFor(c, ma), va.addInlineEvents(b), oa = !0, P("video", a), P("audio", a), P("text", a), P("fragmentedText", a), P("embeddedText", a), P("muxed", a), T(), la = !0, oa = !1, 0 === ja.length) {
          var d = "No streams to play.";
          fa.manifestError(d, "nostreams", c), _(d)
        } else ra.initialize(ga, ja[0]), R()
      }

      function R() {
        var a = ja.length,
          b = !!na.audio || !!na.video,
          c = b ? new Error(Z, "Data update failed", null) : null,
          d = 0;
        for (d; d < a; d++)
          if (ja[d].isUpdating() || oa) return;
        pa = !0, la && (qa && qa.initialize(ba.getValue(), S("audio"), S("video")), aa.trigger(I.default.STREAM_INITIALIZED, {
          streamInfo: ma,
          error: c
        }))
      }

      function S(a) {
        for (var b = ja.length, c = null, d = 0; d < b; d++)
          if (c = ja[d], c.getType() === a) return c.getMediaInfo();
        return null
      }

      function T() {
        for (var a = 0, b = ja.length; a < b; a++) ja[a].createBuffer()
      }

      function U(a) {
        if (a.streamInfo === ma) {
          var b = X(),
            c = b.length,
            d = 0;
          for (d; d < c; d++)
            if (!b[d].isBufferingCompleted()) return;
          aa.trigger(I.default.STREAM_BUFFERING_COMPLETED, {
            streamInfo: ma
          })
        }
      }

      function V(a) {
        var b = a.sender.getStreamProcessor();
        b.getStreamInfo() === ma && (na[b.getType()] = a.error, R())
      }

      function W(a) {
        if (!a) return !1;
        var b = X();
        return b.filter(function(b) {
          return b.getType() === a.type
        })[0]
      }

      function X() {
        var a, b, c = ja.length,
          d = [],
          e = 0;
        for (e; e < c; e++) b = ja[e], a = b.getType(), "audio" !== a && "video" !== a && "fragmentedText" !== a || d.push(b);
        return d
      }

      function Y(a) {
        _("Manifest updated... updating data system wide.");
        var b = ba.getValue();
        if (ka = !1, oa = !0, pa = !1, ma = a, va) {
          var c = da.getEventsFor(b, ma);
          va.addInlineEvents(c)
        }
        for (var d = 0, e = ja.length; d < e; d++) {
          var f = ja[d],
            g = da.getMediaInfoForType(b, ma, f.getType());
          wa.updateTopQualityIndex(g), f.updateMediaInfo(b, g)
        }
        oa = !1, R()
      }
      var Z = 1,
        $ = this.context,
        _ = (0, K.default)($).getInstance().log,
        aa = (0, G.default)($).getInstance(),
        ba = a.manifestModel,
        ca = a.manifestUpdater,
        da = a.adapter,
        ea = a.capabilities,
        fa = a.errHandler,
        ga = a.timelineConverter,
        ha = a.baseURLController,
        ia = void 0,
        ja = void 0,
        ka = void 0,
        la = void 0,
        ma = void 0,
        na = void 0,
        oa = void 0,
        pa = void 0,
        qa = void 0,
        ra = void 0,
        sa = void 0,
        ta = void 0,
        ua = void 0,
        va = void 0,
        wa = void 0,
        xa = void 0;
      return ia = {
        initialize: c,
        activate: d,
        deactivate: e,
        getDuration: h,
        getStartTime: j,
        getStreamIndex: l,
        getId: n,
        getStreamInfo: p,
        hasMedia: r,
        getBitrateListFor: t,
        startEventController: v,
        isActivated: z,
        isInitialized: B,
        updateData: Y,
        reset: f,
        getProcessors: X
      }, b(), ia
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(155),
      g = d(f),
      h = a(56),
      i = d(h),
      j = a(67),
      k = d(j),
      l = a(65),
      m = d(l),
      n = a(66),
      o = d(n),
      p = a(61),
      q = d(p),
      r = a(105),
      s = d(r),
      t = a(103),
      u = d(t),
      v = a(69),
      w = d(v),
      x = a(16),
      y = d(x),
      z = a(18),
      A = d(z),
      B = a(19),
      C = d(B),
      D = a(17),
      E = d(D),
      F = a(9),
      G = d(F),
      H = a(13),
      I = d(H),
      J = a(8),
      K = d(J),
      L = a(10),
      M = d(L),
      N = a(57),
      O = d(N);
    e.__dashjs_factory_name = "Stream", c.default = M.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    103: 103,
    105: 105,
    13: 13,
    155: 155,
    16: 16,
    17: 17,
    18: 18,
    19: 19,
    56: 56,
    57: 57,
    61: 61,
    65: 65,
    66: 66,
    67: 67,
    69: 69,
    8: 8,
    9: 9
  }],
  56: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b() {
        ca = []
      }

      function c(a, b, c, d, e) {
        ba = a, da = d, ea = e, ja = b, _ = da.getStreamInfo().manifestInfo.isDynamic, W.initialize(this), fa = (0, g.default)(V).getInstance(), fa.initialize(ba, this), ga = U(a), ha = (0, q.default)(V).create({
          metricsModel: (0, w.default)(V).getInstance(),
          manifestModel: Z,
          adapter: Y,
          dashMetrics: (0, I.default)(V).getInstance(),
          dashManifestModel: (0, G.default)(V).getInstance(),
          timelineConverter: X,
          rulesController: (0, s.default)(V).getInstance(),
          mediaPlayerModel: (0, u.default)(V).getInstance()
        }), ga.initialize(ba, c, this), ha.initialize(ba, this), ka = (0, y.default)(V).create({
          metricsModel: (0, w.default)(V).getInstance(),
          errHandler: (0, M.default)(V).getInstance(),
          requestModifier: (0, A.default)(V).getInstance()
        }), la = ha.getFragmentModel(), la.setLoader(ka), ia = (0, K.default)(V).create(), ia.initialize(this)
      }

      function d(a) {
        W.reset(), ga && (ga.reset(a), ga = null), ha && (ha.reset(), ha = null), ia && (ia.reset(), ia = null), ja = null, ka = null, ea = null, da = null, _ = null, aa = null, ca = [], ba = null
      }

      function e() {
        return ia.isUpdating()
      }

      function f() {
        return ba
      }

      function h() {
        return fa
      }

      function j() {
        return ia
      }

      function l() {
        return ka
      }

      function n() {
        return W
      }

      function p() {
        return ja
      }

      function r() {
        return ga.getBuffer()
      }

      function t(a) {
        ga.setBuffer(a)
      }

      function v() {
        return ga
      }

      function x() {
        return la
      }

      function z() {
        return da ? da.getStreamInfo() : null
      }

      function B(a, b) {
        b === aa || b && aa && b.type !== aa.type || (aa = b), ca.indexOf(b) === -1 && ca.push(b), Y.updateData(a, this)
      }

      function D() {
        return ca
      }

      function F() {
        return aa
      }

      function H() {
        return ga.getMediaSource()
      }

      function J() {
        return ha
      }

      function L() {
        return ea
      }

      function N() {
        ha.start()
      }

      function O() {
        ha.stop()
      }

      function P() {
        return Y.getCurrentRepresentationInfo(Z.getValue(), ia)
      }

      function Q(a) {
        return Y.getRepresentationInfoForQuality(Z.getValue(), ia, a)
      }

      function R() {
        return ga.getIsBufferingCompleted()
      }

      function S() {
        return ga.getBuffer() || ga.createBuffer(aa)
      }

      function T() {
        return _
      }

      function U(a) {
        var b = null;
        return b = "video" === a || "audio" === a || "fragmentedText" === a ? (0, i.default)(V).create({
          metricsModel: (0, w.default)(V).getInstance(),
          manifestModel: Z,
          sourceBufferController: (0, C.default)(V).getInstance(),
          errHandler: (0, M.default)(V).getInstance(),
          streamController: (0, k.default)(V).getInstance(),
          mediaController: (0, m.default)(V).getInstance(),
          adapter: Y,
          textSourceBuffer: (0, E.default)(V).getInstance()
        }) : (0, o.default)(V).create({
          errHandler: (0, M.default)(V).getInstance(),
          sourceBufferController: (0, C.default)(V).getInstance()
        })
      }
      var V = this.context,
        W = a.indexHandler,
        X = a.timelineConverter,
        Y = a.adapter,
        Z = a.manifestModel,
        $ = void 0,
        _ = void 0,
        aa = void 0,
        ba = void 0,
        ca = void 0,
        da = void 0,
        ea = void 0,
        fa = void 0,
        ga = void 0,
        ha = void 0,
        ia = void 0,
        ja = void 0,
        ka = void 0,
        la = void 0;
      return $ = {
        initialize: c,
        isUpdating: e,
        getType: f,
        getBufferController: v,
        getABRController: h,
        getFragmentLoader: l,
        getFragmentModel: x,
        getScheduleController: J,
        getEventController: L,
        getFragmentController: p,
        getRepresentationController: j,
        getIndexHandler: n,
        getCurrentRepresentationInfo: P,
        getRepresentationInfoForQuality: Q,
        isBufferingCompleted: R,
        createBuffer: S,
        getStreamInfo: z,
        updateMediaInfo: B,
        getMediaInfoArr: D,
        getMediaInfo: F,
        getMediaSource: H,
        getBuffer: r,
        setBuffer: t,
        start: N,
        stop: O,
        isDynamic: T,
        reset: d
      }, b(), $
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(61),
      g = d(f),
      h = a(64),
      i = d(h),
      j = a(72),
      k = d(j),
      l = a(67),
      m = d(l),
      n = a(73),
      o = d(n),
      p = a(70),
      q = d(p),
      r = a(131),
      s = d(r),
      t = a(102),
      u = d(t),
      v = a(103),
      w = d(v),
      x = a(49),
      y = d(x),
      z = a(157),
      A = d(z),
      B = a(71),
      C = d(B),
      D = a(57),
      E = d(D),
      F = a(22),
      G = d(F),
      H = a(17),
      I = d(H),
      J = a(21),
      K = d(J),
      L = a(152),
      M = d(L),
      N = a(10),
      O = d(N);
    e.__dashjs_factory_name = "StreamProcessor", c.default = O.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    102: 102,
    103: 103,
    131: 131,
    152: 152,
    157: 157,
    17: 17,
    21: 21,
    22: 22,
    49: 49,
    57: 57,
    61: 61,
    64: 64,
    67: 67,
    70: 70,
    71: 71,
    72: 72,
    73: 73
  }],
  57: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a, c) {
        M = !1, N = null, U = null, V = !1, W = NaN, X = [], $ = null, F || b();
        var d = c.getStreamProcessor();
        if (R = d.getMediaInfoArr(), S.setConfig({
            videoModel: Y
          }), S.initialize(), T = !K.getIsTextTrack(a), I = (0, k.default)(D).getInstance(), Q = (0, i.default)(D).getInstance(), Q.setConfig({
            boxParser: I
          }), T) {
          U = d.getFragmentModel(), this.buffered = (0, m.default)(D).create(), X = L.getTracksFor("fragmentedText", Z.getActiveStreamInfo());
          for (var e = L.getCurrentTrackFor("fragmentedText", Z.getActiveStreamInfo()), f = 0; f < X.length; f++)
            if (X[f] === e) {
              _ = f;
              break
            }
        }
      }

      function b() {
        aa = [], R = [], Y = (0, s.default)(D).getInstance(), S = (0, u.default)(D).getInstance(), S.setConfig({
          videoModel: Y
        }), S.initialize(), I = (0, k.default)(D).getInstance(), Q = (0, i.default)(D).getInstance(), Q.setConfig({
          boxParser: I
        }), T = !1, _ = null, ba = !1, ca = 0, fa = [], ea = [], da = null, F = !0
      }

      function c(a, b) {
        function c(a, b) {
          var c = new g.default,
            d = {
              subtitle: "subtitles",
              caption: "captions"
            },
            e = function() {
              var a = b.roles.length > 0 ? d[b.roles[0]] : d.caption;
              return a = a === d.caption || a === d.subtitle ? a : d.caption
            },
            f = function() {
              var a = !1;
              return b.codec && b.codec.search("stpp") >= 0 && (a = !0), b.mimeType && b.mimeType.search("ttml") >= 0 && (a = !0), a
            };
          c.captionData = a, c.lang = b.lang, c.label = b.id, c.index = b.index, c.isTTML = f(), c.video = Y.getElement(), c.defaultTrack = A(b), c.isFragmented = T, c.isEmbedded = !!b.isEmbedded, c.kind = e();
          var h = (R ? R.length : 0) + aa.length;
          S.addTextTrack(c, h)
        }
        var e, f, h, i, j, k, l, m = b.mediaInfo,
          n = m.type,
          p = m.mimeType,
          q = m.codec || p;
        if (!q) return void E("No text type defined");
        if ("fragmentedText" === n)
          if (V)
            if (k = Q.getSamplesInfo(a), f = k.sampleList, !$ && f.length > 0 && ($ = f[0].cts - b.start * W), q.search("stpp") >= 0)
              for (N = null !== N ? N : B(q), h = 0; h < f.length; h++) {
                var r = f[h],
                  s = r.cts,
                  t = s - $;
                this.buffered.add(t / W, (t + r.duration) / W);
                var u = new DataView(a, r.offset, r.subSizes[0]);
                l = w.default.Utils.dataViewToString(u, "utf-8");
                var v = [],
                  x = r.offset + r.subSizes[0];
                for (i = 1; i < r.subSizes.length; i++) {
                  var z = new Uint8Array(a, x, r.subSizes[i]),
                    C = String.fromCharCode.apply(null, z);
                  v.push(C), x += r.subSizes[i]
                }
                try {
                  e = N.parse(l, s / W, (s + r.duration) / W, v), S.addCaptions(_, $ / W, e)
                } catch (D) {
                  E("TTML parser error: " + D.message)
                }
              } else {
                var F = [];
                for (h = 0; h < f.length; h++) {
                  var G = f[h];
                  G.cts -= $, this.buffered.add(G.cts / W, (G.cts + G.duration) / W);
                  var H = a.slice(G.offset, G.offset + G.size),
                    I = w.default.parseBuffer(H);
                  for (i = 0; i < I.boxes.length; i++) {
                    var K = I.boxes[i];
                    if (E("VTT box1: " + K.type), "vtte" !== K.type && "vttc" === K.type)
                      for (E("VTT vttc boxes.length = " + K.boxes.length), j = 0; j < K.boxes.length; j++) {
                        var L = K.boxes[j];
                        if (E("VTT box2: " + L.type), "payl" === L.type) {
                          var M = L.cue_text;
                          E("VTT cue_text = " + M);
                          var O = G.cts / W,
                            P = (G.cts + G.duration) / W;
                          F.push({
                            start: O,
                            end: P,
                            data: M,
                            styles: {}
                          }), E("VTT " + O + "-" + P + " : " + M)
                        }
                      }
                  }
                }
                F.length > 0 && S.addCaptions(_, 0, F)
              } else {
                for (V = !0, h = 0; h < R.length; h++) c(null, R[h]);
                W = Q.getMediaTimescaleFromMoov(a)
              } else if ("text" === n) {
                var u = new DataView(a, 0, a.byteLength);
                l = w.default.Utils.dataViewToString(u, "utf-8");
                try {
                  e = B(q).parse(l), c(e, m)
                } catch (D) {
                  J.timedTextError(D, "parse", l)
                }
              } else if ("video" === n)
          if ("InitializationSegment" === b.segmentType) {
            if (0 === ca)
              for (ca = Q.getMediaTimescaleFromMoov(a), h = 0; h < aa.length; h++) c(null, aa[h])
          } else {
            if (0 === ca) return void E("CEA-608: No timescale for embeddedTextTrack yet");
            var U = function(a, b) {
              function c(a, c, d) {
                var e = null;
                if (Y.getTTMLRenderingDiv()) e = o(Y.getElement(), a, c, d);
                else {
                  var f = d.getDisplayText();
                  e = [{
                    start: a,
                    end: c,
                    data: f,
                    styles: {}
                  }]
                }
                e && S.addCaptions(b, 0, e)
              }
              return c
            };
            k = Q.getSamplesInfo(a);
            var X = k.sequenceNumber;
            if (!fa[0] && !fa[1]) {
              var Z = void 0,
                ba = void 0,
                ga = void 0;
              for (h = 0; h < aa.length; h++) {
                if ("CC1" === aa[h].id ? (Z = 0, ga = S.getTrackIdxForId("CC1")) : "CC3" === aa[h].id && (Z = 1, ga = S.getTrackIdxForId("CC3")), ga === -1) return void E("CEA-608: data before track is ready.");
                ba = U(this, ga), fa[h] = new y.default.Cea608Parser(h, {
                  newCue: ba
                }, null)
              }
            }
            if (ca && ea.indexOf(X) == -1) {
              if (null !== da && X !== da + 1)
                for (h = 0; h < fa.length; h++) fa[h] && fa[h].reset();
              for (var ha = d(a), ia = 0; ia < fa.length; ia++) {
                var ja = ha.fields[ia],
                  ka = fa[ia];
                if (ka) {
                  for (h = 0; h < ja.length; h++) ka.addData(ja[h][0] / ca, ja[h][1]);
                  ha.endTime && ka.cueSplitAtTime(ha.endTime / ca)
                }
              }
              da = X, ea.push(X)
            }
          }
      }

      function d(a) {
        var b = function(a, b, c) {
            var d = a.length;
            if (d > 0) {
              if (b >= a[d - 1][0]) a.push([b, c]);
              else
                for (var e = d - 1; e >= 0; e--)
                  if (b < a[e][0]) {
                    a.splice(e, 0, [b, c]);
                    break
                  }
            } else a.push([b, c])
          },
          c = I.parse(a),
          d = c.getBox("moof"),
          e = c.getBox("tfdt"),
          f = c.getBox("tfhd"),
          g = c.getBoxes("trun"),
          h = null;
        if (0 === g.length) return null;
        h = g[0], g.length > 1 && E("Warning: Too many truns");
        for (var i = d.offset + h.data_offset, j = h.sample_count, k = i, l = e.baseMediaDecodeTime, m = new DataView(a), n = {
            startTime: null,
            endTime: null,
            fields: [
              [],
              []
            ]
          }, o = 0, p = 0; p < j; p++) {
          var q = h.samples[p];
          void 0 === q.sample_duration && (q.sample_duration = f.default_sample_duration), void 0 === q.sample_size && (q.sample_size = f.default_sample_size), void 0 === q.sample_composition_time_offset && (q.sample_composition_time_offset = 0);
          for (var r = l + o + q.sample_composition_time_offset, s = y.default.findCea608Nalus(m, k, q.sample_size), t = 0; t < s.length; t++)
            for (var u = y.default.extractCea608DataFromRange(m, s[t]), v = 0; v < 2; v++) u[v].length > 0 && b(n.fields[v], r, u[v]);
          o += q.sample_duration, k += q.sample_size
        }
        var w = l + o;
        return n.startTime = l, n.endTime = w, n
      }

      function e(a) {
        for (var b = "", c = 0; c < a.length; ++c) {
          var d = a[c];
          b += d.uchar
        }
        var e = b.length,
          f = b.replace(/^\s+/, "").length;
        return e - f
      }

      function f(a) {
        return "left: " + 3.125 * a.x + "%; top: " + 6.66 * a.y1 + "%; width: " + (100 - 3.125 * a.x) + "%; height: " + 6.66 * Math.max(a.y2 - 1 - a.y1, 1) + "%; align-items: flex-start; overflow: visible; -webkit-writing-mode: horizontal-tb;"
      }

      function h(a) {
        return "red" == a ? "rgb(255, 0, 0)" : "green" == a ? "rgb(0, 255, 0)" : "blue" == a ? "rgb(0, 0, 255)" : "cyan" == a ? "rgb(0, 255, 255)" : "magenta" == a ? "rgb(255, 0, 255)" : "yellow" == a ? "rgb(255, 255, 0)" : "white" == a ? "rgb(255, 255, 255)" : "black" == a ? "rgb(0, 0, 0)" : a
      }

      function j(a, b) {
        var c = a.videoHeight / 15;
        return b ? "font-size: " + c + "px; font-family: Menlo, Consolas, 'Cutive Mono', monospace; color: " + (b.foreground ? h(b.foreground) : "rgb(255, 255, 255)") + "; font-style: " + (b.italics ? "italic" : "normal") + "; text-decoration: " + (b.underline ? "underline" : "none") + "; white-space: pre; background-color: " + (b.background ? h(b.background) : "transparent") + ";" : "font-size: " + c + "px; font-family: Menlo, Consolas, 'Cutive Mono', monospace; justify-content: flex-start; text-align: left; color: rgb(255, 255, 255); font-style: normal; white-space: pre; line-height: normal; font-weight: normal; text-decoration: none; width: 100%; display: flex;"
      }

      function l(a) {
        var b = a.replace(/^\s+/g, "");
        return b
      }

      function n(a) {
        var b = a.replace(/\s+$/g, "");
        return b
      }

      function o(a, b, c, d) {
        var g = null,
          h = null,
          i = !1,
          k = -1,
          m = {
            start: b,
            end: c,
            spans: []
          },
          o = "style_cea608_white_black",
          p = {},
          q = {},
          r = [],
          s = void 0,
          t = void 0;
        for (s = 0; s < 15; ++s) {
          var u = d.rows[s],
            v = "",
            w = null;
          if (!1 === u.isEmpty()) {
            var x = e(u.chars);
            null === g && (g = {
              x: x,
              y1: s,
              y2: s + 1,
              p: []
            }), x !== k && i && (g.p.push(m), m = {
              start: b,
              end: c,
              spans: []
            }, g.y2 = s, g.name = "region_" + g.x + "_" + g.y1 + "_" + g.y2, !1 === p.hasOwnProperty(g.name) ? (r.push(g), p[g.name] = g) : (h = p[g.name], h.p.contat(g.p)), g = {
              x: x,
              y1: s,
              y2: s + 1,
              p: []
            });
            for (var y = 0; y < u.chars.length; ++y) {
              var z = u.chars[y],
                A = z.penState;
              if (null === w || !A.equals(w)) {
                v.trim().length > 0 && (m.spans.push({
                  name: o,
                  line: v,
                  row: s
                }), v = "");
                var B = "style_cea608_" + A.foreground + "_" + A.background;
                A.underline && (B += "_underline"), A.italics && (B += "_italics"), q.hasOwnProperty(B) || (q[B] = JSON.parse(JSON.stringify(A))), w = A, o = B
              }
              v += z.uchar
            }
            v.trim().length > 0 && m.spans.push({
              name: o,
              line: v,
              row: s
            }), i = !0, k = x
          } else i = !1, k = -1, g && (g.p.push(m), m = {
            start: b,
            end: c,
            spans: []
          }, g.y2 = s, g.name = "region_" + g.x + "_" + g.y1 + "_" + g.y2, !1 === p.hasOwnProperty(g.name) ? (r.push(g), p[g.name] = g) : (h = p[g.name], h.p.contat(g.p)), g = null)
        }
        g && (g.p.push(m), g.y2 = s + 1, g.name = "region_" + g.x + "_" + g.y1 + "_" + g.y2, !1 === p.hasOwnProperty(g.name) ? (r.push(g), p[g.name] = g) : (h = p[g.name], h.p.contat(g.p)), g = null);
        var C = [];
        for (s = 0; s < r.length; ++s) {
          var D = r[s],
            E = "sub_cea608_" + G++,
            F = document.createElement("div");
          F.id = E;
          var H = f(D);
          F.style.cssText = "position: absolute; margin: 0; display: flex; box-sizing: border-box; pointer-events: none;" + H;
          var I = document.createElement("div");
          I.className = "paragraph bodyStyle", I.style.cssText = j(a);
          var J = document.createElement("div");
          J.className = "cueUniWrapper", J.style.cssText = "unicode-bidi: normal; direction: ltr;";
          for (var K = 0; K < D.p.length; ++K) {
            var L = D.p[K],
              M = 0;
            for (t = 0; t < L.spans.length; ++t) {
              var N = L.spans[t];
              if (N.line.length > 0) {
                if (0 !== t && M != N.row) {
                  var O = document.createElement("br");
                  O.className = "lineBreak", J.appendChild(O)
                }
                var P = !1;
                M === N.row && (P = !0), M = N.row;
                var Q = q[N.name],
                  R = document.createElement("span");
                R.className = "spanPadding " + N.name + " customSpanColor", R.style.cssText = j(a, Q), 0 !== t && P ? t === L.spans.length - 1 ? R.textContent = n(N.line) : R.textContent = N.line : 0 === t && L.spans.length > 1 && N.row === L.spans[1].row ? R.textContent = l(N.line) : R.textContent = N.line.trim(), J.appendChild(R)
              }
            }
          }
          I.appendChild(J), F.appendChild(I);
          var S = {
            bodyStyle: ["%", 90]
          };
          for (t in q) q.hasOwnProperty(t) && (S[t] = ["%", 90]);
          C.push({
            type: "html",
            start: b,
            end: c,
            cueHTMLElement: F,
            cueID: E,
            cellResolution: [32, 15],
            isFromCEA608: !0,
            regions: r,
            regionID: D.name,
            videoHeight: a.videoHeight,
            videoWidth: a.videoWidth,
            fontSize: S,
            lineHeight: {},
            linePadding: {}
          })
        }
        return C
      }

      function p() {
        S.deleteAllTextTracks(), M = !1, N = null, Q = null, R = null, S = null, T = !1, U = null, V = !1, W = NaN, X = [], Y = null, Z = null, F = !1, aa = null
      }

      function r(a) {
        F || b(), "CC1" === a.id || "CC3" === a.id ? aa.push(a) : E("Warning: Embedded track " + a.id + " not supported!")
      }

      function t() {
        F = !1, aa = [], fa = [null, null], ea = [], da = null
      }

      function v() {
        return M
      }

      function x(a) {
        a && (a.errHandler && (J = a.errHandler), a.dashManifestModel && (K = a.dashManifestModel), a.mediaController && (L = a.mediaController), a.videoModel && (Y = a.videoModel), a.streamController && (Z = a.streamController), a.textTracks && (S = a.textTracks), a.VTTParser && (O = a.VTTParser), a.TTMLParser && (P = a.TTMLParser))
      }

      function z() {
        for (var a = Y.getElement(), b = a.textTracks, c = b.length, d = c - aa.length, e = S.getCurrentTrackIdx(), f = 0; f < c; f++) {
          var g = b[f];
          if (M = "showing" !== g.mode, "showing" === g.mode) {
            if (e !== f && (S.setCurrentTrackIdx(f), S.addCaptions(f, 0, null), T && f < d)) {
              var h = L.getCurrentTrackFor("fragmentedText", Z.getActiveStreamInfo()),
                i = X[f];
              i !== h && (U.abortRequests(), S.deleteTrackCues(h), L.setTrack(i), _ = f)
            }
            break
          }
        }
        M && S.setCurrentTrackIdx(-1)
      }

      function A(a) {
        var b = !1;
        return aa.length > 1 && a.isEmbedded ? b = a.id && "CC1" === a.id : 1 === aa.length ? a.id && "CC" === a.id.substring(0, 2) && (b = !0) : 0 === aa.length && (b = a.index === R[0].index), b
      }

      function B(a) {
        var b;
        return a.search("vtt") >= 0 ? b = O : (a.search("ttml") >= 0 || a.search("stpp") >= 0) && (b = P, b.setConfig({
          videoModel: Y
        })), b
      }

      function C() {
        return S.getCurrentTrackIdx()
      }
      var D = this.context,
        E = (0, q.default)(D).getInstance().log,
        F = !1,
        G = 0,
        H = void 0,
        I = void 0,
        J = void 0,
        K = void 0,
        L = void 0,
        M = void 0,
        N = void 0,
        O = void 0,
        P = void 0,
        Q = void 0,
        R = void 0,
        S = void 0,
        T = void 0,
        U = void 0,
        V = void 0,
        W = void 0,
        X = void 0,
        Y = void 0,
        Z = void 0,
        $ = void 0,
        _ = void 0,
        aa = void 0,
        ba = void 0,
        ca = void 0,
        da = void 0,
        ea = void 0,
        fa = void 0;
      return H = {
        initialize: a,
        append: c,
        abort: p,
        getCurrentTrackIdx: C,
        getAllTracksAreDisabled: v,
        setTextTrack: z,
        setConfig: x,
        addEmbeddedTrack: r,
        resetEmbedded: t
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(172),
      g = d(f),
      h = a(33),
      i = d(h),
      j = a(147),
      k = d(j),
      l = a(149),
      m = d(l),
      n = a(10),
      o = d(n),
      p = a(8),
      q = d(p),
      r = a(105),
      s = d(r),
      t = a(58),
      u = d(t),
      v = a(6),
      w = d(v),
      x = a(2),
      y = d(x);
    e.__dashjs_factory_name = "TextSourceBuffer", c.default = o.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    105: 105,
    147: 147,
    149: 149,
    172: 172,
    2: 2,
    33: 33,
    58: 58,
    6: 6,
    8: 8
  }],
  58: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        D = window.VTTCue || window.TextTrackCue, G = [], H = [], I = -1, J = 0, K = 0, L = 0, M = 0, N = null, O = null, R = !1, S = 2147483647, P = !!navigator.userAgent.match(/Chrome/) && !navigator.userAgent.match(/Edge/), void 0 !== document.fullscreenElement ? Q = "fullscreenElement" : void 0 !== document.webkitIsFullScreen ? Q = "webkitIsFullScreen" : document.msFullscreenElement ? Q = "msFullscreenElement" : document.mozFullScreen && (Q = "mozFullScreen")
      }

      function b(a) {
        var b = G[a].kind,
          c = void 0 !== G[a].label ? G[a].label : G[a].lang,
          d = G[a].lang,
          e = P ? document.createElement("track") : F.addTextTrack(b, c, d);
        return P && (e.kind = b, e.label = c, e.srclang = d), e
      }

      function c(a) {
        R = a, N && !document[Q] && (N.style.zIndex = a ? S : null)
      }

      function d(a, c) {
        if (G.length === c) return void B("Trying to add too many tracks.");
        if (G.push(a), void 0 === F && (F = a.video), G.length === c) {
          G.sort(function(a, b) {
            return a.index - b.index
          }), N = E.getTTMLRenderingDiv();
          for (var d = -1, e = 0; e < G.length; e++) {
            var f = b.call(this, e);
            H.push(f), G[e].defaultTrack && (f.default = !0, d = e), P && F.appendChild(f);
            var g = F.textTracks[e];
            g.nonAddedCues = [], N && (G[e].isTTML || G[e].isEmbedded) ? g.renderingType = "html" : g.renderingType = "default", this.addCaptions(e, 0, G[e].captionData), A.trigger(i.default.TEXT_TRACK_ADDED)
          }
          if (q.call(this, d), d >= 0) {
            for (var h = 0; h < F.textTracks.length; h++) F.textTracks[h].mode = h === d ? "showing" : "hidden";
            this.addCaptions(d, 0, null)
          }
          A.trigger(i.default.TEXT_TRACKS_ADDED, {
            index: I,
            tracks: G
          })
        }
      }

      function e(a, b, c, d, e, f) {
        var g = a / b,
          h = c / d,
          i = 0,
          j = 0;
        g > h ? (j = b, i = j / d * c) : (i = a, j = i / c * d);
        var k = 0,
          l = 0,
          m = 0,
          n = 0,
          o = i / j;
        return o > e ? (n = j, m = j / (1 / e), k = (a - m) / 2, l = 0) : (m = i, n = i / e, k = 0, l = (b - n) / 2), f ? {
          x: k + .1 * m,
          y: l + .1 * n,
          w: .8 * m,
          h: .8 * n
        } : {
          x: k,
          y: l,
          w: m,
          h: n
        }
      }

      function f() {
        var a = this.getCurrentTextTrack();
        if (a && "html" === a.renderingType) {
          var b = F.clientWidth / F.clientHeight,
            c = !1;
          a.isFromCEA608 && (b = 3.5 / 3, c = !0);
          var d = e.call(this, F.clientWidth, F.clientHeight, F.videoWidth, F.videoHeight, b, c),
            f = d.w,
            g = d.h;
          if (f != L || g != M) {
            J = d.x, K = d.y, L = f, M = g, N.style.left = J + "px", N.style.top = K + "px", N.style.width = L + "px", N.style.height = M + "px";
            for (var h = 0; a.activeCues && h < a.activeCues.length; ++h) {
              var i = a.activeCues[h];
              i.scaleCue(i)
            }
            Q && document[Q] || R ? N.style.zIndex = S : N.style.zIndex = null
          }
        }
      }

      function h(a, b) {
        var c = Math.round(.01 * a * b).toString() + "px";
        return c
      }

      function j(a) {
        var b = L,
          c = M;
        if (b * c !== 0 && a.layout) {
          var d = a.layout,
            e = h(d.left, b),
            f = h(d.top, c),
            g = h(d.width, b),
            i = h(d.height, c);
          N.style.left = e, N.style.top = f, N.style.width = g, N.style.height = i;
          var j = N.firstChild;
          j && j.style && (j.style.left = "0px", j.style.top = "0px", j.style.width = g, j.style.height = i)
        }
      }

      function k(a) {
        var b, c, d, e, f, g = L,
          h = M,
          i = [g / a.cellResolution[0], h / a.cellResolution[1]];
        if (a.linePadding)
          for (b in a.linePadding)
            if (a.linePadding.hasOwnProperty(b)) {
              var j = a.linePadding[b];
              c = (j * i[0]).toString();
              for (var k = document.getElementsByClassName("spanPadding"), l = 0; l < k.length; l++) k[l].style.cssText = k[l].style.cssText.replace(/(padding-left\s*:\s*)[\d.,]+(?=\s*px)/gi, "$1" + c), k[l].style.cssText = k[l].style.cssText.replace(/(padding-right\s*:\s*)[\d.,]+(?=\s*px)/gi, "$1" + c)
            }
        if (a.fontSize)
          for (b in a.fontSize)
            if (a.fontSize.hasOwnProperty(b)) {
              "%" === a.fontSize[b][0] ? d = a.fontSize[b][1] / 100 : "c" === a.fontSize[b][0] && (d = a.fontSize[b][1]), c = (d * i[1]).toString(), f = "defaultFontSize" !== b ? document.getElementsByClassName(b) : document.getElementsByClassName("paragraph");
              for (var m = 0; m < f.length; m++) f[m].style.cssText = f[m].style.cssText.replace(/(font-size\s*:\s*)[\d.,]+(?=\s*px)/gi, "$1" + c)
            }
        if (a.lineHeight)
          for (b in a.lineHeight)
            if (a.lineHeight.hasOwnProperty(b)) {
              "%" === a.lineHeight[b][0] ? e = a.lineHeight[b][1] / 100 : "c" === a.fontSize[b][0] && (e = a.lineHeight[b][1]), c = (e * i[1]).toString(), f = document.getElementsByClassName(b);
              for (var n = 0; n < f.length; n++) f[n].style.cssText = f[n].style.cssText.replace(/(line-height\s*:\s*)[\d.,]+(?=\s*px)/gi, "$1" + c)
            }
      }

      function l(a, b, c) {
        var d = a >= 0 ? F.textTracks[a] : null,
          e = this;
        if (d) {
          if ("showing" !== d.mode) return void(c && c.length > 0 && (d.nonAddedCues = d.nonAddedCues.concat(c)));
          if (c || (c = d.nonAddedCues, d.nonAddedCues = []), c && 0 !== c.length)
            for (var g in c) {
              var h, i = c[g];
              d.cellResolution = i.cellResolution, d.isFromCEA608 = i.isFromCEA608, O || "html" !== i.type && "image" !== i.type || (O = setInterval(f.bind(this), 500)), "image" === i.type ? (h = new D(i.start - b, i.end - b, ""), h.image = i.data, h.id = i.id, h.size = 0, h.type = "image", h.layout = i.layout, h.scaleCue = j.bind(e), h.onenter = function() {
                if (N && "showing" === d.mode) {
                  var a = new Image;
                  a.id = "ttmlImage_" + this.id, a.src = this.image, a.style.cssText = "z-index: 2147483648; pointer-events: none; display: block; visibility: visible !important; position: relative !important;", N.appendChild(a), j.call(e, this)
                }
              }, h.onexit = function() {
                if (N)
                  for (var a = N.childNodes, b = 0; b < a.length; b++) a[b].id === "ttmlImage_" + this.id && N.removeChild(a[b])
              }) : "html" === i.type ? (h = new D(i.start - b, i.end - b, ""), h.cueHTMLElement = i.cueHTMLElement, h.regions = i.regions, h.regionID = i.regionID, h.cueID = i.cueID, h.videoWidth = i.videoWidth, h.videoHeight = i.videoHeight, h.cellResolution = i.cellResolution, h.fontSize = i.fontSize, h.lineHeight = i.lineHeight, h.linePadding = i.linePadding, h.scaleCue = k.bind(e), N.style.left = J + "px", N.style.top = K + "px", N.style.width = L + "px", N.style.height = M + "px", h.onenter = function() {
                "showing" === d.mode && (B("Cue " + this.startTime + "-" + this.endTime + " : " + this.cueHTMLElement.id + " : " + this.cueHTMLElement.innerText), N.appendChild(this.cueHTMLElement), k.call(e, this))
              }, h.onexit = function() {
                for (var a = N.childNodes, b = 0; b < a.length; ++b) a[b].id === this.cueID && N.removeChild(a[b])
              }) : (h = new D(i.start - b, i.end - b, i.data), i.styles && (void 0 !== i.styles.align && h.hasOwnProperty("align") && (h.align = i.styles.align), void 0 !== i.styles.line && h.hasOwnProperty("line") && (h.line = i.styles.line), void 0 !== i.styles.position && h.hasOwnProperty("position") && (h.position = i.styles.position), void 0 !== i.styles.size && h.hasOwnProperty("size") && (h.size = i.styles.size))), d.addCue(h)
            }
        }
      }

      function n() {
        return I >= 0 ? F.textTracks[I] : null
      }

      function o() {
        return I
      }

      function p(a) {
        for (var b = -1, c = 0; c < F.textTracks.length; c++)
          if (F.textTracks[c].label === a) {
            b = c;
            break
          }
        return b
      }

      function q(a) {
        if (I = a, x.call(this), a >= 0) {
          var b = F.textTracks[a];
          "html" === b.renderingType ? v.call(this) : w.call(this)
        } else w.call(this)
      }

      function r(a) {
        return F.textTracks[a]
      }

      function s(a) {
        if (a.cues) {
          for (var b = a.cues, c = b.length - 1, d = c; d >= 0; d--) a.removeCue(b[d]);
          a.mode = "disabled"
        }
      }

      function t() {
        for (var a = H.length, b = 0; b < a; b++)
          if (P) F.removeChild(H[b]);
          else {
            var c = r.call(this, b);
            c.nonAddedCues = [], s.call(this, c)
          }
        H = [], G = [], O && (clearInterval(O), O = null), x.call(this)
      }

      function u(a) {
        F.removeChild(H[a]), H.splice(a, 1)
      }

      function v() {
        if (P) {
          var a = document.getElementById("native-cue-style");
          if (!a) {
            a = document.createElement("style"), a.id = "native-cue-style", document.head.appendChild(a);
            var b = a.sheet;
            F.id ? b.insertRule("#" + F.id + "::cue {background: transparent}", 0) : 0 !== F.classList.length ? b.insertRule("." + F.className + "::cue {background: transparent}", 0) : b.insertRule("video::cue {background: transparent}", 0)
          }
        }
      }

      function w() {
        if (P) {
          var a = document.getElementById("native-cue-style");
          a && document.head.removeChild(a)
        }
      }

      function x() {
        if (N)
          for (; N.firstChild;) N.removeChild(N.firstChild)
      }

      function y(a) {
        a && a.videoModel && (E = a.videoModel)
      }
      var z = this.context,
        A = (0, g.default)(z).getInstance(),
        B = (0, m.default)(z).getInstance().log,
        C = void 0,
        D = void 0,
        E = void 0,
        F = void 0,
        G = void 0,
        H = void 0,
        I = void 0,
        J = void 0,
        K = void 0,
        L = void 0,
        M = void 0,
        N = void 0,
        O = void 0,
        P = void 0,
        Q = void 0,
        R = void 0,
        S = void 0;
      return C = {
        initialize: a,
        displayCConTop: c,
        addTextTrack: d,
        addCaptions: l,
        getTextTrack: r,
        getCurrentTextTrack: n,
        getCurrentTrackIdx: o,
        setCurrentTrackIdx: q,
        getTrackIdxForId: p,
        deleteTrackCues: s,
        deleteAllTextTracks: t,
        deleteTextTrack: u,
        setConfig: y
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(9),
      g = d(f),
      h = a(13),
      i = d(h),
      j = a(10),
      k = d(j),
      l = a(8),
      m = d(l);
    e.__dashjs_factory_name = "TextTracks", c.default = k.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    13: 13,
    8: 8,
    9: 9
  }],
  59: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a, b, c) {
      return b in a ? Object.defineProperty(a, b, {
        value: c,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : a[b] = c, a
    }

    function f(a) {
      function b() {
        var a;
        p = [], q = [], r = [], a = {}, e(a, g.HTTPRequest.MPD_TYPE, m.default.DOWNLOAD_ERROR_ID_MANIFEST), e(a, g.HTTPRequest.XLINK_EXPANSION_TYPE, m.default.DOWNLOAD_ERROR_ID_XLINK), e(a, g.HTTPRequest.INIT_SEGMENT_TYPE, m.default.DOWNLOAD_ERROR_ID_INITIALIZATION), e(a, g.HTTPRequest.MEDIA_SEGMENT_TYPE, m.default.DOWNLOAD_ERROR_ID_CONTENT), e(a, g.HTTPRequest.INDEX_SEGMENT_TYPE, m.default.DOWNLOAD_ERROR_ID_CONTENT), e(a, g.HTTPRequest.BITSTREAM_SWITCHING_SEGMENT_TYPE, m.default.DOWNLOAD_ERROR_ID_CONTENT), e(a, g.HTTPRequest.OTHER_TYPE, m.default.DOWNLOAD_ERROR_ID_CONTENT), s = a
      }

      function c(a, b) {
        var d = a.request,
          e = new XMLHttpRequest,
          f = [],
          g = !0,
          h = !0,
          k = new Date,
          m = k,
          o = 0,
          t = function(a) {
            h = !1, d.requestStartDate = k, d.requestEndDate = new Date, d.firstByteDate = d.firstByteDate || k, d.checkExistenceOnly || l.addHttpRequest(d.mediaType, null, d.type, d.url, e.responseURL || null, d.serviceLocation || null, d.range || null, d.requestStartDate, d.firstByteDate, d.requestEndDate, e.status, d.duration, e.getAllResponseHeaders(), a ? f : null)
          },
          u = function() {
            p.indexOf(e) !== -1 && (p.splice(p.indexOf(e), 1), h && (t(!1), b > 0 ? (b--, r.push(setTimeout(function() {
              c(a, b)
            }, i.getRetryIntervalForType(d.type)))) : (j.downloadError(s[d.type], d.url, d), a.error && a.error(d, "error", e.statusText), a.complete && a.complete(d, e.statusText))))
          },
          v = function(b) {
            var c = new Date;
            g && (g = !1, (!b.lengthComputable || b.lengthComputable && b.total !== b.loaded) && (d.firstByteDate = c)), b.lengthComputable && (d.bytesLoaded = b.loaded, d.bytesTotal = b.total), f.push({
              s: m,
              d: c.getTime() - m.getTime(),
              b: [b.loaded ? b.loaded - o : 0]
            }), m = c, o = b.loaded, a.progress && a.progress()
          },
          w = function() {
            e.status >= 200 && e.status <= 299 && (t(!0), a.success && a.success(e.response, e.statusText, e), a.complete && a.complete(d, e.statusText))
          };
        try {
          var x = n.modifyRequestURL(d.url),
            y = d.checkExistenceOnly ? "HEAD" : "GET";
          e.open(y, x, !0), d.responseType && (e.responseType = d.responseType), d.range && e.setRequestHeader("Range", "bytes=" + d.range), d.requestStartDate || (d.requestStartDate = k), e = n.modifyRequestHeader(e), e.withCredentials = i.getXHRWithCredentialsForType(d.type), e.onload = w, e.onloadend = u, e.onerror = u, e.onprogress = v;
          var z = (new Date).getTime();
          isNaN(d.delayLoadingTime) || z >= d.delayLoadingTime ? (p.push(e), e.send()) : ! function() {
            var a = {
              xhr: e
            };
            q.push(a), a.delayTimeout = setTimeout(function() {
              if (q.indexOf(a) !== -1) {
                q.splice(q.indexOf(a), 1);
                try {
                  p.push(a.xhr), a.xhr.send()
                } catch (b) {
                  a.xhr.onerror()
                }
              }
            }, d.delayLoadingTime - z)
          }()
        } catch (A) {
          e.onerror()
        }
      }

      function d(a) {
        a.request && c(a, i.getRetryAttemptsForType(a.request.type))
      }

      function f() {
        r.forEach(function(a) {
          return clearTimeout(a)
        }), r = [], q.forEach(function(a) {
          return clearTimeout(a.delayTimeout)
        }), q = [], p.forEach(function(a) {
          a.onloadend = a.onerror = a.onprogress = void 0, a.abort()
        }), p = []
      }
      var h = this.context,
        i = (0, k.default)(h).getInstance(),
        j = a.errHandler,
        l = a.metricsModel,
        n = a.requestModifier,
        o = void 0,
        p = void 0,
        q = void 0,
        r = void 0,
        s = void 0;
      return o = {
        load: d,
        abort: f
      }, b(), o
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var g = a(180),
      h = a(10),
      i = d(h),
      j = a(102),
      k = d(j),
      l = a(152),
      m = d(l);
    f.__dashjs_factory_name = "XHRLoader";
    var n = i.default.getClassFactory(f);
    c.default = n, b.exports = c.default
  }, {
    10: 10,
    102: 102,
    152: 152,
    180: 180
  }],
  60: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b(a, b, c) {
        var e = function(d, e) {
          b.resolved = !0, b.resolvedContent = d ? d : null, f.trigger(p.default.XLINK_ELEMENT_LOADED, {
            element: b,
            resolveObject: c,
            error: d || e ? null : new g.default(s, "Failed loading Xlink element: " + a)
          })
        };
        if (a === d) e(null, !0);
        else {
          var i = new l.default(a, j.HTTPRequest.XLINK_TYPE);
          h.load({
            request: i,
            success: function(a) {
              e(a)
            },
            error: function() {
              e(null)
            }
          })
        }
      }

      function c() {
        h && (h.abort(), h = null)
      }
      var d = "urn:mpeg:dash:resolve-to-zero:2013",
        e = this.context,
        f = (0, n.default)(e).getInstance(),
        h = (0, i.default)(e).create({
          errHandler: a.errHandler,
          metricsModel: a.metricsModel,
          requestModifier: a.requestModifier
        }),
        k = void 0;
      return k = {
        load: b,
        reset: c
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(163),
      g = d(f),
      h = a(59),
      i = d(h),
      j = a(180),
      k = a(171),
      l = d(k),
      m = a(9),
      n = d(m),
      o = a(13),
      p = d(o),
      q = a(10),
      r = d(q),
      s = 1;
    e.__dashjs_factory_name = "XlinkLoader";
    var t = r.default.getClassFactory(e);
    t.XLINK_LOADER_ERROR_LOADING_FAILURE = s, c.default = t, b.exports = c.default
  }, {
    10: 10,
    13: 13,
    163: 163,
    171: 171,
    180: 180,
    59: 59,
    9: 9
  }],
  61: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        qa = {
          video: !0,
          audio: !0
        }, ra = {}, sa = {}, ta = {}, ua = {}, va = {}, xa = {}, wa = {}, Ka = {}, za = !1, Aa = !1, void 0 === Ba && (Ba = !1), Ia = (0, i.default)(ja).getInstance(), Ha = (0, k.default)(ja).getInstance(), Ea = (0, w.default)(ja).getInstance(), Fa = (0, y.default)(ja).getInstance(), Ga = (0, A.default)(ja).getInstance(), Ma = (0, K.default)(ja).getInstance(), Na = (0, M.default)(ja).getInstance(), Oa = (new Date).getTime() / 1e3
      }

      function b(a, b) {
        Ka[a] = (0, G.default)(ja).create(), wa[a] = b, xa[a] = xa[a] || {}, xa[a].state = Q, ma.on(q.default.LOADING_PROGRESS, ia, this), "video" == a && (ma.on(s.default.QUALITY_CHANGE_RENDERED, e, this), La = (0, I.default)(ja).create(), ga())
      }

      function c() {
        ma.off(q.default.LOADING_PROGRESS, ia, this), ma.off(s.default.QUALITY_CHANGE_RENDERED, e, this), Ja = void 0, La = void 0, clearTimeout(ya), ya = null, a()
      }

      function d(a) {
        a && (a.abrRulesCollection && (oa = a.abrRulesCollection), a.streamController && (pa = a.streamController))
      }

      function e(a) {
        "video" === a.mediaType && (Ja = a.newQuality, La.push(Ja, Ga.getPlaybackQuality()))
      }

      function f(a, b) {
        var c;
        return ra[b] = ra[b] || {}, ra[b].hasOwnProperty(a) || (ra[b][a] = 0), c = da(ra[b][a], a), c = ea(c, a, ra[b][a]), c = ha(c, a)
      }

      function h(a) {
        var b = Ia.getSavedBitrateSettings(a);
        if (!ta.hasOwnProperty(a))
          if (ua.hasOwnProperty(a)) {
            var c = Ea.getValue(),
              d = Fa.getAdaptationForType(c, 0, a).Representation;
            if (Array.isArray(d)) {
              var e = Math.max(Math.round(d.length * ua[a]) - 1, 0);
              ta[a] = d[e].bandwidth
            } else ta[a] = 0
          } else isNaN(b) ? ta[a] = "video" === a ? R : S : ta[a] = b;
        return ta[a]
      }

      function j(a, b) {
        ta[a] = b
      }

      function l(a) {
        return ua.hasOwnProperty(a) ? ua[a] : null
      }

      function n(a, b) {
        ua[a] = b
      }

      function p(a) {
        return ta.hasOwnProperty("max") && ta.max.hasOwnProperty(a) ? ta.max[a] : NaN
      }

      function r(a, b) {
        ta.max = ta.max || {}, ta.max[a] = b
      }

      function t(a) {
        return ua.hasOwnProperty("max") && ua.max.hasOwnProperty(a) ? ua.max[a] : 1
      }

      function u(a, b) {
        ua.max = ua.max || {}, ua.max[a] = b
      }

      function v(a) {
        return qa[a]
      }

      function x(a, b) {
        qa[a] = b
      }

      function z() {
        return za
      }

      function B(a) {
        za = a
      }

      function D() {
        return Aa
      }

      function F(a) {
        Aa = a
      }

      function H(a) {
        var b = a.getType(),
          c = a.getStreamInfo(),
          d = c.id,
          e = aa(b, c),
          g = (0, C.default)(ja).create({
            streamProcessor: a,
            currentValue: e,
            playbackIndex: Ja,
            switchHistory: Ka[b],
            droppedFramesHistory: La,
            hasRichBuffer: X(b)
          });
        if (La && La.push(Ja, Ga.getPlaybackQuality()), v(b)) {
          var h = f(b, d),
            i = oa.getMaxQuality(g),
            j = i.value;
          if (j > h && (j = h), Ka[b].push({
              oldValue: e,
              newValue: j
            }), j > E.default.NO_CHANGE && j != e)(xa[b].state === Q || j > e) && L(b, c, e, j, h, i.reason);
          else if (ka.getLogToBrowserConsole()) {
            var k = Na.getCurrentBufferLevel(Ma.getReadOnlyMetricsFor(b));
            la("AbrController (" + b + ") stay on " + e + "/" + h + " (buffer: " + k + ")")
          }
        }
      }

      function J(a, b, c, d) {
        var e = b.id,
          g = aa(a, b),
          h = null !== c && !isNaN(c) && c % 1 === 0;
        if (!h) throw new Error("argument is not an integer");
        var i = f(a, e);
        c !== g && c >= 0 && c <= i && L(a, b, g, c, i, d)
      }

      function L(a, b, c, d, e, f) {
        if (ka.getLogToBrowserConsole()) {
          var g = Na.getCurrentBufferLevel(Ma.getReadOnlyMetricsFor(a));
          la("AbrController (" + a + ") switch from " + c + " to " + d + "/" + e + " (buffer: " + g + ")\n" + JSON.stringify(f))
        }
        ba(a, b.id, d), ma.trigger(q.default.QUALITY_CHANGE_REQUESTED, {
          mediaType: a,
          streamInfo: b,
          oldQuality: c,
          newQuality: d,
          reason: f
        })
      }

      function N(a, b) {
        xa[a].state = b
      }

      function U(a) {
        return xa[a].state
      }

      function V(a, b, c) {
        if (c && wa[a.type].getCurrentRepresentationInfo() && wa[a.type].getCurrentRepresentationInfo().fragmentDuration) {
          c /= 1e3;
          var d = wa[a.type].getCurrentRepresentationInfo().fragmentDuration;
          if (c > d) return 0;
          var e = c / d;
          b *= 1 - e
        }
        var f = W(a);
        if (!f || 0 === f.length) return T;
        for (var g = f.length - 1; g >= 0; g--) {
          var h = f[g];
          if (1e3 * b >= h.bitrate) return g
        }
        return 0
      }

      function W(a) {
        if (!a || !a.bitrateList) return null;
        for (var b, c = a.bitrateList, d = a.type, e = [], f = 0, h = c.length; f < h; f++) b = new g.default, b.mediaType = d, b.qualityIndex = f, b.bitrate = c[f].bandwidth, b.width = c[f].width, b.height = c[f].height, e.push(b);
        return e
      }

      function X(a) {
        var b = Ma.getReadOnlyMetricsFor(a),
          c = Na.getCurrentBufferLevel(b),
          d = b.BufferState.length > 0 ? b.BufferState[b.BufferState.length - 1] : null,
          e = !1;
        return d && c > d.target && (e = c > d.target + Ha.getRichBufferThreshold()), e
      }

      function Y(a, b) {
        va[a] = b
      }

      function Z(a) {
        return va[a]
      }

      function $(a) {
        var b = a.type,
          c = a.streamInfo.id,
          d = a.representationCount - 1;
        return ca(b, c, d), d
      }

      function _(a) {
        var b, c = a.id,
          d = aa("audio", a),
          e = aa("video", a);
        return b = d === f("audio", c) && e === f("video", c)
      }

      function aa(a, b) {
        var c, d = b.id;
        return sa[d] = sa[d] || {}, sa[d].hasOwnProperty(a) || (sa[d][a] = T), c = sa[d][a]
      }

      function ba(a, b, c) {
        sa[b] = sa[b] || {}, sa[b][a] = c
      }

      function ca(a, b, c) {
        ra[b] = ra[b] || {}, ra[b][a] = c
      }

      function da(a, b) {
        var c = p(b);
        if (isNaN(c) || !wa[b]) return a;
        var d = V(wa[b].getMediaInfo(), c);
        return Math.min(a, d)
      }

      function ea(a, b, c) {
        var d = t(b);
        return isNaN(d) || d >= 1 || d < 0 ? a : Math.min(a, Math.round(c * d))
      }

      function fa(a) {
        Ba = a
      }

      function ga() {
        var a = Ga.getElement();
        if (void 0 !== a) {
          var b = Aa && window.hasOwnProperty("devicePixelRatio"),
            c = b ? window.devicePixelRatio : 1;
          Ca = a.clientWidth * c, Da = a.clientHeight * c
        }
      }

      function ha(a, b) {
        if ("video" !== b || !za || !wa[b]) return a;
        Ba || ga();
        var c = Ea.getValue(),
          d = Fa.getAdaptationForType(c, 0, b).Representation,
          e = a;
        if (Ca > 0 && Da > 0) {
          for (; e > 0 && d[e] && Ca < d[e].width && Ca - d[e - 1].width < d[e].width - Ca;) e -= 1;
          d.length - 2 >= e && d[e].width === d[e + 1].width && (e = Math.min(a, e + 1))
        }
        return e
      }

      function ia(a) {
        var b = a.request.mediaType;
        if (v(b)) {
          var c = wa[b].getScheduleController();
          if (!c) return;
          var d = (0, C.default)(ja).create({
              streamProcessor: wa[b],
              currentRequest: a.request,
              currentValue: aa(b, pa.getActiveStreamInfo()),
              hasRichBuffer: X(b)
            }),
            e = oa.shouldAbandonFragment(d);
          if (e.value > E.default.NO_CHANGE) {
            var f = c.getFragmentModel(),
              g = f.getRequests({
                state: m.default.FRAGMENT_MODEL_LOADING,
                index: a.request.index
              })[0];
            g && (f.abortRequests(), N(b, P), Ka[b].reset(), Ka[b].push({
              oldValue: aa(b, pa.getActiveStreamInfo()),
              newValue: e.value,
              confidence: 1,
              reason: e.reason
            }), J(b, pa.getActiveStreamInfo(), e.value, e.reason), ma.trigger(q.default.FRAGMENT_LOADING_ABANDONED, {
              streamProcessor: wa[b],
              request: g,
              mediaType: b
            }), clearTimeout(ya), ya = setTimeout(function() {
              N(b, Q), ya = null
            }, Ha.getAbandonLoadTimeout()))
          }
        }
      }
      var ja = this.context,
        ka = (0, O.default)(ja).getInstance(),
        la = ka.log,
        ma = (0, o.default)(ja).getInstance(),
        na = void 0,
        oa = void 0,
        pa = void 0,
        qa = void 0,
        ra = void 0,
        sa = void 0,
        ta = void 0,
        ua = void 0,
        va = void 0,
        wa = void 0,
        xa = void 0,
        ya = void 0,
        za = void 0,
        Aa = void 0,
        Ba = void 0,
        Ca = void 0,
        Da = void 0,
        Ea = void 0,
        Fa = void 0,
        Ga = void 0,
        Ha = void 0,
        Ia = void 0,
        Ja = void 0,
        Ka = void 0,
        La = void 0,
        Ma = void 0,
        Na = void 0,
        Oa = void 0;
      return na = {
        isPlayingAtTopQuality: _,
        updateTopQualityIndex: $,
        getAverageThroughput: Z,
        getBitrateList: W,
        getQualityForBitrate: V,
        getMaxAllowedBitrateFor: p,
        setMaxAllowedBitrateFor: r,
        getMaxAllowedRepresentationRatioFor: t,
        setMaxAllowedRepresentationRatioFor: u,
        getInitialBitrateFor: h,
        setInitialBitrateFor: j,
        getInitialRepresentationRatioFor: l,
        setInitialRepresentationRatioFor: n,
        setAutoSwitchBitrateFor: x,
        getAutoSwitchBitrateFor: v,
        setLimitBitrateByPortal: B,
        getLimitBitrateByPortal: z,
        getUsePixelRatioInLimitBitrateByPortal: D,
        setUsePixelRatioInLimitBitrateByPortal: F,
        getQualityFor: aa,
        getAbandonmentStateFor: U,
        setAbandonmentStateFor: N,
        setPlaybackQuality: J,
        getPlaybackQuality: H,
        setAverageThroughput: Y,
        getTopQualityIndexFor: f,
        setElementSize: ga,
        setWindowResizeEventCalled: fa,
        initialize: b,
        setConfig: d,
        reset: c
      }, a(), na
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(161),
      g = d(f),
      h = a(150),
      i = d(h),
      j = a(102),
      k = d(j),
      l = a(100),
      m = d(l),
      n = a(9),
      o = d(n),
      p = a(13),
      q = d(p),
      r = a(53),
      s = d(r),
      t = a(10),
      u = d(t),
      v = a(101),
      w = d(v),
      x = a(22),
      y = d(x),
      z = a(105),
      A = d(z),
      B = a(130),
      C = d(B),
      D = a(132),
      E = d(D),
      F = a(133),
      G = d(F),
      H = a(129),
      I = d(H),
      J = a(103),
      K = d(J),
      L = a(17),
      M = d(L),
      N = a(8),
      O = d(N),
      P = "abandonload",
      Q = "allowload",
      R = 1e3,
      S = 100,
      T = 0;
    e.__dashjs_factory_name = "AbrController";
    var U = u.default.getSingletonFactory(e);
    U.ABANDON_LOAD = P, U.QUALITY_DEFAULT = T, c.default = U, b.exports = c.default;
  }, {
    10: 10,
    100: 100,
    101: 101,
    102: 102,
    103: 103,
    105: 105,
    129: 129,
    13: 13,
    130: 130,
    132: 132,
    133: 133,
    150: 150,
    161: 161,
    17: 17,
    22: 22,
    53: 53,
    8: 8,
    9: 9
  }],
  62: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a) {
        p.invalidateSelectedIndexes(a.entry)
      }

      function b() {
        p = (0, g.default)(l).create(), r = (0, i.default)(l).create(), n.on(s.default.SERVICE_LOCATION_BLACKLIST_CHANGED, a, j)
      }

      function c(a) {
        a.baseURLTreeModel && (p = a.baseURLTreeModel), a.baseURLSelector && (r = a.baseURLSelector)
      }

      function d(a) {
        p.update(a), r.chooseSelectorFromManifest(a)
      }

      function e(a) {
        var b = p.getForPath(a),
          c = b.reduce(function(a, b) {
            var c = r.select(b);
            return c ? (o.isRelative(c.url) ? a.url = o.resolve(c.url, a.url) : (a.url = c.url, a.serviceLocation = c.serviceLocation), a) : new m.default
          }, new m.default);
        if (!o.isRelative(c.url)) return c
      }

      function f() {
        p.reset(), r.reset()
      }

      function h(a) {
        d(a)
      }
      var j = void 0,
        l = this.context,
        n = (0, q.default)(l).getInstance(),
        o = (0, k.default)(l).getInstance(),
        p = void 0,
        r = void 0;
      return j = {
        reset: f,
        initialize: h,
        resolve: e,
        setConfig: c
      }, b(), j
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(99),
      g = d(f),
      h = a(146),
      i = d(h),
      j = a(159),
      k = d(j),
      l = a(41),
      m = d(l),
      n = a(10),
      o = d(n),
      p = a(9),
      q = d(p),
      r = a(13),
      s = d(r);
    e.__dashjs_factory_name = "BaseURLController", c.default = o.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    13: 13,
    146: 146,
    159: 159,
    41: 41,
    9: 9,
    99: 99
  }],
  63: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b(a) {
        return !!(g.length && a && a.length) && g.indexOf(a) !== -1
      }

      function c(a) {
        g.indexOf(a) === -1 && (g.push(a), h.trigger(j, {
          entry: a
        }))
      }

      function d(a) {
        a.error && c(a.request.serviceLocation)
      }

      function e() {
        k && h.on(k, d, this)
      }

      function f() {
        g = []
      }
      var g = [],
        h = (0, i.default)(this.context).getInstance(),
        j = a.updateEventName,
        k = a.loadFailedEventName;
      return e(), {
        add: c,
        contains: b,
        reset: f
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f),
      h = a(9),
      i = d(h);
    e.__dashjs_factory_name = "BlackListController", c.default = g.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    9: 9
  }],
  64: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b() {
        oa = m.default.QUALITY_DEFAULT, pa = !1, qa = 0, ra = Number.POSITIVE_INFINITY, ta = 0, ua = Number.POSITIVE_INFINITY, wa = null, xa = E, za = 0, Aa = !1, Ba = !1, Ca = !1, Da = !1
      }

      function c(a, b, c) {
        va = a, $(b), Fa = c, Ia = (0, i.default)(ca).getInstance(), Ea = (0, o.default)(ca).getInstance(), Ga = (0, m.default)(ca).getInstance(), Ja = (0, C.default)(ca).getInstance(), Ha = Fa.getScheduleController(), oa = Ga.getQualityFor(va, Fa.getStreamInfo()), ea.on(u.default.DATA_UPDATE_COMPLETED, O, this), ea.on(u.default.INIT_FRAGMENT_LOADED, f, this), ea.on(u.default.MEDIA_FRAGMENT_LOADED, j, this), ea.on(u.default.QUALITY_CHANGE_REQUESTED, p, this), ea.on(u.default.STREAM_COMPLETED, P, this), ea.on(u.default.PLAYBACK_PROGRESS, t, this), ea.on(u.default.PLAYBACK_TIME_UPDATED, t, this), ea.on(u.default.PLAYBACK_RATE_CHANGED, S, this), ea.on(u.default.PLAYBACK_SEEKING, r, this), ea.on(u.default.WALLCLOCK_TIME_UPDATED, R, this), ea.on(u.default.CURRENT_TRACK_CHANGED, Q, this, s.default.EVENT_PRIORITY_HIGH), ea.on(u.default.SOURCEBUFFER_APPEND_COMPLETED, n, this), ea.on(u.default.SOURCEBUFFER_REMOVE_COMPLETED, M, this)
      }

      function d(a) {
        if (!a || !sa || !Fa) return null;
        var b = null;
        try {
          b = ha.createSourceBuffer(sa, a), b && b.hasOwnProperty("initialize") && b.initialize(va, this)
        } catch (c) {
          ia.mediaSourceError("Error creating " + va + " source buffer.")
        }
        return X(b), N(Fa.getRepresentationInfoForQuality(oa).MSETimeOffset), b
      }

      function e() {
        return Fa.getStreamInfo().id === ja.getActiveStreamInfo().id
      }

      function f(a) {
        a.fragmentModel === Fa.getFragmentModel() && (da("Init fragment finished loading saving to", va + "'s init cache"), Ja.save(a.chunk), l(a.chunk))
      }

      function h(a, b) {
        var c = Ja.extract(a, va, b);
        c ? l(c) : ea.trigger(u.default.INIT_REQUESTED, {
          sender: na
        })
      }

      function j(a) {
        if (a.fragmentModel === Fa.getFragmentModel()) {
          var b = a.chunk,
            c = b.bytes,
            d = b.quality,
            e = Fa.getRepresentationInfoForQuality(d),
            f = ga.getValue(),
            h = la.getEventsFor(f, e.mediaInfo, Fa),
            i = la.getEventsFor(f, e, Fa);
          if (h && h.length > 0 || i && i.length > 0) {
            var j = Fa.getFragmentModel().getRequests({
                state: g.default.FRAGMENT_MODEL_EXECUTED,
                quality: d,
                index: b.index
              })[0],
              k = G(c, j, h, i);
            Fa.getEventController().addInbandEvents(k)
          }
          b.bytes = H(c), l(b)
        }
      }

      function l(a) {
        Ba = !0, ya = a, ha.append(wa, a), "video" === a.mediaInfo.type && a.mediaInfo.embeddedCaptions && ma.append(a.bytes, a)
      }

      function n(a) {
        if (wa === a.buffer) {
          if (a.error || !I()) return a.error.code === k.default.QUOTA_EXCEEDED_ERROR_CODE && (ra = .8 * ha.getTotalBufferedTime(wa)), void(a.error.code !== k.default.QUOTA_EXCEEDED_ERROR_CODE && I() || (ea.trigger(u.default.QUOTA_EXCEEDED, {
            sender: na,
            criticalBufferLevel: ra
          }), L(K())));
          isNaN(ya.index) || (ta = Math.max(ya.index, ta), y());
          var b = ha.getAllRanges(wa);
          if (b && b.length > 0)
            for (var c = 0, d = b.length; c < d; c++) da("Buffered Range for type:", va, ":", b.start(c), " - ", b.end(c));
          t(), Ba = !1, ea.trigger(u.default.BYTES_APPENDED, {
            sender: na,
            quality: ya.quality,
            startTime: ya.start,
            index: ya.index,
            bufferedRanges: b
          })
        }
      }

      function p(a) {
        oa !== a.newQuality && va === a.mediaType && Fa.getStreamInfo().id === a.streamInfo.id && (N(Fa.getRepresentationInfoForQuality(a.newQuality).MSETimeOffset), oa = a.newQuality)
      }

      function r() {
        ua = Number.POSITIVE_INFINITY, pa = !1, t()
      }

      function t() {
        v(), x()
      }

      function v() {
        qa = ha.getBufferLength(wa, Ea.getTime()), ea.trigger(u.default.BUFFER_LEVEL_UPDATED, {
          sender: na,
          bufferLevel: qa
        }), z()
      }

      function x() {
        e() && (fa.addBufferState(va, xa, Ha.getBufferTarget()), fa.addBufferLevel(va, new Date, 1e3 * qa))
      }

      function y() {
        var a = ta >= ua - 1;
        a && !pa && (pa = !0, ea.trigger(u.default.BUFFERING_COMPLETED, {
          sender: na,
          streamInfo: Fa.getStreamInfo()
        }))
      }

      function z() {
        B(qa < F && !pa ? E : D)
      }

      function B(a) {
        xa === a || "fragmentedText" === va && ma.getAllTracksAreDisabled() || (xa = a, x(), ea.trigger(u.default.BUFFER_LEVEL_STATE_CHANGED, {
          sender: na,
          state: a,
          mediaType: va,
          streamInfo: Fa.getStreamInfo()
        }), ea.trigger(a === D ? u.default.BUFFER_LOADED : u.default.BUFFER_EMPTY, {
          mediaType: va
        }), da(a === D ? "Got enough buffer to start." : "Waiting for more buffer before starting playback."))
      }

      function G(a, b, c, d) {
        var e = Math.max(isNaN(b.startTime) ? 0 : b.startTime, 0),
          f = [],
          g = [];
        Da = !1;
        for (var h = c.concat(d), i = 0, j = h.length; i < j; i++) f[h[i].schemeIdUri] = h[i];
        for (var k = (0, w.default)(ca).getInstance().parse(a), l = k.getBoxes("emsg"), i = 0, j = l.length; i < j; i++) {
          var m = la.getEvent(l[i], f, e);
          m && g.push(m)
        }
        return g
      }

      function H(a) {
        if (!Da) return a;
        for (var b = a.length, c = Math.pow(256, 2), d = Math.pow(256, 3), e = new Uint8Array(a.length), f = 0, g = 0; f < b;) {
          var h = String.fromCharCode(a[f + 4], a[f + 5], a[f + 6], a[f + 7]),
            i = a[f] * d + a[f + 1] * c + 256 * a[f + 2] + 1 * a[f + 3];
          if ("emsg" != h)
            for (var j = f; j < f + i; j++) e[g] = a[j], g++;
          f += i
        }
        return e.subarray(0, g)
      }

      function I() {
        var a = ha.getTotalBufferedTime(wa);
        return a < ra
      }

      function J() {
        if (wa && "fragmentedText" !== va) {
          var a = wa.buffered.length ? wa.buffered.start(0) : 0,
            b = Ea.getTime() - a - Ia.getBufferToKeep();
          b > 0 && (da("pruning buffer: " + b + " seconds."), Ca = !0, ha.remove(wa, 0, Math.round(a + b), sa))
        }
      }

      function K() {
        if (!wa) return null;
        var a = Ea.getTime(),
          b = Fa.getFragmentModel().getRequests({
            state: g.default.FRAGMENT_MODEL_EXECUTED,
            time: a
          })[0],
          c = ha.getBufferRange(wa, a),
          d = b && !isNaN(b.startTime) ? b.startTime : Math.floor(a);
        return null === c && wa.buffered.length > 0 && (d = wa.buffered.end(wa.buffered.length - 1)), {
          start: wa.buffered.start(0),
          end: d
        }
      }

      function L(a) {
        a && wa && ha.remove(wa, a.start, a.end, sa)
      }

      function M(a) {
        wa === a.buffer && (Ca && (Ca = !1), v(), ea.trigger(u.default.BUFFER_CLEARED, {
          sender: na,
          from: a.from,
          to: a.to,
          hasEnoughSpaceToAppend: I()
        }))
      }

      function N(a) {
        wa && wa.timestampOffset !== a && !isNaN(a) && (wa.timestampOffset = a)
      }

      function O(a) {
        a.sender.getStreamProcessor() !== Fa || a.error || N(a.currentRepresentation.MSETimeOffset)
      }

      function P(a) {
        a.fragmentModel === Fa.getFragmentModel() && (ua = a.request.index, y())
      }

      function Q(a) {
        wa && a.newMediaInfo.type === va && a.newMediaInfo.streamInfo.id === Fa.getStreamInfo().id && ka.getSwitchMode(va) === q.default.TRACK_SWITCH_MODE_ALWAYS_REPLACE && L(K())
      }

      function R() {
        za++;
        var a = za * (Ia.getWallclockTimeUpdateInterval() / 1e3);
        a >= Ia.getBufferPruningInterval() && !Ba && (za = 0, J())
      }

      function S() {
        z()
      }

      function T() {
        return va
      }

      function U() {
        return Fa
      }

      function V(a) {
        Fa = a
      }

      function W() {
        return wa
      }

      function X(a) {
        wa = a
      }

      function Y() {
        return qa
      }

      function Z() {
        return ra
      }

      function $(a) {
        sa = a
      }

      function _() {
        return sa
      }

      function aa() {
        return pa
      }

      function ba(a) {
        ea.off(u.default.DATA_UPDATE_COMPLETED, O, this), ea.off(u.default.QUALITY_CHANGE_REQUESTED, p, this), ea.off(u.default.INIT_FRAGMENT_LOADED, f, this), ea.off(u.default.MEDIA_FRAGMENT_LOADED, j, this), ea.off(u.default.STREAM_COMPLETED, P, this), ea.off(u.default.CURRENT_TRACK_CHANGED, Q, this), ea.off(u.default.PLAYBACK_PROGRESS, t, this), ea.off(u.default.PLAYBACK_TIME_UPDATED, t, this), ea.off(u.default.PLAYBACK_RATE_CHANGED, S, this), ea.off(u.default.PLAYBACK_SEEKING, r, this), ea.off(u.default.WALLCLOCK_TIME_UPDATED, R, this), ea.off(u.default.SOURCEBUFFER_APPEND_COMPLETED, n, this), ea.off(u.default.SOURCEBUFFER_REMOVE_COMPLETED, M, this), ra = Number.POSITIVE_INFINITY, xa = E, oa = m.default.QUALITY_DEFAULT, ua = Number.POSITIVE_INFINITY, ta = 0, ya = null, Aa = !1, pa = !1, Ba = !1, Ca = !1, Ea = null, Fa = null, Ga = null, Ha = null, a || (ha.abort(sa, wa), ha.removeSourceBuffer(sa, wa)), wa = null
      }
      var ca = this.context,
        da = (0, A.default)(ca).getInstance().log,
        ea = (0, s.default)(ca).getInstance(),
        fa = a.metricsModel,
        ga = a.manifestModel,
        ha = a.sourceBufferController,
        ia = a.errHandler,
        ja = a.streamController,
        ka = a.mediaController,
        la = a.adapter,
        ma = a.textSourceBuffer,
        na = void 0,
        oa = void 0,
        pa = void 0,
        qa = void 0,
        ra = void 0,
        sa = void 0,
        ta = void 0,
        ua = void 0,
        va = void 0,
        wa = void 0,
        xa = void 0,
        ya = void 0,
        za = void 0,
        Aa = void 0,
        Ba = void 0,
        Ca = void 0,
        Da = void 0,
        Ea = void 0,
        Fa = void 0,
        Ga = void 0,
        Ha = void 0,
        Ia = void 0,
        Ja = void 0;
      return na = {
        initialize: c,
        createBuffer: d,
        getType: T,
        getStreamProcessor: U,
        setStreamProcessor: V,
        getBuffer: W,
        setBuffer: X,
        getBufferLevel: Y,
        getCriticalBufferLevel: Z,
        setMediaSource: $,
        getMediaSource: _,
        getIsBufferingCompleted: aa,
        switchInitData: h,
        reset: ba
      }, b(), na
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(100),
      g = d(f),
      h = a(102),
      i = d(h),
      j = a(71),
      k = d(j),
      l = a(61),
      m = d(l),
      n = a(69),
      o = d(n),
      p = a(67),
      q = d(p),
      r = a(9),
      s = d(r),
      t = a(13),
      u = d(t),
      v = a(147),
      w = d(v),
      x = a(10),
      y = d(x),
      z = a(8),
      A = d(z),
      B = a(153),
      C = d(B),
      D = "bufferLoaded",
      E = "bufferStalled",
      F = .5;
    e.__dashjs_factory_name = "BufferController";
    var G = y.default.getClassFactory(e);
    G.BUFFER_LOADED = D, G.BUFFER_EMPTY = E, c.default = G, b.exports = c.default
  }, {
    10: 10,
    100: 100,
    102: 102,
    13: 13,
    147: 147,
    153: 153,
    61: 61,
    67: 67,
    69: 69,
    71: 71,
    8: 8,
    9: 9
  }],
  65: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        D = !1, u = {}, v = {}, w = {}, x = null, y = 100, z = y / 1e3, C = (0, g.default)(q).getInstance()
      }

      function b() {
        null !== x && D && (clearInterval(x), x = null, D = !1)
      }

      function c() {
        r("Start Event Controller"), D || isNaN(y) || (D = !0, x = setInterval(h, y))
      }

      function d(a) {
        if (u = {}, a)
          for (var b = 0; b < a.length; b++) {
            var c = a[b];
            u[c.id] = c, r("Add inline event with id " + c.id)
          }
        r("Added " + a.length + " inline events")
      }

      function e(a) {
        for (var b = 0; b < a.length; b++) {
          var c = a[b];
          c.id in v ? r("Repeated event with id " + c.id) : (v[c.id] = c, r("Add inband event with id " + c.id))
        }
      }

      function f() {
        if (w)
          for (var a = C.getTime(), b = Object.keys(w), c = 0; c < b.length; c++) {
            var d = b[c],
              e = w[d];
            null !== e && (e.duration + e.presentationTime) / e.eventStream.timescale < a && (r("Remove Event " + d + " at time " + a), e = null, delete w[d])
          }
      }

      function h() {
        j(v), j(u), f()
      }

      function i() {
        var a = A.getValue(),
          b = a.url;
        a.hasOwnProperty("Location") && (b = a.Location), r("Refresh manifest @ " + b), B.getManifestLoader().load(b)
      }

      function j(a) {
        var b, c = C.getTime();
        if (a)
          for (var d = Object.keys(a), e = 0; e < d.length; e++) {
            var f = d[e],
              g = a[f];
            void 0 !== g && (b = g.presentationTime / g.eventStream.timescale, (0 === b || b <= c && b + z > c) && (r("Start Event " + f + " at " + c), g.duration > 0 && (w[f] = g), g.eventStream.schemeIdUri == o && g.eventStream.value == p ? i() : s.trigger(g.eventStream.schemeIdUri, {
              event: g
            }), delete a[f]))
          }
      }

      function l(a) {
        a && (a.manifestModel && (A = a.manifestModel), a.manifestUpdater && (B = a.manifestUpdater))
      }

      function n() {
        b(), u = null, v = null, w = null, C = null
      }
      var o = "urn:mpeg:dash:event:2012",
        p = 1,
        q = this.context,
        r = (0, k.default)(q).getInstance().log,
        s = (0, m.default)(q).getInstance(),
        t = void 0,
        u = void 0,
        v = void 0,
        w = void 0,
        x = void 0,
        y = void 0,
        z = void 0,
        A = void 0,
        B = void 0,
        C = void 0,
        D = void 0;
      return t = {
        initialize: a,
        addInlineEvents: d,
        addInbandEvents: e,
        clear: b,
        start: c,
        setConfig: l,
        reset: n
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(69),
      g = d(f),
      h = a(10),
      i = d(h),
      j = a(8),
      k = d(j),
      l = a(9),
      m = d(l);
    e.__dashjs_factory_name = "EventController", c.default = i.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    69: 69,
    8: 8,
    9: 9
  }],
  66: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        q = {}, m.on(p.default.FRAGMENT_LOADING_COMPLETED, g, o)
      }

      function b(a) {
        var b = q[a];
        return b || (b = (0, j.default)(i).create({
          metricsModel: (0, l.default)(i).getInstance()
        }), q[a] = b), b
      }

      function c(a) {
        return a && a.type && a.type === f.HTTPRequest.INIT_SEGMENT_TYPE
      }

      function d() {
        m.off(p.default.FRAGMENT_LOADING_COMPLETED, g, this);
        for (var a in q) q[a].reset();
        q = {}
      }

      function e(a, b, c) {
        var d = new h.default;
        return d.streamId = c, d.mediaInfo = b.mediaInfo, d.segmentType = b.type, d.start = b.startTime, d.duration = b.duration, d.end = d.start + d.duration, d.bytes = a, d.index = b.index, d.quality = b.quality, d
      }

      function g(a) {
        if (q[a.request.mediaType] === a.sender) {
          var b = a.sender.getScheduleController(),
            d = a.request,
            f = a.response,
            g = c(d),
            h = b.getStreamProcessor().getStreamInfo();
          if (!f || !h) return void k("No " + d.mediaType + " bytes to push or stream is inactive.");
          var i = e(f, d, h.id);
          m.trigger(g ? p.default.INIT_FRAGMENT_LOADED : p.default.MEDIA_FRAGMENT_LOADED, {
            chunk: i,
            fragmentModel: a.sender
          })
        }
      }
      var i = this.context,
        k = (0, t.default)(i).getInstance().log,
        m = (0, n.default)(i).getInstance(),
        o = void 0,
        q = void 0;
      return o = {
        getModel: b,
        isInitializationRequest: c,
        reset: d
      }, a(), o
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(180),
      g = a(162),
      h = d(g),
      i = a(100),
      j = d(i),
      k = a(103),
      l = d(k),
      m = a(9),
      n = d(m),
      o = a(13),
      p = d(o),
      q = a(10),
      r = d(q),
      s = a(8),
      t = d(s);
    e.__dashjs_factory_name = "FragmentController", c.default = r.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    100: 100,
    103: 103,
    13: 13,
    162: 162,
    180: 180,
    8: 8,
    9: 9
  }],
  67: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        N = {}, E(), D()
      }

      function b(a, b) {
        var c = k(a),
          e = d(a, b),
          f = [];
        return "fragmentedText" === a ? void h(e[0]) : (c || (c = L.getSavedMediaSettings(a), j(a, c)), void(e && 0 !== e.length && (c && e.forEach(function(a) {
          C(c, a) && f.push(a)
        }), h(0 === f.length ? F(e) : f.length > 1 ? F(f) : f[0]))))
      }

      function c(a) {
        var b = a ? a.type : null,
          c = a ? a.streamInfo.id : null,
          d = k(b);
        return !(!a || !x(b)) && (N[c] = N[c] || G(), !(N[c][b].list.indexOf(a) >= 0) && (N[c][b].list.push(a), d && C(d, a) && !e(b, a.streamInfo) && h(a), !0))
      }

      function d(a, b) {
        if (!a || !b) return [];
        var c = b.id;
        return N[c] && N[c][a] ? N[c][a].list : []
      }

      function e(a, b) {
        return !a || !b || b && !N[b.id] ? null : N[b.id][a].current
      }

      function f(a) {
        var b = a.type,
          c = a.streamInfo.id;
        return N[c] && N[c][b] && y(N[c][b].current, a)
      }

      function h(a) {
        if (a) {
          var b = a.type,
            c = a.streamInfo,
            d = c.id,
            f = e(b, c);
          if (N[d] && N[d][b] && (!f || !y(a, f))) {
            N[d][b].current = a, f && J.trigger(g.default.CURRENT_TRACK_CHANGED, {
              oldMediaInfo: f,
              newMediaInfo: a,
              switchMode: Q[b]
            });
            var h = B(a);
            h && N[d][b].storeLastSettings && (h.roles && (h.role = h.roles[0], delete h.roles), h.accessibility && (h.accessibility = h.accessibility[0]), h.audioChannelConfiguration && (h.audioChannelConfiguration = h.audioChannelConfiguration[0]), L.setSavedMediaSettings(b, h))
          }
        }
      }

      function j(a, b) {
        a && b && (O[a] = b)
      }

      function k(a) {
        return a ? O[a] : null
      }

      function l(a, b) {
        var c = S.indexOf(b) !== -1;
        return c ? void(Q[a] = b) : void I("track switch mode is not supported: " + b)
      }

      function n(a) {
        return Q[a]
      }

      function p(a) {
        var b = T.indexOf(a) !== -1;
        return b ? void(P = a) : void I("track selection mode is not supported: " + a)
      }

      function w() {
        return P || v
      }

      function x(a) {
        return "audio" === a || "video" === a || "text" === a || "fragmentedText" === a
      }

      function y(a, b) {
        var c = a.id === b.id,
          d = a.viewpoint === b.viewpoint,
          e = a.lang === b.lang,
          f = a.roles.toString() === b.roles.toString(),
          g = a.accessibility.toString() === b.accessibility.toString(),
          h = a.audioChannelConfiguration.toString() === b.audioChannelConfiguration.toString();
        return c && d && e && f && g && h
      }

      function z(a) {
        a && a.errHandler && (R = a.errHandler)
      }

      function A() {
        a(), K.resetEmbedded()
      }

      function B(a) {
        var b = {
            lang: a.lang,
            viewpoint: a.viewpoint,
            roles: a.roles,
            accessibility: a.accessibility,
            audioChannelConfiguration: a.audioChannelConfiguration
          },
          c = b.lang || b.viewpoint || b.role && b.role.length > 0 || b.accessibility && b.accessibility.length > 0 || b.audioChannelConfiguration && b.audioChannelConfiguration.length > 0;
        return c ? b : null
      }

      function C(a, b) {
        var c = !a.lang || a.lang === b.lang,
          d = !a.viewpoint || a.viewpoint === b.viewpoint,
          e = !a.role || !!b.roles.filter(function(b) {
            return b === a.role
          })[0],
          f = !a.accessibility || !!b.accessibility.filter(function(b) {
            return b === a.accessibility
          })[0],
          g = !a.audioChannelConfiguration || !!b.audioChannelConfiguration.filter(function(b) {
            return b === a.audioChannelConfiguration
          })[0];
        return c && d && e && f && g
      }

      function D() {
        Q = {
          audio: s,
          video: r
        }
      }

      function E() {
        O = {
          audio: null,
          video: null
        }
      }

      function F(a) {
        var b = w(),
          c = [],
          d = function(a) {
            var b, c = 0,
              d = [];
            return a.forEach(function(a) {
              b = Math.max.apply(Math, a.bitrateList.map(function(a) {
                return a.bandwidth
              })), b > c ? (c = b, d = [a]) : b === c && d.push(a)
            }), d
          },
          e = function(a) {
            var b, c = 0,
              d = [];
            return a.forEach(function(a) {
              b = a.representationCount, b > c ? (c = b, d = [a]) : b === c && d.push(a)
            }), d
          };
        switch (b) {
          case t:
            c = d(a), c.length > 1 && (c = e(c));
            break;
          case u:
            c = e(a), c.length > 1 && (c = d(a));
            break;
          default:
            I("track selection mode is not supported: " + b)
        }
        return c[0]
      }

      function G() {
        return {
          audio: {
            list: [],
            storeLastSettings: !0,
            current: null
          },
          video: {
            list: [],
            storeLastSettings: !0,
            current: null
          },
          text: {
            list: [],
            storeLastSettings: !0,
            current: null
          },
          fragmentedText: {
            list: [],
            storeLastSettings: !0,
            current: null
          }
        }
      }
      var H = this.context,
        I = (0, m.default)(H).getInstance().log,
        J = (0, i.default)(H).getInstance(),
        K = (0, o.default)(H).getInstance(),
        L = (0, q.default)(H).getInstance(),
        M = void 0,
        N = void 0,
        O = void 0,
        P = void 0,
        Q = void 0,
        R = void 0,
        S = [s, r],
        T = [t, u];
      return M = {
        initialize: a,
        checkInitialMediaSettingsForType: b,
        addTrack: c,
        getTracksFor: d,
        getCurrentTrackFor: e,
        isCurrentTrack: f,
        setTrack: h,
        setInitialSettings: j,
        getInitialSettings: k,
        setSwitchMode: l,
        getSwitchMode: n,
        setSelectionModeForInitialTrack: p,
        getSelectionModeForInitialTrack: w,
        isMultiTrackSupportedByType: x,
        isTracksEqual: y,
        setConfig: z,
        reset: A
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(13),
      g = d(f),
      h = a(9),
      i = d(h),
      j = a(10),
      k = d(j),
      l = a(8),
      m = d(l),
      n = a(57),
      o = d(n),
      p = a(150),
      q = d(p),
      r = "neverReplace",
      s = "alwaysReplace",
      t = "highestBitrate",
      u = "widestRange",
      v = t;
    e.__dashjs_factory_name = "MediaController";
    var w = k.default.getSingletonFactory(e);
    w.TRACK_SWITCH_MODE_NEVER_REPLACE = r, w.TRACK_SWITCH_MODE_ALWAYS_REPLACE = s, w.TRACK_SELECTION_MODE_HIGHEST_BITRATE = t, w.TRACK_SELECTION_MODE_WIDEST_RANGE = u, w.DEFAULT_INIT_TRACK_SELECTION_MODE = v, c.default = w, b.exports = c.default
  }, {
    10: 10,
    13: 13,
    150: 150,
    57: 57,
    8: 8,
    9: 9
  }],
  68: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        var a = "WebKitMediaSource" in window,
          b = "MediaSource" in window;
        return b ? new MediaSource : a ? new WebKitMediaSource : null
      }

      function b(a, b) {
        var c = window.URL.createObjectURL(a);
        return b.setSource(c), c
      }

      function c(a) {
        a.setSource(null)
      }

      function d(a, b) {
        return a.duration != b && (a.duration = b), a.duration
      }

      function e(a) {
        var b = a.sourceBuffers,
          c = b.length,
          d = 0;
        if ("open" === a.readyState) {
          for (d; d < c; d++) {
            if (b[d].updating) return;
            if (0 === b[d].buffered.length) return
          }
          a.endOfStream()
        }
      }
      var f = void 0;
      return f = {
        createMediaSource: a,
        attachMediaSource: b,
        detachMediaSource: c,
        setDuration: d,
        signalEndOfStream: e
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f);
    e.__dashjs_factory_name = "MediaSourceController", c.default = g.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10
  }],
  69: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        ka = 0, la = NaN, ma = null, pa = null, ra = !1, na = {}, qa = (0, k.default)(Z).getInstance()
      }

      function b(a) {
        oa = a, ba = ja.getElement(), X(), pa = oa.manifestInfo.isDynamic, la = oa.start, _.on(o.default.DATA_UPDATE_COMPLETED, H, this), _.on(o.default.BYTES_APPENDED, V, this), _.on(o.default.BUFFER_LEVEL_STATE_CHANGED, W, this), _.on(o.default.PERIOD_SWITCH_STARTED, c, this), ra && (ra = !1, h())
      }

      function c(a) {
        !pa && a.fromStreamInfo && na[a.fromStreamInfo.id] && delete na[a.fromStreamInfo.id]
      }

      function d() {
        var a = B(!0),
          b = pa ? a - oa.start : 0;
        return a + (oa.duration - b) - q()
      }

      function e() {
        return q() > 0
      }

      function f() {
        return oa.id
      }

      function h() {
        if (ba) {
          ba.autoplay = !0;
          var a = ba.play();
          a && "undefined" != typeof Promise && a instanceof Promise && a.catch(function(a) {
            "NotAllowedError" === a.name && _.trigger(o.default.PLAYBACK_NOT_ALLOWED), $("Caught pending play exception - continuing (" + a + ")")
          })
        } else ra = !0
      }

      function j() {
        if (ba) return ba.paused
      }

      function l() {
        ba && (ba.pause(), ba.autoplay = !1)
      }

      function n() {
        if (ba) return ba.seeking
      }

      function p(a) {
        ja && ($("Requesting seek to time: " + a), ja.setCurrentTime(a))
      }

      function q() {
        if (ba) return ba.currentTime
      }

      function r() {
        if (ba) return ba.playbackRate
      }

      function t() {
        if (ba) return ba.played
      }

      function u() {
        if (ba) return ba.ended
      }

      function v() {
        return pa
      }

      function w(a) {
        la = a
      }

      function x() {
        return la
      }

      function y(a, b) {
        var c = ha.getMpd(ga.getValue()),
          d = void 0,
          e = 10;
        d = qa.getUseSuggestedPresentationDelay() && c.hasOwnProperty("suggestedPresentationDelay") ? c.suggestedPresentationDelay : qa.getLiveDelay() ? qa.getLiveDelay() : isNaN(a) ? 2 * oa.manifestInfo.minBufferTime : a * qa.getLiveDelayFragmentCount();
        var f = Math.max(b - e, b / 2);
        return Math.min(d, f)
      }

      function z() {
        ja && ba && (_.off(o.default.DATA_UPDATE_COMPLETED, H, this), _.off(o.default.BUFFER_LEVEL_STATE_CHANGED, W, this), _.off(o.default.BYTES_APPENDED, V, this), E(), Y()), ja = null, oa = null, ba = null, pa = null, a()
      }

      function A(a) {
        a && (a.streamController && (ca = a.streamController), a.timelineConverter && (da = a.timelineConverter), a.metricsModel && (ea = a.metricsModel), a.dashMetrics && (fa = a.dashMetrics), a.manifestModel && (ga = a.manifestModel), a.dashManifestModel && (ha = a.dashManifestModel), a.adapter && (ia = a.adapter), a.videoModel && (ja = a.videoModel))
      }

      function B(a) {
        var b = void 0,
          c = (0, i.default)(Z).getInstance().getURIFragmentData(),
          d = parseInt(c.s, 10),
          e = parseInt(c.t, 10),
          f = NaN;
        if (a || (f = isNaN(d) ? e : d), pa) !isNaN(f) && f > 1262304e3 && (b = f - oa.manifestInfo.availableFrom.getTime() / 1e3, (b > la || b < la - oa.manifestInfo.DVRWindowSize) && (b = null)), b = b || la;
        else if (!isNaN(f) && f < Math.max(oa.manifestInfo.duration, oa.duration) && f >= 0) b = f;
        else {
          var g = na[oa.id];
          void 0 === g && (g = ca.getActiveStreamCommonEarliestTime()), b = Math.max(g, oa.start)
        }
        return b
      }

      function C(a) {
        var b, c = ea.getReadOnlyMetricsFor("video") || ea.getReadOnlyMetricsFor("audio"),
          d = fa.getCurrentDVRInfo(c),
          e = d ? d.range : null;
        if (!e) return NaN;
        if (a > e.end) b = Math.max(e.end - 2 * oa.manifestInfo.minBufferTime, e.start);
        else {
          if (!(a < e.start)) return a;
          b = e.start
        }
        return b
      }

      function D() {
        if (null === ma) {
          var a = function() {
            U()
          };
          ma = setInterval(a, qa.getWallclockTimeUpdateInterval())
        }
      }

      function E() {
        clearInterval(ma), ma = null
      }

      function F() {
        var a = B(!1);
        a > 0 && (p(a), $("Starting playback at offset: " + a))
      }

      function G() {
        if (!j() && pa && 0 !== ba.readyState) {
          var a = q(),
            b = C(a),
            c = !isNaN(b) && b !== a;
          c && p(b)
        }
      }

      function H(a) {
        if (!a.error) {
          var b = ia.convertDataToTrack(ga.getValue(), a.currentRepresentation),
            c = b.mediaInfo.streamInfo;
          oa.id === c.id && (oa = c, G())
        }
      }

      function I() {
        _.trigger(o.default.CAN_PLAY)
      }

      function J() {
        $("Native video element event: play"), G(), D(), _.trigger(o.default.PLAYBACK_STARTED, {
          startTime: q()
        })
      }

      function K() {
        $("Native video element event: playing"), _.trigger(o.default.PLAYBACK_PLAYING, {
          playingTime: q()
        })
      }

      function L() {
        $("Native video element event: pause"), _.trigger(o.default.PLAYBACK_PAUSED, {
          ended: u()
        })
      }

      function M() {
        var a = q();
        $("Seeking to: " + a), D(), _.trigger(o.default.PLAYBACK_SEEKING, {
          seekTime: a
        })
      }

      function N() {
        $("Native video element event: seeked"), _.trigger(o.default.PLAYBACK_SEEKED)
      }

      function O() {
        var a = q();
        a !== ka && (ka = a, _.trigger(o.default.PLAYBACK_TIME_UPDATED, {
          timeToEnd: d(),
          time: a
        }))
      }

      function P() {
        _.trigger(o.default.PLAYBACK_PROGRESS)
      }

      function Q() {
        var a = r();
        $("Native video element event: ratechange: ", a), _.trigger(o.default.PLAYBACK_RATE_CHANGED, {
          playbackRate: a
        })
      }

      function R() {
        $("Native video element event: loadedmetadata"), (!pa && oa.isFirst || da.isTimeSyncCompleted()) && F(), _.trigger(o.default.PLAYBACK_METADATA_LOADED), D()
      }

      function S() {
        $("Native video element event: ended"), l(), E(), _.trigger(o.default.PLAYBACK_ENDED)
      }

      function T(a) {
        var b = a.target || a.srcElement;
        _.trigger(o.default.PLAYBACK_ERROR, {
          error: b.error
        })
      }

      function U() {
        _.trigger(o.default.WALLCLOCK_TIME_UPDATED, {
          isDynamic: pa,
          time: new Date
        })
      }

      function V(a) {
        var b = a.bufferedRanges;
        if (b && b.length) {
          var c = Math.max(b.start(0), oa.start),
            d = void 0 === na[oa.id] ? c : Math.max(na[oa.id], c);
          d !== na[oa.id] && (!pa && B(!0) < d && q() < d && p(d), na[oa.id] = d)
        }
      }

      function W(a) {
        a.streamInfo.id === oa.id && ja.setStallState(a.mediaType, a.state === g.default.BUFFER_EMPTY)
      }

      function X() {
        ba.addEventListener("canplay", I), ba.addEventListener("play", J), ba.addEventListener("playing", K), ba.addEventListener("pause", L), ba.addEventListener("error", T), ba.addEventListener("seeking", M), ba.addEventListener("seeked", N), ba.addEventListener("timeupdate", O), ba.addEventListener("progress", P), ba.addEventListener("ratechange", Q), ba.addEventListener("loadedmetadata", R), ba.addEventListener("ended", S)
      }

      function Y() {
        ba.removeEventListener("canplay", I), ba.removeEventListener("play", J), ba.removeEventListener("playing", K), ba.removeEventListener("pause", L), ba.removeEventListener("error", T), ba.removeEventListener("seeking", M), ba.removeEventListener("seeked", N), ba.removeEventListener("timeupdate", O), ba.removeEventListener("progress", P), ba.removeEventListener("ratechange", Q), ba.removeEventListener("loadedmetadata", R), ba.removeEventListener("ended", S)
      }
      var Z = this.context,
        $ = (0, s.default)(Z).getInstance().log,
        _ = (0, m.default)(Z).getInstance(),
        aa = void 0,
        ba = void 0,
        ca = void 0,
        da = void 0,
        ea = void 0,
        fa = void 0,
        ga = void 0,
        ha = void 0,
        ia = void 0,
        ja = void 0,
        ka = void 0,
        la = void 0,
        ma = void 0,
        na = void 0,
        oa = void 0,
        pa = void 0,
        qa = void 0,
        ra = void 0;
      return aa = {
        initialize: b,
        setConfig: A,
        getStreamStartTime: B,
        getTimeToStreamEnd: d,
        isPlaybackStarted: e,
        getStreamId: f,
        getTime: q,
        getPlaybackRate: r,
        getPlayedRanges: t,
        getEnded: u,
        getIsDynamic: v,
        setLiveStartTime: w,
        getLiveStartTime: x,
        computeLiveDelay: y,
        play: h,
        isPaused: j,
        pause: l,
        isSeeking: n,
        seek: p,
        reset: z
      }, a(), aa
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(64),
      g = d(f),
      h = a(104),
      i = d(h),
      j = a(102),
      k = d(j),
      l = a(9),
      m = d(l),
      n = a(13),
      o = d(n),
      p = a(10),
      q = d(p),
      r = a(8),
      s = d(r);
    e.__dashjs_factory_name = "PlaybackController", c.default = q.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    102: 102,
    104: 104,
    13: 13,
    64: 64,
    8: 8,
    9: 9
  }],
  70: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b() {
        wa = !0, Ra = NaN, Pa = NaN, Qa = {}, Sa = [], xa = !1, ya = null, za = null, Aa = !0, Ba = !1, Ca = 0, Ea = NaN
      }

      function c(a, b) {
        sa = a, Ia = b, Fa = (0, h.default)(ha).getInstance(), Ga = (0, n.default)(ha).getInstance(), Ha = (0, j.default)(ha).getInstance(), Ja = (0, N.default)(ha).getInstance(), Ka = Ia.getFragmentController(), La = Ia.getBufferController(), ta = Ka.getModel(sa), ta.setScheduleController(this), ua = Ia.isDynamic(), Oa = qa.getScheduleWhilePaused(), Ma = (0, p.default)(ha).create({
          dashMetrics: (0, z.default)(ha).getInstance(),
          metricsModel: (0, v.default)(ha).getInstance(),
          textSourceBuffer: (0, t.default)(ha).getInstance()
        }), Na = (0, r.default)(ha).create({
          adapter: (0, B.default)(ha).getInstance(),
          sourceBufferController: (0, D.default)(ha).getInstance(),
          textSourceBuffer: (0, t.default)(ha).getInstance()
        }), oa.getIsTextTrack(sa) && ja.on(J.default.TIMED_TEXT_REQUESTED, T, this), ja.on(J.default.QUALITY_CHANGE_REQUESTED, u, this), ja.on(J.default.DATA_UPDATE_STARTED, M, this), ja.on(J.default.DATA_UPDATE_COMPLETED, y, this), ja.on(J.default.FRAGMENT_LOADING_COMPLETED, G, this), ja.on(J.default.STREAM_COMPLETED, E, this), ja.on(J.default.STREAM_INITIALIZED, A, this), ja.on(J.default.BUFFER_LEVEL_STATE_CHANGED, Q, this), ja.on(J.default.BUFFER_CLEARED, O, this), ja.on(J.default.BYTES_APPENDED, K, this), ja.on(J.default.INIT_REQUESTED, o, this), ja.on(J.default.QUOTA_EXCEEDED, R, this), ja.on(J.default.BUFFER_LEVEL_STATE_CHANGED, Q, this), ja.on(J.default.PLAYBACK_SEEKING, V, this), ja.on(J.default.PLAYBACK_STARTED, U, this), ja.on(J.default.PLAYBACK_RATE_CHANGED, W, this), ja.on(J.default.PLAYBACK_TIME_UPDATED, I, this), ja.on(J.default.URL_RESOLUTION_FAILED, S, this), ja.on(J.default.FRAGMENT_LOADING_ABANDONED, L, this)
      }

      function d() {
        va && !La.getIsBufferingCompleted() && (fa(), xa = !1, wa ? (wa = !1, q(va.quality)) : m(0), ia("Schedule controller starting for " + sa))
      }

      function e() {
        xa || (xa = !0, clearTimeout(Da), ia("Schedule controller stopping for " + sa))
      }

      function g(a, b) {
        Qa[b] = Qa[b] || {};
        var c = Ha.getTopQualityIndexFor(a, b);
        return Qa[b][a] != c && (ia("Top quality" + a + " index has changed from " + Qa[b][a] + " to " + c), Qa[b][a] = c, !0)
      }

      function i() {
        if (!(xa || Ba || !La || Fa.isPaused() && !Oa)) {
          k();
          var a = Sa.length > 0;
          if (a || g(va.mediaInfo.type, Ia.getStreamInfo().id) || Ma.execute(Ia, sa, Ja.isVideoTrackPresent())) {
            var b = function() {
              if (va.quality !== Ra) Ra = va.quality, La.switchInitData(Ia.getStreamInfo().id, va.quality);
              else {
                var a = Sa.shift();
                if (Ka.isInitializationRequest(a)) q(a.quality);
                else {
                  var b = Na.execute(Ia, a);
                  b ? ta.executeRequest(b) : (Ba = !1, m(500))
                }
              }
            };
            Ba = !0, a ? b() : (Ha.getPlaybackQuality(Ia), b())
          } else m(500)
        }
      }

      function k() {
        var a = 1.5 * va.fragmentDuration,
          b = ta.getRequests({
            state: x.default.FRAGMENT_MODEL_EXECUTED,
            time: Fa.getTime() + a,
            threshold: 0
          })[0];
        b && Sa.indexOf(b) === -1 && !oa.getIsTextTrack(sa) && (!Ga.isCurrentTrack(b.mediaInfo) || qa.getFastSwitchEnabled() && b.quality < va.quality && La.getBufferLevel() >= a && Ha.getAbandonmentStateFor(sa) !== j.default.ABANDON_LOAD ? (s(b), ia("Reloading outdated fragment at index: ", b.index)) : b.quality > va.quality && Y(Fa.getTime() + La.getBufferLevel()))
      }

      function m(a) {
        clearTimeout(Da), Da = setTimeout(i, a)
      }

      function o(a) {
        a.sender.getStreamProcessor() === Ia && q(va.quality)
      }

      function q(a) {
        Ra = a;
        var b = ma.getInitRequest(Ia, a);
        b && (Ba = !0, ta.executeRequest(b))
      }

      function s(a) {
        Sa.push(a)
      }

      function u(a) {
        if (sa === a.mediaType && Ia.getStreamInfo().id === a.streamInfo.id) {
          if (va = Ia.getRepresentationInfoForQuality(a.newQuality), null === va || void 0 === va) throw new Error("Unexpected error! - currentRepresentationInfo is null or undefined");
          ea(new Date, f.PlayListTrace.REPRESENTATION_SWITCH_STOP_REASON), fa()
        }
      }

      function w(a) {
        var b = ta.getRequests({
          state: x.default.FRAGMENT_MODEL_EXECUTED,
          time: Fa.getTime(),
          threshold: 0
        })[0];
        b && Fa.getTime() >= b.startTime && (b.quality !== Pa && a && ja.trigger(J.default.QUALITY_CHANGE_RENDERED, {
          mediaType: sa,
          oldQuality: Pa,
          newQuality: b.quality
        }), Pa = b.quality)
      }

      function y(a) {
        a.error || a.sender.getStreamProcessor() !== Ia || (va = ma.convertDataToTrack(la.getValue(), a.currentRepresentation))
      }

      function A(a) {
        a.error || Ia.getStreamInfo().id !== a.streamInfo.id || (va = Ia.getCurrentRepresentationInfo(), ua && wa && (pa.setTimeSyncCompleted(!0), C()), xa && d())
      }

      function C() {
        var a = (0, F.default)(ha).getInstance().getLiveEdge(),
          b = va.mediaInfo.streamInfo.manifestInfo.DVRWindowSize / 2,
          c = a - Fa.computeLiveDelay(va.fragmentDuration, b),
          d = ma.getFragmentRequestForTime(Ia, va, c, {
            ignoreIsFinished: !0
          });
        Ea = Fa.getLiveStartTime(), (isNaN(Ea) || d.startTime > Ea) && (Fa.setLiveStartTime(d.startTime), Ea = d.startTime);
        var e = na.getCurrentManifestUpdate(ka.getMetricsFor("stream"));
        ka.updateManifestUpdateInfo(e, {
          currentTime: Ea,
          presentationStartTime: a,
          latency: a - Ea,
          clientTimeOffset: pa.getClientTimeOffset()
        })
      }

      function E(a) {
        a.fragmentModel === ta && (e(), Ba = !1, ia("Stream is complete"))
      }

      function G(a) {
        a.sender === ta && (oa.getIsTextTrack(sa) && (Ba = !1), a.error && a.request.serviceLocation && !xa && (s(a.request), Ba = !1, m(0)))
      }

      function I() {
        w(!0)
      }

      function K(a) {
        a.sender.getStreamProcessor() === Ia && (Ba = !1, m(0))
      }

      function L(a) {
        a.streamProcessor === Ia && (s(a.request), Ba = !1, m(0))
      }

      function M(a) {
        a.sender.getStreamProcessor() === Ia && e()
      }

      function O(a) {
        a.sender.getStreamProcessor() === Ia && (ta.removeExecutedRequestsBeforeTime(a.to), a.hasEnoughSpaceToAppend && xa && d())
      }

      function Q(a) {
        a.sender.getStreamProcessor() !== Ia || a.state !== l.default.BUFFER_EMPTY || Fa.isSeeking() || (ia("Buffer is empty! Stalling!"), ea(new Date, f.PlayListTrace.REBUFFERING_REASON))
      }

      function R(a) {
        a.sender.getStreamProcessor() === Ia && e()
      }

      function S() {
        ta.abortRequests(), e()
      }

      function T(a) {
        a.sender.getStreamProcessor() === Ia && q(a.index)
      }

      function U() {
        !xa && Oa || d()
      }

      function V(a) {
        Ea = a.seekTime, $(0), xa && d();
        var b = na.getCurrentManifestUpdate(ka.getMetricsFor("stream")),
          c = va.DVRWindow ? va.DVRWindow.end - Fa.getTime() : NaN;
        ka.updateManifestUpdateInfo(b, {
          latency: c
        })
      }

      function W(a) {
        za && (za.playbackspeed = a.playbackRate.toString())
      }

      function X() {
        return Ea
      }

      function Y(a) {
        Ea = a
      }

      function Z() {
        return ta
      }

      function $(a) {
        Ca = a
      }

      function _() {
        return Ca
      }

      function aa() {
        return Ia
      }

      function ba() {
        return Ma.getBufferTarget(Ia, sa, Ja.isVideoTrackPresent());
      }

      function ca(a) {
        ya = a
      }

      function da(a, b) {
        ea(a, b), ya = null
      }

      function ea(a, b) {
        if (ya && Aa === !1) {
          var c = za.start,
            d = a.getTime() - c.getTime();
          za.duration = d, za.stopreason = b, ya.trace.push(za), Aa = !0
        }
      }

      function fa() {
        ya && Aa === !0 && va && (Aa = !1, za = new f.PlayListTrace, za.representationid = va.id, za.start = new Date, za.mstart = 1e3 * Fa.getTime(), za.playbackspeed = Fa.getPlaybackRate().toString())
      }

      function ga() {
        ja.off(J.default.DATA_UPDATE_STARTED, M, this), ja.off(J.default.DATA_UPDATE_COMPLETED, y, this), ja.off(J.default.BUFFER_LEVEL_STATE_CHANGED, Q, this), ja.off(J.default.QUALITY_CHANGE_REQUESTED, u, this), ja.off(J.default.FRAGMENT_LOADING_COMPLETED, G, this), ja.off(J.default.STREAM_COMPLETED, E, this), ja.off(J.default.STREAM_INITIALIZED, A, this), ja.off(J.default.QUOTA_EXCEEDED, R, this), ja.off(J.default.BYTES_APPENDED, K, this), ja.off(J.default.BUFFER_CLEARED, O, this), ja.off(J.default.INIT_REQUESTED, o, this), ja.off(J.default.PLAYBACK_RATE_CHANGED, W, this), ja.off(J.default.PLAYBACK_SEEKING, V, this), ja.off(J.default.PLAYBACK_STARTED, U, this), ja.off(J.default.PLAYBACK_TIME_UPDATED, I, this), ja.off(J.default.URL_RESOLUTION_FAILED, S, this), ja.off(J.default.FRAGMENT_LOADING_ABANDONED, L, this), oa.getIsTextTrack(sa) && ja.off(J.default.TIMED_TEXT_REQUESTED, T, this), e(), w(!1), Ba = !1, Ca = 0, Ea = NaN, Fa = null, ya = null
      }
      var ha = this.context,
        ia = (0, P.default)(ha).getInstance().log,
        ja = (0, H.default)(ha).getInstance(),
        ka = a.metricsModel,
        la = a.manifestModel,
        ma = a.adapter,
        na = a.dashMetrics,
        oa = a.dashManifestModel,
        pa = a.timelineConverter,
        qa = a.mediaPlayerModel,
        ra = void 0,
        sa = void 0,
        ta = void 0,
        ua = void 0,
        va = void 0,
        wa = void 0,
        xa = void 0,
        ya = void 0,
        za = void 0,
        Aa = void 0,
        Ba = void 0,
        Ca = void 0,
        Da = void 0,
        Ea = void 0,
        Fa = void 0,
        Ga = void 0,
        Ha = void 0,
        Ia = void 0,
        Ja = void 0,
        Ka = void 0,
        La = void 0,
        Ma = void 0,
        Na = void 0,
        Oa = void 0,
        Pa = void 0,
        Qa = void 0,
        Ra = void 0,
        Sa = void 0;
      return ra = {
        initialize: c,
        getStreamProcessor: aa,
        getSeekTarget: X,
        setSeekTarget: Y,
        getFragmentModel: Z,
        setTimeToLoadDelay: $,
        getTimeToLoadDelay: _,
        replaceRequest: s,
        start: d,
        stop: e,
        reset: ga,
        setPlayList: ca,
        getBufferTarget: ba,
        finalisePlayList: da
      }, b(), ra
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(182),
      g = a(69),
      h = d(g),
      i = a(61),
      j = d(i),
      k = a(64),
      l = d(k),
      m = a(67),
      n = d(m),
      o = a(144),
      p = d(o),
      q = a(145),
      r = d(q),
      s = a(57),
      t = d(s),
      u = a(103),
      v = d(u),
      w = a(100),
      x = d(w),
      y = a(17),
      z = d(y),
      A = a(15),
      B = d(A),
      C = a(71),
      D = d(C),
      E = a(155),
      F = d(E),
      G = a(9),
      H = d(G),
      I = a(13),
      J = d(I),
      K = a(10),
      L = d(K),
      M = a(72),
      N = d(M),
      O = a(8),
      P = d(O);
    e.__dashjs_factory_name = "ScheduleController", c.default = L.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    100: 100,
    103: 103,
    13: 13,
    144: 144,
    145: 145,
    15: 15,
    155: 155,
    17: 17,
    182: 182,
    57: 57,
    61: 61,
    64: 64,
    67: 67,
    69: 69,
    71: 71,
    72: 72,
    8: 8,
    9: 9
  }],
  71: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a, b) {
        var c = b.codec,
          d = null;
        try {
          if (c.match(/application\/mp4;\s*codecs="(stpp|wvtt).*"/i)) throw new y.default("not really supported");
          d = a.addSourceBuffer(c)
        } catch (e) {
          if (!b.isText && c.indexOf('codecs="stpp') === -1 && c.indexOf('codecs="wvtt') === -1) throw e;
          d = (0, g.default)(t).getInstance(), d.setConfig({
            errHandler: (0, m.default)(t).getInstance(),
            adapter: (0, k.default)(t).getInstance(),
            dashManifestModel: z,
            mediaController: (0, i.default)(t).getInstance(),
            videoModel: (0, w.default)(t).getInstance(),
            streamController: (0, o.default)(t).getInstance(),
            textTracks: (0, q.default)(t).getInstance(),
            VTTParser: (0, s.default)(t).getInstance(),
            TTMLParser: (0, u.default)(t).getInstance()
          })
        }
        return d
      }

      function b(a, b) {
        try {
          a.removeSourceBuffer(b)
        } catch (c) {}
      }

      function c(a, b, c) {
        var d, e, f = null,
          g = 0,
          h = 0,
          i = null,
          j = null,
          k = 0,
          l = c || .15;
        try {
          f = a.buffered
        } catch (m) {
          return null
        }
        if (null !== f && void 0 !== f) {
          for (e = 0, d = f.length; e < d; e++)
            if (g = f.start(e), h = f.end(e), null === i) k = Math.abs(g - b), b >= g && b < h ? (i = g, j = h) : k <= l && (i = g, j = h);
            else {
              if (k = g - j, !(k <= l)) break;
              j = h
            }
          if (null !== i) return {
            start: i,
            end: j
          }
        }
        return null
      }

      function d(a) {
        var b = null;
        try {
          return b = a.buffered
        } catch (c) {
          return null
        }
      }

      function e(a) {
        var b, c, e = d(a),
          f = 0;
        if (!e) return f;
        for (c = 0, b = e.length; c < b; c++) f += e.end(c) - e.start(c);
        return f
      }

      function f(a, b, d) {
        var e, f;
        return e = c(a, b, d), f = null === e ? 0 : e.end - b
      }

      function h(a, b) {
        if (!b) return null;
        var c, e, f, g, h, i, j, k, l, m = d(b);
        if (!m) return null;
        for (var n = 0, o = m.length; n < o; n++) {
          if (k = a.length > n, h = k ? {
              start: a.start(n),
              end: a.end(n)
            } : null, c = m.start(n), e = m.end(n), !h) return l = {
            start: c,
            end: e
          };
          if (f = h.start === c, g = h.end === e, !f || !g) {
            if (f) l = {
              start: h.end,
              end: e
            };
            else {
              if (!g) return l = {
                start: c,
                end: e
              };
              l = {
                start: c,
                end: h.start
              }
            }
            return i = a.length > n + 1 ? {
              start: a.start(n + 1),
              end: a.end(n + 1)
            } : null, j = n + 1 < o ? {
              start: m.start(n + 1),
              end: m.end(n + 1)
            } : null, !i || j && j.start === i.start && j.end === i.end || (l.end = i.start), l
          }
        }
        return null
      }

      function j(a, b) {
        var c = b.bytes,
          d = "append" in a ? "append" : "appendBuffer" in a ? "appendBuffer" : null,
          e = "Object" === Object.prototype.toString.call(a).slice(8, -1);
        if (d) try {
          r(a, function() {
            e ? a[d](c, b) : a[d](c), r(a, function() {
              v.trigger(C.default.SOURCEBUFFER_APPEND_COMPLETED, {
                buffer: a,
                bytes: c
              })
            })
          })
        } catch (f) {
          v.trigger(C.default.SOURCEBUFFER_APPEND_COMPLETED, {
            buffer: a,
            bytes: c,
            error: new y.default(f.code, f.message, null)
          })
        }
      }

      function l(a, b, c, d) {
        try {
          r(a, function() {
            b >= 0 && c > b && "ended" !== d.readyState && a.remove(b, c), r(a, function() {
              v.trigger(C.default.SOURCEBUFFER_REMOVE_COMPLETED, {
                buffer: a,
                from: b,
                to: c
              })
            })
          })
        } catch (e) {
          v.trigger(C.default.SOURCEBUFFER_REMOVE_COMPLETED, {
            buffer: a,
            from: b,
            to: c,
            error: new y.default(e.code, e.message, null)
          })
        }
      }

      function n(a, b) {
        try {
          "open" === a.readyState ? b.abort() : b.setTextTrack && "ended" === a.readyState && b.abort()
        } catch (c) {}
      }

      function p(a) {
        a && a.dashManifestModel && (z = a.dashManifestModel)
      }

      function r(a, b) {
        var c, d = 50,
          e = function() {
            a.updating || (clearInterval(c), b())
          },
          f = function c() {
            a.updating || (a.removeEventListener("updateend", c, !1), b())
          };
        if (!a.updating) return void b();
        if ("function" == typeof a.addEventListener) try {
          a.addEventListener("updateend", f, !1)
        } catch (g) {
          c = setInterval(e, d)
        } else c = setInterval(e, d)
      }
      var t = this.context,
        v = (0, A.default)(t).getInstance(),
        x = void 0,
        z = void 0;
      return x = {
        append: j,
        remove: l,
        abort: n,
        createSourceBuffer: a,
        removeSourceBuffer: b,
        getBufferRange: c,
        getAllRanges: d,
        getTotalBufferedTime: e,
        getBufferLength: f,
        getRangeDifference: h,
        setConfig: p
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(57),
      g = d(f),
      h = a(67),
      i = d(h),
      j = a(15),
      k = d(j),
      l = a(152),
      m = d(l),
      n = a(72),
      o = d(n),
      p = a(58),
      q = d(p),
      r = a(160),
      s = d(r),
      t = a(158),
      u = d(t),
      v = a(105),
      w = d(v),
      x = a(163),
      y = d(x),
      z = a(9),
      A = d(z),
      B = a(13),
      C = d(B),
      D = a(10),
      E = d(D),
      F = 22;
    e.__dashjs_factory_name = "SourceBufferController";
    var G = E.default.getSingletonFactory(e);
    G.QUOTA_EXCEEDED_ERROR_CODE = F, c.default = G, b.exports = c.default
  }, {
    10: 10,
    105: 105,
    13: 13,
    15: 15,
    152: 152,
    158: 158,
    160: 160,
    163: 163,
    57: 57,
    58: 58,
    67: 67,
    72: 72,
    9: 9
  }],
  72: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        ma = null, ka = [], wa = (0, u.default)(T).getInstance(), oa = !0, pa = !1, qa = !1, xa = !1, ya = !0, za = null, ra = !1, sa = !1
      }

      function b(a, b) {
        oa = a, na = b, ja.initialize(), ha = (0, B.default)(T).getInstance(), Y = (0, k.default)(T).getInstance(), Y.setConfig({
          log: U,
          manifestModel: $,
          dashManifestModel: _
        }), Y.initialize(Z), ua = (0, s.default)(T).getInstance(), va = (0, g.default)(T).getInstance(), va.setConfig({
          streamController: W,
          timelineConverter: ja,
          metricsModel: ba,
          dashMetrics: ca,
          manifestModel: $,
          dashManifestModel: _,
          adapter: aa,
          videoModel: ua
        }), V.on(o.default.TIME_SYNCHRONIZATION_COMPLETED, D, this), V.on(o.default.PLAYBACK_SEEKING, d, this), V.on(o.default.PLAYBACK_TIME_UPDATED, c, this), V.on(o.default.PLAYBACK_ENDED, p, this), V.on(o.default.PLAYBACK_ERROR, J, this), V.on(o.default.PLAYBACK_STARTED, e, this), V.on(o.default.PLAYBACK_PAUSED, f, this), V.on(o.default.MANIFEST_UPDATED, E, this), V.on(o.default.STREAM_BUFFERING_COMPLETED, h, this)
      }

      function c(a) {
        if (F()) {
          var b = ua.getPlaybackQuality();
          b && ba.addDroppedFrames("video", b)
        }
        va.isSeeking() || a.timeToEnd <= S && p()
      }

      function d(a) {
        var b = j(a.seekTime);
        b && b !== la ? (H(x.PlayListTrace.END_OF_PERIOD_STOP_REASON), t(la, b, a.seekTime)) : H(x.PlayListTrace.USER_REQUEST_STOP_REASON), I(x.PlayList.SEEK_START_REASON)
      }

      function e() {
        ya ? (ya = !1, I(x.PlayList.INITIAL_PLAYOUT_START_REASON)) : xa && (xa = !1, I(x.PlayList.RESUME_FROM_PAUSE_START_REASON))
      }

      function f(a) {
        a.ended || (xa = !0, H(x.PlayListTrace.USER_REQUEST_STOP_REASON))
      }

      function h() {
        var a = L().isLast;
        ta && a && ea.signalEndOfStream(ta)
      }

      function j(a) {
        var b = 0,
          c = null,
          d = ka.length;
        d > 0 && (b += ka[0].getStartTime());
        for (var e = 0; e < d; e++)
          if (c = ka[e], b += c.getDuration(), a < b) return c;
        return null
      }

      function l(a, b) {
        for (var c = null, d = 0, e = 0, f = null, g = ka.length, h = 0; h < g; h++) {
          if (c = ka[h], e = c.getStartTime(), f = c.getDuration(), Number.isFinite(e) && (d = e), c.getId() === b) return a - d;
          Number.isFinite(f) && (d += f)
        }
        return null
      }

      function n() {
        var a = [];
        return la.getProcessors().forEach(function(b) {
          a.push(b.getIndexHandler().getEarliestTime())
        }), Math.min.apply(Math, a)
      }

      function p() {
        var a = r();
        a && t(la, a, NaN), H(a ? x.PlayListTrace.END_OF_PERIOD_STOP_REASON : x.PlayListTrace.END_OF_CONTENT_STOP_REASON)
      }

      function r() {
        if (la) {
          var a = function() {
            var a = la.getStreamInfo().start,
              b = la.getStreamInfo().duration;
            return {
              v: ka.filter(function(c) {
                return c.getStreamInfo().start === a + b
              })[0]
            }
          }();
          if ("object" == typeof a) return a.v
        }
      }

      function t(a, b, c) {
        !pa && b && a !== b && (pa = !0, V.trigger(o.default.PERIOD_SWITCH_STARTED, {
          fromStreamInfo: a ? a.getStreamInfo() : null,
          toStreamInfo: b.getStreamInfo()
        }), a && a.deactivate(), la = b, va.initialize(la.getStreamInfo()), Aa = G(), v(c))
      }

      function v(a) {
        function b() {
          U("MediaSource is open!"), window.URL.revokeObjectURL(c), ta.removeEventListener("sourceopen", b), ta.removeEventListener("webkitsourceopen", b), y(), w(a)
        }
        var c = void 0;
        ta ? ea.detachMediaSource(ua) : ta = ea.createMediaSource(), ta.addEventListener("sourceopen", b, !1), ta.addEventListener("webkitsourceopen", b, !1), c = ea.attachMediaSource(ta, ua), U("MediaSource attached to element.  Waiting on open...")
      }

      function w(a) {
        la.activate(ta), ya || (isNaN(a) ? ! function() {
          var a = va.getStreamStartTime(!0);
          la.getProcessors().forEach(function(b) {
            aa.setIndexHandlerTime(b, a)
          }), va.seek(a)
        }() : va.seek(a)), la.startEventController(), !oa && ya || va.play(), pa = !1, V.trigger(o.default.PERIOD_SWITCH_COMPLETED, {
          toStreamInfo: la.getStreamInfo()
        })
      }

      function y() {
        var a = la.getStreamInfo().manifestInfo.duration,
          b = ea.setDuration(ta, a);
        U("Duration successfully set to: " + b)
      }

      function A(a) {
        for (var b = 0, c = ka.length; b < c; b++)
          if (ka[b].getId() === a.id) return ka[b];
        return null
      }

      function C(a) {
        try {
          var b = aa.getStreamsInfo(a);
          if (0 === b.length) throw new Error("There are no streams");
          var c = ca.getCurrentManifestUpdate(ba.getMetricsFor("stream"));
          ba.updateManifestUpdateInfo(c, {
            currentTime: va.getTime(),
            buffered: ua.getElement().buffered,
            presentationStartTime: b[0].start,
            clientTimeOffset: ja.getClientTimeOffset()
          });
          for (var d = 0, e = b.length; d < e; d++) {
            var f = b[d],
              g = A(f);
            g ? g.updateData(f) : (g = (0, i.default)(T).create({
              manifestModel: $,
              manifestUpdater: Y,
              adapter: aa,
              timelineConverter: ja,
              capabilities: X,
              errHandler: ia,
              baseURLController: ga
            }), ka.push(g), g.initialize(f, ma)), ba.addManifestUpdateStreamInfo(c, f.id, f.index, f.start, f.duration)
          }
          la || t(null, ka[0], NaN), V.trigger(o.default.STREAMS_COMPOSED)
        } catch (h) {
          ia.manifestError(h.message, "nostreamscomposed", a), sa = !0, R()
        }
      }

      function D() {
        var a = $.getValue();
        ma && (V.trigger(o.default.PROTECTION_CREATED, {
          controller: ma,
          manifest: a
        }), ma.setMediaElement(ua.getElement()), na && ma.setProtectionData(na)), C(a)
      }

      function E(a) {
        if (a.error) sa = !0, R();
        else {
          var b, c, d = a.manifest,
            e = aa.getStreamsInfo(d)[0],
            f = aa.getMediaInfoForType(d, e, "video") || aa.getMediaInfoForType(d, e, "audio");
          f && (b = aa.getDataForMedia(f), c = _.getRepresentationsForAdaptation(d, b)[0].useCalculatedLiveEdgeTime, c && (U("SegmentTimeline detected using calculated Live Edge Time"), wa.setUseManifestDateHeaderTimeSource(!1)));
          var g = _.getUTCTimingSources(a.manifest),
            h = !_.getIsDynamic(d) || c ? g : g.concat(wa.getUTCTimingSources()),
            i = (0, q.default)(T).getInstance().isManifestHTTPS();
          h.forEach(function(a) {
            a.value.replace(/.*?:\/\//g, "") === u.default.DEFAULT_UTC_TIMING_SOURCE.value.replace(/.*?:\/\//g, "") && (a.value = a.value.replace(i ? new RegExp(/^(https:)?\/\//i) : new RegExp(/^(https:)?\/\//i), i ? "https://" : "https://"), U("Matching default timing source protocol to manifest protocol: ", a.value))
          }), ga.initialize(d), fa.setConfig({
            metricsModel: ba,
            dashMetrics: ca
          }), fa.initialize(h, wa.getUseManifestDateHeaderTimeSource())
        }
      }

      function F() {
        return void 0 === Aa && (Aa = G()), Aa
      }

      function G() {
        var a = !1;
        return la.getProcessors().forEach(function(b) {
          "video" === b.getMediaInfo().type && (a = !0)
        }), a
      }

      function H(a, b) {
        b = b || new Date, za && (la && la.getProcessors().forEach(function(c) {
          var d = c.getScheduleController();
          d && d.finalisePlayList(b, a)
        }), ba.addPlayList(za), za = null)
      }

      function I(a) {
        za = new x.PlayList, za.start = new Date, za.mstart = 1e3 * va.getTime(), za.starttype = a, la && la.getProcessors().forEach(function(a) {
          var b = a.getScheduleController();
          b && b.setPlayList(za)
        })
      }

      function J(a) {
        if (a.error) {
          var b = "";
          switch (a.error.code) {
            case 1:
              b = "MEDIA_ERR_ABORTED";
              break;
            case 2:
              b = "MEDIA_ERR_NETWORK";
              break;
            case 3:
              b = "MEDIA_ERR_DECODE";
              break;
            case 4:
              b = "MEDIA_ERR_SRC_NOT_SUPPORTED";
              break;
            case 5:
              b = "MEDIA_ERR_ENCRYPTED";
              break;
            default:
              b = "UNKNOWN"
          }
          ra = !0, a.error.message && (b += " (" + a.error.message + ")"), a.error.msExtendedCode && (b += " (0x" + (a.error.msExtendedCode >>> 0).toString(16).toUpperCase() + ")"), U("Video Element Error: " + b), a.error && U(a.error), ia.mediaSourceError(b), R()
        }
      }

      function K() {
        return oa
      }

      function L() {
        return la ? la.getStreamInfo() : null
      }

      function M(a) {
        return la.getId() === a.id
      }

      function N(a) {
        return ka.filter(function(b) {
          return b.getId() === a
        })[0]
      }

      function O(a) {
        Z.load(a)
      }

      function P(a) {
        Y.setManifest(a)
      }

      function Q(a) {
        a && (a.capabilities && (X = a.capabilities), a.manifestLoader && (Z = a.manifestLoader), a.manifestModel && ($ = a.manifestModel), a.dashManifestModel && (_ = a.dashManifestModel), a.protectionController && (ma = a.protectionController), a.adapter && (aa = a.adapter), a.metricsModel && (ba = a.metricsModel), a.dashMetrics && (ca = a.dashMetrics), a.liveEdgeFinder && (da = a.liveEdgeFinder), a.mediaSourceController && (ea = a.mediaSourceController), a.timeSyncController && (fa = a.timeSyncController), a.baseURLController && (ga = a.baseURLController), a.errHandler && (ia = a.errHandler), a.timelineConverter && (ja = a.timelineConverter))
      }

      function R() {
        fa.reset(), H(ra || sa ? x.PlayListTrace.FAILURE_STOP_REASON : x.PlayListTrace.USER_REQUEST_STOP_REASON);
        for (var a = 0, b = ka.length; a < b; a++) {
          var g = ka[a];
          g.reset(ra)
        }
        ka = [], V.off(o.default.PLAYBACK_TIME_UPDATED, c, this), V.off(o.default.PLAYBACK_SEEKING, d, this), V.off(o.default.PLAYBACK_ERROR, J, this), V.off(o.default.PLAYBACK_STARTED, e, this), V.off(o.default.PLAYBACK_PAUSED, f, this), V.off(o.default.PLAYBACK_ENDED, p, this), V.off(o.default.MANIFEST_UPDATED, E, this), V.off(o.default.STREAM_BUFFERING_COMPLETED, h, this), ga.reset(), Y.reset(), ba.clearAllCurrentMetrics(), $.setValue(null), Z.reset(), ja.reset(), da.reset(), aa.reset(), ha.reset(), pa = !1, qa = !1, la = null, ra = !1, sa = !1, Aa = void 0, ya = !0, xa = !1, ta && (ea.detachMediaSource(ua), ta = null), ua = null, ma && (ma.setMediaElement(null), ma = null, na = null, $.getValue() && V.trigger(o.default.PROTECTION_DESTROYED, {
          data: $.getValue().url
        })), V.trigger(o.default.STREAM_TEARDOWN_COMPLETE)
      }
      var S = .1,
        T = this.context,
        U = (0, z.default)(T).getInstance().log,
        V = (0, m.default)(T).getInstance(),
        W = void 0,
        X = void 0,
        Y = void 0,
        Z = void 0,
        $ = void 0,
        _ = void 0,
        aa = void 0,
        ba = void 0,
        ca = void 0,
        da = void 0,
        ea = void 0,
        fa = void 0,
        ga = void 0,
        ha = void 0,
        ia = void 0,
        ja = void 0,
        ka = void 0,
        la = void 0,
        ma = void 0,
        na = void 0,
        oa = void 0,
        pa = void 0,
        qa = void 0,
        ra = void 0,
        sa = void 0,
        ta = void 0,
        ua = void 0,
        va = void 0,
        wa = void 0,
        xa = void 0,
        ya = void 0,
        za = void 0,
        Aa = void 0;
      return W = {
        initialize: b,
        getAutoPlay: K,
        getActiveStreamInfo: L,
        isStreamActive: M,
        isVideoTrackPresent: F,
        getStreamById: N,
        getTimeRelativeToStreamId: l,
        load: O,
        loadWithManifest: P,
        getActiveStreamCommonEarliestTime: n,
        setConfig: Q,
        reset: R
      }, a(), W
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(69),
      g = d(f),
      h = a(55),
      i = d(h),
      j = a(51),
      k = d(j),
      l = a(9),
      m = d(l),
      n = a(13),
      o = d(n),
      p = a(104),
      q = d(p),
      r = a(105),
      s = d(r),
      t = a(102),
      u = d(t),
      v = a(10),
      w = d(v),
      x = a(182),
      y = a(8),
      z = d(y),
      A = a(153),
      B = d(A);
    e.__dashjs_factory_name = "StreamController", c.default = w.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    102: 102,
    104: 104,
    105: 105,
    13: 13,
    153: 153,
    182: 182,
    51: 51,
    55: 55,
    69: 69,
    8: 8,
    9: 9
  }],
  73: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b() {
        u = !1, v = null, w = null, x = null, y = null, z = null, t = !1, p.on(i.default.DATA_UPDATE_COMPLETED, l, this), p.on(i.default.INIT_FRAGMENT_LOADED, m, this)
      }

      function c(a, b, c) {
        x = a, h(b), y = c, z = y.getRepresentationController()
      }

      function d(a) {
        try {
          w = q.createSourceBuffer(v, a), u || (w.hasOwnProperty("initialize") && w.initialize(x, this), u = !0)
        } catch (b) {
          r.mediaSourceError("Error creating " + x + " source buffer.")
        }
        return w
      }

      function e() {
        return w
      }

      function f(a) {
        w = a
      }

      function h(a) {
        v = a
      }

      function j() {
        return y
      }

      function k(a) {
        p.off(i.default.DATA_UPDATE_COMPLETED, l, this), p.off(i.default.INIT_FRAGMENT_LOADED, m, this), a || (q.abort(v, w), q.removeSourceBuffer(v, w))
      }

      function l(a) {
        a.sender.getStreamProcessor() === y && p.trigger(i.default.TIMED_TEXT_REQUESTED, {
          index: 0,
          sender: a.sender
        })
      }

      function m(a) {
        a.fragmentModel === y.getFragmentModel() && a.chunk.bytes && q.append(w, a.chunk)
      }

      function n() {
        return t
      }
      var o = this.context,
        p = (0, g.default)(o).getInstance(),
        q = a.sourceBufferController,
        r = a.errHandler,
        s = void 0,
        t = void 0,
        u = void 0,
        v = void 0,
        w = void 0,
        x = void 0,
        y = void 0,
        z = void 0;
      return s = {
        initialize: c,
        createBuffer: d,
        getBuffer: e,
        setBuffer: f,
        getStreamProcessor: j,
        getIsBufferingCompleted: n,
        setMediaSource: h,
        reset: k
      }, b(), s
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(9),
      g = d(f),
      h = a(13),
      i = d(h),
      j = a(10),
      k = d(j);
    e.__dashjs_factory_name = "TextController", c.default = k.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    13: 13,
    9: 9
  }],
  74: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a, b) {
        H = b, E = 0, F = !1, G = !1, I = {
          "urn:mpeg:dash:utc:http-head:2014": v,
          "urn:mpeg:dash:utc:http-xsdate:2014": u.bind(null, m),
          "urn:mpeg:dash:utc:http-iso:2014": u.bind(null, n),
          "urn:mpeg:dash:utc:direct:2014": t,
          "urn:mpeg:dash:utc:http-head:2012": v,
          "urn:mpeg:dash:utc:http-xsdate:2012": u.bind(null, m),
          "urn:mpeg:dash:utc:http-iso:2012": u.bind(null, n),
          "urn:mpeg:dash:utc:direct:2012": t,
          "urn:mpeg:dash:utc:http-ntp:2014": s,
          "urn:mpeg:dash:utc:ntp:2014": s,
          "urn:mpeg:dash:utc:sntp:2014": s
        }, e() || (y(a), f(!0))
      }

      function b(a) {
        a && (a.metricsModel && (J = a.metricsModel), a.dashMetrics && (K = a.dashMetrics))
      }

      function c() {
        return j()
      }

      function d(a) {
        F = a
      }

      function e() {
        return F
      }

      function f(a) {
        G = a
      }

      function h(a) {
        E = a
      }

      function j() {
        return E
      }

      function l(a) {
        var b, c, d = 60,
          e = 60,
          f = 1e3,
          g = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})(?::([0-9]*)(\.[0-9]*)?)?(?:([+\-])([0-9]{2})([0-9]{2}))?/,
          h = g.exec(a);
        return b = Date.UTC(parseInt(h[1], 10), parseInt(h[2], 10) - 1, parseInt(h[3], 10), parseInt(h[4], 10), parseInt(h[5], 10), h[6] && (parseInt(h[6], 10) || 0), h[7] && parseFloat(h[7]) * f || 0), h[9] && h[10] && (c = parseInt(h[9], 10) * e + parseInt(h[10], 10), b += ("+" === h[8] ? -1 : 1) * c * d * f), new Date(b).getTime()
      }

      function m(a) {
        var b = Date.parse(a);
        return isNaN(b) && (b = l(a)), b
      }

      function n(a) {
        return Date.parse(a)
      }

      function r(a) {
        return Date.parse(a)
      }

      function s(a, b, c) {
        c()
      }

      function t(a, b, c) {
        var d = m(a);
        return isNaN(d) ? void c() : void b(d)
      }

      function u(a, b, c, d, e) {
        var f, g, h = !1,
          i = new XMLHttpRequest,
          j = e ? "HEAD" : "GET",
          k = b.match(/\S+/g);
        b = k.shift(), f = function() {
          h || (h = !0, k.length ? u(a, k.join(" "), c, d, e) : d())
        }, g = function() {
          var b, d;
          200 === i.status && (b = e ? i.getResponseHeader("Date") : i.response, d = a(b), isNaN(d) || (c(d), h = !0))
        }, i.open(j, b), i.timeout = q || 0, i.onload = g, i.onloadend = f, i.send()
      }

      function v(a, b, c) {
        u(r, a, b, c, !0)
      }

      function w() {
        var a = J.getReadOnlyMetricsFor("stream"),
          b = K.getLatestMPDRequestHeaderValueByID(a, "Date"),
          c = null !== b ? new Date(b).getTime() : Number.NaN;
        isNaN(c) ? x(!0) : (h(c - (new Date).getTime()), x(!1, c / 1e3, E))
      }

      function x(a, b, c) {
        d(!1), C.trigger(k.default.TIME_SYNCHRONIZATION_COMPLETED, {
          time: b,
          offset: c,
          error: a ? new g.default(p) : null
        })
      }

      function y(a, b) {
        var c = b || 0,
          e = a[c],
          f = function(a, b) {
            var c = !a || !b;
            c && H ? w() : x(c, a, b)
          };
        d(!0), e ? I.hasOwnProperty(e.schemeIdUri) ? I[e.schemeIdUri](e.value, function(a) {
          var b = (new Date).getTime(),
            c = a - b;
          h(c), B("Local time:      " + new Date(b)), B("Server time:     " + new Date(a)), B("Difference (ms): " + c), f(a, c)
        }, function() {
          y(a, c + 1)
        }) : y(a, c + 1) : (h(0), f())
      }

      function z() {
        f(!1), d(!1)
      }
      var A = this.context,
        B = (0, o.default)(A).getInstance().log,
        C = (0, i.default)(A).getInstance(),
        D = void 0,
        E = void 0,
        F = void 0,
        G = void 0,
        H = void 0,
        I = void 0,
        J = void 0,
        K = void 0;
      return D = {
        initialize: a,
        getOffsetToDeviceTimeMs: c,
        setConfig: b,
        reset: z
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(163),
      g = d(f),
      h = a(9),
      i = d(h),
      j = a(13),
      k = d(j),
      l = a(10),
      m = d(l),
      n = a(8),
      o = d(n),
      p = 1,
      q = 5e3;
    e.__dashjs_factory_name = "TimeSyncController";
    var r = m.default.getSingletonFactory(e);
    r.TIME_SYNC_FAILED_ERROR_CODE = p, r.HTTP_TIMEOUT_MS = q, c.default = r, b.exports = c.default
  }, {
    10: 10,
    13: 13,
    163: 163,
    8: 8,
    9: 9
  }],
  75: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b() {
        A.on(k.default.XLINK_ELEMENT_LOADED, j, C), H = (0, g.default)(z).create({
          errHandler: a.errHandler,
          metricsModel: a.metricsModel,
          requestModifier: a.requestModifier
        })
      }

      function c(a) {
        D = a
      }

      function d(a) {
        E = a
      }

      function e(a) {
        var b;
        G = new o.default({
          escapeMode: !1,
          attributePrefix: "",
          arrayAccessForm: "property",
          emptyNodeForm: "object",
          stripWhitespaces: !1,
          enableToStringFunc: !1,
          ignoreRoot: !0,
          matchers: D
        }), F = a, b = m(F.Period_asArray, F, t, r), h(b, t, r)
      }

      function f() {
        A.off(k.default.XLINK_ELEMENT_LOADED, j, C), H && (H.reset(), H = null)
      }

      function h(a, b, c) {
        var d, e, f, g = {};
        for (g.elements = a, g.type = b, g.resolveType = c, 0 === g.elements.length && l(g), f = 0; f < g.elements.length; f++) d = g.elements[f], e = B.isHTTPURL(d.url) ? d.url : d.originalContent.BaseURL + d.url, H.load(e, d, g)
      }

      function j(a) {
        var b, c, d, e = "<response>",
          f = "</response>",
          g = "";
        b = a.element, c = a.resolveObject, b.resolvedContent && (d = b.resolvedContent.indexOf(">") + 1, g = b.resolvedContent.substr(0, d) + e + b.resolvedContent.substr(d) + f, b.resolvedContent = G.xml_str2json(g)), x(c) && l(c)
      }

      function l(a) {
        var b, c, d = [];
        if (n(a), a.resolveType === s && A.trigger(k.default.XLINK_READY, {
            manifest: F
          }), a.resolveType === r) switch (a.type) {
          case t:
            for (b = 0; b < F[t + "_asArray"].length; b++) c = F[t + "_asArray"][b], c.hasOwnProperty(u + "_asArray") && (d = d.concat(m(c[u + "_asArray"], c, u, r))), c.hasOwnProperty(v + "_asArray") && (d = d.concat(m(c[v + "_asArray"], c, v, r)));
            h(d, u, r);
            break;
          case u:
            A.trigger(k.default.XLINK_READY, {
              manifest: F
            })
        }
      }

      function m(a, b, c, d) {
        var e, f, g, h = [];
        for (f = a.length - 1; f >= 0; f--) e = a[f], e.hasOwnProperty("xlink:href") && e["xlink:href"] === w && a.splice(f, 1);
        for (f = 0; f < a.length; f++) e = a[f], e.hasOwnProperty("xlink:href") && e.hasOwnProperty("xlink:actuate") && e["xlink:actuate"] === d && (g = p(e["xlink:href"], b, c, f, d, e), h.push(g));
        return h
      }

      function n(a) {
        var b, c, d, e, f, g, h = [];
        for (e = a.elements.length - 1; e >= 0; e--) {
          if (b = a.elements[e], c = b.type + "_asArray", !b.resolvedContent || y()) delete b.originalContent["xlink:actuate"], delete b.originalContent["xlink:href"], h.push(b.originalContent);
          else if (b.resolvedContent)
            for (f = 0; f < b.resolvedContent[c].length; f++) d = b.resolvedContent[c][f], h.push(d);
          for (b.parentElement[c].splice(b.index, 1), g = 0; g < h.length; g++) b.parentElement[c].splice(b.index + g, 0, h[g]);
          h = []
        }
        a.elements.length > 0 && E.run(F)
      }

      function p(a, b, c, d, e, f) {
        return {
          url: a,
          parentElement: b,
          type: c,
          index: d,
          resolveType: e,
          originalContent: f,
          resolvedContent: null,
          resolved: !1
        }
      }

      function x(a) {
        var b, c;
        for (b = 0; b < a.elements.length; b++)
          if (c = a.elements[b], c.resolved === !1) return !1;
        return !0
      }

      function y() {
        return !1
      }
      var z = this.context,
        A = (0, i.default)(z).getInstance(),
        B = (0, q.default)(z).getInstance(),
        C = void 0,
        D = void 0,
        E = void 0,
        F = void 0,
        G = void 0,
        H = void 0;
      return C = {
        resolveManifestOnLoad: e,
        setMatchers: c,
        setIron: d,
        reset: f
      }, b(), C
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(60),
      g = d(f),
      h = a(9),
      i = d(h),
      j = a(13),
      k = d(j),
      l = a(10),
      m = d(l),
      n = a(4),
      o = d(n),
      p = a(159),
      q = d(p),
      r = "onLoad",
      s = "onActuate",
      t = "Period",
      u = "AdaptationSet",
      v = "EventStream",
      w = "urn:mpeg:dash:resolve-to-zero:2013";
    e.__dashjs_factory_name = "XlinkController", c.default = m.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    13: 13,
    159: 159,
    4: 4,
    60: 60,
    9: 9
  }],
  76: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a) {
        return f = (0, g.default)(d).getInstance({
          eventBus: a.eventBus,
          metricsModel: a.metricsModel
        }), (0, k.default)(d).create(a)
      }

      function b() {
        return (0, o.default)(d).getInstance()
      }

      function c() {
        return (0, m.default)(d).getInstance()
      }
      var d = this.context,
        e = void 0,
        f = void 0;
      return e = {
        createMetricsReporting: a,
        getReportingFactory: b,
        getMetricsHandlerFactory: c
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(90),
      g = d(f),
      h = a(77),
      i = d(h),
      j = a(78),
      k = d(j),
      l = a(83),
      m = d(l),
      n = a(88),
      o = d(n),
      p = a(10),
      q = d(p);
    e.__dashjs_factory_name = "MetricsReporting";
    var r = q.default.getClassFactory(e);
    r.events = i.default, c.default = r, b.exports = c.default
  }, {
    10: 10,
    77: 77,
    78: 78,
    83: 83,
    88: 88,
    90: 90
  }],
  77: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function f(a, b) {
      if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
      a.prototype = Object.create(b && b.prototype, {
        constructor: {
          value: a,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var g = function(a, b, c) {
        for (var d = !0; d;) {
          var e = a,
            f = b,
            g = c;
          d = !1, null === e && (e = Function.prototype);
          var h = Object.getOwnPropertyDescriptor(e, f);
          if (void 0 !== h) {
            if ("value" in h) return h.value;
            var i = h.get;
            if (void 0 === i) return;
            return i.call(g)
          }
          var j = Object.getPrototypeOf(e);
          if (null === j) return;
          a = j, b = f, c = g, d = !0, h = j = void 0
        }
      },
      h = a(14),
      i = d(h),
      j = function(a) {
        function b() {
          e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this), this.METRICS_INITIALISATION_COMPLETE = "internal_metricsReportingInitialized", this.BECAME_REPORTING_PLAYER = "internal_becameReportingPlayer"
        }
        return f(b, a), b
      }(i.default),
      k = new j;
    c.default = k, b.exports = c.default
  }, {
    14: 14
  }],
  78: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b(b) {
        if (!b.error) {
          var c = Object.keys(e),
            d = (0, i.default)(f).getInstance({
              dashManifestModel: a.dashManifestModel
            }).getMetrics(b.manifest);
          d.forEach(function(b) {
            var d = JSON.stringify(b);
            if (e.hasOwnProperty(d)) c.splice(d, 1);
            else try {
              var h = (0, g.default)(f).create(a);
              h.initialize(b), e[d] = h
            } catch (i) {}
          }), c.forEach(function(a) {
            e[a].reset(), delete e[a]
          }), h.trigger(m.default.METRICS_INITIALISATION_COMPLETE)
        }
      }

      function c() {
        Object.keys(e).forEach(function(a) {
          e[a].reset()
        }), e = {}
      }

      function d() {
        h.on(o.default.MANIFEST_UPDATED, b), h.on(o.default.STREAM_TEARDOWN_COMPLETE, c)
      }
      var e = {},
        f = this.context,
        h = a.eventBus;
      return d(), {}
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(79),
      g = d(f),
      h = a(92),
      i = d(h),
      j = a(10),
      k = d(j),
      l = a(77),
      m = d(l),
      n = a(13),
      o = d(n);
    e.__dashjs_factory_name = "MetricsCollectionController", c.default = k.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    13: 13,
    77: 77,
    79: 79,
    92: 92
  }],
  79: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b(b) {
        try {
          f = (0, i.default)(h).create({
            mediaElement: a.mediaElement
          }), f.initialize(b.Range), e = (0, k.default)(h).create({
            log: a.log
          }), e.initialize(b.Reporting, f), d = (0, m.default)(h).create({
            log: a.log,
            eventBus: a.eventBus
          }), d.initialize(b.metrics, e)
        } catch (g) {
          throw c(), g
        }
      }

      function c() {
        d && d.reset(), e && e.reset(), f && f.reset()
      }
      var d = void 0,
        e = void 0,
        f = void 0,
        g = void 0,
        h = this.context;
      return g = {
        initialize: b,
        reset: c
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f),
      h = a(81),
      i = d(h),
      j = a(82),
      k = d(j),
      l = a(80),
      m = d(l);
    e.__dashjs_factory_name = "MetricsController", c.default = g.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    80: 80,
    81: 81,
    82: 82
  }],
  80: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b(a) {
        e.forEach(function(b) {
          b.handleNewMetric(a.metric, a.value, a.mediaType)
        })
      }

      function c(a, c) {
        a.split(",").forEach(function(a, b, d) {
          var f;
          if (a.indexOf("(") !== -1 && a.indexOf(")") === -1) {
            var g = d[b + 1];
            g && g.indexOf("(") === -1 && g.indexOf(")") !== -1 && (a += "," + g, delete d[b + 1])
          }
          f = j.create(a, c), f && e.push(f)
        }), i.on(k.default.METRIC_ADDED, b, f), i.on(k.default.METRIC_UPDATED, b, f)
      }

      function d() {
        i.off(k.default.METRIC_ADDED, b, f), i.off(k.default.METRIC_UPDATED, b, f), e.forEach(function(a) {
          return a.reset()
        }), e = []
      }
      var e = [],
        f = void 0,
        h = this.context,
        i = a.eventBus,
        j = (0, g.default)(h).getInstance({
          log: a.log,
          eventBus: a.eventBus
        });
      return f = {
        initialize: c,
        reset: d
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(83),
      g = d(f),
      h = a(10),
      i = d(h),
      j = a(53),
      k = d(j);
    e.__dashjs_factory_name = "MetricsHandlersController", c.default = i.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    53: 53,
    83: 83
  }],
  81: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b(a) {
        a && a.length && (a.forEach(function(a) {
          var b = a.starttime,
            c = b + a.duration;
          j.add(b, c)
        }), f = !!a[0]._useWallClockTime)
      }

      function c() {
        j.clear()
      }

      function d() {
        j = (0, i.default)(g).create()
      }

      function e() {
        var a, b = j.length;
        if (!b) return !0;
        a = f ? (new Date).getTime() / 1e3 : k.currentTime;
        for (var c = 0; c < b; c += 1) {
          var d = j.start(c),
            e = j.end(c);
          if (d <= a && a < e) return !0
        }
        return !1
      }
      var f = !1,
        g = this.context,
        h = void 0,
        j = void 0,
        k = a.mediaElement;
      return h = {
        initialize: b,
        reset: c,
        isEnabled: e
      }, d(), h
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f),
      h = a(149),
      i = d(h);
    e.__dashjs_factory_name = "RangeController", c.default = g.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    149: 149
  }],
  82: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b(a, b) {
        a.some(function(a) {
          var c = g.create(a, b);
          if (c) return e.push(c), !0
        })
      }

      function c() {
        e.forEach(function(a) {
          return a.reset()
        }), e = []
      }

      function d(a, b) {
        e.forEach(function(c) {
          return c.report(a, b)
        })
      }
      var e = [],
        f = void 0,
        g = (0, i.default)(this.context).getInstance({
          log: a.log
        });
      return f = {
        initialize: b,
        reset: c,
        report: d
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f),
      h = a(88),
      i = d(h);
    e.__dashjs_factory_name = "ReportingController", c.default = g.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    88: 88
  }],
  83: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b(b, c) {
        var d, e = b.match(g);
        if (e) {
          try {
            d = j[e[1]](h).create({
              eventBus: a.eventBus
            }), d.initialize(e[1], c, e[3], e[5])
          } catch (i) {
            d = null, f("MetricsHandlerFactory: Could not create handler for type " + e[1] + " with args " + e[3] + ", " + e[5] + " (" + i.message + ")")
          }
          return d
        }
      }

      function c(a, b) {
        j[a] = b
      }

      function d(a) {
        delete j[a]
      }
      var e = void 0,
        f = a.log,
        g = /([a-zA-Z]*)(\(([0-9]*)(\,\s*([a-zA-Z]*))?\))?/,
        h = this.context,
        j = {
          BufferLevel: i.default,
          DVBErrors: k.default,
          HttpList: m.default,
          PlayList: o.default,
          RepSwitchList: o.default,
          TcpList: o.default
        };
      return e = {
        create: b,
        register: c,
        unregister: d
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f),
      h = a(84),
      i = d(h),
      j = a(85),
      k = d(j),
      l = a(87),
      m = d(l),
      n = a(86),
      o = d(n);
    e.__dashjs_factory_name = "MetricsHandlerFactory", c.default = g.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    84: 84,
    85: 85,
    86: 86,
    87: 87
  }],
  84: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        try {
          return Object.keys(o).map(function(a) {
            return o[a]
          }).reduce(function(a, b) {
            return a.level < b.level ? a : b
          })
        } catch (a) {
          return
        }
      }

      function b() {
        var b = a();
        b && l !== b.t && (l = b.t, g.report(j, b))
      }

      function c(a, c, d) {
        c && (h = n.validateN(d), g = c, j = n.reconstructFullMetricName(a, d), k = setInterval(b, h))
      }

      function d() {
        clearInterval(k), k = null, h = 0, g = null, l = null
      }

      function e(a, b, c) {
        "BufferLevel" === a && (o[c] = b)
      }
      var f = void 0,
        g = void 0,
        h = void 0,
        j = void 0,
        k = void 0,
        l = void 0,
        m = this.context,
        n = (0, i.default)(m).getInstance(),
        o = [];
      return f = {
        initialize: c,
        reset: d,
        handleNewMetric: e
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f),
      h = a(91),
      i = d(h);
    e.__dashjs_factory_name = "BufferLevelHandler", c.default = g.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    91: 91
  }],
  85: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b() {
        h.off(i.default.METRICS_INITIALISATION_COMPLETE, b, this), h.trigger(i.default.BECAME_REPORTING_PLAYER)
      }

      function c(a, c) {
        c && (g = c, h.on(i.default.METRICS_INITIALISATION_COMPLETE, b, this))
      }

      function d() {
        g = null
      }

      function e(a, b) {
        "DVBErrors" === a && g && g.report(a, b)
      }
      var f = void 0,
        g = void 0,
        h = a.eventBus;
      return f = {
        initialize: c,
        reset: d,
        handleNewMetric: e
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f),
      h = a(77),
      i = d(h);
    c.default = g.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    77: 77
  }],
  86: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a, b) {
        e = a, f = b
      }

      function b() {
        f = null, e = void 0
      }

      function c(a, b) {
        a === e && f && f.report(e, b)
      }
      var d = void 0,
        e = void 0,
        f = void 0;
      return d = {
        initialize: a,
        reset: b,
        handleNewMetric: c
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f);
    e.__dashjs_factory_name = "GenericMetricHandler", c.default = g.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10
  }],
  87: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        var a = l;
        a.length && f && f.report(j, a), l = []
      }

      function b(b, c, d, e) {
        c && (g = m.validateN(d), f = c, e && e.length && (h = e), j = m.reconstructFullMetricName(b, d, e), k = setInterval(a, g))
      }

      function c() {
        clearInterval(k), k = null, g = null, h = null, l = [], f = null
      }

      function d(a, b) {
        "HttpList" === a && (h && h !== b.type || l.push(b))
      }
      var e = void 0,
        f = void 0,
        g = void 0,
        h = void 0,
        j = void 0,
        k = void 0,
        l = [],
        m = (0, i.default)(this.context).getInstance();
      return e = {
        initialize: b,
        reset: c,
        handleNewMetric: d
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f),
      h = a(91),
      i = d(h);
    e.__dashjs_factory_name = "HttpListHandler", c.default = g.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    91: 91
  }],
  88: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b(a, b) {
        var c;
        try {
          c = e[a.schemeIdUri](f).create(), c.initialize(a, b)
        } catch (d) {
          c = null, g("ReportingFactory: could not create Reporting with schemeIdUri " + a.schemeIdUri + " (" + d.message + ")")
        }
        return c
      }

      function c(a, b) {
        e[a] = b
      }

      function d(a) {
        delete e[a]
      }
      var e = {
          "urn:dvb:dash:reporting:2014": i.default
        },
        f = this.context,
        g = a.log,
        h = void 0;
      return h = {
        create: b,
        register: c,
        unregister: d
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f),
      h = a(89),
      i = d(h);
    e.__dashjs_factory_name = "ReportingFactory", c.default = g.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    89: 89
  }],
  89: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a, b, c) {
        var d = new XMLHttpRequest,
          e = function() {
            var a = q.indexOf(d);
            a !== -1 && (q.splice(a, 1), d.status >= 200 && d.status < 300 ? b && b() : c && c())
          };
        q.push(d);
        try {
          d.open("GET", a), d.onloadend = e, d.onerror = e, d.send()
        } catch (f) {
          d.onerror()
        }
      }

      function b(b, c) {
        Array.isArray(c) || (c = [c]), l && o.isEnabled() && c.forEach(function(c) {
          var d = g.serialise(c);
          j && "DVBErrors" !== b && (d = "metricname=" + b + "&" + d), d = n + "?" + d, a(d, null, function() {
            l = !1
          })
        })
      }

      function c(a, b) {
        var c;
        if (o = b, n = a["dvb:reportingUrl"], !n) throw new Error("required parameter missing (dvb:reportingUrl)");
        m || (c = a["dvb:probability"] || a["dvb:priority"] || 0, c && (1e3 === c || c / 1e3 >= h.random()) && (l = !0), m = !0)
      }

      function d() {
        p || (q.forEach(function(a) {
          return a.abort()
        }), q = []), m = !1, l = !1, n = null, o = null
      }
      var e = void 0,
        f = this.context,
        g = (0, i.default)(f).getInstance(),
        h = (0, k.default)(f).getInstance(),
        j = !0,
        l = !1,
        m = !1,
        n = null,
        o = null,
        p = !0,
        q = [];
      return e = {
        report: b,
        initialize: c,
        reset: d
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f),
      h = a(93),
      i = d(h),
      j = a(94),
      k = d(j);
    e.__dashjs_factory_name = "DVBReporting", c.default = g.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    93: 93,
    94: 94
  }],
  90: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b(a) {
        var b = new g.default;
        if (r) {
          for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
          b.mpdurl || (b.mpdurl = r.originalUrl || r.url), b.terror || (b.terror = new Date), q.addDVBErrors(b)
        }
      }

      function c(a) {
        a.error || (r = a.manifest)
      }

      function d(a) {
        b({
          errorcode: g.default.BASE_URL_CHANGED,
          servicelocation: a.entry
        })
      }

      function e() {
        b({
          errorcode: g.default.BECAME_REPORTER
        })
      }

      function f(a) {
        (0 === a.responsecode || a.responsecode >= 400 || a.responsecode < 100 || a.responsecode >= 600) && b({
          errorcode: a.responsecode || g.default.CONNECTION_ERROR,
          url: a.url,
          terror: a.tresponse,
          servicelocation: a._serviceLocation
        })
      }

      function h(a) {
        switch (a.metric) {
          case "HttpList":
            f(a.value)
        }
      }

      function j(a) {
        var c, d = a.error ? a.error.code : 0;
        switch (d) {
          case MediaError.MEDIA_ERR_NETWORK:
            c = g.default.CONNECTION_ERROR;
            break;
          case MediaError.MEDIA_ERR_DECODE:
            c = g.default.CORRUPT_MEDIA_OTHER;
            break;
          default:
            return
        }
        b({
          errorcode: c
        })
      }

      function l() {
        p.on(i.default.MANIFEST_UPDATED, c, o), p.on(i.default.SERVICE_LOCATION_BLACKLIST_CHANGED, d, o), p.on(k.default.METRIC_ADDED, h, o), p.on(k.default.METRIC_UPDATED, h, o), p.on(k.default.PLAYBACK_ERROR, j, o), p.on(m.default.BECAME_REPORTING_PLAYER, e, o)
      }

      function n() {
        p.off(i.default.MANIFEST_UPDATED, c, o), p.off(i.default.SERVICE_LOCATION_BLACKLIST_CHANGED, d, o), p.off(k.default.METRIC_ADDED, h, o), p.off(k.default.METRIC_UPDATED, h, o), p.off(k.default.PLAYBACK_ERROR, j, o), p.off(m.default.BECAME_REPORTING_PLAYER, e, o)
      }
      var o = void 0,
        p = a.eventBus,
        q = a.metricsModel,
        r = void 0;
      return o = {
        initialise: l,
        reset: n
      }, l(), o
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(95),
      g = d(f),
      h = a(13),
      i = d(h),
      j = a(53),
      k = d(j),
      l = a(77),
      m = d(l),
      n = a(10),
      o = d(n);
    e.__dashjs_factory_name = "DVBErrorsTranslator", c.default = o.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    13: 13,
    53: 53,
    77: 77,
    95: 95
  }],
  91: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      return {
        reconstructFullMetricName: function(a, b, c) {
          var d = a;
          return b && (d += "(" + b, c && c.length && (d += "," + c), d += ")"), d
        },
        validateN: function(a) {
          if (!a) throw new Error("missing n");
          if (isNaN(a)) throw new Error("n is NaN");
          if (a < 0) throw new Error("n must be positive");
          return a
        }
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f);
    e.__dashjs_factory_name = "HandlerHelpers", c.default = g.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10
  }],
  92: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b(a, b, c) {
        var d, f, g = e.getMpd(a),
          h = 0;
        return b ? h = g.availabilityStartTime.getTime() / 1e3 : (d = this.getRegularPeriods(a, g), d.length && (h = d[0].start)), f = h, c && c.hasOwnProperty("starttime") && (f += c.starttime), f
      }

      function c(a) {
        var c = [];
        return a.Metrics_asArray && a.Metrics_asArray.forEach(function(d) {
          var f = new g.default,
            h = e.getIsDynamic(a);
          d.hasOwnProperty("metrics") && (f.metrics = d.metrics, d.Range_asArray && d.Range_asArray.forEach(function(c) {
            var d = new i.default;
            d.starttime = b(a, h, c), c.hasOwnProperty("duration") ? d.duration = c.duration : d.duration = e.getDuration(a), d._useWallClockTime = h, f.Range.push(d)
          }), d.Reporting_asArray && (d.Reporting_asArray.forEach(function(a) {
            var b = new k.default;
            if (a.hasOwnProperty("schemeIdUri")) {
              b.schemeIdUri = a.schemeIdUri;
              for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
              f.Reporting.push(b)
            }
          }), c.push(f)))
        }), c
      }
      var d = void 0,
        e = a.dashManifestModel;
      return d = {
        getMetrics: c
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(96),
      g = d(f),
      h = a(97),
      i = d(h),
      j = a(98),
      k = d(j),
      l = a(10),
      m = d(l);
    e.__dashjs_factory_name = "ManifestParsing", c.default = m.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    96: 96,
    97: 97,
    98: 98
  }],
  93: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(b) {
        var c, d, e = [],
          f = [];
        for (c in b)
          if (b.hasOwnProperty(c) && 0 !== c.indexOf("_")) {
            if (d = b[c], void 0 !== d && null !== d || (d = ""), Array.isArray(d)) {
              if (!d.length) continue;
              f = [], d.forEach(function(b) {
                var c = "Object" !== Object.prototype.toString.call(b).slice(8, -1);
                f.push(c ? b : a(b))
              }), d = f.map(encodeURIComponent).join(",")
            } else "string" == typeof d ? d = encodeURIComponent(d) : d instanceof Date ? d = d.toISOString() : "number" == typeof d && (d = Math.round(d));
            e.push(c + "=" + d)
          }
        return e.join("&")
      }
      return {
        serialise: a
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f);
    e.__dashjs_factory_name = "MetricSerialiser", c.default = g.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10
  }],
  94: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        c && (g || (g = new d(f)), c.getRandomValues(g), h = 0)
      }

      function b(b, d) {
        var f;
        return b || (b = 0), d || (d = 1), c ? (h === g.length && a(), f = g[h] / e, h += 1) : f = Math.random(), f * (d - b) + b
      }
      var c = window.crypto || window.msCrypto,
        d = Uint32Array,
        e = Math.pow(2, 8 * d.BYTES_PER_ELEMENT) - 1,
        f = 10,
        g = void 0,
        h = void 0,
        i = void 0;
      return i = {
        random: b
      }, a(), i
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f);
    e.__dashjs_factory_name = "RNG", c.default = g.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10
  }],
  95: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.mpdurl = null, this.errorcode = null, this.terror = null, this.url = null, this.ipaddress = null, this.servicelocation = null
    };
    e.SSL_CONNECTION_FAILED_PREFIX = "SSL", e.DNS_RESOLUTION_FAILED = "C00", e.HOST_UNREACHABLE = "C01", e.CONNECTION_REFUSED = "C02", e.CONNECTION_ERROR = "C03", e.CORRUPT_MEDIA_ISOBMFF = "M00", e.CORRUPT_MEDIA_OTHER = "M01", e.BASE_URL_CHANGED = "F00", e.BECAME_REPORTER = "S00", c.default = e, b.exports = c.default
  }, {}],
  96: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.metrics = "", this.Range = [], this.Reporting = []
    };
    c.default = e, b.exports = c.default
  }, {}],
  97: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.starttime = 0, this.duration = 1 / 0, this._useWallClockTime = !1
    };
    c.default = e, b.exports = c.default
  }, {}],
  98: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.schemeIdUri = "", this.value = ""
    };
    c.default = e, b.exports = c.default
  }, {}],
  99: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function f() {
      function a() {
        l = new n
      }

      function b(a, b, c) {
        var d = p.getBaseURLsFromElement(c);
        a[b] ? q.areSimpleEquivalent(d, a[b].data.baseUrls) || (a[b].data.baseUrls = d, a[b].data.selectedIdx = m) : a[b] = new n(d)
      }

      function c(a) {
        var c = p.getBaseURLsFromElement(a);
        q.areSimpleEquivalent(c, l.data.baseUrls) || (l.data.baseUrls = c, l.data.selectedIdx = m), a.Period_asArray && a.Period_asArray.forEach(function(a, c) {
          b(l.children, c, a), a.AdaptationSet_asArray && a.AdaptationSet_asArray.forEach(function(a, d) {
            b(l.children[c].children, d, a), a.Representation_asArray && a.Representation_asArray.sort(p.getRepresentationSortFunction()).forEach(function(a, e) {
              b(l.children[c].children[d].children, e, a)
            })
          })
        })
      }

      function d(a, b) {
        var c = b || l;
        a(c.data), c.children && c.children.forEach(function(b) {
          return d(a, b)
        })
      }

      function e(a) {
        d(function(b) {
          isNaN(b.selectedIdx) || a === b.baseUrls[b.selectedIdx].serviceLocation && (b.selectedIdx = m)
        })
      }

      function f(a) {
        c(a)
      }

      function g() {
        l = new n
      }

      function i(a) {
        var b = l,
          c = [b.data];
        return a.forEach(function(a) {
          b = b.children[a], b && c.push(b.data)
        }), c.filter(function(a) {
          return a.baseUrls.length
        })
      }
      var k = void 0,
        l = void 0,
        o = this.context,
        p = (0, h.default)(o).getInstance(),
        q = (0, j.default)(o).getInstance();
      return k = {
        reset: g,
        update: f,
        getForPath: i,
        invalidateSelectedIndexes: e
      }, a(), k
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var g = a(22),
      h = d(g),
      i = a(156),
      j = d(i),
      k = a(10),
      l = d(k),
      m = NaN,
      n = function a(b, c) {
        e(this, a), this.data = {
          baseUrls: b || null,
          selectedIdx: c || m
        }, this.children = []
      };
    f.__dashjs_factory_name = "BaseURLTreeModel", c.default = l.default.getClassFactory(f), b.exports = c.default
  }, {
    10: 10,
    156: 156,
    22: 22
  }],
  100: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b() {
        D = null, G = null, E = [], F = [], A.on(i.default.LOADING_COMPLETED, w, C)
      }

      function c(a) {
        G = a
      }

      function d(a) {
        D = a
      }

      function e() {
        return D
      }

      function f(a) {
        var b = function(a, b) {
            return a.action === m.default.ACTION_COMPLETE && a.action === b.action
          },
          c = function(a, b) {
            return !isNaN(a.index) && a.startTime === b.startTime && a.adaptationIndex === b.adaptationIndex
          },
          d = function(a, b) {
            return isNaN(a.index) && isNaN(b.index) && a.quality === b.quality
          },
          e = function(e) {
            var f = !1;
            return e.some(function(e) {
              if (c(a, e) || d(a, e) || b(a, e)) return f = !0
            }), f
          };
        return e(E)
      }

      function h(a) {
        var b = a.state instanceof Array ? a.state : [a.state],
          c = [];
        return b.forEach(function(b) {
          var d = u(b);
          c = c.concat(t(d, a))
        }), c
      }

      function j(a) {
        E = E.filter(function(b) {
          return isNaN(b.startTime) || b.startTime >= a
        })
      }

      function k() {
        G.abort(), F = []
      }

      function l(a) {
        switch (a.action) {
          case m.default.ACTION_COMPLETE:
            E.push(a), v(a, q), A.trigger(i.default.STREAM_COMPLETED, {
              request: a,
              fragmentModel: this
            });
            break;
          case m.default.ACTION_DOWNLOAD:
            v(a, p), F.push(a), n(a);
            break;
          default:
            z("Unknown request action.")
        }
      }

      function n(a) {
        A.trigger(i.default.FRAGMENT_LOADING_STARTED, {
          sender: C,
          request: a
        }), G.load(a)
      }

      function r(a, b, c) {
        for (var d = a.length - 1, e = d; e >= 0; e--) {
          var f = a[e],
            g = f.startTime,
            h = g + f.duration;
          if (c = void 0 !== c ? c : f.duration / 2, !isNaN(g) && !isNaN(h) && b + c >= g && b - c < h || isNaN(g) && isNaN(b)) return f
        }
        return null
      }

      function t(a, b) {
        return b.hasOwnProperty("time") ? [r(a, b.time, b.threshold)] : a.filter(function(a) {
          for (var c in b)
            if ("state" !== c && b.hasOwnProperty(c) && a[c] != b[c]) return !1;
          return !0
        })
      }

      function u(a) {
        var b = void 0;
        switch (a) {
          case p:
            b = F;
            break;
          case q:
            b = E;
            break;
          default:
            b = []
        }
        return b
      }

      function v(a, b) {
        B.addSchedulingInfo(a.mediaType, new Date, a.type, a.startTime, a.availabilityStartTime, a.duration, a.quality, a.range, b), B.addRequestsQueue(a.mediaType, F, E)
      }

      function w(a) {
        a.sender === G && (F.splice(F.indexOf(a.request), 1), a.response && !a.error && E.push(a.request), v(a.request, a.error ? s : q), A.trigger(i.default.FRAGMENT_LOADING_COMPLETED, {
          request: a.request,
          response: a.response,
          error: a.error,
          sender: this
        }))
      }

      function x() {
        A.off(i.default.LOADING_COMPLETED, w, this), G && (G.reset(), G = null), E = [], F = []
      }
      var y = this.context,
        z = (0, o.default)(y).getInstance().log,
        A = (0, g.default)(y).getInstance(),
        B = a.metricsModel,
        C = void 0,
        D = void 0,
        E = void 0,
        F = void 0,
        G = void 0;
      return C = {
        setLoader: c,
        setScheduleController: d,
        getScheduleController: e,
        getRequests: h,
        isFragmentLoaded: f,
        removeExecutedRequestsBeforeTime: j,
        abortRequests: k,
        executeRequest: l,
        reset: x
      }, b(), C
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(9),
      g = d(f),
      h = a(13),
      i = d(h),
      j = a(10),
      k = d(j),
      l = a(164),
      m = d(l),
      n = a(8),
      o = d(n),
      p = "loading",
      q = "executed",
      r = "canceled",
      s = "failed";
    e.__dashjs_factory_name = "FragmentModel";
    var t = k.default.getClassFactory(e);
    t.FRAGMENT_MODEL_LOADING = p, t.FRAGMENT_MODEL_EXECUTED = q, t.FRAGMENT_MODEL_CANCELED = r, t.FRAGMENT_MODEL_FAILED = s, c.default = t, b.exports = c.default
  }, {
    10: 10,
    13: 13,
    164: 164,
    8: 8,
    9: 9
  }],
  101: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        return f
      }

      function b(a) {
        f = a, a && d.trigger(i.default.MANIFEST_LOADED, {
          data: a
        })
      }
      var c = this.context,
        d = (0, g.default)(c).getInstance(),
        e = void 0,
        f = void 0;
      return e = {
        getValue: a,
        setValue: b
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(9),
      g = d(f),
      h = a(13),
      i = d(h),
      j = a(10),
      k = d(j);
    e.__dashjs_factory_name = "ManifestModel", c.default = k.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    13: 13,
    9: 9
  }],
  102: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a, b, c) {
      return b in a ? Object.defineProperty(a, b, {
        value: c,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : a[b] = c, a
    }

    function f() {
      function a() {
        var a, b;
        ya = [], xa = !1, wa = !0, Ba = !0, Qa = !1, Sa = !1, Ea = {
          enabled: !0,
          ttl: l
        }, Fa = {
          enabled: !0,
          ttl: m
        }, za = k, Aa = void 0, Ca = p, Da = q, Ga = NaN, Ha = t, Ia = u, Ja = v, Ka = w, La = n, Ma = o, Pa = D, Ra = {
          default: E
        }, a = {}, e(a, i.HTTPRequest.MPD_TYPE, z), e(a, i.HTTPRequest.XLINK_EXPANSION_TYPE, B), e(a, i.HTTPRequest.MEDIA_SEGMENT_TYPE, x), e(a, i.HTTPRequest.INIT_SEGMENT_TYPE, x), e(a, i.HTTPRequest.BITSTREAM_SWITCHING_SEGMENT_TYPE, x), e(a, i.HTTPRequest.INDEX_SEGMENT_TYPE, x), e(a, i.HTTPRequest.OTHER_TYPE, x), Na = a, b = {}, e(b, i.HTTPRequest.MPD_TYPE, A), e(b, i.HTTPRequest.XLINK_EXPANSION_TYPE, C), e(b, i.HTTPRequest.MEDIA_SEGMENT_TYPE, y), e(b, i.HTTPRequest.INIT_SEGMENT_TYPE, y), e(b, i.HTTPRequest.BITSTREAM_SWITCHING_SEGMENT_TYPE, y), e(b, i.HTTPRequest.INDEX_SEGMENT_TYPE, y), e(b, i.HTTPRequest.OTHER_TYPE, y), Oa = b
      }

      function b(a) {
        Qa = a
      }

      function c() {
        return Qa
      }

      function d(a) {
        La = a
      }

      function f() {
        return La
      }

      function g(a) {
        Ma = a
      }

      function h() {
        return Ma
      }

      function j(a) {
        Ga = a
      }

      function F() {
        return isNaN(Ga) ? Sa ? s : r : Ga
      }

      function G(a) {
        Ha = a
      }

      function H() {
        return Ha
      }

      function I(a) {
        Ia = a
      }

      function J() {
        return Ia
      }

      function K(a) {
        Ja = a
      }

      function L() {
        return Ja
      }

      function M(a) {
        Ka = a
      }

      function N() {
        return Ka
      }

      function O(a) {
        Ca = a
      }

      function P() {
        return Ca
      }

      function Q(a, b) {
        Ea.enabled = a, void 0 === b || isNaN(b) || "number" != typeof b || (Ea.ttl = b)
      }

      function R() {
        return Ea
      }

      function S(a, b) {
        Fa.enabled = a, void 0 === b || isNaN(b) || "number" != typeof b || (Fa.ttl = b)
      }

      function T() {
        return Fa
      }

      function U(a) {
        Da = a
      }

      function V() {
        return Da
      }

      function W(a) {
        Na[i.HTTPRequest.MEDIA_SEGMENT_TYPE] = a
      }

      function X(a, b) {
        Na[a] = b
      }

      function Y() {
        return Na[i.HTTPRequest.MEDIA_SEGMENT_TYPE]
      }

      function Z(a) {
        return Na[a]
      }

      function $(a) {
        Oa[i.HTTPRequest.MEDIA_SEGMENT_TYPE] = a
      }

      function _(a, b) {
        Oa[a] = b
      }

      function aa() {
        return Oa[i.HTTPRequest.MEDIA_SEGMENT_TYPE]
      }

      function ba(a) {
        return Oa[a]
      }

      function ca(a) {
        Pa = a
      }

      function da() {
        return Pa
      }

      function ea(a) {
        Ba = a
      }

      function fa() {
        return Ba
      }

      function ga(a) {
        za = a
      }

      function ha(a) {
        Aa = a
      }

      function ia() {
        return za
      }

      function ja() {
        return Aa
      }

      function ka(a) {
        wa = a
      }

      function la() {
        return wa
      }

      function ma(a) {
        xa = a
      }

      function na() {
        return xa
      }

      function oa(a) {
        ya = a
      }

      function pa() {
        return ya
      }

      function qa(a, b) {
        a ? Ra[a] = !!b : Object.keys(Ra).forEach(function(a) {
          qa(a, b)
        })
      }

      function ra(a) {
        var b = Ra[a];
        return void 0 === b ? Ra.default : b
      }

      function sa() {
        return Sa
      }

      function ta(a) {
        Sa = a
      }

      function ua() {}
      var va = void 0,
        wa = void 0,
        xa = void 0,
        ya = void 0,
        za = void 0,
        Aa = void 0,
        Ba = void 0,
        Ca = void 0,
        Da = void 0,
        Ea = void 0,
        Fa = void 0,
        Ga = void 0,
        Ha = void 0,
        Ia = void 0,
        Ja = void 0,
        Ka = void 0,
        La = void 0,
        Ma = void 0,
        Na = void 0,
        Oa = void 0,
        Pa = void 0,
        Qa = void 0,
        Ra = void 0,
        Sa = void 0;
      return va = {
        setBufferOccupancyABREnabled: b,
        getBufferOccupancyABREnabled: c,
        setBandwidthSafetyFactor: d,
        getBandwidthSafetyFactor: f,
        setAbandonLoadTimeout: g,
        getAbandonLoadTimeout: h,
        setLastBitrateCachingInfo: Q,
        getLastBitrateCachingInfo: R,
        setLastMediaSettingsCachingInfo: S,
        getLastMediaSettingsCachingInfo: T,
        setStableBufferTime: j,
        getStableBufferTime: F,
        setBufferTimeAtTopQuality: G,
        getBufferTimeAtTopQuality: H,
        setBufferTimeAtTopQualityLongForm: I,
        getBufferTimeAtTopQualityLongForm: J,
        setLongFormContentDurationThreshold: K,
        getLongFormContentDurationThreshold: L,
        setRichBufferThreshold: M,
        getRichBufferThreshold: N,
        setBufferToKeep: O,
        getBufferToKeep: P,
        setBufferPruningInterval: U,
        getBufferPruningInterval: V,
        setFragmentRetryAttempts: W,
        getFragmentRetryAttempts: Y,
        setRetryAttemptsForType: X,
        getRetryAttemptsForType: Z,
        setFragmentRetryInterval: $,
        getFragmentRetryInterval: aa,
        setRetryIntervalForType: _,
        getRetryIntervalForType: ba,
        setWallclockTimeUpdateInterval: ca,
        getWallclockTimeUpdateInterval: da,
        setScheduleWhilePaused: ea,
        getScheduleWhilePaused: fa,
        getUseSuggestedPresentationDelay: na,
        setUseSuggestedPresentationDelay: ma,
        setLiveDelayFragmentCount: ga,
        getLiveDelayFragmentCount: ia,
        getLiveDelay: ja,
        setLiveDelay: ha,
        setUseManifestDateHeaderTimeSource: ka,
        getUseManifestDateHeaderTimeSource: la,
        setUTCTimingSources: oa,
        getUTCTimingSources: pa,
        setXHRWithCredentialsForType: qa,
        getXHRWithCredentialsForType: ra,
        setFastSwitchEnabled: ta,
        getFastSwitchEnabled: sa,
        reset: ua
      }, a(), va
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var g = a(10),
      h = d(g),
      i = a(180),
      j = {
        scheme: "urn:mpeg:dash:utc:http-xsdate:2014",
        value: "https://time.akamai.com/?iso"
      },
      k = 4,
      l = 36e4,
      m = 36e4,
      n = .9,
      o = 1e4,
      p = 30,
      q = 30,
      r = 12,
      s = 20,
      t = 30,
      u = 60,
      v = 600,
      w = 20,
      x = 3,
      y = 1e3,
      z = 3,
      A = 500,
      B = 1,
      C = 500,
      D = 50,
      E = !1;
    f.__dashjs_factory_name = "MediaPlayerModel";
    var F = h.default.getSingletonFactory(f);
    F.DEFAULT_UTC_TIMING_SOURCE = j, c.default = F, b.exports = c.default
  }, {
    10: 10,
    180: 180
  }],
  103: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        T = {}
      }

      function b(a) {
        a && a.adapter && (S = a.adapter)
      }

      function c() {
        Q.trigger(C.default.METRICS_CHANGED)
      }

      function d(a) {
        Q.trigger(C.default.METRIC_CHANGED, {
          mediaType: a
        }), c()
      }

      function e(a, b, c) {
        Q.trigger(C.default.METRIC_UPDATED, {
          mediaType: a,
          metric: b,
          value: c
        }), d(a)
      }

      function f(a, b, c) {
        Q.trigger(C.default.METRIC_ADDED, {
          mediaType: a,
          metric: b,
          value: c
        }), d(a)
      }

      function h(a) {
        delete T[a], d(a)
      }

      function k() {
        T = {}, c()
      }

      function m(a) {
        return T.hasOwnProperty(a) ? T[a] : null
      }

      function o(a) {
        var b;
        return T.hasOwnProperty(a) ? b = T[a] : (b = new g.default, T[a] = b), b
      }

      function q(a, b, c, d, e, g) {
        var h = new i.default;
        return h.tcpid = b, h.dest = c, h.topen = d, h.tclose = e, h.tconnect = g, o(a).TcpList.push(h), f(a, S.metricsList.TCP_CONNECTION, h), h
      }

      function s(a, b, c, d) {
        var e = new j.HTTPRequestTrace;
        return e.s = b, e.d = c, e.b = d, a.trace.push(e), a.interval || (a.interval = 0), a.interval += c, e
      }

      function v(a, b, c, d, e, g, h, i, k, l, m, n, p, q) {
        var r = new j.HTTPRequest;
        return e && e !== d && (v(a, null, c, d, null, null, h, i, null, null, null, n, null, null), r.actualurl = e), r.tcpid = b, r.type = c, r.url = d, r.range = h, r.trequest = i, r.tresponse = k, r.responsecode = m, r._tfinish = l, r._stream = a, r._mediaduration = n, r._responseHeaders = p, r._serviceLocation = g, q ? q.forEach(function(a) {
          s(r, a.s, a.d, a.b)
        }) : (delete r.interval, delete r.trace), o(a).HttpList.push(r), f(a, S.metricsList.HTTP_REQUEST, r), r
      }

      function x(a, b, c, d, e) {
        var g = new l.default;
        return g.t = b, g.mt = c, g.to = d, e ? g.lto = e : delete g.lto, o(a).RepSwitchList.push(g), f(a, S.metricsList.TRACK_SWITCH, g), g
      }

      function z(a, b, c) {
        var d = new n.default;
        return d.t = b, d.level = c, o(a).BufferLevel.push(d), f(a, S.metricsList.BUFFER_LEVEL, d), d
      }

      function B(a, b, c) {
        var d = new p.default;
        return d.target = c, d.state = b, o(a).BufferState.push(d), f(a, S.metricsList.BUFFER_STATE, d), d
      }

      function D(a, b, c, d) {
        var e = new r.default;
        return e.time = b, e.range = d, e.manifestInfo = c, o(a).DVRInfo.push(e), f(a, S.metricsList.DVR_INFO, e), e
      }

      function E(a, b) {
        var c = new t.default,
          d = o(a).DroppedFrames;
        return c.time = b.creationTime, c.droppedFrames = b.droppedVideoFrames, d.length > 0 && d[d.length - 1] == c ? d[d.length - 1] : (d.push(c), f(a, S.metricsList.DROPPED_FRAMES, c), c)
      }

      function F(a, b, c, d, e, g, h, i, j) {
        var k = new w.default;
        return k.mediaType = a, k.t = b, k.type = c, k.startTime = d, k.availabilityStartTime = e, k.duration = g, k.quality = h, k.range = i, k.state = j, o(a).SchedulingInfo.push(k), f(a, S.metricsList.SCHEDULING_INFO, k), k
      }

      function H(a, b, c) {
        var d = new A.default;
        d.loadingRequests = b, d.executedRequests = c, o(a).RequestsQueue = d, f(a, S.metricsList.REQUESTS_QUEUE, d)
      }

      function I(a, b, c, d, e, g, h, i, j, k) {
        var l = new u.ManifestUpdate,
          m = o("stream");
        return l.mediaType = a, l.type = b, l.requestTime = c, l.fetchTime = d, l.availabilityStartTime = e, l.presentationStartTime = g, l.clientTimeOffset = h, l.currentTime = i, l.buffered = j, l.latency = k, m.ManifestUpdate.push(l), f(a, S.metricsList.MANIFEST_UPDATE, l), l
      }

      function J(a, b) {
        if (a) {
          for (var c in b) a[c] = b[c];
          e(a.mediaType, S.metricsList.MANIFEST_UPDATE, a)
        }
      }

      function K(a, b, c, d, f) {
        if (a) {
          var g = new u.ManifestUpdateStreamInfo;
          return g.id = b, g.index = c, g.start = d, g.duration = f, a.streamInfo.push(g), e(a.mediaType, S.metricsList.MANIFEST_UPDATE_STREAM_INFO, a), g
        }
        return null
      }

      function L(a, b, c, d, f, g, h, i) {
        if (a) {
          var j = new u.ManifestUpdateTrackInfo;
          return j.id = b, j.index = c, j.streamIndex = d, j.mediaType = f, j.startNumber = h, j.fragmentInfoType = i, j.presentationTimeOffset = g, a.trackInfo.push(j), e(a.mediaType, S.metricsList.MANIFEST_UPDATE_TRACK_INFO, a), j
        }
        return null
      }

      function M(a) {
        var b = "stream";
        return a.trace && Array.isArray(a.trace) ? a.trace.forEach(function(a) {
          a.hasOwnProperty("subreplevel") && !a.subreplevel && delete a.subreplevel
        }) : delete a.trace, o(b).PlayList.push(a), f(b, S.metricsList.PLAY_LIST, a), a
      }

      function N(a) {
        var b = "stream";
        return o(b).DVBErrors.push(a), f(b, S.metricsList.DVB_ERRORS, a), a
      }

      function O(a, b) {
        var c = new G.default;
        return c._s = b, o(a).BolaState = [c], f(a, "BolaState", c), c
      }
      var P = this.context,
        Q = (0, y.default)(P).getInstance(),
        R = void 0,
        S = void 0,
        T = void 0;
      return R = {
        metricsChanged: c,
        metricChanged: d,
        metricUpdated: e,
        metricAdded: f,
        clearCurrentMetricsForType: h,
        clearAllCurrentMetrics: k,
        getReadOnlyMetricsFor: m,
        getMetricsFor: o,
        addTcpConnection: q,
        addHttpRequest: v,
        addRepresentationSwitch: x,
        addBufferLevel: z,
        addBufferState: B,
        addDVRInfo: D,
        addDroppedFrames: E,
        addSchedulingInfo: F,
        addRequestsQueue: H,
        addManifestUpdate: I,
        updateManifestUpdateInfo: J,
        addManifestUpdateStreamInfo: K,
        addManifestUpdateRepresentationInfo: L,
        addPlayList: M,
        addDVBErrors: N,
        updateBolaState: O,
        setConfig: b
      }, a(), R
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(169),
      g = d(f),
      h = a(186),
      i = d(h),
      j = a(180),
      k = a(183),
      l = d(k),
      m = a(176),
      n = d(m),
      o = a(177),
      p = d(o),
      q = a(178),
      r = d(q),
      s = a(179),
      t = d(s),
      u = a(181),
      v = a(185),
      w = d(v),
      x = a(9),
      y = d(x),
      z = a(184),
      A = d(z),
      B = a(13),
      C = d(B),
      D = a(10),
      E = d(D),
      F = a(175),
      G = d(F);
    e.__dashjs_factory_name = "MetricsModel", c.default = E.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    13: 13,
    169: 169,
    175: 175,
    176: 176,
    177: 177,
    178: 178,
    179: 179,
    180: 180,
    181: 181,
    183: 183,
    184: 184,
    185: 185,
    186: 186,
    9: 9
  }],
  104: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        h = new g.default, i = [], j = !1
      }

      function b() {
        return h
      }

      function c() {
        return i
      }

      function d() {
        return j
      }

      function e(a) {
        function b(a, b, c, d) {
          var e = d[0].split(/[=]/);
          return d.push({
            key: e[0],
            value: e[1]
          }), d.shift(), d
        }

        function c(a, b, c) {
          return b > 0 && (l && 0 === i.length ? i = c[b].split(/[&]/) : m && (e = c[b].split(/[&]/))), c
        }
        if (!a) return null;
        var d, e = [],
          f = new RegExp(/[?]/),
          g = new RegExp(/[#]/),
          k = new RegExp(/^(https:)?\/\//i),
          l = f.test(a),
          m = g.test(a);
        return j = k.test(a), d = a.split(/[?#]/).map(c), i.length > 0 && (i = i.reduce(b, null)), e.length > 0 && (e = e.reduce(b, null), e.forEach(function(a) {
          h[a.key] = a.value
        })), a
      }
      var f = void 0,
        h = void 0,
        i = void 0,
        j = void 0;
      return f = {
        initialize: a,
        parseURI: e,
        getURIFragmentData: b,
        getURIQueryData: c,
        isManifestHTTPS: d
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(174),
      g = d(f),
      h = a(10),
      i = d(h);
    e.__dashjs_factory_name = "URIQueryAndFragmentModel", c.default = i.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    174: 174
  }],
  105: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        w = []
      }

      function b() {
        t.playbackRate = x || 1, t.removeEventListener("canplay", b)
      }

      function c(a) {
        t && (t.readyState <= 2 && a > 0 ? t.addEventListener("canplay", b) : t.playbackRate = a)
      }

      function d(a) {
        if (t.currentTime != a) try {
          t.currentTime = a
        } catch (b) {
          0 === t.readyState && b.code === b.INVALID_STATE_ERR && setTimeout(function() {
            t.currentTime = a
          }, 400)
        }
      }

      function e() {
        return t
      }

      function f(a) {
        t = a, t.preload = "auto"
      }

      function g(a) {
        a ? t.src = a : (t.removeAttribute("src"), t.load())
      }

      function h() {
        return t.src
      }

      function i() {
        return v
      }

      function j(a) {
        v = a
      }

      function k() {
        return u
      }

      function l(a) {
        u = a, u.style.position = "absolute", u.style.display = "flex", u.style.overflow = "hidden", u.style.pointerEvents = "none", u.style.top = 0, u.style.left = 0
      }

      function m(a, b) {
        q(a, b)
      }

      function n() {
        return w.length > 0
      }

      function o(a) {
        var b = void 0;
        null === a || t.seeking || w.indexOf(a) !== -1 || (w.push(a), 1 === w.length && (b = document.createEvent("Event"), b.initEvent("waiting", !0, !1), x = t.playbackRate, c(0), t.dispatchEvent(b)))
      }

      function p(a) {
        var b = w.indexOf(a),
          d = void 0;
        null !== a && (b !== -1 && w.splice(b, 1), n() === !1 && 0 === t.playbackRate && (c(x || 1), t.paused || (d = document.createEvent("Event"), d.initEvent("playing", !0, !1), t.dispatchEvent(d))))
      }

      function q(a, b) {
        b ? o(a) : p(a)
      }

      function r() {
        var a = "webkitDroppedFrameCount" in t && "webkitDecodedFrameCount" in t,
          b = "getVideoPlaybackQuality" in t,
          c = null;
        return b ? c = t.getVideoPlaybackQuality() : a && (c = {
          droppedVideoFrames: t.webkitDroppedFrameCount,
          totalVideoFrames: t.webkitDroppedFrameCount + t.webkitDecodedFrameCount,
          creationTime: new Date
        }), c
      }
      var s = void 0,
        t = void 0,
        u = void 0,
        v = void 0,
        w = void 0,
        x = void 0;
      return s = {
        initialize: a,
        setCurrentTime: d,
        setStallState: m,
        getElement: e,
        setElement: f,
        setSource: g,
        getSource: h,
        getVideoContainer: i,
        setVideoContainer: j,
        getTTMLRenderingDiv: k,
        setTTMLRenderingDiv: l,
        getPlaybackQuality: r
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f);
    e.__dashjs_factory_name = "VideoModel", c.default = g.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10
  }],
  106: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = function() {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
          }
        }
        return function(b, c, d) {
          return c && a(b.prototype, c), d && a(b, d), b
        }
      }(),
      g = a(1),
      h = d(g),
      i = function() {
        function a() {
          e(this, a)
        }
        return f(a, null, [{
          key: "findCencContentProtection",
          value: function(a) {
            for (var b = null, c = 0; c < a.length; ++c) {
              var d = a[c];
              "urn:mpeg:dash:mp4protection:2011" === d.schemeIdUri.toLowerCase() && "cenc" === d.value.toLowerCase() && (b = d)
            }
            return b
          }
        }, {
          key: "getPSSHData",
          value: function(a) {
            var b = 8,
              c = new DataView(a),
              d = c.getUint8(b);
            return b += 20, d > 0 && (b += 4 + 16 * c.getUint32(b)), b += 4, a.slice(b)
          }
        }, {
          key: "getPSSHForKeySystem",
          value: function(b, c) {
            var d = a.parsePSSHList(c);
            return d.hasOwnProperty(b.uuid.toLowerCase()) ? d[b.uuid.toLowerCase()] : null
          }
        }, {
          key: "parseInitDataFromContentProtection",
          value: function(a) {
            return "pssh" in a ? h.default.decodeArray(a.pssh.__text).buffer : null
          }
        }, {
          key: "parsePSSHList",
          value: function(a) {
            if (null === a) return [];
            for (var b = new DataView(a), c = !1, d = {}, e = 0; !c;) {
              var f, g, h, i, j, k = e;
              if (e >= b.buffer.byteLength) break;
              if (f = b.getUint32(e), g = e + f, e += 4, 1886614376 === b.getUint32(e))
                if (e += 4, h = b.getUint8(e), 0 === h || 1 === h) {
                  e++, e += 3, i = "";
                  var l, m;
                  for (l = 0; l < 4; l++) m = b.getUint8(e + l).toString(16), i += 1 === m.length ? "0" + m : m;
                  for (e += 4, i += "-", l = 0; l < 2; l++) m = b.getUint8(e + l).toString(16), i += 1 === m.length ? "0" + m : m;
                  for (e += 2, i += "-", l = 0; l < 2; l++) m = b.getUint8(e + l).toString(16), i += 1 === m.length ? "0" + m : m;
                  for (e += 2, i += "-", l = 0; l < 2; l++) m = b.getUint8(e + l).toString(16), i += 1 === m.length ? "0" + m : m;
                  for (e += 2, i += "-", l = 0; l < 6; l++) m = b.getUint8(e + l).toString(16), i += 1 === m.length ? "0" + m : m;
                  e += 6, i = i.toLowerCase(), j = b.getUint32(e), e += 4, d[i] = b.buffer.slice(k, g), e = g
                } else e = g;
              else e = g
            }
            return d
          }
        }]), a
      }();
    c.default = i, b.exports = c.default
  }, {
    1: 1
  }],
  107: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a) {
        var c = null,
          d = (0, i.default)(e).getInstance();
        d.setConfig({
          log: a.log
        }), d.initialize();
        var f = b(a);
        return !c && f && (c = (0, g.default)(e).create({
          protectionModel: f,
          protectionKeyController: d,
          adapter: a.adapter,
          eventBus: a.eventBus,
          log: a.log
        }), a.capabilities.setEncryptedMediaSupported(!0)), c
      }

      function b(a) {
        var b = a.log,
          d = a.eventBus,
          f = a.videoModel.getElement();
        return void 0 !== f.onencrypted && void 0 !== f.mediaKeys && void 0 !== navigator.requestMediaKeySystemAccess && "function" == typeof navigator.requestMediaKeySystemAccess ? (b("EME detected on this user agent! (ProtectionModel_21Jan2015)"), (0, m.default)(e).create({
          log: b,
          eventBus: d
        })) : c(f, u) ? (b("EME detected on this user agent! (ProtectionModel_3Feb2014)"), (0, o.default)(e).create({
          log: b,
          eventBus: d,
          api: c(f, u)
        })) : c(f, t) ? (b("EME detected on this user agent! (ProtectionModel_01b)"), (0, q.default)(e).create({
          log: b,
          eventBus: d,
          api: c(f, t)
        })) : (b("No supported version of EME detected on this user agent! - Attempts to play encrypted content will fail!"), null)
      }

      function c(a, b) {
        for (var c = 0; c < b.length; c++) {
          var d = b[c];
          if ("function" == typeof a[d[Object.keys(d)[0]]]) return d
        }
        return null
      }
      var d = void 0,
        e = this.context;
      return d = {
        createProtectionSystem: a
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(109),
      g = d(f),
      h = a(110),
      i = d(h),
      j = a(108),
      k = d(j),
      l = a(115),
      m = d(l),
      n = a(116),
      o = d(n),
      p = a(114),
      q = d(p),
      r = a(10),
      s = d(r),
      t = [{
        generateKeyRequest: "generateKeyRequest",
        addKey: "addKey",
        cancelKeyRequest: "cancelKeyRequest",
        needkey: "needkey",
        keyerror: "keyerror",
        keyadded: "keyadded",
        keymessage: "keymessage"
      }, {
        generateKeyRequest: "webkitGenerateKeyRequest",
        addKey: "webkitAddKey",
        cancelKeyRequest: "webkitCancelKeyRequest",
        needkey: "webkitneedkey",
        keyerror: "webkitkeyerror",
        keyadded: "webkitkeyadded",
        keymessage: "webkitkeymessage"
      }],
      u = [{
        setMediaKeys: "setMediaKeys",
        MediaKeys: "MediaKeys",
        release: "close",
        needkey: "needkey",
        error: "keyerror",
        message: "keymessage",
        ready: "keyadded",
        close: "keyclose"
      }, {
        setMediaKeys: "msSetMediaKeys",
        MediaKeys: "MSMediaKeys",
        release: "close",
        needkey: "msneedkey",
        error: "mskeyerror",
        message: "mskeymessage",
        ready: "mskeyadded",
        close: "mskeyclose"
      }];
    e.__dashjs_factory_name = "Protection";
    var v = s.default.getClassFactory(e);
    v.events = k.default, c.default = v, b.exports = c.default
  }, {
    10: 10,
    108: 108,
    109: 109,
    110: 110,
    114: 114,
    115: 115,
    116: 116
  }],
  108: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function f(a, b) {
      if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
      a.prototype = Object.create(b && b.prototype, {
        constructor: {
          value: a,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var g = function(a, b, c) {
        for (var d = !0; d;) {
          var e = a,
            f = b,
            g = c;
          d = !1, null === e && (e = Function.prototype);
          var h = Object.getOwnPropertyDescriptor(e, f);
          if (void 0 !== h) {
            if ("value" in h) return h.value;
            var i = h.get;
            if (void 0 === i) return;
            return i.call(g)
          }
          var j = Object.getPrototypeOf(e);
          if (null === j) return;
          a = j, b = f, c = g, d = !0, h = j = void 0
        }
      },
      h = a(14),
      i = d(h),
      j = function(a) {
        function b() {
          e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this), this.INTERNAL_KEY_MESSAGE = "internalKeyMessage", this.INTERNAL_KEY_SYSTEM_SELECTED = "internalKeySystemSelected", this.KEY_ADDED = "public_keyAdded", this.KEY_ERROR = "public_keyError", this.KEY_MESSAGE = "public_keyMessage", this.KEY_SESSION_CLOSED = "public_keySessionClosed", this.KEY_SESSION_CREATED = "public_keySessionCreated", this.KEY_SESSION_REMOVED = "public_keySessionRemoved", this.KEY_STATUSES_CHANGED = "public_keyStatusesChanged", this.KEY_SYSTEM_ACCESS_COMPLETE = "keySystemAccessComplete", this.KEY_SYSTEM_SELECTED = "public_keySystemSelected", this.LICENSE_REQUEST_COMPLETE = "public_licenseRequestComplete", this.NEED_KEY = "needkey", this.PROTECTION_CREATED = "public_protectioncreated", this.PROTECTION_DESTROYED = "public_protectiondestroyed", this.SERVER_CERTIFICATE_UPDATED = "serverCertificateUpdated", this.TEARDOWN_COMPLETE = "protectionTeardownComplete", this.VIDEO_ELEMENT_SELECTED = "videoElementSelected"
        }
        return f(b, a), b
      }(i.default),
      k = new j;
    c.default = k, b.exports = c.default
  }, {
    14: 14
  }],
  109: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b() {
        D = x.getKeySystems(), E = [], I = !1, J = "temporary", K = "", i.default.extend(q.default.events)
      }

      function c(a, b, c) {
        if (!I) {
          var d;
          b || c || (d = z.getStreamsInfo(a)[0]), F = b || (d ? z.getMediaInfoForType(a, d, "audio") : null), G = c || (d ? z.getMediaInfoForType(a, d, "video") : null);
          var e = G ? G : F,
            f = x.getSupportedKeySystemsFromContentProtection(e.contentProtection);
          f && f.length > 0 && t(f, !0), I = !0
        }
      }

      function d(a) {
        var b = g.default.getPSSHForKeySystem(L, a);
        if (b) {
          for (var c = y.getAllInitData(), d = 0; d < c.length; d++)
            if (x.initDataEquals(b, c[d])) return void B("DRM: Ignoring initData because we have already seen it!");
          try {
            y.createKeySession(b, J)
          } catch (e) {
            A.trigger(i.default.KEY_SESSION_CREATED, {
              data: null,
              error: "Error creating key session! " + e.message
            })
          }
        } else A.trigger(i.default.KEY_SESSION_CREATED, {
          data: null,
          error: "Selected key system is " + L.systemString + ".  needkey/encrypted event contains no initData corresponding to that key system!"
        })
      }

      function e(a) {
        y.loadKeySession(a)
      }

      function f(a) {
        y.removeKeySession(a)
      }

      function h(a) {
        y.closeKeySession(a)
      }

      function j(a) {
        y.setServerCertificate(a)
      }

      function l(a) {
        a ? (y.setMediaElement(a), A.on(i.default.NEED_KEY, w, this), A.on(i.default.INTERNAL_KEY_MESSAGE, v, this)) : null === a && (y.setMediaElement(a), A.off(i.default.NEED_KEY, w, this), A.off(i.default.INTERNAL_KEY_MESSAGE, v, this))
      }

      function n(a) {
        J = a
      }

      function o(a) {
        K = a
      }

      function p(a) {
        H = a
      }

      function r() {
        l(null), L = void 0, y && (y.reset(), y = null)
      }

      function s(a) {
        var b = null,
          c = a.systemString;
        return H && (b = c in H ? H[c] : null), b
      }

      function t(a, b) {
        var c = this,
          e = [],
          f = [];
        G && f.push(new k.default(G.codec, K)), F && e.push(new k.default(F.codec, K));
        var g, h = new m.default(e, f, "optional", "temporary" === J ? "optional" : "required", [J]),
          j = [];
        if (L) {
          for (g = 0; g < a.length; g++)
            if (L === a[g].ks) {
              var l = function() {
                j.push({
                  ks: a[g].ks,
                  configs: [h]
                });
                var e = function e(f) {
                  A.off(i.default.KEY_SYSTEM_ACCESS_COMPLETE, e, c), f.error ? b || A.trigger(i.default.KEY_SYSTEM_SELECTED, {
                    error: "DRM: KeySystem Access Denied! -- " + f.error
                  }) : (B("DRM: KeySystem Access Granted"), A.trigger(i.default.KEY_SYSTEM_SELECTED, {
                    data: f.data
                  }), d(a[g].initData))
                };
                return A.on(i.default.KEY_SYSTEM_ACCESS_COMPLETE, e, c), y.requestKeySystemAccess(j), "break"
              }();
              if ("break" === l) break
            }
        } else if (void 0 === L) {
          L = null, E.push(a);
          for (var n = 0; n < a.length; n++) j.push({
            ks: a[n].ks,
            configs: [h]
          });
          var o, p = function a(d) {
              A.off(i.default.KEY_SYSTEM_ACCESS_COMPLETE, a, c), d.error ? (L = void 0, A.off(i.default.INTERNAL_KEY_SYSTEM_SELECTED, q, c), b || A.trigger(i.default.KEY_SYSTEM_SELECTED, {
                data: null,
                error: "DRM: KeySystem Access Denied! -- " + d.error
              })) : (o = d.data, B("DRM: KeySystem Access Granted (" + o.keySystem.systemString + ")!  Selecting key system..."), y.selectKeySystem(o))
            },
            q = function a(e) {
              if (A.off(i.default.INTERNAL_KEY_SYSTEM_SELECTED, a, c), A.off(i.default.KEY_SYSTEM_ACCESS_COMPLETE, p, c), e.error) L = void 0, b || A.trigger(i.default.KEY_SYSTEM_SELECTED, {
                data: null,
                error: "DRM: Error selecting key system! -- " + e.error
              });
              else {
                L = y.getKeySystem(), A.trigger(i.default.KEY_SYSTEM_SELECTED, {
                  data: o
                });
                for (var f = 0; f < E.length; f++)
                  for (g = 0; g < E[f].length; g++)
                    if (L === E[f][g].ks) {
                      d(E[f][g].initData);
                      break
                    }
              }
            };
          A.on(i.default.INTERNAL_KEY_SYSTEM_SELECTED, q, c), A.on(i.default.KEY_SYSTEM_ACCESS_COMPLETE, p, c), y.requestKeySystemAccess(j)
        } else E.push(a)
      }

      function u(a, b) {
        A.trigger(i.default.LICENSE_REQUEST_COMPLETE, {
          data: a,
          error: b
        })
      }

      function v(a) {
        if (B("DRM: onKeyMessage"), a.error) return void B(a.error);
        var b = a.data;
        A.trigger(i.default.KEY_MESSAGE, {
          data: b
        });
        var c = b.messageType ? b.messageType : "license-request",
          d = b.message,
          e = b.sessionToken,
          f = s(L),
          h = L.systemString,
          j = x.getLicenseServer(L, f, c),
          k = {
            sessionToken: e,
            messageType: c
          };
        if (!j) return B("DRM: License server request not required for this message (type = " + a.data.messageType + ").  Session ID = " + e.getSessionID()), void u(k);
        if (x.isClearKey(L)) {
          var l = x.processClearKeyLicenseRequest(f, d);
          if (l) return B("DRM: ClearKey license request handled by application!"), u(k), void y.updateKeySession(e, l)
        }
        var m = new XMLHttpRequest,
          n = null;
        if (f && f.serverURL) {
          var o = f.serverURL;
          "string" == typeof o && "" !== o ? n = o : "object" == typeof o && o.hasOwnProperty(c) && (n = o[c])
        } else f && f.laURL && "" !== f.laURL ? n = f.laURL : (n = L.getLicenseServerURLFromInitData(g.default.getPSSHData(e.initData)), n || (n = a.data.laURL));
        if (n = j.getServerURLFromMessage(n, d, c), !n) return void u(k, "DRM: No license server URL specified!");
        m.open(j.getHTTPMethod(c), n, !0), m.responseType = j.getResponseType(h, c), m.onload = function() {
          200 == this.status ? (u(k), y.updateKeySession(e, j.getLicenseMessage(this.response, h, c))) : u(k, "DRM: " + h + ' update, XHR status is "' + this.statusText + '" (' + this.status + "), expected to be 200. readyState is " + this.readyState + ".  Response is " + (this.response ? j.getErrorResponse(this.response, h, c) : "NONE"))
        }, m.onabort = function() {
          u(k, "DRM: " + h + ' update, XHR aborted. status is "' + this.statusText + '" (' + this.status + "), readyState is " + this.readyState)
        }, m.onerror = function() {
          u(k, "DRM: " + h + ' update, XHR error. status is "' + this.statusText + '" (' + this.status + "), readyState is " + this.readyState)
        };
        var p = function(a) {
          var b;
          if (a)
            for (b in a) "authorization" === b.toLowerCase() && (m.withCredentials = !0), m.setRequestHeader(b, a[b])
        };
        f && p(f.httpRequestHeaders), p(L.getRequestHeadersFromMessage(d)), f && f.withCredentials && (m.withCredentials = !0), m.send(L.getLicenseRequestFromMessage(d))
      }

      function w(a) {
        if (B("DRM: onNeedKey"), "cenc" !== a.key.initDataType) return void B("DRM:  Only 'cenc' initData is supported!  Ignoring initData of type: " + a.key.initDataType);
        var b = a.key.initData;
        ArrayBuffer.isView(b) && (b = b.buffer), B("DRM: initData:", String.fromCharCode.apply(null, new Uint8Array(b)));
        var c = x.getSupportedKeySystems(b, H);
        return 0 === c.length ? void B("DRM: Received needkey event with initData, but we don't support any of the key systems!") : void t(c, !1)
      }
      var x = a.protectionKeyController,
        y = a.protectionModel,
        z = a.adapter,
        A = a.eventBus,
        B = a.log,
        C = void 0,
        D = void 0,
        E = void 0,
        F = void 0,
        G = void 0,
        H = void 0,
        I = void 0,
        J = void 0,
        K = void 0,
        L = void 0;
      return C = {
        initialize: c,
        createKeySession: d,
        loadKeySession: e,
        removeKeySession: f,
        closeKeySession: h,
        setServerCertificate: j,
        setMediaElement: l,
        setSessionType: n,
        setRobustnessLevel: o,
        setProtectionData: p,
        reset: r
      }, b(), C
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(106),
      g = d(f),
      h = a(13),
      i = d(h),
      j = a(127),
      k = d(j),
      l = a(126),
      m = d(l),
      n = a(10),
      o = d(n),
      p = a(107),
      q = d(p);
    e.__dashjs_factory_name = "ProtectionController", c.default = o.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    106: 106,
    107: 107,
    126: 126,
    127: 127,
    13: 13
  }],
  110: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a) {
        a && a.log && (t = a.log)
      }

      function b() {
        v = [];
        var a;
        a = (0, m.default)(p).getInstance(), v.push(a), a = (0, k.default)(p).getInstance(), v.push(a), a = (0, i.default)(p).getInstance(), v.push(a), w = a
      }

      function c() {
        return v
      }

      function d(a) {
        for (var b = 0; b < v.length; b++)
          if (v[b].systemString === a) return v[b];
        return null
      }

      function e(a) {
        return a === w
      }

      function f(a, b) {
        if (a.byteLength === b.byteLength) {
          for (var c = new Uint8Array(a), d = new Uint8Array(b), e = 0; e < c.length; e++)
            if (c[e] !== d[e]) return !1;
          return !0
        }
        return !1
      }

      function h(a) {
        var b, c, d, e, f = [];
        if (a)
          for (d = 0; d < v.length; ++d)
            for (c = v[d], e = 0; e < a.length; ++e)
              if (b = a[e], b.schemeIdUri.toLowerCase() === c.schemeIdURI) {
                var g = c.getInitData(b);
                g && f.push({
                  ks: v[d],
                  initData: g
                })
              }
        return f
      }

      function j(a, b) {
        var c, d = [],
          e = g.default.parsePSSHList(a);
        for (c = 0; c < v.length; ++c) {
          var f = v[c].systemString,
            h = !b || f in b;
          v[c].uuid in e && h && d.push({
            ks: v[c],
            initData: e[v[c].uuid]
          })
        }
        return d
      }

      function l(a, b, c) {
        if ("license-release" === c || "individualization-request" === c) return null;
        var d = null;
        return b && b.hasOwnProperty("drmtoday") ? d = (0, o.default)(p).getInstance() : "com.widevine.alpha" === a.systemString ? d = (0, s.default)(p).getInstance() : "com.microsoft.playready" === a.systemString ? d = (0, q.default)(p).getInstance() : "org.w3.clearkey" === a.systemString && (d = (0, u.default)(p).getInstance()), d
      }

      function n(a, b) {
        try {
          return w.getClearKeysFromProtectionData(a, b)
        } catch (c) {
          return t("Failed to retrieve clearkeys from ProtectionData"), null
        }
      }
      var p = this.context,
        r = void 0,
        t = void 0,
        v = void 0,
        w = void 0;
      return r = {
        initialize: b,
        isClearKey: e,
        initDataEquals: f,
        getKeySystems: c,
        getKeySystemBySystemString: d,
        getSupportedKeySystemsFromContentProtection: h,
        getSupportedKeySystems: j,
        getLicenseServer: l,
        processClearKeyLicenseRequest: n,
        setConfig: a
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(106),
      g = d(f),
      h = a(111),
      i = d(h),
      j = a(113),
      k = d(j),
      l = a(112),
      m = d(l),
      n = a(118),
      o = d(n),
      p = a(119),
      q = d(p),
      r = a(120),
      s = d(r),
      t = a(117),
      u = d(t),
      v = a(10),
      w = d(v);
    e.__dashjs_factory_name = "ProtectionKeyController", c.default = w.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    106: 106,
    111: 111,
    112: 112,
    113: 113,
    117: 117,
    118: 118,
    119: 119,
    120: 120
  }],
  111: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a, b) {
        var c = null;
        if (a) {
          for (var d = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(b))), e = [], f = 0; f < d.kids.length; f++) {
            var h = d.kids[f],
              j = a.clearkeys.hasOwnProperty(h) ? a.clearkeys[h] : null;
            if (!j) throw new Error("DRM: ClearKey keyID (" + h + ") is not known!");
            e.push(new g.default(h, j))
          }
          c = new i.default(e)
        }
        return c
      }

      function b(a) {
        return k.default.parseInitDataFromContentProtection(a)
      }

      function c() {
        return null
      }

      function d(a) {
        return new Uint8Array(a)
      }

      function e() {
        return null
      }
      var f = void 0;
      return f = {
        uuid: n,
        schemeIdURI: p,
        systemString: o,
        getInitData: b,
        getRequestHeadersFromMessage: c,
        getLicenseRequestFromMessage: d,
        getLicenseServerURLFromInitData: e,
        getClearKeysFromProtectionData: a
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(124),
      g = d(f),
      h = a(121),
      i = d(h),
      j = a(106),
      k = d(j),
      l = a(10),
      m = d(l),
      n = "1077efec-c0b2-4d02-ace3-3c1e52e2fb4b",
      o = "org.w3.clearkey",
      p = "urn:uuid:" + n;
    e.__dashjs_factory_name = "KeySystemClearKey", c.default = m.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    106: 106,
    121: 121,
    124: 124
  }],
  112: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a) {
        var b, c, d = {},
          e = new DOMParser,
          f = "utf16" === h ? new Uint16Array(a) : new Uint8Array(a);
        b = String.fromCharCode.apply(null, f), c = e.parseFromString(b, "application/xml");
        for (var g = c.getElementsByTagName("name"), i = c.getElementsByTagName("value"), j = 0; j < g.length; j++) d[g[j].childNodes[0].nodeValue] = i[j].childNodes[0].nodeValue;
        return d.hasOwnProperty("Content") && (d["Content-Type"] = d.Content, delete d.Content), d
      }

      function b(a) {
        var b, c, d = null,
          e = new DOMParser,
          f = "utf16" === h ? new Uint16Array(a) : new Uint8Array(a);
        if (b = String.fromCharCode.apply(null, f), c = e.parseFromString(b, "application/xml"), c.getElementsByTagName("Challenge")[0]) {
          var g = c.getElementsByTagName("Challenge")[0].childNodes[0].nodeValue;
          g && (d = m.default.decode(g))
        }
        return d
      }

      function c(a) {
        if (a)
          for (var b = new DataView(a), c = b.getUint16(4, !0), d = 6, e = new DOMParser, f = 0; f < c; f++) {
            var g = b.getUint16(d, !0);
            d += 2;
            var h = b.getUint16(d, !0);
            if (d += 2, 1 === g) {
              var i = a.slice(d, d + h),
                j = String.fromCharCode.apply(null, new Uint16Array(i)),
                k = e.parseFromString(j, "application/xml");
              if (k.getElementsByTagName("LA_URL")[0]) {
                var l = k.getElementsByTagName("LA_URL")[0].childNodes[0].nodeValue;
                if (l) return l
              }
              if (k.getElementsByTagName("LUI_URL")[0]) {
                var m = k.getElementsByTagName("LUI_URL")[0].childNodes[0].nodeValue;
                if (m) return m
              }
            } else d += h
          }
        return null
      }

      function d(a) {
        var b, c, d, e, f, h = new Uint8Array([112, 115, 115, 104, 0, 0, 0, 0]),
          i = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]),
          j = 0,
          k = null;
        if ("pssh" in a) return g.default.parseInitDataFromContentProtection(a);
        if ("pro" in a) k = m.default.decodeArray(a.pro.__text);
        else {
          if (!("prheader" in a)) return null;
          k = m.default.decodeArray(a.prheader.__text)
        }
        return b = k.length, c = 4 + h.length + i.length + 4 + b, d = new ArrayBuffer(c), e = new Uint8Array(d), f = new DataView(d), f.setUint32(j, c), j += 4, e.set(h, j), j += h.length, e.set(i, j), j += i.length, f.setUint32(j, b), j += 4, e.set(k, j), j += b, e.buffer
      }

      function e(a) {
        if ("utf8" !== a && "utf16" !== a) throw new i.default("Illegal PlayReady message format! -- " + a);
        h = a
      }
      var f = void 0,
        h = "utf16";
      return f = {
        uuid: n,
        schemeIdURI: p,
        systemString: o,
        getInitData: d,
        getRequestHeadersFromMessage: a,
        getLicenseRequestFromMessage: b,
        getLicenseServerURLFromInitData: c,
        setPlayReadyMessageFormat: e
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(106),
      g = d(f),
      h = a(163),
      i = d(h),
      j = a(10),
      k = d(j),
      l = a(1),
      m = d(l),
      n = "9a04f079-9840-4286-ab92-e65be0885f95",
      o = "com.microsoft.playready",
      p = "urn:uuid:" + n;
    e.__dashjs_factory_name = "KeySystemPlayReady", c.default = k.default.getSingletonFactory(e), b.exports = c.default
  }, {
    1: 1,
    10: 10,
    106: 106,
    163: 163
  }],
  113: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a) {
        return g.default.parseInitDataFromContentProtection(a)
      }

      function b() {
        return null
      }

      function c(a) {
        return new Uint8Array(a)
      }

      function d() {
        return null
      }
      var e = void 0;
      return e = {
        uuid: j,
        schemeIdURI: l,
        systemString: k,
        getInitData: a,
        getRequestHeadersFromMessage: b,
        getLicenseRequestFromMessage: c,
        getLicenseServerURLFromInitData: d
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(106),
      g = d(f),
      h = a(10),
      i = d(h),
      j = "edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",
      k = "com.widevine.alpha",
      l = "urn:uuid:" + j;
    e.__dashjs_factory_name = "KeySystemWidevine", c.default = i.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    106: 106
  }],
  114: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b() {
        E = null, F = null, I = [], J = [], G = (0, g.default)(z).getInstance(), H = (0, u.default)(z).getInstance(), L = w()
      }

      function c() {
        E && y();
        for (var a = 0; a < J.length; a++) p(J[a]);
        A.trigger(s.default.TEARDOWN_COMPLETE)
      }

      function d() {
        return F
      }

      function e() {
        for (var a = [], b = 0; b < I.length; b++) a.push(I[b].initData);
        for (var b = 0; b < J.length; b++) a.push(J[b].initData);
        return a
      }

      function f(a) {
        var b = E;
        b || (b = document.createElement("video"));
        for (var c = !1, d = 0; d < a.length; d++)
          for (var e = a[d].ks.systemString, f = a[d].configs, g = null, h = null, i = 0; i < f.length; i++) {
            var j = f[i].videoCapabilities;
            if (j && 0 !== j.length) {
              h = [];
              for (var k = 0; k < j.length; k++) "" !== b.canPlayType(j[k].contentType, e) && h.push(j[k])
            }
            if (!(!g && !h || g && 0 === g.length || h && 0 === h.length)) {
              c = !0;
              var l = new o.default(g, h),
                m = G.getKeySystemBySystemString(e);
              A.trigger(s.default.KEY_SYSTEM_ACCESS_COMPLETE, {
                data: new q.default(m, l)
              });
              break
            }
          }
        c || A.trigger(s.default.KEY_SYSTEM_ACCESS_COMPLETE, {
          error: "Key system access denied! -- No valid audio/video content configurations detected!"
        })
      }

      function h(a) {
        F = a.keySystem, A.trigger(s.default.INTERNAL_KEY_SYSTEM_SELECTED)
      }

      function j(a) {
        E !== a && (E && y(), E = a, E && (E.addEventListener(C.keyerror, L), E.addEventListener(C.needkey, L), E.addEventListener(C.keymessage, L), E.addEventListener(C.keyadded, L), A.trigger(s.default.VIDEO_ELEMENT_SELECTED)))
      }

      function l(a) {
        if (!F) throw new Error("Can not create sessions until you have selected a key system");
        if (K || 0 === J.length) {
          var b = {
            sessionID: null,
            initData: a,
            getSessionID: function() {
              return this.sessionID
            },
            getExpirationTime: function() {
              return NaN
            },
            getSessionType: function() {
              return "temporary"
            }
          };
          return I.push(b), E[C.generateKeyRequest](F.systemString, new Uint8Array(a)), b
        }
        throw new Error("Multiple sessions not allowed!")
      }

      function n(a, b) {
        var c = a.sessionID;
        if (G.isClearKey(F))
          for (var d = 0; d < b.keyPairs.length; d++) E[C.addKey](F.systemString, b.keyPairs[d].key, b.keyPairs[d].keyID, c);
        else E[C.addKey](F.systemString, new Uint8Array(b), a.initData, c)
      }

      function p(a) {
        E[C.cancelKeyRequest](F.systemString, a.sessionID)
      }

      function r() {}

      function t() {}

      function v() {}

      function w() {
        return {
          handleEvent: function(a) {
            var b = null;
            switch (a.type) {
              case C.needkey:
                var c = ArrayBuffer.isView(a.initData) ? a.initData.buffer : a.initData;
                A.trigger(s.default.NEED_KEY, {
                  key: new i.default(c, "cenc")
                });
                break;
              case C.keyerror:
                if (b = x(J, a.sessionId), b || (b = x(I, a.sessionId)), b) {
                  var d = "";
                  switch (a.errorCode.code) {
                    case 1:
                      d += "MEDIA_KEYERR_UNKNOWN - An unspecified error occurred. This value is used for errors that don't match any of the other codes.";
                      break;
                    case 2:
                      d += "MEDIA_KEYERR_CLIENT - The Key System could not be installed or updated.";
                      break;
                    case 3:
                      d += "MEDIA_KEYERR_SERVICE - The message passed into update indicated an error from the license service.";
                      break;
                    case 4:
                      d += "MEDIA_KEYERR_OUTPUT - There is no available output device with the required characteristics for the content protection system.";
                      break;
                    case 5:
                      d += "MEDIA_KEYERR_HARDWARECHANGE - A hardware configuration change caused a content protection error.";
                      break;
                    case 6:
                      d += "MEDIA_KEYERR_DOMAIN - An error occurred in a multi-device domain licensing configuration. The most common error is a failure to join the domain."
                  }
                  d += "  System Code = " + a.systemCode, A.trigger(s.default.KEY_ERROR, {
                    data: new k.default(b, d)
                  })
                } else B("No session token found for key error");
                break;
              case C.keyadded:
                b = x(J, a.sessionId), b || (b = x(I, a.sessionId)), b ? (B("DRM: Key added."), A.trigger(s.default.KEY_ADDED, {
                  data: b
                })) : B("No session token found for key added");
                break;
              case C.keymessage:
                if (K = null !== a.sessionId && void 0 !== a.sessionId, K ? (b = x(J, a.sessionId), !b && I.length > 0 && (b = I.shift(), J.push(b), b.sessionID = a.sessionId)) : I.length > 0 && (b = I.shift(), J.push(b), 0 !== I.length && H.mediaKeyMessageError("Multiple key sessions were creates with a user-agent that does not support sessionIDs!! Unpredictable behavior ahead!")), b) {
                  var e = ArrayBuffer.isView(a.message) ? a.message.buffer : a.message;
                  b.keyMessage = e, A.trigger(s.default.INTERNAL_KEY_MESSAGE, {
                    data: new m.default(b, e, a.defaultURL)
                  })
                } else B("No session token found for key message")
            }
          }
        }
      }

      function x(a, b) {
        if (b && a) {
          for (var c = a.length, d = 0; d < c; d++)
            if (a[d].sessionID == b) return a[d];
          return null
        }
        return null
      }

      function y() {
        E.removeEventListener(C.keyerror, L), E.removeEventListener(C.needkey, L), E.removeEventListener(C.keymessage, L), E.removeEventListener(C.keyadded, L)
      }
      var z = this.context,
        A = a.eventBus,
        B = a.log,
        C = a.api,
        D = void 0,
        E = void 0,
        F = void 0,
        G = void 0,
        H = void 0,
        I = void 0,
        J = void 0,
        K = void 0,
        L = void 0;
      return D = {
        getAllInitData: e,
        requestKeySystemAccess: f,
        getKeySystem: d,
        selectKeySystem: h,
        setMediaElement: j,
        createKeySession: l,
        updateKeySession: n,
        closeKeySession: p,
        setServerCertificate: r,
        loadKeySession: t,
        removeKeySession: v,
        reset: c
      }, b(), D
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(110),
      g = d(f),
      h = a(128),
      i = d(h),
      j = a(122),
      k = d(j),
      l = a(123),
      m = d(l),
      n = a(126),
      o = d(n),
      p = a(125),
      q = d(p),
      r = a(13),
      s = d(r),
      t = a(152),
      u = d(t),
      v = a(10),
      w = d(v);
    e.__dashjs_factory_name = "ProtectionModel_01b", c.default = w.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    110: 110,
    122: 122,
    123: 123,
    125: 125,
    126: 126,
    128: 128,
    13: 13,
    152: 152
  }],
  115: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b() {
        A = null, B = null, C = null, D = [], F = (0, g.default)(G).getInstance(), E = w()
      }

      function c() {
        var a, b = D.length;
        if (0 !== b)
          for (var c = function(a) {
              x(a), 0 === D.length && (B ? (B.removeEventListener("encrypted", E), B.setMediaKeys(null).then(function() {
                H.trigger(q.default.TEARDOWN_COMPLETE)
              })) : H.trigger(q.default.TEARDOWN_COMPLETE))
            }, d = 0; d < b; d++) a = D[d],
            function(b) {
              a.session.closed.then(function() {
                c(b)
              }), v(a).catch(function() {
                c(b)
              })
            }(a);
        else H.trigger(q.default.TEARDOWN_COMPLETE)
      }

      function d() {
        return A
      }

      function e() {
        for (var a = [], b = 0; b < D.length; b++) a.push(D[b].initData);
        return a
      }

      function f(a) {
        u(a, 0)
      }

      function h(a) {
        a.mksa.createMediaKeys().then(function(b) {
          A = a.keySystem, C = b, B && B.setMediaKeys(C), H.trigger(q.default.INTERNAL_KEY_SYSTEM_SELECTED)
        }).catch(function() {
          H.trigger(q.default.INTERNAL_KEY_SYSTEM_SELECTED, {
            error: "Error selecting keys system (" + a.keySystem.systemString + ")! Could not create MediaKeys -- TODO"
          })
        })
      }

      function j(a) {
        B !== a && (B && (B.removeEventListener("encrypted", E), B.setMediaKeys(null)), B = a, B && (B.addEventListener("encrypted", E), C && B.setMediaKeys(C)))
      }

      function l(a) {
        if (!A || !C) throw new Error("Can not set server certificate until you have selected a key system");
        C.setServerCertificate(a).then(function() {
          I("DRM: License server certificate successfully updated."), H.trigger(q.default.SERVER_CERTIFICATE_UPDATED)
        }).catch(function(a) {
          H.trigger(q.default.SERVER_CERTIFICATE_UPDATED, {
            error: "Error updating server certificate -- " + a.name
          })
        })
      }

      function n(a, b) {
        if (!A || !C) throw new Error("Can not create sessions until you have selected a key system");
        var c = C.createSession(b),
          d = y(c, a, b);
        c.generateRequest("cenc", a).then(function() {
          I("DRM: Session created.  SessionID = " + d.getSessionID()), H.trigger(q.default.KEY_SESSION_CREATED, {
            data: d
          })
        }).catch(function(a) {
          x(d), H.trigger(q.default.KEY_SESSION_CREATED, {
            data: null,
            error: "Error generating key request -- " + a.name
          })
        })
      }

      function p(a, b) {
        var c = a.session;
        F.isClearKey(A) && (b = b.toJWK()), c.update(b).catch(function(b) {
          H.trigger(q.default.KEY_ERROR, {
            data: new k.default(a, "Error sending update() message! " + b.name)
          })
        })
      }

      function r(a) {
        if (!A || !C) throw new Error("Can not load sessions until you have selected a key system");
        var b = C.createSession();
        b.load(a).then(function(c) {
          if (c) {
            var d = y(b);
            I("DRM: Session created.  SessionID = " + d.getSessionID()), H.trigger(q.default.KEY_SESSION_CREATED, {
              data: d
            })
          } else H.trigger(q.default.KEY_SESSION_CREATED, {
            data: null,
            error: "Could not load session! Invalid Session ID (" + a + ")"
          })
        }).catch(function(b) {
          H.trigger(q.default.KEY_SESSION_CREATED, {
            data: null,
            error: "Could not load session (" + a + ")! " + b.name
          })
        })
      }

      function s(a) {
        var b = a.session;
        b.remove().then(function() {
          I("DRM: Session removed.  SessionID = " + a.getSessionID()), H.trigger(q.default.KEY_SESSION_REMOVED, {
            data: a.getSessionID()
          })
        }, function(b) {
          H.trigger(q.default.KEY_SESSION_REMOVED, {
            data: null,
            error: "Error removing session (" + a.getSessionID() + "). " + b.name
          })
        })
      }

      function t(a) {
        v(a).catch(function(b) {
          x(a), H.trigger(q.default.KEY_SESSION_CLOSED, {
            data: null,
            error: "Error closing session (" + a.getSessionID() + ") " + b.name
          })
        })
      }

      function u(a, b) {
        ! function(b) {
          var c = a[b].ks,
            d = a[b].configs;
          navigator.requestMediaKeySystemAccess(c.systemString, d).then(function(a) {
            var b = "function" == typeof a.getConfiguration ? a.getConfiguration() : null,
              d = new o.default(c, b);
            d.mksa = a, H.trigger(q.default.KEY_SYSTEM_ACCESS_COMPLETE, {
              data: d
            })
          }).catch(function() {
            ++b < a.length ? u(a, b) : H.trigger(q.default.KEY_SYSTEM_ACCESS_COMPLETE, {
              error: "Key system access denied!"
            })
          })
        }(b)
      }

      function v(a) {
        var b = a.session;
        return b.removeEventListener("keystatuseschange", a), b.removeEventListener("message", a), b.close()
      }

      function w() {
        return {
          handleEvent: function(a) {
            switch (a.type) {
              case "encrypted":
                if (a.initData) {
                  var b = ArrayBuffer.isView(a.initData) ? a.initData.buffer : a.initData;
                  H.trigger(q.default.NEED_KEY, {
                    key: new i.default(b, a.initDataType)
                  })
                }
            }
          }
        }
      }

      function x(a) {
        for (var b = 0; b < D.length; b++)
          if (D[b] === a) {
            D.splice(b, 1);
            break
          }
      }

      function y(a, b, c) {
        var d = {
          session: a,
          initData: b,
          handleEvent: function(a) {
            switch (a.type) {
              case "keystatuseschange":
                H.trigger(q.default.KEY_STATUSES_CHANGED, {
                  data: this
                });
                break;
              case "message":
                var b = ArrayBuffer.isView(a.message) ? a.message.buffer : a.message;
                H.trigger(q.default.INTERNAL_KEY_MESSAGE, {
                  data: new m.default(this, b, void 0, a.messageType)
                })
            }
          },
          getSessionID: function() {
            return a.sessionId
          },
          getExpirationTime: function() {
            return a.expiration
          },
          getKeyStatuses: function() {
            return a.keyStatuses
          },
          getSessionType: function() {
            return c
          }
        };
        return a.addEventListener("keystatuseschange", d), a.addEventListener("message", d), a.closed.then(function() {
          x(d), I("DRM: Session closed.  SessionID = " + d.getSessionID()), H.trigger(q.default.KEY_SESSION_CLOSED, {
            data: d.getSessionID()
          })
        }), D.push(d), d
      }
      var z, A, B, C, D, E, F, G = this.context,
        H = a.eventBus,
        I = a.log;
      return z = {
        getAllInitData: e,
        requestKeySystemAccess: f,
        getKeySystem: d,
        selectKeySystem: h,
        setMediaElement: j,
        setServerCertificate: l,
        createKeySession: n,
        updateKeySession: p,
        loadKeySession: r,
        removeKeySession: s,
        closeKeySession: t,
        reset: c
      }, b(), z
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(110),
      g = d(f),
      h = a(128),
      i = d(h),
      j = a(122),
      k = d(j),
      l = a(123),
      m = d(l),
      n = a(125),
      o = d(n),
      p = a(13),
      q = d(p),
      r = a(10),
      s = d(r);
    e.__dashjs_factory_name = "ProtectionModel_21Jan2015", c.default = s.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    110: 110,
    122: 122,
    123: 123,
    125: 125,
    128: 128,
    13: 13
  }],
  116: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b() {
        D = null, E = null, F = null, G = null, H = [], J = (0, g.default)(y).getInstance(), I = v()
      }

      function c() {
        try {
          for (var a = 0; a < H.length; a++) p(H[a]);
          D && D.removeEventListener(B.needkey, I), z.trigger(s.default.TEARDOWN_COMPLETE)
        } catch (b) {
          z.trigger(s.default.TEARDOWN_COMPLETE, {
            error: "Error tearing down key sessions and MediaKeys! -- " + b.message
          })
        }
      }

      function d() {
        return E
      }

      function e() {
        for (var a = [], b = 0; b < H.length; b++) a.push(H[b].initData);
        return a
      }

      function f(a) {
        for (var b = !1, c = 0; c < a.length; c++)
          for (var d = a[c].ks.systemString, e = a[c].configs, f = null, g = null, h = 0; h < e.length; h++) {
            var i = e[h].audioCapabilities,
              j = e[h].videoCapabilities;
            if (i && 0 !== i.length) {
              f = [];
              for (var k = 0; k < i.length; k++) window[B.MediaKeys].isTypeSupported(d, i[k].contentType) && f.push(i[k])
            }
            if (j && 0 !== j.length) {
              g = [];
              for (var l = 0; l < j.length; l++) window[B.MediaKeys].isTypeSupported(d, j[l].contentType) && g.push(j[l])
            }
            if (!(!f && !g || f && 0 === f.length || g && 0 === g.length)) {
              b = !0;
              var m = new o.default(f, g),
                n = J.getKeySystemBySystemString(d);
              z.trigger(s.default.KEY_SYSTEM_ACCESS_COMPLETE, {
                data: new q.default(n, m)
              });
              break
            }
          }
        b || z.trigger(s.default.KEY_SYSTEM_ACCESS_COMPLETE, {
          error: "Key system access denied! -- No valid audio/video content configurations detected!"
        })
      }

      function h(a) {
        try {
          F = a.mediaKeys = new window[B.MediaKeys](a.keySystem.systemString), E = a.keySystem, G = a, D && w(), z.trigger(s.default.INTERNAL_KEY_SYSTEM_SELECTED)
        } catch (b) {
          z.trigger(s.default.INTERNAL_KEY_SYSTEM_SELECTED, {
            error: "Error selecting keys system (" + E.systemString + ")! Could not create MediaKeys -- TODO"
          })
        }
      }

      function j(a) {
        D !== a && (D && D.removeEventListener(B.needkey, I), D = a, D && (D.addEventListener(B.needkey, I), F && w()))
      }

      function l(a) {
        if (!E || !F || !G) throw new Error("Can not create sessions until you have selected a key system");
        var b = null;
        if (null !== G.ksConfiguration.videoCapabilities && G.ksConfiguration.videoCapabilities.length > 0 && (b = G.ksConfiguration.videoCapabilities[0]), null === b && null !== G.ksConfiguration.audioCapabilities && G.ksConfiguration.audioCapabilities.length > 0 && (b = G.ksConfiguration.audioCapabilities[0]), null === b) throw new Error("Can not create sessions for unknown content types.");
        var c = b.contentType,
          d = F.createSession(c, new Uint8Array(a)),
          e = x(d, a);
        d.addEventListener(B.error, e), d.addEventListener(B.message, e), d.addEventListener(B.ready, e), d.addEventListener(B.close, e), H.push(e), A("DRM: Session created.  SessionID = " + e.getSessionID()), z.trigger(s.default.KEY_SESSION_CREATED, {
          data: e
        })
      }

      function n(a, b) {
        var c = a.session;
        J.isClearKey(E) ? c.update(new Uint8Array(b.toJWK())) : c.update(new Uint8Array(b))
      }

      function p(a) {
        var b = a.session;
        b.removeEventListener(B.error, a), b.removeEventListener(B.message, a), b.removeEventListener(B.ready, a), b.removeEventListener(B.close, a);
        for (var c = 0; c < H.length; c++)
          if (H[c] === a) {
            H.splice(c, 1);
            break
          }
        b[B.release]()
      }

      function r() {}

      function t() {}

      function u() {}

      function v() {
        return {
          handleEvent: function(a) {
            switch (a.type) {
              case B.needkey:
                if (a.initData) {
                  var b = ArrayBuffer.isView(a.initData) ? a.initData.buffer : a.initData;
                  z.trigger(s.default.NEED_KEY, {
                    key: new i.default(b, "cenc")
                  })
                }
            }
          }
        }
      }

      function w() {
        var a = null,
          b = function() {
            D.removeEventListener("loadedmetadata", a), D[B.setMediaKeys](F), z.trigger(s.default.VIDEO_ELEMENT_SELECTED)
          };
        D.readyState >= 1 ? b() : (a = b.bind(this), D.addEventListener("loadedmetadata", a))
      }

      function x(a, b) {
        return {
          session: a,
          initData: b,
          getSessionID: function() {
            return this.session.sessionId
          },
          getExpirationTime: function() {
            return NaN
          },
          getSessionType: function() {
            return "temporary"
          },
          handleEvent: function(a) {
            switch (a.type) {
              case B.error:
                var b = "KeyError";
                z.trigger(s.default.KEY_ERROR, {
                  data: new k.default(this, b)
                });
                break;
              case B.message:
                var c = ArrayBuffer.isView(a.message) ? a.message.buffer : a.message;
                z.trigger(s.default.INTERNAL_KEY_MESSAGE, {
                  data: new m.default(this, c, a.destinationURL)
                });
                break;
              case B.ready:
                A("DRM: Key added."), z.trigger(s.default.KEY_ADDED);
                break;
              case B.close:
                A("DRM: Session closed.  SessionID = " + this.getSessionID()), z.trigger(s.default.KEY_SESSION_CLOSED, {
                  data: this.getSessionID()
                })
            }
          }
        }
      }
      var y = this.context,
        z = a.eventBus,
        A = a.log,
        B = a.api,
        C = void 0,
        D = void 0,
        E = void 0,
        F = void 0,
        G = void 0,
        H = void 0,
        I = void 0,
        J = void 0;
      return C = {
        getAllInitData: e,
        requestKeySystemAccess: f,
        getKeySystem: d,
        selectKeySystem: h,
        setMediaElement: j,
        createKeySession: l,
        updateKeySession: n,
        closeKeySession: p,
        setServerCertificate: r,
        loadKeySession: t,
        removeKeySession: u,
        reset: c
      }, b(), C
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(110),
      g = d(f),
      h = a(128),
      i = d(h),
      j = a(122),
      k = d(j),
      l = a(123),
      m = d(l),
      n = a(126),
      o = d(n),
      p = a(125),
      q = d(p),
      r = a(13),
      s = d(r),
      t = a(10),
      u = d(t);
    e.__dashjs_factory_name = "ProtectionModel_3Feb2014", c.default = u.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    110: 110,
    122: 122,
    123: 123,
    125: 125,
    126: 126,
    128: 128,
    13: 13
  }],
  117: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a, b) {
        var c = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(b)));
        a += "/?";
        for (var d = 0; d < c.kids.length; d++) a += c.kids[d] + "&";
        return a = a.substring(0, a.length - 1)
      }

      function b() {
        return "GET"
      }

      function c() {
        return "json"
      }

      function d(a) {
        if (!a.hasOwnProperty("keys")) return null;
        for (var b = [], c = 0; c < a.keys.length; c++) {
          var d = a.keys[c],
            e = d.kid.replace(/=/g, ""),
            f = d.k.replace(/=/g, "");
          b.push(new g.default(e, f))
        }
        return new i.default(b)
      }

      function e(a) {
        return String.fromCharCode.apply(null, new Uint8Array(a))
      }
      var f = void 0;
      return f = {
        getServerURLFromMessage: a,
        getHTTPMethod: b,
        getResponseType: c,
        getLicenseMessage: d,
        getErrorResponse: e
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(124),
      g = d(f),
      h = a(121),
      i = d(h),
      j = a(10),
      k = d(j);
    e.__dashjs_factory_name = "ClearKey", c.default = k.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    121: 121,
    124: 124
  }],
  118: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a) {
        return a
      }

      function b() {
        return "POST"
      }

      function c(a) {
        return f[a].responseType
      }

      function d(a, b) {
        return f[b].getLicenseMessage(a)
      }

      function e(a, b) {
        return f[b].getErrorResponse(a)
      }
      var f = {
          "com.widevine.alpha": {
            responseType: "json",
            getLicenseMessage: function(a) {
              return i.default.decodeArray(a.license)
            },
            getErrorResponse: function(a) {
              return a
            }
          },
          "com.microsoft.playready": {
            responseType: "arraybuffer",
            getLicenseMessage: function(a) {
              return a
            },
            getErrorResponse: function(a) {
              return String.fromCharCode.apply(null, new Uint8Array(a))
            }
          }
        },
        g = void 0;
      return g = {
        getServerURLFromMessage: a,
        getHTTPMethod: b,
        getResponseType: c,
        getLicenseMessage: d,
        getErrorResponse: e
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f),
      h = a(1),
      i = d(h);
    e.__dashjs_factory_name = "DRMToday", c.default = g.default.getSingletonFactory(e), b.exports = c.default
  }, {
    1: 1,
    10: 10
  }],
  119: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a) {
        return a
      }

      function b() {
        return "POST"
      }

      function c() {
        return "arraybuffer"
      }

      function d(a) {
        return a
      }

      function e(a) {
        return String.fromCharCode.apply(null, new Uint8Array(a))
      }
      var f = void 0;
      return f = {
        getServerURLFromMessage: a,
        getHTTPMethod: b,
        getResponseType: c,
        getLicenseMessage: d,
        getErrorResponse: e
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f);
    e.__dashjs_factory_name = "PlayReady", c.default = g.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10
  }],
  120: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a) {
        return a
      }

      function b() {
        return "POST"
      }

      function c() {
        return "arraybuffer"
      }

      function d(a) {
        return a
      }

      function e(a) {
        return String.fromCharCode.apply(null, new Uint8Array(a))
      }
      var f = void 0;
      return f = {
        getServerURLFromMessage: a,
        getHTTPMethod: b,
        getResponseType: c,
        getLicenseMessage: d,
        getErrorResponse: e
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f);
    e.__dashjs_factory_name = "Widevine", c.default = g.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10
  }],
  121: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function() {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
          }
        }
        return function(b, c, d) {
          return c && a(b.prototype, c), d && a(b, d), b
        }
      }(),
      f = function() {
        function a(b, c) {
          if (d(this, a), c && "persistent" !== c && "temporary" !== c) throw new Error("Invalid ClearKey key set type!  Must be one of 'persistent' or 'temporary'");
          this.keyPairs = b, this.type = c
        }
        return e(a, [{
          key: "toJWK",
          value: function() {
            var a, b = this.keyPairs.length,
              c = {
                keys: []
              };
            for (a = 0; a < b; a++) {
              var d = {
                kty: "oct",
                alg: "A128KW",
                kid: this.keyPairs[a].keyID,
                k: this.keyPairs[a].key
              };
              c.keys.push(d)
            }
            this.type && (c.type = this.type);
            var e = JSON.stringify(c),
              f = e.length,
              g = new ArrayBuffer(f),
              h = new Uint8Array(g);
            for (a = 0; a < f; a++) h[a] = e.charCodeAt(a);
            return g
          }
        }]), a
      }();
    c.default = f, b.exports = c.default
  }, {}],
  122: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a(b, c) {
      d(this, a), this.sessionToken = b, this.error = c
    };
    c.default = e, b.exports = c.default
  }, {}],
  123: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a(b, c, e, f) {
      d(this, a), this.sessionToken = b, this.message = c, this.defaultURL = e, this.messageType = f ? f : "license-request"
    };
    c.default = e, b.exports = c.default
  }, {}],
  124: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a(b, c) {
      d(this, a), this.keyID = b, this.key = c
    };
    c.default = e, b.exports = c.default
  }, {}],
  125: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a(b, c) {
      d(this, a), this.keySystem = b, this.ksConfiguration = c
    };
    c.default = e, b.exports = c.default
  }, {}],
  126: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a(b, c, e, f, g) {
      d(this, a), this.initDataTypes = ["cenc"], b && b.length && (this.audioCapabilities = b), c && c.length && (this.videoCapabilities = c), this.distinctiveIdentifier = e, this.persistentState = f, this.sessionTypes = g
    };
    c.default = e, b.exports = c.default
  }, {}],
  127: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a(b, c) {
      d(this, a), this.contentType = b, this.robustness = c
    };
    c.default = e, b.exports = c.default
  }, {}],
  128: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a(b, c) {
      d(this, a), this.initData = b, this.initDataType = c
    };
    c.default = e, b.exports = c.default
  }, {}],
  129: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a, b) {
        var c = b.droppedVideoFrames - e;
        e = b.droppedVideoFrames;
        var g = b.totalVideoFrames - f;
        f = b.totalVideoFrames, d[a] ? (d[a].droppedVideoFrames += c, d[a].totalVideoFrames += g) : d[a] = {
          droppedVideoFrames: c,
          totalVideoFrames: g
        }
      }

      function b() {
        return d
      }

      function c(a) {
        d = [], e = a.droppedVideoFrames, f = a.totalVideoFrames
      }
      var d = [],
        e = 0,
        f = 0;
      return {
        push: a,
        getFrameHistory: b,
        reset: c
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f);
    e.__dashjs_factory_name = "DroppedFramesHistory";
    var h = g.default.getClassFactory(e);
    c.default = h, b.exports = c.default
  }, {
    10: 10
  }],
  130: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b() {
        return n.mediaInfo.streamInfo
      }

      function c() {
        return n.mediaInfo
      }

      function d() {
        return n
      }

      function e() {
        return p
      }

      function f() {
        return n.mediaInfo.streamInfo.manifestInfo
      }

      function g() {
        return o
      }

      function h() {
        return q
      }

      function i() {
        return r
      }

      function j() {
        return s
      }

      function k() {
        return t
      }

      function l() {
        return u
      }
      var m = void 0,
        n = a.streamProcessor.getCurrentRepresentationInfo(),
        o = a.streamProcessor,
        p = a.currentValue,
        q = a.playbackIndex,
        r = a.switchHistory,
        s = a.droppedFramesHistory,
        t = a.currentRequest,
        u = a.hasRichBuffer;
      return m = {
        getCurrentValue: e,
        getManifestInfo: f,
        getMediaInfo: c,
        getPlaybackIndex: h,
        getDroppedFramesHistory: j,
        getCurrentRequest: k,
        getSwitchHistory: i,
        getStreamInfo: b,
        getStreamProcessor: g,
        getTrackInfo: d,
        hasRichBuffer: l
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f);
    e.__dashjs_factory_name = "RulesContext", c.default = g.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10
  }],
  131: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        j = {}
      }

      function b(a) {
        a && a.abrRulesCollection && (j[n] = a.abrRulesCollection)
      }

      function c(a, b, c, d, f, g) {
        var h, j, k = {},
          l = {},
          m = a.length,
          n = m,
          o = e(b, d),
          p = function(a) {
            var b, e, f;
            if (a.value !== i.default.NO_CHANGE) {
              var h = g(k[a.priority], a.value);
              h !== k[a.priority] && (k[a.priority] = h, l[a.priority] = a.reason)
            }--m || (k[i.default.WEAK] !== i.default.NO_CHANGE && (f = i.default.WEAK, b = k[i.default.WEAK], e = l[i.default.WEAK]), k[i.default.DEFAULT] !== i.default.NO_CHANGE && (f = i.default.DEFAULT, b = k[i.default.DEFAULT], e = l[i.default.DEFAULT]), k[i.default.STRONG] !== i.default.NO_CHANGE && (f = i.default.STRONG, b = k[i.default.STRONG], e = l[i.default.STRONG]), f != i.default.STRONG && f != i.default.WEAK && (f = i.default.DEFAULT), c(void 0 !== b ? {
              value: b,
              confidence: f,
              reason: e
            } : {
              value: d,
              confidence: f,
              reason: {
                name: "NO_CHANGE"
              }
            }))
          };
        for (k[i.default.STRONG] = i.default.NO_CHANGE, k[i.default.WEAK] = i.default.NO_CHANGE, k[i.default.DEFAULT] = i.default.NO_CHANGE, j = 0; j < n; j++) h = a[j], h.execute(o, p)
      }

      function d() {
        var a, b, c = j[n],
          d = (c.getRules(k.default.QUALITY_SWITCH_RULES) || []).concat(c.getRules(k.default.ABANDON_FRAGMENT_RULES) || []),
          e = d.length;
        for (b = 0; b < e; b++) a = d[b], "function" == typeof a.reset && a.reset();
        j = {}
      }

      function e(a, b) {
        return (0, g.default)(f).create({
          streamProcessor: a,
          currentValue: b
        })
      }
      var f = this.context,
        h = void 0,
        j = void 0;
      return h = {
        initialize: a,
        setConfig: b,
        applyRules: c,
        reset: d
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(130),
      g = d(f),
      h = a(132),
      i = d(h),
      j = a(134),
      k = d(j),
      l = a(10),
      m = d(l),
      n = 0;
    e.__dashjs_factory_name = "RulesController";
    var o = m.default.getSingletonFactory(e);
    o.ABR_RULE = n, c.default = o, b.exports = c.default
  }, {
    10: 10,
    130: 130,
    132: 132,
    134: 134
  }],
  132: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a, b) {
      var c = void 0 === a ? h : a,
        d = void 0 === b ? null : b,
        e = {
          value: c,
          reason: d
        };
      return e
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f),
      h = -1;
    e.__dashjs_factory_name = "SwitchRequest";
    var i = g.default.getClassFactory(e);
    i.NO_CHANGE = h, c.default = i, b.exports = c.default
  }, {
    10: 10
  }],
  133: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a) {
        d[a.oldValue] || (d[a.oldValue] = {
          noDrops: 0,
          drops: 0,
          dropSize: 0
        });
        var b = a.newValue - a.oldValue,
          c = b < 0 ? 1 : 0,
          f = c ? -b : 0,
          g = c ? 0 : 1;
        if (d[a.oldValue].drops += c, d[a.oldValue].dropSize += f, d[a.oldValue].noDrops += g, e.push({
            idx: a.oldValue,
            noDrop: g,
            drop: c,
            dropSize: f
          }), e.length > h) {
          var i = e.shift();
          d[i.idx].drops -= i.drop, d[i.idx].dropSize -= i.dropSize, d[i.idx].noDrops -= i.noDrop
        }
      }

      function b() {
        return d
      }

      function c() {
        d = [], e = []
      }
      var d = [],
        e = [];
      return {
        push: a,
        getSwitchRequests: b,
        reset: c
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f),
      h = 8;
    e.__dashjs_factory_name = "SwitchRequestHistory";
    var i = g.default.getClassFactory(e);
    c.default = i, b.exports = c.default
  }, {
    10: 10
  }],
  134: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        l = [], n = [];
        var a = (0, w.default)(h).getInstance(),
          b = (0, y.default)(h).getInstance(),
          c = (0, u.default)(h).getInstance();
        c.getBufferOccupancyABREnabled() ? (l.push((0, q.default)(h).create({
          metricsModel: a,
          dashMetrics: (0, y.default)(h).getInstance()
        })), n.push((0, s.default)(h).create({
          metricsModel: a,
          dashMetrics: (0, y.default)(h).getInstance()
        }))) : (l.push((0, g.default)(h).create({
          metricsModel: a,
          dashMetrics: b
        })), l.push((0, i.default)(h).create({
          metricsModel: a
        })), l.push((0, o.default)(h).create()), l.push((0, m.default)(h).create()), n.push((0, k.default)(h).create()))
      }

      function b(a) {
        switch (a) {
          case D:
            return l;
          case E:
            return n;
          default:
            return null
        }
      }

      function c(a) {
        return a.filter(function(a) {
          return a.value > C.default.NO_CHANGE
        })
      }

      function d(a) {
        if (0 !== a.length) return a.reduce(function(a, b) {
          return a.value < b.value ? a : b
        })
      }

      function e(a) {
        var b = l.map(function(b) {
            return b.getMaxIndex(a)
          }),
          e = c(b),
          f = d(e);
        return f || (0, C.default)(h).create()
      }

      function f(a) {
        var b = n.map(function(b) {
            return b.shouldAbandon(a)
          }),
          e = c(b),
          f = d(e);
        return f || (0, C.default)(h).create()
      }
      var h = this.context,
        j = void 0,
        l = void 0,
        n = void 0;
      return j = {
        initialize: a,
        getRules: b,
        getMaxQuality: e,
        shouldAbandonFragment: f
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(141),
      g = d(f),
      h = a(139),
      i = d(h),
      j = a(135),
      k = d(j),
      l = a(138),
      m = d(l),
      n = a(140),
      o = d(n),
      p = a(137),
      q = d(p),
      r = a(136),
      s = d(r),
      t = a(102),
      u = d(t),
      v = a(103),
      w = d(v),
      x = a(17),
      y = d(x),
      z = a(10),
      A = d(z),
      B = a(132),
      C = d(B),
      D = "qualitySwitchRules",
      E = "abandonFragmentRules";
    e.__dashjs_factory_name = "ABRRulesCollection";
    var F = A.default.getSingletonFactory(e);
    F.QUALITY_SWITCH_RULES = D, F.ABANDON_FRAGMENT_RULES = E, c.default = F, b.exports = c.default
  }, {
    10: 10,
    102: 102,
    103: 103,
    132: 132,
    135: 135,
    136: 136,
    137: 137,
    138: 138,
    139: 139,
    140: 140,
    141: 141,
    17: 17
  }],
  135: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        p = {}, r = {}, s = [], t = (0, i.default)(n).getInstance(), u = (0, k.default)(n).getInstance(), v = (0, m.default)(n).getInstance()
      }

      function b(a, b) {
        p[a] = p[a] || {}, p[a][b] = p[a][b] || {}
      }

      function c(a, b) {
        s[a] = s[a] || [], s[a].push(b)
      }

      function d(a) {
        var d = a.getMediaInfo(),
          f = d.type,
          i = a.getCurrentRequest(),
          k = (0, g.default)(n).create(g.default.NO_CHANGE, {
            name: e.__dashjs_factory_name
          });
        if (!isNaN(i.index)) {
          b(f, i.index);
          var m = t.getStableBufferTime(),
            q = u.getCurrentBufferLevel(v.getReadOnlyMetricsFor(f));
          if (q > m) return k;
          var w = p[f][i.index];
          if (null === w || null === i.firstByteDate || r.hasOwnProperty(w.id)) return k;
          if (void 0 === w.firstByteTime && (s[f] = [], w.firstByteTime = i.firstByteDate.getTime(), w.segmentDuration = i.duration, w.bytesTotal = i.bytesTotal, w.id = i.index), w.bytesLoaded = i.bytesLoaded, w.elapsedTime = (new Date).getTime() - w.firstByteTime, w.bytesLoaded > 0 && w.elapsedTime > 0 && c(f, Math.round(8 * w.bytesLoaded / w.elapsedTime)), s[f].length >= l && w.elapsedTime > j && w.bytesLoaded < w.bytesTotal) {
            var x = s[f].reduce(function(a, b) {
              return a + b
            }, 0);
            if (w.measuredBandwidthInKbps = Math.round(x / s[f].length), w.estimatedTimeOfDownload = +(8 * w.bytesTotal / w.measuredBandwidthInKbps / 1e3).toFixed(2), w.estimatedTimeOfDownload < w.segmentDuration * h || 0 === a.getTrackInfo().quality) return k;
            if (!r.hasOwnProperty(w.id)) {
              var y = a.getStreamProcessor().getABRController(),
                z = w.bytesTotal - w.bytesLoaded,
                A = y.getBitrateList(d),
                B = y.getQualityForBitrate(d, w.measuredBandwidthInKbps * t.getBandwidthSafetyFactor()),
                C = w.bytesTotal * A[B].bitrate / A[y.getQualityFor(f, d.streamInfo)].bitrate;
              z > C && (k.value = B, k.reason.throughput = w.measuredBandwidthInKbps, k.reason.fragmentID = w.id, r[w.id] = w, o("AbandonRequestsRule ( ", f, "frag id", w.id, ") is asking to abandon and switch to quality to ", B, " measured bandwidth was", w.measuredBandwidthInKbps), delete p[f][w.id])
            }
          } else w.bytesLoaded === w.bytesTotal && delete p[f][w.id]
        }
        return k
      }

      function f() {
        a()
      }
      var h = 1.8,
        j = 500,
        l = 5,
        n = this.context,
        o = (0, q.default)(n).getInstance().log,
        p = void 0,
        r = void 0,
        s = void 0,
        t = void 0,
        u = void 0,
        v = void 0,
        w = {
          shouldAbandon: d,
          reset: f
        };
      return a(), w
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(132),
      g = d(f),
      h = a(102),
      i = d(h),
      j = a(17),
      k = d(j),
      l = a(103),
      m = d(l),
      n = a(10),
      o = d(n),
      p = a(8),
      q = d(p);
    e.__dashjs_factory_name = "AbandonRequestsRule", c.default = o.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    102: 102,
    103: 103,
    132: 132,
    17: 17,
    8: 8
  }],
  136: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b() {
        s = {}, t = (0, i.default)(l).getInstance()
      }

      function c(a, b, c) {
        s[a] = {
          index: b,
          quality: c
        }
      }

      function d(a, b, c) {
        var d = s[a];
        return !d || (b !== d.index || c < d.quality)
      }

      function f(a) {
        var b = a.getMediaInfo(),
          f = b.type,
          h = q.getReadOnlyMetricsFor(f),
          i = a.getCurrentRequest(),
          m = (0, g.default)(l).create(g.default.NO_CHANGE, {
            name: e.__dashjs_factory_name
          });
        if (0 === h.BolaState.length) return n("WARNING: executing BolaAbandonRule before initializing BolaRule"), s[f] = null, m;
        var r = h.BolaState[0]._s,
          t = i.index,
          u = i.quality;
        if (isNaN(t) || 0 === u || !d(f, t, u) || !i.firstByteDate) return m;
        var v = Date.now(),
          w = v - i.firstByteDate.getTime(),
          x = i.bytesLoaded,
          y = i.bytesTotal,
          z = y - x,
          A = i.duration,
          B = p.getCurrentBufferLevel(h) ? p.getCurrentBufferLevel(h) : 0,
          C = B + r.placeholderBuffer,
          D = 8 * x / (.001 * w),
          E = r.bandwidthSafetyFactor * D,
          F = .001 * (i.firstByteDate.getTime() - i.requestStartDate.getTime());
        F < .001 * k && (F = .001 * k);
        var G = F + 8 * y / E,
          H = "";
        o.default.BOLA_DEBUG && (H = "index=" + t + " quality=" + u + " bytesLoaded/bytesTotal=" + x + "/" + y + " bufferLevel=" + B + " timeSince1stByte=" + (w / 1e3).toFixed(3) + " estThroughput=" + (E / 1e6).toFixed(3) + " latency=" + F.toFixed(3));
        var I = y * r.bitrates[0] / r.bitrates[u],
          J = z - F * E / 8;
        if (J < 1 && (J = 1), w < j || z <= I || B > r.bufferTarget || J <= I || G <= A) return m;
        var K = C - F;
        K < 0 && (K = 0);
        for (var L = 0; L + 1 < u && y * r.bitrates[L + 1] / r.bitrates[u] < J;) ++L;
        var M = u;
        if (r.state === o.default.BOLA_STATE_STARTUP) {
          M = 0;
          for (var N = 0; N <= L && (I = y * r.bitrates[N] / r.bitrates[u], !(8 * I / A > E)); ++N) M = N
        } else
          for (var O = (r.Vp * (r.utilities[u] + r.gp) - K) / J, N = 0; N <= L; ++N) {
            I = y * r.bitrates[N] / r.bitrates[u];
            var P = (r.Vp * (r.utilities[N] + r.gp) - K) / I;
            P > O && (M = N, O = P)
          }
        var Q = r.rebufferSafetyFactor * D * (B - F) / 8;
        if (M === u && J > Q && (M = L), M === u) return m;
        for (; M > 0 && (I = y * r.bitrates[M] / r.bitrates[u], !(I <= Q));) --M;
        var R = NaN;
        if (M > 0) {
          var S = r.utilities[M],
            T = r.utilities[M - 1],
            P = r.bitrates[M],
            U = r.bitrates[M - 1];
          R = r.Vp * ((P * T - U * S) / (P - U) + r.gp)
        } else {
          var S = r.utilities[0],
            T = r.utilities[1],
            P = r.bitrates[0],
            U = r.bitrates[1];
          R = r.Vp * ((P * T - U * S) / (P - U) + r.gp), R -= A
        }
        return C > R && (r.placeholderBuffer = R - B, r.placeholderBuffer < 0 && (r.placeholderBuffer = 0)), r.lastQuality = M, q.updateBolaState(f, r), o.default.BOLA_DEBUG && n("BolaDebug " + f + " BolaAbandonRule abandon to " + M + " - " + H), c(f, t, u), m.value = M, m.reason.state = r.state, m.reason.throughput = D, m.reason.bufferLevel = B, m.reason.bytesLoaded = i.bytesLoaded, m.reason.bytesTotal = i.bytesTotal, m.reason.elapsedTimeMs = w, m
      }

      function h() {
        s = {}
      }
      var j = 500,
        k = 200,
        l = this.context,
        n = (0, m.default)(l).getInstance().log,
        p = a.dashMetrics,
        q = a.metricsModel,
        r = void 0,
        s = void 0,
        t = void 0;
      return r = {
        shouldAbandon: f,
        reset: h
      }, b(), r
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(132),
      g = d(f),
      h = a(102),
      i = d(h),
      j = a(10),
      k = d(j),
      l = a(8),
      m = d(l),
      n = a(137),
      o = d(n);
    e.__dashjs_factory_name = "BolaAbandonRule", c.default = k.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    102: 102,
    132: 132,
    137: 137,
    8: 8
  }],
  137: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b() {
        O = {}, P = {}, Q = {}, R = [], S = (0, k.default)(I).getInstance(), T = (0, m.default)(I).getInstance(), U = (0, p.default)(I).getInstance(), M.on(t.default.BUFFER_EMPTY, q, N), M.on(t.default.PLAYBACK_SEEKING, s, N), M.on(t.default.PERIOD_SWITCH_STARTED, u, N), M.on(t.default.MEDIA_FRAGMENT_LOADED, D, N)
      }

      function c(a) {
        return a.map(function(a) {
          return Math.log(a)
        })
      }

      function d(a, b, d, e) {
        var f = NaN;
        if (e ? (f = 0, e.forEach(function(a, b) {
            a > e[f] && (f = b)
          })) : (e = c(d), f = e.length - 1), 0 === f) return null;
        var g = 1 - e[0] + (e[f] - e[0]) / (b / a - 1),
          h = a / (e[0] + g - 1);
        return {
          utilities: e,
          gp: g,
          Vp: h
        }
      }

      function f(a) {
        var b = {},
          c = a.getMediaInfo(),
          e = a.getStreamProcessor(),
          f = a.getStreamInfo(),
          g = a.getTrackInfo(),
          h = e.isDynamic(),
          i = f.manifestInfo.duration,
          j = g.fragmentDuration,
          k = c.bitrateList.map(function(a) {
            return a.bandwidth
          }),
          l = d(A, B, k, null);
        if (null === l) return b.state = w, b;
        if (b.state = x, b.bitrates = k, b.utilities = l.utilities, b.Vp = l.Vp, b.gp = l.gp, b.isDynamic = h, b.movieDuration = i, b.fragmentDuration = j, b.bandwidthSafetyFactor = S.getBandwidthSafetyFactor(), b.rebufferSafetyFactor = C, b.bufferTarget = S.getStableBufferTime(), b.lastQuality = 0, b.placeholderBuffer = 0, b.throughputCount = h ? G : H, z) {
          for (var m = "", n = 0; n < k.length; ++n) {
            var o = l.utilities[n],
              p = k[n],
              q = 0;
            if (n > 0) {
              var r = l.utilities[n - 1],
                s = k[n - 1];
              q = l.Vp * ((r * p - o * s) / (p - s) + l.gp)
            }
            var t = l.Vp * (o + l.gp);
            m += "\n" + n + ":" + (1e-6 * k[n]).toFixed(3) + "Mbps " + q.toFixed(3) + "/" + t.toFixed(3)
          }
          J("BolaDebug " + c.type + " bitrates" + m)
        }
        return b
      }

      function h(a, b) {
        for (var c = a.bitrates.length, d = NaN, e = NaN, f = 0; f < c; ++f) {
          var g = (a.Vp * (a.utilities[f] + a.gp) - b) / a.bitrates[f];
          (isNaN(e) || g >= e) && (e = g, d = f)
        }
        return d
      }

      function i(a, b) {
        for (var c = K.getHttpRequests(a), d = [], e = c.length - 1; e >= 0 && d.length < b; --e) {
          var f = c[e];
          f.type === n.HTTPRequest.MEDIA_SEGMENT_TYPE && f._tfinish && f.tresponse && f.trace && d.push(f)
        }
        return d
      }

      function j(a, b, c) {
        var d = i(a, b);
        if (0 === d.length) return 0;
        for (var e = 0, f = "", g = 0; g < d.length; ++g) {
          var h = .001 * (d[g]._tfinish.getTime() - d[g].trequest.getTime()),
            j = 8 * d[g].trace.reduce(function(a, b) {
              return a + b.b[0]
            }, 0);
          z && (f += " " + (1e-6 * j).toFixed(3) + "/" + h.toFixed(3) + "=" + (1e-6 * j / h).toFixed(3) + "Mbps"), e += h / j
        }
        return z && J("BolaDebug " + c + " BolaRule recent throughput = " + (d.length / (1e6 * e)).toFixed(3) + "Mbps:" + f), d.length / e
      }

      function l(a, b) {
        var c = 0;
        return a.bitrates.some(function(a, d) {
          return a > b || (c = d, !1)
        }), c
      }

      function o(a, b) {
        var c = Date.now(),
          d = O[b],
          e = Q[b],
          f = NaN;
        if (O[b] = c, Q[b] = !1, !e) {
          var g = i(a, 1);
          g.length > 0 && (f = g[0]._tfinish.getTime(), f > c && (f = c))
        }
        var h = 0;
        return h = e || d > f ? c - d : c - f, isNaN(h) || h <= 0 ? 0 : .001 * h
      }

      function q() {
        z && J("BolaDebug BUFFER_EMPTY"), R.forEach(function(a) {
          var b = L.getReadOnlyMetricsFor(a);
          if (0 !== b.BolaState.length) {
            var c = b.BolaState[0]._s;
            c.state === y && (c.placeholderBuffer = 0, L.updateBolaState(a, c))
          }
        })
      }

      function s(a) {
        z && J("BolaDebug PLAYBACK_SEEKING " + a.seekTime.toFixed(3)), R.forEach(function(a) {
          var b = L.getReadOnlyMetricsFor(a);
          if (0 !== b.BolaState.length) {
            var c = b.BolaState[0]._s;
            c.state !== w && (c.state = x), L.updateBolaState(a, c)
          }
        }), P = {}, Q = {}
      }

      function u() {}

      function D(a) {
        if (a && a.chunk && a.chunk.mediaInfo) {
          var b = a.chunk.mediaInfo.type,
            c = a.chunk.start;
          void 0 === b || isNaN(c) || (c <= P[b] ? Q[b] = !0 : (Q[b] = !1, P[b] = c))
        }
      }

      function E(a) {
        var b = a.getStreamProcessor();
        b.getScheduleController().setTimeToLoadDelay(0);
        var c = (0, g.default)(I).create(g.default.NO_CHANGE, {
            name: e.__dashjs_factory_name
          }),
          d = a.getMediaInfo(),
          i = d.type,
          k = L.getReadOnlyMetricsFor(i);
        if (0 === k.BolaState.length) {
          z && J("BolaDebug " + i + "\nBolaDebug " + i + " BolaRule for state=- fragmentStart=" + U.getIndexHandlerTime(a.getStreamProcessor()).toFixed(3));
          var m = f(a);
          L.updateBolaState(i, m);
          var n = 0;
          if (m.state !== w) {
            R.push(i);
            var p = j(k, m.throughputCount, i);
            if (0 === p) return z && J("BolaDebug " + i + " BolaRule quality unchanged for INITIALIZE"), c;
            n = l(m, p * m.bandwidthSafetyFactor), m.lastQuality = n, c.value = n, c.reason.state = m.state, c.reason.throughput = p
          }
          return z && J("BolaDebug " + i + " BolaRule quality " + n + " for INITIALIZE"), c
        }
        var q = k.BolaState[0]._s;
        if (q.state === w) return z && J("BolaDebug " + i + " BolaRule quality 0 for ONE_BITRATE"), c;
        var r = q.bitrates,
          s = q.utilities;
        z && J("BolaDebug " + i + "\nBolaDebug " + i + " EXECUTE BolaRule for state=" + q.state + " fragmentStart=" + U.getIndexHandlerTime(a.getStreamProcessor()).toFixed(3));
        var t = K.getCurrentBufferLevel(k) ? K.getCurrentBufferLevel(k) : 0,
          u = j(k, q.throughputCount, i);
        t <= .1 && (q.placeholderBuffer = 0);
        var v = o(k, i);
        v > 0 && (q.placeholderBuffer += v), q.placeholderBuffer < 0 && (q.placeholderBuffer = 0);
        var A = t + q.placeholderBuffer,
          B = h(q, A);
        if (z && J("BolaDebug " + i + " BolaRule bufferLevel=" + t.toFixed(3) + "(+" + q.placeholderBuffer.toFixed(3) + "=" + A.toFixed(3) + ") recentThroughput=" + (1e-6 * u).toFixed(3) + " tentativeQuality=" + B), q.state === x) {
          var n = l(q, u * q.bandwidthSafetyFactor);
          if (t > q.fragmentDuration / C) {
            q.state = y;
            for (var D = 0, E = 0; E < n; ++E) {
              var F = q.Vp * (q.gp + (r[n] * s[E] - r[E] * s[n]) / (r[n] - r[E]));
              F > D && (D = F)
            }
            D > t && (q.placeholderBuffer = D - t)
          }
          return z && J("BolaDebug " + i + " BolaRule quality " + n + " for STARTUP"), q.lastQuality = n, L.updateBolaState(i, q), c.value = n, c.reason.state = x, c.reason.throughput = u, c
        }
        if (B > q.lastQuality) {
          var n = l(q, u);
          B > n && (n < q.lastQuality && (n = q.lastQuality), B = n)
        }
        if (u > 0)
          for (var G = C * u * t / q.fragmentDuration; B > 0 && r[B] > G;) --B;
        var H = 0,
          M = q.Vp * (s[B] + q.gp);
        return H = A - M, H > 0 && (H > q.placeholderBuffer ? (H -= q.placeholderBuffer, q.placeholderBuffer = 0) : (q.placeholderBuffer -= H, H = 0)), H > 0 ? B === r.length - 1 ? H = 0 : b.getScheduleController().setTimeToLoadDelay(1e3 * H) : H = 0, q.lastQuality = B, L.updateBolaState(i, q), c.value = B, c.reason.state = q.state, c.reason.throughput = u, c.reason.bufferLevel = t, z && J("BolaDebug " + i + " BolaRule quality " + B + " delay=" + H.toFixed(3) + " for STEADY"), c
      }

      function F() {
        M.off(t.default.BUFFER_EMPTY, q, N), M.off(t.default.PLAYBACK_SEEKING, s, N), M.off(t.default.PERIOD_SWITCH_STARTED, u, N), M.off(t.default.MEDIA_FRAGMENT_LOADED, D, N), b()
      }
      var G = 2,
        H = 3,
        I = this.context,
        J = (0, v.default)(I).getInstance().log,
        K = a.dashMetrics,
        L = a.metricsModel,
        M = (0, r.default)(I).getInstance(),
        N = void 0,
        O = void 0,
        P = void 0,
        Q = void 0,
        R = void 0,
        S = void 0,
        T = void 0,
        U = void 0;
      return N = {
        getMaxIndex: E,
        reset: F
      }, b(), N
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(132),
      g = d(f),
      h = a(10),
      i = d(h),
      j = a(102),
      k = d(j),
      l = a(69),
      m = d(l),
      n = a(180),
      o = a(15),
      p = d(o),
      q = a(9),
      r = d(q),
      s = a(13),
      t = d(s),
      u = a(8),
      v = d(u),
      w = 0,
      x = 1,
      y = 2,
      z = !1,
      A = 10,
      B = 30,
      C = .5;
    e.__dashjs_factory_name = "BolaRule";
    var D = i.default.getClassFactory(e);
    D.BOLA_STATE_ONE_BITRATE = w, D.BOLA_STATE_STARTUP = x, D.BOLA_STATE_STEADY = y, D.BOLA_DEBUG = z, c.default = D, b.exports = c.default
  }, {
    10: 10,
    102: 102,
    13: 13,
    132: 132,
    15: 15,
    180: 180,
    69: 69,
    8: 8,
    9: 9
  }],
  138: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a) {
        var f = a.getDroppedFramesHistory();
        if (f) {
          for (var g = f.getFrameHistory(), h = 0, j = 0, k = i.default.NO_CHANGE, l = 1; l < g.length; l++)
            if (g[l] && (h = g[l].droppedVideoFrames, j = g[l].totalVideoFrames, j > e && h / j > d)) {
              k = l - 1, c("DroppedFramesRule, index: " + k + " Dropped Frames: " + h + " Total Frames: " + j);
              break
            }
          return (0, i.default)(b).create(k, {
            droppedFrames: h
          })
        }
        return (0, i.default)(b).create()
      }
      var b = this.context,
        c = (0, k.default)(b).getInstance().log,
        d = .15,
        e = 375;
      return {
        getMaxIndex: a
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f),
      h = a(132),
      i = d(h),
      j = a(8),
      k = d(j);
    e.__dashjs_factory_name = "DroppedFramesRule";
    var l = g.default.getClassFactory(e);
    c.default = l, b.exports = c.default
  }, {
    10: 10,
    132: 132,
    8: 8
  }],
  139: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b() {
        p = {}, r = 0, s = 1e3, l.on(k.default.PLAYBACK_SEEKING, e, n)
      }

      function c(a) {
        var b = (new Date).getTime(),
          c = a.getMediaInfo().type,
          e = m.getReadOnlyMetricsFor(c),
          f = e.BufferState.length > 0 ? e.BufferState[e.BufferState.length - 1] : null,
          i = (0, q.default)(h).create();
        return b - r < s || null === f ? i : (d(c, f.state), f.state === g.default.BUFFER_EMPTY && void 0 !== p[c].firstBufferLoadedEvent && (j("Switch to index 0; buffer is empty."), i.value = 0, i.reason = "InsufficientBufferRule: Buffer is empty"), r = b, i)
      }

      function d(a, b) {
        p[a] = p[a] || {}, p[a].state = b, b !== g.default.BUFFER_LOADED || p[a].firstBufferLoadedEvent || (p[a].firstBufferLoadedEvent = !0)
      }

      function e() {
        p = {}
      }

      function f() {
        l.off(k.default.PLAYBACK_SEEKING, e, n), p = {}, r = 0
      }
      var h = this.context,
        j = (0, o.default)(h).getInstance().log,
        l = (0, i.default)(h).getInstance(),
        m = a.metricsModel,
        n = void 0,
        p = void 0,
        r = void 0,
        s = void 0;
      return n = {
        getMaxIndex: c,
        reset: f
      }, b(), n
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(64),
      g = d(f),
      h = a(9),
      i = d(h),
      j = a(13),
      k = d(j),
      l = a(10),
      m = d(l),
      n = a(8),
      o = d(n),
      p = a(132),
      q = d(p);
    e.__dashjs_factory_name = "InsufficientBufferRule", c.default = m.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    13: 13,
    132: 132,
    64: 64,
    8: 8,
    9: 9
  }],
  140: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a) {
        for (var f = a.getSwitchHistory(), g = f.getSwitchRequests(), h = 0, i = 0, j = 0, l = (0, k.default)(b).create(), m = 0; m < g.length; m++)
          if (void 0 !== g[m] && (h += g[m].drops, i += g[m].noDrops, j += g[m].dropSize, h + i >= e && h / i > d)) {
            l.value = m > 0 ? m - 1 : 0, l.reason = {
              index: l.value,
              drops: h,
              noDrops: i,
              dropSize: j
            }, c("Switch history rule index: " + l.value + " samples: " + (h + i) + " drops: " + h);
            break
          }
        return l
      }
      var b = this.context,
        c = (0, i.default)(b).getInstance().log,
        d = .075,
        e = 6;
      return {
        getMaxIndex: a
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f),
      h = a(8),
      i = d(h),
      j = a(132),
      k = d(j);
    e.__dashjs_factory_name = "SwitchRequest";
    var l = g.default.getClassFactory(e);
    c.default = l, b.exports = c.default
  }, {
    10: 10,
    132: 132,
    8: 8
  }],
  141: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b() {
        D = [], E = [], F = (0, k.default)(z).getInstance()
      }

      function c(a, b) {
        D[a] = D[a] || [], D[a].push(b)
      }

      function d(a, b) {
        if (E[a] || (E[a] = []), E[a].push(b), E[a].length > t) return E[a].shift()
      }

      function e(a) {
        var b = void 0;
        return E[a] && E[a].length > 0 && (b = E[a].reduce(function(a, b) {
          return a + b
        }) / E[a].length), b
      }

      function f(a, b) {
        var c = Math.min(D[a].length, b ? q : s),
          d = D[a].slice(c * -1, D[a].length);
        return d.length > 1 && d.reduce(function(a, b) {
          return (a * y <= b || a >= b * x) && c++, b
        }), c = Math.min(D[a].length, c), D[a].slice(c * -1, D[a].length)
      }

      function h(a, b) {
        var c = f(a, b),
          d = 0;
        if (c.length > 0) {
          var e = c.reduce(function(a, b) {
            return a + b
          }, 0);
          d = e / c.length
        }
        return D[a].length >= o && D[a].shift(), d / 1e3 * F.getBandwidthSafetyFactor()
      }

      function j(a, b, c) {
        var d = !1;
        if (a < w && (d = !0), !d) switch (c) {
          case "video":
            d = b < u;
            break;
          case "audio":
            d = b < v
        }
        return d
      }

      function m(a) {
        var b = a.getMediaInfo(),
          f = b.type,
          k = C.getReadOnlyMetricsFor(f),
          m = a.getStreamProcessor(),
          n = m.getABRController(),
          o = m.isDynamic(),
          p = B.getCurrentHttpRequest(k),
          q = k.BufferState.length > 0 ? k.BufferState[k.BufferState.length - 1] : null,
          s = a.hasRichBuffer(),
          t = (0, r.default)(z).create();
        if (!k || !p || p.type !== l.HTTPRequest.MEDIA_SEGMENT_TYPE || !q || s) return t;
        var u = void 0,
          v = void 0;
        if (p.trace && p.trace.length) {
          v = p.tresponse.getTime() - p.trequest.getTime() || 1, u = p._tfinish.getTime() - p.tresponse.getTime() || 1;
          var w = p.trace.reduce(function(a, b) {
              return a + b.b[0]
            }, 0),
            x = Math.round(8 * w / (u / 1e3)),
            y = void 0,
            F = void 0;
          j(v, u, f) ? D[f] && E[f] ? (y = h(f, o), F = e(f)) : (y = x / 1e3, F = v) : (c(f, x), y = h(f, o), d(f, v), F = e(f, o)), n.setAverageThroughput(f, y), n.getAbandonmentStateFor(f) !== i.default.ABANDON_LOAD && (q.state === g.default.BUFFER_LOADED || o) && (t.value = n.getQualityForBitrate(b, y, F), m.getScheduleController().setTimeToLoadDelay(0), A("ThroughputRule requesting switch to index: ", t.value, "type: ", f, "Average throughput", Math.round(y), "kbps"), t.reason = {
            throughput: y,
            latency: F
          })
        }
        return t
      }

      function n() {
        b()
      }
      var o = 20,
        q = 3,
        s = 4,
        t = s,
        u = 50,
        v = 5,
        w = 50,
        x = 1.3,
        y = 1.3,
        z = this.context,
        A = (0, p.default)(z).getInstance().log,
        B = a.dashMetrics,
        C = a.metricsModel,
        D = void 0,
        E = void 0,
        F = void 0,
        G = {
          getMaxIndex: m,
          reset: n
        };
      return b(), G
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(64),
      g = d(f),
      h = a(61),
      i = d(h),
      j = a(102),
      k = d(j),
      l = a(180),
      m = a(10),
      n = d(m),
      o = a(8),
      p = d(o),
      q = a(132),
      r = d(q);
    e.__dashjs_factory_name = "ThroughputRule", c.default = n.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    102: 102,
    132: 132,
    180: 180,
    61: 61,
    64: 64,
    8: 8
  }],
  142: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b(a) {
        var b, c = 0;
        return a && a.some(function(a, b) {
          return c = b, !d.contains(a.serviceLocation)
        }) && (b = a[c]), b
      }
      var c = void 0,
        d = a.blacklistController;
      return c = {
        select: b
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f);
    e.__dashjs_factory_name = "BasicSelector", c.default = g.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10
  }],
  143: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b(a) {
        var b = [],
          c = function(a) {
            return !b.length || !a.dvb_priority || b.indexOf(a.dvb_priority) === -1
          },
          d = function(a) {
            return !f.contains(a.serviceLocation) || (a.dvb_priority && b.push(a.dvb_priority), !1)
          };
        return a.filter(d).filter(c)
      }

      function c(a) {
        var b, c, d = function(a, b) {
            var c = a.dvb_priority - b.dvb_priority;
            return isNaN(c) ? 0 : c
          },
          e = function(a, b, c) {
            return !b || c[0].dvb_priority && a.dvb_priority && c[0].dvb_priority === a.dvb_priority
          },
          f = 0,
          g = [],
          h = 0;
        if (c = a.sort(d).filter(e), c.length) return c.length > 1 && (c.forEach(function(a) {
          f += a.dvb_weight, g.push(f)
        }), b = Math.floor(Math.random() * (f - 1)), g.every(function(a, c) {
          return h = c, !(b < a)
        })), c[h]
      }

      function d(a) {
        return a && c(b(a))
      }
      var e = void 0,
        f = a.blacklistController;
      return e = {
        select: d
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f);
    e.__dashjs_factory_name = "DVBSelector", c.default = g.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10
  }],
  144: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b() {
        k = (0, g.default)(e).getInstance(), l = (0, i.default)(e).getInstance()
      }

      function c(a, b, c) {
        var e = f.getCurrentBufferLevel(h.getReadOnlyMetricsFor(b));
        return e < d(a, b, c)
      }

      function d(a, b, c) {
        var d = NaN,
          e = a.getCurrentRepresentationInfo();
        if ("fragmentedText" === b) d = j.getAllTracksAreDisabled() ? 0 : e.fragmentDuration;
        else if ("audio" === b && c) {
          var g = f.getCurrentBufferLevel(h.getReadOnlyMetricsFor("video"));
          d = Math.floor(Math.max(g, e.fragmentDuration))
        } else {
          var i = e.mediaInfo.streamInfo,
            l = a.getABRController();
          if (l.isPlayingAtTopQuality(i)) {
            var m = i.manifestInfo.duration >= k.getLongFormContentDurationThreshold();
            d = m ? k.getBufferTimeAtTopQualityLongForm() : k.getBufferTimeAtTopQuality()
          } else d = k.getStableBufferTime()
        }
        return d
      }
      var e = this.context,
        f = a.dashMetrics,
        h = a.metricsModel,
        j = a.textSourceBuffer,
        k = void 0,
        l = void 0,
        m = {
          execute: c,
          getBufferTarget: d
        };
      return b(), m
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(102),
      g = d(f),
      h = a(69),
      i = d(h),
      j = a(10),
      k = d(j);
    e.__dashjs_factory_name = "BufferLevelRule", c.default = k.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    102: 102,
    69: 69
  }],
  145: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b(a, b) {
        var c = a.getCurrentRepresentationInfo(),
          g = c.mediaInfo,
          i = g.type,
          j = a.getScheduleController(),
          k = j.getSeekTarget(),
          l = !isNaN(k),
          m = a.getBuffer(),
          n = l ? k : e.getIndexHandlerTime(a);
        if (isNaN(n) || "fragmentedText" === i && h.getAllTracksAreDisabled()) return null;
        if (l && j.setSeekTarget(NaN), m) {
          var o = f.getBufferRange(a.getBuffer(), n);
          null !== o && (d("Prior to making a request for time, NextFragmentRequestRule is aligning index handler's currentTime with bufferedRange.end.", n, " was changed to ", o.end), n = o.end)
        }
        var p = void 0;
        return b ? (n = b.startTime + b.duration / 2, p = e.getFragmentRequestForTime(a, c, n, {
          timeThreshold: 0,
          ignoreIsFinished: !0
        })) : (p = e.getFragmentRequestForTime(a, c, n, {
          keepIdx: !l
        }), p && a.getFragmentModel().isFragmentLoaded(p) && (p = e.getNextFragmentRequest(a, c)), p && (e.setIndexHandlerTime(a, p.startTime + p.duration), p.delayLoadingTime = (new Date).getTime() + j.getTimeToLoadDelay(), j.setTimeToLoadDelay(0))), p
      }
      var c = this.context,
        d = (0, g.default)(c).getInstance().log,
        e = a.adapter,
        f = a.sourceBufferController,
        h = a.textSourceBuffer,
        i = {
          execute: b
        };
      return i
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(8),
      g = d(f),
      h = a(10),
      i = d(h);
    e.__dashjs_factory_name = "NextFragmentRequestRule", c.default = i.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    8: 8
  }],
  146: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        n = (0, m.default)(f).create({
          updateEventName: i.default.SERVICE_LOCATION_BLACKLIST_CHANGED,
          loadFailedEventName: i.default.FRAGMENT_LOADING_COMPLETED
        }), p = (0, q.default)(f).create({
          blacklistController: n
        }), r = (0, o.default)(f).create({
          blacklistController: n
        }), s = p
      }

      function b(a) {
        a.selector && (s = a.selector)
      }

      function c(a) {
        s = j.getIsDVB(a) ? r : p
      }

      function d(a) {
        var b = a.baseUrls,
          c = a.selectedIdx;
        if (!isNaN(c)) return b[c];
        var d = s.select(b);
        return d ? (a.selectedIdx = b.indexOf(d), d) : void h.trigger(i.default.URL_RESOLUTION_FAILED, {
          error: new Error(t, u)
        })
      }

      function e() {
        n.reset()
      }
      var f = this.context,
        h = (0, g.default)(f).getInstance(),
        j = (0, k.default)(f).getInstance(),
        l = void 0,
        n = void 0,
        p = void 0,
        r = void 0,
        s = void 0;
      return l = {
        chooseSelectorFromManifest: c,
        select: d,
        reset: e,
        setConfig: b
      }, a(), l
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(9),
      g = d(f),
      h = a(13),
      i = d(h),
      j = a(22),
      k = d(j),
      l = a(63),
      m = d(l),
      n = a(143),
      o = d(n),
      p = a(142),
      q = d(p),
      r = a(10),
      s = d(r),
      t = 1,
      u = "Failed to resolve a valid URL";
    e.__dashjs_factory_name = "BaseURLSelector";
    var v = s.default.getClassFactory(e);
    v.URL_RESOLUTION_FAILED_GENERIC_ERROR_CODE = t, v.URL_RESOLUTION_FAILED_GENERIC_ERROR_MESSAGE = u, c.default = v, b.exports = c.default
  }, {
    10: 10,
    13: 13,
    142: 142,
    143: 143,
    22: 22,
    63: 63,
    9: 9
  }],
  147: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a) {
        if (!a) return null;
        void 0 === a.fileStart && (a.fileStart = 0);
        var b = k.default.parseBuffer(a),
          d = (0, g.default)(c).create();
        return d.setData(b), d
      }
      var b = void 0,
        c = this.context;
      return b = {
        parse: a
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(154),
      g = d(f),
      h = a(10),
      i = d(h),
      j = a(6),
      k = d(j);
    e.__dashjs_factory_name = "BoxParser", c.default = i.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    154: 154,
    6: 6
  }],
  148: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        g = !1
      }

      function b() {
        var a = "WebKitMediaSource" in window,
          b = "MediaSource" in window;
        return a || b
      }

      function c() {
        return g
      }

      function d(a) {
        g = a
      }

      function e(a, b) {
        var c = a.canPlayType(b);
        return "probably" === c || "maybe" === c
      }
      var f = void 0,
        g = void 0;
      return f = {
        supportsMediaSource: b,
        supportsEncryptedMedia: c,
        supportsCodec: e,
        setEncryptedMediaSupported: d
      }, a(), f
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f);
    e.__dashjs_factory_name = "Capabilities", c.default = g.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10
  }],
  149: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a, b) {
        var c = 0;
        for (c = 0; c < this.customTimeRangeArray.length && a > this.customTimeRangeArray[c].start; c++);
        for (this.customTimeRangeArray.splice(c, 0, {
            start: a,
            end: b
          }), c = 0; c < this.customTimeRangeArray.length - 1; c++) this.mergeRanges(c, c + 1) && c--;
        this.length = this.customTimeRangeArray.length
      }

      function b() {
        this.customTimeRangeArray = [], this.length = 0
      }

      function c(a, b) {
        for (var c = 0; c < this.customTimeRangeArray.length; c++)
          if (a <= this.customTimeRangeArray[c].start && b >= this.customTimeRangeArray[c].end) this.customTimeRangeArray.splice(c, 1), c--;
          else {
            if (a > this.customTimeRangeArray[c].start && b < this.customTimeRangeArray[c].end) {
              this.customTimeRangeArray.splice(c + 1, 0, {
                start: b,
                end: this.customTimeRangeArray[c].end
              }), this.customTimeRangeArray[c].end = a;
              break
            }
            a > this.customTimeRangeArray[c].start && a < this.customTimeRangeArray[c].end ? this.customTimeRangeArray[c].end = a : b > this.customTimeRangeArray[c].start && b < this.customTimeRangeArray[c].end && (this.customTimeRangeArray[c].start = b)
          }
        this.length = this.customTimeRangeArray.length
      }

      function d(a, b) {
        var c = this.customTimeRangeArray[a],
          d = this.customTimeRangeArray[b];
        return c.start <= d.start && d.start <= c.end && c.end <= d.end ? (c.end = d.end, this.customTimeRangeArray.splice(b, 1), !0) : d.start <= c.start && c.start <= d.end && d.end <= c.end ? (c.start = d.start, this.customTimeRangeArray.splice(b, 1), !0) : d.start <= c.start && c.start <= d.end && c.end <= d.end ? (this.customTimeRangeArray.splice(a, 1), !0) : c.start <= d.start && d.start <= c.end && d.end <= c.end && (this.customTimeRangeArray.splice(b, 1), !0)
      }

      function e(a) {
        return this.customTimeRangeArray[a].start
      }

      function f(a) {
        return this.customTimeRangeArray[a].end
      }
      var g = [],
        h = 0;
      return {
        customTimeRangeArray: g,
        length: h,
        add: a,
        clear: b,
        remove: c,
        mergeRanges: d,
        start: e,
        end: f
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f);
    e.__dashjs_factory_name = "CustomTimeRanges", c.default = g.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10
  }],
  150: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a) {
        if (void 0 !== t) return t;
        t = !1;
        var b, c = "1",
          d = "1";
        try {
          "undefined" != typeof window && (b = window[a])
        } catch (e) {
          return r("Warning: DOMStorage access denied: " + e.message), t
        }
        if (!b || a !== o && a !== p) return t;
        try {
          b.setItem(c, d), b.removeItem(c), t = !0
        } catch (e) {
          r("Warning: DOMStorage is supported, but cannot be used: " + e.message)
        }
        return t
      }

      function b() {
        a(o) && l.forEach(function(a) {
          var b = localStorage.getItem(a.oldKey);
          if (b) {
            localStorage.removeItem(a.oldKey);
            try {
              localStorage.setItem(a.newKey, b)
            } catch (c) {
              r(c.message)
            }
          }
        })
      }

      function c() {
        u = (0, i.default)(q).getInstance(), b()
      }

      function d() {
        var a = 6e5;
        return Math.round((new Date).getTime() / a) * a
      }

      function e(b, c) {
        return a(b) && u["get" + c + "CachingInfo"]().enabled
      }

      function f(a) {
        if (!e(o, "LastMediaSettings")) return null;
        var b = n.replace(/\?/, a),
          c = JSON.parse(localStorage.getItem(b)) || {},
          d = (new Date).getTime() - parseInt(c.timestamp, 10) >= u.getLastMediaSettingsCachingInfo().ttl || !1,
          f = c.settings;
        return d && (localStorage.removeItem(b), f = null), f
      }

      function g(a) {
        var b = NaN;
        if (e(o, "LastBitrate")) {
          var c = m.replace(/\?/, a),
            d = JSON.parse(localStorage.getItem(c)) || {},
            f = (new Date).getTime() - parseInt(d.timestamp, 10) >= u.getLastBitrateCachingInfo().ttl || !1,
            g = parseInt(d.bitrate, 10);
          isNaN(g) || f ? f && localStorage.removeItem(c) : (b = g, r("Last saved bitrate for " + a + " was " + g))
        }
        return b
      }

      function h(a, b) {
        if (e(o, "LastMediaSettings")) {
          var c = n.replace(/\?/, a);
          try {
            localStorage.setItem(c, JSON.stringify({
              settings: b,
              timestamp: d()
            }))
          } catch (f) {
            r(f.message)
          }
        }
      }

      function j(a, b) {
        if (e(o, "LastBitrate") && b) {
          var c = m.replace(/\?/, a);
          try {
            localStorage.setItem(c, JSON.stringify({
              bitrate: b / 1e3,
              timestamp: d()
            }))
          } catch (f) {
            r(f.message)
          }
        }
      }
      var q = this.context,
        r = (0, k.default)(q).getInstance().log,
        s = void 0,
        t = void 0,
        u = void 0;
      return s = {
        getSavedBitrateSettings: g,
        setSavedBitrateSettings: j,
        getSavedMediaSettings: f,
        setSavedMediaSettings: h,
        isSupported: a
      }, c(), s
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f),
      h = a(102),
      i = d(h),
      j = a(8),
      k = d(j),
      l = [{
        oldKey: "dashjs_vbitrate",
        newKey: "dashjs_video_bitrate"
      }, {
        oldKey: "dashjs_abitrate",
        newKey: "dashjs_audio_bitrate"
      }, {
        oldKey: "dashjs_vsettings",
        newKey: "dashjs_video_settings"
      }, {
        oldKey: "dashjs_asettings",
        newKey: "dashjs_audio_settings"
      }],
      m = "dashjs_?_bitrate",
      n = "dashjs_?_settings",
      o = "localStorage",
      p = "sessionStorage";
    e.__dashjs_factory_name = "DOMStorage";
    var q = g.default.getSingletonFactory(e);
    c.default = q, b.exports = c.default
  }, {
    10: 10,
    102: 102,
    8: 8
  }],
  151: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a) {
      function b() {
        return o
      }

      function c(a) {
        o = a
      }

      function d(a, b) {
        var c = !0,
          d = 0,
          e = void 0,
          f = void 0;
        if (void 0 === b && (b = !1), a.tag > 16777215 ? (n.getUint32(o) !== a.tag && (c = !1), d = 4) : a.tag > 65535 ? (e = n.getUint16(o), f = n.getUint8(o + 2), 256 * e + f !== a.tag && (c = !1), d = 3) : a.tag > 255 ? (n.getUint16(o) !== a.tag && (c = !1), d = 2) : (n.getUint8(o) !== a.tag && (c = !1), d = 1), !c && a.required && !b) throw new i.default("required tag not found");
        return c && (o += d), c
      }

      function e(a, b) {
        var c = d(a, b);
        return c && h(), c
      }

      function f(a) {
        var b = void 0;
        return d(a), b = h(), m[a.parse](b)
      }

      function g(a, b) {
        var c = d(a, b),
          e = void 0;
        return c && (e = h(), o += e), c
      }

      function h(a) {
        var b = 1,
          c = 128,
          d = 8,
          e = -1,
          f = 0,
          g = n.getUint8(o),
          h = void 0;
        for (h = 0; h < d; h += 1) {
          if ((g & c) === c) {
            f = void 0 === a ? g & ~c : g, e = h;
            break
          }
          c >>= 1
        }
        for (h = 0; h < e; h += 1, b += 1) f = f << 8 | 255 & n.getUint8(o + b);
        return o += b, f
      }

      function j(a) {
        var b = void 0;
        switch (a) {
          case 4:
            b = n.getFloat32(o), o += 4;
            break;
          case 8:
            b = n.getFloat64(o), o += 8
        }
        return b
      }

      function k(a) {
        var b = 0,
          c = void 0;
        for (c = 0; c < a; c += 1) b <<= 8, b |= 255 & n.getUint8(o + c);
        return o += a, b
      }

      function l() {
        return o < n.byteLength
      }
      var m = void 0,
        n = new DataView(a.data),
        o = 0;
      return m = {
        getPos: b,
        setPos: c,
        consumeTag: d,
        consumeTagAndSize: e,
        parseTag: f,
        skipOverElement: g,
        getMatroskaCodedNum: h,
        getMatroskaFloat: j,
        getMatroskaUint: k,
        moreData: l
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f),
      h = a(163),
      i = d(h);
    e.__dashjs_factory_name = "EBMLParser", c.default = g.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    163: 163
  }],
  152: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a) {
        l.trigger(i.default.ERROR, {
          error: "capability",
          event: a
        })
      }

      function b(a, b, c) {
        l.trigger(i.default.ERROR, {
          error: "download",
          event: {
            id: a,
            url: b,
            request: c
          }
        })
      }

      function c(a, b, c, d) {
        l.trigger(i.default.ERROR, {
          error: "manifestError",
          event: {
            message: a,
            id: b,
            manifest: c,
            event: d
          }
        })
      }

      function d(a, b, c) {
        l.trigger(i.default.ERROR, {
          error: "cc",
          event: {
            message: a,
            id: b,
            cc: c
          }
        })
      }

      function e(a) {
        l.trigger(i.default.ERROR, {
          error: "mediasource",
          event: a
        })
      }

      function f(a) {
        l.trigger(i.default.ERROR, {
          error: "key_session",
          event: a
        })
      }

      function h(a) {
        l.trigger(i.default.ERROR, {
          error: "key_message",
          event: a
        })
      }
      var j = void 0,
        k = this.context,
        l = (0, g.default)(k).getInstance();
      return j = {
        capabilityError: a,
        downloadError: b,
        manifestError: c,
        timedTextError: d,
        mediaSourceError: e,
        mediaKeySessionError: f,
        mediaKeyMessageError: h
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(9),
      g = d(f),
      h = a(13),
      i = d(h),
      j = a(10),
      k = d(j),
      l = "mediasource",
      m = "mediakeys",
      n = "manifest",
      o = "SIDX",
      p = "content",
      q = "initialization",
      r = "xlink",
      s = "codec",
      t = "parse",
      u = "nostreams",
      v = "parse";
    e.__dashjs_factory_name = "ErrorHandler";
    var w = k.default.getSingletonFactory(e);
    w.CAPABILITY_ERROR_MEDIASOURCE = l, w.CAPABILITY_ERROR_MEDIAKEYS = m, w.DOWNLOAD_ERROR_ID_MANIFEST = n, w.DOWNLOAD_ERROR_ID_SIDX = o, w.DOWNLOAD_ERROR_ID_CONTENT = p, w.DOWNLOAD_ERROR_ID_INITIALIZATION = q, w.DOWNLOAD_ERROR_ID_XLINK = r, w.MANIFEST_ERROR_ID_CODEC = s, w.MANIFEST_ERROR_ID_PARSE = t, w.MANIFEST_ERROR_ID_NOSTREAMS = u, w.TIMED_TEXT_ERROR_ID_PARSE = v, c.default = w, b.exports = c.default
  }, {
    10: 10,
    13: 13,
    9: 9
  }],
  153: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a) {
        var b = a.streamId,
          c = a.mediaInfo.type,
          e = a.quality;
        d[b] = d[b] || {}, d[b][c] = d[b][c] || {}, d[b][c][e] = a
      }

      function b(a, b, c) {
        return d[a][b][c]
      }

      function c() {
        d = {}
      }
      var d = {},
        e = {
          save: a,
          extract: b,
          reset: c
        };
      return e
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f);
    e.__dashjs_factory_name = "InitCache", c.default = g.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10
  }],
  154: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a) {
        return a && k && k.boxes && 0 !== k.boxes.length ? i(k.fetch(a)) : null
      }

      function b(a) {
        for (var b, c = k.fetchAll(a), d = [], e = 0, f = c.length; e < f; e++) b = i(c[e]), b && d.push(b);
        return d
      }

      function c(a) {
        k = a
      }

      function d() {
        if (!k || !k.boxes || !k.boxes.length) return null;
        var a = k.boxes[k.boxes.length - 1].type,
          c = b(a);
        return c[c.length - 1]
      }

      function e() {
        return k._cursor.offset
      }

      function f() {
        l = {
          offset: "_offset",
          size: "size",
          type: "type"
        }, m = {
          references: "references",
          timescale: "timescale",
          earliest_presentation_time: "earliest_presentation_time",
          first_offset: "first_offset"
        }, n = {
          reference_type: "reference_type",
          referenced_size: "referenced_size",
          subsegment_duration: "subsegment_duration"
        }, o = {
          id: "id",
          value: "value",
          timescale: "timescale",
          scheme_id_uri: "scheme_id_uri",
          presentation_time_delta: "presentation_time_delta",
          event_duration: "event_duration",
          message_data: "message_data"
        }, p = {
          timescale: "timescale"
        }, q = {
          sequence_number: "sequence_number"
        }, r = {
          samples_with_subsamples: "samples_with_subsamples"
        }, s = {
          base_data_offset: "base_data_offset",
          sample_description_index: "sample_description_index",
          default_sample_duration: "default_sample_duration",
          default_sample_size: "default_sample_size",
          default_sample_flags: "default_sample_flags",
          flags: "flags"
        }, t = {
          version: "version",
          baseMediaDecodeTime: "baseMediaDecodeTime",
          flags: "flags"
        }, u = {
          sample_count: "sample_count",
          first_sample_flags: "first_sample_flags",
          data_offset: "data_offset",
          flags: "flags",
          samples: "samples"
        }, v = {
          sample_size: "sample_size",
          sample_duration: "sample_duration",
          sample_composition_time_offset: "sample_composition_time_offset"
        }
      }

      function h(a, b, c) {
        for (var d in c) b[d] = a[c[d]]
      }

      function i(a) {
        if (!a) return null;
        var b, c, d = new g.default;
        switch (h(a, d, l), a.hasOwnProperty("_incomplete") && (d.isComplete = !a._incomplete), d.type) {
          case "sidx":
            if (h(a, d, m), d.references)
              for (b = 0, c = d.references.length; b < c; b++) h(a.references[b], d.references[b], n);
            break;
          case "emsg":
            h(a, d, o);
            break;
          case "mdhd":
            h(a, d, p);
            break;
          case "mfhd":
            h(a, d, q);
            break;
          case "subs":
            h(a, d, r);
            break;
          case "tfhd":
            h(a, d, s);
            break;
          case "tfdt":
            h(a, d, t);
            break;
          case "trun":
            if (h(a, d, u), d.samples)
              for (b = 0, c = d.samples.length; b < c; b++) h(a.samples[b], d.samples[b], v)
        }
        return d
      }
      var j = void 0,
        k = void 0,
        l = void 0,
        m = void 0,
        n = void 0,
        o = void 0,
        p = void 0,
        q = void 0,
        r = void 0,
        s = void 0,
        t = void 0,
        u = void 0,
        v = void 0;
      return j = {
        getBox: a,
        getBoxes: b,
        setData: c,
        getLastBox: d,
        getOffset: e
      }, f(), j
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(166),
      g = d(f),
      h = a(10),
      i = d(h);
    e.__dashjs_factory_name = "IsoFile", c.default = i.default.getClassFactory(e), b.exports = c.default
  }, {
    10: 10,
    166: 166
  }],
  155: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a, b) {
        e = a, f = b
      }

      function b() {
        var a = f.getCurrentRepresentationInfo(),
          b = a.DVRWindow.end;
        return a.useCalculatedLiveEdgeTime && (b = e.getExpectedLiveEdge(), e.setClientTimeOffset(b - a.DVRWindow.end)), b
      }

      function c() {
        e = null, f = null
      }
      var d = void 0,
        e = void 0,
        f = void 0;
      return d = {
        initialize: a,
        getLiveEdge: b,
        reset: c
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f);
    e.__dashjs_factory_name = "LiveEdgeFinder";
    var h = g.default.getSingletonFactory(e);
    c.default = h, b.exports = c.default
  }, {
    10: 10
  }],
  156: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a, b) {
        return JSON.stringify(a) === JSON.stringify(b)
      }
      var b = void 0;
      return b = {
        areSimpleEquivalent: a
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f);
    e.__dashjs_factory_name = "ObjectUtils", c.default = g.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10
  }],
  157: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a) {
        return a
      }

      function b(a) {
        return a
      }
      var c = void 0;
      return c = {
        modifyRequestURL: a,
        modifyRequestHeader: b
      }
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f);
    e.__dashjs_factory_name = "RequestModifier", c.default = g.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10
  }],
  158: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a(a) {
        a && a.videoModel && (da = a.videoModel)
      }

      function b(a) {
        if (a.hasOwnProperty("begin") && a.hasOwnProperty("end")) {
          var b = o(a.begin),
            c = o(a.end);
          return [b, c]
        }
        return null
      }

      function c() {
        var a = "cue_TTML_" + fa;
        return fa++, a
      }

      function d(a, b, c) {
        function d(a, b) {
          if (a.hasOwnProperty(b)) {
            var c = a[b];
            f.indexOf(c) < 0 && f.push(c)
          }
        }
        for (var e = [], f = [], g = [], h = 0; h < a.length; h++) {
          var i = a[h];
          d(i, "begin"), d(i, "end")
        }
        if (0 === f.length) return g;
        if ("undefined" != typeof b && "undefined" != typeof c) {
          for (var h = 0; h < f.length; h++) {
            var j = o(f[h]);
            b < j && j < c && e.push(j)
          }
          e.push(b), e.push(c)
        } else
          for (var h = 0; h < f.length; h++) e.push(o(f[h]));
        e.sort(function(a, b) {
          return a - b
        });
        for (var h = 0; h < e.length - 1; h++) g.push([e[h], e[h + 1]]);
        return g
      }

      function e(a, b) {
        return "undefined" != typeof startInterval && a < b && (a = b), a
      }

      function f(a, b) {
        return "undefined" != typeof b && a > b && (a = b), a
      }

      function g(a, b, c) {
        var d = o(a.begin),
          g = o(a.end);
        return d = e(d, b), g = f(g, c), "undefined" != typeof b && "undefined" != typeof c && (g < b || d > c) ? (N("TTML: Cue " + d + "-" + g + " outside interval " + b + "-" + c), null) : [d, g]
      }

      function h(a, c) {
        var d = !0;
        if (a.hasOwnProperty("span")) {
          var e = b(a.span);
          null !== e && (d = e[0] < c[1] && e[1] > c[0])
        }
        return d
      }

      function j(a, e, f, i) {
        var j = void 0,
          k = void 0,
          l = void 0,
          m = void 0,
          n = void 0,
          o = void 0,
          r = "";
        if (Q = ea.xml_str2json(a), !Q) throw new Error("TTML document could not be parsed");
        if (da.getTTMLRenderingDiv() && (n = "html"), j = Q.tt, !j) throw new Error("TTML document lacks tt element");
        var s = p(j, "https://www.w3.org/ns/ttml");
        if (s && q(j, s), m = j["tts:extent"], k = j.head, !k) throw new Error("TTML document lacks head element");
        k.layout && (S = k.layout.region_asArray), k.styling && (R = k.styling.style_asArray);
        var t = {};
        if (i)
          for (o = 0; o < i.length; o++) {
            var x = "urn:mpeg:14496-30:subs:" + (o + 1).toString(),
              y = "data:image/png;base64," + btoa(i[o]);
            t[x] = y
          }
        if (k.metadata) {
          var z = k.metadata.image_asArray;
          if (z)
            for (o = 0; o < z.length; o++) {
              var x = "#" + z[o]["xml:id"],
                A = z[o].imagetype.toLowerCase(),
                y = "data:image/" + A + ";base64," + z[o].__text;
              t[x] = y
            }
        }
        if (l = j.body, !l) throw new Error("TTML document lacks body element");
        var B = G(),
          F = da.getElement().clientWidth,
          L = da.getElement().clientHeight,
          M = [F / B[0], L / B[1]];
        X["font-size"] = M[1] + "px;";
        var O = [];
        if (S)
          for (o = 0; o < S.length; o++) O.push(D(JSON.parse(JSON.stringify(S[o])), M));
        var P = p(Q.tt, "https://www.w3.org/ns/ttml#parameter");
        j.hasOwnProperty(P + ":frameRate") && (j.frameRate = parseInt(j[P + ":frameRate"], 10));
        for (var W = [], Y = j.body_asArray[0].__children, Z = 0; Z < Y.length; Z++) {
          var $ = Y[Z].div,
            _ = null;
          if (null === (_ = b($))) {
            var aa = $.p_asArray;
            if (null === _ && (!aa || 0 === aa.length)) return r = "TTML has div that contains no timing and no paragraphs.", N(r), W;
            for (var ba = 0; ba < aa.length; ba++) {
              var ca = aa[ba],
                fa = ca.span_asArray,
                ga = [];
              if (ca.hasOwnProperty("begin") && ca.hasOwnProperty("end")) {
                var ha = g(ca, e, f);
                null !== ha && ga.push(ha)
              } else ga = d(fa, e, f);
              if (0 !== ga.length)
                for (var ia = ca.__children, ja = 0; ja < ga.length; ja++) {
                  for (var ka = ga[ja], la = [], ma = 0; ma < ia.length; ma++) {
                    var na = ia[ma];
                    h(na, ka) && la.push(na)
                  }
                  if (0 !== la.length)
                    if ("html" === n) {
                      U = {}, V = {}, T = {};
                      var oa = J(ca, $, M),
                        pa = K(ca, M),
                        qa = pa[1];
                      pa = pa[0];
                      var ra = document.createElement("div");
                      ra.className = qa;
                      var sa = I(la, M);
                      sa.className = "cueDirUniWrapper", u("unicode-bidi", pa) && (sa.style.cssText += v("unicode-bidi", pa), w("unicode-bidi", pa)), u("direction", pa) && (sa.style.cssText += v("direction", pa), w("direction", pa)), u("padding-left", pa) && u("padding-right", pa) && (sa.innerHTML = H(sa, pa)), u("padding-left", pa) && u("padding-right", pa) && (w("padding-left", pa), w("padding-right", pa));
                      var ta = "";
                      if (u("regionID", oa)) {
                        var ua = v("regionID", oa);
                        ta = ua.slice(ua.indexOf(":") + 1, ua.length - 1)
                      }
                      pa && (ra.style.cssText = pa.join(" ") + "display:flex;"), oa && (oa = oa.join(" ")), ra.appendChild(sa);
                      var va = document.createElement("div");
                      va.appendChild(ra), va.id = c(), va.style.cssText = "position: absolute; margin: 0; display: flex; box-sizing: border-box; pointer-events: none;" + oa, 0 === Object.keys(T).length && (T.defaultFontSize = "100"), W.push({
                        start: ka[0],
                        end: ka[1],
                        type: "html",
                        cueHTMLElement: va,
                        regions: O,
                        regionID: ta,
                        cueID: va.id,
                        videoHeight: L,
                        videoWidth: F,
                        cellResolution: B,
                        fontSize: T || {
                          defaultFontSize: "100"
                        },
                        lineHeight: U,
                        linePadding: V
                      })
                    } else {
                      var wa = "",
                        xa = la;
                      xa.length && xa.forEach(function(a) {
                        if (a.hasOwnProperty("span")) {
                          var b = a.span.__children;
                          b.forEach(function(a) {
                            b.hasOwnProperty("metadata") || (a.hasOwnProperty("#text") ? wa += a["#text"].replace(/[\r\n]+/gm, " ").trim() : "br" in a && (wa += "\n"))
                          })
                        } else wa += a.hasOwnProperty("br") ? "\n" : a["#text"].replace(/[\r\n]+/gm, " ").trim()
                      }), W.push({
                        start: ka[0],
                        end: ka[1],
                        data: wa,
                        type: "text"
                      })
                    }
                } else r = "TTML: Empty paragraph"
            }
          } else {
            var ya = void 0;
            if ($.region) {
              var za = E(S, $.region);
              ya = C(za, m)
            }
            ya || (ya = C($, m));
            var Aa = $["smpte:backgroundImage"];
            void 0 !== Aa && void 0 !== t[Aa] && W.push({
              start: _[0],
              end: _[1],
              id: c(),
              data: t[Aa],
              type: "image",
              layout: ya
            })
          }
        }
        if ("" !== r && N(r), W.length > 0) return W;
        throw new Error(r)
      }

      function n() {
        P = /^([0-9][0-9]+):([0-5][0-9]):([0-5][0-9])|(60)(\.([0-9])+)?$/, T = {}, U = {}, V = {}, W = {
          top: "auto;",
          left: "auto;",
          width: "90%;",
          height: "10%;",
          "align-items": "flex-start;",
          overflow: "visible;",
          "-ms-writing-mode": "lr-tb, horizontal-tb;",
          "-webkit-writing-mode": "horizontal-tb;",
          "-moz-writing-mode": "horizontal-tb;",
          "writing-mode": "horizontal-tb;"
        }, X = {
          color: "rgb(255,255,255);",
          direction: "ltr;",
          "font-family": "monospace, sans-serif;",
          "font-style": "normal;",
          "line-height": "normal;",
          "font-weight": "normal;",
          "text-align": "start;",
          "justify-content": "flex-start;",
          "text-decoration": "none;",
          "unicode-bidi": "normal;",
          "white-space": "normal;",
          width: "100%;"
        }, Y = {
          monospace: "font-family: monospace;",
          sansSerif: "font-family: sans-serif;",
          serif: "font-family: serif;",
          monospaceSansSerif: "font-family: monospace, sans-serif;",
          monospaceSerif: "font-family: monospace, serif;",
          proportionalSansSerif: "font-family: Arial;",
          proportionalSerif: "font-family: Times New Roman;",
          default: "font-family: monospace, sans-serif;"
        }, Z = {
          right: ["justify-content: flex-end;", "text-align: right;"],
          start: ["justify-content: flex-start;", "text-align: start;"],
          center: ["justify-content: center;", "text-align: center;"],
          end: ["justify-content: flex-end;", "text-align: end;"],
          left: ["justify-content: flex-start;", "text-align: left;"]
        }, $ = {
          start: "text-align: start;",
          center: "text-align: center;",
          end: "text-align: end;",
          auto: ""
        }, _ = {
          wrap: "white-space: normal;",
          noWrap: "white-space: nowrap;"
        }, aa = {
          normal: "unicode-bidi: normal;",
          embed: "unicode-bidi: embed;",
          bidiOverride: "unicode-bidi: bidi-override;"
        }, ba = {
          before: "align-items: flex-start;",
          center: "align-items: center;",
          after: "align-items: flex-end;"
        }, ca = {
          lrtb: "-webkit-writing-mode: horizontal-tb;writing-mode: horizontal-tb;",
          rltb: "-webkit-writing-mode: horizontal-tb;writing-mode: horizontal-tb;direction: rtl;unicode-bidi: bidi-override;",
          tbrl: "-webkit-writing-mode: vertical-rl;writing-mode: vertical-rl;-webkit-text-orientation: upright;text-orientation: upright;",
          tblr: "-webkit-writing-mode: vertical-lr;writing-mode: vertical-lr;-webkit-text-orientation: upright;text-orientation: upright;",
          lr: "-webkit-writing-mode: horizontal-tb;writing-mode: horizontal-tb;",
          rl: "-webkit-writing-mode: horizontal-tb;writing-mode: horizontal-tb;direction: rtl;",
          tb: "-webkit-writing-mode: vertical-rl;writing-mode: vertical-rl;-webkit-text-orientation: upright;text-orientation: upright;"
        }, ea = new i.default({
          escapeMode: !1,
          attributePrefix: "",
          arrayAccessForm: "property",
          emptyNodeForm: "object",
          stripWhitespaces: !1,
          enableToStringFunc: !1,
          matchers: []
        })
      }

      function o(a) {
        var b, c, d, e = P.test(a);
        if (!e) return NaN;
        if (b = a.split(":"), c = parseFloat(b[0]) * l + parseFloat(b[1]) * m + parseFloat(b[2]), b[3]) {
          if (d = Q.tt.frameRate, !d || isNaN(d)) return NaN;
          c += parseFloat(b[3]) / d
        }
        return c
      }

      function p(a, b) {
        var c = Object.keys(a).filter(function(c) {
          return ("xmlns" === c.split(":")[0] || "xmlns" === c.split(":")[1]) && a[c] === b
        }).map(function(a) {
          return a.split(":")[2] || a.split(":")[1]
        });
        return 1 != c.length ? null : c[0]
      }

      function q(a, b) {
        for (var c in a)
          if (a.hasOwnProperty(c)) {
            if (("object" == typeof a[c] || a[c] instanceof Object) && !Array.isArray(a[c])) q(a[c], b);
            else if (Array.isArray(a[c]))
              for (var d = 0; d < a[c].length; d++) q(a[c][d], b);
            var e = b + ":",
              f = c.indexOf(e);
            if (f >= 0) {
              var g = c.slice(f + e.length);
              a[g] = a[c], delete a[c]
            }
          }
      }

      function r(a) {
        return a.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
      }

      function s(a) {
        var b = a.slice(1),
          c = b.match(/.{2}/g),
          d = parseFloat(parseInt(parseInt(c[3], 16) / 255 * 1e3, 10) / 1e3),
          e = c.slice(0, 3).map(function(a) {
            return parseInt(a, 16)
          });
        return "rgba(" + e.join(",") + "," + d + ");"
      }

      function t(a) {
        var b = void 0,
          c = void 0,
          d = void 0;
        return b = a.replace(/^(rgb|rgba)\(/, "").replace(/\)$/, "").replace(/\s/g, "").split(","), c = parseInt(b[b.length - 1], 10) / 255, d = "rgba(" + b[0] + "," + b[1] + "," + b[2] + "," + c + ");"
      }

      function u(a, b) {
        for (var c = 0; c < b.length; c++)
          if (b[c].indexOf(a) > -1) return !0;
        return !1
      }

      function v(a, b) {
        for (var c = 0; c < b.length; c++)
          if (b[c].indexOf(a) > -1) return b[c];
        return null
      }

      function w(a, b) {
        b.splice(b.indexOf(v(a, b)), 1)
      }

      function x(a, b) {
        for (var c = 0; c < a.length; c++)
          for (var d = 0; d < b.length; d++) a[c] && a[c].split(":")[0].indexOf(b[d].split(":")[0]) > -1 && a.splice(c, 1);
        return a.concat(b)
      }

      function y(a) {
        var b = new Array(2),
          c = a.indexOf(":") === -1 ? 0 : a.indexOf(":"),
          d = void 0;
        return a.indexOf("%") === -1 ? a.indexOf("c") === -1 ? a.indexOf("p") === -1 ? b[0] = b[1] = null : (b[0] = "p", d = a.indexOf("p")) : (b[0] = "c", d = a.indexOf("c")) : (b[0] = "%", d = a.indexOf("%")), b[1] = a.slice(c, d), b
      }

      function z(a, b, c) {
        var d, e, f = [];
        for (var g in a)
          if (a.hasOwnProperty(g)) {
            var h = g.replace("ebutts:", "");
            h = h.replace("xml:", ""), h = h.replace("tts:", ""), h = r(h), a[h] = a[g], delete a[g]
          }
        if ("line-padding" in a) {
          var i = parseFloat(a["line-padding"].slice(a["line-padding"].indexOf(":") + 1, a["line-padding"].indexOf("c")));
          "id" in a && (V[a.id] = i);
          var j = i * b[0] + "px;";
          f.push("padding-left:" + j), f.push("padding-right:" + j)
        }
        if ("font-size" in a) {
          var k = y(a["font-size"]),
            l = parseFloat(k[1]);
          "id" in a && (T[a.id] = k), "%" === k[0] ? d = l / 100 * b[1] + "px;" : "c" === k[0] && (d = l * b[1] + "px;"), f.push("font-size:" + d)
        }
        if ("line-height" in a)
          if ("normal" === a["line-height"]) f.push("line-height: normal;");
          else {
            var m = y(a["line-height"]),
              n = parseFloat(m[1]);
            "id" in a && (U[a.id] = m), "%" === m[0] ? e = n / 100 * b[1] + "px;" : "c" === m[0] && (e = n * b[1] + "px;"), f.push("line-height:" + e)
          }
          "font-family" in a && (a["font-family"] in Y ? f.push(Y[a["font-family"]]) : f.push("font-family:" + a["font-family"] + ";")), "text-align" in a && a["text-align"] in Z && (f.push(Z[a["text-align"]][0]), f.push(Z[a["text-align"]][1])), "multi-row-align" in a && (u("text-align", f) && "auto" != a["multi-row-align"] && w("text-align", f), a["multi-row-align"] in $ && f.push($[a["multi-row-align"]]));
        var o;
        return "background-color" in a && (o = a["background-color"].indexOf("#") > -1 && a["background-color"].length - 1 === 8 ? s(a["background-color"]) : a["background-color"].indexOf("rgba") > -1 ? t(a["background-color"]) : a["background-color"] + ";", f.push("background-color: " + o)), "color" in a && (o = a.color.indexOf("#") > -1 && a.color.length - 1 === 8 ? s(a.color) : a.color.indexOf("rgba") > -1 ? t(a.color) : a.color + ";", f.push("color: " + o)), "wrap-option" in a && (a["wrap-option"] in _ ? f.push(_[a["wrap-option"]]) : f.push("white-space:" + a["wrap-option"])), "unicode-bidi" in a && (a["unicode-bidi"] in aa ? f.push(aa[a["unicode-bidi"]]) : f.push("unicode-bidi:" + a["unicode-bidi"])), "font-style" in a && f.push("font-style:" + a["font-style"] + ";"), "font-weight" in a && f.push("font-weight:" + a["font-weight"] + ";"), "direction" in a && f.push("direction:" + a.direction + ";"), "text-decoration" in a && f.push("text-decoration:" + a["text-decoration"] + ";"), c && (f = f.concat(D(a, b))), Q.tt.hasOwnProperty("xml:space") && "preserve" === Q.tt["xml:space"] && f.push("white-space: pre;"), f
      }

      function A(a, b) {
        for (var c = 0; c < a.length; c++) {
          var d = a[c];
          if (d["xml:id"] === b || d.id === b) return d
        }
        return null
      }

      function B(a, b, c) {
        var d = [],
          e = a.match(/\S+/g);
        return e.forEach(function(a) {
          var e = A(R, a);
          if (e) {
            var f = z(JSON.parse(JSON.stringify(e)), b, c);
            d = d.concat(f)
          }
        }), d
      }

      function C(a, b) {
        var c = /([\d\.]+)(%|px)\s+([\d\.]+)(%|px)/;
        if ("tts:extent" in a && "tts:origin" in a) {
          var d = c.exec(a["tts:extent"]),
            e = c.exec(a["tts:origin"]);
          if (null === d || null === e) return N("Bad extent or origin: " + a["tts:extent"] + " " + a["tts:origin"]), null;
          var f = parseFloat(d[1]),
            g = parseFloat(d[3]),
            h = parseFloat(e[1]),
            i = parseFloat(e[3]);
          if (b) {
            var j = c.exec(b);
            if (null === j || "px" !== j[2] || "px" !== j[4]) return N("Bad tt.extent: " + b), null;
            var k = parseFloat(j[1]),
              l = parseFloat(j[3]);
            "px" === d[2] && (f = f / k * 100), "px" === d[4] && (g = g / l * 100), "px" === e[2] && (h = h / k * 100), "px" === e[4] && (i = i / l * 100)
          }
          return {
            left: h,
            top: i,
            width: f,
            height: g
          }
        }
        return null
      }

      function D(a, b) {
        var c = [];
        for (var d in a) {
          var e = d.replace("tts:", "");
          e = e.replace("xml:", ""), e = r(e), a[e] = a[d], e !== d && delete a[d]
        }
        if ("extent" in a) {
          var f = a.extent.split(/\s/);
          c.push("width: " + f[0] + ";"), c.push("height: " + f[1] + ";")
        }
        if ("origin" in a) {
          var g = a.origin.split(/\s/);
          c.push("left: " + g[0] + ";"), c.push("top: " + g[1] + ";")
        }
        if ("display-align" in a && c.push(ba[a["display-align"]]), "writing-mode" in a && c.push(ca[a["writing-mode"]]), "style" in a) {
          var h = B(a.style, b, !0);
          c = c.concat(h)
        }
        return "padding" in a && c.push("padding:" + a.padding + ";"), "overflow" in a && c.push("overflow:" + a.overflow + ";"), "show-background" in a && c.push("show-background:" + a["show-background"] + ";"), "id" in a && c.push("regionID:" + a.id + ";"), c
      }

      function E(a, b) {
        for (var c = 0; c < a.length; c++) {
          var d = a[c];
          if (d["xml:id"] === b || d.id === b) return d
        }
        return null
      }

      function F(a, b) {
        var c = [],
          d = a.match(/\S+/g);
        return d.forEach(function(a) {
          var d = E(S, a);
          if (d) {
            var e = D(JSON.parse(JSON.stringify(d)), b);
            c = c.concat(e)
          }
        }), c
      }

      function G() {
        var a = [32, 15];
        return Q.tt.hasOwnProperty("ttp:cellResolution") ? Q.tt["ttp:cellResolution"].split(" ").map(parseFloat) : a
      }

      function H(a, b) {
        for (var c = v("padding-left", b), d = v("padding-right", b), e = c.concat(" " + d + " "), f = "", g = "", h = "", i = Array.prototype.slice.call(a.children), j = a.getElementsByClassName("lineBreak")[0], k = i.indexOf(j), l = []; k != -1;) l.push(k), k = i.indexOf(j, k + 1);
        var m = "</span>",
          n = "<br>",
          o = '<span class="spanPadding" style="-webkit-box-decoration-break: clone; box-decoration-break: clone; ';
        if (l.length) l.forEach(function(a, b) {
          if (0 === b) {
            for (var c = "", d = 0; d < a; d++) f += i[d].outerHTML, 0 === d && (c = e.concat(i[d].style.cssText));
            f = o + c + '">' + f
          }
          for (var j = "", k = a + 1; k < i.length; k++) g += i[k].outerHTML, k === i.length - 1 && (j += e.concat(i[k].style.cssText));
          g = o + j + '">' + g, f && g && b === l.length - 1 ? h += f + m + n + g + m : f && g && b !== l.length - 1 ? h += f + m + n + g + m + n : f && !g ? h += f + m : !f && g && b === l.length - 1 ? h += g + m : !f && g && b !== l.length - 1 && (h += g + m + n)
        });
        else {
          for (var p = "", q = 0; q < i.length; q++) p += i[q].style.cssText;
          h = o + e + p + '">' + a.innerHTML + m
        }
        return h
      }

      function I(a, b) {
        var c = document.createElement("div");
        return a.forEach(function(a) {
          if (!a.hasOwnProperty("metadata"))
            if (a.hasOwnProperty("span")) {
              var d = a.span.__children,
                e = document.createElement("span");
              if (a.span.hasOwnProperty("style")) {
                var f = B(a.span.style, b);
                e.className = "spanPadding " + a.span.style, e.style.cssText = f.join(" ")
              }
              d.forEach(function(a) {
                if (!d.hasOwnProperty("metadata"))
                  if (a.hasOwnProperty("#text")) {
                    var b = document.createTextNode(a["#text"]);
                    e.appendChild(b)
                  } else if ("br" in a) {
                  e.hasChildNodes() && c.appendChild(e);
                  var f = document.createElement("br");
                  f.className = "lineBreak", c.appendChild(f);
                  var g = document.createElement("span");
                  g.className = e.className, g.style.cssText = e.style.cssText, e = g
                }
              }), c.appendChild(e)
            } else if (a.hasOwnProperty("br")) {
            var g = document.createElement("br");
            g.className = "lineBreak", c.appendChild(g)
          } else if (a.hasOwnProperty("#text")) {
            var h = document.createElement("span");
            h.textContent = a["#text"], c.appendChild(h)
          }
        }), c
      }

      function J(a, b, c) {
        var d, e, f = [],
          g = a.region,
          h = b.region;
        return h && (d = F(h, c)), g ? (e = f.concat(F(g, c)), f = d ? x(d, e) : e) : d && (f = d), L(f, W), f
      }

      function K(a, b) {
        var c, d, e, f = [],
          g = a.style,
          h = Q.tt.body.style,
          i = Q.tt.body.div.style,
          j = "";
        return h && (c = B(h, b), j = "paragraph " + h), i && (d = B(i, b), c ? (d = x(c, d), j += " " + i) : j = "paragraph " + i), g ? (e = B(g, b), c && d ? (f = x(d, e), j += " " + g) : c ? (f = x(c, e), j += " " + g) : d ? (f = x(d, e), j += " " + g) : (f = e, j = "paragraph " + g)) : c && !d ? f = c : !c && d && (f = d), L(f, X), [f, j]
      }

      function L(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (u(c, a) || a.push(c + ":" + b[c]))
      }
      var M = this.context,
        N = (0, k.default)(M).getInstance().log,
        O = void 0,
        P = void 0,
        Q = void 0,
        R = void 0,
        S = void 0,
        T = void 0,
        U = void 0,
        V = void 0,
        W = void 0,
        X = void 0,
        Y = void 0,
        Z = void 0,
        $ = void 0,
        _ = void 0,
        aa = void 0,
        ba = void 0,
        ca = void 0,
        da = void 0,
        ea = void 0,
        fa = 0;
      return O = {
        parse: j,
        setConfig: a
      }, n(), O
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f),
      h = a(4),
      i = d(h),
      j = a(8),
      k = d(j),
      l = 3600,
      m = 60;
    e.__dashjs_factory_name = "TTMLParser", c.default = g.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    4: 4,
    8: 8
  }],
  159: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        try {
          new window.URL("x", "https://y");
          h = l
        } catch (a) {} finally {
          h = h || m
        }
      }

      function b(a) {
        var b = a.indexOf("/"),
          c = a.lastIndexOf("/");
        return b !== -1 ? c === b + 1 ? a : (a.indexOf("?") !== -1 && (a = a.substring(0, a.indexOf("?"))), a.substring(0, c + 1)) : ""
      }

      function c(a) {
        var b = a.match(k);
        return b ? b[1] : ""
      }

      function d(a) {
        return !i.test(a)
      }

      function e(a) {
        return d(a) && "/" === a.charAt(0)
      }

      function f(a) {
        return j.test(a)
      }

      function g(a, b) {
        return h(a, b)
      }
      var h = void 0,
        i = /^[a-z][a-z0-9+\-.]*:/i,
        j = /^https?:\/\//i,
        k = /^([a-z][a-z0-9+\-.]*:\/\/[^\/]+)\/?/i,
        l = function(a, b) {
          try {
            return new window.URL(a, b).toString()
          } catch (c) {
            return a
          }
        },
        m = function(a, f) {
          var g = b;
          if (!f) return a;
          if (!d(a)) return a;
          e(a) && (g = c);
          var h = g(f),
            i = "/" !== h.charAt(h.length - 1) && "/" !== a.charAt(0) ? "/" : "";
          return [h, a].join(i)
        };
      a();
      var n = {
        parseBaseUrl: b,
        parseOrigin: c,
        isRelative: d,
        isPathAbsolute: e,
        isHTTPURL: f,
        resolve: g
      };
      return n
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f);
    e.__dashjs_factory_name = "URLUtils", c.default = g.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10
  }],
  160: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e() {
      function a() {
        k = /(?:\r\n|\r|\n)/gm, l = /-->/, m = /(^[\s]+|[\s]+$)/g, n = /\s\b/g
      }

      function b(a) {
        var b, e, g = [];
        a = a.split(k), b = a.length, e = -1;
        for (var i = 0; i < b; i++) {
          var j = a[i];
          if (j.length > 0 && "WEBVTT" !== j && j.match(l)) {
            var n = d(j),
              o = n.cuePoints,
              p = n.styles,
              q = f(a, i + 1),
              r = c(o[0].replace(m, "")),
              s = c(o[1].replace(m, ""));
            !isNaN(r) && !isNaN(s) && r >= e && s > r ? "" !== q ? (e = r, g.push({
              start: r,
              end: s,
              data: q,
              styles: p
            })) : h("Skipping cue due to empty/malformed cue text") : h("Skipping cue due to incorrect cue timing")
          }
        }
        return g
      }

      function c(a) {
        var b = a.split(":"),
          c = b.length - 1;
        return a = 60 * parseInt(b[c - 1], 10) + parseFloat(b[c]), 2 === c && (a += 3600 * parseInt(b[0], 10)), a
      }

      function d(a) {
        var b = a.split(l),
          c = b[1].split(n);
        return c.shift(), b[1] = c[0], c.shift(), {
          cuePoints: b,
          styles: e(c)
        }
      }

      function e(a) {
        var b = {};
        return a.forEach(function(a) {
          if (a.split(/:/).length > 1) {
            var c = a.split(/:/)[1];
            c && c.search(/%/) != -1 && (c = parseInt(c.replace(/%/, ""), 10)), (a.match(/align/) || a.match(/A/)) && (b.align = c), (a.match(/line/) || a.match(/L/)) && (b.line = c), (a.match(/position/) || a.match(/P/)) && (b.position = c),
              (a.match(/size/) || a.match(/S/)) && (b.size = c)
          }
        }), b
      }

      function f(a, b) {
        for (var c, d = b, e = "", f = "";
          "" !== a[d] && d < a.length;) d++;
        if (c = d - b, c > 1)
          for (var g = 0; g < c; g++) {
            if (f = a[b + g], f.match(l)) {
              e = "";
              break
            }
            e += f, g !== c - 1 && (e += "\n")
          } else f = a[b], f.match(l) || (e = f);
        return decodeURI(e)
      }
      var g = this.context,
        h = (0, i.default)(g).getInstance().log,
        j = void 0,
        k = void 0,
        l = void 0,
        m = void 0,
        n = void 0;
      return j = {
        parse: b
      }, a(), j
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(10),
      g = d(f),
      h = a(8),
      i = d(h);
    e.__dashjs_factory_name = "VTTParser", c.default = g.default.getSingletonFactory(e), b.exports = c.default
  }, {
    10: 10,
    8: 8
  }],
  161: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.mediaType = null, this.bitrate = null, this.width = null, this.height = null, this.qualityIndex = NaN
    };
    c.default = e, b.exports = c.default
  }, {}],
  162: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.streamId = null, this.mediaInfo = null, this.segmentType = null, this.quality = NaN, this.index = NaN, this.bytes = null, this.start = NaN, this.end = NaN, this.duration = NaN
    };
    c.default = e, b.exports = c.default
  }, {}],
  163: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a(b, c, e) {
      d(this, a), this.code = b || null, this.message = c || null, this.data = e || null
    };
    c.default = e, b.exports = c.default
  }, {}],
  164: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.action = a.ACTION_DOWNLOAD, this.startTime = NaN, this.mediaType = null, this.mediaInfo = null, this.type = null, this.duration = NaN, this.timescale = NaN, this.range = null, this.url = null, this.serviceLocation = null, this.requestStartDate = null, this.firstByteDate = null, this.requestEndDate = null, this.quality = NaN, this.index = NaN, this.availabilityStartTime = null, this.availabilityEndTime = null, this.wallStartTime = null, this.bytesLoaded = NaN, this.bytesTotal = NaN, this.delayLoadingTime = NaN, this.responseType = "arraybuffer"
    };
    e.ACTION_DOWNLOAD = "download", e.ACTION_COMPLETE = "complete", c.default = e, b.exports = c.default
  }, {}],
  165: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function f(a, b) {
      if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
      a.prototype = Object.create(b && b.prototype, {
        constructor: {
          value: a,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var g = function(a, b, c) {
        for (var d = !0; d;) {
          var e = a,
            f = b,
            g = c;
          d = !1, null === e && (e = Function.prototype);
          var h = Object.getOwnPropertyDescriptor(e, f);
          if (void 0 !== h) {
            if ("value" in h) return h.value;
            var i = h.get;
            if (void 0 === i) return;
            return i.call(g)
          }
          var j = Object.getPrototypeOf(e);
          if (null === j) return;
          a = j, b = f, c = g, d = !0, h = j = void 0
        }
      },
      h = a(164),
      i = d(h),
      j = function(a) {
        function b(a) {
          e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this), this.url = a || null, this.checkForExistenceOnly = !0
        }
        return f(b, a), b
      }(i.default);
    c.default = j, b.exports = c.default
  }, {
    164: 164
  }],
  166: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.offset = NaN, this.type = null, this.size = NaN, this.isComplete = !0
    };
    c.default = e, b.exports = c.default
  }, {}],
  167: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.DVRWindowSize = NaN, this.loadedTime = null, this.availableFrom = null, this.minBufferTime = NaN, this.duration = NaN, this.isDynamic = !1, this.maxFragmentDuration = null
    };
    c.default = e, b.exports = c.default
  }, {}],
  168: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.id = null, this.index = null, this.type = null, this.streamInfo = null, this.representationCount = 0, this.lang = null, this.viewpoint = null, this.accessibility = null, this.audioChannelConfiguration = null, this.roles = null, this.codec = null, this.mimeType = null, this.contentProtection = null, this.isText = !1, this.KID = null, this.bitrateList = null
    };
    c.default = e, b.exports = c.default
  }, {}],
  169: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.TcpList = [], this.HttpList = [], this.RepSwitchList = [], this.BufferLevel = [], this.BufferState = [], this.PlayList = [], this.DroppedFrames = [], this.SchedulingInfo = [], this.DVRInfo = [], this.ManifestUpdate = [], this.RequestsQueue = null, this.DVBErrors = [], this.BolaState = []
    };
    c.default = e, b.exports = c.default
  }, {}],
  170: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.id = null, this.index = null, this.start = NaN, this.duration = NaN, this.manifestInfo = null, this.isLast = !0, this.isFirst = !0
    };
    c.default = e, b.exports = c.default
  }, {}],
  171: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function f(a, b) {
      if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
      a.prototype = Object.create(b && b.prototype, {
        constructor: {
          value: a,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var g = function(a, b, c) {
        for (var d = !0; d;) {
          var e = a,
            f = b,
            g = c;
          d = !1, null === e && (e = Function.prototype);
          var h = Object.getOwnPropertyDescriptor(e, f);
          if (void 0 !== h) {
            if ("value" in h) return h.value;
            var i = h.get;
            if (void 0 === i) return;
            return i.call(g)
          }
          var j = Object.getPrototypeOf(e);
          if (null === j) return;
          a = j, b = f, c = g, d = !0, h = j = void 0
        }
      },
      h = a(164),
      i = d(h),
      j = function(a) {
        function b(a, c) {
          e(this, b), g(Object.getPrototypeOf(b.prototype), "constructor", this).call(this), this.url = a || null, this.type = c || null, this.mediaType = "stream", this.responseType = "text"
        }
        return f(b, a), b
      }(i.default);
    c.default = j, b.exports = c.default
  }, {
    164: 164
  }],
  172: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.video = null, this.captionData = null, this.label = null, this.lang = null, this.defaultTrack = !1, this.kind = null, this.isFragmented = !1, this.isEmbedded = !1
    };
    c.default = e, b.exports = c.default
  }, {}],
  173: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.id = null, this.quality = null, this.DVRWindow = null, this.fragmentDuration = null, this.mediaInfo = null, this.MSETimeOffset = null
    };
    c.default = e, b.exports = c.default
  }, {}],
  174: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.t = null, this.xywh = null, this.track = null, this.id = null, this.s = null
    };
    c.default = e, b.exports = c.default
  }, {}],
  175: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this._s = void 0
    };
    c.default = e, b.exports = c.default
  }, {}],
  176: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.t = null, this.level = null
    };
    c.default = e, b.exports = c.default
  }, {}],
  177: [function(a, b, c) {
    "use strict";

    function d(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }

    function e(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var f = a(64),
      g = d(f),
      h = function a() {
        e(this, a), this.target = null, this.state = g.default.BUFFER_EMPTY
      };
    c.default = h, b.exports = c.default
  }, {
    64: 64
  }],
  178: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.time = null, this.range = null, this.manifestInfo = null
    };
    c.default = e, b.exports = c.default
  }, {}],
  179: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.time = null, this.droppedFrames = null
    };
    c.default = e, b.exports = c.default
  }, {}],
  180: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
        d(this, a), this.tcpid = null, this.type = null, this.url = null, this.actualurl = null, this.range = null, this.trequest = null, this.tresponse = null, this.responsecode = null, this.interval = null, this.trace = [], this._stream = null, this._tfinish = null, this._mediaduration = null, this._responseHeaders = null, this._serviceLocation = null
      },
      f = function a() {
        d(this, a), this.s = null, this.d = null, this.b = []
      };
    e.MPD_TYPE = "MPD", e.XLINK_EXPANSION_TYPE = "XLinkExpansion", e.INIT_SEGMENT_TYPE = "InitializationSegment", e.INDEX_SEGMENT_TYPE = "IndexSegment", e.MEDIA_SEGMENT_TYPE = "MediaSegment", e.BITSTREAM_SWITCHING_SEGMENT_TYPE = "BitstreamSwitchingSegment", e.OTHER_TYPE = "other", c.HTTPRequest = e, c.HTTPRequestTrace = f
  }, {}],
  181: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
        d(this, a), this.mediaType = null, this.type = null, this.requestTime = null, this.fetchTime = null, this.availabilityStartTime = null, this.presentationStartTime = 0, this.clientTimeOffset = 0, this.currentTime = null, this.buffered = null, this.latency = 0, this.streamInfo = [], this.trackInfo = []
      },
      f = function a() {
        d(this, a), this.id = null, this.index = null, this.start = null, this.duration = null
      },
      g = function a() {
        d(this, a), this.id = null, this.index = null, this.mediaType = null, this.streamIndex = null, this.presentationTimeOffset = null, this.startNumber = null, this.fragmentInfoType = null
      };
    c.ManifestUpdate = e, c.ManifestUpdateStreamInfo = f, c.ManifestUpdateTrackInfo = g
  }, {}],
  182: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.start = null, this.mstart = null, this.starttype = null, this.trace = []
    };
    e.INITIAL_PLAYOUT_START_REASON = "initial_playout", e.SEEK_START_REASON = "seek", e.RESUME_FROM_PAUSE_START_REASON = "resume", e.METRICS_COLLECTION_START_REASON = "metrics_collection_start";
    var f = function a() {
      d(this, a), this.representationid = null, this.subreplevel = null, this.start = null, this.mstart = null, this.duration = null, this.playbackspeed = null, this.stopreason = null
    };
    f.REPRESENTATION_SWITCH_STOP_REASON = "representation_switch", f.REBUFFERING_REASON = "rebuffering", f.USER_REQUEST_STOP_REASON = "user_request", f.END_OF_PERIOD_STOP_REASON = "end_of_period", f.END_OF_CONTENT_STOP_REASON = "end_of_content", f.METRICS_COLLECTION_STOP_REASON = "metrics_collection_end", f.FAILURE_STOP_REASON = "failure", c.PlayList = e, c.PlayListTrace = f
  }, {}],
  183: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.t = null, this.mt = null, this.to = null, this.lto = null
    };
    c.default = e, b.exports = c.default
  }, {}],
  184: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.loadingRequests = [], this.executedRequests = []
    };
    c.default = e, b.exports = c.default
  }, {}],
  185: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.mediaType = null, this.t = null, this.type = null, this.startTime = null, this.availabilityStartTime = null, this.duration = null, this.quality = null, this.range = null, this.state = null
    };
    c.default = e, b.exports = c.default
  }, {}],
  186: [function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    var e = function a() {
      d(this, a), this.tcpid = null, this.dest = null, this.topen = null, this.tclose = null, this.tconnect = null
    };
    c.default = e, b.exports = c.default
  }, {}]
}, {}, [5]);
//# sourceMappingURL=dash.all.min.js.map
(function () {
    if (!console) {
        console = {};
    }
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
})();