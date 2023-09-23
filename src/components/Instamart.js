import {useState} from 'react'
const Section = ({title, desc, show, setShow})=>{
    
    return (
      <div className="border border-black">
        <h1 className="font-bold">{title}</h1>
        {!show ? (
          <button
            className="underline cursor-pointer"
            onClick={() => setShow(true)}
          >
            show
          </button>
        ) : (
          <button
            className="underline cursor-pointer"
            onClick={() => setShow(false)}
          >
            Hide
          </button>
        )}
        
        {show && <p>{desc}</p>}
      </div>
    );
}

const Instamart = () => {
    const [sectionvis, setSectionVis] = useState("about");
    return (
      <div>
        <Section
          title={"Accordion1"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          show={sectionvis === "about"}
          setShow={(setthis) => {
            if (setthis) {
              return setSectionVis("about");
            }
            return setSectionVis("a");
          }}
        />
        <Section
          title={"Accordion2"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          show={sectionvis === "profile"}
          setShow={(setthis) => {
            if (setthis) {
              return setSectionVis("profile");
            }
            return setSectionVis("a");
          }}
        />
        <Section
          title={"Accordion3"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          show={sectionvis === "contact"}
          setShow={(setthis) => {
            if (setthis) {
              return setSectionVis("contact");
            }
            return setSectionVis("a");
          }}
        />
      </div>
    );
}

export default Instamart