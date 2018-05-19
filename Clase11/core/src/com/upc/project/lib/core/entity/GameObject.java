package com.upc.project.lib.core.entity;

import com.badlogic.gdx.graphics.g2d.Sprite;
import com.badlogic.gdx.graphics.g2d.TextureAtlas;
import com.badlogic.gdx.graphics.g2d.TextureRegion;
import com.badlogic.gdx.math.Vector2;
import com.badlogic.gdx.utils.Array;
import com.badlogic.gdx.utils.Disposable;

/**
 * Created by Alumnos on 19/05/2018.
 */

public class GameObject extends Sprite implements Disposable {
    protected Vector2 position;
    protected float stateTime;
    protected boolean movingRight;
    protected TextureAtlas atlas;
    protected Array<TextureRegion> frames;
    public GameObject(Vector2 position){
        this.position = position;
    }
    public GameObject(TextureAtlas atlas, Vector2 position){
        this.position = position;
        this.atlas = atlas;
        frames = new Array<TextureRegion>();
        movingRight = false;
        stateTime = 0f;
        setPosition(position.x,position.y);
    }

    public GameObject(TextureRegion region, Vector2 position){
        super(region);
        this.position = position;
        frames = new Array<TextureRegion>();
        movingRight = false;
        stateTime = 0f;
        setPosition(position.x,position.y);
    }

    public void update(float dt){

    }

    @Override
    public void dispose() {

    }
}
