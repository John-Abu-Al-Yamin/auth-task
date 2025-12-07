import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";

// تسجيل خط عربي
Font.register({
  family: "Cairo",
  fonts: [
    { src: "/fonts/Cairo/static/Cairo-Regular.ttf", fontWeight: "normal" },
    { src: "/fonts/Cairo/static/Cairo-Bold.ttf", fontWeight: "bold" },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: "2px 16px",
    direction: "rtl",
    fontFamily: "Cairo",
    fontSize: 7,
  },

  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "2px solid #000",
    paddingBottom: 8,
    marginBottom: 10,
    gap: 12,
  },
  headerText: {
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center",
  },
  headerSubtext: {
    fontSize: 9,
    textAlign: "center",
  },
  emblemPlaceholder: {
    width: 60,
    height: 50,
    objectFit: "contain",
  },

  // Header

  title: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 2,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 2,
    textAlign: "center",
    textDecoration: "underline",
  },
  // under header

  section: {
    marginBottom: 12,
    padding: 8,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center",
  },

  formRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 6,
    width: "100%",
  },

  leftSide: {
    flexDirection: "row-reverse",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    gap: 4,
  },

  datePart: {
    flexDirection: "row",
    alignItems: "center",
  },

  slash: {
    marginHorizontal: 2,
    fontSize: 10,
    fontWeight: "bold",
  },

  rightSide: {
    flexDirection: "row-reverse",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-start",
  },

  checkboxGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  checkItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkbox: {
    width: 12,
    height: 12,
    border: "1px solid #000",
    margin: "0 4px",
  },

  formLine: {
    flex: 1,
    borderBottom: "1px dashed #000",
    height: 12,
    marginLeft: 6,
    marginRight: 6,
  },

  label: {
    fontSize: 9,
    fontWeight: "bold",
    marginLeft: "6px",
  },

  boardTypeRow: {
    flexDirection: "row",
    gap: 30,
    marginBottom: 6,
  },
  boardOption: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  termsBox: {
    border: "1px solid #000",
    padding: 8,
    marginTop: 10,
    fontSize: 8,
    lineHeight: 1.4,
  },
  signatureRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    gap: 20,
  },
  signatureField: {
    flex: 1,
    borderTop: "1px solid #000",
    paddingTop: 4,
    textAlign: "center",
    fontSize: 9,
  },
  footer: {
    fontSize: 8,
    textAlign: "center",
    marginTop: 10,
    color: "#666",
  },

  flexFooter: {
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    // gap: 10,
  },

  borderCard: {
    border: "1px solid #000",
    padding: "4px",
    margin: "12px 20px",
  },

  // Golabals
  flex: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 4,
  },
  flexGap: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: "0px 18px",
  },

  flexBetween: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },

  flexCol: {
    display: "flex",
    flexDirection: "column",
    gap: " 12px 0px",
    width: "100%",
  },

  mt: {
    marginTop: 4,
  },
  textcenter: {
    textAlign: "center",
  },
  border: {
    border: "1px solid #000",
    margin: "14px 0px",
  },
  bold: {
    fontWeight: "bold",
    fontSize: 12,
  },
  medium: {
    fontWeight: "medium",
    fontSize: 10,
  },

  textRight: {
    textAlign: "right",
  },
  textLeft: {
    textAlign: "left",
  },
  textCenter: {
    textAlign: "center",
  },
  underline: {
    textDecoration: "underline",
  },
  bracketWithLine: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginTop: -4,
  },

  inlineLine: {
    flex: 1,
    borderBottom: "1px dashed #000",
    height: 10,
    marginHorizontal: 4,
  },

  parentheses: {
    fontSize: 10,
    fontWeight: "bold",
  },

  checkboxGroupFotter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 0,
  },

  checkItemFotter: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkboxFotter: {
    width: 12,
    height: 12,
    border: "1px solid #000",
    margin: "0 0px",
  },
});
const MedicalFacilityLicenseRequest = ({ formNumber }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* رأس الصفحة / Header */}
        <View style={styles.header}>
          {/* Left */}
          <View style={{ textAlign: "center", flex: 1 }}>
            <Text style={styles.headerText}>الجمهورية اليمنية</Text>
            <Text>مكتب الاشغال العامه و الطرق مدريه المنصوره</Text>

            <Text style={styles.headerSubtext}>
              رقم الاستماره : {formNumber}
            </Text>
            <Text style={styles.headerSubtext}>التاريخ : 01/01/2026</Text>
          </View>

          {/* Center column */}
          <View
            style={{ flexDirection: "column", alignItems: "center", flex: 1 }}
          >
            <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 3 }}>
              بسم الله الرحمن الرحيم
            </Text>
            <Image src="/logo.png" style={styles.emblemPlaceholder} />
          </View>

          {/* Right */}
          <View style={{ textAlign: "center", flex: 1 }}>
            <Text style={styles.headerText}>REPUBLIC OF YEMEN{"\n"}</Text>
            <Text>Publie Health & Poela Office - Aden</Text>
          </View>
        </View>

        {/* العنوان الرئيسي */}
        <Text style={styles.title}>
          طلب للحصول على ترخيص فتح تشغيل منشاه طبيه
        </Text>

        <View>
          <View style={styles.flexBetween}>
            {/* الجزء الأيمن */}
            <View style={styles.rightSide}>
              <Text style={styles.label}>:نوع الطلب </Text>

              <View style={styles.checkboxGroup}>
                <View style={styles.checkItem}>
                  <View style={styles.checkbox} />
                  <Text style={styles.checkboxLabel}>جديد</Text>
                </View>

                <View style={styles.checkItem}>
                  <View style={styles.checkbox} />
                  <Text style={styles.checkboxLabel}>تجديد</Text>
                </View>
              </View>

              <View style={[styles.flex, { flex: 1 }]}>
                <Text>: اخري </Text>
                <View style={styles.formLine} />
              </View>
            </View>

            {/* الجزء الأيسر */}
            <View style={styles.leftSide}>
              <Text style={styles.label}>تاريخ انتهاء آخر تجديد</Text>

              {/* اليوم */}
              <View style={styles.datePart}>
                <View style={styles.formLine} />
                <Text style={styles.slash}>/</Text>
              </View>

              {/* الشهر */}
              <View style={styles.datePart}>
                <View style={styles.formLine} />
                <Text style={styles.slash}>/</Text>
              </View>

              {/* السنة */}
              <View style={styles.datePart}>
                <View style={styles.formLine} />
                <Text>م</Text>
              </View>
            </View>
          </View>

          <View style={styles.flex}>
            <Text>نوع المنشاه</Text>
            <View style={styles.formLine} />
          </View>

          <View style={[styles.flex, styles.mt]}>
            <Text>اسم المنشاه الطبيه</Text>
            <View style={styles.formLine} />
          </View>

          <View style={[styles.flex, styles.mt]}>
            <Text>اسم مالك المنشاه</Text>
            <View style={styles.formLine} />
          </View>

          <View style={[styles.flex, styles.mt]}>
            <Text>: الجنسيه</Text>
            <View style={styles.formLine} />
            <Text>: مكان الميلاد</Text>
            <View style={styles.formLine} />
            <Text>: تاريخ الميلاد</Text>
            <View style={styles.formLine} />
          </View>

          <View style={[styles.flex, styles.mt]}>
            <Text>: نوع الهويه</Text>
            <View style={styles.formLine} />
            <Text>: رقم الهويه</Text>
            <View style={styles.formLine} />
            <Text>: مكان الاصدار</Text>
            <View style={styles.formLine} />
          </View>

          <View style={[styles.flex, styles.mt]}>
            <Text>: تاريخ الاصدار</Text>

            {/* اليوم */}
            <View style={styles.datePart}>
              <View style={styles.formLine} />
              <Text style={styles.slash}>/</Text>
            </View>

            {/* الشهر */}
            <View style={styles.datePart}>
              <View style={styles.formLine} />
              <Text style={styles.slash}>/</Text>
            </View>

            {/* السنة */}
            <View style={styles.datePart}>
              <View style={styles.formLine} />
              <Text>م</Text>
            </View>
            <Text>: تاريخ الانتهاء</Text>

            {/* اليوم */}
            <View style={styles.datePart}>
              <View style={styles.formLine} />
              <Text style={styles.slash}>/</Text>
            </View>

            {/* الشهر */}
            <View style={styles.datePart}>
              <View style={styles.formLine} />
              <Text style={styles.slash}>/</Text>
            </View>

            {/* السنة */}
            <View style={styles.datePart}>
              <View style={styles.formLine} />
              <Text>م</Text>
            </View>
          </View>

          <View style={[styles.flex, styles.mt]}>
            <Text>عنوان المالك </Text>
            <View style={[styles.formLine, { flex: 2 }]} />
            <Text>: تلفون</Text>
            <View style={styles.formLine} />
            <Text>: جوال</Text>
            <View style={styles.formLine} />
          </View>

          <View style={[styles.flex, styles.mt]}>
            <Text>عنوان المنشاه </Text>
            <View style={[styles.formLine, { flex: 2 }]} />
            <Text>: تلفون</Text>
            <View style={styles.formLine} />
            <Text>: جوال</Text>
            <View style={styles.formLine} />
          </View>

          <View style={[styles.flex, styles.mt]}>
            <Text>: بريد الكتروني </Text>
            <View style={[styles.formLine, { flex: 2 }]} />
            <Text>: موقع الانترنت </Text>
            <View style={styles.formLine} />
            <Text>: صندوق البريد</Text>
            <View style={styles.formLine} />
          </View>

          {/* نوع المحل */}
          <View style={[styles.flex, styles.mt]}>
            <Text style={styles.labelSmall}>: نوع ملكية العقار</Text>

            <Text style={styles.checkboxLabel}>ملك</Text>
            <View style={styles.checkboxGroup}>
              <View style={styles.checkbox} />
            </View>
          </View>

          {/* إيجار مع حقل تاريخ الإيجار */}
          <View
            style={{
              flexDirection: "row-reverse",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Text
              style={{
                marginRight: 56,
              }}
            >
              إيجار
            </Text>
            <Text> : مبلغ الايجار الشهري</Text>
            <View style={[styles.formLine, { flex: 1 }]} />
          </View>

          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              marginTop: 4,
              width: "100%",
            }}
          >
            <View
              style={{
                flexDirection: "row-reverse",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Text>: تاريخ الإيجار</Text>

              <Text>: من</Text>
              <View style={styles.datePart}>
                <View style={styles.formLine} />
                <Text style={styles.slash}>/</Text>
              </View>
              <View style={styles.datePart}>
                <View style={styles.formLine} />
                <Text style={styles.slash}>/</Text>
              </View>
              <View style={styles.datePart}>
                <View style={styles.formLine} />
                <Text>م</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row-reverse",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Text>: إلى</Text>
              <View style={styles.datePart}>
                <View style={styles.formLine} />
                <Text style={styles.slash}>/</Text>
              </View>
              <View style={styles.datePart}>
                <View style={styles.formLine} />
                <Text style={styles.slash}>/</Text>
              </View>
              <View style={styles.datePart}>
                <View style={styles.formLine} />
                <Text>م</Text>
              </View>
            </View>
          </View>

          <View style={[styles.flex, styles.mt]}>
            <Text>: عدد الادوار</Text>
            <View style={styles.formLine} />
            <Text>: عدد الاقسام</Text>
            <View style={styles.formLine} />
            <Text>: عدد الاسره</Text>
            <View style={styles.formLine} />
          </View>

          <View style={[styles.flex, styles.mt]}>
            <View style={styles.checkboxGroup}>
              <View style={styles.checkItem}>
                <View style={styles.checkbox} />
                <Text style={styles.checkboxLabel}>المدير الطبي</Text>
              </View>

              <View style={styles.checkItem}>
                <View style={styles.checkbox} />
                <Text style={styles.checkboxLabel}>الاخصائي</Text>
              </View>
            </View>

            <View style={[styles.flex, { flex: 1 }]}>
              <Text>:الفني </Text>
              <Text>: الاسم </Text>
              <View style={styles.formLine} />
            </View>
          </View>

          <View style={[styles.flex, styles.mt]}>
            <Text>: المؤهل العلمي</Text>
            <View style={styles.formLine} />
            <Text>: التخصص</Text>
            <View style={styles.formLine} />
          </View>

          <View style={[styles.flex, styles.mt]}>
            <Text>: مكان المؤهل</Text>
            <View style={styles.formLine} />
            <Text>: تاريخ الحصول علي المؤهل</Text>

            {/* اليوم */}
            <View style={styles.datePart}>
              <View style={styles.formLine} />
              <Text style={styles.slash}>/</Text>
            </View>

            {/* الشهر */}
            <View style={styles.datePart}>
              <View style={styles.formLine} />
              <Text style={styles.slash}>/</Text>
            </View>

            {/* السنة */}
            <View style={styles.datePart}>
              <View style={styles.formLine} />
              <Text>م</Text>
            </View>
          </View>

          <View style={[styles.flex, styles.mt]}>
            <Text>: الجنسيه</Text>
            <View style={styles.formLine} />
            <Text>: تاريخ الميلاد</Text>
            <View style={styles.formLine} />
            <Text>: نوع الهويه</Text>
            <View style={styles.formLine} />
            <Text>: رقم الهويه</Text>
            <View style={styles.formLine} />
          </View>

          <View style={[styles.flex, styles.mt]}>
            <Text>: مكان الاصدار</Text>
            <View style={styles.formLine} />

            <Text>: تاريخ الاصدار</Text>
            {/* اليوم */}
            <View style={styles.datePart}>
              <View style={styles.formLine} />
              <Text style={styles.slash}>/</Text>
            </View>

            {/* الشهر */}
            <View style={styles.datePart}>
              <View style={styles.formLine} />
              <Text style={styles.slash}>/</Text>
            </View>

            {/* السنة */}
            <View style={styles.datePart}>
              <View style={styles.formLine} />
              <Text>م</Text>
            </View>
          </View>

          <View style={[styles.flex, styles.mt]}>
            <Text>: كادر العمل اليمني: الكادر الطبي</Text>
            <View style={styles.formLine} />
            <Text>: الكادر الصحي</Text>
            <View style={styles.formLine} />
            <Text>: الخدمات</Text>
            <View style={styles.formLine} />
            <Text>: الاداره</Text>
            <View style={styles.formLine} />
          </View>

          <View style={[styles.flex, styles.mt]}>
            <Text>: كادر العمل الاجنبي: الكادر الطبي</Text>
            <View style={styles.formLine} />
            <Text>: الكادر الصحي</Text>
            <View style={styles.formLine} />
            <Text>: الخدمات</Text>
            <View style={styles.formLine} />
            <Text>: الاداره</Text>
            <View style={styles.formLine} />
          </View>

          <View style={[styles.textcenter, styles.mt]}>
            <Text style={styles.sectionTitle}>
              اقرار : انا الموقع بان التفاصيل المقدمه اعلاء صحيحه و صادقه
              اعتمادا علي جل معروفي واعتمادي
            </Text>
          </View>

          <View style={[styles.flex, styles.mt]}>
            <Text>: مقدم الطلب </Text>
            <View style={styles.formLine} />
            <Text>: التوقيع</Text>
            <View style={styles.formLine} />
          </View>

          <View style={[styles.border]} />
        </View>

        <View style={[styles.flex, styles.mt]}>
          <Text>: الاخ:مدير مكتب الصحه العامه و السكان</Text>
          <View style={styles.formLine} />
          <Text> المحترم بعد التحيه</Text>
        </View>

        <Text style={[styles.textRight, styles.mt]}>
          تم مطابقه البيانات في الملف المقدم من طلب التراخيص وتعبئه الاستماره
          اعلاء نرجو اعطاء توجيهتكم لاستكمل صرف ترخيص{" "}
        </Text>
        <View style={[styles.flex, styles.mt]}>
          <View style={[styles.flexCol, styles.mt]}>
            <Text>: اسم الموظف المختص</Text>
            <View style={styles.formLine} />
          </View>

          <View style={[styles.flexCol, styles.mt]}>
            <Text>: الصفحه / الوظيفه</Text>
            <View style={styles.formLine} />
          </View>

          <View style={[styles.flexCol, styles.mt]}>
            <Text>: التاريخ</Text>
            <View style={styles.formLine} />
          </View>

          <View style={[styles.flexCol, styles.mt]}>
            <Text>: التوقيع</Text>
            <View style={styles.formLine} />
          </View>

          <View style={[styles.flexCol, styles.mt]}>
            <Text>ختم توقيع مدير مكتب الصحه بالمديريه</Text>

            <View style={styles.bracketWithLine}>
              <Text style={styles.parentheses}>)</Text>
              <View style={styles.inlineLine} />
              <Text style={styles.parentheses}>(</Text>
            </View>
          </View>
        </View>

        {/* =========================================================== */}

        <View style={[styles.flexFooter, styles.mt]}>
          <View style={{ flex: 1 }}>
            <View style={[styles.medium, styles.textRight]}>
              <Text style={[styles.medium, styles.textRight]}>
                : المرفقات المطلوبه
              </Text>
            </View>
            <View style={styles.flexGap}>
              <View style={styles.flex}>
                <Text style={styles.textRight}>تقديم طلب فتح وتشغيل</Text>

                <View style={styles.checkboxFotter} />
              </View>

              <View style={styles.flex}>
                <Text style={styles.textRight}>صوره بطاقه الشخصيه</Text>
              </View>
              <View style={styles.flex}>
                <Text style={styles.textRight}>
                  في احاله التجديداحضار الترخيص السابق
                </Text>
              </View>
            </View>

            <View style={[styles.flexGap, styles.mt]}>
              <View style={styles.flex}>
                <Text style={styles.textRight}>ثلاثه صوره المستفيد 6*4</Text>

                <View style={styles.checkboxFotter} />
              </View>

              <View style={styles.flex}>
                <Text style={styles.textRight}>السجل التجاري</Text>

                <View style={styles.checkboxFotter} />
              </View>
              <View style={styles.flex}>
                <Text style={styles.textRight}>
                  المؤهل العلمي للمدير الفني / للاطباء يتطلب مما يلي
                </Text>
              </View>
            </View>

            <View style={[styles.flexGap, styles.mt]}>
              <View style={styles.flex}>
                <Text style={styles.textRight}>كشف بالكادر الطبي الفني</Text>

                {/* <View style={styles.checkboxFotter} /> */}
              </View>

              <View style={styles.flex}>
                <Text style={styles.textRight}>
                  صوره للمنشاه مع اللوحه من الخارج
                </Text>

                <View style={styles.checkboxFotter} />
              </View>
              <View style={styles.flex}>
                <Text style={styles.textRight}>
                  في حاله الشهاده الصادره في الخارج يتطلب شهاده معادله من
                  التعليم العالي
                </Text>
              </View>
            </View>

            <View style={[styles.flexGap, styles.mt]}>
              <View style={styles.flex}>
                <Text style={styles.textRight}>
                  عقد الايجار او الملكيه مختم
                </Text>

                {/* <View style={styles.checkboxFotter} /> */}
              </View>

              <View style={styles.flex}>
                <Text style={styles.textRight}>الرسومات الهندسيه للمنشاه</Text>

                <View style={styles.checkboxFotter} />
              </View>
              <View style={styles.flex}>
                <Text style={styles.textRight}>
                  في حاله الطبيب الاجنبي يتطلب تعميد وزاره الخارجيه ف بلدهم و
                  التعليم العالي في اليمن
                </Text>
              </View>
            </View>

            <View style={[styles.flexGap, styles.mt]}>
              <View style={styles.flex}>
                <Text style={styles.textRight}>دراسه جدول المنشاه</Text>

                <View style={styles.checkboxFotter} />
              </View>

              <View style={styles.flex}>
                <Text style={styles.textRight}>
                  استماره المعاينه معمده من مدير عام الصحه
                </Text>

                <View style={styles.checkboxFotter} />
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default MedicalFacilityLicenseRequest;
