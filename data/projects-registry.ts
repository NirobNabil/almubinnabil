export const projectsRegistry = {
  yolov8_depth: () => import("@/content/projects/yolov8_depth/details.mdx"),
} as const;

export type ProjectsRegistryKey = keyof typeof projectsRegistry;

export enum ProjectId {
    yolov8_depth = "yolov8_depth",
    oddengine = "oddengine",
    lidar_surrogate = "lidar_surrogate",
    terraform = "terraform",
    agent_modeling = "agent_modeling",
    iqa = "iqa",
}

export interface ProjectData {
    id: string
    title: string
    contributors: string[]
    year: string
    tags: string[]
    description: string
    hasThumbnail: boolean
    detailsFileMdx: (() => Promise<any>) | null
}

const projectDetailsMdxComponent = {
    [ProjectId.yolov8_depth]: () => import("@/content/projects/yolov8_depth/details.mdx"),
    [ProjectId.lidar_surrogate]: () => import("@/content/projects/lidar_surrogate/details.mdx"),
    [ProjectId.agent_modeling]: () => import("@/content/projects/agent_modeling/details.mdx"),
    [ProjectId.oddengine]: () => import("@/content/projects/oddengine/details.mdx"),
    [ProjectId.terraform]: () => import("@/content/projects/terraform/details.mdx"),
}


export const projectsList: ProjectData[] = [
  {
    id: ProjectId.yolov8_depth,
    hasThumbnail: true,
    title: "YOLO with Depth Estimation",
    contributors: ["A. Nabil", "S. Kanu", "M. Rahman"],
    year: "2025",
    tags: ["PyTorch", "Object detection", "Depth estimation", "Dataset preparation", "YOLOv8", "DepthAnythingV2"],
    description: "Implemented YOLOv8 from scratch in pytorch and modified its architecture to add depth estimation, beating SOTA accuracy in parking lot car detection. \n Collected and prepared depth annotated dataset of cars",
    detailsFileMdx: projectDetailsMdxComponent["yolov8_depth"]
  },
  {
    id: ProjectId.lidar_surrogate,
    hasThumbnail: true,
    title: "Raycast via rasterization",
    contributors: ["A. Nabil", "S. Kanu"],
    year: "Ongoing",
    tags: ["Blender", "GPU Shader", "Mesh manipulation", "Geometry", "Camera Projection", "Vector arithmetic"],
    description: "Building a pipeline from scratch to use clever rasterization pipeline instead of performance heavy raycast to collect LIDAR scan data in simulation environments. Writing an async compute shader that runs along with vertex shader stage to calculate depth of lidar rays",
    detailsFileMdx: projectDetailsMdxComponent[ProjectId.lidar_surrogate]
  },
  {
    id: ProjectId.agent_modeling,
    hasThumbnail: false,
    title: "Pytorch network to optimize investment strategy for Bangladesh government",
    contributors: ["A. Nabil", "S. Islam"],
    year: "2024",
    tags: ["Pytorch", "Agent based modeling", "Matplotlib"],
    description: "Worked on a government project to design a pipeline that uses a pytorch network kindof as a differential solver that tweaks investment amount in different electricity sources like wind, coal, gas and solar to find the optimal investment strategy that minimizes load shedding in Bangladesh over a 30 year horizon taking into account effect of vulnerability to natural disasters and carbon pollution.",
    detailsFileMdx: projectDetailsMdxComponent[ProjectId.agent_modeling]
  },
  {
    id: ProjectId.iqa,
    hasThumbnail: false,
    title: "Holistic Robustness Evaluation for NR-IQA Models under MOS-Stratified Perturbations",
    contributors: ["R. Hassan", "A. Nabil", "I. Sahan", "I. Rahman"],
    year: "Ongoing",
    tags: ["Pytorch", "Projected Gradient Descent(PGD)", "Benchmarking"],
    description: "Conducted a comprehensive robustness evaluation of no-reference image quality assessment (NR-IQA) models under MOS-stratified perturbations. Developed metrics and testing strategies to measure performance across varying image distortions and subjective quality strata. Demonstrated insights on model stability and reliability for real-world applications in computer vision and multimedia analytics.\n Designed robust benchmarking framework for NR-IQA models.",
    detailsFileMdx: null
  },
  {
    id: ProjectId.oddengine,
    hasThumbnail: false,
    title: "OddEngine",
    contributors: ["A. Nabil", "S. Saifullah"],
    year: "2021",
    tags: ["OpenGL", "Rasterization pipeline", "Game Engine", "Physics Engine"],
    description: "We Built a 2D game engine from scratch using java and OpenGL with GPU optimized 2D physics engine",
    detailsFileMdx: projectDetailsMdxComponent[ProjectId.oddengine]
  },
  {
    id: ProjectId.terraform,
    hasThumbnail: false,
    title: "Terraform based automated deployment to GCP serverless and monitoring setup",
    contributors: ["A. Nabil", "A. Hossain", "S. Sakib"],
    year: "2023",
    tags: ["GCP", "Docker", "CI/CD", "Monitoring", "Serverless"],
    description: "Used Terraform to automate building docker images (GCP Cloud Build) and deploying it to GCP Cloud run, Integrated Sentry for production monitoring",
    detailsFileMdx: projectDetailsMdxComponent[ProjectId.terraform]
  },
  
]