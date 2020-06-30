'use strict';

import {store} from '../redux/create';
import {Text} from 'react-native';
import React from 'react';

const es = {
  'Enjoy your ride': 'استمتع بقيادتك',
  'enabling your location and notifications shall give you access to nearst providers and latest promotions.': 'تفعيل موقعك و الاشعارات تمكنك من الوصول إلى أقرب مقدم خدمة وأحدث العروض الترويجية',
  'Discover more.': 'اكتشف المزيد',
  'Easily access all services related to your Mercedes around you with accredited reviews from your community experience and get to know important tips and other useful hidden options for more comfort with your ride.': 'احصل و اوصل بسهولة حولك الى كل الخدمات المتعلقة بمرسيدس من خلال اراء وتجارب الاعضاء الاخرين و تعرف على نصائح هامة وخيارات أخرى تفيدك لمزيد من الراحة أثناء رحلتك.',
  'Support your Benz community by rating your experience with rendered services for appropriate and fair ranking to all service providers': 'قيم تجربتك مع مقدم الخدمة لتدعم مجتمع بنز الخاص بك للحصول على التصنيف المناسب والعادل لجميع مقدمى الخدمات',
  'Learn more': 'أعرف اكتر',
  'Know common cluster errors related to your Mercedes including severity, common reasons from others experience and you can add yours too': 'تعرف على أخطاء العداد الشائعة المتعلقة بموديل سيارتك متضمنا مستوى الخطورة والأسباب الشائعة من تجربة الآخرين كما يمكنك إضافة تجربتك مع نفس الخطأ',
  'Parts hub': 'سوق قطع الغيار',
  'Get access to the largest spare parts store with simple clicks': 'تمتع بالراحة ووفر وقتك عند البحث عن أي قطعه غيار فلديك الآن أكبر متجر لقطع الغيار بين يديك و بخطوات بسيطة سيمكنك بسهولة الوصول إلى ما تريد وشرائه و يمكنك قراءة تجارب الاخرين مع التجار العارضة لقطع الغيار',
  'Get Started': ' ابدأالآن',
  'Continue with Facebook': 'استمر من خلال فيسبوك',
  'Or': 'أو',
  'Email Address or Mobile number': 'رقم الموبايل او البريد الالكتروني',
  'Password': 'كلمة المرور',
  'Login': 'تسجيل الدخول',
  'Forgot your password!': 'نسيت كلمة المرور!',
  'Not registered yet': 'لا تمتلك حساب',
  'Create new account': ' تسجيل حساب جديد',
  'What’s your Benz': 'ايه نوع عربيتك',
  'It’s super quick': 'بسهولة و بسرعة',
  'Scan your Vin Number': 'ادخل رقم تعريف سيارتك',
  'Continue': 'استمرار',
  'Create your account': 'سجل حسابك',
  'One step away': '  بقيت خطوة واحدة',
  'Fill your info Facebook': 'بياناتك بواسطة فيسبوك',
  'Welcome to our Community': 'مرجبا بك معنا',
  'Add your photo': 'اضف صورتك',
  'First name': 'الاسم',
  'Surname': 'اللقب / اسم العائلة',
  'Email Address': 'البريد الالكتروني',
  'Mobile Number': 'رقم الموبايل',
  'I agree to Terms & Conditions': 'اوافق علي الشروط و الاحكام',
  'Register': 'سجل',
  'Scan your Vin': 'ادخل رقم تعريف سيارتك',
  '17 character alpha/numeric serial number unique to each vehicle': 'رقم تعريف السيارة "VIN" وهو مزيج من سبعة عشر رقمًا وحرفًا فريد لكل مركبة',
  'Can’t locate your Vin': 'لا يمكنك تحديد موقع  رقم الشاسيه الخاص بك',
  'Simply locate your Vin': 'ببساطة تحديد موقع "VIN" الخاص بك',
  'in one of 3 places': 'في واحدة من 3 أماكن',
  'Windshield': 'يقع تحت الزجاج الأمامي',
  'Can be viewed through the nearside base of the front windshield in bold white lettering.': 'يمكن رؤيته علي القضيب المعدني الأفقي اسفل الزجاج الأمامي من جهة المحرك',
  'If you find it hard your still can': 'صعب الوصول اليه',
  'Choose your car manually': 'اختر سيارتك يدويًا',
  'Door latch': 'بجانب قفل الباب',
  'Certification label below passenger’s door latch': 'ملصق شهادة أسفل قائم باب السائق أو الراكب',
  'Passenger seat': 'أرضية السيارة',
  'Engraved under right passenger side rear seat': 'يمكنك رأيته محفور اسفل كرسي الركب',
  'Explore all available parts listed': 'استكشف جميع الأجزاء المتاحة ',
  'Enable Notifications': 'تفعيل الاشعارات',
  'Enable Location': 'تفعيل تحديد مكانك',
  'Verify your account': 'قم بتأكيد حسابك',
  'Enter the code that we sent to': 'ادخل الكود الخاص بك',
  'Resend in': 'اعادة الارسال',
  'Search for what are you looking for': 'ابحث عما تريد',
  'Dismiss': 'الغاء او تراجع',
  'Next': 'التالي',
  'Discover top services you want': 'اكتشف افضل الخدمات',
  'try local name to find a service provider': 'جرب الاسم الدارج للوصول لمقدم الخدمة',
  'Your opinion matters': 'رايك يهمنا',
  'Your request sent successfully and our agent will call you shortly':	'تم إرسال طلبك بنجاح  و سوف يقوم أحد مندوبنا بالاتصال بك قريبا',
  'Invite Owners': 'ادعوا الملاك',
  'Home': 'الصفحة الرئيسية',
  'Car Guide': 'دليل السيارات',
  'The Club': 'نادي الاعضاء',
  'Classic member': 'عضوية كلاسيك',
  'Member since': 'مشترك منذ',
  'Most Recent': 'الأحدث ',
  'Open Now': 'يعمل الان',
  'Filters': 'بحث مفصل',
  'Load more': 'اعرض المزيد',
  'Choose': 'اختر',
  'Cancel': 'الغاء',
  'Apply': 'تطبيق',
  'Info': 'البيانات',
  'Reviews': 'التقييمات',
  'Side Door Jam': 'قايم الابواب',
  'Book Now': 'احجز الان',
  'Booking': 'احجز الان',
  'Contacts': 'الاتصال',
  'Offers': 'العروض',
  'Contact now': 'اتصل الان',
  'Be the first to rate this service': 'كن اول مقيم للخدمة',
  'it takes few seconds to share and support others with your experience': 'بثوان بسيطة شارك و ساعد الاخرين برايك',
  'Rate now': 'قيم الان',
  'Your opinion helps other members': 'رايك يساعد اعضاء اخرين',
  'Excellent': 'ممتاز',
  'Fair': 'مقبول',
  'Poor': 'غير مرضى',
  'Sustain a quality service by sharing your opinion': 'حافظ على جودة الخدمات المقدمة من خلال المشاركة برايك',
  'How was it': 'كيف كانت الخدمة',
  'comments or requests': 'اضف اى تعليق او طلب من مقدم الخدمة',
  'Share your opinion': 'شارك برايك',
  'How was your experience': 'ما مدى رضائك',
  'If you find it hard you still can': 'إذا وجدت أنه من الصعب عليك ذلك',
  'Done': 'تم',
  'Thanks': 'شكرا',
  'Your voice matters and helps other members': 'صوتك يهمنا و يساعد ',
  'Rated': 'مقيم',
  'out of': 'من',
  'based on': 'بناء على',
  'owner': 'مالك',
  'Members': 'اعضاء',
  'Members reviews': 'أراء الاعضاء',
  'Most recent': 'الأحدث',
  'Most helpful': 'الاكثر إفادة',
  'Most critical': 'الاكثر تعقيدا',
  'Book your maintenance in advance choose date and time and any comments or requests.': 'اختار المعاد المناسب و اضف اى تعليق او طلب و سنساعدك على تأكيد الموعد',
  'Select date and time': 'اختر التاريخ و الوقت',
  'Send Request': 'ارسل طلبك',
  'Cluster errors': 'اخطاء العداد',
  'Chassis Info': 'معلومات عن الشاسيه',
  'Fues & Relay Location': 'أماكن الفيوزات والكاتوتات',
  'Tire Pressure & Configuration': 'مواصفات وضغوط الاطارات',
  'Services provided': 'قائمة الخدمات',
  'Share with friends':	'شارك مع أصحابك',
  'Part Catalog': 'كتالوج قطع الغيار',
  'Part Catalogue': 'كتالوج قطع الغيار',
  'Search Part Catalogue': 'ابحث باسم قطع الغيار او رقمها',
  'Mototrcode': 'رقم المحرك ',
  'HP': 'عدد الاحصنه',
  'Oil capacity': 'مستوى وضع الزيت للمحرك',
  'Fuel': 'معدل استهلاك البنزين',
  'Acceleration ': 'لتسارع من 0 إلى 100 كم/س',
  'How can we help': 'كيف نستطيع المساعدة',
  'Type the error displayed': 'اكتب الخطأ الظاهر امامك',
  'Thanks for your opinion': 'شكرا لاضافة رايك',
  'Tell us if it works with you?': 'اشرح الحل المناسب ليك',
  'Add your solution to help others': 'اذكر سبب اخر من خلال تجربتك مع الخطأ',
  'Find a service provider': 'بحث عن مقدم خدمة',
  'What do you think it’s?': 'ماهو رأيك ',
  'My Profile': 'حسابي',
  'Choose another model': 'اختر موديل أخر',
  'Update Changes': 'حفظ التعديلات',
  'Change Language': 'تغيير اللغة',
  'Link to Facebook': 'الربط من خلال فيسبوك',
  'Common requested parts for this model': 'قطع غيار تطلب عادة لهذا الموديل',
  'Explore all listed parts': 'تصفح مجموعات قطع الغيار',
  'All': 'الكل',
  'Used': 'مستعمل',
  'New': 'جديد',
  'Featured': 'مميز',
  'Workshops': 'مراكز الخدمة',
  'Part shops': 'محلات قطع غيار',
  'Services': ' كل الخدمات',
  'Facebook': 'فيسبوك',
  'WhatsApp': 'واتساب',
  'Copy Link': 'نسخ الرابط',
  'Share Via': 'شارك عبر',
  'Open From': 'مواعيد العمل من',
  'Days off': 'العطلة الإسبوعيه',
  'Rate your experience': 'قيم الخدمة',
  'Contact Us': 'اتصل بنا',
  'Map': 'خريطة',
  'Offered parts condition': 'حالة القطعة',
  'parts group': 'مجموعات القطع',
  'All Services': 'كل الخدمات',
  'Choose your preferred service': 'اختر الخدمة المرجوة',
  'Service Shops': 'خدمات اخرى',
  'Part Number': 'رقم القطعة',
  'EGP': 'ج.م',
  'Views': 'مشاهدات',
  'Similar Items': 'قطع مماثلة',
  'Displacement': 'السي سي',
  'Engine Code': 'كود المحرك',
  'Horsepower': 'عدد الأحصنة',
  'Engine Oil Capacity': 'مقدار زيت المحرك',
  'Top Speed': 'السرعة القصوى',
  'Fuel Consumption': 'معدل استهلاك البنزين',
  'Acceleration 0-100km/h': 'التسارع من 0 / 100',
  'Tank Capacity': 'سعة خزان الوقود',
  'Tires': 'الإطارات',
  'Text': 'نص',
  'Cluster error': 'اخطاء العداد',
  'Or select your Model': 'أو حدد موديل سيارتك',
  'Engine Type': 'نوع المحرك',
  'Model Year': 'اختر سنة الصنع',
  "What's your Benz": 'حدد نوع سيارتك',
  'Car Engine': 'اختر نوع المحرك',
  'I agree to': 'اوافق على',
  ' Terms & Conditions': 'الشروط و الاحكام',
  'Your request sent successfully, our agent will call you shortly': 'تم إرسال طلبك بنجاح ، سيتم التواصل معك فى اقرب وقت',
  'What might cause such error': 'مسببات الخطأ الدارجة',
  'SMS': 'رسالة نصية (SMS)',
  'Your solution has been submitted successfully': 'تم تقديم الحل الخاص بك بنجاح',
  'No offers here yet': 'لا توجد عروض متاحة حتى الآن',
  'to': 'الي',
  'Monday': 'يوم الإثنين',
  'Tuesday': 'يوم الثلاثاء',
  'Wednesday': 'يوم والأربعاء',
  'Thursday': 'يوم الخميس',
  'Friday': 'يوم الجمعة',
  'Saturday': 'يوم السبت',
  'Sunday': 'يوم الأحد',
  'Looks like this shop doesn’t have any offers yet' : 'يبدو أن هذا المتجر لا يحتوي على أي عروض حتى الآن',
  'km': 'كم',
  'Forget Password ?': 'نسيت كلمة المرور؟',
  'We just need your registered mobile number to send you password reset instructions.': '.نحتاج فقط إلى رقم هاتفك المحمول المسجل لدينا لإرسال تعليمات إعادة تعيين كلمة المرور',
  'Reset Password': ' إعادة تعيين كلمة المرور',
  'Back': 'رجوع ',
  'Successfully send Email with instructions.': '.تم إرسال التعليمات بنجاح على بريدك الإلكتروني',
  'Please Follow Instructions': 'يرجى اتباع التعليمات',
  'Back to login page': 'العودة إلى صفحة تسجيل الدخول',
  'Reset': 'إعادة تعيين',
  'Sort By': 'فرز',
  'Sort By:': 'فرز',
  'location': 'المسافة',
  'Location': 'المسافة',
  'rating': 'التقييم',
  'Rating': 'التقييم',
  'none': 'لأا شيء',
  'Sort Type:': 'طريقة الفرز',
  'ASC': 'تصاعدي',
  'DESC': "تنازلي",
  'Favorites': "المفضلة",
  'No Description Available': 'لا يوجد وصف',
  'Notifications': 'الاشعارات',
  'Memberships': 'العضويات',
  'FIND A SERVICE PROVIDER': 'ادخل اسم مزود خدمة',
  'The provider is not available during that time': 'مزود الخدمة غير متوفر في هذا الوقت',
  'Booking is not available': 'مزود الخدمة غير متوفر في هذا الوقت',
  'Don’t miss the unique opportunity to gain excellent advice and insights from leading car experts – ClubBenz application will help you pamper your car. To download, click on the below link': 'ا تفوت الفرصة و ابدأ الان في الحصول علي جميع المزايا و العروض المقدمة، استمتع يقيادتك و حافظ علي سيارتك من خلال تنزيل ابليكيشن ClubBenz.  لتنزيل الابليكيشن اضغط علي الرابط التالي',
  'Enter Solution...': 'اكتب الحل....',
  'Submit': 'ارسل',
  'Please add country code (Ex: +201 2xx xxx xxx)': 'من فضلك ادخل كود الدولة (مثال: 20x xxxx xxxx+)',
  'Invalid Username and Password': 'يرجي تصحيح رقم الموبايل وكلمة المرور',
  'Please enter phone and password': 'من فضلك ادخل رقم الموبايل وكلمة المرور',
  'Please fill up all details': 'من فضلك قم بملئ كل البيانات',
  'Share Your Opinion': 'شارك برأيك',
  'Share With Friends': 'شارك مع اصدقائك',
  'Services Clubbenz': 'خدمات Clubbenz',
  'Cluster Error': 'اخطاء العداد',
  'Booking Info': 'تفاصيل الحجز',
  'Overall:': 'شامل:',
  'Service Level:': 'مستوي الخدمة:',
  'Value For Money:': 'القيمة المالية:',
  'Cleanliness:': 'النظافة:',
  'Competency:': 'الكفائة:',
  'Ok': 'موافق',
  'Ask Me Later': 'اسألني لاحقا',
  'Clubbenz needs the permission to call so you can reach the provider you want.': 'التطبيق يحتاج الي التصريح لبدء المكالمات',
  'Get permission to call Providers': 'السماح للتطبيق بادارة المكالمات',
  'Address:': 'العنوان',
  'City:': 'المدينة',
  'State:': 'المحافظة',
  'Country:': 'الدولة',
  'No bookings was found': 'لا يوجد حجوزات سابقة',
  'Spread the Word': 'انشر الخبر',
  'My Card': 'بطاقتي',
  'My Bookings': 'حجوزاتي',
  'My Booking': 'حجوزاتي',
  'Favorite Parts': 'المفضلة',
  'Subscribe': 'اشترك',
  'ID Number': 'الرقم القومي',
  'ID Back': 'البطاقة من الخلف',
  'ID Front': 'البطاقة من الامام',
  'License Back': 'رخصة السواقة من الخلف',
  'License Front': 'رخصة السواقة من الامام',
  'All Fields are required': 'جميع الحقول مطلوبة',
  'Delivery Info': 'معلومات الشحن',
  'Payment Info': 'معلومات الدفع',
  'Select a country': 'اختار دولة',
  'Select a state': 'اختار مدينة',
  'Select a city': 'اختار منطقة',
  'Address': 'العنوان',
  'Payment Method:': 'طريقة الدفع',
  'Cash': 'كاش',
  'Credit': 'كريدت',
  'This method is not available right now.': 'هذه الطريقة غير متوفرة حاليا.',
  'Membership:': 'العضوية: ',
  'Expiring Date:': 'تاريخ الانتهاء:',


};

export default function __(k ,language) {
  console.log('This is store')
  // return k in es && !language.isArabic ? es[k] : k;
  return k in es && (store.getState().language.isArabic == true ? es[k] : k)

}
