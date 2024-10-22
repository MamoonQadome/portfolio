import React, { useReducer } from "react";
import {
  ContactMeContainer,
  ContactMeForm,
  ContactMeImage,
  IconWrapper,
  InputFeild,
  InputMessage,
  LeftSideContainer,
  LinksContainer,
  RightSideContainer,
  SendEmailButton,
} from "./ContactMeStyledComponent";
import { socialMedia } from "../../../data/MyData";
import { useMediaQuery } from "react-responsive";

const initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export default function ContaceMeComponent() {
  const isTablet = useMediaQuery({
    query: "(max-width: 800px)",
  });
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(isFormValid()){
      return;
    }

    const formData = new FormData();
    formData.append("firstName", state.firstName);
    formData.append("lastName", state.lastName);
    formData.append("phone", state.phone);
    formData.append("email", state.email);
    formData.append("message", state.message);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
    formData.append("access_key", process.env.REACT_APP_EMAIL_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      dispatch({ type: "RESET" });
    } else {
      console.log("Error", data);
    }
  };

  const isFormValid = () => {
    return (
      state.firstName.trim() !== "" ||
      state.lastName.trim() !== "" ||
      state.phone.trim() !== "" ||
      state.email.trim() !== "" ||
      state.message.trim() !== ""
    );
  };

  return (
    <ContactMeContainer>
      {!isTablet && (
        <LeftSideContainer>
          <ContactMeImage src={`${process.env.PUBLIC_URL}/contact_me.png`} />
          <LinksContainer>
            <IconWrapper href={socialMedia.instagram} target="_blank">
              <img src={`${process.env.PUBLIC_URL}/instagram_logo.svg`} alt="instagram" />
            </IconWrapper>
            <IconWrapper href={socialMedia.facebook} target="_blank">
              <img src={`${process.env.PUBLIC_URL}/facebook_logo.svg`} alt="facebook" />
            </IconWrapper>
            <IconWrapper href={socialMedia.linkedIn} target="_blank">
              <img src={`${process.env.PUBLIC_URL}/linkedin_logo.svg`} alt="linkedin" />
            </IconWrapper>
          </LinksContainer>
        </LeftSideContainer>
      )}
      <RightSideContainer>
        <ContactMeForm onSubmit={handleSubmit}>
          <InputFeild
            type="text"
            name="firstName"
            placeholder="First Name"
            value={state.firstName}
            onChange={handleChange}
          />
          <InputFeild
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={state.lastName}
            onChange={handleChange}
          />
          <InputFeild
            type="text"
            name="phone"
            placeholder="Phone No."
            value={state.phone}
            onChange={handleChange}
          />
          <InputFeild
            type="text"
            name="email"
            placeholder="Your Email"
            value={state.email}
            onChange={handleChange}
          />
          <InputMessage
            name="message"
            placeholder="Message"
            value={state.message}
            onChange={handleChange}
          />
          <SendEmailButton
            onClick={() => isFormValid() ? handleSubmit() : undefined}
            clickable={!isFormValid() ? 1 : 0}
          >
            <span>Send Email</span>
          </SendEmailButton>
        </ContactMeForm>
      </RightSideContainer>
      {isTablet && (
        <LeftSideContainer>
          <ContactMeImage src={`${process.env.PUBLIC_URL}/contact_me.png`} />
          <LinksContainer>
            <IconWrapper href={socialMedia.instagram} target="_blank">
              <img src={`${process.env.PUBLIC_URL}/instagram_logo.svg`} alt="instagram" />
            </IconWrapper>
            <IconWrapper href={socialMedia.facebook} target="_blank">
              <img src={`${process.env.PUBLIC_URL}/facebook_logo.svg`} alt="facebook" />
            </IconWrapper>
            <IconWrapper href={socialMedia.linkedIn} target="_blank">
              <img src={`${process.env.PUBLIC_URL}/linkedin_logo.svg`} alt="linkedin" />
            </IconWrapper>
          </LinksContainer>
        </LeftSideContainer>
      )}
    </ContactMeContainer>
  );
}
