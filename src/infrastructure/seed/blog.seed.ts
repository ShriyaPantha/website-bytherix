import { Blog } from "../../modules/blog/blog.model.js";
import { User } from "../../modules/user/user.model.js";

const blogs = [
    {
        title: "Modern Full-Stack Web Development in 2026",
        slug: "modern-full-stack-web-development-in-2026",
        excerpt:
            "Learn how modern frontend frameworks, Node.js, APIs, and databases come together to build scalable full-stack web applications.",
        content: `
            Full-stack web development has evolved significantly with modern frontend
            frameworks, server-side applications, APIs, and cloud-native databases.

            In this guide, we explore the fundamentals of building modern web applications,
            including frontend architecture, Node.js backend development, REST APIs,
            authentication, database design, testing, and deployment.

            Whether you are starting your first project or improving an existing application,
            understanding how each layer communicates will help you build more reliable
            and maintainable software.
        `,
        category: "web development",
        tags: ["javascript", "typescript", "node.js", "react", "mongodb"],
        status: "published" as const,
        publishedAt: new Date(),
        views: 1250,
        seoTitle: "Modern Full-Stack Web Development Guide",
        seoDescription:
            "Learn modern full-stack web development with frontend frameworks, Node.js, APIs, and MongoDB.",
    },
    {
        title: "Building Cross-Platform Mobile Applications",
        slug: "building-cross-platform-mobile-applications",
        excerpt:
            "Explore modern approaches to building fast and maintainable mobile applications with Flutter and React Native.",
        content: `
            Cross-platform development allows developers to build applications for multiple
            platforms while sharing a significant portion of the codebase.

            Flutter and React Native are two popular technologies for mobile development.
            This article explores their architecture, component systems, navigation,
            state management, API integration, and performance considerations.

            Choosing the right technology depends on the project requirements, team skills,
            performance expectations, and long-term maintenance strategy.
        `,
        category: "mobile development",
        tags: ["flutter", "react native", "mobile", "ios", "android"],
        status: "published" as const,
        publishedAt: new Date(),
        views: 980,
        seoTitle: "Cross-Platform Mobile App Development",
        seoDescription:
            "Learn how to build scalable cross-platform mobile applications using Flutter and React Native.",
    },
    {
        title: "Getting Started with Data Science and AI",
        slug: "getting-started-with-data-science-and-ai",
        excerpt:
            "Learn the foundations of data science, machine learning, deep learning, and modern AI application development.",
        content: `
            Data science combines statistics, programming, and domain knowledge to extract
            useful insights from data.

            Python has become one of the most popular languages for this field because of
            its extensive ecosystem of libraries for data analysis and machine learning.

            This guide introduces data preprocessing, exploratory data analysis,
            machine learning algorithms, model evaluation, deep learning, and AI deployment.
        `,
        category: "data science & ai",
        tags: ["python", "machine learning", "ai", "data science", "deep learning"],
        status: "published" as const,
        publishedAt: new Date(),
        views: 1560,
        seoTitle: "Data Science and AI Beginner Guide",
        seoDescription:
            "A beginner-friendly guide to Python data science, machine learning, deep learning, and AI.",
    },
    {
        title: "Cybersecurity Fundamentals Every Developer Should Know",
        slug: "cybersecurity-fundamentals-for-developers",
        excerpt:
            "Understand essential cybersecurity concepts including authentication, authorization, network security, and secure coding.",
        content: `
            Security should be considered throughout the entire software development lifecycle.

            Developers need to understand common vulnerabilities such as SQL injection,
            cross-site scripting, insecure authentication, broken authorization, and
            improper input validation.

            By following secure coding practices, protecting sensitive data, validating
            user input, and properly configuring authentication and authorization,
            developers can significantly reduce application security risks.
        `,
        category: "cybersecurity",
        tags: ["security", "ethical hacking", "authentication", "network security", "owasp"],
        status: "published" as const,
        publishedAt: new Date(),
        views: 870,
        seoTitle: "Cybersecurity Fundamentals for Developers",
        seoDescription:
            "Learn essential cybersecurity and secure coding practices every modern developer should know.",
    },
    {
        title: "UI/UX Design Principles for Better Digital Products",
        slug: "ui-ux-design-principles-for-better-products",
        excerpt:
            "Discover practical UI and UX principles for creating intuitive interfaces, wireframes, prototypes, and better user experiences.",
        content: `
            Great digital products are not only functional but also easy and enjoyable to use.

            UI design focuses on the visual presentation of an interface, while UX design
            considers the complete experience a user has while interacting with a product.

            Effective designers use research, information architecture, wireframing,
            prototyping, usability testing, and visual design to create better experiences.

            Tools such as Figma make it easier for designers and developers to collaborate
            throughout the product development process.
        `,
        category: "ui/ux design",
        tags: ["ui", "ux", "figma", "design", "wireframe", "user experience"],
        status: "published" as const,
        publishedAt: new Date(),
        views: 1120,
        seoTitle: "UI UX Design Principles Guide",
        seoDescription:
            "Learn practical UI and UX design principles, wireframing, prototyping, and user research techniques.",
    },
];

export const seedBlogs = async () => {
    await Blog.deleteMany();

    // Get a user to use as the blog author.
    const author = await User.findOne();

    if (!author) {
        throw new Error("No user found. Seed a user before seeding blogs.");
    }

    const blogsWithAuthor = blogs.map((blog) => ({
        ...blog,
        author: author._id,
    }));

    const createdBlogs = await Blog.insertMany(blogsWithAuthor);

    console.log(`${createdBlogs.length} blogs seeded`);

    return createdBlogs;
};