const { count } = require("../benchmark");

const items = [];

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
  "ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
  "reprehenderit in voluptate velit esse cillum dolore eu fugiat" +
  "nulla pariatur. Excepteur sint occaecat cupidatat non proident" +
  "sunt in culpa qui officia deserunt mollit anim id est laborum.";

for (var i = 0; i < count; i++) {
  items.push({
    title: `Item #${i}`,
    content: lorem,
    img: `http://lorempixel.com/${i % 2 === 0 ? 200 : 400}/${
      i % 3 === 0 ? 400 : 600
    }`,
    key: i
  });
}

module.exports = function(h) {
  const TitleWrapper = ({ title }) => {
    return h(
      "div",
      {
        style: { border: "10px solid green", color: "#FFDDAA", padding: "10px" }
      },
      h(
        "div",
        { className: "dididididid" },
        "FKSDJFLSDJFDLSKFJDSLKFJSLKDFJLSDKFJ"
      ),
      h(Title, { title: title })
    );
  };

  const Title = ({ title }) => {
    return h(
      "div",
      { className: "title", onClick: () => {} },
      h("h1", null, title)
    );
  };

  const ItemSectionGroupWrapper = ({ content, children }) => {
    return h(
      "div",
      { style: { backgroundColor: "lightblue", border: "1px solid #FF44AA" } },
      h("h2", { className: "wrapper-tile" }, Math.random() + "wrapper title"),
      h(
        "p",
        { style: { fontSize: 15, color: "red" } },
        h(ItemSectionGroup, null, children)
      )
    );
  };

  const ItemSectionGroup = ({ children }) => {
    let aboutToMount = false;
    aboutToMount = true;

    return h(
      "div",
      { className: "really-long-and-stupid-class-name" },
      children
    );
  };

  const ItemSectionDescription = () => {
    return h(
      "div",
      null,
      h("p", null, "This is a description for a section blah blah blah")
    );
  };

  const ItemSection = ({ id, children }) => {
    const even = id % 2 === 0;
    let showEven;

    if (even) {
      showEven = true;
    }

    return h(
      "div",
      null,
      showEven && h("h3", null, "This item section is even"),
      h(
        "div",
        {
          id: "item-section" + id,
          style: { fontWeight: 300, margin: "10px 20px" }
        },
        children
      ),
      h(ItemSectionDescription, null)
    );
  };

  const ImageDescription = ({ content }) => {
    return h("span", null, content);
  };

  const Image = ({ src }) => {
    return h(
      "div",
      null,
      h("img", { "data-img": src, src }),
      h(ImageDescription, { content: Math.random() + "-content" })
    );
  };

  const Item = ({ title, content, img }) => {
    const todos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => {
      return h("li", { id: `todo-${i}` }, i);
    });
    return h(
      "div",
      { className: "item" },
      h(TitleWrapper, { title }),
      h("p", { className: "item-content" }, content),
      h(Image, { src: img }),
      h("ul", { className: "list" }, todos)
    );
  };

  const RichItemSubTitleWrapper = ({ children }) => {
    return h(
      "div",
      { style: { width: 200, height: 200, overflow: "scroll" } },
      h("h2", null, children)
    );
  };

  const RichItemSubtitle = ({ id, children }) => {
    return h(
      "div",
      { style: { fontSize: 20, id } },
      h(RichItemSubTitleWrapper, null, children)
    );
  };

  const RichItem = ({ title, content, img }) => {
    return h(
      "div",
      { className: `item-${title}` },
      h(
        "div",
        { id: title + Math.random() },
        h("h2", null, title),
        h(
          RichItemSubtitle,
          { id: Math.random() },
          "Subtitle - " + Math.random()
        ),
        h("p", { id: `p-${title}` }, content)
      )
    );
  };

  return () => {
    const renderedItems = items.map((item, i) => {
      const el = i % 2 === 0 ? h(Item, item) : h(RichItem, item);
      const section = h(ItemSection, { id: i }, el);
      const group = h(ItemSectionGroup, null, section);
      return h(ItemSectionGroupWrapper, null, group);
    });
    return h("div", { className: "app" }, renderedItems);
  };
};
