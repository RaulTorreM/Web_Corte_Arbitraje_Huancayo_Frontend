import { Box, Container, Stack, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import PreliminaryNotice from "../../components/common/PreliminaryNotice";
import CtaBand from "../../components/common/CtaBand";
import { brand, fonts } from "../../theme/brand";
import { JPRD_SUBNAV } from "../../data/navigation";

export default function JprdDecisionesPage() {
  return (
    <>
      <PageMeta
        title="Decisiones JPRD (en implementación)"
        description="La JPRD de la Corte Superior de Arbitraje de Huancayo se encuentra en implementación y aún no registra decisiones publicables."
      />

      <PageHero
        kicker="Transparencia"
        title="Decisiones de la JPRD"
        subtitle="La JPRD se encuentra en implementación y no ha emitido decisiones publicables. Este espacio se habilitará cuando exista reglamento aprobado y decisiones efectivamente emitidas."
        crumbs={[
          { label: "JPRD", to: "/jprd" },
          { label: "Decisiones" },
        ]}
        image="/images/ARBITRAJE_IMG_02-03.jpg"
      />

      <SectionSubnav items={JPRD_SUBNAV} ariaLabel="Secciones de la JPRD" />

      <PreliminaryNotice
        title="Servicio en implementación"
        text="No existen decisiones de JPRD que puedan publicarse. La JPRD no cuenta aún con reglamento ni procedimiento aprobado, por lo que no se ha emitido ninguna decisión institucional."
      />

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.white }}>
        <Container>
          <SectionHeading
            kicker="Repositorio"
            title="Sin decisiones publicadas"
            subtitle="Cuando la JPRD entre en funcionamiento, publicaremos una selección de decisiones anonimizadas, previa disociación de datos personales y comerciales."
            centered
          />

          <Stack
            spacing={2}
            sx={{
              maxWidth: 720,
              mx: "auto",
              p: { xs: 3, md: 4 },
              alignItems: "center",
              textAlign: "center",
              backgroundColor: brand.paper,
              border: `1px solid ${brand.line}`,
              borderTop: `3px solid ${brand.gold}`,
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: brand.skySoft,
                color: brand.primary,
              }}
            >
              <HandshakeOutlinedIcon sx={{ fontSize: "1.8rem" }} />
            </Box>

            <Typography
              sx={{
                fontFamily: fonts.display,
                fontSize: "1.35rem",
                fontWeight: 600,
                color: brand.primaryDark,
              }}
            >
              Aún no hay decisiones que mostrar
            </Typography>

            <Typography sx={{ color: brand.muted, fontSize: "0.9rem", lineHeight: 1.75 }}>
              La JPRD no ha sido implementada. No se publican registros de
              demostración para no confundirlos con decisiones reales. El banco
              se activará con la aprobación del reglamento y la primera decisión
              emitida.
            </Typography>

            <Stack direction="row" spacing={1.2} sx={{ alignItems: "flex-start", textAlign: "left", pt: 1 }}>
              <InfoOutlinedIcon sx={{ color: brand.primary, fontSize: "1.05rem", mt: "2px" }} />
              <Typography sx={{ color: brand.primary, fontSize: "0.8rem", lineHeight: 1.6 }}>
                La publicación de una decisión no implicará la identificación de
                las partes ni la divulgación de información protegida.
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <CtaBand
        title="¿Tu contrato ya contempla una JPRD?"
        subtitle="La Corte puede orientarte sobre la propuesta de implementación y los pasos previstos. Aún no se reciben solicitudes para administrar juntas."
        primaryLabel="Consultar con la Corte"
        primaryTo="/contacto"
        secondaryLabel="Ver reglamento preliminar"
        secondaryTo="/jprd/reglamento"
      />
    </>
  );
}
