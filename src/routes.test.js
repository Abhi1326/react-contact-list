/**
 * Created by Counter on 7/2/2017.
 */
import React from "react";
import {shallow} from "enzyme";
import {Route} from "react-router";
import Routes from "./routes";
import Home from "./components/Home/home";
import Login from "./components/Login/login";
import AboutUs from "./components/AboutUs/aboutus";
import Profile from "./components/AboutUs/profile/profile";
import Team from "./components/AboutUs/team/team";
import ContactUs from "./components/AboutUs/contactus/contactus";

it('renders correct routes', () => {
    const wrapper = shallow(<Routes />);
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
    }, {});

    expect(pathMap['/']).toBe(Login);
    expect(pathMap['/home']).toBe(Home);
    expect(pathMap['/aboutus']).toBe(AboutUs);
    expect(pathMap['/aboutus/contactus']).toBe(ContactUs);
    expect(pathMap['/aboutus/team']).toBe(Team);
    expect(pathMap['/aboutus/profile']).toBe(Profile);
});