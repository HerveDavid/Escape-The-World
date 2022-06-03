package com.escape_the_world.entities;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.fr.Alors;
import io.cucumber.java.fr.Et;
import io.cucumber.java.fr.Etantdonné;
import io.cucumber.java.fr.Quand;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class AvailabilityRoomStepdefs {

    private Room room;
    private ArrayList<Availability> availabilities;

    // Helper
    private AvailabilityStatus getFrToUkStatus(final String status) {
        if("disponible".equals(status)) {
            return AvailabilityStatus.AVAILABLE;
        } else {
            return AvailabilityStatus.UNAVAILABLE;
        }
    }

    @Etantdonné("une salle d'escape game")
    public void uneSalleDEscapeGame() {
        room = new Room();
    }

    @Et("disponible pour toute la journée")
    public void disponiblePourTouteLaJournée() {
        room.setAvailabilityAllJourney(true);
    }

    @Et("d'une durée de session de {long} min")
    public void dUneDuréeDeSessionDeMin(long duration) {
        room.setDuration(duration);
    }

    @Quand("je demande les disponibilités")
    public void jeDemandeLesDisponibilités() {
        availabilities = room.getAvailabilities();
    }

    @Alors("je reçois les disponibilités suivantes :")
    public void jeReçoisLesDisponibilitésSuivantes(DataTable table) {
        List<List<String>> rows = table.asLists(String.class);
        int index = 0;
        for (List<String> columns : rows) {
            Availability availability = availabilities.get(index);
            assertEquals(columns.get(0), availability.getSchedule().toString());
            assertEquals(getFrToUkStatus(columns.get(1)), availability.getStatus());
            index++;
        }
    }
}
