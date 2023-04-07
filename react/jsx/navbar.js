var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;

// 共通のNavBar, SideBar, Footerをここで作って全ページで使う

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


function TopTab () {
  return(
    <div class="my-4">
      <h5 class="my-3">ゲーム主催者の方へ</h5>
      <p>「Create &amp; Assign」タブで新しいゲームの作成やプレイヤーの割当てを行うことができます．</p>
      <p>「Review」タブには，実施中および終了済の主催ゲームの一覧が表示されています．必要に応じて，そこからゲームのログデータをダウンロードすることができます．</p>
      <h5 class="my-3">ゲームをプレイするには？</h5>
      <p>ここは「ゲーム主催者のページ」です．プレイヤーとしてゲームに参加する場合は「ゲームプレイヤーのページ」に移ってください．</p>
      <Button variant="outline-primary" size="sm" onClick={() => location.href="../"}>ゲームプレイヤーのページへ</Button>
    </div>
  );
}
