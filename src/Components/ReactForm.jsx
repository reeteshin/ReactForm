import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import SingupForm from "./SingupForm";

export default function ReactForm() {
  const [page, setPage] = useState(0);
  const currentPage = ["Sign Up", "Personal Info"];

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    userName: "",
  });

  const DispalyOnTheBasisOfPage = () => {
    if (page === 0) {
      return <SingupForm formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    }
  };
  
  return (
    <div>
      <div className="form">
        <div className="progressbar"></div>

        <div className="form-container">
          <div className="Header"><h2>{currentPage[page]}</h2></div>
          <div className="body">{DispalyOnTheBasisOfPage()}</div>
          <div className="footer">
            <button
              disabled={page == 0}
              onClick={() => {
                setPage(page - 1);
              }}
            >
              Prev
            </button>
            <button
              
              onClick={() => {
                  if(page===currentPage.length-1)
                  {
                        console.log(formData)
                  }
                  else
                  {

                      setPage(page + 1);
                  }
              }}
            >
              {page===currentPage.length-1?"Submit":"Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
