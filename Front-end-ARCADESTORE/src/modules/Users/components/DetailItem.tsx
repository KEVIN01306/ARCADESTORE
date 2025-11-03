import { Box, Typography } from "@mui/material";
import type React from "react";

interface DetailItemProps {
    label: string;
    value: string | React.ReactNode;
    icon: React.ReactNode;
}


const DetailItem = ({ label, value, icon }: DetailItemProps) => (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Box sx={{ minWidth: '24px', mr: 1, color: 'text.secondary' }}>
            {icon}
        </Box>
        <Box>
            <Typography variant="body2" color="text.secondary">
                {label}:
            </Typography>
            <Typography variant="body1" fontWeight="medium">
                {value}
            </Typography>
        </Box>
    </Box>
);

export default DetailItem;