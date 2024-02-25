import { Box } from "@chakra-ui/react";

export default function PageContainer({children}: {children: React.ReactNode}) {
    return (
      <Box marginRight={'22%'}marginLeft={'22%'} bg="grey" padding={10}>
        {children} 
      </Box>
    )
  }