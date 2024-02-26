import { Box } from "@chakra-ui/react";

export default function PageContainer({children}: {children: React.ReactNode}) {
    return (
      <Box marginRight={'20%'}marginLeft={'20%'}  marginTop={5} marginBottom={5} padding={10} bg={'white'} borderRadius={5}>
        {children} 
      </Box>
    )
  }