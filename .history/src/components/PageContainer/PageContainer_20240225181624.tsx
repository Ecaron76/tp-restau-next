import { Box } from "@chakra-ui/react";

export default function PageContainer({children}: {children: React.ReactNode}) {
    return (
      <Box marginRight={'30%'}>
        {children} 
      </Box>
    )
  }