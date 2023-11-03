import {
  Fade,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import { Hero } from "../../../shared/types/hero";
import { memo } from "react";

interface Props {
  hero: Hero;
}
const HeroCardComponent = ({ hero }: Props) => {
  return (
    <Fade in={true}>
      <Card w="72" h="full" variant="elevated">
        <CardHeader>
          <Heading size="sm" textAlign="center">
            {hero.name}
          </Heading>
        </CardHeader>
        <CardBody>
          <Image
            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            alt={hero.name}
            boxSize="72"
          />
          <Stack mt="6" spacing="3">
            <Text>{hero.description || "No description available."}</Text>
          </Stack>
        </CardBody>
      </Card>
    </Fade>
  );
};

export const HeroCard = memo(HeroCardComponent);
