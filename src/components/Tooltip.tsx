import React, { useEffect, useState } from 'react'
import { styled, Tooltip, tooltipClasses, TooltipProps } from "@mui/material";

const Tooltip = () => {
    const [showTooltip, setShowTooltip] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setShowTooltip(false);
        }, 8000);
        return () => clearTimeout(timer);
      }, []);
    
      const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(() => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: "#3B82F6",
          color: "#f9fafb",
          fontSize: "0.875rem",
          padding: "10px 14px",
          borderRadius: "8px",
          maxWidth: 220,
        },
        [`& .${tooltipClasses.arrow}`]: {
          color: "#3B82F6",
        },
      }));

  return (
    <div>Tooltip</div>
  )
}

export default Tooltip