import React from "react";
import { RiSearch2Fill } from "react-icons/ri";
import { productData } from "./SupplementData";
import Products from "../../homeComponents/Products/index";
import Footer from "../../common/Footer/index";

import {
  SearchBarContainer,
  Search,
  SearchBarInput,
  SearchIcon,
} from "./SupplementFilterElements";

function SupplementFilter() {
  return (
    <>
      <SearchBarContainer>
        <Search>
          <SearchBarInput />
          <SearchIcon>
            <RiSearch2Fill></RiSearch2Fill>
          </SearchIcon>
        </Search>
      </SearchBarContainer>
      <Products heading="Choose Your Favorite" data={productData} />
      <Footer />
    </>
  );
}

export default SupplementFilter;
