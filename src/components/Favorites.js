import styled from "styled-components";

export const StyledFavorites = styled.div`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    width: 100%;
    padding: 16px;
    overflow: hidden;
    h2 {
        flex: 100%;
    }
    div {
        margin-right: 2rem;
        padding: 1rem 0;
        a {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: ${({ theme }) => theme.textColorBase};
            font-size: 14px;
            line-height: 16px;
            p {
                margin-top: 0.5rem;
            }
        }
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }
    }
`