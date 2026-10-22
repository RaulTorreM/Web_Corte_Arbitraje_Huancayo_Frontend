import { Box, Container, Stack, Typography } from "@mui/material";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import PreliminaryNotice from "../../components/common/PreliminaryNotice";
import CtaBand from "../../components/common/CtaBand";
import { brand, fonts } from "../../theme/brand";
import { JPRD_SUBNAV } from "../../data/navigation";

const PUBLICACION = [
  "Decisiones anonimizadas, previa disociación de datos personales y comerciales.",
  "Criterios de interpretación aplicados por el adjudicador.",
  "Información suficiente para comprender el caso sin identificar a las partes.",
  "Ningún registro de demostración que pueda confundirse con una decisión real.",
];

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
        imageAlt="Sede de la Corte Superior de Arbitraje en Huancayo"
      />

      <SectionSubnav items={JPRD_SUBNAV} ariaLabel="Secciones de la JPRD" />

      <PreliminaryNotice
        title="Servicio en implementación"
        text="No existen decisiones de JPRD que puedan publicarse. La JPRD no cuenta aún con reglamento ni procedimiento aprobado, por lo que no se ha emitido ninguna decisión institucional."
      />

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <SectionHeading
            kicker="Repositorio"
            title="Sin decisiones publicadas"
            subtitle="Cuando la JPRD entre en funcionamiento, publicaremos una selección de decisiones anonimizadas, previa disociación de datos personales y comerciales."
          />

          <Box sx={{ pt: 3, borderTop: `1px solid ${brand.lineStrong}`, maxWidth: 860 }}>
            <Typography
              sx={{
                fontFamily: fonts.display,
                color: brand.goldDeep,
                fontSize: { xs: "3rem", md: "4rem" },
                lineHeight: 1,
              }}
            >
              00
            </Typography>

            <Typography
              sx={{
                mt: 1.5,
                fontFamily: fonts.display,
                color: brand.primaryDeep,
                fontSize: { xs: "1.4rem", md: "1.7rem" },
                lineHeight: 1.3,
              }}
            >
              Aún no hay decisiones que mostrar
            </Typography>

            <Typography sx={{ mt: 1.2, color: brand.muted, fontSize: "0.92rem", lineHeight: 1.72 }}>
              La JPRD no ha sido implementada. No se publican registros de
              demostración para no confundirlos con decisiones reales. El banco
              se activará con la aprobación del reglamento y la primera decisión
              emitida.
            </Typography>
          </Box>

          <Stack sx={{ mt: 4, borderTop: `1px solid ${brand.line}` }}>
            {PUBLICACION.map((item) => (
              <Typography
                key={item}
                sx={{
                  py: 1.1,
                  borderBottom: `1px solid ${brand.line}`,
                  color: brand.muted,
                  fontSize: "0.83rem",
                  lineHeight: 1.62,
                }}
              >
                {item}
              </Typography>
            ))}
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
