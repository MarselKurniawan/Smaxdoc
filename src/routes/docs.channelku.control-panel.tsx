import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout, Section, Figure, type TocItem } from "@/components/docs-layout";
import { channelkuSidebar } from "@/lib/docs-nav";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/channelku/control-panel")({
  head: () => ({
    meta: [
      { title: "Panel Kontrol — Channelku | SinergiMax" },
      { name: "description", content: "Kelola koneksi OTA, konfigurasi channel, pemetaan kamar & rate, serta log di Channelku." },
    ],
  }),
  component: Page,
});

const toc: TocItem[] = [
  { id: "introduction", label: "Pendahuluan" },
  { id: "available-ota", label: "Saluran OTA Tersedia" },
  { id: "available-pms", label: "Saluran PMS Tersedia" },
  { id: "available-ibe", label: "Saluran Mesin Pemesanan Tersedia" },
  { id: "available-rms", label: "Saluran RMS Tersedia" },
  { id: "update-history", label: "Riwayat Pembaruan" },
  { id: "mapping-logs", label: "Log Pemetaan" },
  { id: "other-logs", label: "Log Lainnya" },
];

function Page() {
  return (
    <DocsLayout product="Channelku" sidebar={channelkuSidebar} toc={toc} breadcrumb="Panel Kontrol" activeTo="/docs/channelku/channel-manager/control-panel">
      <h1 className="text-4xl font-bold tracking-[-0.04em]">Panel Kontrol</h1>
      <p className="mt-4">
        <strong>Panel Kontrol</strong> adalah dasbor pusat di dalam Channel Manager tempat pengguna dapat mengelola koneksi OTA,
        mengonfigurasi kredensial channel, melakukan pemetaan kamar dan rate, serta mengakses log penting.
      </p>
      <p className="mt-2">
        Melalui Panel Kontrol, Anda dapat mencari dan memilih saluran OTA, memasukkan detail koneksi, mengimpor rate plan,
        memetakan rate plan internal dan OTA, serta memverifikasi pembaruan konfigurasi. Ini berfungsi sebagai titik awal
        untuk semua aktivitas integrasi dan pemetaan, memastikan komunikasi yang lancar antara sistem properti Anda dan platform OTA.
      </p>

      {/* ==================== AVAILABLE OTA CHANNELS ==================== */}
      <Section id="available-ota" title="Saluran OTA Tersedia">
        <p>
          <strong>OTA (Online Travel Agency)</strong> adalah platform pihak ketiga yang memungkinkan tamu mencari, membandingkan,
          dan memesan akomodasi secara online. Menghubungkan saluran OTA ke Channel Manager memungkinkan properti Anda
          untuk menyinkronkan ketersediaan kamar, harga, pembatasan, dan reservasi secara otomatis di berbagai platform.
        </p>
        <p className="mt-2">
          Berikut adalah daftar saluran OTA yang tersedia untuk diintegrasikan dengan Channel Manager:
        </p>

        {/* Grid logo OTA */}
        <div className="mt-4 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
          <Link to="/docs/channelku/agoda">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776756739/agoda_qd1xav.png" 
                alt="Agoda" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/airbnb">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776756748/airbnb_d2sldv.png" 
                alt="Airbnb" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/booking-com">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776756759/booking-com_sfuyng.png" 
                alt="Booking.com" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/expedia">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776756503/expedia_daeqts.png" 
                alt="Expedia" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/ctrip">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776756508/Group_411_zdgjvt.png" 
                alt="Ctrip" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/tiket-com">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776756519/tike.com_g1x7zy.png" 
                alt="Tiket.com" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/marriot-homes">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776756515/mariot_xbhkiv.png" 
                alt="Marriott Homes" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/hostelworld">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776756510/hostelword_fwpgzt.png" 
                alt="Hostelworld" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/ikyu">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776756512/ikyu_jnjbgt.png" 
                alt="Ikyu" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/traveloka">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776756522/traveloka_unb0al.png" 
                alt="Traveloka" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/rakuten">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776756517/rakuten_hkwesz.png" 
                alt="Rakuten" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/tbo-holidays">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776756506/Group_402_fjc6jf.png" 
                alt="TBO Holidays" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/bookingina">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776756501/bookingina_r4jeby.png" 
                alt="Bookingina" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/dida-travel">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776756502/dida-travel_vtg1nb.png" 
                alt="Dida Travel" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/google-hotel">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777277512/google-hotel_iuirhe.png" 
                alt="Google Hotel" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/mister-aladin">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777277506/mister-aladin_typdbn.png" 
                alt="Mister Aladin" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/hotelbeds">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777277506/hotelbeds_n0cfkz.png" 
                alt="Hotelbeds" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/hoterip">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777277506/hoterip_jmwdcv.png" 
                alt="Hoterip" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/dotw">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777277510/dotw_exo6co.png" 
                alt="DOTW" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/goibibo">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777277511/goibibo_lvdwvc.png" 
                alt="Goibibo" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/azana-voyage">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777277509/azana-voyage_r6lsp0.png" 
                alt="Azana Voyage" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/villafinder">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777277508/villafinder_glyi5p.png" 
                alt="Villafinder" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/mg-bedbank">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1778114877/mgbedbank_expmx4.png" 
                alt="MG Bedbank" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/kliknbook">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1778199200/kliknbook_zgoiim.png" 
                alt="Kliknbook" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          <strong>Catatan:</strong> Klik pada logo OTA untuk melihat panduan pengaturan dan detail konfigurasi masing-masing channel.
          Beberapa channel mungkin memerlukan aktivasi tambahan melalui extranet masing-masing.
        </p>
      </Section>

      {/* ==================== AVAILABLE PMS CHANNELS ==================== */}
      <Section id="available-pms" title="Saluran PMS Tersedia">
        <p>
          <strong>PMS (Property Management System)</strong> adalah sistem pusat yang digunakan untuk mengelola operasi hotel harian
          seperti reservasi, check-in/check-out, status kamar, profil tamu, dan penagihan. Mengintegrasikan PMS dengan Channel Manager
          membantu menyinkronkan harga, ketersediaan, pembatasan, dan data reservasi antara kedua sistem untuk manajemen operasional yang lebih lancar.
        </p>
        <p className="mt-2">
          Berikut adalah daftar saluran PMS yang tersedia untuk diintegrasikan dengan Channel Manager:
        </p>

        {/* Grid logo PMS */}
        <div className="mt-4 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          <Link to="/docs/channelku/vhp">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776928366/VHP_1_zrqbka.png" 
                alt="VHP" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/airhost">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777008809/airhost_1_ze2bfb.png" 
                alt="Airhost" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/guestpro">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777009455/guestpro_1_uocgn4.png" 
                alt="Guestpro" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/twospaces">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777012996/twospaces_uk5kdm.png" 
                alt="Twospaces New" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/realta">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777364035/realta_er8y5b.png" 
                alt="Realta" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/pertama">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777364034/pertama_fccrzo.png" 
                alt="Pertama" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/pactindo">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777364035/pactindo_nr5e9f.png" 
                alt="Pactindo" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/hotelmu">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777364034/hotelmu_lyxar4.png" 
                alt="Hotelmu" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/gustodian">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777364035/gustodian_ylbchb.png" 
                alt="Gustodian" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/skyhotel">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1778205213/skyhotel_eg5eyu.png" 
                alt="Skyhotel" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/powerpro">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777364035/powerpro_tnvlpq.png" 
                alt="Powerpro" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/pelican">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1778205195/pelican_m3prdf.png" 
                alt="Pelican" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
        </div>
      </Section>

      {/* ==================== AVAILABLE BOOKING ENGINE CHANNELS ==================== */}
      <Section id="available-ibe" title="Saluran Mesin Pemesanan Tersedia">
        <p>
          <strong>IBE (Internet Booking Engine)</strong> adalah platform pemesanan langsung yang terintegrasi ke dalam situs web properti Anda,
          memungkinkan tamu melakukan reservasi tanpa menggunakan platform pihak ketiga. Menghubungkan IBE ke Channel Manager memastikan
          bahwa ketersediaan kamar, harga, dan reservasi tetap akurat dan tersinkronisasi antara situs web Anda dan sistem properti Anda.
        </p>
        <p className="mt-2">
          Berikut adalah daftar saluran IBE yang tersedia untuk diintegrasikan dengan Channel Manager:
        </p>

        {/* Grid logo IBE */}
        <div className="mt-4 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
          <Link to="/docs/channelku/triplabook">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1776756731/tripla-book_zdhqws.png" 
                alt="Triplabook" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/omni-hotelier">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777017024/omniH_1_tecs5w.png" 
                alt="Omni Hotelier" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/guestpro-ibe">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777009455/guestpro_1_uocgn4.png" 
                alt="Guest Pro - IBE" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/roiback">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777020864/roiback_laxjke.png" 
                alt="Roiback" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/booknpay">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777020903/booknpay_lcqyzm.png" 
                alt="Booknpay" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
          <Link to="/docs/channelku/alaric">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777020878/alaric_1_pu8gi8.png" 
                alt="Alaric" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
        </div>
      </Section>

      {/* ==================== AVAILABLE RMS CHANNELS ==================== */}
      <Section id="available-rms" title="Saluran RMS Tersedia">
        <p>
          <strong>RMS (Revenue Management System)</strong> adalah sistem yang digunakan untuk mengoptimalkan strategi penetapan harga
          dengan menganalisis permintaan, tren pasar, okupansi, dan harga pesaing. Mengintegrasikan RMS dengan Channel Manager membantu
          mengotomatiskan pembaruan harga dan meningkatkan kinerja pendapatan dengan memastikan harga yang benar didistribusikan ke saluran yang terhubung.
        </p>
        <p className="mt-2">
          Berikut adalah daftar saluran RMS yang tersedia untuk diintegrasikan dengan Channel Manager:
        </p>

        {/* Grid logo RMS */}
        <div className="mt-4 grid grid-cols-3 gap-4 sm:grid-cols-4">
          <Link to="/docs/channelku/pricelabs">
            <div className="flex h-24 w-full items-center justify-center rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
              <img 
                src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777014252/pricelabs_zl4gs7.png" 
                alt="Pricelabs" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </Link>
        </div>
      </Section>

      {/* ==================== VIEWING UPDATE HISTORY ==================== */}
      <Section id="update-history" title="Riwayat Pembaruan">
        <h4 className="font-medium">Melihat 10 Pembaruan Terakhir</h4>
        <p>
          Di bagian bawah tab <strong>Pengaturan</strong>, Anda akan menemukan bagian <strong>10 Pembaruan Terakhir</strong>.
          Bagian ini menampilkan tanggal dan waktu pembaruan, tipe kamar, rate plan, dan status (berhasil atau gagal).
          Gunakan log ini untuk memverifikasi apakah pembaruan telah berhasil dikirim ke mitra.
        </p>

        <Figure label="Last 10 Updates" src="https://res.cloudinary.com/dayo5hqig/image/upload/v1777002769/last-update-airhost.png" />
      </Section>

      {/* ==================== MAPPING LOGS ==================== */}
      <Section id="mapping-logs" title="Log Pemetaan">
        <p>
          Anda dapat mengakses <strong>Log Pemetaan</strong> dari menu Panel Kontrol.
        </p>
        <Figure label="View Mapping Logs" src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544160/10._view_mapping_logs_w659bq.png" />
        <p className="mt-2">
          Semua pembaruan yang dibuat di bagian <strong>Pemetaan</strong> akan dicatat dalam Log Pemetaan.
        </p>
        <Figure label="Accessing Mapping Logs" src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544401/10._view_mapping_logs_-_accessing_logs_gxp7ih.png" />
      </Section>

      {/* ==================== OTHER LOGS ==================== */}
      <Section id="other-logs" title="Log Lainnya">
        <p>
          Anda dapat mengakses <strong>Log Lainnya</strong> dari menu Panel Kontrol.
        </p>
        <Figure label="View Other Logs" src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544100/11._view_other_logs_ndqjn3.png" />
        <p className="mt-2">
          Log lainnya akan mencatat aktivitas seperti: tambah/hapus kamar, pembaruan pengaturan kamar/rateplan, tambah/hapus rateplan,
          aktifkan/nonaktifkan channel, pengaturan pengali harga, pembatalan reservasi dari menu Daftar Reservasi, dll.
        </p>
        <Figure label="Access Other Logs" src="https://res.cloudinary.com/dayo5hqig/image/upload/v1742544098/11._view_other_logs_-_access_kdzspk.png" />

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm font-semibold">Pemecahan Masalah:</p>
          <dl className="mt-2 space-y-2 text-sm">
            <div>
              <dt className="font-medium">Log Lainnya tidak terlihat</dt>
              <dd className="ml-4 text-muted-foreground">
                Konfirmasikan bahwa tindakan telah dilakukan di sistem (mis., menambah/menghapus kamar, memperbarui pengaturan) yang akan menghasilkan log. Jika tidak ada log yang muncul, periksa apakah akun pengguna Anda memiliki izin yang diperlukan untuk melihat log ini. Coba muat ulang halaman atau bersihkan cache browser untuk mengatasi masalah tampilan.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Tidak dapat mengakses Log Lainnya</dt>
              <dd className="ml-4 text-muted-foreground">
                Pastikan akun Anda memiliki izin yang sesuai untuk mengakses Log Lainnya dari Panel Kontrol. Pastikan Anda terhubung ke platform tanpa gangguan. Jika perlu, keluar dan masuk kembali untuk menyetel ulang sesi.
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </DocsLayout>
  );
}