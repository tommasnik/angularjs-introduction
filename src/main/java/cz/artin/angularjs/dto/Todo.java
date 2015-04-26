package cz.artin.angularjs.dto;

/**
 * @author Tomas Masnik (tomas.masnik@artin.cz)
 */
public class Todo {
    private Long id;
    private String name;

    public Todo() {
    }

    public Todo(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
