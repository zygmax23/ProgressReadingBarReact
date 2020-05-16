import React from "react";
import MainComponent from "./components/MainComponent";

const text = `
Cras malesuada nibh et arcu ornare tincidunt. Etiam orci nisi, eleifend
      vitae lectus eget, aliquet efficitur diam. Duis vitae velit vitae odio
      lobortis vulputate. Nullam iaculis consequat laoreet. Quisque vitae dolor
      vel massa tincidunt condimentum. Mauris sapien lorem, congue sit amet
      mollis sit amet, imperdiet eu turpis. In et volutpat lorem. Maecenas
      eleifend, orci sed tincidunt porta, sapien metus elementum ex, sed maximus
      ligula risus vitae nisl. Quisque ultricies odio vitae porttitor ornare.
      Etiam mauris urna, bibendum id est non, vestibulum elementum nibh. Fusce
      vehicula gravida diam nec finibus. Nulla vel erat nibh. Maecenas in
      faucibus ante. Mauris dapibus lectus vel dignissim consequat.
`;

export default function App() {
  return (
    <>
      <MainComponent id="1">{text}</MainComponent>
      <MainComponent id="2">{text}</MainComponent>
      <MainComponent id="3">{text}</MainComponent>
      <MainComponent id="4">{text}</MainComponent>
      <MainComponent id="5">{text}</MainComponent>
      <MainComponent id="6">{text}</MainComponent>
      <MainComponent id="7">{text}</MainComponent>
    </>
  );
}
