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

// أنماط الـ PDF مع الخط العربي
const styles = StyleSheet.create({
  document: {
    padding: 20,
    fontSize: 11,
    fontFamily: "Cairo", // استخدام الخط العربي
    direction: "rtl", // للغة العربية
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#208091",
    paddingBottom: 10,
  },
  headerRight: {
    textAlign: "right",
    flex: 1,
  },
  headerLeft: {
    textAlign: "left",
    flex: 1,
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#134252",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 11,
    color: "#626c71",
    marginBottom: 15,
  },
  profileSection: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#d0d0d0",
    padding: 10,
  },
  profileImage: {
    width: 80,
    height: 100,
    marginLeft: 10,
  },
  profileInfo: {
    flex: 1,
    marginRight: 10,
  },
  infoRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
    justifyContent: "space-between",
  },
  label: {
    fontWeight: "bold",
    color: "#134252",
    width: "40%",
  },
  value: {
    color: "#626c71",
    width: "60%",
    textAlign: "right",
  },
  table: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#d0d0d0",
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#d0d0d0",
  },
  tableHeader: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#208091",
    color: "white",
    fontWeight: "bold",
    padding: 8,
  },
  tableCell: {
    flex: 1,
    padding: 8,
    textAlign: "right",
    fontSize: 10,
  },
  feesSection: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: "#d0d0d0",
    backgroundColor: "#f5f5f5",
  },
  feeRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  footer: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 9,
    color: "#999",
    borderTopWidth: 1,
    borderTopColor: "#d0d0d0",
    paddingTop: 15,
  },
});

// PDF Document Component
const Bdftest = () => {
  // بيانات تجريبية ثابتة للعرض
  const d = {
    directorate_name: "مديرية التجارة والصناعة",
    sub_name: "إدارة التراخيص التجارية",
    created_at: "2024-01-15T10:30:00Z",
    owner_name: "أحمد محمد علي",
    business_name: "مطعم النخيل الذهبي",
    category_name: "مطاعم ومقاهي",
    address: "شارع الملك فهد - الرياض",
    status_name: "نشط",
    application_number: "APP-2024-00123",
    currency_name: "ريال سعودي",
    rent_value: "5000",
    rent_start_date: "2024-01-01",
    rent_end_date: "2024-12-31",
    services: [
      { service: { name: "خدمة الترخيص الأساسي" }, value: "1000" },
      { service: { name: "خدمة الفحص الدوري" }, value: "500" },
      { service: { name: "خدمة التعديل" }, value: "300" },
    ],
  };

  const fees = {
    total_services: "1800",
    panel_fee: "200",
    prints_fee: "50",
    obstacle_fee: "100",
    total_amount: "2150",
  };

  return (
    <Document>
      <Page size="A4" style={styles.document}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerRight}>
            <Text style={styles.title}>{d.directorate_name}</Text>
            <Text style={styles.subtitle}>{d.sub_name}</Text>
            <Text style={{ fontSize: 9, color: "#999" }}>
              تاريخ التقديم: {d.created_at.split("T")[0]}
            </Text>
          </View>
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileInfo}>
            <View style={styles.infoRow}>
              <Text style={styles.label}>اسم المالك:</Text>
              <Text style={styles.value}>{d.owner_name}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>اسم العمل:</Text>
              <Text style={styles.value}>{d.business_name}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>الفئة:</Text>
              <Text style={styles.value}>{d.category_name}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>العنوان:</Text>
              <Text style={styles.value}>{d.address}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>الحالة:</Text>
              <Text style={styles.value}>{d.status_name}</Text>
            </View>
          </View>
        </View>

        {/* Fees Table */}
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={{ ...styles.tableCell, flex: 1 }}>الوصف</Text>
            <Text style={{ ...styles.tableCell, flex: 0.6 }}>المبلغ</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>الخدمات الإجمالية</Text>
            <Text style={styles.tableCell}>{fees.total_services}</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>رسم اللوحة</Text>
            <Text style={styles.tableCell}>{fees.panel_fee}</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>رسم الطبع</Text>
            <Text style={styles.tableCell}>{fees.prints_fee}</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>رسم العائق</Text>
            <Text style={styles.tableCell}>{fees.obstacle_fee}</Text>
          </View>

          <View style={{ ...styles.tableRow, backgroundColor: "#e8f4f6" }}>
            <Text style={{ ...styles.tableCell, fontWeight: "bold" }}>
              الإجمالي
            </Text>
            <Text
              style={{
                ...styles.tableCell,
                fontWeight: "bold",
                color: "#208091",
              }}
            >
              {fees.total_amount}
            </Text>
          </View>
        </View>

        {/* Services List */}
        {d.services && d.services.length > 0 && (
          <View style={styles.feesSection}>
            <Text style={{ ...styles.title, marginBottom: 10 }}>
              الخدمات المطلوبة
            </Text>
            {d.services.map((service, idx) => (
              <View key={idx} style={styles.feeRow}>
                <Text>{service.service?.name || "خدمة"}</Text>
                <Text>
                  {service.value} {d.currency_name}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Rental Information */}
        {d.rent_value && (
          <View style={styles.feesSection}>
            <Text style={{ ...styles.title, marginBottom: 10 }}>
              معلومات الإيجار
            </Text>
            <View style={styles.feeRow}>
              <Text>قيمة الإيجار:</Text>
              <Text>
                {d.rent_value} {d.currency_name}
              </Text>
            </View>
            <View style={styles.feeRow}>
              <Text>من تاريخ:</Text>
              <Text>{d.rent_start_date}</Text>
            </View>
            <View style={styles.feeRow}>
              <Text>إلى تاريخ:</Text>
              <Text>{d.rent_end_date}</Text>
            </View>
          </View>
        )}

        {/* Footer */}
        <View style={styles.footer}>
          <Text>
            تم إنشاء هذه الوثيقة بتاريخ:{" "}
            {new Date().toLocaleDateString("ar-EG")}
          </Text>
          <Text>رقم الطلب: {d.application_number}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default Bdftest;
