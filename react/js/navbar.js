var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;

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