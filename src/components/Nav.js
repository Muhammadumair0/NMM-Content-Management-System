import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Nav = () => {

    const [itemFocus, setItemFocus] = useState(null);
    const [subItemFocus, setSubItemFocus] = useState(null);
    const [navList, setNavList] = useState([
        { name: 'Menus', subNav: [], open: false },
        { name: 'Posts', subNav: ['All Posts', 'Categories', 'Tags'], open: false },
        { name: 'Pages', subNav: ['All Pages', 'Categories'], open: false },
        { name: 'Admins', subNav: [], open: false },
        { name: 'Users', subNav: [], open: false },
        { name: 'Media', subNav: [], open: false },
        { name: 'Breaks', subNav: [], open: false }
    ]);

    const history = useHistory();

    const changeRoute = (navItem, index) => {
        if (!navItem.subNav.length) {
            const name = stringFormatter(navItem.name);
            history.push(`/${name}`);
            setSubItemFocus(null);
        }

        setNavList(() => {
            const updatedNavList = navList.map(item => {
                return {
                    ...item,
                    open: item.name === navItem.name ? !item.open : false
                }
            })
            return [
                ...updatedNavList
            ]
        });

        setItemFocus(index);

    }

    const changeRouteSubNav = (navItem, index, subNavItem, subIndex) => {
        const name = stringFormatter(subNavItem);
        history.push(`/${stringFormatter(navItem.name)}/${name}`);
        setSubItemFocus(index + '' +subIndex);
    }

    const onLogout = () => {
        history.push('/');
    }

    return (
        <div className={"side-nav"}>
            <div className={"first-section"}>
                <div className={"header"}>
                    <div className={"circle-image"} />
                    <p>{"Near Mint Markets"}</p>
                </div>
                <div className={"logout"}>
                    <p>{"Ethan Haskell"}</p>
                    <p onClick={onLogout}>{"LOG OUT"}<span><img src={require('../assets/SVG/logout.svg')} alt={""} /></span></p>
                </div>
            </div>
            <div className={"second-section"}>
                {
                    navList.map((navItem, index) => {
                        return (
                            <div className={"nav-main"}>
                                <div style={{ backgroundColor: itemFocus === index && '#333333' }} key={index} className={"nav-item"} onClick={() => changeRoute(navItem, index)}>
                                    <div><img src={require(`../assets/SVG/${navItem.name.toLowerCase()}.svg`)} alt={""} /></div>
                                    <p>{navItem.name}</p>
                                </div>
                                <div style={{ display: !(navItem.subNav.length && navItem.open) && 'none' }}>
                                    {navItem.subNav.length && navItem.subNav.map((subNavItem, subIndex) => {
                                        return <p style={{ fontWeight: (itemFocus === index && subItemFocus === index + '' + subIndex) && 'bold' }} onClick={() => changeRouteSubNav(navItem, index, subNavItem, subIndex)}>{subNavItem}</p>
                                    })}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Nav;

function stringFormatter(string) {
    return (string.replace(' ', '-')).toLowerCase()
}