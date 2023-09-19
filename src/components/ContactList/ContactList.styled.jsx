import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ContactListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #2196F3;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease;
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
`;

export const ContactName = styled.span`
  font-weight: bold;
  color: white;
  text-align: center;
  width: 100%; 
  padding-left: 10px; 
`;

export const ContactPhone = styled.span`
  font-weight: bold;
  color: #333;
  padding: 10px;
`;



export const CallButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;
  flex-grow: 0;
  margin-left: auto;  

  &:hover {
    background-color: #45a049;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.4);
  }
  animation: ${fadeIn} 0.5s ease;
};
`;

export const DeleteButton = styled.button`
  background-color: #FF5722;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;
  flex-grow: 0;
  margin-right: auto; 

  &:hover {
    background-color: #E64A19;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 87, 34, 0.4);
  }
  animation: ${fadeIn} 0.5s ease;
};
`;

export const StyledNotificationContent = styled.span`
  span {
    font-family: inherit;
    font-size: 13px;
    font-weight: bold;
    color: darkBlack;
  }
`;