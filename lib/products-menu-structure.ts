// Products & Accessories menu hierarchy structure
export const productsMenuStructure = {
  categories: [
    {
      id: "hearing-aid-category",
      label: "Hearing Aid Category",
      icon: "Grid3x3",
      href: "/products/category",
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
            { id: "insio-custom", label: "Intuis 4", href: "/products/hearing-aid-brands/signia/intuis4" },
            { id: "silkx", label: "Silk X", href: "/products/hearing-aid-brands/signia/silkx" },
            { id: "silkxx", label: "Silk Charge&Go IX", href: "/products/hearing-aid-brands/signia/silkix" },

            { id: "Insio Charge&Go AX", label: "Insio Charge&Go AX", href: "/products/hearing-aid-brands/signia/insiogoax" },
            { id: "other-signia", label: "Other Hearing Aids", href: "" },
          ],
        },
        {
          id: "rexton",
          label: "Rexton",
          description: "Advanced hearing technology by Rexton",
          items: [
            { id: "bi-core-b", label: "Bi-Core B", href: "/products/hearing-aid-brands/rexton/bi-core-b" },
            {
              id: "BICORE R-LI",
              label: "BICORE R-LI",
              href: "/products/hearing-aid-brands/rexton/BICORER-LI",
            },
            {
              id: "bi-core-rugged",
              label: "BICORE R 312",
              href: "/products/hearing-aid-brands/rexton/r-312",
            },
            { id: "BICOREB-LIRUGGED", label: "BICORE B-LI RUGGED", href: "/products/hearing-aid-brands/rexton/BICOREBLIRUGGED" },
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
      id: "Connectivity",
      label: "Connectivity",
      icon: "Battery",
      href: "/products/connectivity",
    },
  ],
}
