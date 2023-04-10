var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var Fragment = React.Fragment;

function MyHeader(props) {
  return React.createElement(
    "div",
    { "class": "jumbotron jumbotron-fluid", style: { backgroundImage: "url('images/jumbotron.jpg')" } },
    React.createElement(
      "div",
      { "class": "container" },
      React.createElement(
        "h1",
        { "class": "display-4" },
        props.title
      ),
      React.createElement(
        "p",
        { "class": "lead" },
        props.lead
      )
    )
  );
};

var navitems = {
  color: "dark",
  variant: "dark",
  brandlabel: "mizuLab",
  brandhref: "https://www.hajimizu.net/",
  navs: [{ label: "Top", href: "https://www.hajimizu.net/" }, { label: "Members", href: "https://www.hajimizu.net/members.html" }, { label: "Research", href: "https://www.hajimizu.net/research.html" }, { label: "Lectures", href: "https://www.hajimizu.net/lectures.html" }, { label: "Theses", href: "https://www.hajimizu.net/theses.html" }, { label: "Publications", href: "https://www.hajimizu.net/pubulications.html" }]
};

function MyNavbar(props) {
  return React.createElement(
    Navbar,
    { bg: props.color, variant: props.variant, fixed: "top", expand: "sm" },
    React.createElement(
      Navbar.Brand,
      { href: props.brandhref },
      props.brandlabel
    ),
    React.createElement(Navbar.Toggle, null),
    React.createElement(
      Navbar.Collapse,
      null,
      React.createElement(
        Nav,
        { className: "ml-auto" },
        props.navs.map(function (nav) {
          return React.createElement(
            Nav.Link,
            { href: nav.href },
            nav.label
          );
        })
      )
    )
  );
};

function MyBread(props) {
  return React.createElement(
    "nav",
    { "class": "my-2" },
    React.createElement(
      "ol",
      { "class": "breadcrumb" },
      props.items.map(function (item, i) {
        return props.items.length - 1 === i ? React.createElement(
          "li",
          { "class": "breadcrumb-item active" },
          item.label
        ) : React.createElement(
          "li",
          { "class": "breadcrumb-item" },
          React.createElement(
            "a",
            { href: item.href },
            item.label
          )
        );
      })
    )
  );
};

function MySidebar() {
  return React.createElement(
    Fragment,
    null,
    React.createElement(
      "div",
      { "class": "card my-4" },
      React.createElement(
        "h4",
        { "class": "card-header" },
        "Mizuyama Lab."
      ),
      React.createElement(
        "div",
        { "class": "card-body" },
        React.createElement("img", { alt: "", "class": "img-fluid rounded-circle d-block mx-auto", height: "200", src: "images/sidebar.jpg", width: "200" })
      ),
      React.createElement(
        "div",
        { "class": "card-body" },
        React.createElement(
          "div",
          { "class": "rich-text" },
          React.createElement(
            "p",
            null,
            "\u9752\u5C71\u5B66\u9662\u5927\u5B66 \u7406\u5DE5\u5B66\u90E8 \u7D4C\u55B6\u30B7\u30B9\u30C6\u30E0\u5DE5\u5B66\u79D1 \u96C6\u5408\u77E5\u30B7\u30B9\u30C6\u30E0\u7814\u7A76\u5BA4"
          ),
          React.createElement(
            "p",
            null,
            React.createElement(
              "b",
              null,
              "\u4F4F\u6240\uFF1A"
            ),
            " \u3012252-5258 \u76F8\u6A21\u539F\u5E02\u4E2D\u592E\u533A\u6DF5\u91CE\u8FBA5-10-1"
          ),
          React.createElement(
            "p",
            null,
            React.createElement(
              "b",
              null,
              "\u30B3\u30F3\u30BF\u30AF\u30C8\uFF1A"
            ),
            " mizuyama [at] ise.aoyama.ac.jp"
          ),
          React.createElement(
            "p",
            null,
            "/ ",
            React.createElement(
              "a",
              { href: "http://www.agnes.aoyama.ac.jp/ise/mizuyama/" },
              "Agnes site"
            ),
            " / ",
            React.createElement(
              "a",
              { href: "http://www.ise.aoyama.ac.jp/author/mizuyama-labo/" },
              "ISE site"
            ),
            " / ",
            React.createElement(
              "a",
              { href: "https://twitter.com/mizulab" },
              "Twitter"
            ),
            " /"
          )
        )
      )
    ),
    React.createElement(
      "div",
      { "class": "rich-text" },
      React.createElement(
        "p",
        null,
        React.createElement(
          "a",
          { "class": "btn btn-primary btn-block", href: "https://www.hajimizu.net/join.html", role: "button" },
          "How to Join Us"
        )
      )
    )
  );
};

function MyFooter() {
  return React.createElement(
    "nav",
    { "class": "navbar navbar-dark bg-dark fixed-bottom" },
    React.createElement(
      "span",
      { "class": "navbar-text mx-auto py-0" },
      "\xA9 2023 hajiMIZU"
    )
  );
};