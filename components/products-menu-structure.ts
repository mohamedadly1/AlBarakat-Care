// Products & Accessories menu hierarchy structure
export const productsMenuStructure = {
  categories: [
    {
      id: "hearing-aid-category",
      label: "Hearing Aid Category",
      icon: "Grid3x3",
      href: "/hearing-health/hearing-loss/hearing-aid-categories",
    },
    {
      id: "hearing-aid-brands",
      label: "Hearing Aid Brands",
      icon: "Tag",
      submenu: [
        {
          id: "signia",
          label: "Signia",
          description: "Premium hearing solutions by Signia",
          items: [
            { id: "pure-ric", label: "Pure RIC", href: "/products/hearing-aid-brands/signia/pure-ric" },
            {
              id: "styletto-slim",
              label: "Styletto Slim RIC",
              href: "/products/hearing-aid-brands/signia/styletto-slim-ric",
            },
            { id: "motion", label: "Motion", href: "/products/hearing-aid-brands/signia/motion" },
            { id: "insio-custom", label: "Insio Custom", href: "/products/hearing-aid-brands/signia/insio-custom" },
            { id: "silk", label: "Silk", href: "/products/hearing-aid-brands/signia/silk" },
            { id: "other-signia", label: "Other Hearing Aids", href: "/products/hearing-aid-brands/signia" },
          ],
        },
        {
          id: "rexton",
          label: "Rexton",
          description: "Advanced hearing technology by Rexton",
          items: [
            { id: "bi-core-b", label: "Bi-Core B", href: "/products/hearing-aid-brands/rexton/bi-core-b" },
            {
              id: "bi-core-ric",
              label: "Bi-Core RIC R /R Li",
              href: "/products/hearing-aid-brands/rexton/bi-core-ric",
            },
            {
              id: "bi-core-rugged",
              label: "Bi-Core Rugged",
              href: "/products/hearing-aid-brands/rexton/bi-core-rugged",
            },
            { id: "other-rexton", label: "Other Hearing Aids", href: "/products/hearing-aid-brands/rexton" },
          ],
        },
      ],
    },
    {
      id: "hearing-aid-technology",
      label: "Hearing Aid Technology",
      icon: "Zap",
      items: [
        {
          id: "integrated-xp",
          label: "Integrated Xperience",
          href: "/products/hearing-aid-technology/integrated-xperience",
        },
        { id: "augment-xp", label: "Augment Xperience", href: "/products/hearing-aid-technology/augment-xperience" },
        { id: "reach-tech", label: "REACH Technology", href: "/products/hearing-aid-technology/reach-technology" },
        { id: "bicore-tech", label: "BI-CORE Technology", href: "/products/hearing-aid-technology/bi-core-technology" },
      ],
    },
    {
      id: "tinnitus-solutions",
      label: "Tinnitus Solutions",
      icon: "Volume2",
      href: "/products/tinnitus-solutions",
    },
    {
      id: "accessories",
      label: "Accessories and Batteries ",
      icon: "Battery",
      href: "/products/accessories-batteries",
    },

    {
      id: "accessori",
      label: "Accessories and Baies ",
      icon: "Battery",
      href: "/products/accessories-batteries",
    },
  ],
}
