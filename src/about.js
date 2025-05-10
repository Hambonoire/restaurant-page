import { pageDefaults } from "./pageDefaults.js";
import { header } from "./header.js";
import { getPageToLoad } from "./index.js";

export const about = () => {

    window.location.reload();
    pageDefaults();
    header();
    
};