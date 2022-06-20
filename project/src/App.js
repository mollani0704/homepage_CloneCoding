import logo from './logo.svg';
import {Route, Link} from 'react-router-dom';
import Main from './main';

import News from './components/news/news';
import ShoppingList from './components/shoppingList/shoppingList';
import WishList from './components/wishList/wishList';
import Login from './components/login/login';
import Store from './components/store/store';

import New from './components/new/new';
import Men from './components/men/men';
import Women from './components/women/women';
import Kids from './components/kids/kids';
import Customs from './components/customs/customs';

import './App.css';

function App() {
    return (
        <div>
            <div className="header">
                <div className="header_in">
                    <div className="logo">
                        <h2>
                            <Link to="/" className="link">
                                <div className="logoImg"></div>
                            </Link>
                        </h2>
                    </div>
                    <div className="nav">
                        <div className="login_menu">
                            <ul>
                                <li>
                                    <Link to="/news" className="link--loginMenu">
                                        News
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/shoppingList" className="link--loginMenu">
                                        장바구니
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/wishList" className="link--loginMenu">
                                        위시리스트
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/login" className="link--loginMenu">
                                        로그인
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/store" className="link--loginMenu">
                                        매장찾기
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="menu">
                            <ul>
                                <li>
                                    <Link to="/new" className="link--menu">
                                        NEW
                                        <i className="fa-solid fa-angle-down"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/men" className="link--menu">
                                        MEN
                                        <i className="fa-solid fa-angle-down"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/women" className="link--menu">
                                        WOMEN
                                        <i className="fa-solid fa-angle-down"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/kids" className="link--menu">
                                        KIDS
                                        <i className="fa-solid fa-angle-down"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/customs" className="link--menu">
                                        CUSTOMS
                                        <i className="fa-solid fa-angle-down"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', background: '#ccc'}}>
                <Route path="/" exact={true} component={Main} />
                <Route path="/news" exact={true} component={News} />
                <Route path="/shoppingList" exact={true} component={ShoppingList} />
                <Route path="/wishList" exact={true} component={WishList} />
                <Route path="/login" exact={true} component={Login} />
                <Route path="/store" exact={true} component={Store} />
                <Route path="/new" exact={true} component={New} />
                <Route path="/men" exact={true} component={Men} />
                <Route path="/women" exact={true} component={Women} />
                <Route path="/kids" exact={true} component={Kids} />
                <Route path="/customs" exact={true} component={Customs} />
            </div>
        </div>
    );
}

export default App;
