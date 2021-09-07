import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {

        --red: #E52E4d;
        --green: #33CC95;
        --blue: #5429cc;

        --blue-light: #6933FF;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --background: #F0F2F5;
        --shape: #FFFFFF;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.15%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-font-smooth: antialiased;
    }

    button {
        cursor: pointer;
    }

    body, 
    input, 
    textarea,
    button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    strong, 
    h1, 
    h2, 
    h3, 
    h4, 
    h5, 
    h6 {
        font-weight: 500;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: .25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        background: transparent;
        border: 0;
        transition: filter .2s;

        &:hover {
            filter: brightness(.8);
        }
    }
    

`