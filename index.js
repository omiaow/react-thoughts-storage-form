"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactContenteditable = _interopRequireDefault(require("react-contenteditable"));

require("./styles/form.css");

require("./styles/calendar.css");

require("./styles/loader.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TSForm = function TSForm(props) {
  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      error = _React$useState4[0],
      setError = _React$useState4[1];

  var _React$useState5 = _react["default"].useState(props.form),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      form = _React$useState6[0],
      setForm = _React$useState6[1];

  var _React$useState7 = _react["default"].useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      submitted = _React$useState8[0],
      setSubmitted = _React$useState8[1]; // editing options as checkbox [+] or radiobutton (*)


  var editOption = function editOption(type, formId, optionId) {
    var newForm = _objectSpread({}, form);

    if (type === "check") {
      newForm.listOfForms[formId].options[optionId].isTrue = !newForm.listOfForms[formId].options[optionId].isTrue;
    } else if (type === "radio") {
      if (newForm.listOfForms[formId].options[optionId].isTrue) {
        newForm.listOfForms[formId].options[optionId].isTrue = false;
      } else {
        newForm.listOfForms[formId].options.forEach(function (item, i) {
          item.isTrue = false;
        });
        newForm.listOfForms[formId].options[optionId].isTrue = true;
      }
    }

    setForm(newForm);
  }; // rendering options as checkbox [+] or radiobutton (*)


  var renderOptions = function renderOptions(item, id) {
    var jsxOptionList = [];
    item.options.forEach(function (optionItem, i) {
      var className;

      if (optionItem.isTrue) {
        className = "".concat(item.name, "-on");
      } else {
        className = "".concat(item.name, "-off");
      }

      jsxOptionList.push( /*#__PURE__*/_react["default"].createElement("div", {
        key: i
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: className,
        onClick: function onClick() {
          return editOption(item.name, id, i);
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "option"
      }, optionItem.title)));
    });
    return jsxOptionList;
  }; // rendering text input types


  var renderContentEditableType = function renderContentEditableType(item, id) {
    return /*#__PURE__*/_react["default"].createElement(_reactContenteditable["default"], {
      className: item.name,
      html: item.text,
      onChange: function onChange(e) {
        var newForm = _objectSpread({}, form);

        newForm.listOfForms[id].text = e.target.value.replace(/(<([^>]+)>)/ig, '');
        setForm(newForm);
      }
    });
  }; // rendering file uploading type


  var renderFileUploader = function renderFileUploader(item, id) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("label", {
      className: "upload",
      htmlFor: item.name
    }, item.name), /*#__PURE__*/_react["default"].createElement("input", {
      type: "file",
      id: item.name,
      style: {
        opacity: "0",
        position: "absolute",
        zIndex: "-1",
        width: "0"
      },
      onChange: function onChange(e) {
        var newForm = _objectSpread({}, form);

        var files = e.target.files;
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);

        reader.onload = function (e) {
          var formData = {
            file: e.target.result
          };
          newForm.listOfForms[id].file = formData;
          setForm(newForm);
        };
      }
    }));
  }; // rendering calendar


  var renderDatePicker = function renderDatePicker(item, id) {
    return /*#__PURE__*/_react["default"].createElement(Calendar, {
      editDate: function editDate(date) {
        var newForm = _objectSpread({}, form);

        newForm.listOfForms[id].date = date;
        setForm(newForm);
      }
    });
  }; // distributing inputs and rendering them


  var renderInputTypes = function renderInputTypes(item, id) {
    if (item.name === "check" || item.name === "radio") {
      return renderOptions(item, id);
    } else if (item.name === "text" || item.name === "paragraph") {
      return renderContentEditableType(item, id);
    } else if (item.name === "upload") {
      return renderFileUploader(item, id);
    } else if (item.name === "date") {
      return renderDatePicker(item, id);
    }
  }; // rendering list of forms


  var renderListOfForms = function renderListOfForms(formList) {
    var jsxFormList = [];
    formList.forEach(function (item, i) {
      jsxFormList.push( /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-card",
        key: i
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "top"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "title"
      }, item.title), renderInputTypes(item, i), /*#__PURE__*/_react["default"].createElement("div", {
        className: "bottom"
      })));
    });
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "input-area"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "form-name"
    }, form.name), jsxFormList, /*#__PURE__*/_react["default"].createElement("input", {
      type: "submit",
      value: "Submit",
      onClick: submit
    }));
  }; // submit answer


  var submit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var method, body, headers, response, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.prev = 1;
              method = "POST";
              body = JSON.stringify(form);
              headers = {};
              headers["Content-Type"] = "application/json";
              _context.next = 8;
              return fetch("https://thoughts-storage-backend.herokuapp.com/form/submit", {
                method: method,
                body: body,
                headers: headers
              });

            case 8:
              response = _context.sent;
              _context.next = 11;
              return response.json();

            case 11:
              data = _context.sent;
              setLoading(false);
              if (!response.ok) setError(data.message || "Something went wrong");else setSubmitted(true);
              _context.next = 20;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](1);
              setLoading(false);
              setError(_context.t0.message);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 16]]);
    }));

    return function submit() {
      return _ref.apply(this, arguments);
    };
  }();

  if (!loading) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "new-form"
    }, !submitted ? renderListOfForms(form.listOfForms) : /*#__PURE__*/_react["default"].createElement("div", {
      className: "message"
    }, "Thank you for response! ", /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("u", {
      onClick: function onClick() {
        return window.open("https://github.com/omiaow/thoughts-storage-front-end", "_blank");
      }
    }, "Powered by Thoughts Storage.")), Error(error, setError));
  } else return /*#__PURE__*/_react["default"].createElement(Loader, null);
};

