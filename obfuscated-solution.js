const _0x5005e3 = _0x2b88;
(function (_0x7fbc9b, _0x312271) {
  const _0x2ca4cc = _0x2b88,
    _0x1cabad = _0x7fbc9b();
  while (!![]) {
    try {
      const _0x2018b3 =
        parseInt(_0x2ca4cc(0x152)) / 0x1 +
        -parseInt(_0x2ca4cc(0x140)) / 0x2 +
        (parseInt(_0x2ca4cc(0x154)) / 0x3) *
          (-parseInt(_0x2ca4cc(0x14f)) / 0x4) +
        -parseInt(_0x2ca4cc(0x144)) / 0x5 +
        (parseInt(_0x2ca4cc(0x150)) / 0x6) *
          (-parseInt(_0x2ca4cc(0x14c)) / 0x7) +
        (-parseInt(_0x2ca4cc(0x149)) / 0x8) *
          (parseInt(_0x2ca4cc(0x14d)) / 0x9) +
        (-parseInt(_0x2ca4cc(0x14b)) / 0xa) *
          (-parseInt(_0x2ca4cc(0x143)) / 0xb);
      if (_0x2018b3 === _0x312271) break;
      else _0x1cabad["push"](_0x1cabad["shift"]());
    } catch (_0x44b5f6) {
      _0x1cabad["push"](_0x1cabad["shift"]());
    }
  }
})(_0x566e, 0x4ac52);
let score = 0x0;
for (const id of getAllHoleIds()) {
  const elem = document[_0x5005e3(0x14a)]("#" + id),
    onClick = () => {
      const _0x334223 = _0x5005e3;
      elem[_0x334223(0x147)][_0x334223(0x151)](_0x334223(0x13a)) &&
        (elem[_0x334223(0x147)][_0x334223(0x13f)](_0x334223(0x13a)),
        elem[_0x334223(0x147)]["add"]("animating-whack"),
        setTimeout(() => {
          const _0x33ddb3 = _0x334223;
          elem[_0x33ddb3(0x147)][_0x33ddb3(0x13f)]("animating-whack");
        }, 0x1f4),
        addToScore(),
        score >= 0x2d && clearInterval(interval));
    };
  elem[_0x5005e3(0x153)](_0x5005e3(0x13e), onClick),
    elem[_0x5005e3(0x153)](_0x5005e3(0x145), (_0xd9c53c) => {
      _0xd9c53c["key"] === "Enter" && onClick();
    });
}
const interval = setInterval(() => {
  const _0x39bc4f = _0x5005e3,
    _0x3b16b4 = getRandomUnwhackedHoleId(),
    _0x1f7a8e = document[_0x39bc4f(0x14a)]("#" + _0x3b16b4);
  _0x1f7a8e["classList"][_0x39bc4f(0x13b)](_0x39bc4f(0x13a));
}, 0x3e8);
function addToScore() {
  const _0x4cfc44 = _0x5005e3;
  score++,
    (document["querySelector"](_0x4cfc44(0x141))["innerText"] =
      _0x4cfc44(0x13d) + score);
}
function _0x566e() {
  const _0x1afd28 = [
    "addEventListener",
    "15909pTeZBh",
    ".hole:not(.needs-whack)",
    "needs-whack",
    "add",
    "length",
    "Score:\x20",
    "click",
    "remove",
    "876554kdwmFc",
    "#score",
    "floor",
    "11MhZLrD",
    "312825iQIrnH",
    "keydown",
    "querySelectorAll",
    "classList",
    "push",
    "2092184SaDqGg",
    "querySelector",
    "20443320RpwvHB",
    "996835tgGNNm",
    "9RZBfsj",
    "getAttribute",
    "452TvrLgb",
    "24zFFjvS",
    "contains",
    "193150pmQfOU",
  ];
  _0x566e = function () {
    return _0x1afd28;
  };
  return _0x566e();
}
function getRandomUnwhackedHoleId() {
  const _0x129e0d = _0x5005e3,
    _0x5c4f3b = document[_0x129e0d(0x146)](_0x129e0d(0x155));
  if (_0x5c4f3b[_0x129e0d(0x13c)] === 0x0) return null;
  else {
    const _0x940163 = Math[_0x129e0d(0x142)](
      Math["random"]() * _0x5c4f3b["length"]
    );
    return _0x5c4f3b[_0x940163][_0x129e0d(0x14e)]("id");
  }
}
function _0x2b88(_0x10117d, _0x2d37d6) {
  const _0x566e7b = _0x566e();
  return (
    (_0x2b88 = function (_0x2b884f, _0x426651) {
      _0x2b884f = _0x2b884f - 0x13a;
      let _0x3ab09c = _0x566e7b[_0x2b884f];
      return _0x3ab09c;
    }),
    _0x2b88(_0x10117d, _0x2d37d6)
  );
}
function getAllHoleIds() {
  const _0x14dc82 = _0x5005e3,
    _0x4c9d0d = document[_0x14dc82(0x146)](".hole"),
    _0x21d178 = [];
  for (const _0x5430e5 of _0x4c9d0d) {
    _0x21d178[_0x14dc82(0x148)](_0x5430e5["getAttribute"]("id"));
  }
  return _0x21d178;
}
