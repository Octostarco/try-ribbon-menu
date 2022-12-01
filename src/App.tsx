import React from "react";
import {
  RibbonButton,
  RibbonDropdown,
  RibbonDropdownMenu,
  RibbonIconButton,
  RibbonMenu,
  RibbonSplitButton,
  RibbonDropdownItem,
  RibbonDropdownDivider,
  RibbonButtonGroup,
  RibbonTab,
  RibbonTabGroup,
  RibbonToolButton,
  RibbonTabSubGroup,
  RibbonDropdownCheckItem,
  RibbonTabDivider,
} from "@olton/ribbon-menu";

import "./index.css";

const App = () => {
  return (
    <div>
      <RibbonMenu className="dark-mode1">
        <RibbonTab mode="static" label="Home"></RibbonTab>
        <RibbonTab label="File">
          <RibbonTabGroup title="Push Buttons">
            <RibbonButton
              caption="Mail"
              icon="mif-envelop"
              title="Write Mail"
              onClick={() => {
                alert("Mail Button was Clicked!");
              }}
            />
            <RibbonButton caption="Share" icon="mif-share" />
            <RibbonDropdown>
              <RibbonButton
                caption="Apps"
                icon="mif-apps"
                title="Applications"
              />
              <RibbonDropdownMenu>
                <RibbonDropdownItem
                  caption="Windows 10"
                  onClick={(e) => {
                    console.log(e);
                  }}
                />
                <RibbonDropdownItem caption="Windows 11" />
                <RibbonDropdownItem caption="Office 365" />
                <RibbonDropdownDivider />
                <RibbonButtonGroup active={2}>
                  <RibbonDropdownItem
                    caption="Windows 10"
                    onClick={(e) => {
                      console.log(e);
                    }}
                  />
                  <RibbonDropdownItem caption="Windows 11" />
                  <RibbonDropdownItem caption="Office 365" />
                </RibbonButtonGroup>
                <RibbonDropdownDivider />
                <RibbonDropdownCheckItem
                  checked
                  caption="Windows 10"
                  onClick={(e) => {
                    console.log(e);
                  }}
                />
                <RibbonDropdownCheckItem checked caption="Windows 11" />
                <RibbonDropdownCheckItem checked caption="Office 365" />
                <RibbonDropdownDivider />
                <RibbonButtonGroup active={[2]} radio>
                  <RibbonDropdownItem caption="Windows 10" />
                  <RibbonDropdownItem caption="Windows 11" />
                  <RibbonDropdownItem caption="Office 365" />
                </RibbonButtonGroup>
                <RibbonDropdownDivider />
                <RibbonDropdown>
                  <RibbonDropdownItem caption="Apps" />
                  <RibbonDropdownMenu>
                    <RibbonDropdownItem caption="Windows 10" />
                    <RibbonDropdownItem caption="Windows 11" />
                    <RibbonDropdownItem caption="Office 365" />
                  </RibbonDropdownMenu>
                </RibbonDropdown>
              </RibbonDropdownMenu>
            </RibbonDropdown>
          </RibbonTabGroup>

          <RibbonTabGroup title="Icon and Tool buttons">
            <RibbonTabSubGroup style={{ width: "70px" }}>
              <RibbonIconButton caption="Mail" icon="mif-envelop" />
              <RibbonIconButton caption="Share" icon="mif-share" />
              <RibbonDropdown>
                <RibbonIconButton caption="Rocket" icon="mif-rocket" />
                <RibbonDropdownMenu>
                  <RibbonDropdownItem caption="Windows 10" />
                  <RibbonDropdownItem caption="Windows 11" />
                  <RibbonDropdownItem caption="Office 365" />
                </RibbonDropdownMenu>
              </RibbonDropdown>
            </RibbonTabSubGroup>

            <RibbonTabDivider />

            <RibbonTabSubGroup
              style={{ display: "flex", flexFlow: "row wrap", width: "74px" }}
            >
              <RibbonToolButton caption="Mail" icon="mif-envelop" />
              <RibbonToolButton caption="Share" icon="mif-share" />
              <RibbonToolButton caption="Rocket" icon="mif-rocket" />
              <RibbonToolButton caption="Settings" icon="mif-cogs" />
              <RibbonToolButton caption="Bell" icon="mif-bell" />
              <RibbonToolButton caption="Alarm" icon="mif-alarm" />
              <RibbonDropdown>
                <RibbonToolButton caption="Apps" icon="mif-apps" />
                <RibbonDropdownMenu>
                  <RibbonDropdownItem caption="Windows 10" />
                  <RibbonDropdownItem caption="Windows 11" />
                  <RibbonDropdownItem caption="Office 365" />
                </RibbonDropdownMenu>
              </RibbonDropdown>
            </RibbonTabSubGroup>
          </RibbonTabGroup>

          <RibbonTabGroup title="Split Button">
            <RibbonSplitButton caption="Options" icon="mif-cog">
              <RibbonDropdownMenu>
                <RibbonDropdownItem caption="Windows 10" />
                <RibbonDropdownItem caption="Windows 11" />
                <RibbonDropdownItem caption="Office 365" />
                <RibbonDropdownDivider />
                <RibbonDropdownCheckItem checked caption="Windows 10" />
                <RibbonDropdownCheckItem checked caption="Windows 11" />
                <RibbonDropdownCheckItem checked caption="Office 365" />
                <RibbonDropdownDivider />
              </RibbonDropdownMenu>
            </RibbonSplitButton>
          </RibbonTabGroup>

          <RibbonTabGroup title="Button Groups">
            <RibbonButtonGroup
              radio
              style={{ width: "200px", maxHeight: "88px" }}
            >
              <RibbonIconButton caption="List" icon="mif-list" />
              <RibbonIconButton caption="Gear" icon="mif-cog" />
              <RibbonIconButton caption="Barcode" icon="mif-barcode" />
              <RibbonIconButton caption="Bell" icon="mif-bell" />
              <RibbonIconButton caption="Cast" icon="mif-cast" />
              <RibbonIconButton caption="Calculator" icon="mif-calculator2" />
            </RibbonButtonGroup>

            <RibbonButtonGroup style={{ width: "100px" }}>
              <RibbonIconButton caption="Italic" icon="mif-italic" />
              <RibbonIconButton caption="Bold" icon="mif-bold" />
              <RibbonIconButton caption="Underline" icon="mif-underline" />
            </RibbonButtonGroup>

            <RibbonButtonGroup
              active={[1, 3]}
              style={{
                width: "74px",
                display: "flex",
                flexFlow: "row",
                justifyContent: "center",
              }}
            >
              <RibbonToolButton caption="Italic" icon="mif-italic" />
              <RibbonToolButton caption="Bold" icon="mif-bold" />
              <RibbonToolButton caption="Underline" icon="mif-underline" />
            </RibbonButtonGroup>
          </RibbonTabGroup>
        </RibbonTab>
        <RibbonTab label="Edit"></RibbonTab>
        <RibbonTab label="View"></RibbonTab>
      </RibbonMenu>
    </div>
  );
};
export default App;