var _default = TSForm;
/* ----- Extra Components ----- */
// Error Component

exports["default"] = _default;

var Error = function Error(error, clearError) {
  if (error) {
    setTimeout(function () {
      try {
        clearError();
      } catch (e) {} // ignore

    }, 5000);
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "error",
      style: {
        backgroundColor: "#854141"
      }
    }, error);
  } else {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "error"
    });
  }
}; // Calendar Component


var Calendar = /*#__PURE__*/function (_React$Component) {
  _inherits(Calendar, _React$Component);

  var _super = _createSuper(Calendar);

  function Calendar() {
    var _this;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      display: false,
      title: "Choose date",
      date: new Date(),
      renderDays: true
    });

    _defineProperty(_assertThisInitialized(_this), "moveLeft", function () {
      var newDate = new Date(_this.state.date);
      newDate.setMonth(newDate.getMonth() - 1);

      _this.setState({
        date: newDate
      });
    });

    _defineProperty(_assertThisInitialized(_this), "moveRight", function () {
      var newDate = new Date(_this.state.date);
      newDate.setMonth(newDate.getMonth() + 1);

      _this.setState({
        date: newDate
      });
    });

    _defineProperty(_assertThisInitialized(_this), "chooseDate", function (date) {
      var shortMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
      var newDate = new Date(date);
      newDate.setDate(newDate.getDate() + 1);

      _this.props.editDate("".concat(newDate.toISOString().slice(0, 10)));

      _this.setState({
        title: "".concat(date.getDate(), " - ").concat(shortMonthNames[date.getMonth()], ", ").concat(date.getFullYear()),
        display: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderDays", function (date) {
      var days = [];
      var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

      function getWeekDay(date) {
        var day = date.getDay();
        if (day === 0) day = 7;
        return day - 1;
      }

      for (var i = 0; i < getWeekDay(firstDay); i++) {
        days.push( /*#__PURE__*/_react["default"].createElement("div", {
          className: "empty",
          key: "".concat(i, "-empty")
        }));
      }

      var today = new Date();

      var _loop = function _loop() {
        var newDate = new Date(firstDay);

        if (newDate.getDate() === today.getDate() && newDate.getMonth() === today.getMonth() && newDate.getFullYear() === today.getFullYear()) {
          days.push( /*#__PURE__*/_react["default"].createElement("div", {
            className: "today",
            key: newDate.getDate(),
            onClick: function onClick() {
              return _this.chooseDate(newDate);
            }
          }, newDate.getDate()));
        } else {
          days.push( /*#__PURE__*/_react["default"].createElement("div", {
            className: "days",
            key: newDate.getDate(),
            onClick: function onClick() {
              return _this.chooseDate(newDate);
            }
          }, newDate.getDate()));
        }

        firstDay.setDate(firstDay.getDate() + 1);
      };

      while (firstDay.getTime() <= lastDay.getTime()) {
        _loop();
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "week-names"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "weekday"
      }, "Mo"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "weekday"
      }, "Tu"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "weekday"
      }, "We"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "weekday"
      }, "Th"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "weekday"
      }, "Fr"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "weekend"
      }, "Sa"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "weekend"
      }, "Su")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "date-numbers"
      }, days));
    });

    _defineProperty(_assertThisInitialized(_this), "renderYears", function () {
      var today = new Date();
      var newDate = new Date("".concat(today.getFullYear() - 100, "-").concat(today.getMonth(), "-").concat(today.getDate()));
      newDate.setMonth(newDate.getMonth() + 1);
      var years = [];

      var _loop2 = function _loop2(i) {
        var tempDate = new Date(newDate);
        years.push( /*#__PURE__*/_react["default"].createElement("div", {
          key: i,
          className: "years",
          onClick: function onClick() {
            return _this.setState({
              date: tempDate,
              renderDays: true
            });
          }
        }, tempDate.getFullYear()));
        newDate.setYear(newDate.getFullYear() + 1);
      };

      for (var i = 0; i < 200; i++) {
        _loop2(i);
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "year-numbers"
      }, years);
    });

    return _this;
  }

  _createClass(Calendar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "background-side",
        style: {
          display: this.state.display ? "" : "none"
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "control-window"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "exit",
        onClick: function onClick() {
          return _this2.setState({
            display: false
          });
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "name"
      }, "Date"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "calendar"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "calendar-header"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "left-button",
        onClick: function onClick() {
          return _this2.moveLeft();
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "month-name",
        onClick: function onClick() {
          return _this2.setState({
            renderDays: !_this2.state.renderDays
          });
        }
      }, "".concat(monthNames[this.state.date.getMonth()], " ").concat(this.state.date.getFullYear())), /*#__PURE__*/_react["default"].createElement("div", {
        className: "right-button",
        onClick: function onClick() {
          return _this2.moveRight();
        }
      })), this.state.renderDays ? this.renderDays(this.state.date) : this.renderYears(this.state.date)))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "date",
        onClick: function onClick() {
          return _this2.setState({
            display: true
          });
        }
      }, this.state.title));
    }
  }]);

  return Calendar;
}(_react["default"].Component); // Loader Component


var Loader = function Loader() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "loader-page"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "loader"
  }));
};
