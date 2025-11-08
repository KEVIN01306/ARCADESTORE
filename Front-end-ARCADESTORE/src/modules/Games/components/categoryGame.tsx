import { Chip, styled, Tooltip, tooltipClasses, type TooltipProps } from "@mui/material";
import { ESRB_RATINGS, type RatingKey } from "../../../types/gameType";

interface CategoryGameProps{
    code?: string
}

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));
const CategoryGame = ({code = "N/A"}: CategoryGameProps) => {

    const titleCategory = code ?  (Object.keys(ESRB_RATINGS) as RatingKey[]).filter( c => ESRB_RATINGS[c].code == code) : null
    const descripcionCategory = titleCategory ? ESRB_RATINGS[titleCategory[0]] : null
    
    return (
        <>
            <LightTooltip title={descripcionCategory ? String("Minimun age "+descripcionCategory.minimum_age) : ""}  placement="top">
                <LightTooltip title={descripcionCategory ?  String(descripcionCategory.description) : ""}>
                    <Chip label={code}  color="primary" variant="outlined" />
                </LightTooltip>
            </LightTooltip>
            
        </>
    )
}

export default CategoryGame;