import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

interface BreadcrumbItem {
  label: string;
  icon?: React.ReactNode;
  href?: string;
}

interface DynamicBreadcrumbsProps {
  items: BreadcrumbItem[];
}

const BreadcrumbsRoutes = ({ items }: DynamicBreadcrumbsProps) => {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          if (isLast) {
            return (
              <Typography
                key={index}
                sx={{ color: "text.primary", display: "flex", alignItems: "center" }}
              >
                {item.icon && <span style={{ marginRight: 4 }}>{item.icon}</span>}
                {item.label}
              </Typography>
            );
          }

          return (
            <Link
              key={index}
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href={item.href || "#"}
            >
              {item.icon && <span style={{ marginRight: 4 }}>{item.icon}</span>}
              {item.label}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}

export default BreadcrumbsRoutes;