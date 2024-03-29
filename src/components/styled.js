import styled from 'styled-components';

export const Container = styled.div`
    aside{
    background: var(--gray-800);
    border-radius: 8px;
    overflow: hidden;
    
    }
    img{
    width: 100%;
    height: 72px;
    object-fit: cover;
    }

    div{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -2rem;
    }   

    footer{
    border-top: 1px solid var(--gray-600);
    margin-top: 1.5rem;
    padding: 1.5rem 2rem 2rem;
    }

    footer a{
    width: 100%;
    background: transparent;
    color: var(--green-500);
    border: 1px solid var(--green-500);
    border-radius: 8px;
    height: 50px;
    padding: 0 1.5rem;
    font-weight: bold;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    }
`;

export const Img = styled.div`
    img{
        box-sizing:initial;
        width: 3rem;
        height: 3rem;
        border-radius: 8px;
        border: 4px solid var(--gray-800);
        outline: 2px solid var(--green-500);
    }
`;

// export const Sidebar = styled div`
// .sidebar {
//     background: var(--gray-800);
//     border-radius: 8px;
//     overflow: hidden;
//     /* border: 5px solid red; */
// }
// .cover {
//     width: 100%;
//     height: 72px;
//     object-fit: cover;
// }

// .profile {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// }

// .sidebar footer {
//     border-top: 1px solid var(--gray-600);
//     margin-top: 1.5rem;
//     padding: 1.5rem 2rem 2rem;
// }

// .sidebar footer a {
//     width: 100%;
//     background: transparent;
//     color: var(--green-500);
//     border: 1px solid var(--green-500);
//     border-radius: 8px;
//     height: 50px;
//     padding: 0 1.5rem;
//     font-weight: bold;
//     display: block;
//     text-decoration: none;

//     display: flex;
//     align-items: center;
//     justify-content: center;
// }
// `;