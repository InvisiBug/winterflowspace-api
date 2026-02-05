import { Schedule } from "@/lib/types";

export const data: Schedule = {
  status: "success",
  schedule: {
    activities: [
      {
        id: "75:198609",
        name: "Get Started",
        startDateTime: {
          dateTime: "2026-02-05T08:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Our Get Started sessions will show you everything you need to know – from where the changing rooms and toilets are to meeting members of the PureGym team. We’ll then show you how to get started in the different areas of the gym (including quiet areas if you prefer a less busy space). You’ll also have the opportunity to use some of the gym kit if you want to.",
        bookedCount: 0,
        classCapacity: 3,
        waitingListCount: 0,
        waitingListCapacity: 0,
        instructorName: "Jay Dewire",
        studio: "Induction Point",
        classType: "induction",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198355",
        name: "STRIKE",
        startDateTime: {
          dateTime: "2026-02-05T09:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 35,
        description:
          "Designed for all fitness levels, STRIKE is an MMA-inspired non-contact group fitness class that combines high-intensity cardio, and functional training. It is adrenaline-pumping, challenging both physical and mental limits. The class includes easy to follow punches, kicks, and combos, targeting cardio, strength and agility. STRIKE will burn calories, reduce stress, build confidence, and will leave you feeling energized!",
        bookedCount: 12,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Jay Dewire",
        studio: "Studio",
        classType: "class",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198385",
        name: "Pilates £2",
        startDateTime: {
          dateTime: "2026-02-05T10:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 60,
        description:
          "A system of physical conditioning involving low-impact exercises and stretches designed to strengthen muscles of the torso and often performed using specialised equipment. Great if your goal is weight loss, toning, strength & conditioning, build muscle, training for an event or general fitness.",
        bookedCount: 9,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Tiffany Cavill",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 300,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200177",
        name: "PT Taster Session",
        startDateTime: {
          dateTime: "2026-02-05T11:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Curious about personal training? Book a free PT Taster Session with one of our fantastic self-employed trainers. This 1-1 session is focused on discussing your fitness goals and exploring how PT can help you achieve them. You'll experience what PT is all about and see if it's the right fit for you.",
        bookedCount: 0,
        classCapacity: 1,
        waitingListCount: 0,
        waitingListCapacity: 1,
        instructorName: "Jay Dewire",
        studio: "Gym Floor",
        classType: "induction",
        energyConsumptionKcal: 187,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199708",
        name: "Circuits",
        startDateTime: {
          dateTime: "2026-02-05T12:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "If you’re looking for a high intensity workout that will help tone your body and shed fat, this is a great class to attend. Circuits is a high energy and fast-paced class which involves working your way around different exercise stations performing each exercise as many times as you can in a set amount of time. Join in this classic class for a fun way to work out!",
        bookedCount: 17,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Chiara Albrizio",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 375,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198205",
        name: "Cycle",
        startDateTime: {
          dateTime: "2026-02-05T17:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Get ready to burn calories and boost your fitness level in this moderate to high intensity class, which is sometimes referred to as 'spin'. Motivating music will provide the soundtrack as you cycle your way through multiple terrains designed to improve cardio endurance, lose weight and strengthen your legs and core. And because you control the resistance and speed, your fitness is in your hands. When it comes to group exercise classes, this one is as easy as riding a bike.",
        bookedCount: 25,
        classCapacity: 25,
        waitingListCount: 11,
        waitingListCapacity: 20,
        instructorName: "Dan Kirk",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 450,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199798",
        name: "Pump",
        startDateTime: {
          dateTime: "2026-02-05T18:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "If you're looking to tone up, build muscle or burn fat, this full body resistance class using weights will give you an all over, total body workout. \r\nAs you lift, curl and lunge your way through the range of upbeat exercises, the time will fly by. \r\n",
        bookedCount: 37,
        classCapacity: 37,
        waitingListCount: 18,
        waitingListCapacity: 20,
        instructorName: "Dan Kirk",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 337,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199753",
        name: "Get Started",
        startDateTime: {
          dateTime: "2026-02-05T18:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Our Get Started sessions will show you everything you need to know – from where the changing rooms and toilets are to meeting members of the PureGym team. We’ll then show you how to get started in the different areas of the gym (including quiet areas if you prefer a less busy space). You’ll also have the opportunity to use some of the gym kit if you want to.",
        bookedCount: 0,
        classCapacity: 3,
        waitingListCount: 0,
        waitingListCapacity: 0,
        instructorName: "Ashraf Ali",
        studio: "Induction Point",
        classType: "induction",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199948",
        name: "HIIT",
        startDateTime: {
          dateTime: "2026-02-05T19:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "Your bodyweight is the tool to build athletic fitness as you sweat through simple, high intensity intervals with modifications that work for all fitness levels.",
        bookedCount: 11,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Dan Kirk",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 250,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198280",
        name: "CORE",
        startDateTime: {
          dateTime: "2026-02-05T19:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "Working more than just your abs, this session focuses on both deep and surface muscles to help you strengthen and sculpt your entire core.",
        bookedCount: 6,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Ashraf Ali",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 200,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199558",
        name: "Cycle",
        startDateTime: {
          dateTime: "2026-02-05T19:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Get ready to burn calories and boost your fitness level in this moderate to high intensity class, which is sometimes referred to as 'spin'. Motivating music will provide the soundtrack as you cycle your way through multiple terrains designed to improve cardio endurance, lose weight and strengthen your legs and core. And because you control the resistance and speed, your fitness is in your hands. When it comes to group exercise classes, this one is as easy as riding a bike.",
        bookedCount: 25,
        classCapacity: 25,
        waitingListCount: 15,
        waitingListCapacity: 20,
        instructorName: "Dan Kirk",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 450,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199993",
        name: "HIIT",
        startDateTime: {
          dateTime: "2026-02-06T06:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "Your bodyweight is the tool to build athletic fitness as you sweat through simple, high intensity intervals with modifications that work for all fitness levels.",
        bookedCount: 10,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Tom Collier",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 250,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198295",
        name: "Get Started",
        startDateTime: {
          dateTime: "2026-02-06T08:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Our Get Started sessions will show you everything you need to know – from where the changing rooms and toilets are to meeting members of the PureGym team. We’ll then show you how to get started in the different areas of the gym (including quiet areas if you prefer a less busy space). You’ll also have the opportunity to use some of the gym kit if you want to.",
        bookedCount: 1,
        classCapacity: 3,
        waitingListCount: 0,
        waitingListCapacity: 0,
        instructorName: "Tom Collier",
        studio: "Induction Point",
        classType: "induction",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199415",
        name: "LIFT",
        startDateTime: {
          dateTime: "2026-02-06T09:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description: "Strength development for every fitness level. LIFT delivers real results using scientifically proven methods that not only build muscle, but leave you feeling more confident in and out of the gym.",
        bookedCount: 37,
        classCapacity: 37,
        waitingListCount: 8,
        waitingListCapacity: 10,
        instructorName: "Tom Collier",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 337,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199588",
        name: "LIFT",
        startDateTime: {
          dateTime: "2026-02-06T12:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "Strength development for every fitness level. LIFT delivers real results using scientifically proven methods that not only build muscle, but leave you feeling more confident in and out of the gym.",
        bookedCount: 6,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Elle Hubbard",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 225,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199528",
        name: "Cycle",
        startDateTime: {
          dateTime: "2026-02-06T13:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Get ready to burn calories and boost your fitness level in this moderate to high intensity class, which is sometimes referred to as 'spin'. Motivating music will provide the soundtrack as you cycle your way through multiple terrains designed to improve cardio endurance, lose weight and strengthen your legs and core. And because you control the resistance and speed, your fitness is in your hands. When it comes to group exercise classes, this one is as easy as riding a bike.",
        bookedCount: 25,
        classCapacity: 25,
        waitingListCount: 6,
        waitingListCapacity: 20,
        instructorName: "Elle Hubbard",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 300,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200406",
        name: "PT Taster Session",
        startDateTime: {
          dateTime: "2026-02-06T14:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Curious about personal training? Book a free PT Taster Session with one of our fantastic self-employed trainers. This 1-1 session is focused on discussing your fitness goals and exploring how PT can help you achieve them. You'll experience what PT is all about and see if it's the right fit for you.",
        bookedCount: 0,
        classCapacity: 1,
        waitingListCount: 0,
        waitingListCapacity: 1,
        instructorName: "Joshua Barnes",
        studio: "Induction Point",
        classType: "induction",
        energyConsumptionKcal: 187,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199663",
        name: "Womens Weightlifting Workshop",
        startDateTime: {
          dateTime: "2026-02-06T14:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "An introduction into lifting in our designated free weights area.",
        bookedCount: 3,
        classCapacity: 4,
        waitingListCount: 0,
        waitingListCapacity: 0,
        instructorName: "Elle Hubbard",
        studio: "Gym Floor",
        classType: "induction",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198235",
        name: "STRENGTH",
        startDateTime: {
          dateTime: "2026-02-06T18:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "This class is designed to build up your full body STRENGTH! We'll go through 8 strength exercises to hit the whole body, moving with perfect form and control. Plus we always end with a FINISHER to make sure you leave with those post workout endorphins rushing around your body!",
        bookedCount: 16,
        classCapacity: 16,
        waitingListCount: 12,
        waitingListCapacity: 20,
        instructorName: "Chiara Albrizio",
        studio: "Functional Area",
        classType: "class",
        energyConsumptionKcal: 300,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199678",
        name: "GLC",
        startDateTime: {
          dateTime: "2026-02-07T09:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Shape up and burn fat as you lunge, step and squat your way to fitness in this ever-popular, fun class using both weights and your own bodyweight. The high repetition based routines will put your legs, bums and tums through their paces in a bid to trim down those areas we love to hate - trust us, your body will thank you for it!",
        bookedCount: 26,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Jay Dewire",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 187,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198265",
        name: "RIDE",
        startDateTime: {
          dateTime: "2026-02-07T10:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description: "Interval based cardio training workout on a spin bike. This intense yet exhilarating workout uses simple riding positions to create maximum sweat. Designed to deliver fast results for any fitness level.",
        bookedCount: 25,
        classCapacity: 25,
        waitingListCount: 9,
        waitingListCapacity: 20,
        instructorName: "Jay Dewire",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 300,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199828",
        name: "Pilates £2",
        startDateTime: {
          dateTime: "2026-02-07T10:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "A system of physical conditioning involving low-impact exercises and stretches designed to strengthen muscles of the torso and often performed using specialised equipment. Great if your goal is weight loss, toning, strength & conditioning, build muscle, training for an event or general fitness.",
        bookedCount: 19,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Tiffany Cavill",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 225,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199460",
        name: "Get Started",
        startDateTime: {
          dateTime: "2026-02-07T11:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Our Get Started sessions will show you everything you need to know – from where the changing rooms and toilets are to meeting members of the PureGym team. We’ll then show you how to get started in the different areas of the gym (including quiet areas if you prefer a less busy space). You’ll also have the opportunity to use some of the gym kit if you want to.",
        bookedCount: 0,
        classCapacity: 3,
        waitingListCount: 0,
        waitingListCapacity: 0,
        instructorName: "Jay Dewire",
        studio: "Induction Point",
        classType: "induction",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200023",
        name: "STRENGTH",
        startDateTime: {
          dateTime: "2026-02-07T12:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "This class is designed to build up your full body STRENGTH! We'll go through 8 strength exercises to hit the whole body, moving with perfect form and control. Plus we always end with a FINISHER to make sure you leave with those post workout endorphins rushing around your body!",
        bookedCount: 3,
        classCapacity: 16,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Sam Cosh",
        studio: "Functional Area",
        classType: "class",
        energyConsumptionKcal: 300,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200038",
        name: "Learn to Squat",
        startDateTime: {
          dateTime: "2026-02-07T14:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Our Learn to Squat Workshops, led by our expert coaches, will teach you how to squat confidently while supporting you with the basics of good technique to inspire your workouts and help you achieve the best results.\r\n\r\nYou’ll work in small, friendly groups, with personalized guidance on form to make sure you feel confident and safe when squatting in the gym.\r\n\r\nSee you at the bar!",
        bookedCount: 0,
        classCapacity: 4,
        waitingListCount: 0,
        waitingListCapacity: 0,
        instructorName: "Ashraf Ali",
        studio: "Gym Floor",
        classType: "induction",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199723",
        name: "Get Started",
        startDateTime: {
          dateTime: "2026-02-07T15:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Our Get Started sessions will show you everything you need to know – from where the changing rooms and toilets are to meeting members of the PureGym team. We’ll then show you how to get started in the different areas of the gym (including quiet areas if you prefer a less busy space). You’ll also have the opportunity to use some of the gym kit if you want to.",
        bookedCount: 0,
        classCapacity: 3,
        waitingListCount: 0,
        waitingListCapacity: 0,
        instructorName: "Ashraf Ali",
        studio: "Induction Point",
        classType: "induction",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199543",
        name: "Pump",
        startDateTime: {
          dateTime: "2026-02-08T09:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "If you're looking to tone up, build muscle or burn fat, this full body resistance class using weights will give you an all over, total body workout. \r\nAs you lift, curl and lunge your way through the range of upbeat exercises, the time will fly by. \r\n",
        bookedCount: 37,
        classCapacity: 37,
        waitingListCount: 3,
        waitingListCapacity: 20,
        instructorName: "Amelia Hannan",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 337,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199603",
        name: "Cycle",
        startDateTime: {
          dateTime: "2026-02-08T10:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Get ready to burn calories and boost your fitness level in this moderate to high intensity class, which is sometimes referred to as 'spin'. Motivating music will provide the soundtrack as you cycle your way through multiple terrains designed to improve cardio endurance, lose weight and strengthen your legs and core. And because you control the resistance and speed, your fitness is in your hands. When it comes to group exercise classes, this one is as easy as riding a bike.",
        bookedCount: 25,
        classCapacity: 25,
        waitingListCount: 17,
        waitingListCapacity: 20,
        instructorName: "Amelia Hannan",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 450,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199738",
        name: "BURN",
        startDateTime: {
          dateTime: "2026-02-08T12:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description: "Get ready to SWEAT with full body blasting exercises designed to challenge and change you! The exercises and work/rest periods vary from class to class but the intensity always challenges you to give your best that day!",
        bookedCount: 4,
        classCapacity: 16,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Ashraf Ali",
        studio: "Functional Area",
        classType: "class",
        energyConsumptionKcal: 300,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199430",
        name: "Learn to train Glutes",
        startDateTime: {
          dateTime: "2026-02-08T14:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "Learn how to effectively strengthen, train and build your glutes with guidance from one of our coaches in our learn to train glutes workshop.",
        bookedCount: 1,
        classCapacity: 4,
        waitingListCount: 0,
        waitingListCapacity: 0,
        instructorName: "Ashraf Ali",
        studio: "Gym Floor",
        classType: "induction",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200009",
        name: "Cycle",
        startDateTime: {
          dateTime: "2026-02-09T06:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Get ready to burn calories and boost your fitness level in this moderate to high intensity class, which is sometimes referred to as 'spin'. Motivating music will provide the soundtrack as you cycle your way through multiple terrains designed to improve cardio endurance, lose weight and strengthen your legs and core. And because you control the resistance and speed, your fitness is in your hands. When it comes to group exercise classes, this one is as easy as riding a bike.",
        bookedCount: 25,
        classCapacity: 25,
        waitingListCount: 16,
        waitingListCapacity: 20,
        instructorName: "Dan Kirk",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 450,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198807",
        name: "Circuits",
        startDateTime: {
          dateTime: "2026-02-09T07:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "If you’re looking for a high intensity workout that will help tone your body and shed fat, this is a great class to attend. Circuits is a high energy and fast-paced class which involves working your way around different exercise stations performing each exercise as many times as you can in a set amount of time. Join in this classic class for a fun way to work out!",
        bookedCount: 4,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Dan Kirk",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 375,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200134",
        name: "GLC",
        startDateTime: {
          dateTime: "2026-02-09T08:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Shape up and burn fat as you lunge, step and squat your way to fitness in this ever-popular, fun class using both weights and your own bodyweight. The high repetition based routines will put your legs, bums and tums through their paces in a bid to trim down those areas we love to hate - trust us, your body will thank you for it!",
        bookedCount: 12,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Dan Kirk",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 187,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199784",
        name: "Pump",
        startDateTime: {
          dateTime: "2026-02-09T09:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "If you're looking to tone up, build muscle or burn fat, this full body resistance class using weights will give you an all over, total body workout. \r\nAs you lift, curl and lunge your way through the range of upbeat exercises, the time will fly by. \r\n",
        bookedCount: 37,
        classCapacity: 37,
        waitingListCount: 4,
        waitingListCapacity: 20,
        instructorName: "Dan Kirk",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 337,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200084",
        name: "STRENGTH",
        startDateTime: {
          dateTime: "2026-02-09T12:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "This class is designed to build up your full body STRENGTH! We'll go through 8 strength exercises to hit the whole body, moving with perfect form and control. Plus we always end with a FINISHER to make sure you leave with those post workout endorphins rushing around your body!",
        bookedCount: 16,
        classCapacity: 16,
        waitingListCount: 8,
        waitingListCapacity: 20,
        instructorName: "Chiara Albrizio",
        studio: "Functional Area",
        classType: "class",
        energyConsumptionKcal: 300,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199814",
        name: "Cycle",
        startDateTime: {
          dateTime: "2026-02-09T17:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Get ready to burn calories and boost your fitness level in this moderate to high intensity class, which is sometimes referred to as 'spin'. Motivating music will provide the soundtrack as you cycle your way through multiple terrains designed to improve cardio endurance, lose weight and strengthen your legs and core. And because you control the resistance and speed, your fitness is in your hands. When it comes to group exercise classes, this one is as easy as riding a bike.",
        bookedCount: 25,
        classCapacity: 25,
        waitingListCount: 1,
        waitingListCapacity: 20,
        instructorName: "Jay Dewire",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 450,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200069",
        name: "Pump",
        startDateTime: {
          dateTime: "2026-02-09T17:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "If you're looking to tone up, build muscle or burn fat, this full body resistance class using weights will give you an all over, total body workout. \r\nAs you lift, curl and lunge your way through the range of upbeat exercises, the time will fly by. \r\n",
        bookedCount: 20,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Jill Motley",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 337,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199401",
        name: "Get Started",
        startDateTime: {
          dateTime: "2026-02-09T18:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Our Get Started sessions will show you everything you need to know – from where the changing rooms and toilets are to meeting members of the PureGym team. We’ll then show you how to get started in the different areas of the gym (including quiet areas if you prefer a less busy space). You’ll also have the opportunity to use some of the gym kit if you want to.",
        bookedCount: 0,
        classCapacity: 3,
        waitingListCount: 0,
        waitingListCapacity: 0,
        instructorName: "Joshua Barnes",
        studio: "Induction Point",
        classType: "induction",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200100",
        name: "STRIKE",
        startDateTime: {
          dateTime: "2026-02-09T18:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 35,
        description:
          "Designed for all fitness levels, STRIKE is an MMA-inspired non-contact group fitness class that combines high-intensity cardio, and functional training. It is adrenaline-pumping, challenging both physical and mental limits. The class includes easy to follow punches, kicks, and combos, targeting cardio, strength and agility. STRIKE will burn calories, reduce stress, build confidence, and will leave you feeling energized!",
        bookedCount: 13,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Jay Dewire",
        studio: "Studio",
        classType: "class",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199619",
        name: "RIDE",
        startDateTime: {
          dateTime: "2026-02-09T18:45:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "Interval based cardio training workout on a spin bike. This intense yet exhilarating workout uses simple riding positions to create maximum sweat. Designed to deliver fast results for any fitness level.",
        bookedCount: 7,
        classCapacity: 25,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Jill Motley",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 200,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198326",
        name: "LIFT",
        startDateTime: {
          dateTime: "2026-02-09T18:50:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "Strength development for every fitness level. LIFT delivers real results using scientifically proven methods that not only build muscle, but leave you feeling more confident in and out of the gym.",
        bookedCount: 7,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Joshua Barnes",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 225,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200164",
        name: "MIND",
        startDateTime: {
          dateTime: "2026-02-09T19:20:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description: "Designed to make you move better. MIND focuses on flexibility, mobility and stability and draws inspiration from sports recovery, yoga and calisthenics to create connection between mind and movement.",
        bookedCount: 6,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Jill Motley",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 225,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199694",
        name: "LIFT",
        startDateTime: {
          dateTime: "2026-02-10T06:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description: "Strength development for every fitness level. LIFT delivers real results using scientifically proven methods that not only build muscle, but leave you feeling more confident in and out of the gym.",
        bookedCount: 4,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Elle Hubbard",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 337,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200850",
        name: "HIIT",
        startDateTime: {
          dateTime: "2026-02-10T09:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "Your bodyweight is the tool to build athletic fitness as you sweat through simple, high intensity intervals with modifications that work for all fitness levels.",
        bookedCount: 10,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Elle Hubbard",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 250,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199979",
        name: "MIND",
        startDateTime: {
          dateTime: "2026-02-10T10:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description: "Designed to make you move better. MIND focuses on flexibility, mobility and stability and draws inspiration from sports recovery, yoga and calisthenics to create connection between mind and movement.",
        bookedCount: 3,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Jill Motley",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 225,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200864",
        name: "PT Taster Session",
        startDateTime: {
          dateTime: "2026-02-10T10:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Curious about personal training? Book a free PT Taster Session with one of our fantastic self-employed trainers. This 1-1 session is focused on discussing your fitness goals and exploring how PT can help you achieve them. You'll experience what PT is all about and see if it's the right fit for you.",
        bookedCount: 1,
        classCapacity: 1,
        waitingListCount: 0,
        waitingListCapacity: 1,
        instructorName: "Elle Hubbard",
        studio: "Gym Floor",
        classType: "induction",
        energyConsumptionKcal: 187,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199311",
        name: "Circuits",
        startDateTime: {
          dateTime: "2026-02-10T12:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "If you’re looking for a high intensity workout that will help tone your body and shed fat, this is a great class to attend. Circuits is a high energy and fast-paced class which involves working your way around different exercise stations performing each exercise as many times as you can in a set amount of time. Join in this classic class for a fun way to work out!",
        bookedCount: 5,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Joshua Barnes",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 375,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199514",
        name: "RIDE",
        startDateTime: {
          dateTime: "2026-02-10T13:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "Interval based cardio training workout on a spin bike. This intense yet exhilarating workout uses simple riding positions to create maximum sweat. Designed to deliver fast results for any fitness level.",
        bookedCount: 13,
        classCapacity: 25,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Joshua Barnes",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 200,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199874",
        name: "Pump",
        startDateTime: {
          dateTime: "2026-02-10T17:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "If you're looking to tone up, build muscle or burn fat, this full body resistance class using weights will give you an all over, total body workout. \r\nAs you lift, curl and lunge your way through the range of upbeat exercises, the time will fly by. \r\n",
        bookedCount: 36,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Simon Harrison",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 337,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200206",
        name: "Step",
        startDateTime: {
          dateTime: "2026-02-10T18:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "For both beginners and advanced steppers this great cardio workout is choreographed. As you progress, so will the movements, always giving you something new and fun to experience in the class. You’ll have a fantastic athletic workout that helps to burn fat and tone up to some great music! Great if your goal is weight loss, toning or general fitness.",
        bookedCount: 37,
        classCapacity: 37,
        waitingListCount: 8,
        waitingListCapacity: 20,
        instructorName: "Simon Harrison",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 250,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199844",
        name: "GLC",
        startDateTime: {
          dateTime: "2026-02-10T18:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Shape up and burn fat as you lunge, step and squat your way to fitness in this ever-popular, fun class using both weights and your own bodyweight. The high repetition based routines will put your legs, bums and tums through their paces in a bid to trim down those areas we love to hate - trust us, your body will thank you for it!",
        bookedCount: 27,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Tom Collier",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 125,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200805",
        name: "RIDE",
        startDateTime: {
          dateTime: "2026-02-10T18:45:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "Interval based cardio training workout on a spin bike. This intense yet exhilarating workout uses simple riding positions to create maximum sweat. Designed to deliver fast results for any fitness level.",
        bookedCount: 10,
        classCapacity: 25,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Simon Harrison",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 200,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199007",
        name: "Cycle",
        startDateTime: {
          dateTime: "2026-02-10T19:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Get ready to burn calories and boost your fitness level in this moderate to high intensity class, which is sometimes referred to as 'spin'. Motivating music will provide the soundtrack as you cycle your way through multiple terrains designed to improve cardio endurance, lose weight and strengthen your legs and core. And because you control the resistance and speed, your fitness is in your hands. When it comes to group exercise classes, this one is as easy as riding a bike.",
        bookedCount: 12,
        classCapacity: 25,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Tom Collier",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 450,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198251",
        name: "Cycle",
        startDateTime: {
          dateTime: "2026-02-11T06:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Get ready to burn calories and boost your fitness level in this moderate to high intensity class, which is sometimes referred to as 'spin'. Motivating music will provide the soundtrack as you cycle your way through multiple terrains designed to improve cardio endurance, lose weight and strengthen your legs and core. And because you control the resistance and speed, your fitness is in your hands. When it comes to group exercise classes, this one is as easy as riding a bike.",
        bookedCount: 25,
        classCapacity: 25,
        waitingListCount: 19,
        waitingListCapacity: 20,
        instructorName: "Dan Kirk",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 450,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199964",
        name: "HIIT",
        startDateTime: {
          dateTime: "2026-02-11T07:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "Your bodyweight is the tool to build athletic fitness as you sweat through simple, high intensity intervals with modifications that work for all fitness levels.",
        bookedCount: 3,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Dan Kirk",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 250,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199769",
        name: "GLC",
        startDateTime: {
          dateTime: "2026-02-11T08:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Shape up and burn fat as you lunge, step and squat your way to fitness in this ever-popular, fun class using both weights and your own bodyweight. The high repetition based routines will put your legs, bums and tums through their paces in a bid to trim down those areas we love to hate - trust us, your body will thank you for it!",
        bookedCount: 5,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Dan Kirk",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 187,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199297",
        name: "Step",
        startDateTime: {
          dateTime: "2026-02-11T09:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "For both beginners and advanced steppers this great cardio workout is choreographed. As you progress, so will the movements, always giving you something new and fun to experience in the class. You’ll have a fantastic athletic workout that helps to burn fat and tone up to some great music! Great if your goal is weight loss, toning or general fitness.",
        bookedCount: 11,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Dan Kirk",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 375,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199859",
        name: "Yoga £2",
        startDateTime: {
          dateTime: "2026-02-11T10:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 60,
        description:
          "Experience mind and body connection through a series of disciplined physical postures, breathing exercises and relaxation. You’ll be increasing flexibility and balancing all parts of the body through this strengthening workout. Yoga can help reduce stress levels and improve overall health.",
        bookedCount: 6,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Michelle Hayter M",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 350,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199634",
        name: "BURN",
        startDateTime: {
          dateTime: "2026-02-11T12:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description: "Get ready to SWEAT with full body blasting exercises designed to challenge and change you! The exercises and work/rest periods vary from class to class but the intensity always challenges you to give your best that day!",
        bookedCount: 8,
        classCapacity: 16,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Ollie Ryan",
        studio: "Functional Area",
        classType: "class",
        energyConsumptionKcal: 300,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199574",
        name: "Cycle",
        startDateTime: {
          dateTime: "2026-02-11T13:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Get ready to burn calories and boost your fitness level in this moderate to high intensity class, which is sometimes referred to as 'spin'. Motivating music will provide the soundtrack as you cycle your way through multiple terrains designed to improve cardio endurance, lose weight and strengthen your legs and core. And because you control the resistance and speed, your fitness is in your hands. When it comes to group exercise classes, this one is as easy as riding a bike.",
        bookedCount: 14,
        classCapacity: 25,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Ollie Ryan",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 300,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198620",
        name: "PT Taster Session",
        startDateTime: {
          dateTime: "2026-02-11T14:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Curious about personal training? Book a free PT Taster Session with one of our fantastic self-employed trainers. This 1-1 session is focused on discussing your fitness goals and exploring how PT can help you achieve them. You'll experience what PT is all about and see if it's the right fit for you.",
        bookedCount: 0,
        classCapacity: 1,
        waitingListCount: 0,
        waitingListCapacity: 1,
        instructorName: "Joshua Barnes",
        studio: "Induction Point",
        classType: "induction",
        energyConsumptionKcal: 187,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199889",
        name: "Learn to Deadlift",
        startDateTime: {
          dateTime: "2026-02-11T16:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Our Learn to Deadlift Workshops, led by our expert coaches, will teach you how to deadlift confidently while supporting you with the basics of good technique to inspire your workouts and help you achieve the best results.\r\n\r\nYou’ll work in small, friendly groups, with personalized guidance on form to make sure you feel confident and safe when training with weights.\r\n\r\nSee you at the bar!",
        bookedCount: 0,
        classCapacity: 4,
        waitingListCount: 0,
        waitingListCapacity: 0,
        instructorName: "Joshua Barnes",
        studio: "Gym Floor",
        classType: "induction",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199491",
        name: "LIFT",
        startDateTime: {
          dateTime: "2026-02-11T17:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description: "Strength development for every fitness level. LIFT delivers real results using scientifically proven methods that not only build muscle, but leave you feeling more confident in and out of the gym.",
        bookedCount: 8,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Joshua Barnes",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 337,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199476",
        name: "Step",
        startDateTime: {
          dateTime: "2026-02-11T18:05:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "For both beginners and advanced steppers this great cardio workout is choreographed. As you progress, so will the movements, always giving you something new and fun to experience in the class. You’ll have a fantastic athletic workout that helps to burn fat and tone up to some great music! Great if your goal is weight loss, toning or general fitness.",
        bookedCount: 20,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Tom Collier",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 250,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199934",
        name: "Get Started",
        startDateTime: {
          dateTime: "2026-02-11T18:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Our Get Started sessions will show you everything you need to know – from where the changing rooms and toilets are to meeting members of the PureGym team. We’ll then show you how to get started in the different areas of the gym (including quiet areas if you prefer a less busy space). You’ll also have the opportunity to use some of the gym kit if you want to.",
        bookedCount: 0,
        classCapacity: 3,
        waitingListCount: 0,
        waitingListCapacity: 0,
        instructorName: "Joshua Barnes",
        studio: "Induction Point",
        classType: "induction",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200835",
        name: "MIND",
        startDateTime: {
          dateTime: "2026-02-11T18:35:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description: "Designed to make you move better. MIND focuses on flexibility, mobility and stability and draws inspiration from sports recovery, yoga and calisthenics to create connection between mind and movement.",
        bookedCount: 1,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Jill Motley",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 225,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198221",
        name: "Cycle",
        startDateTime: {
          dateTime: "2026-02-11T18:45:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Get ready to burn calories and boost your fitness level in this moderate to high intensity class, which is sometimes referred to as 'spin'. Motivating music will provide the soundtrack as you cycle your way through multiple terrains designed to improve cardio endurance, lose weight and strengthen your legs and core. And because you control the resistance and speed, your fitness is in your hands. When it comes to group exercise classes, this one is as easy as riding a bike.",
        bookedCount: 20,
        classCapacity: 25,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Tom Collier",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 450,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198610",
        name: "Get Started",
        startDateTime: {
          dateTime: "2026-02-12T08:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Our Get Started sessions will show you everything you need to know – from where the changing rooms and toilets are to meeting members of the PureGym team. We’ll then show you how to get started in the different areas of the gym (including quiet areas if you prefer a less busy space). You’ll also have the opportunity to use some of the gym kit if you want to.",
        bookedCount: 0,
        classCapacity: 3,
        waitingListCount: 0,
        waitingListCapacity: 0,
        instructorName: "Jay Dewire",
        studio: "Induction Point",
        classType: "induction",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198356",
        name: "STRIKE",
        startDateTime: {
          dateTime: "2026-02-12T09:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 35,
        description:
          "Designed for all fitness levels, STRIKE is an MMA-inspired non-contact group fitness class that combines high-intensity cardio, and functional training. It is adrenaline-pumping, challenging both physical and mental limits. The class includes easy to follow punches, kicks, and combos, targeting cardio, strength and agility. STRIKE will burn calories, reduce stress, build confidence, and will leave you feeling energized!",
        bookedCount: 1,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Jay Dewire",
        studio: "Studio",
        classType: "class",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198386",
        name: "Pilates £2",
        startDateTime: {
          dateTime: "2026-02-12T10:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 60,
        description:
          "A system of physical conditioning involving low-impact exercises and stretches designed to strengthen muscles of the torso and often performed using specialised equipment. Great if your goal is weight loss, toning, strength & conditioning, build muscle, training for an event or general fitness.",
        bookedCount: 2,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Tiffany Cavill",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 300,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200178",
        name: "PT Taster Session",
        startDateTime: {
          dateTime: "2026-02-12T11:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Curious about personal training? Book a free PT Taster Session with one of our fantastic self-employed trainers. This 1-1 session is focused on discussing your fitness goals and exploring how PT can help you achieve them. You'll experience what PT is all about and see if it's the right fit for you.",
        bookedCount: 0,
        classCapacity: 1,
        waitingListCount: 0,
        waitingListCapacity: 1,
        instructorName: "Jay Dewire",
        studio: "Gym Floor",
        classType: "induction",
        energyConsumptionKcal: 187,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199709",
        name: "Circuits",
        startDateTime: {
          dateTime: "2026-02-12T12:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "If you’re looking for a high intensity workout that will help tone your body and shed fat, this is a great class to attend. Circuits is a high energy and fast-paced class which involves working your way around different exercise stations performing each exercise as many times as you can in a set amount of time. Join in this classic class for a fun way to work out!",
        bookedCount: 4,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Chiara Albrizio",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 375,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198206",
        name: "Cycle",
        startDateTime: {
          dateTime: "2026-02-12T17:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Get ready to burn calories and boost your fitness level in this moderate to high intensity class, which is sometimes referred to as 'spin'. Motivating music will provide the soundtrack as you cycle your way through multiple terrains designed to improve cardio endurance, lose weight and strengthen your legs and core. And because you control the resistance and speed, your fitness is in your hands. When it comes to group exercise classes, this one is as easy as riding a bike.",
        bookedCount: 23,
        classCapacity: 25,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Dan Kirk",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 450,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199799",
        name: "Pump",
        startDateTime: {
          dateTime: "2026-02-12T18:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "If you're looking to tone up, build muscle or burn fat, this full body resistance class using weights will give you an all over, total body workout. \r\nAs you lift, curl and lunge your way through the range of upbeat exercises, the time will fly by. \r\n",
        bookedCount: 16,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Dan Kirk",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 337,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199754",
        name: "Get Started",
        startDateTime: {
          dateTime: "2026-02-12T18:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Our Get Started sessions will show you everything you need to know – from where the changing rooms and toilets are to meeting members of the PureGym team. We’ll then show you how to get started in the different areas of the gym (including quiet areas if you prefer a less busy space). You’ll also have the opportunity to use some of the gym kit if you want to.",
        bookedCount: 0,
        classCapacity: 3,
        waitingListCount: 0,
        waitingListCapacity: 0,
        instructorName: "Ashraf Ali",
        studio: "Induction Point",
        classType: "induction",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199949",
        name: "HIIT",
        startDateTime: {
          dateTime: "2026-02-12T19:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "Your bodyweight is the tool to build athletic fitness as you sweat through simple, high intensity intervals with modifications that work for all fitness levels.",
        bookedCount: 0,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Dan Kirk",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 250,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198281",
        name: "CORE",
        startDateTime: {
          dateTime: "2026-02-12T19:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "Working more than just your abs, this session focuses on both deep and surface muscles to help you strengthen and sculpt your entire core.",
        bookedCount: 0,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Ashraf Ali",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 200,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199559",
        name: "Cycle",
        startDateTime: {
          dateTime: "2026-02-12T19:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Get ready to burn calories and boost your fitness level in this moderate to high intensity class, which is sometimes referred to as 'spin'. Motivating music will provide the soundtrack as you cycle your way through multiple terrains designed to improve cardio endurance, lose weight and strengthen your legs and core. And because you control the resistance and speed, your fitness is in your hands. When it comes to group exercise classes, this one is as easy as riding a bike.",
        bookedCount: 14,
        classCapacity: 25,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Dan Kirk",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 450,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199994",
        name: "HIIT",
        startDateTime: {
          dateTime: "2026-02-13T06:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "Your bodyweight is the tool to build athletic fitness as you sweat through simple, high intensity intervals with modifications that work for all fitness levels.",
        bookedCount: 1,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Tom Collier",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 250,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198296",
        name: "Get Started",
        startDateTime: {
          dateTime: "2026-02-13T08:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Our Get Started sessions will show you everything you need to know – from where the changing rooms and toilets are to meeting members of the PureGym team. We’ll then show you how to get started in the different areas of the gym (including quiet areas if you prefer a less busy space). You’ll also have the opportunity to use some of the gym kit if you want to.",
        bookedCount: 1,
        classCapacity: 3,
        waitingListCount: 0,
        waitingListCapacity: 0,
        instructorName: "Tom Collier",
        studio: "Induction Point",
        classType: "induction",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199416",
        name: "LIFT",
        startDateTime: {
          dateTime: "2026-02-13T09:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description: "Strength development for every fitness level. LIFT delivers real results using scientifically proven methods that not only build muscle, but leave you feeling more confident in and out of the gym.",
        bookedCount: 9,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Tom Collier",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 337,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199589",
        name: "LIFT",
        startDateTime: {
          dateTime: "2026-02-13T12:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "Strength development for every fitness level. LIFT delivers real results using scientifically proven methods that not only build muscle, but leave you feeling more confident in and out of the gym.",
        bookedCount: 0,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Elle Hubbard",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 225,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199529",
        name: "Cycle",
        startDateTime: {
          dateTime: "2026-02-13T13:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Get ready to burn calories and boost your fitness level in this moderate to high intensity class, which is sometimes referred to as 'spin'. Motivating music will provide the soundtrack as you cycle your way through multiple terrains designed to improve cardio endurance, lose weight and strengthen your legs and core. And because you control the resistance and speed, your fitness is in your hands. When it comes to group exercise classes, this one is as easy as riding a bike.",
        bookedCount: 7,
        classCapacity: 25,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Elle Hubbard",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 300,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200407",
        name: "PT Taster Session",
        startDateTime: {
          dateTime: "2026-02-13T14:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Curious about personal training? Book a free PT Taster Session with one of our fantastic self-employed trainers. This 1-1 session is focused on discussing your fitness goals and exploring how PT can help you achieve them. You'll experience what PT is all about and see if it's the right fit for you.",
        bookedCount: 0,
        classCapacity: 1,
        waitingListCount: 0,
        waitingListCapacity: 1,
        instructorName: "Joshua Barnes",
        studio: "Induction Point",
        classType: "induction",
        energyConsumptionKcal: 187,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199664",
        name: "Womens Weightlifting Workshop",
        startDateTime: {
          dateTime: "2026-02-13T14:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "An introduction into lifting in our designated free weights area.",
        bookedCount: 0,
        classCapacity: 4,
        waitingListCount: 0,
        waitingListCapacity: 0,
        instructorName: "Elle Hubbard",
        studio: "Gym Floor",
        classType: "induction",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198236",
        name: "STRENGTH",
        startDateTime: {
          dateTime: "2026-02-13T18:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "This class is designed to build up your full body STRENGTH! We'll go through 8 strength exercises to hit the whole body, moving with perfect form and control. Plus we always end with a FINISHER to make sure you leave with those post workout endorphins rushing around your body!",
        bookedCount: 6,
        classCapacity: 16,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Chiara Albrizio",
        studio: "Functional Area",
        classType: "class",
        energyConsumptionKcal: 300,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199679",
        name: "GLC",
        startDateTime: {
          dateTime: "2026-02-14T09:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Shape up and burn fat as you lunge, step and squat your way to fitness in this ever-popular, fun class using both weights and your own bodyweight. The high repetition based routines will put your legs, bums and tums through their paces in a bid to trim down those areas we love to hate - trust us, your body will thank you for it!",
        bookedCount: 2,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Jay Dewire",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 187,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198266",
        name: "RIDE",
        startDateTime: {
          dateTime: "2026-02-14T10:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description: "Interval based cardio training workout on a spin bike. This intense yet exhilarating workout uses simple riding positions to create maximum sweat. Designed to deliver fast results for any fitness level.",
        bookedCount: 8,
        classCapacity: 25,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Jay Dewire",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 300,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199829",
        name: "Pilates £2",
        startDateTime: {
          dateTime: "2026-02-14T10:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "A system of physical conditioning involving low-impact exercises and stretches designed to strengthen muscles of the torso and often performed using specialised equipment. Great if your goal is weight loss, toning, strength & conditioning, build muscle, training for an event or general fitness.",
        bookedCount: 1,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Tiffany Cavill",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 225,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199461",
        name: "Get Started",
        startDateTime: {
          dateTime: "2026-02-14T11:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Our Get Started sessions will show you everything you need to know – from where the changing rooms and toilets are to meeting members of the PureGym team. We’ll then show you how to get started in the different areas of the gym (including quiet areas if you prefer a less busy space). You’ll also have the opportunity to use some of the gym kit if you want to.",
        bookedCount: 0,
        classCapacity: 3,
        waitingListCount: 0,
        waitingListCapacity: 0,
        instructorName: "Jay Dewire",
        studio: "Induction Point",
        classType: "induction",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200024",
        name: "STRENGTH",
        startDateTime: {
          dateTime: "2026-02-14T12:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "This class is designed to build up your full body STRENGTH! We'll go through 8 strength exercises to hit the whole body, moving with perfect form and control. Plus we always end with a FINISHER to make sure you leave with those post workout endorphins rushing around your body!",
        bookedCount: 0,
        classCapacity: 16,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Sam Cosh",
        studio: "Functional Area",
        classType: "class",
        energyConsumptionKcal: 300,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200039",
        name: "Learn to Squat",
        startDateTime: {
          dateTime: "2026-02-14T14:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Our Learn to Squat Workshops, led by our expert coaches, will teach you how to squat confidently while supporting you with the basics of good technique to inspire your workouts and help you achieve the best results.\r\n\r\nYou’ll work in small, friendly groups, with personalized guidance on form to make sure you feel confident and safe when squatting in the gym.\r\n\r\nSee you at the bar!",
        bookedCount: 0,
        classCapacity: 4,
        waitingListCount: 0,
        waitingListCapacity: 0,
        instructorName: "Ashraf Ali",
        studio: "Gym Floor",
        classType: "induction",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199724",
        name: "Get Started",
        startDateTime: {
          dateTime: "2026-02-14T15:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Our Get Started sessions will show you everything you need to know – from where the changing rooms and toilets are to meeting members of the PureGym team. We’ll then show you how to get started in the different areas of the gym (including quiet areas if you prefer a less busy space). You’ll also have the opportunity to use some of the gym kit if you want to.",
        bookedCount: 0,
        classCapacity: 3,
        waitingListCount: 0,
        waitingListCapacity: 0,
        instructorName: "Ashraf Ali",
        studio: "Induction Point",
        classType: "induction",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199544",
        name: "Pump",
        startDateTime: {
          dateTime: "2026-02-15T09:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "If you're looking to tone up, build muscle or burn fat, this full body resistance class using weights will give you an all over, total body workout. \r\nAs you lift, curl and lunge your way through the range of upbeat exercises, the time will fly by. \r\n",
        bookedCount: 6,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Amelia Hannan",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 337,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199604",
        name: "Cycle",
        startDateTime: {
          dateTime: "2026-02-15T10:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Get ready to burn calories and boost your fitness level in this moderate to high intensity class, which is sometimes referred to as 'spin'. Motivating music will provide the soundtrack as you cycle your way through multiple terrains designed to improve cardio endurance, lose weight and strengthen your legs and core. And because you control the resistance and speed, your fitness is in your hands. When it comes to group exercise classes, this one is as easy as riding a bike.",
        bookedCount: 15,
        classCapacity: 25,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Amelia Hannan",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 450,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199739",
        name: "BURN",
        startDateTime: {
          dateTime: "2026-02-15T12:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description: "Get ready to SWEAT with full body blasting exercises designed to challenge and change you! The exercises and work/rest periods vary from class to class but the intensity always challenges you to give your best that day!",
        bookedCount: 0,
        classCapacity: 16,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Ashraf Ali",
        studio: "Functional Area",
        classType: "class",
        energyConsumptionKcal: 300,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199431",
        name: "Learn to train Glutes",
        startDateTime: {
          dateTime: "2026-02-15T14:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "Learn how to effectively strengthen, train and build your glutes with guidance from one of our coaches in our learn to train glutes workshop.",
        bookedCount: 0,
        classCapacity: 4,
        waitingListCount: 0,
        waitingListCapacity: 0,
        instructorName: "Ashraf Ali",
        studio: "Gym Floor",
        classType: "induction",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200010",
        name: "Cycle",
        startDateTime: {
          dateTime: "2026-02-16T06:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Get ready to burn calories and boost your fitness level in this moderate to high intensity class, which is sometimes referred to as 'spin'. Motivating music will provide the soundtrack as you cycle your way through multiple terrains designed to improve cardio endurance, lose weight and strengthen your legs and core. And because you control the resistance and speed, your fitness is in your hands. When it comes to group exercise classes, this one is as easy as riding a bike.",
        bookedCount: 17,
        classCapacity: 25,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Dan Kirk",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 450,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198808",
        name: "Circuits",
        startDateTime: {
          dateTime: "2026-02-16T07:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "If you’re looking for a high intensity workout that will help tone your body and shed fat, this is a great class to attend. Circuits is a high energy and fast-paced class which involves working your way around different exercise stations performing each exercise as many times as you can in a set amount of time. Join in this classic class for a fun way to work out!",
        bookedCount: 0,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Dan Kirk",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 375,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200135",
        name: "GLC",
        startDateTime: {
          dateTime: "2026-02-16T08:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Shape up and burn fat as you lunge, step and squat your way to fitness in this ever-popular, fun class using both weights and your own bodyweight. The high repetition based routines will put your legs, bums and tums through their paces in a bid to trim down those areas we love to hate - trust us, your body will thank you for it!",
        bookedCount: 0,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Dan Kirk",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 187,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199785",
        name: "Pump",
        startDateTime: {
          dateTime: "2026-02-16T09:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "If you're looking to tone up, build muscle or burn fat, this full body resistance class using weights will give you an all over, total body workout. \r\nAs you lift, curl and lunge your way through the range of upbeat exercises, the time will fly by. \r\n",
        bookedCount: 7,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Dan Kirk",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 337,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200085",
        name: "STRENGTH",
        startDateTime: {
          dateTime: "2026-02-16T12:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "This class is designed to build up your full body STRENGTH! We'll go through 8 strength exercises to hit the whole body, moving with perfect form and control. Plus we always end with a FINISHER to make sure you leave with those post workout endorphins rushing around your body!",
        bookedCount: 2,
        classCapacity: 16,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Chiara Albrizio",
        studio: "Functional Area",
        classType: "class",
        energyConsumptionKcal: 300,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199815",
        name: "Cycle",
        startDateTime: {
          dateTime: "2026-02-16T17:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Get ready to burn calories and boost your fitness level in this moderate to high intensity class, which is sometimes referred to as 'spin'. Motivating music will provide the soundtrack as you cycle your way through multiple terrains designed to improve cardio endurance, lose weight and strengthen your legs and core. And because you control the resistance and speed, your fitness is in your hands. When it comes to group exercise classes, this one is as easy as riding a bike.",
        bookedCount: 1,
        classCapacity: 25,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Jay Dewire",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 450,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200070",
        name: "Pump",
        startDateTime: {
          dateTime: "2026-02-16T17:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "If you're looking to tone up, build muscle or burn fat, this full body resistance class using weights will give you an all over, total body workout. \r\nAs you lift, curl and lunge your way through the range of upbeat exercises, the time will fly by. \r\n",
        bookedCount: 1,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Jill Motley",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 337,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199402",
        name: "Get Started",
        startDateTime: {
          dateTime: "2026-02-16T18:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Our Get Started sessions will show you everything you need to know – from where the changing rooms and toilets are to meeting members of the PureGym team. We’ll then show you how to get started in the different areas of the gym (including quiet areas if you prefer a less busy space). You’ll also have the opportunity to use some of the gym kit if you want to.",
        bookedCount: 0,
        classCapacity: 3,
        waitingListCount: 0,
        waitingListCapacity: 0,
        instructorName: "Joshua Barnes",
        studio: "Induction Point",
        classType: "induction",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200101",
        name: "STRIKE",
        startDateTime: {
          dateTime: "2026-02-16T18:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 35,
        description:
          "Designed for all fitness levels, STRIKE is an MMA-inspired non-contact group fitness class that combines high-intensity cardio, and functional training. It is adrenaline-pumping, challenging both physical and mental limits. The class includes easy to follow punches, kicks, and combos, targeting cardio, strength and agility. STRIKE will burn calories, reduce stress, build confidence, and will leave you feeling energized!",
        bookedCount: 1,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Jay Dewire",
        studio: "Studio",
        classType: "class",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199620",
        name: "RIDE",
        startDateTime: {
          dateTime: "2026-02-16T18:45:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "Interval based cardio training workout on a spin bike. This intense yet exhilarating workout uses simple riding positions to create maximum sweat. Designed to deliver fast results for any fitness level.",
        bookedCount: 0,
        classCapacity: 25,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Jill Motley",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 200,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198327",
        name: "LIFT",
        startDateTime: {
          dateTime: "2026-02-16T18:50:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "Strength development for every fitness level. LIFT delivers real results using scientifically proven methods that not only build muscle, but leave you feeling more confident in and out of the gym.",
        bookedCount: 0,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Joshua Barnes",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 225,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200165",
        name: "MIND",
        startDateTime: {
          dateTime: "2026-02-16T19:20:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description: "Designed to make you move better. MIND focuses on flexibility, mobility and stability and draws inspiration from sports recovery, yoga and calisthenics to create connection between mind and movement.",
        bookedCount: 1,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Jill Motley",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 225,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199695",
        name: "LIFT",
        startDateTime: {
          dateTime: "2026-02-17T06:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description: "Strength development for every fitness level. LIFT delivers real results using scientifically proven methods that not only build muscle, but leave you feeling more confident in and out of the gym.",
        bookedCount: 0,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Elle Hubbard",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 337,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200851",
        name: "HIIT",
        startDateTime: {
          dateTime: "2026-02-17T09:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "Your bodyweight is the tool to build athletic fitness as you sweat through simple, high intensity intervals with modifications that work for all fitness levels.",
        bookedCount: 1,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Elle Hubbard",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 250,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199980",
        name: "MIND",
        startDateTime: {
          dateTime: "2026-02-17T10:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description: "Designed to make you move better. MIND focuses on flexibility, mobility and stability and draws inspiration from sports recovery, yoga and calisthenics to create connection between mind and movement.",
        bookedCount: 0,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Jill Motley",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 225,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200865",
        name: "PT Taster Session",
        startDateTime: {
          dateTime: "2026-02-17T10:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Curious about personal training? Book a free PT Taster Session with one of our fantastic self-employed trainers. This 1-1 session is focused on discussing your fitness goals and exploring how PT can help you achieve them. You'll experience what PT is all about and see if it's the right fit for you.",
        bookedCount: 0,
        classCapacity: 1,
        waitingListCount: 0,
        waitingListCapacity: 1,
        instructorName: "Elle Hubbard",
        studio: "Gym Floor",
        classType: "induction",
        energyConsumptionKcal: 187,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199312",
        name: "Circuits",
        startDateTime: {
          dateTime: "2026-02-17T12:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "If you’re looking for a high intensity workout that will help tone your body and shed fat, this is a great class to attend. Circuits is a high energy and fast-paced class which involves working your way around different exercise stations performing each exercise as many times as you can in a set amount of time. Join in this classic class for a fun way to work out!",
        bookedCount: 0,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Joshua Barnes",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 375,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199515",
        name: "RIDE",
        startDateTime: {
          dateTime: "2026-02-17T13:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "Interval based cardio training workout on a spin bike. This intense yet exhilarating workout uses simple riding positions to create maximum sweat. Designed to deliver fast results for any fitness level.",
        bookedCount: 2,
        classCapacity: 25,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Joshua Barnes",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 200,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199875",
        name: "Pump",
        startDateTime: {
          dateTime: "2026-02-17T17:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "If you're looking to tone up, build muscle or burn fat, this full body resistance class using weights will give you an all over, total body workout. \r\nAs you lift, curl and lunge your way through the range of upbeat exercises, the time will fly by. \r\n",
        bookedCount: 2,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Simon Harrison",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 337,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200207",
        name: "Step",
        startDateTime: {
          dateTime: "2026-02-17T18:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "For both beginners and advanced steppers this great cardio workout is choreographed. As you progress, so will the movements, always giving you something new and fun to experience in the class. You’ll have a fantastic athletic workout that helps to burn fat and tone up to some great music! Great if your goal is weight loss, toning or general fitness.",
        bookedCount: 3,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Simon Harrison",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 250,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199845",
        name: "GLC",
        startDateTime: {
          dateTime: "2026-02-17T18:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Shape up and burn fat as you lunge, step and squat your way to fitness in this ever-popular, fun class using both weights and your own bodyweight. The high repetition based routines will put your legs, bums and tums through their paces in a bid to trim down those areas we love to hate - trust us, your body will thank you for it!",
        bookedCount: 4,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Tom Collier",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 125,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200806",
        name: "RIDE",
        startDateTime: {
          dateTime: "2026-02-17T18:45:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "Interval based cardio training workout on a spin bike. This intense yet exhilarating workout uses simple riding positions to create maximum sweat. Designed to deliver fast results for any fitness level.",
        bookedCount: 0,
        classCapacity: 25,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Simon Harrison",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 200,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199008",
        name: "Cycle",
        startDateTime: {
          dateTime: "2026-02-17T19:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Get ready to burn calories and boost your fitness level in this moderate to high intensity class, which is sometimes referred to as 'spin'. Motivating music will provide the soundtrack as you cycle your way through multiple terrains designed to improve cardio endurance, lose weight and strengthen your legs and core. And because you control the resistance and speed, your fitness is in your hands. When it comes to group exercise classes, this one is as easy as riding a bike.",
        bookedCount: 1,
        classCapacity: 25,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Tom Collier",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 450,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198252",
        name: "Cycle",
        startDateTime: {
          dateTime: "2026-02-18T06:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Get ready to burn calories and boost your fitness level in this moderate to high intensity class, which is sometimes referred to as 'spin'. Motivating music will provide the soundtrack as you cycle your way through multiple terrains designed to improve cardio endurance, lose weight and strengthen your legs and core. And because you control the resistance and speed, your fitness is in your hands. When it comes to group exercise classes, this one is as easy as riding a bike.",
        bookedCount: 7,
        classCapacity: 25,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Dan Kirk",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 450,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199965",
        name: "HIIT",
        startDateTime: {
          dateTime: "2026-02-18T07:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "Your bodyweight is the tool to build athletic fitness as you sweat through simple, high intensity intervals with modifications that work for all fitness levels.",
        bookedCount: 0,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Dan Kirk",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 250,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199770",
        name: "GLC",
        startDateTime: {
          dateTime: "2026-02-18T08:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Shape up and burn fat as you lunge, step and squat your way to fitness in this ever-popular, fun class using both weights and your own bodyweight. The high repetition based routines will put your legs, bums and tums through their paces in a bid to trim down those areas we love to hate - trust us, your body will thank you for it!",
        bookedCount: 0,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Dan Kirk",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 187,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199298",
        name: "Step",
        startDateTime: {
          dateTime: "2026-02-18T09:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "For both beginners and advanced steppers this great cardio workout is choreographed. As you progress, so will the movements, always giving you something new and fun to experience in the class. You’ll have a fantastic athletic workout that helps to burn fat and tone up to some great music! Great if your goal is weight loss, toning or general fitness.",
        bookedCount: 1,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Dan Kirk",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 375,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199860",
        name: "Yoga £2",
        startDateTime: {
          dateTime: "2026-02-18T10:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 60,
        description:
          "Experience mind and body connection through a series of disciplined physical postures, breathing exercises and relaxation. You’ll be increasing flexibility and balancing all parts of the body through this strengthening workout. Yoga can help reduce stress levels and improve overall health.",
        bookedCount: 0,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Michelle Hayter M",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 350,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199635",
        name: "BURN",
        startDateTime: {
          dateTime: "2026-02-18T12:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description: "Get ready to SWEAT with full body blasting exercises designed to challenge and change you! The exercises and work/rest periods vary from class to class but the intensity always challenges you to give your best that day!",
        bookedCount: 0,
        classCapacity: 16,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Ollie Ryan",
        studio: "Functional Area",
        classType: "class",
        energyConsumptionKcal: 300,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199575",
        name: "Cycle",
        startDateTime: {
          dateTime: "2026-02-18T13:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Get ready to burn calories and boost your fitness level in this moderate to high intensity class, which is sometimes referred to as 'spin'. Motivating music will provide the soundtrack as you cycle your way through multiple terrains designed to improve cardio endurance, lose weight and strengthen your legs and core. And because you control the resistance and speed, your fitness is in your hands. When it comes to group exercise classes, this one is as easy as riding a bike.",
        bookedCount: 2,
        classCapacity: 25,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Ollie Ryan",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 300,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198621",
        name: "PT Taster Session",
        startDateTime: {
          dateTime: "2026-02-18T14:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Curious about personal training? Book a free PT Taster Session with one of our fantastic self-employed trainers. This 1-1 session is focused on discussing your fitness goals and exploring how PT can help you achieve them. You'll experience what PT is all about and see if it's the right fit for you.",
        bookedCount: 0,
        classCapacity: 1,
        waitingListCount: 0,
        waitingListCapacity: 1,
        instructorName: "Joshua Barnes",
        studio: "Induction Point",
        classType: "induction",
        energyConsumptionKcal: 187,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199890",
        name: "Learn to Deadlift",
        startDateTime: {
          dateTime: "2026-02-18T16:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Our Learn to Deadlift Workshops, led by our expert coaches, will teach you how to deadlift confidently while supporting you with the basics of good technique to inspire your workouts and help you achieve the best results.\r\n\r\nYou’ll work in small, friendly groups, with personalized guidance on form to make sure you feel confident and safe when training with weights.\r\n\r\nSee you at the bar!",
        bookedCount: 0,
        classCapacity: 4,
        waitingListCount: 0,
        waitingListCapacity: 0,
        instructorName: "Joshua Barnes",
        studio: "Gym Floor",
        classType: "induction",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199492",
        name: "LIFT",
        startDateTime: {
          dateTime: "2026-02-18T17:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description: "Strength development for every fitness level. LIFT delivers real results using scientifically proven methods that not only build muscle, but leave you feeling more confident in and out of the gym.",
        bookedCount: 0,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Joshua Barnes",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 337,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199477",
        name: "Step",
        startDateTime: {
          dateTime: "2026-02-18T18:05:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "For both beginners and advanced steppers this great cardio workout is choreographed. As you progress, so will the movements, always giving you something new and fun to experience in the class. You’ll have a fantastic athletic workout that helps to burn fat and tone up to some great music! Great if your goal is weight loss, toning or general fitness.",
        bookedCount: 0,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Tom Collier",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 250,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199935",
        name: "Get Started",
        startDateTime: {
          dateTime: "2026-02-18T18:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Our Get Started sessions will show you everything you need to know – from where the changing rooms and toilets are to meeting members of the PureGym team. We’ll then show you how to get started in the different areas of the gym (including quiet areas if you prefer a less busy space). You’ll also have the opportunity to use some of the gym kit if you want to.",
        bookedCount: 0,
        classCapacity: 3,
        waitingListCount: 0,
        waitingListCapacity: 0,
        instructorName: "Joshua Barnes",
        studio: "Induction Point",
        classType: "induction",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200836",
        name: "MIND",
        startDateTime: {
          dateTime: "2026-02-18T18:35:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description: "Designed to make you move better. MIND focuses on flexibility, mobility and stability and draws inspiration from sports recovery, yoga and calisthenics to create connection between mind and movement.",
        bookedCount: 0,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Jill Motley",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 225,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198222",
        name: "Cycle",
        startDateTime: {
          dateTime: "2026-02-18T18:45:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Get ready to burn calories and boost your fitness level in this moderate to high intensity class, which is sometimes referred to as 'spin'. Motivating music will provide the soundtrack as you cycle your way through multiple terrains designed to improve cardio endurance, lose weight and strengthen your legs and core. And because you control the resistance and speed, your fitness is in your hands. When it comes to group exercise classes, this one is as easy as riding a bike.",
        bookedCount: 2,
        classCapacity: 25,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Tom Collier",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 450,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198611",
        name: "Get Started",
        startDateTime: {
          dateTime: "2026-02-19T08:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Our Get Started sessions will show you everything you need to know – from where the changing rooms and toilets are to meeting members of the PureGym team. We’ll then show you how to get started in the different areas of the gym (including quiet areas if you prefer a less busy space). You’ll also have the opportunity to use some of the gym kit if you want to.",
        bookedCount: 0,
        classCapacity: 3,
        waitingListCount: 0,
        waitingListCapacity: 0,
        instructorName: "Jay Dewire",
        studio: "Induction Point",
        classType: "induction",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198357",
        name: "STRIKE",
        startDateTime: {
          dateTime: "2026-02-19T09:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 35,
        description:
          "Designed for all fitness levels, STRIKE is an MMA-inspired non-contact group fitness class that combines high-intensity cardio, and functional training. It is adrenaline-pumping, challenging both physical and mental limits. The class includes easy to follow punches, kicks, and combos, targeting cardio, strength and agility. STRIKE will burn calories, reduce stress, build confidence, and will leave you feeling energized!",
        bookedCount: 0,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Jay Dewire",
        studio: "Studio",
        classType: "class",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198387",
        name: "Pilates £2",
        startDateTime: {
          dateTime: "2026-02-19T10:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 60,
        description:
          "A system of physical conditioning involving low-impact exercises and stretches designed to strengthen muscles of the torso and often performed using specialised equipment. Great if your goal is weight loss, toning, strength & conditioning, build muscle, training for an event or general fitness.",
        bookedCount: 0,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Tiffany Cavill",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 300,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:200179",
        name: "PT Taster Session",
        startDateTime: {
          dateTime: "2026-02-19T11:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Curious about personal training? Book a free PT Taster Session with one of our fantastic self-employed trainers. This 1-1 session is focused on discussing your fitness goals and exploring how PT can help you achieve them. You'll experience what PT is all about and see if it's the right fit for you.",
        bookedCount: 0,
        classCapacity: 1,
        waitingListCount: 0,
        waitingListCapacity: 1,
        instructorName: "Jay Dewire",
        studio: "Gym Floor",
        classType: "induction",
        energyConsumptionKcal: 187,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199710",
        name: "Circuits",
        startDateTime: {
          dateTime: "2026-02-19T12:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "If you’re looking for a high intensity workout that will help tone your body and shed fat, this is a great class to attend. Circuits is a high energy and fast-paced class which involves working your way around different exercise stations performing each exercise as many times as you can in a set amount of time. Join in this classic class for a fun way to work out!",
        bookedCount: 0,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Chiara Albrizio",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 375,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198207",
        name: "Cycle",
        startDateTime: {
          dateTime: "2026-02-19T17:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Get ready to burn calories and boost your fitness level in this moderate to high intensity class, which is sometimes referred to as 'spin'. Motivating music will provide the soundtrack as you cycle your way through multiple terrains designed to improve cardio endurance, lose weight and strengthen your legs and core. And because you control the resistance and speed, your fitness is in your hands. When it comes to group exercise classes, this one is as easy as riding a bike.",
        bookedCount: 0,
        classCapacity: 25,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Dan Kirk",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 450,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199800",
        name: "Pump",
        startDateTime: {
          dateTime: "2026-02-19T18:15:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "If you're looking to tone up, build muscle or burn fat, this full body resistance class using weights will give you an all over, total body workout. \r\nAs you lift, curl and lunge your way through the range of upbeat exercises, the time will fly by. \r\n",
        bookedCount: 0,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Dan Kirk",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 337,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199755",
        name: "Get Started",
        startDateTime: {
          dateTime: "2026-02-19T18:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description:
          "Our Get Started sessions will show you everything you need to know – from where the changing rooms and toilets are to meeting members of the PureGym team. We’ll then show you how to get started in the different areas of the gym (including quiet areas if you prefer a less busy space). You’ll also have the opportunity to use some of the gym kit if you want to.",
        bookedCount: 0,
        classCapacity: 3,
        waitingListCount: 0,
        waitingListCapacity: 0,
        instructorName: "Ashraf Ali",
        studio: "Induction Point",
        classType: "induction",
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199950",
        name: "HIIT",
        startDateTime: {
          dateTime: "2026-02-19T19:00:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "Your bodyweight is the tool to build athletic fitness as you sweat through simple, high intensity intervals with modifications that work for all fitness levels.",
        bookedCount: 0,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Dan Kirk",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 250,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:198282",
        name: "CORE",
        startDateTime: {
          dateTime: "2026-02-19T19:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 30,
        description: "Working more than just your abs, this session focuses on both deep and surface muscles to help you strengthen and sculpt your entire core.",
        bookedCount: 0,
        classCapacity: 37,
        waitingListCount: 0,
        waitingListCapacity: 10,
        instructorName: "Ashraf Ali",
        studio: "Studio",
        classType: "class",
        energyConsumptionKcal: 200,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
      {
        id: "75:199560",
        name: "Cycle",
        startDateTime: {
          dateTime: "2026-02-19T19:30:00Z",
          timeZone: "Europe/London",
        },
        duration: 45,
        description:
          "Get ready to burn calories and boost your fitness level in this moderate to high intensity class, which is sometimes referred to as 'spin'. Motivating music will provide the soundtrack as you cycle your way through multiple terrains designed to improve cardio endurance, lose weight and strengthen your legs and core. And because you control the resistance and speed, your fitness is in your hands. When it comes to group exercise classes, this one is as easy as riding a bike.",
        bookedCount: 0,
        classCapacity: 25,
        waitingListCount: 0,
        waitingListCapacity: 20,
        instructorName: "Dan Kirk",
        studio: "Cycle Studio",
        classType: "class",
        energyConsumptionKcal: 450,
        bookingStatus: "LoggedOut",
        bookingErrors: [
          {
            errorCode: "ClassTooFarInAdvance",
            message: "You can only book up to 8 days in advance",
            extraErrorInfo: {
              numberOfDaysInAdvance: 8,
            },
          },
          {
            errorCode: "MemberMustBeLoggedIn",
            message: "You must be logged in to Book a course",
          },
        ],
        gymAccessSlot: {
          isRequired: false,
          isBooked: false,
        },
      },
    ],
  },
};
