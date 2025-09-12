import React, { useEffect, useState } from 'react';
import Service from '../utils/http';
import { Center, Text, useMantineTheme, getGradient, Container } from '@mantine/core';
import { Avatar } from '@mantine/core';
const obj = new Service();

export default function ProfilePage() {
  const [user, setUser] = useState({});
  const theme = useMantineTheme();

  const getProfillePageData = async () => {
    try {
      const data = await obj.get('user/me');
      setUser(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfillePageData();
  }, []);

  // Create gradient style
  const gradient = `linear-gradient(90deg, ${theme.colors.blue[6]} 0%, ${theme.colors.grape[6]} 50%, ${theme.colors.pink[5]} 100%)`;

  return (
    <div>
    {
        <Center style={{height: "60vh"}}>
        <Container  size="responsive"
            bg="#a5d8ff"
            style={{
              borderRadius: "20px",
            //   padding: "30px",
                paddingTop: "35px",
                paddingBottom: "25px",
                paddingLeft:"20px",
                paddingRight:"20px",
                
            }}>

      <Center style={{height:"182px"}}>
      <Avatar src="https://lh3.googleusercontent.com/a/ACg8ocK7e7NKo0F8QOIAXdq6EOtTcZokWEt1N9fwt4aYyDPS6odowA=s96-c" size="132" />
        {/*  */}
      </Center>

      <Center >
        <Text
          size="xl"
      fw={900}
      variant="gradient"
      gradient={{ from: 'indigo', to: 'rgba(49, 80, 84, 1)', deg: 90 }}
        >
          {user?.name}
        </Text>
      </Center>

      <Center>
        <Text
          size="xl"
      fw={900}
      variant="gradient"
      gradient={{ from: 'indigo', to: 'rgba(49, 80, 84, 1)', deg: 90 }}
        >
          Email : {user?.email}
        </Text>
      </Center>

      <Center>
        <Text
          
      fw={700}
        >
          Id : {user?._id}
        </Text>    
      </Center>   

      <Center>
        <Text
           fw={700}
        >
          CreatedAt : {user?.createdAt}
        </Text>    
      </Center>     
      <br/>   
        </Container>
        </Center>
    }      
    </div>
  );
}
