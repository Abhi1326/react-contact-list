
import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import {AboutUs} from "./aboutus";
import localStorageMock from "../../mock-local-storage";
import {MemoryRouter} from "react-router";

window.localStorage = localStorageMock;

test('AboutUs component should render as expected',()=>{
    const component =shallow(<MemoryRouter  initialEntries={ ['/aboutus'] }
                                            initialIndex={0}><AboutUs/></MemoryRouter>);
    const tree =toJson(component);
    expect(tree).toMatchSnapshot()
});
