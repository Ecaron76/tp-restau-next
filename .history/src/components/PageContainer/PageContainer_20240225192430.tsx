import { Box } from "@chakra-ui/react";

export default function PageContainer({children}: {children: React.ReactNode}) {
    return (
      <Box marginRight={'20%'}marginLeft={'20%'}  padding={10} boxShadow={10}>
        {children} 
      </Box>
    )
  }