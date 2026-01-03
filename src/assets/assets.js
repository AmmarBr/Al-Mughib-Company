import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './brand_img.png'
import project_img_1 from './profile_img_1.png'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
  logo,
  logo_dark,
  cross_icon,
  menu_icon,
  star_icon,
  header_img,
  brand_img,
  project_img_1,
  project_img_2,
  project_img_3,
  project_img_4,
  left_arrow,
  right_arrow,
}

export const projectsData = [
  {
    title: "اليرموك",
    disc: "تضمن 13 شقه سكنية مصممه لتوفير الراحه و الخصوصيه للمقيمين ، مع مراعاة اسلوب الحياهة العصريه",
    location: "الرياض",
    image: project_img_1
  },
  {
    title: "قرطبة",
    disc: "يحتوي على 17 شقة سكنسة ، يوفر بييئة مريحه و مرافق متكامله لتلبيه احتيجات الاسر",
    location: "الرياض",
    image: project_img_2
  },
  {
    title: "المغيب ريزدنس",
    disc: "مشروع يتكون من 20 شقه في منطقة المونسيه يركز على تقديم خدمات سكنيه فاخره مع تصميمات حديثة",
    location: "الرياض",
    image: project_img_3
  },
  {
    title: "المغيب جولدن",
    disc: "يشمل 20 شقة ايضا في المونسيه يقدم تجربة سكنيه متميزه مع مرافق راقيه تناسب احتيجات السكان",
    location: "الرياض",
    image: project_img_4
  },
  {
    title: "راشد العتيبي",
    disc: "يألف من 17 شقه وقد تم بيعها بالكامل مما يعكس الطلب العالي على المشاريع السكنيه",
    location: "الرياض",
    image: project_img_5,
    isSold: true
  },
  {
    title: "أونست 12",
    disc: "مشروع قيد التنفيز يتكون من 12 دور في منطقه الرمال يوفر وحدات سكنية متنوعه و جاري البيع",
    location: "الرياض",
    image: project_img_6
  },

];

export const testimonialsData = [
  {
    name: "خالد المنصور",
    title: "مدير تسويق",
    image: profile_img_1,
    alt: "صورة خالد المنصور",
    rating: 5,
    text: "منذ الاجتماع الأول، فهموا رؤيتي وساعدوني في العثور على العقار المثالي. اهتمامهم بالتفاصيل والتزامهم برضا العملاء لا مثيل له."
  },
  {
    name: "سارة العلي",
    title: "مصممة ديكور",
    image: profile_img_2,
    alt: "صورة سارة العلي",
    rating: 4,
    text: "تجربة رائعة مع هذا الفريق المحترف. قدموا لي خيارات متنوعة تناسب ذوقي واحتياجاتي، وكانت عملية الشراء سلسة للغاية."
  },
  {
    name: "محمد القحطاني",
    title: "رائد أعمال",
    image: profile_img_3,
    alt: "صورة محمد القحطاني",
    rating: 5,
    text: "خدمة استثنائية واحترافية عالية. كانوا دائمًا متاحين للإجابة على استفساراتي وقدموا لي نصائح قيمة ساعدتني في استثماري."
  }
];