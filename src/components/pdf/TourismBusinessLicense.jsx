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
    padding: "20px 20px 0 20px",
    direction: "rtl",
    fontFamily: "Cairo",
    fontSize: 7,
  },

  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "2px solid #000",
    paddingBottom: 6,
    marginBottom: 8,
    gap: 10,
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
    width: 50,
    height: 40,
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
    marginBottom: 3,
    textAlign: "center",
  },

  formRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
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
    fontSize: 9,
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
    gap: 10,
  },

  checkItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkbox: {
    width: 12,
    height: 12,
    border: "1px solid #000",
    margin: "0 3px",
  },

  formLine: {
    flex: 1,
    borderBottom: "1px dashed #000",
    height: 11,
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
    margin: "0px 20px",
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

  mt: {
    marginTop: 3,
  },
  textcenter: {
    textAlign: "center",
  },
  border: {
    border: "1px solid #000",
    margin: "4px 0px",
  },
  bold: {
    fontWeight: "bold",
    fontSize: 10,
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
    marginHorizontal: 2,
  },

  parentheses: {
    fontSize: 10,
    fontWeight: "bold",
  },

  flexCol: {
    display: "flex",
    flexDirection: "column",
    gap: " 12px 0px",
    width: "100%",
  },
});

export const TourismBusinessLicense = ({ formNumber }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* رأس الصفحة / Header */}
      <View style={styles.header}>
        {/* Right */}
        <View style={{ textAlign: "center", flex: 1 }}>
          <Text style={styles.headerText}>
            REBUBLIC OF YEMEN{"\n"}
            Ministry of Tourism
          </Text>
        </View>

        {/* Center column */}
        <View
          style={{ flexDirection: "column", alignItems: "center", flex: 1 }}
        >
          <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 3 }}>
            بسم الله الرحمن الرحيم
          </Text>
          <Image src="/logo.jpeg" style={styles.emblemPlaceholder} />
        </View>

        {/* Left */}
        <View style={{ textAlign: "center", flex: 1 }}>
          <Text style={styles.headerText}>الجمهورية اليمنية</Text>
          <Text>وزاره السياحه</Text>

          <Text style={styles.headerSubtext}>رقم الاستمارة : {formNumber}</Text>
          <Text style={styles.headerSubtext}>التاريخ : 01/01/2026</Text>
        </View>
      </View>

      {/* العنوان الرئيسي */}
      <Text style={styles.title}>
        استماره منح رخصه جديد / تجديد لمزوله النشاط
      </Text>

      <View>
        <View style={styles.formRow}>
          {/* الجزء الأيمن */}
          <View style={styles.rightSide}>
            <Text style={styles.label}>:نوع الطلب</Text>

            <View style={styles.checkboxGroup}>
              <View style={styles.checkItem}>
                <View style={styles.checkbox} />
                <Text style={styles.checkboxLabel}>جديد</Text>
              </View>

              <View style={styles.checkItem}>
                <View style={styles.checkbox} />
                <Text style={styles.checkboxLabel}>تجديد</Text>
              </View>

              <View style={styles.checkItem}>
                <View style={styles.checkbox} />
                <Text style={styles.checkboxLabel}>مركز رئيسي</Text>
              </View>

              <View style={styles.checkItem}>
                <View style={styles.checkbox} />
                <Text style={styles.checkboxLabel}>فرع</Text>
              </View>
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
          <Text>الاسم التجاري</Text>
          <View style={styles.formLine} />

          <Text>الوضع</Text>
          <View style={styles.formLine} />

          {/* المجموعة داخل القوسين */}
          <Text>
            ({"  "}
            <Text>مفرد</Text>
            <Text> / </Text>
            <Text>مركز رئيسي </Text>
            <Text> / </Text>
            <Text>فرع</Text>
            {"  "})
          </Text>
        </View>

        <View style={styles.flex}>
          <Text> :الشكل القانوني</Text>
          <View style={styles.formLine} />

          {/* المجموعة داخل القوسين */}
          <Text>
            ({"  "}
            <Text>مفرد</Text>
            <Text> / </Text>
            <Text>مساهمه</Text>
            <Text> / </Text>
            <Text>تضامنيه</Text>
            <Text> / </Text>
            <Text>توصيه</Text>
            <Text> / </Text>
            <Text>اخري</Text>
            {"  "})
          </Text>
        </View>

        <View style={styles.flex}>
          <Text> : نوع النشاط: الرئسي</Text>
          <View style={styles.formLine} />

          <Text>المكمل</Text>
          <View style={styles.formLine} />

          <Text>
            <Text>الدرجه</Text>
            {"  "}({"  "}
            <Text>اوله</Text>
            {"  "})
          </Text>
          <Text>
            ({"  "}
            <Text>ثانيه</Text>
            {"  "})
          </Text>
          <Text>
            ({"  "}
            <Text>ثالثه</Text>
            {"  "})
          </Text>
        </View>

        <View style={[styles.flex, styles.mt]}>
          <Text>اسم صاحب المنشاه ولقبه (الطبيعي او الاعتباري)</Text>
          <View style={styles.formLine} />
        </View>

        <View style={[styles.flex, styles.mt]}>
          <Text>: الجنسيه</Text>
          <View style={styles.formLine} />
          <Text>: محل الميلاد</Text>
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
          <Text>عنوانه </Text>
          <View style={[styles.formLine, { flex: 2 }]} />
          <Text>: تلفون</Text>
          <View style={styles.formLine} />
          <Text>: فاكس</Text>
          <View style={styles.formLine} />
        </View>

        <View style={[styles.flex, styles.mt]}>
          <Text>عنوان المنشاه </Text>
          <View style={[styles.formLine, { flex: 2 }]} />
          <Text>: تلفون</Text>
          <View style={styles.formLine} />
          <Text>: فاكس</Text>
          <View style={styles.formLine} />
        </View>
        <View style={[styles.flex, styles.mt]}>
          <Text>بريد الكتروني </Text>
          <View style={[styles.formLine, { flex: 2 }]} />
          <Text>: موقع انترنت</Text>
          <View style={styles.formLine} />
          <Text>: صندوق البريد</Text>
          <View style={styles.formLine} />
        </View>

        <View style={[styles.flex, styles.mt]}>
          <Text>: الاحداث الشمالي </Text>
          <View style={[styles.formLine, { flex: 2 }]} />
          <Text>: الاحداث الشرقي</Text>
          <View style={styles.formLine} />
        </View>

        <View style={[styles.flex, styles.mt]}>
          <Text> : عدد الموظفين</Text>
          <View style={[styles.formLine, { flex: 2 }]} />
          <Text> : يمنيين</Text>
          <View style={[styles.formLine, { flex: 2 }]} />
          <Text> : غير يمنيين</Text>
          <View style={[styles.formLine, { flex: 2 }]} />
        </View>

        {/* نوع المحل */}
        <View style={[styles.flex, styles.mt]}>
          <Text style={styles.labelSmall}>: نوع ملكية العقار</Text>

          <View style={styles.checkboxGroup}></View>
        </View>

        {/* تمليك مع حقل اسم المالك */}
        <View
          style={{
            flexDirection: "row-reverse",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Text style={styles.checkboxLabel}>تمليك</Text>
          <View style={styles.checkbox} />
          <Text> : اسم المالك</Text>
          <View style={[styles.formLine, { flex: 1 }]} />
        </View>

        {/* إيجار مع حقل تاريخ الإيجار */}
        <View
          style={{
            flexDirection: "row-reverse",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Text style={styles.checkboxLabel}>إيجار</Text>
          <View style={styles.checkbox} />
          <Text> : مبلغ الايجارالشهري</Text>
          <View style={[styles.formLine, { flex: 2 }]} />
          <Text> : العمله</Text>
          <View style={[styles.formLine]} />
        </View>

        <View
          style={{
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            marginTop: 4,
            width: "100%", // ✅ تصحيح typo
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
          <Text> الاداره المشققه </Text>
          <View style={styles.formLine} />
        </View>
        <View style={[styles.flex, styles.mt]}>
          <Text> المدير التنفيذي و لقبه</Text>
          <View style={styles.formLine} />
          <Text>الؤهل التعليمي</Text>
          <View style={styles.formLine} />
        </View>

        <View style={[styles.flex, styles.mt]}>
          <Text>: الجنسيه</Text>
          <View style={styles.formLine} />
          <Text>: محل الميلاد</Text>
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

        <View style={[styles.border]} />
      </View>

      <View style={[styles.flex, styles.mt]}>
        <Text>: الاخ:مدير عام مكتب الثقافه و السياحه</Text>
        <View style={styles.formLine} />
        <Text> المحترم بعد التحيه</Text>
      </View>

      <Text style={[styles.textRight, styles.mt]}>
        إن الموقع أدناه قرأ بصحة جميع البيانات المذكورة أعلاه في الاستمارة
        والوثائق المرفقة بها وأتعهد بالتقيد بالالتزامات والشروط القانونية
        لمزاولة النشاط الصناعي، وفي حال وجود مخالفات [غير واضح إن كانت: لا يُمنح
        / يُمنح] رخصة مزاولة النشاط الصناعي.{" "}
      </Text>
      <View style={[styles.flex, styles.mt]}>
        <View style={[styles.flexCol, styles.mt]}>
          <Text>: اسم مقدم الطلب </Text>
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
          <Text>الختم </Text>

          <View style={styles.bracketWithLine}>
            <Text style={styles.parentheses}>)</Text>
            <View style={styles.inlineLine} />
            <Text style={styles.parentheses}>(</Text>
          </View>
        </View>
      </View>
      <View style={[styles.border]} />

      <View style={[styles.flex, styles.mt]}>
        <Text>: الاخ:المدير العام</Text>
        <View style={styles.formLine} />
        <Text> المحترم بعد التحيه</Text>
      </View>

      <Text style={[styles.textRight, styles.mt]}>
        {" "}
        ترون مرفقا بالطلب ملف يحتوي الوثئق المطلوبه والمبينه نرجو توجيهتكم
        باستكمال اجراءات النزول الميداني للقيام بالمعاينه الفنيه للمنشاه
      </Text>
      <View style={[styles.flex, styles.mt]}>
        <View style={[styles.flexCol, styles.mt]}>
          <Text>: م / ترخيص السياحه</Text>
          <View style={styles.formLine} />
        </View>

        <View style={[styles.flexCol, styles.mt]}>
          <Text>: مدير الشئون السياحيه</Text>
          <View style={styles.formLine} />
        </View>
      </View>
      <View style={[styles.border]} />

      <View style={[styles.flex, styles.mt]}>
        <Text>: حياكم الله</Text>
      </View>

      <Text style={[styles.textRight]}>
        لاستكمال اجراءات النزول الميداني للقيام بالمعاينه المنشاه والنظام المتبع
      </Text>

      <Text style={[styles.textLeft]}>المدير العام</Text>
      <View style={[styles.border]} />

      <View style={[styles.flexFooter, styles.mt]}>
        <View style={{ flex: 1 }}>
          <View style={[styles.medium, styles.textRight]}>
            <Text style={[styles.medium, styles.textRight]}>
              : المرفقات المطلوبه
            </Text>
          </View>
          <Text style={styles.textRight}>
            صوره المستفيد 4*6 صوره البطاقه الشخصيه{" "}
          </Text>
          <Text style={styles.textRight}>
            عقد الايجار او الملكيه - فاتوره كهرباء
          </Text>
          <Text style={styles.textRight}>
            صوره المحل من الداخل و الخرج توضح العوائق و عدد الفتحات واللوحه
          </Text>
          <Text style={styles.textRight}>
            السجل التجاري في حال الرغبه بكتابه الاسم التجاري في الترخيص
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <View style={[styles.medium, styles.textRight]}>
            <Text style={[styles.medium, styles.textRight]}>
              : بالاضافه للمرفقات التاليه في حال التجديد
            </Text>
          </View>
          <Text style={styles.textRight}>رخصة مزاولة المهمة السابقة</Text>
          <Text style={styles.textRight}>سند سداد مكتب الضرئب</Text>
          <Text style={styles.textRight}>سند سداد مكتب الواجبات</Text>
          <Text style={styles.textRight}>
            في حال فرع أو تجديد فرع يتم ارفاق ترخيص المركز الرئيسي
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default TourismBusinessLicense;
