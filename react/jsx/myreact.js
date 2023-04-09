const Navbar = ReactBootstrap.Navbar;
const Nav = ReactBootstrap.Nav;
const Fragment = React.Fragment;

function MyHeader (props) {
  return(
    <div class="jumbotron jumbotron-fluid" style={{backgroundImage: "url('images/jumbotron.jpg')"}}>
      <div class="container">
        <h1 class="display-4">{props.title}</h1>
        <p class="lead">{props.lead}</p>
      </div>
    </div>
  );
};

const navitems = {
  color: "dark",
  variant: "dark",
  brandlabel: "mizuLab",
  brandhref: "https://j54854.github.io/",
  navs: [
    {label: "Top", href: "https://j54854.github.io/"},
    {label: "Members", href: "https://j54854.github.io/member.html"},
    {label: "Research", href: "https://j54854.github.io/research.html"},
    {label: "Lectures", href: "https://j54854.github.io/lectures.html"},
    {label: "Theses", href: "https://j54854.github.io/theses.html"},
    {label: "Publications", href: "https://j54854.github.io/pubulications.html"},
  ],
};

function MyNavbar (props) {
  return (
    <Navbar bg={props.color} variant={props.variant} fixed="top" expand="sm">
      <Navbar.Brand href={props.brandhref}>{props.brandlabel}</Navbar.Brand>
      <Navbar.Toggle/>
      <Navbar.Collapse>
      <Nav className="ml-auto">
        {props.navs.map((nav) => (
          <Nav.Link href={nav.href}>{nav.label}</Nav.Link>
        ))}
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
 
function MyBread (props) {
  return(
    <nav class="my-2">
      <ol class="breadcrumb">
        {props.items.map((item, i) => (
          props.items.length -1 === i ? 
            <li class="breadcrumb-item active">
              {item.label}
            </li>
          :
            <li class="breadcrumb-item">
              <a href={item.href}>
                {item.label}
              </a>
            </li>
        ))}
      </ol>
    </nav>
  );
};

function MySidebar () {
  return(
    <Fragment>
      <div class="card my-4">
        <h4 class="card-header">
          Mizuyama Lab.
        </h4>
        <div class="card-body">
          <img alt="" class="img-fluid rounded-circle d-block mx-auto" height="200" src="images/sidebar.jpg" width="200"></img>
        </div>
        <div class="card-body">
          <div class="rich-text">
            <p>青山学院大学 理工学部 経営システム工学科 集合知システム研究室</p>
            <p><b>住所：</b> 〒252-5258 相模原市中央区淵野辺5-10-1</p>
            <p><b>コンタクト：</b> mizuyama [at] ise.aoyama.ac.jp</p>
            <p>/ <a href="http://www.agnes.aoyama.ac.jp/ise/mizuyama/">Agnes site</a> / <a href="http://www.ise.aoyama.ac.jp/author/mizuyama-labo/">ISE site</a> / <a href="https://twitter.com/mizulab">Twitter</a> /</p>
          </div>
        </div>
        </div>
          <div class="rich-text">
            <p>
              <a class="btn btn-primary btn-block" href="https://j54854.github.io/join.html" role="button">How to Join Us</a>
            </p>
        </div>
    </Fragment>
  );
};

function MyFooter () {
  return(
    <nav class="navbar navbar-dark bg-dark fixed-bottom">
      <span class="navbar-text mx-auto py-0">
          © 2023 hajiMIZU
      </span>
    </nav>
  );
};
