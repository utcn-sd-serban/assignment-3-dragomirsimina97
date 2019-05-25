package ro.utcn.spet.example.a1.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name ="question")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String text;
    private String author;
    private String creationDate;


    public Question(String title, String text,String author,String creationDate) {
        this.title = title;
        this.text = text;
        this.author=author;
        this.creationDate=creationDate;


    }
}
