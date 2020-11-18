import React from "react";

export const IconConfig = {
  remove: ({ size, color, ...props }) => (
    <svg
      viewBox="0 0 22 19"
      width={size}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="m2.382947 10.266912 8.264311 8.264311c.195262.195262.511844.195262.707106 0l8.264311-8.264311c2.269922-2.269922 2.269922-5.950193 0-8.220116-2.269923-2.269922-5.950194-2.269922-8.220116 0-.314662.314661-.397748.452716-.397748.452716s-.249969-.304937-.397748-.452716c-2.269922-2.269922-5.950193-2.269922-8.220116 0-2.269922 2.269923-2.269922 5.950194 0 8.220116zm7.51301-7.513009c.26111.26111.488792.547479.680919.854716.195854.313198.652016.313198.84787 0 .192127-.307237.419809-.593606.680919-.854716 1.879399-1.879398 4.926505-1.879398 6.805903 0s1.879398 4.926504 0 6.805903l-7.91257 7.912569-7.908944-7.912569c-1.879398-1.879399-1.879398-4.926505 0-6.805903s4.926505-1.879398 6.805903 0z" />
    </svg>
  )
};